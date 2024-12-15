let score = 0;
let usedItems = {};
let correctItems = [];
let incorrectItems = [];
let playedItems = [];
let itemAttempts = {};
let currentPage = 1;
let itemsPerPage = 4; // Valor padrão

let correctAnswers = {};

// Variáveis para conexão de pontos
let isDrawingLine = false;
let lineStartElement = null;
let currentLine = null;
let svg = null;
let startX = 0;
let startY = 0;

// Função para carregar os dados do arquivo JSON
function loadCorrectAnswers() {
    return fetch('correctAnswers.json')
        .then(response => response.json())
        .then(data => {
            correctAnswers = data;
            console.log('Dados de respostas corretas carregados.');
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}

window.onload = async function () {
    // Carrega os dados do JSON
    await loadCorrectAnswers();

    // Eventos para os botões
    document.getElementById('startGameBtn').addEventListener('click', loadSelectedCategory);
    document.getElementById('randomButton').addEventListener('click', loadRandomCategory);
    document.getElementById('generateItemsBtn').addEventListener('click', generateNewItems);
    document.getElementById('finishGameBtn').addEventListener('click', endGame);

    // Eventos para seleção de modo e categoria
    document.getElementById('modeSelect').addEventListener('change', loadSelectedCategory);
    document.getElementById('categorySelect').addEventListener('change', loadSelectedCategory);

    // Evento para seleção de itens por página
    document.getElementById('itemsPerPageSelect').addEventListener('change', updateItemsPerPage);

    // Obtém referência ao SVG
    svg = document.getElementById('connectionCanvas');

    // Eventos de mouse para desenhar linha
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Carrega a categoria e o modo selecionados inicialmente
    loadSelectedCategory();
};

// Atualiza o número de itens por página
function updateItemsPerPage() {
    itemsPerPage = parseInt(document.getElementById('itemsPerPageSelect').value);
    currentPage = 1; // Redefine para a primeira página
    loadVocabulary(document.getElementById('categorySelect').value);
}

//--------------------------------------------------------------------------------------------------------------
let voicesLoaded = false;

function loadVoices() {
    return new Promise((resolve) => {
        let voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            voicesLoaded = true;
            resolve(voices);
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                voicesLoaded = true;
                resolve(voices);
            };
        }
    });
}

function playSound(text) {
    if ('speechSynthesis' in window) {
        // Certifique-se de que as vozes foram carregadas
        loadVoices().then((voices) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;  
            utterance.pitch = 1.1; 
            utterance.volume = 1;  

            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            if (isSafari) {
                const safariFrenchVoice = voices.find(voice => voice.name === "Thomas" && voice.lang === 'fr-FR');
                if (safariFrenchVoice) {
                    utterance.voice = safariFrenchVoice;
                    utterance.lang = 'fr-FR';
                    console.log("Usando a voz Thomas no Safari.");
                } else {
                    console.warn("A voz Thomas não foi encontrada no Safari. Tentando voz francesa padrão.");
                    const anyFrench = voices.find(voice => voice.lang === 'fr-FR');
                    if (anyFrench) {
                        utterance.voice = anyFrench;
                        utterance.lang = 'fr-FR';
                    }
                }
            } else {
                // Tentar voz Google ou qualquer voz francesa
                let chromeFrenchVoice = voices.find(voice => voice.lang === 'fr-FR' && voice.name.includes('Google')) ||
                                        voices.find(voice => voice.lang === 'fr-FR');
                if (chromeFrenchVoice) {
                    utterance.voice = chromeFrenchVoice;
                    utterance.lang = 'fr-FR';
                    console.log("Voz francesa encontrada: " + chromeFrenchVoice.name);
                } else {
                    console.warn("Nenhuma voz francesa foi encontrada, usando voz padrão.");
                }
            }

            if (window.speechSynthesis.speaking) {
                console.log("Cancelando fala anterior...");
                window.speechSynthesis.cancel();
            }

            utterance.onend = () => {
                console.log("Fala concluída.");
            };

            window.speechSynthesis.speak(utterance);
        });
    } else {
        console.error("API de síntese de fala não suportada.");
    }
}

//-----------------------------------------------------------------------------------------

function generateNewItems() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const allItems = Object.keys(correctAnswers[selectedCategory]);
    const unusedItems = allItems.filter(item => !usedItems[selectedCategory]?.includes(item));

    if (unusedItems.length === 0) {
        document.getElementById("generateItemsBtn").disabled = true;
        return;
    }

    loadCategoryItems(selectedCategory);
}

function loadSelectedCategory() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const selectedMode = document.getElementById('modeSelect').value;

    // Redefinir a página atual ao mudar de categoria
    currentPage = 1;

    // Remove classes de modo anteriores
    const gameArea = document.getElementById('gameArea');
    gameArea.classList.remove('gameMode', 'vocabMode');

    if (selectedMode === 'game') {
        loadCategoryItems(selectedCategory, true);
        document.getElementById('generateItemsBtn').disabled = false;
        document.getElementById('finishGameBtn').disabled = true;
        document.getElementById('startGameBtn').disabled = false;
        document.getElementById('boxItemsPerPage').style.display = 'none';
        const pagination = document.getElementById('pagination');
        if (pagination) pagination.style.display = 'none';
        document.getElementById('generateItemsBtn').style.display = 'block';
        document.getElementById('finishGameBtn').style.display = 'block';
        document.getElementById('startGameBtn').style.display = 'block';
        gameArea.classList.add('gameMode');
    } else if (selectedMode === 'vocabulary') {
        loadVocabulary(selectedCategory);
        document.getElementById('generateItemsBtn').disabled = true;
        document.getElementById('finishGameBtn').style.display = 'none';
        document.getElementById('startGameBtn').style.display = 'none';
        document.getElementById('generateItemsBtn').style.display = 'none';
        document.getElementById('boxItemsPerPage').style.display = 'block';
        const pagination = document.getElementById('pagination');
        if (pagination) pagination.style.display = 'flex';
        gameArea.classList.add('vocabMode');
    }
}

function loadRandomCategory() {
    const categories = Object.keys(correctAnswers);
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];

    document.getElementById('categorySelect').value = randomCategory;
    loadSelectedCategory();
}

//---------------------------------------
function loadCategoryItems(category, resetScore = false) {
    document.getElementById("generateItemsBtn").disabled = false;
    document.getElementById('finishGameBtn').disabled = true;

    const existingResultsContainer = document.getElementById('vocabularyList');
    if (existingResultsContainer) {
        existingResultsContainer.parentNode.removeChild(existingResultsContainer);
    }

    document.getElementById("feedback").style.display = 'none';
    document.getElementById("feedback").innerText = '';

    if (resetScore) {
        score = 0;
        updateScore();
        usedItems[category] = [];
        playedItems = [];
        itemAttempts = {};
    }

    const allItems = Object.keys(correctAnswers[category]);
    const unusedItems = allItems.filter(item => !usedItems[category]?.includes(item));

    if (unusedItems.length === 0) {
        document.getElementById("generateItemsBtn").disabled = true;
        return;
    }

    const shuffledItems = shuffle(unusedItems);
    const items = shuffledItems.slice(0, 4);

    if (!usedItems[category]) {
        usedItems[category] = [];
    }
    usedItems[category] = usedItems[category].concat(items);

    items.forEach(item => {
        if (!playedItems.includes(item)) {
            playedItems.push(item);
        }
    });

    const professionsContainer = document.getElementById('professions');
    professionsContainer.innerHTML = '';
    professionsContainer.classList.remove('vocabMode');
    items.forEach(word => {
        const zone = document.createElement('div');
        zone.className = 'dropzone';
        zone.id = word;

        const wordText = document.createElement('span');
        wordText.innerText = word;

        const soundIcon = document.createElement('img');
        soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png";
        soundIcon.alt = "Ícone de som";
        soundIcon.style.cursor = 'pointer';
        soundIcon.style.width = '24px';
        soundIcon.style.height = '24px';
        soundIcon.addEventListener('click', function () {
            playSound(word);
        });

        // Ponto de conexão
        const connectionDot = document.createElement('div');
        connectionDot.className = 'connectionDot';
        connectionDot.addEventListener('mousedown', (e) => startConnection(e, zone, 'word'));

        zone.appendChild(wordText);
        zone.appendChild(soundIcon);
        zone.appendChild(connectionDot);

        professionsContainer.appendChild(zone);
    });

    const itemContainer = document.getElementById('items');
    itemContainer.innerHTML = '';
    const shuffledImages = shuffle(items.slice());
    shuffledImages.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable';
        div.style.backgroundImage = `url(${correctAnswers[category][item].imgUrl})`;
        div.id = correctAnswers[category][item].img;
        div.dataset.category = category;
        div.dataset.word = item;

        div.addEventListener('click', function () {
            const description = correctAnswers[category][item].desc;
            showFeedback(null, description, true);
        });

        // Ponto de conexão na imagem
        const connectionDot = document.createElement('div');
        connectionDot.className = 'connectionDot';
        connectionDot.addEventListener('mousedown', (e) => startConnection(e, div, 'image'));

        div.appendChild(connectionDot);
        itemContainer.appendChild(div);
    });
}

function loadVocabulary(category) {
    const professionsContainer = document.getElementById('professions');
    professionsContainer.innerHTML = '';
    const itemContainer = document.getElementById('items');
    itemContainer.innerHTML = '';
    document.getElementById("feedback").style.display = 'none';

    const existingPagination = document.getElementById('pagination');
    if (existingPagination) {
        existingPagination.parentNode.removeChild(existingPagination);
    }

    professionsContainer.classList.add('vocabMode');

    const allItems = Object.keys(correctAnswers[category]);
    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = allItems.slice(startIndex, endIndex);

    itemsToShow.forEach(word => {
        const item = correctAnswers[category][word];
        const vocabContainer = document.createElement('div');
        vocabContainer.className = 'vocabContainer';

        const wordDiv = document.createElement('div');
        wordDiv.className = 'vocabWord';
        wordDiv.id = word;

        const wordText = document.createElement('span');
        wordText.innerText = word;

        const soundIcon = document.createElement('img');
        soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png";
        soundIcon.alt = "Play Sound";
        soundIcon.style.cursor = 'pointer';
        soundIcon.style.width = '24px';
        soundIcon.style.height = '24px';
        soundIcon.addEventListener('click', function () {
            playSound(word);
        });

        wordDiv.appendChild(wordText);
        wordDiv.appendChild(soundIcon);

        const imageDiv = document.createElement('div');
        imageDiv.className = 'vocabImage';
        imageDiv.style.backgroundImage = `url(${item.imgUrl})`;
        imageDiv.style.cursor = 'pointer';
        imageDiv.draggable = false;

        imageDiv.addEventListener('click', function () {
            const description = item.desc;
            showFeedback(null, description, true);
        });

        vocabContainer.appendChild(wordDiv);
        vocabContainer.appendChild(imageDiv);
        professionsContainer.appendChild(vocabContainer);
    });

    addPaginationButtons(totalPages);
}

function addPaginationButtons(totalPages) {
    const existingPagination = document.getElementById('pagination');
    if (existingPagination) {
        existingPagination.parentNode.removeChild(existingPagination);
    }

    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination';

    const prevButton = document.createElement('button');
    prevButton.innerText = 'Précédent';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function () {
        currentPage--;
        loadVocabulary(document.getElementById('categorySelect').value);
    });

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Suivant';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
        currentPage++;
        loadVocabulary(document.getElementById('categorySelect').value);
    });

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);

    document.getElementById('gameArea').appendChild(paginationContainer);
}

//----------------------------------------------------
// Funções para a lógica de conexão (linhas)

function startConnection(event, element, type) {
    event.preventDefault();
    isDrawingLine = true;
    lineStartElement = element;

    const gameAreaRect = document.getElementById('gameArea').getBoundingClientRect();
const rect = element.getBoundingClientRect();

// Calcula a posição do elemento relativo ao #gameArea
const elementX = (rect.left - gameAreaRect.left) + rect.width / 2;
const elementY = (rect.top - gameAreaRect.top) + rect.height / 2;

startX = elementX;
startY = elementY;

    

    currentLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
currentLine.setAttribute('x1', startX);
currentLine.setAttribute('y1', startY);
currentLine.setAttribute('x2', startX);
currentLine.setAttribute('y2', startY);
currentLine.setAttribute('stroke', 'blue');
currentLine.setAttribute('stroke-width', '4');
currentLine.setAttribute('pointer-events', 'none');
svg.appendChild(currentLine);

}

function handleMouseMove(event) {
    if (!isDrawingLine || !currentLine) return;

    const gameAreaRect = document.getElementById('gameArea').getBoundingClientRect();
    const x = event.clientX - gameAreaRect.left;
    const y = event.clientY - gameAreaRect.top;

    currentLine.setAttribute('x2', x);
    currentLine.setAttribute('y2', y);
}


function handleMouseUp(event) {
    if (!isDrawingLine) return;
    isDrawingLine = false;

    // Verifica o elemento sob o mouse no momento do mouseup
    const targetElement = document.elementFromPoint(event.clientX, event.clientY);

    if (!targetElement || !lineStartElement) {
        cleanupLine();
        return;
    }

    // Precisamos identificar se soltamos sobre um connectionDot de outro elemento correto
    let endElement = targetElement.closest('.draggable') || targetElement.closest('.dropzone');
    if (!endElement) {
        // Não soltou em um elemento válido
        cleanupLine();
        showFeedback(false, "Incorrect! Essayez à nouveau.");
        return;
    }

    const startWord = lineStartElement.dataset?.word || lineStartElement.id; 
    const endWord = endElement.dataset?.word || endElement.id;

    const selectedCategory = document.getElementById('categorySelect').value;
    const startIsWordBox = lineStartElement.classList.contains('dropzone');
    const endIsWordBox = endElement.classList.contains('dropzone');

    // Queremos ligar uma palavra a uma imagem. Se ambos forem palavras ou ambos forem imagens, não faz sentido.
    if ((startIsWordBox && endIsWordBox) || (!startIsWordBox && !endIsWordBox)) {
        cleanupLine();
        showFeedback(false, "Incorrect! Essayez à nouveau.");
        return;
    }

    // Identifica qual é a palavra e qual é a imagem
    let word, draggedWord;
    if (startIsWordBox) {
        word = startWord;
        draggedWord = endWord;
    } else {
        word = endWord;
        draggedWord = startWord;
    }

    // Check correctness
    const correctItem = correctAnswers[selectedCategory][word];

    itemAttempts[draggedWord] = itemAttempts[draggedWord] || {};

    if (word === draggedWord) {
        // Correto
        score += 10;
        updateScore();
        const message = "Correct! " + correctItem.name + " " + correctItem.desc;
        showFeedback(true, message);

        // Atualiza status para correto
        itemAttempts[draggedWord].correct = true;

        // Mover o item visualmente (caso seja imagem ligando à palavra)
        if (!startIsWordBox) {
            // start é imagem e end é palavra
            endElement.appendChild(lineStartElement);
            lineStartElement.classList.add('correct');
        } else {
            // start é palavra e end é imagem
            lineStartElement.appendChild(endElement);
            endElement.classList.add('correct');
        }

    } else {
        // Incorreto
        score -= 5;
        updateScore();
        showFeedback(false, "Incorrect! Essayez à nouveau.");

        // Atualiza status
        if (!itemAttempts[draggedWord].correct) {
            itemAttempts[draggedWord].correct = false;
        }
    }

    checkGameEnd();
    cleanupLine();
}

function cleanupLine() {
    if (currentLine && svg.contains(currentLine)) {
        svg.removeChild(currentLine);
    }
    currentLine = null;
    lineStartElement = null;
    isDrawingLine = false;
}

function allowDrop(event) {
    event.preventDefault();
}

// Arrastar/soltar originais se ainda forem usados
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById('finishGameBtn').disabled = false;
}

function drop(event) {
    event.preventDefault();
    // Mantenha se quiser o modo antigo, mas agora a mecânica principal é via linhas
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function showFeedback(isCorrect, message, isDescription = false) {
    const feedback = document.getElementById("feedback");

    if (message && message.trim() !== '') {
        feedback.style.display = 'block';

        if (isDescription) {
            feedback.style.color = "#333333";
        } else {
            feedback.style.color = isCorrect ? "#4CAF50" : "#ff8a80";
        }

        feedback.innerHTML = '';
        const feedbackText = document.createElement('span');
        feedbackText.innerText = message;

        const soundIcon = document.createElement('img');
        soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png";
        soundIcon.alt = "Ícone de som";
        soundIcon.style.cursor = 'pointer';
        soundIcon.style.width = '32px';
        soundIcon.style.height = '32px';

        soundIcon.addEventListener('click', function () {
            playSound(message);
        });

        feedback.appendChild(feedbackText);
        feedback.appendChild(soundIcon);

    } else {
        feedback.style.display = 'none';
        feedback.innerText = '';
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkGameEnd() {
    const selectedCategory = document.getElementById('categorySelect').value;
    const allItems = Object.keys(correctAnswers[selectedCategory]);

    if (usedItems[selectedCategory] && usedItems[selectedCategory].length >= allItems.length) {
        document.getElementById("generateItemsBtn").disabled = true;
    }
}

function endGame() {
    const feedbackDiv = document.getElementById("feedback");
    const totalAttempts = Object.keys(itemAttempts).length;
    const correctPlacements = Object.values(itemAttempts).filter(item => item.correct).length;

    if (totalAttempts === 0) {
        feedbackDiv.innerText = "Vous n'avez pas encore fait de tentatives.";
        return;
    }

    feedbackDiv.innerText = `Jeu terminé! Vous avez correctement placé ${correctPlacements} sur ${totalAttempts} élément(s).`;

    const vocabularyList = document.createElement('div');
    vocabularyList.id = 'vocabularyList';
    vocabularyList.innerHTML = '<h3 id="titulo2">Liste de vocabulaire:</h3>';

    const vocabOl = document.createElement('ol');
    vocabOl.className = "vocabularyList";

    const selectedCategory = document.getElementById('categorySelect').value;

    playedItems.forEach(itemKey => {
        const item = correctAnswers[selectedCategory][itemKey];
        const li = document.createElement('li');
        li.className = "listaVoc";
        li.innerText = `${item.name} ${item.desc}`;
        vocabOl.appendChild(li);
    });

    vocabularyList.appendChild(vocabOl);
    document.body.appendChild(vocabularyList);

    document.getElementById('finishGameBtn').disabled = true;
}
