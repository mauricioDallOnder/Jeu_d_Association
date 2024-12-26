let score = 0;
let usedItems = {};
let correctItems = [];
let incorrectItems = [];
let playedItems = [];
let itemAttempts = {};
let currentPage = 1;
let itemsPerPage = 4; // Valor padrão

let correctAnswers = {};

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
            utterance.rate = 0.9;  // Fala um pouco mais lenta
            utterance.pitch = 1.1; // Aumenta levemente o tom
            utterance.volume = 1;  // Volume máximo

            // Verifica se é Safari no iOS
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            if (isSafari) {
                const safariFrenchVoice = voices.find(voice => voice.name === "Thomas" && voice.lang === 'fr-FR');
                if (safariFrenchVoice) {
                    utterance.voice = safariFrenchVoice;
                    utterance.lang = 'fr-FR';
                    console.log("Usando a voz Thomas no Safari.");
                } else {
                    console.warn("A voz Thomas não foi encontrada no Safari.");
                }
            } else {
                const chromeFrenchVoice = voices.find(voice => voice.lang === 'fr-FR' && voice.name.includes('Google')) ||
                    voices.find(voice => voice.lang === 'fr-FR');
                if (chromeFrenchVoice) {
                    utterance.voice = chromeFrenchVoice;
                    utterance.lang = 'fr-FR';
                    console.log("Usando a voz Google no Chrome.");
                } else {
                    console.warn("Nenhuma voz francesa foi encontrada.");
                }
            }

            // Cancelar qualquer fala em andamento antes de iniciar
            if (window.speechSynthesis.speaking) {
                console.log("Cancelando fala anterior...");
                window.speechSynthesis.cancel();
            }

            // Adicionar evento de finalização para depuração
            utterance.onend = () => {
                console.log("Fala concluída.");
            };

            // Iniciar a fala
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
        // Habilitar botões relacionados ao jogo
        document.getElementById('generateItemsBtn').disabled = false;
        document.getElementById('finishGameBtn').disabled = true;
        document.getElementById('startGameBtn').disabled = false;
        document.getElementById('boxItemsPerPage').style.display = 'none';
        document.getElementById('pagination').style.display = 'none';


        // Exibir botões relacionados ao jogo
        document.getElementById('generateItemsBtn').style.display = 'block';
        document.getElementById('finishGameBtn').style.display = 'block';
        document.getElementById('startGameBtn').style.display = 'block';


        // Adiciona a classe gameMode
        gameArea.classList.add('gameMode');
    } else if (selectedMode === 'vocabulary') {
        loadVocabulary(selectedCategory);
        // Desabilitar botões relacionados ao jogo
        document.getElementById('generateItemsBtn').disabled = true;
        document.getElementById('finishGameBtn').style.display = 'none';
        document.getElementById('startGameBtn').style.display = 'none';
        document.getElementById('generateItemsBtn').style.display = 'none';
        document.getElementById('boxItemsPerPage').style.display = 'block';
        document.getElementById('pagination').style.display = 'flex';

        // Adiciona a classe vocabMode
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
    // Reabilita o botão "Generate Items"
    document.getElementById("generateItemsBtn").disabled = false;

    // Desabilita o botão 'Terminer le Jeu' no início de um novo jogo
    document.getElementById('finishGameBtn').disabled = true;

    // Remove o contêiner de resultados se existir
    const existingResultsContainer = document.getElementById('vocabularyList');
    if (existingResultsContainer) {
        existingResultsContainer.parentNode.removeChild(existingResultsContainer);
    }

    // Oculta a div de feedback ao carregar novos itens
    document.getElementById("feedback").style.display = 'none';
    document.getElementById("feedback").innerText = '';

    // Reinicia o placar e as tentativas, se necessário
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
        // Não há mais itens não usados
        document.getElementById("generateItemsBtn").disabled = true;
        return;
    }

    const shuffledItems = shuffle(unusedItems);
    const items = shuffledItems.slice(0, 4);

    if (!usedItems[category]) {
        usedItems[category] = [];
    }
    usedItems[category] = usedItems[category].concat(items);

    // Adiciona os itens ao array de itens jogados, evitando duplicatas
    items.forEach(item => {
        if (!playedItems.includes(item)) {
            playedItems.push(item);
        }
    });

    // Limpa e cria as zonas de drop dinamicamente
    const professionsContainer = document.getElementById('professions');
    professionsContainer.innerHTML = '';
    professionsContainer.classList.remove('vocabMode'); // Remove a classe vocabMode
    items.forEach(word => {
        const zone = document.createElement('div');
        zone.className = 'dropzone';
        zone.id = word;
        zone.ondrop = drop;
        zone.ondragover = allowDrop;

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

        zone.appendChild(wordText);
        zone.appendChild(soundIcon);
        professionsContainer.appendChild(zone);
    });

    // Cria os itens arrastáveis dinamicamente
    const itemContainer = document.getElementById('items');
    itemContainer.innerHTML = '';
    const shuffledImages = shuffle(items.slice());
    shuffledImages.forEach(item => {
        const div = document.createElement('div');
        div.className = 'draggable';
        div.draggable = true;
        div.style.backgroundImage = `url(${correctAnswers[category][item].imgUrl})`;
        div.ondragstart = drag;
        div.id = correctAnswers[category][item].img;
        div.dataset.category = category;
        div.dataset.word = item;

        // Adicionar evento de clique para mostrar a descrição
        div.addEventListener('click', function () {
            const description = correctAnswers[category][item].desc;
            showFeedback(null, description, true);
        });

        itemContainer.appendChild(div);
    });
}

function loadVocabulary(category) {
    // Limpa o conteúdo existente
    const professionsContainer = document.getElementById('professions');
    professionsContainer.innerHTML = '';
    const itemContainer = document.getElementById('items');
    itemContainer.innerHTML = '';
    document.getElementById("feedback").style.display = 'none';

    // Remove o contêiner de paginação se existir
    const existingPagination = document.getElementById('pagination');
    if (existingPagination) {
        existingPagination.parentNode.removeChild(existingPagination);
    }

    // Adiciona a classe vocabMode ao contêiner
    professionsContainer.classList.add('vocabMode');

    // Obter todos os itens na categoria selecionada
    const allItems = Object.keys(correctAnswers[category]);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    // Limitar o número da página atual entre 1 e totalPages
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    // Determinar os itens para a página atual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = allItems.slice(startIndex, endIndex);

    // Exibir cada palavra com sua imagem correspondente
    itemsToShow.forEach(word => {
        const item = correctAnswers[category][word];

        // Cria um contêiner para a palavra e a imagem
        const vocabContainer = document.createElement('div');
        vocabContainer.className = 'vocabContainer';

        // Cria a palavra (usando a classe .vocabWord)
        const wordDiv = document.createElement('div');
        wordDiv.className = 'vocabWord';
        wordDiv.id = word;

        const wordText = document.createElement('span');
        wordText.innerText = word;

        // Ícone de som para a palavra
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

        // Cria a imagem (usando a classe .vocabImage)
        const imageDiv = document.createElement('div');
        imageDiv.className = 'vocabImage';
        imageDiv.style.backgroundImage = `url(${item.imgUrl})`;
        imageDiv.style.cursor = 'pointer';
        imageDiv.draggable = false;

        // Mostrar descrição ao clicar na imagem
        imageDiv.addEventListener('click', function () {
            const description = item.desc;
            showFeedback(null, description, true);
        });

        // Adiciona a palavra e a imagem ao contêiner
        vocabContainer.appendChild(wordDiv);
        vocabContainer.appendChild(imageDiv);

        // Adiciona o contêiner ao elemento principal
        professionsContainer.appendChild(vocabContainer);
    });

    // Adicionar botões de navegação
    addPaginationButtons(totalPages);
}

function addPaginationButtons(totalPages) {
    // Remover botões de paginação existentes
    const existingPagination = document.getElementById('pagination');
    if (existingPagination) {
        existingPagination.parentNode.removeChild(existingPagination);
    }

    const paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination';

    // Botão Anterior
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Précédent';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', function () {
        currentPage--;
        loadVocabulary(document.getElementById('categorySelect').value);
    });

    // Botão Próximo
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Suivant';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', function () {
        currentPage++;
        loadVocabulary(document.getElementById('categorySelect').value);
    });

    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(nextButton);

    // Adicionar o contêiner de paginação ao DOM
    document.getElementById('gameArea').appendChild(paginationContainer);
}

//----------------------------------------------------
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);

    // Habilita o botão 'Terminer le Jeu' quando o usuário começa a arrastar
    document.getElementById('finishGameBtn').disabled = false;
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text"); // ID do elemento arrastado
    const dropzoneId = event.target.id; // Palavra correspondente à zona de drop

    const selectedCategory = document.getElementById('categorySelect').value;

    // Item correto para esta zona de drop
    const correctItem = correctAnswers[selectedCategory][dropzoneId];
    const correctName = correctItem.name;
    const correctDesc = correctItem.desc;

    // Obter o elemento arrastado
    const draggedElement = document.getElementById(data);
    const draggedWord = draggedElement.dataset.word; // Palavra do item arrastado
    const draggedItem = correctAnswers[selectedCategory][draggedWord];
    const draggedName = draggedItem.name;
    const draggedDesc = draggedItem.desc;

    // Inicializa o status do item no objeto itemAttempts
    itemAttempts[draggedWord] = itemAttempts[draggedWord] || {};

    if (dropzoneId === draggedWord) {
        // Correspondência correta
        document.getElementById(data).classList.add('correct');
        event.target.appendChild(document.getElementById(data));
        score += 10;
        updateScore();

        const message = "Correct! " + correctName + " " + correctDesc;
        showFeedback(true, message);

        // Atualiza o status para correto
        itemAttempts[draggedWord].correct = true;
    } else {
        // Correspondência incorreta
        document.getElementById(data).classList.add('wrong');
        score -= 5;
        updateScore();
        showFeedback(false, "Incorrect! Essayez à nouveau.");

        // Atualiza o status para incorreto somente se ainda não estiver correto
        if (!itemAttempts[draggedWord].correct) {
            itemAttempts[draggedWord].correct = false;
        }
    }

    // Verifica se todos os itens foram usados
    checkGameEnd();
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function showFeedback(isCorrect, message, isDescription = false) {
    const feedback = document.getElementById("feedback");

    if (message && message.trim() !== '') {
        feedback.style.display = 'block'; // Mostra a div de feedback

        if (isDescription) {
            feedback.style.color = "#333333";
        } else {
            feedback.style.color = isCorrect ? "#4CAF50" : "#ff8a80";
        }

        // Limpa o conteúdo anterior
        feedback.innerHTML = '';

        // Cria o texto do feedback
        const feedbackText = document.createElement('span');
        feedbackText.innerText = message;

        // Cria o ícone de som
        const soundIcon = document.createElement('img');
        soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png";
        soundIcon.alt = "Ícone de som";
        soundIcon.style.cursor = 'pointer';
        soundIcon.style.width = '32px';
        soundIcon.style.height = '32px';

        // Adiciona evento de clique ao ícone de som para tocar o feedback
        soundIcon.addEventListener('click', function () {
            playSound(message);
        });

        // Adiciona o texto e o ícone ao feedback
        feedback.appendChild(feedbackText);
        feedback.appendChild(soundIcon);

    } else {
        feedback.style.display = 'none'; // Oculta a div de feedback
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

    if (usedItems[selectedCategory].length >= allItems.length) {
        // Todos os itens foram usados
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

    // Criar o contêiner principal para a lista de vocabulário
    const vocabularyList = document.createElement('div');
    vocabularyList.id = 'vocabularyList';
    vocabularyList.innerHTML = '<h3 id="titulo2">Liste de vocabulaire:</h3>';

    // Cria a lista ordenada
    const vocabOl = document.createElement('ol');
    vocabOl.className = "vocabularyList";

    // Obter a categoria selecionada
    const selectedCategory = document.getElementById('categorySelect').value;

    // Loop através dos itens jogados e cria os elementos de lista
    playedItems.forEach(itemKey => {
        const item = correctAnswers[selectedCategory][itemKey];
        const li = document.createElement('li');
        li.className = "listaVoc";
        li.innerText = `${item.name} ${item.desc}`;
        vocabOl.appendChild(li);
    });

    // Adiciona a lista ao contêiner principal
    vocabularyList.appendChild(vocabOl);

    // Adiciona o contêiner de vocabulário ao corpo do documento
    document.body.appendChild(vocabularyList);

    // Desabilita o botão 'Terminer le Jeu' após o término
    document.getElementById('finishGameBtn').disabled = true;
}