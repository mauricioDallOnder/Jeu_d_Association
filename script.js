 let score = 0;
        let usedItems = {};
        let correctItems = [];
        let incorrectItems = [];
        let playedItems = [];
        let itemAttempts = {};
        const correctAnswers = {
            lieux_de_la_ville: {
                "le stationnement": {
                    name: "Un stationnement / parc de stationnement",
                    img: "imgStationnement",
                    imgUrl: "./ville/stationnement.png",
                    desc: "est un endroit où l'on gare des voitures."
                },
                "l' immeuble de bureaux": {
                    name: "Un immeuble de bureaux",
                    img: "imgImmeubleDeBureaux",
                    imgUrl: "./ville/immeuble_de_bureaux.png",
                    desc: "est un bâtiment où travaillent des employés de bureaux."
                },
                "l' hotel": {
                    name: "Un hôtel",
                    img: "imgHotel",
                    imgUrl: "./ville/hotel.png",
                    desc: "est un établissement où l'on peut loger temporairement."
                },
                "la mairie": {
                    name: "la mairie",
                    img: "imgPrefecture",
                    imgUrl: "./ville/prefecture.png",
                    desc: "est l'administration publique qui gère une commune ou une ville en France"
                },
                "la banque": {
                    name: "Une banque",
                    img: "imgBanque",
                    imgUrl: "./ville/banque.png",
                    desc: "est un établissement où l'on dépose et retire de l'argent."
                },
                "le poste de police": {
                    name: "Un poste de police",
                    img: "imgPosteDePolice",
                    imgUrl: "./ville/poste_de_police.png",
                    desc: "est un bâtiment où travaillent les policiers."
                },
                "la gare d autobus": {
                    name: "Une gare d'autobus",
                    img: "imgGareAutobus",
                    imgUrl: "./ville/gare_autobus.png",
                    desc: "est un endroit où les bus arrivent et partent."
                },
                "l' hopital": {
                    name: "Un hôpital",
                    img: "imgHopital",
                    imgUrl: "./ville/hopital.png",
                    desc: "est un établissement où l'on soigne les malades et les blessés."
                },
                "la station service": {
                    name: "Une station-service",
                    img: "imgStationService",
                    imgUrl: "./ville/station_service.png",
                    desc: "est un endroit où l'on achète du carburant pour les véhicules."
                },
                "la poste": {
                    name: "Une poste",
                    img: "imgPoste",
                    imgUrl: "./ville/poste.png",
                    desc: "est un bureau où l'on envoie et reçoit du courrier."
                },
                "la caserne de pompiers": {
                    name: "Une caserne de pompiers",
                    img: "imgCasernePompiers",
                    imgUrl: "./ville/caserne_pompiers.png",
                    desc: "est un endroit où sont stationnés les pompiers."
                },
                "le tribunal": {
                    name: "Un tribunal / palais de justice",
                    img: "imgTribunal",
                    imgUrl: "./ville/tribunal.png",
                    desc: "est un bâtiment où se déroulent les procès."
                },
                "le restaurant": {
                    name: "Un restaurant",
                    img: "imgRestaurant",
                    imgUrl: "./ville/restaurant.png",
                    desc: "est un endroit où l'on va manger des repas."
                },
                "la bibliotheque": {
                    name: "Une bibliothèque",
                    img: "imgBibliotheque",
                    imgUrl: "./ville/bibliotheque.png",
                    desc: "est un endroit où l'on emprunte des livres."
                },
                "le stade": {
                    name: "Un stade",
                    img: "imgStade",
                    imgUrl: "./ville/stade.png",
                    desc: "est un lieu où l'on regarde des événements sportifs."
                },
                "l' ecole": {
                    name: "Une école",
                    img: "imgEcole",
                    imgUrl: "./ville/ecole.png",
                    desc: "est un établissement où les enfants vont pour apprendre."
                },
                "le chantier de construction": {
                    name: "Un chantier de construction",
                    img: "imgChantierDeConstruction",
                    imgUrl: "./ville/chantier_de_construction.png",
                    desc: "est un lieu où l'on construit des bâtiments ou des infrastructures."
                },
                "le cinema": {
                    name: "Un cinéma",
                    img: "imgCinema",
                    imgUrl: "./ville/cinema.png",
                    desc: "est un endroit où l'on regarde des films."
                },
                "la salle de sport": {
                    name: "la salle de sport",
                    img: "imgGym",
                    imgUrl: "./ville/gym.png",
                    desc: "est un lieu où l'on pratique des activités physiques."
                },
                "l' usine": {
                    name: "Une usine",
                    img: "imgUsine",
                    imgUrl: "./ville/usine.png",
                    desc: "est un bâtiment où l'on fabrique des produits."
                },
                "le centre commercial": {
                    name: "Un centre commercial",
                    img: "imgCentreCommercial",
                    imgUrl: "./ville/centre_commercial.png",
                    desc: "est un grand complexe où l'on trouve de nombreux magasins."
                },
                "le cafe restaurant": {
                    name: "Un café-restaurant",
                    img: "imgCafeRestaurant",
                    imgUrl: "./ville/cafe_restaurant.png",
                    desc: "est un endroit où l'on peut prendre un café ou un repas léger."
                },
                "Une Concession automobile": {
                    name: "Une Concession automobile",
                    img: "imgConcessionAutomobiles",
                    imgUrl: "./ville/concession_automobiles.png",
                    desc: "est un endroit où l'on vend des voitures."
                },
                "le gratte ciel": {
                    name: "Un gratte-ciel / tour",
                    img: "imgGratteCiel",
                    imgUrl: "./ville/gratte_ciel.png",
                    desc: "est un très haut bâtiment que l'on trouve souvent dans les grandes villes."
                },
                "le centre universitaire premier cycle": {
                    name: "Un centre universitaire de premier cycle",
                    img: "imgCentreUniversitaire",
                    imgUrl: "./ville/universitaire.png",
                    desc: "est un établissement où l'on suit des études postsecondaires."
                },
                "Papeterie": {
                    name: "Une papeterie",
                    img: "imgpapeterie",
                    imgUrl: "./ville/papeterie.png",
                    desc: "est un endroit où l'on achète des articles de bureau."
                },
                "l' eglise": {
                    name: "Une église",
                    img: "imgEglise",
                    imgUrl: "./ville/eglise.png",
                    desc: "est un lieu de culte pour les chrétiens."
                },
                "le supermarche": {
                    name: "Un supermarché",
                    img: "imgSupermarche",
                    imgUrl: "./ville/supermarche.png",
                    desc: "est un grand magasin où l'on achète de la nourriture et d'autres produits."
                },
                "le cimetiere": {
                    name: "Un cimetière",
                    img: "imgCimetiere",
                    imgUrl: "./ville/cimetiere.png",
                    desc: "est un endroit où l'on enterre les morts."
                },
                "la boulangerie": {
                    name: "Une boulangerie",
                    img: "imgBoulangerie",
                    imgUrl: "./ville/boulangerie.png",
                    desc: "est un magasin où l'on vend du pain et des pâtisseries."
                },
                "le theatre": {
                    name: "Un théâtre",
                    img: "imgTheatre",
                    imgUrl: "./ville/theatre.png",
                    desc: "est un lieu où l'on assiste à des spectacles de théâtre."
                },
                "Magasin de bricolage": {
                    name: "Un magasin de bricolage",
                    img: "imgMagasinAmeliorationHabitat",
                    imgUrl: "./ville/bricolage.png",
                    desc: "est un endroit où l'on achète des articles pour rénover sa maison."
                },
                "la laverie": {
                    name: "Une laverie",
                    img: "imgLaverie",
                    imgUrl: "./ville/laverie.png",
                    desc: "est un endroit où l'on lave son linge."
                },
                "la pharmacie": {
                    name: "Une pharmacie",
                    img: "imgPharmacie",
                    imgUrl: "./ville/pharmacie.png",
                    desc: "est un endroit où l'on achète des médicaments."
                },
                "le restaurant minute": {
                    name: "Un restaurant minute",
                    img: "imgRestaurantMinute",
                    imgUrl: "./ville/le_restaurant_minute.png",
                    desc: "est un établissement de restauration rapide."
                },
                "l' espace de stationnement": {
                    name: "Un espace de stationnement",
                    img: "imgEspaceStationnement",
                    imgUrl: "./ville/espace_de_stationnement.png",
                    desc: "est un emplacement pour garer une voiture."
                },
                "le service au volant": {
                    name: "Un service au volant / service à l'auto",
                    img: "imgServiceAuVolant",
                    imgUrl: "./ville/service_au_volant.png",
                    desc: "est un service où l'on est servi en restant dans son véhicule."
                },
                "le kiosque a journaux": {
                    name: "Un kiosque à journaux",
                    img: "imgKiosqueJournaux",
                    imgUrl: "./ville/kiosque_a_journaux.png",
                    desc: "est un petit stand où l'on vend des journaux et magazines."
                },
                "La épicerie": {
                    name: "Une épicerie",
                    img: "imgépicerie",
                    imgUrl: "./ville/epicerie.png",
                    desc: "est un commerce de proximité qui vend principalement des produits alimentaires de base ainsi que divers articles de la vie courant."
                },
                "la ville": {
                    name: "La ville",
                    img: "imgVille",
                    imgUrl: "./lieux/city.png",
                    desc: "est un grand centre urbain."
                },
                "la banlieue": {
                    name: "La banlieue",
                    img: "imgBanlieue",
                    imgUrl: "./lieux/suburbio.png",
                    desc: "se trouve à la périphérie de la ville."
                },
                "la campagne": {
                    name: "La campagne",
                    img: "imgFerme",
                    imgUrl: "./lieux/fazenda.png",
                    desc: "est un lieu rural où l'on pratique l'agriculture."
                },
                "le village": {
                    name: "Un village",
                    img: "imgVillage",
                    imgUrl: "./lieux/unepetiteville.png",
                    desc: "est un endroit avec peu de maisons et des rues tranquilles."
                },
                "Agence immobilière": {
                    name: "Une agence immobilière",
                    img: "imgimmobilier",
                    imgUrl: "./ville/immobilier.png",
                    desc: "est une entreprise spécialisée dans la mise en relation entre les propriétaires et les locataires"
                },


            },



            problemes_de_sante: {
                "avoir mal de tête": {
                    name: "Un mal de tête",
                    img: "imgMalDeTete",
                    imgUrl: "./sante/mal_de_tete.png",
                    desc: "est une douleur à la tête ou au crâne."
                },
                "avoir mal de gorge": {
                    name: "Un mal de gorge",
                    img: "imgMalDeGorge",
                    imgUrl: "./sante/mal_de_gorge.png",
                    desc: "est une douleur ou irritation de la gorge."
                },
                "avoir toux": {
                    name: "Une toux",
                    img: "imgTousser",
                    imgUrl: "./sante/tousser.png",
                    desc: "est une action réflexe pour expulser l'air des poumons."
                },
                "avoir mal de dents": {
                    name: "Un mal de dents",
                    img: "imgMalDeDents",
                    imgUrl: "./sante/mal_de_dents.png",
                    desc: "est une douleur dans une ou plusieurs dents."
                },
                "avoir congestion nasale": {
                    name: "Une congestion nasale",
                    img: "imgCongestionNasale",
                    imgUrl: "./sante/congestion_nasale.png",
                    desc: "est une obstruction ou un blocage dans les voies nasales."
                },
                "avoir éternuement": {
                    name: "Un éternuement",
                    img: "imgEternuer",
                    imgUrl: "./sante/eternuer.png",
                    desc: "est une expulsion brusque d'air par le nez et la bouche."
                },
                "avoir mal d'oreille": {
                    name: "Un mal d'oreille",
                    img: "imgMalDOreille",
                    imgUrl: "./sante/mal_d_oreille.png",
                    desc: "est une douleur ressentie dans l'oreille."
                },
                "avoir fièvre": {
                    name: "Une fièvre / température",
                    img: "imgFievre",
                    imgUrl: "./sante/fievre.png",
                    desc: "est une élévation anormale de la température du corps."
                },
                "avoir étourdi": {
                    name: "Se sentir étourdi",
                    img: "imgEtourdi",
                    imgUrl: "./sante/etourdi.png",
                    desc: "est une sensation de vertige ou d'instabilité."
                },
                "avoir mal d'estomac": {
                    name: "Un mal d'estomac",
                    img: "imgMalDEstomac",
                    imgUrl: "./sante/mal_d_estomac.png",
                    desc: "est une douleur ou gêne dans l'abdomen."
                },
                "avoir frissons": {
                    name: "Des frissons",
                    img: "imgFrissons",
                    imgUrl: "./sante/frissons.png",
                    desc: "sont des tremblements involontaires causés par le froid ou la fièvre."
                },
                "avoir nausée": {
                    name: "Avoir la nausée",
                    img: "imgNausee",
                    imgUrl: "./sante/nausée.png",
                    desc: "est une envie de vomir."
                },
                "avoir mal de dos": {
                    name: "Un mal de dos",
                    img: "imgMalDeDos",
                    imgUrl: "./sante/mal_de_dos.png",
                    desc: "est une douleur ressentie dans la région lombaire ou dorsale."
                },
                "avoir éruption cutanée": {
                    name: "Une éruption cutanée",
                    img: "imgEruptionCutanee",
                    imgUrl: "./sante/eruption_cutannee.png",
                    desc: "est une irritation ou rougeur de la peau."
                },
                "avoir vomir": {
                    name: "Vomir",
                    img: "imgVomir",
                    imgUrl: "./sante/Vomir.png",
                    desc: "est l'expulsion forcée du contenu de l'estomac par la bouche."
                },
                "avoir piqûre d'insecte": {
                    name: "Une piqûre d'insecte",
                    img: "imgPiqureInsecte",
                    imgUrl: "./sante/piqure_d_insecte.jpeg",
                    desc: "est une réaction de la peau après avoir été piqué par un insecte."
                },
                "avoir coupure": {
                    name: "Une coupure",
                    img: "imgCoupure",
                    imgUrl: "./sante/coupure.png",
                    desc: "est une blessure de la peau due à une entaille."
                },
                "avoir ampoule": {
                    name: "Une ampoule",
                    img: "imgAmpoule",
                    imgUrl: "./sante/ampoule.png",
                    desc: "est une petite bulle de peau remplie de liquide."
                },
                "avoir coup de soleil": {
                    name: "Un coup de soleil",
                    img: "imgCoupDeSoleil",
                    imgUrl: "./sante/coup_de_soleil.png",
                    desc: "est une brûlure de la peau causée par une exposition excessive au soleil."
                },
                "avoir doigt enflé": {
                    name: "Un doigt enflé",
                    img: "imgDoigtEnfle",
                    imgUrl: "./sante/doigt_enfle.png",
                    desc: "est une inflammation d'un doigt, souvent causée par une blessure ou une infection."
                },
                "avoir entorse": {
                    name: "Une entorse",
                    img: "imgEntorse",
                    imgUrl: "./sante/entorse.png",
                    desc: "est une blessure d'une articulation, souvent la cheville."
                },
                "avoir allergies": {
                    name: "Des allergies",
                    img: "imgAllergies",
                    imgUrl: "./sante/allergies.png",
                    desc: "sont des réactions du système immunitaire à des substances étrangères."
                },
                "avoir grippe": {
                    name: "La grippe",
                    img: "imgGrippe",
                    imgUrl: "./sante/grippe.png",
                    desc: "est une infection virale respiratoire."
                },
                "avoir choc électrique": {
                    name: "Subir un choc électrique",
                    img: "imgChocElectrique",
                    imgUrl: "./sante/choc_electrique.png",
                    desc: "est une blessure causée par le contact avec de l'électricité."
                },
                "être étouffer": {
                    name: "S'étouffer",
                    img: "imgEtouffer",
                    imgUrl: "./sante/etouffer.png",
                    desc: "est une obstruction des voies respiratoires."
                },
                "avoir saigner": {
                    name: "Saigner",
                    img: "imgSaigner",
                    imgUrl: "./sante/saigner.png",
                    desc: "est l'écoulement de sang d'une plaie ou blessure."
                },
                "être brûler": {
                    name: "Se brûler",
                    img: "imgBruler",
                    imgUrl: "./sante/bruler.png",
                    desc: "est une blessure causée par la chaleur ou des produits chimiques."
                },
                "être blessé": {
                    name: "Être blessé",
                    img: "imgBlesse",
                    imgUrl: "./sante/blesse.png",
                    desc: "est une personne qui a subi une blessure."
                },
                "être noyer": {
                    name: "Se noyer",
                    img: "imgSeNoyer",
                    imgUrl: "./sante/se_noyer.png",
                    desc: "est une asphyxie causée par l'immersion dans l'eau."
                },
                "être tomber": {
                    name: "Tomber",
                    img: "imgTomber",
                    imgUrl: "./sante/tomber.png",
                    desc: "est une chute soudaine d'une position debout."
                },
                "avoir crise cardiaque": {
                    name: "Avoir une crise cardiaque",
                    img: "imgCriseCardiaque",
                    imgUrl: "./sante/avoir_une_crise_cardiaque.png",
                    desc: "est un arrêt du flux sanguin vers le cœur."
                },
                "avoir avaler poison": {
                    name: "Avaler du poison",
                    img: "imgAvalerPoison",
                    imgUrl: "./sante/avaler_du_poison.png",
                    desc: "est l'ingestion d'une substance toxique."
                },
                "être casser un os": {
                    name: "Se casser un os",
                    img: "imgCasserUnOs",
                    imgUrl: "./sante/casser_un_os.png",
                    desc: "est une fracture d'un os."
                }
            },
            nourriture: {
                "la farine": {
                    name: "La farine",
                    img: "imgFarine",
                    imgUrl: "./nourritures/farine.png",
                    desc: "est utilisée pour cuisiner des pains, gâteaux et pâtisseries."
                },
                "le sucre": {
                    name: "Le sucre",
                    img: "imgSucre",
                    imgUrl: "./nourritures/sucre.png",
                    desc: "est utilisé pour sucrer les aliments et les boissons."
                },
                "l'huile": {
                    name: "L'huile",
                    img: "imgHuile",
                    imgUrl: "./nourritures/huile.png",
                    desc: "est utilisée pour la cuisson et l'assaisonnement."
                },
                "le jus de pomme": {
                    name: "Le jus de pomme",
                    img: "imgJusDePomme",
                    imgUrl: "./nourritures/jus_de_pomme.png",
                    desc: "est une boisson faite à partir de pommes pressées."
                },
                "le café": {
                    name: "Le café",
                    img: "imgCafe",
                    imgUrl: "./nourritures/cafe.png",
                    desc: "est une boisson chaude stimulante."
                },
                "la boisson gazeuse": {
                    name: "La boisson gazeuse",
                    img: "imgBoissonGazeuse",
                    imgUrl: "./nourritures/boisson_gazeuse.png",
                    desc: "est une boisson rafraîchissante pétillante."
                },
                "les chips": {
                    name: "Les chips",
                    img: "imgChips",
                    imgUrl: "./nourritures/chips.png",
                    desc: "sont des tranches de pommes de terre frites et croustillantes."
                },
                "les noix": {
                    name: "Les noix",
                    img: "imgNoix",
                    imgUrl: "./nourritures/noix.png",
                    desc: "sont des fruits à coque riches en nutriments."
                },
                "la friandise": {
                    name: "La friandise",
                    img: "imgFriandise",
                    imgUrl: "./nourritures/friandise.png",
                    desc: "est une petite douceur sucrée."
                },
                "les biscuits": {
                    name: "Les biscuits",
                    img: "imgBiscuits",
                    imgUrl: "./nourritures/biscuits.png",
                    desc: "sont des petits gâteaux secs souvent sucrés."
                },
                "le gâteau": {
                    name: "Le gâteau",
                    img: "imgGateau",
                    imgUrl: "./nourritures/gateau.png",
                    desc: "est une pâtisserie sucrée souvent servie en dessert."
                },
                "les bagels": {
                    name: "Les bagels",
                    img: "imgBagels",
                    imgUrl: "./nourritures/bagels.png",
                    desc: "sont des petits pains en forme d'anneau."
                },
                "la bouteille d'eau": {
                    name: "La bouteille d'eau",
                    img: "imgBouteilleEau",
                    imgUrl: "./nourritures/bouteille_d_eau.png",
                    desc: "est un récipient contenant de l'eau potable."
                },
                "la boîte de haricots": {
                    name: "La boîte de haricots",
                    img: "imgBoiteHaricots",
                    imgUrl: "./nourritures/boite_de_haricots.png",
                    desc: "est une conserve contenant des haricots."
                },
                "le carton d'œufs": {
                    name: "Le carton d'œufs",
                    img: "imgCartonOeufs",
                    imgUrl: "./nourritures/carton_d_oeufs.png",
                    desc: "contient des œufs frais."
                },
                "le fromage cottage": {
                    name: "Le fromage cottage",
                    img: "imgFromageCottage",
                    imgUrl: "./nourritures/contenant_de_fromage_cottage.png",
                    desc: "est un produit laitier frais."
                },
                "la boîte de céréales": {
                    name: "La boîte de céréales",
                    img: "imgBoiteCereales",
                    imgUrl: "./nourritures/boite_de_cereales.png",
                    desc: "contient des céréales pour le petit déjeuner."
                },
                "le sac de farine": {
                    name: "Le sac de farine",
                    img: "imgSacFarine",
                    imgUrl: "./nourritures/sac_de_farine.png",
                    desc: "contient de la farine pour la cuisson."
                },
                "le paquet de biscuits": {
                    name: "Le paquet de biscuits",
                    img: "imgPaquetBiscuits",
                    imgUrl: "./nourritures/paquet_de_biscuits.png",
                    desc: "contient des biscuits pour grignoter."
                },
                "le pain": {
                    name: "Le pain",
                    img: "imgPain",
                    imgUrl: "./nourritures/pain.png",
                    desc: "est un aliment de base fait de farine, d'eau et de levure."
                },
                "le rouleau d'essuie-tout": {
                    name: "Le rouleau d'essuie-tout",
                    img: "imgRouleauEssuieTout",
                    imgUrl: "./nourritures/rouleau_d_essuie-tout.png",
                    desc: "est un rouleau de papier absorbant pour nettoyer."
                },
                "la pomme": {
                    name: "La pomme",
                    img: "imgPomme",
                    imgUrl: "./nourritures/pomme.png",
                    desc: "est un fruit."
                },
                "la banane": {
                    name: "La banane",
                    img: "imgBanane",
                    imgUrl: "./nourritures/banane.png",
                    desc: "est un fruit tropical."
                },
                "la carotte": {
                    name: "La carotte",
                    img: "imgCarotte",
                    imgUrl: "./nourritures/carrote.png",
                    desc: "est une légume que les lapins adorent"
                },
                "les pâtes": {
                    name: "Les pâtes",
                    img: "imgPates",
                    imgUrl: "./nourritures/pates.png",
                    desc: "sont un aliment à base de blé."
                },
                "le céleri": {
                    name: "Le céleri",
                    img: "imgCeleri",
                    imgUrl: "./nourritures/celeri.png",
                    desc: "est un légume vert croquant souvent utilisé dans les salades."
                },
                "les pommes de terre": {
                    name: "Les pommes de terre",
                    img: "imgPommesDeTerre",
                    imgUrl: "./nourritures/pommes_de_terre.png",
                    desc: "sont des tubercules polyvalents utilisés dans de nombreuses recettes."
                },
                "les courgettes": {
                    name: "Les courgettes",
                    img: "imgCourgettes",
                    imgUrl: "./nourritures/courgettes.png",
                    desc: "sont des légumes verts allongés appréciés en cuisine."
                },
                "le chou": {
                    name: "Le chou",
                    img: "imgChou",
                    imgUrl: "./nourritures/chou.png",
                    desc: "est un légume-feuille utilisé dans de nombreuses cuisines."
                },
                "les concombres": {
                    name: "Les concombres",
                    img: "imgConcombres",
                    imgUrl: "./nourritures/concombres.png",
                    desc: "sont des légumes frais souvent consommés en salades."
                },
                "les patates douces": {
                    name: "Les patates douces",
                    img: "imgPatatesDouces",
                    imgUrl: "./nourritures/patates_douces.png",
                    desc: "sont des tubercules sucrés riches en nutriments."
                },
                "les asperges": {
                    name: "Les asperges",
                    img: "imgAsperges",
                    imgUrl: "./nourritures/asperges.png",
                    desc: "sont des légumes printaniers délicats."
                },
                "les épinards": {
                    name: "Les épinards",
                    img: "imgEpinards",
                    imgUrl: "./nourritures/epinards.png",
                    desc: "sont des feuilles vertes riches en fer."
                },
                "les oignons": {
                    name: "Les oignons",
                    img: "imgOignons",
                    imgUrl: "./nourritures/oignons.png",
                    desc: "sont des aromates utilisés pour rehausser les plats."
                },
                "les champignons": {
                    name: "Les champignons",
                    img: "imgChampignons",
                    imgUrl: "./nourritures/champignons.png",
                    desc: "sont des fonges comestibles variées."
                },
                "les radis": {
                    name: "Les radis",
                    img: "imgRadis",
                    imgUrl: "./nourritures/radis.png",
                    desc: "sont de petits légumes piquants souvent consommés crus."
                },
                "le maïs": {
                    name: "Le maïs",
                    img: "imgMais",
                    imgUrl: "./nourritures/mais.png",
                    desc: "est une céréale sucrée consommée en épis ou grains."
                },
                "les oignons verts": {
                    name: "Les oignons verts",
                    img: "imgOignonsVerts",
                    imgUrl: "./nourritures/oignons_verts.png",
                    desc: "sont utilisés comme garniture aromatique."
                },
                "le persil": {
                    name: "Le persil",
                    img: "imgPersil",
                    imgUrl: "./nourritures/persil.png",
                    desc: "est une herbe aromatique utilisée en assaisonnement."
                },
                "les betteraves": {
                    name: "Les betteraves",
                    img: "imgBetteraves",
                    imgUrl: "./nourritures/betteraves.png",
                    desc: "sont des racines sucrées souvent rouges."
                },
                "le brocoli": {
                    name: "Le brocoli",
                    img: "imgBrocoli",
                    imgUrl: "./nourritures/brocoli.png",
                    desc: "est un légume vert riche en vitamines."
                },
                "les pois": {
                    name: "Les pois",
                    img: "imgPois",
                    imgUrl: "./nourritures/pois.png",
                    desc: "sont de petites graines vertes sucrées."
                },
                "les piments forts": {
                    name: "Les piments forts",
                    img: "imgPimentsForts",
                    imgUrl: "./nourritures/piments_forts.png",
                    desc: "ajoutent du piquant aux plats."
                },
                "les tomates": {
                    name: "Les tomates",
                    img: "imgTomates",
                    imgUrl: "./nourritures/tomates.png",
                    desc: "sont des fruits rouges utilisés comme légumes."
                },
                "le chou-fleur": {
                    name: "Le chou-fleur",
                    img: "imgChouFleur",
                    imgUrl: "./nourritures/chou-fleur.png",
                    desc: "est un légume blanc riche en fibres."
                },
                "les artichauts": {
                    name: "Les artichauts",
                    img: "imgArtichauts",
                    imgUrl: "./nourritures/artichauts.png",
                    desc: "sont des légumes à feuilles comestibles."
                },
                "l'ail": {
                    name: "L'ail",
                    img: "imgAil",
                    imgUrl: "./nourritures/ail.png",
                    desc: "est un aromate puissant utilisé en cuisine."
                },
                "les poivrons": {
                    name: "Les poivrons",
                    img: "imgPoivrons",
                    imgUrl: "./nourritures/poivrons.png",
                    desc: "sont des légumes colorés doux ou piquants."
                },
                "le bok choy": {
                    name: "Le bok choy",
                    img: "imgBokChoy",
                    imgUrl: "./nourritures/bok_choy.png",
                    desc: "est un chou chinois à feuilles vertes."
                },
                "les aubergines": {
                    name: "Les aubergines",
                    img: "imgAubergines",
                    imgUrl: "./nourritures/aubergines.png",
                    desc: "sont des légumes violets utilisés dans divers plats."
                },
                "les haricots verts": {
                    name: "Les haricots verts",
                    img: "imgHaricotsVerts",
                    imgUrl: "./nourritures/haricots_verts.png",
                    desc: "sont des légumes minces et verts."
                },
                "les navets": {
                    name: "Les navets",
                    img: "imgNavets",
                    imgUrl: "./nourritures/navets.png",
                    desc: "sont des racines blanches ou pourpres."
                },
                "le squash": {
                    name: "Le squash",
                    img: "imgSquash",
                    imgUrl: "./nourritures/squash.png",
                    desc: "est un terme anglais pour diverses courges."
                },
                "le rôti": {
                    name: "Le rôti",
                    img: "imgRoti",
                    imgUrl: "./nourritures/roti.png",
                    desc: "est une pièce de viande cuite au four."
                },
                "le bifteck": {
                    name: "Le bifteck",
                    img: "imgBifteck",
                    imgUrl: "./nourritures/bifteck.png",
                    desc: "est une tranche de viande de bœuf grillée ou poêlée."
                },
                "le bœuf à ragoût": {
                    name: "Le bœuf à ragoût",
                    img: "imgBoeufARagout",
                    imgUrl: "./nourritures/boeuf_a_ragout.png",
                    desc: "est utilisé pour préparer des plats mijotés."
                },
                "le bœuf haché": {
                    name: "Le bœuf haché",
                    img: "imgBoeufHache",
                    imgUrl: "./nourritures/boeuf_hache.png",
                    desc: "est utilisé dans les burgers et sauces."
                },
                "les côtes de bœuf": {
                    name: "Les côtes de bœuf",
                    img: "imgCotesDeBoeuf",
                    imgUrl: "./nourritures/cotes_de_boeuf.png",
                    desc: "sont des morceaux de bœuf avec os."
                },
                "les escalopes de veau": {
                    name: "Les escalopes de veau",
                    img: "imgEscalopesDeVeau",
                    imgUrl: "./nourritures/escalopes_de_veau.png",
                    desc: "sont de fines tranches de veau."
                },
                "le foie": {
                    name: "Le foie",
                    img: "imgFoie",
                    imgUrl: "./nourritures/foie.png",
                    desc: "est un abat riche en fer."
                },
                "les tripes": {
                    name: "Les tripes",
                    img: "imgTripes",
                    imgUrl: "./nourritures/tripes.png",
                    desc: "sont des abats provenant de l'estomac."
                },
                "le jambon": {
                    name: "Le jambon",
                    img: "imgJambon",
                    imgUrl: "./nourritures/jambon.png",
                    desc: "est de la viande de porc salée ou fumée."
                },
                "les côtelettes de porc": {
                    name: "Les côtelettes de porc",
                    img: "imgCotelettesDePorc",
                    imgUrl: "./nourritures/cotelettes_de_porc.png",
                    desc: "sont des tranches de porc avec os."
                },
                "le lard": {
                    name: "Le lard",
                    img: "imgLard",
                    imgUrl: "./nourritures/lard.png",
                    desc: "est de la poitrine de porc salée."
                },
                "les saucisses": {
                    name: "Les saucisses",
                    img: "imgSaucisses",
                    imgUrl: "./nourritures/saucisses.png",
                    desc: "sont de la viande hachée en boyau."
                },
                "les jarrets d'agneau": {
                    name: "Les jarrets d'agneau",
                    img: "imgJarretsDAgneau",
                    imgUrl: "./nourritures/jarrets_d_agneau.png",
                    desc: "sont des morceaux tendres pour mijoter."
                },
                "le gigot d'agneau": {
                    name: "Le gigot d'agneau",
                    img: "imgGigotDAgneau",
                    imgUrl: "./nourritures/gigot_d_agneau.png",
                    desc: "est une cuisse d'agneau rôtie."
                },
                "les côtelettes d'agneau": {
                    name: "Les côtelettes d'agneau",
                    img: "imgCotelettesDAgneau",
                    imgUrl: "./nourritures/cotelettes_d_agneau.png",
                    desc: "sont des tranches d'agneau avec os."
                },
                "les poitrines de dinde": {
                    name: "Les poitrines de dinde",
                    img: "imgPoitrinesDeDinde",
                    imgUrl: "./nourritures/poitrines_de_dinde.png",
                    desc: "sont des morceaux maigres de volaille."
                },
                "le canard": {
                    name: "Le canard",
                    img: "imgCanard",
                    imgUrl: "./nourritures/canard.png",
                    desc: "est une volaille appréciée pour sa saveur riche."
                },
                "les ailes de poulet": {
                    name: "Les ailes de poulet",
                    img: "imgAiles",
                    imgUrl: "./nourritures/ailes.png",
                    desc: "sont souvent servies en apéritif."
                },
                "les cuisses de poulet": {
                    name: "Les cuisses de poulet",
                    img: "imgCuissesDePoulet",
                    imgUrl: "./nourritures/cuisses_de_poulet.png",
                    desc: "sont des morceaux juteux de volaille."
                },
                "les pilons de poulet": {
                    name: "Les pilons de poulet",
                    img: "imgPilons",
                    imgUrl: "./nourritures/pilons.png",
                    desc: "sont des morceaux populaires pour les enfants."
                },
                "le poulet cru": {
                    name: "Le poulet cru",
                    img: "imgPouletCru",
                    imgUrl: "./nourritures/poulet_cru.png",
                    desc: "est à cuisiner avant consommation."
                },
                "le poulet cuit": {
                    name: "Le poulet cuit",
                    img: "imgPouletCuit",
                    imgUrl: "./nourritures/poulet_cuit.png",
                    desc: "est prêt à être consommé."
                },
                "la truite": {
                    name: "La truite",
                    img: "imgTruite",
                    imgUrl: "./nourritures/truite.png",
                    desc: "est un poisson d'eau douce."
                },
                "le saumon entier": {
                    name: "Le saumon entier",
                    img: "imgSaumonEntier",
                    imgUrl: "./nourritures/saumon_entier.png",
                    desc: "est un grand poisson prisé en cuisine."
                },
                "la darne de saumon": {
                    name: "La darne de saumon",
                    img: "imgDarneDeSaumon",
                    imgUrl: "./nourritures/darne_de_saumon.png",
                    desc: "est une tranche épaisse de saumon."
                },
                "le pavé de flétan": {
                    name: "Le pavé de flétan",
                    img: "imgPaveDeFletan",
                    imgUrl: "./nourritures/pave_de_fletan.png",
                    desc: "est un morceau de poisson blanc."
                },
                "le thon": {
                    name: "Le thon",
                    img: "imgThon",
                    imgUrl: "./nourritures/thon.png",
                    desc: "est un poisson apprécié en sashimi et en conserve."
                },
                "la morue": {
                    name: "La morue",
                    img: "imgMorue",
                    imgUrl: "./nourritures/morue.png",
                    desc: "est un poisson blanc utilisé dans de nombreux plats."
                },
                "le crabe": {
                    name: "Le crabe",
                    img: "imgCrabe",
                    imgUrl: "./nourritures/crabe.png",
                    desc: "est un crustacé à chair délicate."
                },
                "le homard": {
                    name: "Le homard",
                    img: "imgHomard",
                    imgUrl: "./nourritures/homard.png",
                    desc: "est un crustacé luxueux."
                },
                "les crevettes": {
                    name: "Les crevettes",
                    img: "imgCrevette",
                    imgUrl: "./nourritures/crevette.png",
                    desc: "sont des fruits de mer populaires."
                },
                "les pétoncles": {
                    name: "Les pétoncles",
                    img: "imgPetoncles",
                    imgUrl: "./nourritures/petoncles.png",
                    desc: "sont des mollusques à chair tendre."
                },
                "les moules": {
                    name: "Les moules",
                    img: "imgMoules",
                    imgUrl: "./nourritures/moules.png",
                    desc: "sont des coquillages souvent cuits à la marinière."
                },
                "le pain blanc": {
                    name: "Le pain blanc",
                    img: "imgPainBlanc",
                    imgUrl: "./nourritures/pain_blanc.png",
                    desc: "est un pain fait avec de la farine raffinée."
                },
                "le pain de blé": {
                    name: "Le pain de blé",
                    img: "imgPainDeBle",
                    imgUrl: "./nourritures/pain_de_ble.png",
                    desc: "est fait avec de la farine de blé entier."
                },
                "le pain de seigle": {
                    name: "Le pain de seigle",
                    img: "imgPainDeSeigle",
                    imgUrl: "./nourritures/pain_de_seigle.png",
                    desc: "est un pain sombre au goût prononcé."
                },
                "le rosbif": {
                    name: "Le rosbif",
                    img: "imgRosbif",
                    imgUrl: "./nourritures/rosbif.png",
                    desc: "est du bœuf rôti servi froid ou chaud."
                },
                "le bœuf salé": {
                    name: "Le bœuf salé",
                    img: "imgBoeufSale",
                    imgUrl: "./nourritures/boeuf_sale.png",
                    desc: "est du bœuf conservé dans le sel."
                },
                "le pastrami": {
                    name: "Le pastrami",
                    img: "imgPastrami",
                    imgUrl: "./nourritures/pastrami.png",
                    desc: "est de la viande de bœuf fumée et épicée."
                },
                "le salami": {
                    name: "Le salami",
                    img: "imgSalami",
                    imgUrl: "./nourritures/salami.png",
                    desc: "est une saucisse sèche italienne."
                },
                "le dindon fumé": {
                    name: "Le dindon fumé",
                    img: "imgDindonFume",
                    imgUrl: "./nourritures/dindon_fume.png",
                    desc: "est de la viande de dinde fumée."
                },
                "le cheddar américain": {
                    name: "Le cheddar américain",
                    img: "imgCheddarAmericain",
                    imgUrl: "./nourritures/cheddar_americain.png",
                    desc: "est un fromage fondant souvent utilisé dans les burgers."
                },
                "le fromage gruyère": {
                    name: "Le fromage gruyère",
                    img: "imgFromageGruyere",
                    imgUrl: "./nourritures/fromage_gruyere.png",
                    desc: "est un fromage suisse à pâte dure."
                },
                "le fromage cheddar": {
                    name: "Le fromage cheddar",
                    img: "imgFromageCheddar",
                    imgUrl: "./nourritures/fromage_cheddar.png",
                    desc: "est un fromage anglais populaire."
                },
                "la mozzarella": {
                    name: "La mozzarella",
                    img: "imgMozzarella",
                    imgUrl: "./nourritures/mozzarella.png",
                    desc: "est un fromage italien frais."
                }
            },


            vestuario_roupa_normal: {
                "la chemise": {
                    name: "Une chemise",
                    img: "imgChemise",
                    imgUrl: "./vestuario/chemise.png",
                    desc: "est un vêtement à manches longues ou courtes porté sur le haut du corps."
                },
                "le jeans": {
                    name: "Un jeans",
                    img: "imgJeans",
                    imgUrl: "./vestuario/jeans.png",
                    desc: "est un pantalon en denim, souvent porté au quotidien."
                },
                "la robe": {
                    name: "Une robe",
                    img: "imgRobe",
                    imgUrl: "./vestuario/robe.png",
                    desc: "est un vêtement porté par-dessus tout le corps, souvent pour des occasions formelles ou décontractées."
                },
                "le T-shirt": {
                    name: "Un T-shirt",
                    img: "imgTShirt",
                    imgUrl: "./vestuario/t_shirt.png",
                    desc: "est un vêtement à manches courtes porté sur le haut du corps, idéal pour les tenues décontractées."
                },
                "la casquette de base-ball": {
                    name: "Une casquette de base-ball",
                    img: "imgCasquetteBaseball",
                    imgUrl: "./vestuario/casquette_baseball.png",
                    desc: "est un chapeau avec une visière à l'avant, souvent porté pour le sport ou les activités décontractées."
                },
                "les chaussettes": {
                    name: "Des chaussettes",
                    img: "imgChaussettes",
                    imgUrl: "./vestuario/chaussettes.png",
                    desc: "sont des vêtements portés sur les pieds pour les protéger et les garder au chaud."
                },
                "les chaussures athlétiques": {
                    name: "Des chaussures athlétiques",
                    img: "imgChaussuresAthletiques",
                    imgUrl: "./vestuario/chaussures_athletiques.png",
                    desc: "sont des chaussures conçues pour les activités sportives."
                },
                "le lacer chaussures": {
                    name: "Lacer ses souliers",
                    img: "imgLacerChaussures",
                    imgUrl: "./vestuario/lacer_chaussures.png",
                    desc: "est l'action de nouer les lacets des chaussures."
                },
                "le chemisier": {
                    name: "Un chemisier",
                    img: "imgChemisier",
                    imgUrl: "./vestuario/chemisier.png",
                    desc: "est un vêtement féminin élégant porté sur le haut du corps."
                },
                "le sac à main": {
                    name: "Un sac à main",
                    img: "imgSacAMain",
                    imgUrl: "./vestuario/sac_a_main.png",
                    desc: "est un accessoire utilisé pour transporter des effets personnels."
                },
                "la jupe": {
                    name: "Une jupe",
                    img: "imgJupe",
                    imgUrl: "./vestuario/jupe.png",
                    desc: "est un vêtement porté par-dessus les jambes."
                },
                "le costume": {
                    name: "Un costume",
                    img: "imgCostume",
                    imgUrl: "./vestuario/costume.png",
                    desc: "est un ensemble de vêtements formels composé d'une veste et d'un pantalon."
                },
                "les pantalons": {
                    name: "Des pantalons",
                    img: "imgPantalons",
                    imgUrl: "./vestuario/pantalons.png",
                    desc: "sont des vêtements portés sur les jambes."
                },
                "les chaussures": {
                    name: "Des chaussures",
                    img: "imgChaussures",
                    imgUrl: "./vestuario/chaussures.png",
                    desc: "sont des vêtements portés aux pieds pour protéger et marcher."
                },
                "le pull-over": {
                    name: "Un pull-over",
                    img: "imgPullOver",
                    imgUrl: "./vestuario/pull_over.png",
                    desc: "est un vêtement chaud porté sur le haut du corps."
                },
                "mettre": {
                    name: "Mettre",
                    img: "imgMettre",
                    imgUrl: "./vestuario/mettre.png",
                    desc: "est l'action de s'habiller avec des vêtements."
                },
                "la casquette": {
                    name: "Une casquette",
                    img: "imgCasquette",
                    imgUrl: "./vestuario/casquette.png",
                    desc: "est un chapeau avec une visière."
                },
                "le cardigan": {
                    name: "Un cardigan",
                    img: "imgCardigan",
                    imgUrl: "./vestuario/cardigan.png",
                    desc: "est un gilet à boutons porté sur le haut du corps."
                },
                "le tricot": {
                    name: "Un tricot",
                    img: "imgTricot",
                    imgUrl: "./vestuario/tricot.png",
                    desc: "est un chandail ou pull-over en laine ou en matière tricotée."
                },
                "la chemise sport": {
                    name: "Une chemise sport",
                    img: "imgChemiseSport",
                    imgUrl: "./vestuario/chemise_sport.png",
                    desc: "est un vêtement décontracté pour le haut du corps."
                },
                "la robe de maternité": {
                    name: "Une robe de maternité",
                    img: "imgRobeMaternite",
                    imgUrl: "./vestuario/robe_maternite.png",
                    desc: "est un vêtement confortable conçu pour les femmes enceintes."
                },
                "la salopette": {
                    name: "Une salopette",
                    img: "imgSalopette",
                    imgUrl: "./vestuario/salopette.png",
                    desc: "est un vêtement de travail ou décontracté avec des bretelles."
                },
                "le haut en tricot": {
                    name: "Un haut en tricot",
                    img: "imgHautEnTricot",
                    imgUrl: "./vestuario/haut_en_tricot.png",
                    desc: "est un vêtement léger et confortable pour le haut du corps."
                },
                "le pantalon capri": {
                    name: "Un pantalon capri",
                    img: "imgPantalonCapri",
                    imgUrl: "./vestuario/pantalon_capri.png",
                    desc: "est un pantalon court qui arrive au-dessus des chevilles."
                },
                "les sandales": {
                    name: "Des sandales",
                    img: "imgSandales",
                    imgUrl: "./vestuario/sandales.png",
                    desc: "sont des chaussures ouvertes souvent portées en été."
                },
                "l'uniforme": {
                    name: "Un uniforme",
                    img: "imgUniforme",
                    imgUrl: "./vestuario/uniforme.png",
                    desc: "est porté pour représenter une profession ou une école."
                },
                "le costume de ville": {
                    name: "Un costume de ville",
                    img: "imgCostumeDeVille",
                    imgUrl: "./vestuario/costume_de_ville.png",
                    desc: "est un ensemble élégant pour les affaires ou les occasions formelles."
                },
                "la serviette": {
                    name: "Une serviette",
                    img: "imgServiette",
                    imgUrl: "./vestuario/serviette.png",
                    desc: "est un sac utilisé pour transporter des documents ou des affaires de travail."
                },
                "la cravate": {
                    name: "Une cravate",
                    img: "imgCravate",
                    imgUrl: "./vestuario/cravate.png",
                    desc: "est un accessoire porté autour du cou avec un costume."
                }
            },

            vetements_de_saison: {
                "le chapeau": {
                    name: "Un chapeau",
                    img: "imgChapeau",
                    imgUrl: "./vestuario/chapeau.png",
                    desc: "est porté sur la tête pour se protéger du soleil ou du froid."
                },
                "l'écharpe d'hiver": {
                    name: "Une écharpe d'hiver",
                    img: "imgEcharpeHiver",
                    imgUrl: "./vestuario/echarpe_hiver.png",
                    desc: "est portée autour du cou pour se protéger du froid."
                },
                "la parka": {
                    name: "Une parka",
                    img: "imgParka",
                    imgUrl: "./vestuario/parka.png",
                    desc: "est un manteau chaud et imperméable souvent porté en hiver."
                },
                "les protège-oreilles": {
                    name: "Des protège-oreilles",
                    img: "imgProtegeOreilles",
                    imgUrl: "./vestuario/protege_oreilles.png",
                    desc: "sont portés pour protéger les oreilles du froid."
                },
                "le pardessus": {
                    name: "Un pardessus",
                    img: "imgPardessus",
                    imgUrl: "./vestuario/pardessus.png",
                    desc: "est un manteau long et élégant porté par-dessus les vêtements."
                },
                "les gants": {
                    name: "Des gants",
                    img: "imgGants",
                    imgUrl: "./vestuario/gants.png",
                    desc: "sont portés sur les mains pour les protéger du froid."
                },
                "les moufles": {
                    name: "Des moufles",
                    img: "imgMoufles",
                    imgUrl: "./vestuario/moufles.png",
                    desc: "sont des gants fermés qui couvrent toute la main sauf le pouce."
                },
                "le gilet en duvet": {
                    name: "Un gilet en duvet",
                    img: "imgGiletEnDuvet",
                    imgUrl: "./vestuario/gilet_en_duvet.png",
                    desc: "est un vêtement sans manches, souvent porté par-dessus un pull pour plus de chaleur."
                },
                "le bandeau serre-tête": {
                    name: "Un bandeau serre-tête",
                    img: "imgBandeauSerreTete",
                    imgUrl: "./vestuario/bandeau_serre_tete.png",
                    desc: "est porté sur la tête pour garder les cheveux en place ou protéger les oreilles du froid."
                },
                "l'écharpe entourant la tête": {
                    name: "Une écharpe entourant la tête",
                    img: "imgEcharpeTete",
                    imgUrl: "./vestuario/echarpe_tete.png",
                    desc: "est utilisée pour couvrir la tête et le cou en hiver."
                },
                "le bonnet de ski": {
                    name: "Un bonnet de ski",
                    img: "imgBonnetDeSki",
                    imgUrl: "./vestuario/bonnet_de_ski.png",
                    desc: "est un chapeau épais porté pour garder la tête au chaud lors des sports d'hiver."
                },
                "le masque de ski": {
                    name: "Un masque de ski",
                    img: "imgMasqueDeSki",
                    imgUrl: "./vestuario/masque_de_ski.png",
                    desc: "est porté pour protéger le visage et les yeux lors des activités de ski."
                },
                "la veste de cuir": {
                    name: "Une veste de cuir",
                    img: "imgVesteDeCuir",
                    imgUrl: "./vestuario/veste_de_cuir.png",
                    desc: "est un vêtement robuste porté pour le style ou la protection."
                },
                "la veste": {
                    name: "Une veste",
                    img: "imgVeste",
                    imgUrl: "./vestuario/veste.png",
                    desc: "est un vêtement porté sur le haut du corps pour se protéger du froid ou de la pluie."
                },
                "les jambières": {
                    name: "Des jambières",
                    img: "imgJambieres",
                    imgUrl: "./vestuario/jambieres.png",
                    desc: "sont des vêtements portés sur les jambes pour les garder au chaud."
                },
                "la veste en duvet": {
                    name: "Une veste en duvet",
                    img: "imgVesteEnDuvet",
                    imgUrl: "./vestuario/veste_en_duvet.png",
                    desc: "est un manteau épais et chaud, rempli de duvet."
                },
                "le parapluie": {
                    name: "Un parapluie",
                    img: "imgParapluie",
                    imgUrl: "./vestuario/parapluie.png",
                    desc: "est utilisé pour se protéger de la pluie."
                },
                "les bottes de pluie": {
                    name: "Des bottes de pluie",
                    img: "imgBottesDePluie",
                    imgUrl: "./vestuario/bottes_de_pluie.png",
                    desc: "sont des chaussures imperméables portées pour marcher sous la pluie."
                },
                "le maillot de bain": {
                    name: "Un maillot de bain",
                    img: "imgMaillotDeBain",
                    imgUrl: "./vestuario/maillot_de_bain.png",
                    desc: "est porté pour nager ou bronzer à la plage ou à la piscine."
                },
                "le cache-maillot": {
                    name: "Un cache-maillot",
                    img: "imgCacheMaillot",
                    imgUrl: "./vestuario/cache_maillot.png",
                    desc: "est un vêtement porté par-dessus un maillot de bain pour plus de discrétion."
                },
                "l'imperméable": {
                    name: "Un imperméable",
                    img: "imgImpermeable",
                    imgUrl: "./vestuario/impermeable.png",
                    desc: "est un manteau imperméable porté pour se protéger de la pluie."
                },
                "le poncho": {
                    name: "Un poncho",
                    img: "imgPoncho",
                    imgUrl: "./vestuario/poncho.png",
                    desc: "est un vêtement ample et imperméable porté pour se protéger de la pluie."
                },
                "le trench-coat": {
                    name: "Un trench-coat",
                    img: "imgTrenchCoat",
                    imgUrl: "./vestuario/trench_coat.png",
                    desc: "est un manteau long et imperméable, souvent porté pour des occasions formelles."
                },
                "le chapeau de paille": {
                    name: "Un chapeau de paille",
                    img: "imgChapeauDePaille",
                    imgUrl: "./vestuario/chapeau_de_paille.png",
                    desc: "est un chapeau léger porté pour se protéger du soleil en été."
                },
                "le coupe-vent": {
                    name: "Un coupe-vent",
                    img: "imgCoupeVent",
                    imgUrl: "./vestuario/coupe_vent.png",
                    desc: "est une veste légère conçue pour protéger du vent."
                },
                "les lunettes de soleil": {
                    name: "Des lunettes de soleil",
                    img: "imgLunettesDeSoleil",
                    imgUrl: "./vestuario/lunettes_de_soleil.png",
                    desc: "sont portées pour protéger les yeux des rayons du soleil."
                }
            },

            vêtements_vestuario: {
                "le tricot / maillot de corps": {
                    name: "Un tricot / maillot de corps",
                    img: "imgTricotMaillotCorps",
                    imgUrl: "./vestuario/tricot_maillot_corps.png",
                    desc: "est porté sous les vêtements pour fournir une couche de chaleur."
                },
                "Des caleçons": {
                    name: "Des caleçons",
                    img: "imgCalecons",
                    imgUrl: "./vestuario/calecons.png",
                    desc: "sont des sous-vêtements masculins ajustés pour un meilleur maintien."
                },
                "les chaussettes jusqu'aux chevilles": {
                    name: "Des chaussettes jusqu'aux chevilles",
                    img: "imgChaussettesChevilles",
                    imgUrl: "./vestuario/chaussettes_chevilles.png",
                    desc: "sont des chaussettes qui couvrent uniquement les chevilles."
                },
                "Des chaussettes tube": {
                    name: "Des chaussettes tube",
                    img: "imgChaussettesTube",
                    imgUrl: "./vestuario/chaussettes_tube.png",
                    desc: "sont des chaussettes unisexes longues qui montent jusqu'à mi-mollet."
                },
                "Des chaussettes basses": {
                    name: "Des chaussettes basses",
                    img: "imgChaussettesBasses",
                    imgUrl: "./vestuario/chaussettes_basses.png",
                    desc: "sont des chaussettes qui couvrent uniquement le pied et se cachent sous la chaussure."
                },
                "Des socquettes": {
                    name: "Des socquettes",
                    img: "imgSocquettes",
                    imgUrl: "./vestuario/socquettes.png",
                    desc: "sont des chaussettes courtes qui arrivent à la cheville."
                },
                "Des mi-bas": {
                    name: "Des mi-bas",
                    img: "imgMiBas",
                    imgUrl: "./vestuario/mi_bas.png",
                    desc: "sont des chaussettes longues qui montent juste en dessous du genou."
                },
                "le slip": {
                    name: "Un slip",
                    img: "imgSlip",
                    imgUrl: "./vestuario/slip.png",
                    desc: "est un sous-vêtement féminin couvrant les hanches et les fesses."
                },
                "le soutien-gorge": {
                    name: "Un soutien-gorge",
                    img: "imgSoutienGorge",
                    imgUrl: "./vestuario/soutien_gorge.png",
                    desc: "est un sous-vêtement féminin qui soutient la poitrine."
                },
                "la petite culotte": {
                    name: "Une petite culotte",
                    img: "imgPetiteCulotte",
                    imgUrl: "./vestuario/petite_culotte.png",
                    desc: "est un sous-vêtement féminin couvrant les hanches et les fesses."
                },
                "la gaine": {
                    name: "Une gaine",
                    img: "imgGaine",
                    imgUrl: "./vestuario/gaine.png",
                    desc: "est un sous-vêtement féminin qui affine la silhouette."
                },
                "les collants": {
                    name: "Des collants",
                    img: "imgCollants",
                    imgUrl: "./vestuario/collants.png",
                    desc: "sont des sous-vêtements couvrant les jambes, portés sous des robes ou des jupes."
                },
                "le jupon": {
                    name: "Un jupon",
                    img: "imgJupon",
                    imgUrl: "./vestuario/jupon.png",
                    desc: "est un sous-vêtement porté sous une jupe pour ajouter du volume ou de l'opacité."
                },
                "le pyjama": {
                    name: "Un pyjama",
                    img: "imgPyjama",
                    imgUrl: "./vestuario/pyjama.png",
                    desc: "est un vêtement confortable porté pour dormir."
                },
                "la robe de nuit": {
                    name: "Une robe de nuit",
                    img: "imgRobeDeNuit",
                    imgUrl: "./vestuario/robe_de_nuit.png",
                    desc: "est un vêtement féminin long et fluide porté pour dormir."
                },
                "les pantoufles": {
                    name: "Des pantoufles",
                    img: "imgPantoufles",
                    imgUrl: "./vestuario/pantoufles.png",
                    desc: "sont des chaussures confortables portées à l'intérieur de la maison."
                },
                "la dormeuse molletonnée": {
                    name: "Une dormeuse molletonnée",
                    img: "imgDormeuseMolletonnee",
                    imgUrl: "./vestuario/dormeuse_molletonnee.png",
                    desc: "est un vêtement de nuit pour bébé qui garde tout le corps au chaud."
                },
                "la chemise de nuit": {
                    name: "Une chemise de nuit",
                    img: "imgChemiseDeNuit",
                    imgUrl: "./vestuario/chemise_de_nuit.png",
                    desc: "est un vêtement ample porté pour dormir."
                },
                "la robe de chambre": {
                    name: "Une robe de chambre",
                    img: "imgRobeDeChambre",
                    imgUrl: "./vestuario/robe_de_chambre.png",
                    desc: "est un vêtement porté à la maison, souvent par-dessus les vêtements de nuit."
                }
            },

            accessoires: {
                "Un portefeuille": {
                    name: "Un portefeuille",
                    img: "imgPortefeuille",
                    imgUrl: "./vestuario/portefeuille.png",
                    desc: "est utilisé pour ranger de l'argent, des cartes et des papiers personnels."
                },
                "Un sac à bandoulière": {
                    name: "Un sac à bandoulière",
                    img: "imgSacABandouliere",
                    imgUrl: "./vestuario/sac_a_bandouliere.png",
                    desc: "est un sac porté en travers du corps pour transporter des effets personnels."
                },
                "Un porte-monnaie": {
                    name: "Un porte-monnaie",
                    img: "imgPorteMonnaie",
                    imgUrl: "./vestuario/porte_monnaie.png",
                    desc: "est une petite pochette utilisée pour ranger des pièces de monnaie."
                },
                "Un sac à dos": {
                    name: "Un sac à dos",
                    img: "imgSacADos",
                    imgUrl: "./vestuario/sac_a_dos.png",
                    desc: "est un sac porté sur le dos, souvent utilisé pour transporter des livres ou des vêtements."
                },
                "Un fourre-tout": {
                    name: "Un fourre-tout",
                    img: "imgFourreTout",
                    imgUrl: "./vestuario/fourre_tout.png",
                    desc: "est un grand sac utilisé pour transporter de nombreux objets."
                },
                "Une montre-bracelet": {
                    name: "Une montre-bracelet",
                    img: "imgMontreBracelet",
                    imgUrl: "./vestuario/montre_bracelet.png",
                    desc: "est un accessoire porté autour du poignet pour indiquer l'heure."
                },
                "Une boucle de ceinture": {
                    name: "Une boucle de ceinture",
                    img: "imgBoucleCeinture",
                    imgUrl: "./vestuario/boucle_ceinture.png",
                    desc: "est utilisée pour attacher une ceinture autour de la taille."
                },
                "Des lacets de chaussures": {
                    name: "Des lacets de chaussures",
                    img: "imgLacetsDeChaussures",
                    imgUrl: "./vestuario/lacets_de_chaussures.png",
                    desc: "sont utilisés pour lacer et serrer les chaussures."
                },
                "Des talons aiguilles": {
                    name: "Des talons aiguilles",
                    img: "imgTalonsAiguille",
                    imgUrl: "./vestuario/talons_aiguille.png",
                    desc: "sont des chaussures à talons très hauts et fins."
                },
                "Des escarpins": {
                    name: "Des escarpins",
                    img: "imgEscarpins",
                    imgUrl: "./vestuario/escarpins.png",
                    desc: "sont des chaussures à talons élégantes souvent portées pour des occasions formelles."
                },
                "Des chaussures plates": {
                    name: "Des chaussures plates",
                    img: "imgChaussuresPlates",
                    imgUrl: "./vestuario/chaussures_plates.png",
                    desc: "sont des chaussures sans talon pour plus de confort."
                },
                "Des bottes": {
                    name: "Des bottes",
                    img: "imgBottes",
                    imgUrl: "./vestuario/bottes.png",
                    desc: "sont des chaussures hautes couvrant généralement la cheville ou le mollet."
                },
                "Des souliers de ville": {
                    name: "Des souliers de ville",
                    img: "imgSouliersDeVille",
                    imgUrl: "./vestuario/souliers_de_ville.png",
                    desc: "sont des chaussures élégantes avec lacets, souvent portées avec des costumes."
                },
                "Des chaussures de tennis": {
                    name: "Des chaussures de tennis",
                    img: "imgChaussuresTennis",
                    imgUrl: "./vestuario/chaussures_tennis.png",
                    desc: "sont des chaussures conçues pour les activités sportives, en particulier le tennis."
                },
                "Une chaîne": {
                    name: "Une chaîne",
                    img: "imgChaine",
                    imgUrl: "./vestuario/chaine.png",
                    desc: "est un bijou en métal porté autour du cou."
                },
                "Des perles": {
                    name: "Des perles",
                    img: "imgPerles",
                    imgUrl: "./vestuario/perles.jpg",
                    desc: "sont des bijoux en forme de petites sphères, souvent utilisés pour les colliers ou les bracelets."
                },
                "Un médaillon": {
                    name: "Un médaillon",
                    img: "imgMedaillon",
                    imgUrl: "./vestuario/medaillon.png",
                    desc: "est un pendentif pouvant contenir des photos ou des souvenirs."
                },
                "Des boucles d'oreilles": {
                    name: "Des boucles d'oreilles",
                    img: "imgBouclesOreillesPercees",
                    imgUrl: "./vestuario/boucles_oreilles_percees.png",
                    desc: "sont des bijoux portés dans les oreilles percées."
                },
                "Une épingle": {
                    name: "Une épingle",
                    img: "imgEpingle",
                    imgUrl: "./vestuario/epingle.png",
                    desc: "est un petit objet utilisé pour fixer des tissus ou des accessoires."
                },
                "Un collier de perles": {
                    name: "Un collier de perles",
                    img: "imgCollierPerles",
                    imgUrl: "./vestuario/collier_perles.png",
                    desc: "est un bijou composé de perles enfilées ensemble."
                },
                "Une bague": {
                    name: "Une bague",
                    img: "imgBague",
                    imgUrl: "./vestuario/bague.png",
                    desc: "est un anneau porté autour du doigt, souvent comme bijou ou symbole de mariage."
                }
            },



            partiesDuCorps: {
                "la tête": {
                    name: "La tête",
                    img: "imgTete",
                    imgUrl: "./corps/tete.png",
                    desc: "est la partie supérieure du corps qui contient le cerveau, les yeux, les oreilles, le nez et la bouche."
                },
                "le cou": {
                    name: "Le cou",
                    img: "imgCou",
                    imgUrl: "./corps/cou.png",
                    desc: "relie la tête au reste du corps et contient la trachée et l'œsophage."
                },
                "les épaules": {
                    name: "Les épaules",
                    img: "imgEpaules",
                    imgUrl: "./corps/epaules.png",
                    desc: "sont les articulations qui relient les bras au tronc du corps."
                },
                "les bras": {
                    name: "Les bras",
                    img: "imgBras",
                    imgUrl: "./corps/bras.png",
                    desc: "sont les membres supérieurs qui permettent de saisir et de manipuler des objets."
                },
                "les coudes": {
                    name: "Les coudes",
                    img: "imgCoudes",
                    imgUrl: "./corps/coudes.png",
                    desc: "sont les articulations qui permettent aux bras de se plier."
                },
                "les avant-bras": {
                    name: "Les avant-bras",
                    img: "imgAvantBras",
                    imgUrl: "./corps/avant-bras.png",
                    desc: "sont la partie du bras située entre le coude et le poignet."
                },
                "les poignets": {
                    name: "Les poignets",
                    img: "imgPoignets",
                    imgUrl: "./corps/poignets.png",
                    desc: "sont les articulations qui relient les avant-bras aux mains."
                },
                "les mains": {
                    name: "Les mains",
                    img: "imgMains",
                    imgUrl: "./corps/mains.png",
                    desc: "sont les extrémités des bras utilisées pour toucher et saisir."
                },
                "les doigts": {
                    name: "Les doigts",
                    img: "imgDoigts",
                    imgUrl: "./corps/doigts.png",
                    desc: "sont les parties flexibles des mains qui permettent de manipuler des objets avec précision."
                },
                "la poitrine": {
                    name: "La poitrine",
                    img: "imgPoitrine",
                    imgUrl: "./corps/poitrine.png",
                    desc: "contient le cœur et les poumons, et est protégée par la cage thoracique."
                },
                "l'abdomen": {
                    name: "L'abdomen",
                    img: "imgAbdomen",
                    imgUrl: "./corps/abdomen.png",
                    desc: "est la partie du corps située entre la poitrine et le bassin, contenant les organes digestifs."
                },
                "les hanches": {
                    name: "Les hanches",
                    img: "imgHanches",
                    imgUrl: "./corps/hanche.png",
                    desc: "sont les articulations qui relient les jambes au tronc du corps."
                },
                "les cuisses": {
                    name: "Les cuisses",
                    img: "imgCuisses",
                    imgUrl: "./corps/cuisses.png",
                    desc: "sont la partie supérieure des jambes située entre les hanches et les genoux."
                },
                "les genoux": {
                    name: "Les genoux",
                    img: "imgGenoux",
                    imgUrl: "./corps/genoux.png",
                    desc: "sont les articulations qui permettent aux jambes de se plier."
                },
                "les jambes": {
                    name: "Les jambes",
                    img: "imgJambes",
                    imgUrl: "./corps/jambes.png",
                    desc: "sont les membres inférieurs du corps, utilisées pour marcher et courir."
                },
                "les mollets": {
                    name: "Les mollets",
                    img: "imgMollets",
                    imgUrl: "./corps/mollets.png",
                    desc: "sont la partie arrière inférieure des jambes, située sous les genoux."
                },
                "les chevilles": {
                    name: "Les chevilles",
                    img: "imgChevilles",
                    imgUrl: "./corps/chevilles.png",
                    desc: "sont les articulations qui relient les pieds aux jambes."
                },
                "les pieds": {
                    name: "Les pieds",
                    img: "imgPieds",
                    imgUrl: "./corps/pieds.png",
                    desc: "sont les extrémités des jambes, utilisés pour se tenir debout et marcher."
                },
                "les orteils": {
                    name: "Les orteils",
                    img: "imgOrteils",
                    imgUrl: "./corps/orteils.png",
                    desc: "sont les parties flexibles des pieds qui aident à maintenir l'équilibre."
                },
                "le dos": {
                    name: "Le dos",
                    img: "imgDos",
                    imgUrl: "./corps/dos.png",
                    desc: "est la partie arrière du tronc, soutenant la colonne vertébrale et protégeant les organes internes."
                }
            },

            transports: {
                "un bus": {
                    name: "Un bus",
                    img: "imgBus",
                    imgUrl: "./transports/bus.png",
                    desc: "est un véhicule utilisé pour le transport en commun."
                },
                "Le vélo": {
                    name: "Le vélo",
                    img: "imgVelo",
                    imgUrl: "./transports/bike.png",
                    desc: "est un véhicule à deux roues que l'on propulse en pédalant."
                },
                "un avion": {
                    name: "Un avion",
                    img: "imgAvion",
                    imgUrl: "./transports/plane.png",
                    desc: "est utilisé pour voyager sur de longues distances."
                },
                "un bateau": {
                    name: "Un bateau",
                    img: "imgBateau",
                    imgUrl: "./transports/boat.png",
                    desc: "navigue sur l'eau."
                },
                "une voiture": {
                    name: "Une voiture",
                    img: "imgVoiture",
                    imgUrl: "./transports/voiture.png",
                    desc: "est un véhicule privé utilisé pour se déplacer sur les routes."
                },
                "une moto": {
                    name: "Une moto",
                    img: "imgMoto",
                    imgUrl: "./transports/moto.png",
                    desc: "est un véhicule à deux roues motorisé."
                },
                "une rue": {
                    name: "Une rue",
                    img: "imgRue",
                    imgUrl: "./transports/rue.png",
                    desc: "est une voie publique dans une ville ou un village."
                },
                "le boulevard": {
                    name: "Un boulevard",
                    img: "imgBoulevard",
                    imgUrl: "./transports/boulevard.png",
                    desc: "est une grande rue ou avenue large, souvent bordée d'arbres ou de bâtiments importants."
                },
                "l'allée": {
                    name: "Une allée",
                    img: "imgAllee",
                    imgUrl: "./transports/allee.png",
                    desc: "est un chemin ou une allée, souvent bordée d'arbres ou située dans un parc ou un jardin."
                },
                "le chemin": {
                    name: "Un chemin",
                    img: "imgChemin",
                    imgUrl: "./transports/chemin.png",
                    desc: "est une petite route ou un sentier, souvent utilisé dans des zones rurales."
                },
                "l'impasse": {
                    name: "Une impasse",
                    img: "imgImpasse",
                    imgUrl: "./transports/impasse.png",
                    desc: "est une rue sans issue, souvent appelée cul-de-sac."
                },
                "la place": {
                    name: "Une place",
                    img: "imgPlace",
                    imgUrl: "./transports/place.png",
                    desc: "est un espace ouvert dans une ville où plusieurs rues peuvent converger."
                },
                "la route": {
                    name: "Une route",
                    img: "imgRoute",
                    imgUrl: "./transports/route.png",
                    desc: "est une voie de circulation située hors des zones urbaines, reliant souvent des villes ou des villages."
                },
                "le cours": {
                    name: "Un cours",
                    img: "imgCours",
                    imgUrl: "./transports/cours.png",
                    desc: "est une grande voie, souvent large, entourée de bâtiments importants."
                },
                "la voie": {
                    name: "Une voie",
                    img: "imgVoie",
                    imgUrl: "./transports/voie.png",
                    desc: "est un terme générique pour désigner toute voie de circulation."
                },
                "le passage": {
                    name: "Un passage",
                    img: "imgPassage",
                    imgUrl: "./transports/passage.png",
                    desc: "est une petite ruelle ou un chemin, souvent réservé aux piétons."
                },
                "le quai": {
                    name: "Un quai",
                    img: "imgQuai",
                    imgUrl: "./transports/quai.png",
                    desc: "est une voie située le long d'un fleuve, d'une rivière ou d'un canal."
                },
                "le rond-point": {
                    name: "Un rond-point",
                    img: "imgRondPoint",
                    imgUrl: "./transports/rond_point.png",
                    desc: "est un carrefour giratoire où plusieurs routes convergent."
                },
                "l'esplanade": {
                    name: "Une esplanade",
                    img: "imgEsplanade",
                    imgUrl: "./transports/esplanade.png",
                    desc: "est un grand espace ouvert ou une large avenue, souvent utilisée pour des promenades."
                },
                "la promenade": {
                    name: "Une promenade",
                    img: "imgPromenade",
                    imgUrl: "./transports/promenade.png",
                    desc: "est un chemin piétonnier, généralement situé près d'une plage ou d'un parc."
                },
                "le faubourg": {
                    name: "Un faubourg",
                    img: "imgFaubourg",
                    imgUrl: "./transports/faubourg.png",
                    desc: "est une ancienne banlieue ou quartier suburbain maintenant intégré à une ville."
                },
                "un camion": {
                    name: "Un camion",
                    img: "imgCamion",
                    imgUrl: "./transports/camion.png",
                    desc: "est un grand véhicule utilisé pour transporter des marchandises."
                },
                "un train": {
                    name: "Un train",
                    img: "imgTrain",
                    imgUrl: "./transports/train.png",
                    desc: "est un moyen de transport sur rails pour les passagers ou les marchandises."
                },
                "un avion": {
                    name: "Un avion",
                    img: "imgAvion",
                    imgUrl: "./transports/avion.png",
                    desc: "est un véhicule aérien utilisé pour voyager sur de longues distances."
                },
                "un hélicoptère": {
                    name: "Un hélicoptère",
                    img: "imgHelicoptere",
                    imgUrl: "./transports/helicoptere.png",
                    desc: "est un aéronef à rotors utilisé pour des déplacements rapides et verticaux."
                },
                "un aéroport": {
                    name: "Un aéroport",
                    img: "imgAeroport",
                    imgUrl: "./transports/aeroport.png",
                    desc: "est un endroit où les avions décollent et atterrissent."
                },
                "une station de métro": {
                    name: "Une station de métro",
                    img: "imgStationMetro",
                    imgUrl: "./transports/station_de_metro.png",
                    desc: "est un endroit où l'on prend le métro dans les grandes villes."
                },
                "un arrêt d'autobus": {
                    name: "Un arrêt d'autobus",
                    img: "imgArretAutobus",
                    imgUrl: "./transports/arret_d_autobus.png",
                    desc: "est un endroit où les bus s'arrêtent pour prendre des passagers."
                }

            },

            partes_internes_du_carro: {
                "un verrouillage des portes": {
                    name: "Un verrouillage des portes",
                    img: "imgVerrouillageDesPortes",
                    imgUrl: "./car_interior/verrouillage_des_portes.jpg",
                    desc: "est un système qui permet de verrouiller ou déverrouiller les portes de la voiture."
                },
                "un volant": {
                    name: "Un volant",
                    img: "imgVolant",
                    imgUrl: "./car_interior/volant.jpg",
                    desc: "est utilisé pour diriger la voiture."
                },
                "un compteur de vitesse": {
                    name: "Un compteur de vitesse",
                    img: "imgCompteurDeVitesse",
                    imgUrl: "./car_interior/compteur_de_vitesse.jpg",
                    desc: "indique la vitesse à laquelle la voiture roule."
                },
                "un indicateur de température du moteur": {
                    name: "Un indicateur de température du moteur",
                    img: "imgIndicateurTemperatureMoteur",
                    imgUrl: "./car_interior/indicateur_de_temperature_du_moteur.png",
                    desc: "indique la température du moteur."
                },
                "une jauge d'essence": {
                    name: "Une jauge d'essence",
                    img: "imgJaugeEssence",
                    imgUrl: "./car_interior/jauge_d_essence.jpg",
                    desc: "indique la quantité d'essence restante dans le réservoir."
                },
                "un klaxon": {
                    name: "Un klaxon",
                    img: "imgKlaxon",
                    imgUrl: "./car_interior/klaxon.jpg",
                    desc: "est utilisé pour émettre un son et avertir les autres usagers de la route."
                },
                "un rétroviseur": {
                    name: "Un rétroviseur",
                    img: "imgRetroviseur",
                    imgUrl: "./car_interior/retroviseur.jpg",
                    desc: "permet de voir ce qui se passe derrière la voiture."
                },
                "des feux de détresse": {
                    name: "Des feux de détresse",
                    img: "imgFeuxDeDetresse",
                    imgUrl: "./car_interior/feux_de_detresse.jpg",
                    desc: "sont utilisés pour signaler un danger ou un arrêt d'urgence."
                },
                "une radio": {
                    name: "Une radio",
                    img: "imgRadio",
                    imgUrl: "./car_interior/radio.jpg",
                    desc: "permet de diffuser de la musique et des informations dans la voiture."
                },
                "un appareil de chauffage": {
                    name: "Un appareil de chauffage",
                    img: "imgAppareilDeChauffage",
                    imgUrl: "./car_interior/appareil_de_chauffage.jpg",
                    desc: "chauffe l'air dans l'habitacle de la voiture."
                },
                "une prise d'alimentation": {
                    name: "Une prise d'alimentation",
                    img: "imgPriseAlimentation",
                    imgUrl: "./car_interior/prise_d_alimentation.jpg",
                    desc: "est un point de connexion pour alimenter des appareils électriques dans la voiture."
                },
                "un odomètre": {
                    name: "Un odomètre",
                    img: "imgOdometre",
                    imgUrl: "./car_interior/odometre.jpg",
                    desc: "mesure la distance totale parcourue par la voiture."
                },
                "une jauge d'huile": {
                    name: "Une jauge d'huile",
                    img: "imgJaugeHuile",
                    imgUrl: "./car_interior/jauge_d_huile.jpg",
                    desc: "indique le niveau d'huile dans le moteur."
                },
                "un allumage": {
                    name: "Un allumage",
                    img: "imgAllumage",
                    imgUrl: "./car_interior/allumage.jpg",
                    desc: "permet de démarrer le moteur."
                },
                "un clignotant": {
                    name: "Un clignotant",
                    img: "imgClignotant",
                    imgUrl: "./car_interior/clignotant.jpg",
                    desc: "signale un changement de direction."
                },
                "un climatiseur": {
                    name: "Un climatiseur",
                    img: "imgClimatiseur",
                    imgUrl: "./car_interior/climatiseur.jpg",
                    desc: "permet de réguler la température de l'habitacle."
                },
                "un coussin gonflable": {
                    name: "Un coussin gonflable",
                    img: "imgCoussinGonflable",
                    imgUrl: "./car_interior/coussin_gonflable.jpg",
                    desc: "est un dispositif de sécurité qui se gonfle lors d'un accident."
                },
                "un coffre à gant": {
                    name: "Un coffre à gant",
                    img: "imgCoffreAGant",
                    imgUrl: "./car_interior/coffre_a_gant.jpg",
                    desc: "est un compartiment de rangement situé devant le siège passager."
                },
                "une pédale de frein": {
                    name: "Une pédale de frein",
                    img: "imgPedaleDeFrein",
                    imgUrl: "./car_interior/pedale_de_frein.jpg",
                    desc: "est utilisée pour ralentir ou arrêter la voiture."
                },
                "un levier de vitesses": {
                    name: "Un levier de vitesses",
                    img: "imgLevierDeVitesses",
                    imgUrl: "./car_interior/levier_de_vitesses.jpg",
                    desc: "permet de changer de rapport dans la transmission de la voiture."
                },
                "un embrayage": {
                    name: "Un embrayage",
                    img: "imgEmbrayage",
                    imgUrl: "./car_interior/embrayage.jpg",
                    desc: "permet de changer de vitesse dans une voiture à boîte manuelle."
                },
                "une pédale d'accélérateur": {
                    name: "Une pédale d'accélérateur",
                    img: "imgPedaleAccelerateur",
                    imgUrl: "./car_interior/pedale_d_accelerateur.jpg",
                    desc: "contrôle la vitesse de la voiture en augmentant la puissance du moteur."
                },
                "un frein à main": {
                    name: "Un frein à main",
                    img: "imgFreinAMain",
                    imgUrl: "./car_interior/frein_a_main.jpg",
                    desc: "est utilisé pour empêcher la voiture de bouger lorsqu'elle est garée."
                },
                "un siège avant": {
                    name: "Un siège avant",
                    img: "imgSiegeAvant",
                    imgUrl: "./car_interior/siege_avant.jpg",
                    desc: "est le siège situé à l'avant de la voiture, où s'assoient le conducteur et le passager."
                },
                "une ceinture de sécurité": {
                    name: "Une ceinture de sécurité",
                    img: "imgCeintureDeSecurite",
                    imgUrl: "./car_interior/ceinture_de_securite.jpg",
                    desc: "est utilisée pour maintenir les passagers en sécurité en cas d'accident."
                },
                "un siège arrière": {
                    name: "Un siège arrière",
                    img: "imgSiegeArriere",
                    imgUrl: "./car_interior/siege_arriere.jpg",
                    desc: "est le siège situé à l'arrière de la voiture, où s'assoient les passagers."
                }
            },
            partes_de_la_voiture_externes: {
                "le pare-brise": {
                    name: "Un pare-brise",
                    img: "imgPareBrise",
                    imgUrl: "./car/pare_brise.png",
                    desc: "est une vitre à l'avant d'un véhicule qui protège les passagers du vent et des débris."
                },
                "le pneu": {
                    name: "Un pneu",
                    img: "imgPneu",
                    imgUrl: "./car/pneu.png",
                    desc: "est une enveloppe en caoutchouc autour de la roue qui permet la traction sur la route."
                },
                "l'enjoliveur": {
                    name: "Un enjoliveur",
                    img: "imgEnjoliveur",
                    imgUrl: "./car/enjoliveur.png",
                    desc: "est une couverture décorative placée sur la roue d'une voiture."
                },
                "le feu arrière": {
                    name: "Un feu arrière",
                    img: "imgFeuArriere",
                    imgUrl: "./car/feu_arriere.png",
                    desc: "est un feu situé à l'arrière du véhicule pour indiquer la direction et le freinage."
                },
                "les essuie-glaces": {
                    name: "Des essuie-glaces",
                    img: "imgEssuieGlaces",
                    imgUrl: "./car/essuie_glaces.png",
                    desc: "sont utilisés pour nettoyer le pare-brise en cas de pluie ou de neige."
                },
                "le clignotant": {
                    name: "Un clignotant",
                    img: "imgClignotant",
                    imgUrl: "./car/clignotant.png",
                    desc: "est une lumière qui clignote pour indiquer un changement de direction."
                },
                "le réservoir d'essence": {
                    name: "Un réservoir d'essence",
                    img: "imgReservoirEssence",
                    imgUrl: "./car/reservoir_essence.png",
                    desc: "est un réservoir dans lequel est stocké le carburant pour le véhicule."
                },
                "le feu de frein": {
                    name: "Un feu de frein",
                    img: "imgFeuDeFrein",
                    imgUrl: "./car/feu_de_frein.png",
                    desc: "est une lumière à l'arrière du véhicule qui s'allume lorsque le conducteur freine."
                },
                "le rétroviseur extérieur": {
                    name: "Un rétroviseur extérieur",
                    img: "imgRetroviseurExterieur",
                    imgUrl: "./car/retroviseur_exterieur.png",
                    desc: "est un miroir situé à l'extérieur de la voiture pour voir derrière le véhicule."
                },
                "le phare": {
                    name: "Un phare",
                    img: "imgPhare",
                    imgUrl: "./car/phare.png",
                    desc: "est une lumière à l'avant du véhicule utilisée pour éclairer la route la nuit."
                },
                "le coffre": {
                    name: "Un coffre",
                    img: "imgCoffre",
                    imgUrl: "./car/coffre.png",
                    desc: "est l'espace à l'arrière du véhicule utilisé pour stocker des objets."
                },
                "le tuyau d'échappement": {
                    name: "Un tuyau d'échappement",
                    img: "imgTuyauDEchappement",
                    imgUrl: "./car/tuyau_d_echappement.png",
                    desc: "est un conduit qui évacue les gaz d'échappement du moteur."
                },
                "le capot": {
                    name: "Un capot",
                    img: "imgCapot",
                    imgUrl: "./car/capot.png",
                    desc: "est une couverture qui protège le moteur à l'avant du véhicule."
                },
                "le pare-chocs": {
                    name: "Un pare-chocs",
                    img: "imgPareChocs",
                    imgUrl: "./car/pare_chocs.png",
                    desc: "est une barre située à l'avant ou à l'arrière du véhicule pour absorber les chocs."
                },
                "la plaque d'immatriculation": {
                    name: "Une plaque d'immatriculation",
                    img: "imgPlaqueImmatriculation",
                    imgUrl: "./car/plaque_d_immatriculation.png",
                    desc: "est un panneau légal attaché au véhicule pour identifier celui-ci."
                },
                "la roue de secours": {
                    name: "Une roue de secours",
                    img: "imgRoueDeSecours",
                    imgUrl: "./car/roue_de_secours.png",
                    desc: "est une roue supplémentaire utilisée en cas de crevaison."
                },
                "la batterie": {
                    name: "Une batterie",
                    img: "imgBatterie",
                    imgUrl: "./car/batterie.png",
                    desc: "fournit l'énergie nécessaire pour démarrer le véhicule."
                },
                "le moteur": {
                    name: "Un moteur",
                    img: "imgMoteur",
                    imgUrl: "./car/moteur.png",
                    desc: "est la pièce principale d'un véhicule qui convertit le carburant en mouvement."
                }
            },
            materiel_de_bureau: {
                "l'ordinateur": {
                    name: "Un ordinateur",
                    img: "imgOrdinateur",
                    imgUrl: "./bureau/ordinateur.png",
                    desc: "est un dispositif électronique utilisé pour traiter et stocker des informations."
                },
                "l'imprimante jet encre": {
                    name: "Une imprimante à jet d'encre",
                    img: "imgImprimanteJetEncre",
                    imgUrl: "./bureau/imprimante_jet_encre.png",
                    desc: "est une imprimante qui utilise des jets d'encre pour imprimer des documents."
                },
                "l'imprimante laser": {
                    name: "Une imprimante laser",
                    img: "imgImprimanteLaser",
                    imgUrl: "./bureau/imprimante_laser.png",
                    desc: "est une imprimante qui utilise un faisceau laser pour produire des impressions de haute qualité."
                },
                "le scanner": {
                    name: "Un scanner",
                    img: "imgScanner",
                    imgUrl: "./bureau/scanner.png",
                    desc: "est un appareil utilisé pour numériser des documents ou des images."
                },
                "le télécopieur": {
                    name: "Un télécopieur",
                    img: "imgTelecopieur",
                    imgUrl: "./bureau/telecopieur.png",
                    desc: "est utilisé pour envoyer et recevoir des documents via une ligne téléphonique."
                },
                "le massicot": {
                    name: "Un massicot",
                    img: "imgMassicot",
                    imgUrl: "./bureau/massicot.png",
                    desc: "est utilisé pour couper du papier avec précision."
                },
                "la photocopieuse": {
                    name: "Une photocopieuse",
                    img: "imgPhotocopieuse",
                    imgUrl: "./bureau/photocopieuse.png",
                    desc: "est une machine utilisée pour faire des copies de documents."
                },
                "la déchiqueteuse": {
                    name: "Une déchiqueteuse",
                    img: "imgDechiqueteuse",
                    imgUrl: "./bureau/dechiqueteuse.png",
                    desc: "est utilisée pour détruire des documents en les découpant en petits morceaux."
                },
                "la calculatrice": {
                    name: "Une calculatrice",
                    img: "imgCalculatrice",
                    imgUrl: "./bureau/calculatrice.png",
                    desc: "est un appareil utilisé pour effectuer des calculs mathématiques."
                },
                "le taille crayons électrique": {
                    name: "Un taille-crayons électrique",
                    img: "imgTailleCrayonsElectrique",
                    imgUrl: "./bureau/taille_crayons_electrique.png",
                    desc: "est utilisé pour tailler les crayons automatiquement."
                },
                "le pèse lettre": {
                    name: "Un pèse-lettre",
                    img: "imgPeseLettre",
                    imgUrl: "./bureau/pese_lettre.png",
                    desc: "est utilisé pour peser des lettres et des petits colis."
                },
                "l'agrafeuse": {
                    name: "Une agrafeuse",
                    img: "imgAgrafeuse",
                    imgUrl: "./bureau/agrafeuse.png",
                    desc: "est utilisée pour assembler des feuilles de papier avec des agrafes."
                },
                "l'élastique": {
                    name: "Un élastique",
                    img: "imgElastique",
                    imgUrl: "./bureau/elastique.png",
                    desc: "est utilisé pour maintenir des objets ensemble."
                },
                "la pochette matelassée": {
                    name: "Une pochette matelassée",
                    img: "imgPochetteMatelassee",
                    imgUrl: "./bureau/pochette_matelassee.png",
                    desc: "est utilisée pour protéger des objets fragiles lors de l'expédition."
                },
                "le tampon encreur": {
                    name: "Un tampon encreur",
                    img: "imgTamponEncreur",
                    imgUrl: "./bureau/tampon_encreur.png",
                    desc: "est utilisé pour encrer des tampons pour marquer des documents."
                },
                "les agrafes": {
                    name: "Des agrafes",
                    img: "imgAgrafes",
                    imgUrl: "./bureau/agrafes.png",
                    desc: "sont utilisées avec une agrafeuse pour assembler des feuilles de papier."
                },
                "le clou à dessin": {
                    name: "Un clou à dessin",
                    img: "imgClouADessin",
                    imgUrl: "./bureau/clou_a_dessin.png",
                    desc: "est utilisé pour fixer des papiers sur un panneau d'affichage."
                },
                "l'étiquette d'expédition": {
                    name: "Une étiquette d'expédition",
                    img: "imgEtiquetteExpedition",
                    imgUrl: "./bureau/etiquette_d_expedition.png",
                    desc: "est utilisée pour indiquer les informations d'expédition sur un colis."
                },
                "le tampon": {
                    name: "Un tampon",
                    img: "imgTampon",
                    imgUrl: "./bureau/tampon.png",
                    desc: "est utilisé pour marquer des documents avec un sceau ou une signature."
                },
                "le ruban adhésif transparent": {
                    name: "Un ruban adhésif transparent",
                    img: "imgRubanAdhesifTransparent",
                    imgUrl: "./bureau/ruban_adhesif_transparent.png",
                    desc: "est utilisé pour coller des objets ensemble de manière discrète."
                },
                "le liquide correcteur": {
                    name: "Un liquide correcteur",
                    img: "imgLiquideCorrecteur",
                    imgUrl: "./bureau/liquide_correcteur.png",
                    desc: "est utilisé pour couvrir des erreurs écrites sur du papier."
                },
                "le papier à en-tête": {
                    name: "Du papier à en-tête",
                    img: "imgPapierEnTete",
                    imgUrl: "./bureau/papier_a_en_tete.png",
                    desc: "est utilisé pour les correspondances officielles avec des informations en haut du papier."
                },
                "le carnet de rendez-vous": {
                    name: "Un carnet de rendez-vous",
                    img: "imgCarnetRendezVous",
                    imgUrl: "./bureau/carnet_de_rendez-vous.png",
                    desc: "est utilisé pour organiser et noter les rendez-vous et les événements."
                },
                "le trombone": {
                    name: "Un trombone",
                    img: "imgTrombone",
                    imgUrl: "./bureau/trombone.png",
                    desc: "est utilisé pour attacher ensemble plusieurs feuilles de papier."
                },
                "le ruban correcteur": {
                    name: "Un ruban correcteur",
                    img: "imgRubanCorrecteur",
                    imgUrl: "./bureau/ruban_correcteur.png",
                    desc: "est utilisé pour couvrir des erreurs écrites avec un ruban blanc."
                },
                "l'enveloppe": {
                    name: "Une enveloppe",
                    img: "imgEnveloppe",
                    imgUrl: "./bureau/enveloppe.png",
                    desc: "est utilisée pour envoyer des lettres et des documents."
                },
                "l'organiseur": {
                    name: "Un organiseur",
                    img: "imgOrganiseur",
                    imgUrl: "./bureau/organiseur.png",
                    desc: "est utilisé pour planifier et organiser les tâches quotidiennes."
                },
                "le ruban d'emballage": {
                    name: "Un ruban d'emballage",
                    img: "imgRubanEmballage",
                    imgUrl: "./bureau/ruban_d_emballage.png",
                    desc: "est utilisé pour fermer et sécuriser les cartons et colis."
                },
                "le bloc format légal": {
                    name: "Un bloc format légal",
                    img: "imgBlocFormatLegal",
                    imgUrl: "./bureau/bloc_format_legal.png",
                    desc: "est un carnet de notes utilisé pour écrire des documents formels."
                },
                "le fichier rotatif": {
                    name: "Un fichier rotatif",
                    img: "imgFichierRotatif",
                    imgUrl: "./bureau/fichier_rotatif.png",
                    desc: "est utilisé pour stocker des fiches de contact et les organiser."
                },
                "Dossier de poche en plastique": {
                    name: "Dossier de poche en plastique",
                    img: "imgDossier",
                    imgUrl: "./bureau/dossier.png",
                    desc: "est utilisée pour organiser et classer des documents."
                },
                "la colle": {
                    name: "De la colle",
                    img: "imgColle",
                    imgUrl: "./bureau/colle.png",
                    desc: "est utilisée pour coller des objets ensemble de façon permanente."
                },
                "les notes autoadhésives": {
                    name: "Des notes autoadhésives",
                    img: "imgNotesAutoadhesives",
                    imgUrl: "./bureau/notes_autoadhesives.png",
                    desc: "sont utilisées pour prendre des notes rapides et les coller sur des surfaces."
                },
                "la cartouche d'encre": {
                    name: "Une cartouche d'encre",
                    img: "imgCartoucheEncre",
                    imgUrl: "./bureau/cartouche_d_encre.png",
                    desc: "est utilisée pour alimenter les imprimantes en encre."
                }
            },

            nature: {
                "la forêt pluviale": {
                    name: "Une forêt pluviale",
                    img: "imgForetPluviale",
                    imgUrl: "./nature/foret_pluviale.png",
                    desc: "est une forêt dense située dans une région tropicale, où il pleut abondamment."
                },
                "l'océan": {
                    name: "Un océan",
                    img: "imgOcean",
                    imgUrl: "./nature/ocean.png",
                    desc: "est une vaste étendue d'eau salée qui couvre une grande partie de la surface de la Terre."
                },
                "la plage": {
                    name: "Une plage",
                    img: "imgPlage",
                    imgUrl: "./nature/plage.png",
                    desc: "est une étendue de sable ou de galets au bord de la mer ou d'un lac."
                },
                "le sommet de montagne": {
                    name: "Un sommet de montagne",
                    img: "imgSommetDeMontagne",
                    imgUrl: "./nature/sommet_de_montagne.png",
                    desc: "est le point le plus élevé d'une montagne."
                },
                "la vallée": {
                    name: "Une vallée",
                    img: "imgVallee",
                    imgUrl: "./nature/vallee.png",
                    desc: "est une dépression allongée entre des montagnes ou des collines, souvent avec une rivière qui la traverse."
                },
                "la cascade": {
                    name: "Une cascade",
                    img: "imgCascade",
                    imgUrl: "./nature/cascade.png",
                    desc: "est une chute d'eau qui descend d'une hauteur le long d'une paroi rocheuse."
                },
                "la rivière": {
                    name: "Une rivière",
                    img: "imgRiviere",
                    imgUrl: "./nature/riviere.png",
                    desc: "est un cours d'eau naturel qui s'écoule vers un océan, une mer ou un lac."
                },
                "le désert": {
                    name: "Un désert",
                    img: "imgDesert",
                    imgUrl: "./nature/desert.png",
                    desc: "est une vaste région aride où les précipitations sont rares."
                },
                "la dune de sable": {
                    name: "Une dune de sable",
                    img: "imgDuneDeSable",
                    imgUrl: "./nature/dune_de_sable.png",
                    desc: "est une colline ou une crête formée par l'accumulation de sable déplacé par le vent."
                },
                "la péninsule": {
                    name: "Une péninsule",
                    img: "imgPeninsule",
                    imgUrl: "./nature/peninsule.png",
                    desc: "est une étendue de terre entourée d'eau sur trois côtés."
                },
                "l'île": {
                    name: "Une île",
                    img: "imgIle",
                    imgUrl: "./nature/ile.png",
                    desc: "est une terre entourée d'eau de tous les côtés."
                },
                "la baie": {
                    name: "Une baie",
                    img: "imgBaie",
                    imgUrl: "./nature/baie.png",
                    desc: "est une étendue d'eau entourée de terre sur trois côtés, plus petite qu'un golfe."
                },
                "la forêt": {
                    name: "Une forêt",
                    img: "imgForet",
                    imgUrl: "./nature/foret.png",
                    desc: "est une grande étendue couverte d'arbres et de végétation dense."
                },
                "la chaîne de montagnes": {
                    name: "Une chaîne de montagnes",
                    img: "imgChaineDeMontagnes",
                    imgUrl: "./nature/chaine_de_montagnes.png",
                    desc: "est une série de montagnes connectées entre elles."
                },
                "le rivage": {
                    name: "Un rivage",
                    img: "imgRivage",
                    imgUrl: "./nature/rivage.png",
                    desc: "est la bande de terre au bord d'un océan, d'une mer ou d'un lac."
                },
                "les collines": {
                    name: "Des collines",
                    img: "imgCollines",
                    imgUrl: "./nature/collines.png",
                    desc: "sont des élévations naturelles de terrain, plus petites que des montagnes."
                },
                "le lac": {
                    name: "Un lac",
                    img: "imgLac",
                    imgUrl: "./nature/lac.png",
                    desc: "est une grande étendue d'eau douce entourée de terre."
                },
                "le canyon": {
                    name: "Un canyon",
                    img: "imgCanyon",
                    imgUrl: "./nature/canyon.png",
                    desc: "est une vallée profonde aux parois abruptes, souvent creusée par une rivière."
                },
                "les plaines": {
                    name: "Des plaines",
                    img: "imgPlaines",
                    imgUrl: "./nature/plaines.png",
                    desc: "sont de vastes étendues de terrain plat ou légèrement ondulé."
                },
                "le pré": {
                    name: "Un pré",
                    img: "imgPre",
                    imgUrl: "./nature/pre.png",
                    desc: "est une prairie couverte d'herbes, souvent utilisée pour nourrir les animaux."
                },
                "l'étang": {
                    name: "Un étang",
                    img: "imgEtang",
                    imgUrl: "./nature/etang.png",
                    desc: "est une petite étendue d'eau stagnante, plus petite qu'un lac."
                }
            },

            sentiments_et_emotions: {
                "bonheur": {
                    name: "Le bonheur",
                    img: "imgBonheur",
                    imgUrl: "./emotions/bonheur.png",
                    desc: "est un sentiment de joie intense et de satisfaction."
                },
                "tristesse": {
                    name: "La tristesse",
                    img: "imgTristesse",
                    imgUrl: "./emotions/tristesse.png",
                    desc: "est un état émotionnel de peine ou de chagrin."
                },
                "colere": {
                    name: "La colère",
                    img: "imgColere",
                    imgUrl: "./emotions/colere.png",
                    desc: "est une forte émotion de mécontentement ou d'irritation."
                },
                "peur": {
                    name: "La peur",
                    img: "imgPeur",
                    imgUrl: "./emotions/peur.png",
                    desc: "est une émotion ressentie face à une menace ou un danger."
                },
                "surprise": {
                    name: "La surprise",
                    img: "imgSurprise",
                    imgUrl: "./emotions/surprise.png",
                    desc: "est une réaction à un événement inattendu."
                },
                "degout": {
                    name: "Le dégoût",
                    img: "imgDegout",
                    imgUrl: "./emotions/degout.png",
                    desc: "est une sensation d'aversion ou de répulsion."
                },
                "amour": {
                    name: "L'amour",
                    img: "imgAmour",
                    imgUrl: "./emotions/amour.png",
                    desc: "est un sentiment profond d'affection et d'attachement."
                },
                "jalousie": {
                    name: "La jalousie",
                    img: "imgJalousie",
                    imgUrl: "./emotions/jalousie.png",
                    desc: "est une émotion liée à la peur de perdre quelque chose ou quelqu'un."
                },
                "confusion": {
                    name: "La confusion",
                    img: "imgConfusion",
                    imgUrl: "./emotions/confusion.png",
                    desc: "est un état d'incertitude ou de désorientation."
                },
                "fierte": {
                    name: "La fierté",
                    img: "imgFierte",
                    imgUrl: "./emotions/fierte.png",
                    desc: "est un sentiment de satisfaction par rapport à ses réalisations."
                },
                "honte": {
                    name: "La honte",
                    img: "imgHonte",
                    imgUrl: "./emotions/honte.png",
                    desc: "est un sentiment d'embarras ou d'humiliation."
                },
                "anxiete": {
                    name: "L'anxiété",
                    img: "imgAnxiete",
                    imgUrl: "./emotions/anxiete.png",
                    desc: "est un état de préoccupation ou d'inquiétude intense."
                },
                "calme": {
                    name: "Le calme",
                    img: "imgCalme",
                    imgUrl: "./emotions/calme.png",
                    desc: "est un état de tranquillité et de paix intérieure."
                },
                "frustration": {
                    name: "La frustration",
                    img: "imgFrustration",
                    imgUrl: "./emotions/frustration.png",
                    desc: "est un sentiment d'irritation face à un obstacle."
                },
                "empathie": {
                    name: "L'empathie",
                    img: "imgEmpathie",
                    imgUrl: "./emotions/empathie.png",
                    desc: "est la capacité de comprendre et partager les sentiments d'autrui."
                },
                "ennui": {
                    name: "L'ennui",
                    img: "imgEnnui",
                    imgUrl: "./emotions/ennui.png",
                    desc: "est un sentiment de lassitude ou de manque d'intérêt."
                },
                "enthousiasme": {
                    name: "L'enthousiasme",
                    img: "imgEnthousiasme",
                    imgUrl: "./emotions/enthousiasme.png",
                    desc: "est une vive excitation ou passion pour quelque chose."
                },
                "solitude": {
                    name: "La solitude",
                    img: "imgSolitude",
                    imgUrl: "./emotions/solitude.png",
                    desc: "est le sentiment d'être seul ou isolé."
                },
                "espoir": {
                    name: "L'espoir",
                    img: "imgEspoir",
                    imgUrl: "./emotions/espoir.png",
                    desc: "est un sentiment d'attente positive pour l'avenir."
                },
                "gratitude": {
                    name: "La gratitude",
                    img: "imgGratitude",
                    imgUrl: "./emotions/gratitude.png",
                    desc: "est la reconnaissance pour un bienfait reçu."
                }
            },

            ustensiles_de_cuisine: {
                "La casserole": {
                    name: "La casserole",
                    img: "imgCasserole",
                    imgUrl: "./kitchen/casserole.png",
                    desc: "est un récipient utilisé pour la cuisson des aliments sur la cuisinière."
                },
                "Le couvercle": {
                    name: "Le couvercle",
                    img: "imgCouvercle",
                    imgUrl: "./kitchen/couvercle.png",
                    desc: "est utilisé pour couvrir une casserole ou une poêle."
                },
                "La poêle": {
                    name: "La poêle",
                    img: "imgPoele",
                    imgUrl: "./kitchen/poele.png",
                    desc: "est utilisée pour faire frire ou sauter des aliments."
                },
                "La cocotte-minute": {
                    name: "La cocotte-minute",
                    img: "imgCocotteMinute",
                    imgUrl: "./kitchen/cocotte_minute.png",
                    desc: "est une marmite qui cuit sous pression pour accélérer la cuisson."
                },
                "Le moule": {
                    name: "Le moule",
                    img: "imgMoule",
                    imgUrl: "./kitchen/moule.png",
                    desc: "est utilisé pour cuire des gâteaux et d'autres pâtisseries."
                },
                "La bouilloire": {
                    name: "La bouilloire",
                    img: "imgBouilloire",
                    imgUrl: "./kitchen/bouilloire.png",
                    desc: "est utilisée pour faire bouillir de l'eau."
                },
                "Le pot en verre": {
                    name: "Le pot en verre",
                    img: "imgPotVerre",
                    imgUrl: "./kitchen/pot_verre.png",
                    desc: "est un récipient transparent utilisé pour conserver des aliments ou liquides."
                },
                "Le pot en plastique": {
                    name: "Le pot en plastique",
                    img: "imgPotPlastique",
                    imgUrl: "./kitchen/pot_plastique.png",
                    desc: "est un récipient léger en plastique utilisé pour stocker des aliments."
                },
                "La râpe à fromage": {
                    name: "La râpe à fromage",
                    img: "imgRapeFromage",
                    imgUrl: "./kitchen/rape_fromage.png",
                    desc: "est utilisée pour râper le fromage ou d'autres aliments."
                },
                "Le torchon": {
                    name: "Le torchon",
                    img: "imgTorchon",
                    imgUrl: "./kitchen/torchon.png",
                    desc: "est utilisé pour essuyer la vaisselle ou nettoyer les surfaces."
                },
                "La planche à découper": {
                    name: "La planche à découper",
                    img: "imgPlancheDecouper",
                    imgUrl: "./kitchen/planche_decouper.png",
                    desc: "est utilisée pour couper des aliments en toute sécurité."
                },
                "Le bol / Le saladier": {
                    name: "Le bol / Le saladier",
                    img: "imgBolSalladier",
                    imgUrl: "./kitchen/bol_salladier.png",
                    desc: "est un grand récipient utilisé pour mélanger ou servir des salades."
                },
                "Les gants de cuisine": {
                    name: "Les gants de cuisine",
                    img: "imgGantsCuisine",
                    imgUrl: "./kitchen/gants_cuisine.png",
                    desc: "sont utilisés pour protéger les mains des surfaces chaudes."
                },
                "Le mélangeur / Le mixeur": {
                    name: "Le mélangeur / Le mixeur",
                    img: "imgMelangeur",
                    imgUrl: "./kitchen/melangeur.png",
                    desc: "est un appareil électrique utilisé pour mélanger ou broyer les ingrédients."
                },
                "Le batteur-mélangeur": {
                    name: "Le batteur-mélangeur",
                    img: "imgBatteurMelangeur",
                    imgUrl: "./kitchen/batteur_melangeur.png",
                    desc: "est un appareil utilisé pour battre et mélanger des ingrédients."
                },
                "La cafetière": {
                    name: "La cafetière",
                    img: "imgCafetiere",
                    imgUrl: "./kitchen/cafetiere.png",
                    desc: "est utilisée pour préparer du café."
                },
                "Le four": {
                    name: "Le four",
                    img: "imgFour",
                    imgUrl: "./kitchen/four.png",
                    desc: "est un appareil utilisé pour cuire des aliments."
                },
                "La cuisinière / La plaque de cuisson": {
                    name: "La cuisinière / La plaque de cuisson",
                    img: "imgCuisiniere",
                    imgUrl: "./kitchen/cuisiniere.png",
                    desc: "est utilisée pour cuire des aliments sur une surface chauffée."
                },
                "Le grille-pain": {
                    name: "Le grille-pain",
                    img: "imgGrillePain",
                    imgUrl: "./kitchen/grille_pain.png",
                    desc: "est un appareil utilisé pour griller des tranches de pain."
                },
                "Le mixeur plongeant": {
                    name: "Le mixeur plongeant",
                    img: "imgMixeurPlongeant",
                    imgUrl: "./kitchen/mixeur_plongeant.png",
                    desc: "est un appareil utilisé pour mélanger des ingrédients directement dans un récipient."
                },
                "La cuillère en bois": {
                    name: "La cuillère en bois",
                    img: "imgCuillereBois",
                    imgUrl: "./kitchen/cuillere_bois.png",
                    desc: "est utilisée pour mélanger les aliments pendant la cuisson, surtout dans les casseroles."
                },
                "La louche": {
                    name: "La louche",
                    img: "imgLouche",
                    imgUrl: "./kitchen/louche.png",
                    desc: "est utilisée pour servir des soupes ou des sauces."
                },
                "Le fouet": {
                    name: "Le fouet",
                    img: "imgFouet",
                    imgUrl: "./kitchen/fouet.png",
                    desc: "est utilisé pour fouetter ou mélanger les ingrédients."
                },
                "L'écumoire": {
                    name: "L'écumoire",
                    img: "imgEcumoire",
                    imgUrl: "./kitchen/ecumoire.png",
                    desc: "est utilisée pour écumer les liquides ou égoutter les aliments frits."
                },
                "Le rouleau à pâtisserie": {
                    name: "Le rouleau à pâtisserie",
                    img: "imgRouleauPatisserie",
                    imgUrl: "./kitchen/rouleau_patisserie.png",
                    desc: "est utilisé pour étaler la pâte avant la cuisson."
                },
                "Le tamis": {
                    name: "Le tamis",
                    img: "imgTamis",
                    imgUrl: "./kitchen/tamis.png",
                    desc: "est utilisé pour tamiser la farine ou d'autres ingrédients en poudre."
                },
                "La pince à pâtes": {
                    name: "La pince à pâtes",
                    img: "imgPincePates",
                    imgUrl: "./kitchen/pince_pates.png",
                    desc: "est utilisée pour saisir et servir les pâtes."
                },
                "Le presse-purée": {
                    name: "Le presse-purée",
                    img: "imgPressePuree",
                    imgUrl: "./kitchen/presse_puree.png",
                    desc: "est utilisé pour écraser les pommes de terre ou d'autres légumes cuits."
                },
                "L'éplucheur": {
                    name: "L'éplucheur",
                    img: "imgEplucheur",
                    imgUrl: "./kitchen/eplucheur.png",
                    desc: "est utilisé pour éplucher les légumes ou les fruits."
                },
                "Les ciseaux": {
                    name: "Les ciseaux",
                    img: "imgCiseaux",
                    imgUrl: "./kitchen/ciseaux.png",
                    desc: "sont utilisés pour couper divers aliments ou emballages."
                },
                "La poche à douille": {
                    name: "La poche à douille",
                    img: "imgPocheDouille",
                    imgUrl: "./kitchen/poche_douille.png",
                    desc: "est utilisée pour décorer les gâteaux en pressant la crème ou la pâte."
                },
                "Le tire-bouchon": {
                    name: "Le tire-bouchon",
                    img: "imgTireBouchon",
                    imgUrl: "./kitchen/tire_bouchon.png",
                    desc: "est utilisé pour ouvrir les bouteilles de vin en retirant le bouchon."
                },
                "L'ouvre-bouteille": {
                    name: "L'ouvre-bouteille",
                    img: "imgOuvreBouteille",
                    imgUrl: "./kitchen/ouvre_bouteille.png",
                    desc: "est utilisé pour ouvrir des bouteilles fermées avec des capsules."
                },
                "L'ouvre-boîte": {
                    name: "L'ouvre-boîte",
                    img: "imgOuvreBoite",
                    imgUrl: "./kitchen/ouvre_boite.png",
                    desc: "est utilisé pour ouvrir les boîtes de conserve."
                },
                "La canette": {
                    name: "La canette",
                    img: "imgCanette",
                    imgUrl: "./kitchen/canette.png",
                    desc: "est un petit récipient en métal utilisé pour stocker des boissons."
                },
                "Le papier d'aluminium": {
                    name: "Le papier d'aluminium",
                    img: "imgPapierAluminium",
                    imgUrl: "./kitchen/papier_aluminium.png",
                    desc: "est utilisé pour envelopper des aliments et conserver leur fraîcheur."
                },
                "Le sachet plastique": {
                    name: "Le sachet plastique",
                    img: "imgSachetPlastique",
                    imgUrl: "./kitchen/sachet_plastique.png",
                    desc: "est utilisé pour stocker des aliments ou les conserver."
                },
                "Le moule à glaçons": {
                    name: "Le moule à glaçons",
                    img: "imgMouleGlacons",
                    imgUrl: "./kitchen/moule_glacons.png",
                    desc: "est utilisé pour fabriquer des glaçons dans le congélateur."
                },
                "Le briquet": {
                    name: "Le briquet",
                    img: "imgBriquet",
                    imgUrl: "./kitchen/briquet.png",
                    desc: "est utilisé pour allumer le feu ou un réchaud."
                },
                "L'assiette / Le plat": {
                    name: "L'assiette / Le plat",
                    img: "imgAssiette",
                    imgUrl: "./kitchen/assiette.png",
                    desc: "est un récipient plat utilisé pour servir les aliments."
                },
                "L'assiette creuse": {
                    name: "L'assiette creuse",
                    img: "imgAssietteCreuse",
                    imgUrl: "./kitchen/assiette_creuse.png",
                    desc: "est utilisée pour servir des soupes ou des plats liquides."
                },
                "La fourchette": {
                    name: "La fourchette",
                    img: "imgFourchette",
                    imgUrl: "./kitchen/fourchette.png",
                    desc: "est un ustensile utilisé pour manger des aliments solides."
                },
                "Le couteau": {
                    name: "Le couteau",
                    img: "imgCouteau",
                    imgUrl: "./kitchen/couteau.png",
                    desc: "est un ustensile tranchant utilisé pour couper des aliments."
                },
                "La cuillère": {
                    name: "La cuillère",
                    img: "imgCuillere",
                    imgUrl: "./kitchen/cuillere.png",
                    desc: "est un ustensile utilisé pour manger des aliments liquides ou semi-liquides."
                },
                "Le verre à vin": {
                    name: "Le verre à vin",
                    img: "imgVerreVin",
                    imgUrl: "./kitchen/verre_vin.png",
                    desc: "est utilisé pour servir du vin."
                },
                "Le verre à vin mousseux": {
                    name: "Le verre à vin mousseux",
                    img: "imgVerreMousseux",
                    imgUrl: "./kitchen/verre_mousseux.png",
                    desc: "est un verre utilisé pour servir des vins mousseux, comme le champagne."
                },
                "Le verre": {
                    name: "Le verre",
                    img: "imgVerre",
                    imgUrl: "./kitchen/verre.png",
                    desc: "est un récipient utilisé pour boire des liquides."
                },
                "La théière": {
                    name: "La théière",
                    img: "imgTheiere",
                    imgUrl: "./kitchen/theiere.png",
                    desc: "est utilisée pour infuser et servir du thé."
                },
                "Le mug": {
                    name: "Le mug",
                    img: "imgMug",
                    imgUrl: "./kitchen/mug.png",
                    desc: "est une grande tasse utilisée pour boire des boissons chaudes."
                },
                "La tasse": {
                    name: "La tasse",
                    img: "imgTasse",
                    imgUrl: "./kitchen/tasse.png",
                    desc: "est utilisée pour boire des boissons chaudes comme le café ou le thé."
                },
                "La soucoupe": {
                    name: "La soucoupe",
                    img: "imgSoucoupe",
                    imgUrl: "./kitchen/soucoupe.png",
                    desc: "est une petite assiette sur laquelle on place une tasse."
                },
                "Le plateau": {
                    name: "Le plateau",
                    img: "imgPlateau",
                    imgUrl: "./kitchen/plateau.png",
                    desc: "est utilisé pour transporter plusieurs plats ou boissons."
                },
                "La bouteille de vin": {
                    name: "La bouteille de vin",
                    img: "imgBouteilleVin",
                    imgUrl: "./kitchen/bouteille_vin.png",
                    desc: "est utilisée pour stocker et servir du vin."
                },
                "La bouteille d'eau": {
                    name: "La bouteille d'eau",
                    img: "imgBouteilleEau",
                    imgUrl: "./kitchen/bouteille_eau.png",
                    desc: "est utilisée pour stocker de l'eau ou d'autres boissons."
                },
                "Le panier": {
                    name: "Le panier",
                    img: "imgPanier",
                    imgUrl: "./kitchen/panier.png",
                    desc: "est un récipient utilisé pour transporter des aliments ou des produits."
                },
                "La balance": {
                    name: "La balance",
                    img: "imgBalance",
                    imgUrl: "./kitchen/balance.png",
                    desc: "est utilisée pour peser les ingrédients."
                },
                "Le tiroir": {
                    name: "Le tiroir",
                    img: "imgTiroir",
                    imgUrl: "./kitchen/tiroir.png",
                    desc: "est utilisé pour ranger des ustensiles et autres articles de cuisine."
                },
                "L'armoire": {
                    name: "L'armoire",
                    img: "imgArmoire",
                    imgUrl: "./kitchen/armoire.png",
                    desc: "est utilisée pour stocker des ustensiles et des provisions."
                },
                "Le bol à fruits": {
                    name: "Le bol à fruits",
                    img: "imgBolFruits",
                    imgUrl: "./kitchen/bol_fruits.png",
                    desc: "est utilisé pour stocker et présenter des fruits."
                },
                "Le paquet": {
                    name: "Le paquet",
                    img: "imgPaquet",
                    imgUrl: "./kitchen/paquet.png",
                    desc: "est utilisé pour emballer ou stocker des aliments."
                },
                "La serviette": {
                    name: "La serviette",
                    img: "imgServiette",
                    imgUrl: "./kitchen/serviette.png",
                    desc: "est utilisée pour s'essuyer les mains ou la bouche pendant un repas."
                },
                "Le Thermos": {
                    name: "Le Thermos",
                    img: "imgThermos",
                    imgUrl: "./kitchen/thermos.png",
                    desc: "est un récipient isolé qui conserve les boissons chaudes ou froides."
                }

            },


            plaques_transito: {
                "Le stop": {
                    name: "Un stop",
                    img: "imgStop",
                    imgUrl: "./transito/stop.png",
                    desc: "est un panneau qui oblige les conducteurs à s'arrêter complètement avant de continuer."
                },
                "Cédez le passage": {
                    name: "Cédez le passage",
                    img: "imgCedezLePassage",
                    imgUrl: "./transito/cedez_le_passage.png",
                    desc: "indique que les conducteurs doivent céder la priorité aux autres véhicules."
                },
                "La limitation de vitesse": {
                    name: "Limitation de vitesse",
                    img: "imgLimitationVitesse",
                    imgUrl: "./transito/limitation_vitesse.png",
                    desc: "est un panneau qui indique la vitesse maximale autorisée sur une route."
                },
                "La voie réservée": {
                    name: "Voie réservée",
                    img: "imgVoieReservee",
                    imgUrl: "./transito/voie_reservee.png",
                    desc: "est une voie réservée à certains types de véhicules, comme les bus ou les taxis."
                },
                "L'interdiction de tourner à gauche/droite": {
                    name: "Interdiction de tourner à gauche/droite",
                    img: "imgInterdictionTourner",
                    imgUrl: "./transito/interdiction_tourner.png",
                    desc: "indique qu'il est interdit de tourner à gauche ou à droite à cet endroit."
                },
                "Le stationnement réservé": {
                    name: "Stationnement réservé",
                    img: "imgStationnementReserve",
                    imgUrl: "./transito/stationnement_reserve.png",
                    desc: "indique qu'une zone de stationnement est réservée pour certains véhicules."
                },
                "L'aire de repos": {
                    name: "Aire de repos",
                    img: "imgAireDeRepos",
                    imgUrl: "./transito/aire_de_repos.png",
                    desc: "est une zone sur l'autoroute où les conducteurs peuvent se reposer."
                },
                "La zone piétonne": {
                    name: "Zone piétonne",
                    img: "imgZonePietonne",
                    imgUrl: "./transito/zone_pietonne.png",
                    desc: "indique une zone réservée aux piétons."
                },
                "Les travaux en cours": {
                    name: "Travaux en cours",
                    img: "imgTravauxEnCours",
                    imgUrl: "./transito/travaux_en_cours.png",
                    desc: "indique des travaux de construction ou de réparation sur la route."
                },
                "Le danger": {
                    name: "Danger",
                    img: "imgDanger",
                    imgUrl: "./transito/danger.png",
                    desc: "est un panneau avertissant d'un danger imminent sur la route."
                },
                "La sortie": {
                    name: "Sortie",
                    img: "imgSortie",
                    imgUrl: "./transito/sortie.png",
                    desc: "indique une sortie sur une route ou une autoroute."
                },
                "La rue barrée": {
                    name: "Rue barrée",
                    img: "imgRueBarree",
                    imgUrl: "./transito/rue_barree.png",
                    desc: "indique qu'une rue est bloquée et inaccessible."
                },
                "Attention enfants": {
                    name: "Attention enfants",
                    img: "imgAttentionEnfants",
                    imgUrl: "./transito/attention_enfants.png",
                    desc: "avertit que des enfants peuvent être présents, comme près d'une école."
                },
                "Le feu de signalisation": {
                    name: "Un feu de signalisation",
                    img: "imgFeuSignalisation",
                    imgUrl: "./transito/feu_signalisation.png",
                    desc: "est un dispositif qui régule la circulation à une intersection."
                },
                "Le panneau de signalisation": {
                    name: "Un panneau de signalisation",
                    img: "imgPanneauSignalisation",
                    imgUrl: "./transito/panneau_signalisation.png",
                    desc: "est un signe qui informe les conducteurs des règles et des dangers sur la route."
                },
                "L'embouteillage": {
                    name: "Un embouteillage",
                    img: "imgEmbouteillage",
                    imgUrl: "./transito/embouteillage.png",
                    desc: "est une accumulation de véhicules qui ralentit ou bloque la circulation."
                },

                "La priorité à droite": {
                    name: "La priorité à droite",
                    img: "imgPrioriteDroite",
                    imgUrl: "./transito/priorite_droite.png",
                    desc: "est une règle de circulation où les véhicules venant de droite ont la priorité."
                },
                "Le sens interdit": {
                    name: "Un sens interdit",
                    img: "imgSensInterdit",
                    imgUrl: "./transito/sens_interdit.png",
                    desc: "indique qu'il est interdit de circuler dans cette direction."
                },

                "Le stationnement interdit": {
                    name: "Un stationnement interdit",
                    img: "imgStationnementInterdit",
                    imgUrl: "./transito/stationnement_interdit.png",
                    desc: "signifie qu'il est interdit de stationner dans cette zone."
                },

            },
            rodovias_vias: {
                "L'autoroute": {
                    name: "Une autoroute",
                    img: "imgAutoroute",
                    imgUrl: "./transito/autoroute.png",
                    desc: "est une route rapide à plusieurs voies avec des entrées et des sorties spécifiques."
                },
                "La voie rapide": {
                    name: "Une voie rapide",
                    img: "imgVoieRapide",
                    imgUrl: "./transito/voie_rapide.png",
                    desc: "est une route réservée aux véhicules motorisés pour circuler à grande vitesse."
                },
                "La bretelle d'accès": {
                    name: "Une bretelle d'accès",
                    img: "imgBretelleAcces",
                    imgUrl: "./transito/bretelle_acces.png",
                    desc: "est une voie permettant d'accéder à une autoroute ou à une route principale."
                },
                "La sortie d'autoroute": {
                    name: "Une sortie d'autoroute",
                    img: "imgSortieAutoroute",
                    imgUrl: "./transito/sortie_autoroute.png",
                    desc: "est un point de sortie permettant aux véhicules de quitter l'autoroute."
                },
                "La voie de dépassement": {
                    name: "Une voie de dépassement",
                    img: "imgVoieDepassement",
                    imgUrl: "./transito/voie_depassement.png",
                    desc: "est une voie utilisée pour dépasser d'autres véhicules."
                },
                "Le poste de péage": {
                    name: "Un poste de péage",
                    img: "imgPostePeage",
                    imgUrl: "./transito/poste_peage.png",
                    desc: "est un endroit où les conducteurs paient pour utiliser certaines routes."
                },
                "Le pont autoroutier": {
                    name: "Un pont autoroutier",
                    img: "imgPontAutoroutier",
                    imgUrl: "./transito/pont_autoroutier.png",
                    desc: "est une structure qui permet aux véhicules de traverser une autoroute ou une rivière."
                },
                "Le tunnel": {
                    name: "Un tunnel",
                    img: "imgTunnel",
                    imgUrl: "./transito/tunnel.png",
                    desc: "est un passage souterrain traversé par des véhicules."
                },
                "L'intersection": {
                    name: "Une intersection",
                    img: "imgIntersection",
                    imgUrl: "./transito/intersection.png",
                    desc: "est un croisement où deux ou plusieurs routes se rencontrent."
                },
                "La piste cyclable": {
                    name: "Une piste cyclable",
                    img: "imgPisteCyclable",
                    imgUrl: "./transito/piste_cyclable.png",
                    desc: "est une voie réservée aux vélos."
                },
                "Le rond-point": {
                    name: "Un rond-point",
                    img: "imgRondPoint",
                    imgUrl: "./transito/rond_point.png",
                    desc: "est une intersection circulaire qui permet de réguler le flux de véhicules."
                },
                "La route à sens unique": {
                    name: "Une route à sens unique",
                    img: "imgRouteSensUnique",
                    imgUrl: "./transito/route_sens_unique.png",
                    desc: "est une rue où les véhicules ne peuvent circuler que dans une seule direction."
                },
                "Le parking souterrain": {
                    name: "Un parking souterrain",
                    img: "imgParkingSouterrain",
                    imgUrl: "./transito/parking_souterrain.png",
                    desc: "est un parking situé sous terre."
                },
                "Le passage piéton": {
                    name: "Un passage piéton",
                    img: "imgPassagePieton",
                    imgUrl: "./transito/passage_pieton.png",
                    desc: "est un endroit où les piétons peuvent traverser la route en toute sécurité."
                },
            },
            directions: {
                "Tournez à gauche": {
                    name: "Tournez à gauche",
                    img: "imgTournezGauche",
                    imgUrl: "./directions/tournez_gauche.png",
                    desc: "est une instruction pour indiquer de tourner à gauche."
                },
                "Tournez à droite": {
                    name: "Tournez à droite",
                    img: "imgTournezDroite",
                    imgUrl: "./directions/tournez_droite.png",
                    desc: "est une instruction pour indiquer de tourner à droite."
                },
                "Allez tout droit": {
                    name: "Allez tout droit",
                    img: "imgAllezToutDroit",
                    imgUrl: "./directions/allez_tout_droit.png",
                    desc: "indique que vous devez continuer tout droit."
                },
                "Prenez la première à gauche": {
                    name: "Prenez la première à gauche",
                    img: "imgPremiereGauche",
                    imgUrl: "./directions/premiere_gauche.png",
                    desc: "indique que vous devez prendre la première rue à gauche."
                },
                "Prenez la deuxième à droite": {
                    name: "Prenez la deuxième à droite",
                    img: "imgDeuxiemeDroite",
                    imgUrl: "./directions/deuxieme_droite.png",
                    desc: "indique que vous devez prendre la deuxième rue à droite."
                },
                "Continuez jusqu'au rond-point": {
                    name: "Continuez jusqu'au rond-point",
                    img: "imgRondPoint",
                    imgUrl: "./directions/continuez_rond_point.png",
                    desc: "indique que vous devez continuer tout droit jusqu'au rond-point."
                },
                "Traversez le pont": {
                    name: "Traversez le pont",
                    img: "imgTraversezPont",
                    imgUrl: "./directions/traversez_pont.png",
                    desc: "est une instruction pour traverser un pont."
                },
                "Suivez les panneaux pour...": {
                    name: "Suivez les panneaux pour...",
                    img: "imgSuivezPanneaux",
                    imgUrl: "./directions/suivez_panneaux.png",
                    desc: "est une instruction pour suivre les panneaux en direction d'un lieu spécifique."
                },
                "Descendez la rue": {
                    name: "Descendez la rue",
                    img: "imgDescendezRue",
                    imgUrl: "./directions/descendez_rue.png",
                    desc: "est une instruction pour descendre une rue."
                },
                "Montez la colline": {
                    name: "Montez la colline",
                    img: "imgMontezColline",
                    imgUrl: "./directions/montez_colline.png",
                    desc: "est une instruction pour monter une colline."
                },
                "Longer la rivière": {
                    name: "Longer la rivière",
                    img: "imgLongerRiviere",
                    imgUrl: "./directions/longer_riviere.png",
                    desc: "indique que vous devez suivre le long de la rivière."
                },
                "Au bout de la rue": {
                    name: "Au bout de la rue",
                    img: "imgAuBoutRue",
                    imgUrl: "./directions/au_bout_rue.png",
                    desc: "indique que vous devez aller jusqu'au bout de la rue."
                },
                "À l'angle de la rue": {
                    name: "À l'angle de la rue",
                    img: "imgAngleRue",
                    imgUrl: "./directions/angle_rue.png",
                    desc: "indique que vous devez vous rendre à l'angle de la rue."
                },
                "Face à la place": {
                    name: "Face à la place",
                    img: "imgFacePlace",
                    imgUrl: "./directions/face_place.png",
                    desc: "indique que vous devez aller en face de la place."
                },
                "Près de/à côté de": {
                    name: "Près de/à côté de",
                    img: "imgPresStation",
                    imgUrl: "./directions/pres_station.png",
                    desc: "indique que vous êtes à côté ou près d'un lieu ou d'une chose"
                },
                "Entre les deux bâtiments": {
                    name: "Entre les deux bâtiments",
                    img: "imgEntreBâtiments",
                    imgUrl: "./directions/entre_batiments.png",
                    desc: "indique que vous devez passer entre les deux bâtiments."
                }
            },
            maisonLieux: {
                "le salon": {
                    name: "Le salon",
                    img: "imgSalon",
                    imgUrl: "./maisonLie/salon.png",
                    desc: "est l'endroit où la famille se réunit pour se détendre ou recevoir des invités."
                },
                "la cuisine": {
                    name: "La cuisine",
                    img: "imgCuisine",
                    imgUrl: "./maisonLie/cuisine.png",
                    desc: "est l'espace où l'on prépare et cuisine les repas."
                },
                "la chambre": {
                    name: "La chambre",
                    img: "imgChambre",
                    imgUrl: "./maisonLie/chambre.png",
                    desc: "est l'endroit où l'on dort et se repose."
                },
                "la salle de bain": {
                    name: "La salle de bain",
                    img: "imgSalleDeBain",
                    imgUrl: "./maisonLie/salle_de_bain.png",
                    desc: "est utilisée pour se laver et prendre soin de soi."
                },
                "la salle à manger": {
                    name: "La salle à manger",
                    img: "imgSalleAManger",
                    imgUrl: "./maisonLie/salle_a_manger.png",
                    desc: "est l'endroit où l'on prend les repas."
                },
                "le bureau": {
                    name: "Le bureau",
                    img: "imgBureau",
                    imgUrl: "./maisonLie/bureau.png",
                    desc: "est un espace de travail ou d'étude dans la maison."
                },
                "le grenier": {
                    name: "Le grenier",
                    img: "imgGrenier",
                    imgUrl: "./maisonLie/grenier.png",
                    desc: "est souvent utilisé pour stocker des objets ou des souvenirs."
                },
                "la cave": {
                    name: "La cave",
                    img: "imgCave",
                    imgUrl: "./maisonLie/cave.png",
                    desc: "est un sous-sol utilisé pour le stockage ou parfois pour conserver du vin."
                },
                "le jardin": {
                    name: "Le jardin",
                    img: "imgJardin",
                    imgUrl: "./maisonLie/jardin.png",
                    desc: "est un espace extérieur où l'on peut planter des fleurs ou se détendre."
                },
                "le garage": {
                    name: "Le garage",
                    img: "imgGarage",
                    imgUrl: "./maisonLie/garage.png",
                    desc: "est utilisé pour garer des voitures ou stocker des outils."
                },
                "le toit": {
                    name: "Le toit",
                    img: "imgToit",
                    imgUrl: "./maisonLie/toit.png",
                    desc: "protège la maison des intempéries et des éléments extérieurs."
                },
                "le plancher": {
                    name: "Le plancher",
                    img: "imgPlancher",
                    imgUrl: "./maisonLie/plancher.png",
                    desc: "est la surface sur laquelle on marche à l'intérieur de la maison."
                },
                "le coin repas": {
                    name: "Le coin repas",
                    img: "imgCoinRepas",
                    imgUrl: "./maisonLie/coin_repas.png",
                    desc: "est un petit espace réservé pour prendre des repas en toute simplicité."
                },
                "le couloir": {
                    name: "Le couloir",
                    img: "imgCouloir",
                    imgUrl: "./maisonLie/couloir.png",
                    desc: "est un passage qui relie différentes pièces de la maison."
                },
                "le sous-sol": {
                    name: "Le sous-sol",
                    img: "imgSousSol",
                    imgUrl: "./maisonLie/sous_sol.png",
                    desc: "est un espace en dessous de la maison utilisé souvent pour le stockage ou des activités supplémentaires."
                },
            },

            apartmentsLieux: {
                "immeuble à appartements": {
                    name: "Immeuble à appartements",
                    img: "imgImmeubleAppartments",
                    imgUrl: "./apartmentsLie/immeuble_appartments.png",
                    desc: "est un bâtiment contenant plusieurs appartements pour y habiter."
                },
                "escalier de secours": {
                    name: "Escalier de secours",
                    img: "imgEscalierSecours",
                    imgUrl: "./apartmentsLie/escalier_secours.png",
                    desc: "est utilisé en cas d'urgence pour évacuer le bâtiment en toute sécurité."
                },
                "terrain de jeux": {
                    name: "Terrain de jeux",
                    img: "imgTerrainJeux",
                    imgUrl: "./apartmentsLie/terrain_jeux.png",
                    desc: "est un espace réservé aux enfants pour jouer et se divertir."
                },
                "jardin sur le toit": {
                    name: "Jardin sur le toit",
                    img: "imgJardinToit",
                    imgUrl: "./apartmentsLie/jardin_toit.png",
                    desc: "est un espace vert situé sur le toit de l'immeuble, idéal pour se détendre."
                },

                "ascenseur": {
                    name: "Ascenseur",
                    img: "imgAscenseur",
                    imgUrl: "./apartmentsLie/ascenseur.png",
                    desc: "permet de se déplacer entre les étages sans utiliser les escaliers."
                },
                "escaliers": {
                    name: "Escaliers",
                    img: "imgEscaliers",
                    imgUrl: "./apartmentsLie/escaliers.png",
                    desc: "sont utilisés pour se déplacer d'un étage à l'autre à pied."
                },
                "balcon": {
                    name: "Balcon",
                    img: "imgBalcon",
                    imgUrl: "./apartmentsLie/balcon.png",
                    desc: "est un espace extérieur attenant à un appartement, offrant une vue sur l'extérieur."
                },
                "cour": {
                    name: "Cour",
                    img: "imgCour",
                    imgUrl: "./apartmentsLie/cour.png",
                    desc: "est un espace extérieur central partagé entre les résidents, souvent utilisé pour se détendre."
                },
                "piscine": {
                    name: "Piscine",
                    img: "imgPiscine",
                    imgUrl: "./apartmentsLie/piscine.png",
                    desc: "est un espace aquatique utilisé pour nager et se rafraîchir."
                },
                "bac à ordures": {
                    name: "Bac à ordures",
                    img: "imgBacOrdures",
                    imgUrl: "./apartmentsLie/bac_ordures.png",
                    desc: "est utilisé pour jeter les ordures ménagères des résidents."
                },
                "ruelle": {
                    name: "Ruelle",
                    img: "imgRuelle",
                    imgUrl: "./apartmentsLie/ruelle.png",
                    desc: "est une voie située derrière ou à côté de l'immeuble, souvent utilisée pour l'accès au stationnement ou à la livraison."
                },
                "barrière de sécurité": {
                    name: "Barrière de sécurité",
                    img: "imgBarriereSecurite",
                    imgUrl: "./apartmentsLie/barriere_securite.png",
                    desc: "est utilisée pour contrôler l'accès à l'immeuble et protéger les résidents."
                },
                "casier de rangement": {
                    name: "Casier de rangement",
                    img: "imgCasierRangement",
                    imgUrl: "./apartmentsLie/casier_rangement.png",
                    desc: "est un petit espace privé dans lequel les résidents peuvent stocker des objets supplémentaires."
                }
            },


            exterieurMaison: {
                "boîte aux lettres": {
                    name: "Boîte aux lettres",
                    img: "imgBoiteLettres",
                    imgUrl: "./maison/boite_lettres.png",
                    desc: "sert à recevoir le courrier et les colis à l'extérieur de la maison."
                },
                "trottoir": {
                    name: "Trottoir",
                    img: "imgTrottoir",
                    imgUrl: "./maison/trottoir.png",
                    desc: "est une voie piétonne située devant la maison."
                },
                "marches": {
                    name: "Marches",
                    img: "imgMarches",
                    imgUrl: "./maison/marches.png",
                    desc: "permettent d'accéder à l'entrée principale de la maison."
                },
                "gouttière": {
                    name: "Gouttière",
                    img: "imgGouttiere",
                    imgUrl: "./maison/gouttiere.png",
                    desc: "sert à évacuer l'eau de pluie du toit de la maison."
                },
                "cheminée": {
                    name: "Cheminée",
                    img: "imgCheminee",
                    imgUrl: "./maison/cheminee.png",
                    desc: "permet d'évacuer la fumée du feu ou du chauffage intérieur."
                },
                "porte de garage": {
                    name: "Porte de garage",
                    img: "imgPorteGarage",
                    imgUrl: "./maison/porte_garage.png",
                    desc: "s'ouvre pour permettre l'accès au garage pour les véhicules."
                },
                "allée": {
                    name: "Allée",
                    img: "imgAllee",
                    imgUrl: "./maison/allee.png",
                    desc: "est le chemin qui mène de la rue à la maison ou au garage."
                },
                "portail": {
                    name: "Portail",
                    img: "imgPortail",
                    imgUrl: "./maison/portail.png",
                    desc: "sert à sécuriser et délimiter l'entrée de la propriété."
                },
                "porte d'entrée": {
                    name: "Porte d'entrée",
                    img: "imgPorteEntree",
                    imgUrl: "./maison/porte_entree.png",
                    desc: "est l'entrée principale de la maison, où les visiteurs sont accueillis."
                },
                "poignée de porte": {
                    name: "Poignée de porte",
                    img: "imgPoigneePorte",
                    imgUrl: "./maison/poignee_porte.png",
                    desc: "est utilisée pour ouvrir et fermer la porte d'entrée."
                },
                "sonnette": {
                    name: "Sonnette",
                    img: "imgSonnette",
                    imgUrl: "./maison/sonnette.png",
                    desc: "permet aux visiteurs d'avertir de leur arrivée en sonnant à la porte."
                },
                "patio": {
                    name: "Patio",
                    img: "imgPatio",
                    imgUrl: "./maison/patio.png",
                    desc: "est un espace extérieur où l'on peut se détendre ou dîner en plein air."
                },
                "gril": {
                    name: "Gril",
                    img: "imgGril",
                    imgUrl: "./maison/gril.png",
                    desc: "est utilisé pour cuisiner à l'extérieur, souvent pour des barbecues."
                },
                "porte vitrée coulissante": {
                    name: "Porte vitrée coulissante",
                    img: "imgPorteVitreCoulissante",
                    imgUrl: "./maison/porte_vitre_coulissante.png",
                    desc: "permet de passer facilement entre la maison et le patio ou le jardin."
                },
                "plante-bande": {
                    name: "Plante-bande",
                    img: "imgPlanteBande",
                    imgUrl: "./maison/plante_bande.png",
                    desc: "est un espace destiné aux plantes et aux fleurs, souvent décoratif."
                },
                "boyau": {
                    name: "Boyau",
                    img: "imgBoyau",
                    imgUrl: "./maison/boyau.png",
                    desc: "est utilisé pour arroser les plantes et le jardin."
                },
                "arroser": {
                    name: "Arroser",
                    img: "imgArroser",
                    imgUrl: "./maison/arroser.png",
                    desc: "consiste à donner de l'eau aux plantes ou au jardin."
                },
                "hamac": {
                    name: "Hamac",
                    img: "imgHamac",
                    imgUrl: "./maison/hamac.png",
                    desc: "est un lit suspendu utilisé pour se reposer à l'extérieur."
                },
                "pelouse": {
                    name: "Pelouse",
                    img: "imgPelouse",
                    imgUrl: "./maison/pelouse.png",
                    desc: "est un espace de gazon autour de la maison, souvent utilisé pour le jeu ou la détente."
                },
                "jardin potager": {
                    name: "Jardin potager",
                    img: "imgJardinPotager",
                    imgUrl: "./maison/jardin_potager.png",
                    desc: "est un espace extérieur où l'on cultive des légumes, des herbes et des fruits."
                }
            },





            maisonMeubles: {
                "la table": {
                    name: "La table",
                    img: "imgTable",
                    imgUrl: "./maison/table.png",
                    desc: "est utilisée pour manger."
                },
                "une chaise": {
                    name: "Une chaise",
                    img: "imgChaise",
                    imgUrl: "./maison/chaise.png",
                    desc: "est pour s'asseoir."
                },
                "un lit": {
                    name: "Un lit",
                    img: "imgLit",
                    imgUrl: "./maison/lit.png",
                    desc: "est où l'on dort."
                },
                "un canapé": {
                    name: "Un canapé",
                    img: "imgCanape",
                    imgUrl: "./maison/canape.png",
                    desc: "est où l'on s'assoit dans le salon."
                },
                "une armoire": {
                    name: "Une armoire",
                    img: "imgArmoire",
                    imgUrl: "./maison/armoire.png",
                    desc: "est utilisée pour ranger les vêtements."
                },
                "un bureau": {
                    name: "Un bureau",
                    img: "imgBureau",
                    imgUrl: "./maison/bureau.png",
                    desc: "est utilisé pour travailler ou étudier."
                },
                "une étagère": {
                    name: "Une étagère",
                    img: "imgEtagere",
                    imgUrl: "./maison/etagere.png",
                    desc: "est utilisée pour ranger des livres et autres objets."
                },
                "une commode": {
                    name: "Une commode",
                    img: "imgCommode",
                    imgUrl: "./maison/commode.png",
                    desc: "est un meuble avec des tiroirs pour ranger des vêtements ou des objets."
                },
                "une lampe": {
                    name: "Une lampe",
                    img: "imgLampe",
                    imgUrl: "./maison/lampe.png",
                    desc: "est utilisée pour éclairer une pièce."
                },
                "un fauteuil": {
                    name: "Un fauteuil",
                    img: "imgFauteuil",
                    imgUrl: "./maison/fauteuil.png",
                    desc: "est une chaise confortable avec des accoudoirs."
                },
                "une table basse": {
                    name: "Une table basse",
                    img: "imgTableBasse",
                    imgUrl: "./maison/table-basse.png",
                    desc: "est un meuble bas placé devant un canapé pour poser des objets."
                },
                "un réfrigérateur": {
                    name: "Un réfrigérateur",
                    img: "imgRefrigerateur",
                    imgUrl: "./maison/refrigerateur.png",
                    desc: "est utilisé pour conserver les aliments au frais."
                },
                "un four": {
                    name: "Un four",
                    img: "imgFour",
                    imgUrl: "./maison/four.png",
                    desc: "est utilisé pour cuisiner des aliments en les chauffant."
                },
                "un micro-ondes": {
                    name: "Un micro-ondes",
                    img: "imgMicroOndes",
                    imgUrl: "./maison/micro-ondes.png",
                    desc: "est utilisé pour chauffer rapidement les aliments."
                },
                "un lave-vaisselle": {
                    name: "Un lave-vaisselle",
                    img: "imgLaveVaisselle",
                    imgUrl: "./maison/lave-vaisselle.png",
                    desc: "est utilisé pour nettoyer la vaisselle automatiquement."
                },
                "un lave-linge": {
                    name: "Un lave-linge",
                    img: "imgLaveLinge",
                    imgUrl: "./maison/lave-linge.png",
                    desc: "est une machine utilisée pour laver les vêtements."
                },
                "un placard": {
                    name: "Un placard",
                    img: "imgPlacard",
                    imgUrl: "./maison/placard.png",
                    desc: "est un espace de rangement souvent encastré dans un mur."
                },
                "un climatiseur": {
                    name: "Un climatiseur",
                    img: "imgClimatiseur",
                    imgUrl: "./maison/climatiseur.png",
                    desc: "est utilisé pour rafraîchir l'air d'une pièce."
                },
                "un radiateur": {
                    name: "Un radiateur",
                    img: "imgRadiateur",
                    imgUrl: "./maison/radiateur.png",
                    desc: "est utilisé pour chauffer une pièce."
                },
                "une causeuse": {
                    name: "Une causeuse",
                    img: "imgCauseuse",
                    imgUrl: "./maison/causeuse.png",
                    desc: "est un petit canapé conçu pour deux personnes."
                },
                "un coussin": {
                    name: "Un coussin",
                    img: "imgCoussin",
                    imgUrl: "./maison/coussin.png",
                    desc: "est utilisé pour ajouter du confort ou de la décoration à un canapé ou un lit."
                },
                "un panier": {
                    name: "Un panier",
                    img: "imgPanier",
                    imgUrl: "./maison/panier.png",
                    desc: "est utilisé pour ranger divers objets."
                },
                "une plante d'intérieur": {
                    name: "Une plante d'intérieur",
                    img: "imgPlanteInterieur",
                    imgUrl: "./maison/plante_d_interieur.png",
                    desc: "est utilisée pour décorer l'intérieur avec de la verdure."
                },
                "un centre de divertissement": {
                    name: "Un centre de divertissement",
                    img: "imgCentreDivertissement",
                    imgUrl: "./maison/centre_de_divertissement.png",
                    desc: "est un meuble pour placer la télévision et d'autres appareils multimédias."
                },
                "une télévision": {
                    name: "Une télévision",
                    img: "imgTelevision",
                    imgUrl: "./maison/tele_vision.png",
                    desc: "est utilisée pour regarder des émissions et des films."
                },
                "un lecteur de DVD": {
                    name: "Un lecteur de DVD",
                    img: "imgLecteurDVD",
                    imgUrl: "./maison/lecteur_de_DVD.png",
                    desc: "est utilisé pour lire des disques DVD."
                },
                "une chaîne stéréo": {
                    name: "Une chaîne stéréo",
                    img: "imgChaineStereo",
                    imgUrl: "./maison/chaîne___stereo.png",
                    desc: "est utilisée pour écouter de la musique."
                },
                "un tableau": {
                    name: "Un tableau",
                    img: "imgTableau",
                    imgUrl: "./maison/tableau.png",
                    desc: "est une œuvre d'art accrochée au mur pour décorer une pièce."
                },
                "un mur": {
                    name: "Un mur",
                    img: "imgMur",
                    imgUrl: "./maison/mur.jpeg",
                    desc: "est une structure verticale qui sépare les pièces d'une maison."
                },
                "une cheminée": {
                    name: "Une cheminée",
                    img: "imgCheminee",
                    imgUrl: "./maison/cheminee.png",
                    desc: "est un dispositif de chauffage qui utilise du feu."
                },
                "un écran de cheminée": {
                    name: "Un écran de cheminée",
                    img: "imgEcranCheminee",
                    imgUrl: "./maison/ecran___de___cheminee.png",
                    desc: "est utilisé pour protéger la pièce des étincelles venant de la cheminée."
                },
                "un foyer": {
                    name: "Un foyer",
                    img: "imgFoyer",
                    imgUrl: "./maison/foyer.png",
                    desc: "est la partie d'une cheminée où le feu est allumé."
                },
                "une table d'extrémité": {
                    name: "Une table d'extrémité",
                    img: "imgTableExtremite",
                    imgUrl: "./maison/table___d_extremite.png",
                    desc: "est une petite table placée à côté d'un canapé ou d'un fauteuil."
                },
                "une lampe sur pied": {
                    name: "Une lampe sur pied",
                    img: "imgLampeSurPied",
                    imgUrl: "./maison/lampe___sur___pied.png",
                    desc: "est une grande lampe placée directement sur le sol."
                },
                "des tentures": {
                    name: "Des tentures",
                    img: "imgTentures",
                    imgUrl: "./maison/tentures.jpeg",
                    desc: "sont des tissus suspendus pour décorer ou couvrir un mur."
                },
                "une fenêtre": {
                    name: "Une fenêtre",
                    img: "imgFenetre",
                    imgUrl: "./maison/fenetre.png",
                    desc: "permet d'éclairer une pièce et de voir à l'extérieur."
                },
                "un canape": {
                    name: "Un canape",
                    img: "imgCanape",
                    imgUrl: "./maison/canape.png",
                    desc: "est un siège large et confortable pour plusieurs personnes."
                },
                "une table de salon": {
                    name: "Une table de salon",
                    img: "imgTableSalon",
                    imgUrl: "./maison/table___de___salon.png",
                    desc: "est une table utilisée dans le salon pour divers usages."
                },
                "une chandelle": {
                    name: "Une chandelle",
                    img: "imgChandelle",
                    imgUrl: "./maison/chandelle.png",
                    desc: "est une bougie utilisée pour éclairer ou décorer une pièce."
                },
                "un bougeoir": {
                    name: "Un bougeoir",
                    img: "imgBougeoir",
                    imgUrl: "./maison/bougeoir.jpeg",
                    desc: "est un support pour tenir une ou plusieurs bougies."
                },
                "un porte-journaux": {
                    name: "Un porte-journaux",
                    img: "imgPorteJournaux",
                    imgUrl: "./maison/porte___journaux.png",
                    desc: "est un petit meuble pour ranger les journaux et magazines."
                },
                "un tapis": {
                    name: "Un tapis",
                    img: "imgTapis",
                    imgUrl: "./maison/tapis.png",
                    desc: "est un revêtement de sol doux et décoratif."
                },
                "un panier à linge": {
                    name: "Un panier à linge",
                    img: "imgPanierLinge",
                    imgUrl: "./maison/panier__a__linge.png",
                    desc: "est utilisé pour stocker les vêtements sales avant le lavage."
                },
                "une baignoire": {
                    name: "Une baignoire",
                    img: "imgBaignoire",
                    imgUrl: "./maison/baignoire.png",
                    desc: "est utilisée pour prendre des bains."
                },
                "un porte-savon": {
                    name: "Un porte-savon",
                    img: "imgPorteSavon",
                    imgUrl: "./maison/porte___savon.png",
                    desc: "est un support pour ranger le savon."
                },
                "un savon": {
                    name: "Un savon",
                    img: "imgSavon",
                    imgUrl: "./maison/savon.png",
                    desc: "est utilisé pour se laver."
                },
                "un gant de toilette": {
                    name: "Un gant de toilette",
                    img: "imgGantToilette",
                    imgUrl: "./maison/gant___de___toilette.png",
                    desc: "est un gant en tissu utilisé pour se laver le corps."
                },
                "un drain": {
                    name: "Un drain",
                    img: "imgDrain",
                    imgUrl: "./maison/drain.jpeg",
                    desc: "est utilisé pour évacuer l'eau de la baignoire ou de l'évier."
                },
                "un robinet": {
                    name: "Un robinet",
                    img: "imgRobinet",
                    imgUrl: "./maison/robinet.png",
                    desc: "est utilisé pour contrôler le débit d'eau dans une baignoire ou un évier."
                },
                "de l'eau chaude": {
                    name: "De l'eau chaude",
                    img: "imgEauChaude",
                    imgUrl: "./maison/eau___chaude.png",
                    desc: "est utilisée pour se laver ou cuisiner à des températures élevées."
                },
                "de l'eau froide": {
                    name: "De l'eau froide",
                    img: "imgEauFroide",
                    imgUrl: "./maison/eau___froide.png",
                    desc: "est utilisée pour se rafraîchir ou cuisiner à des températures basses."
                },
                "une barre d'appui": {
                    name: "Une barre d'appui",
                    img: "imgBarreAppui",
                    imgUrl: "./maison/barre___d_appui.png",
                    desc: "est installée dans une baignoire ou une douche pour offrir un soutien supplémentaire."
                },
                "du carrelage": {
                    name: "Du carrelage",
                    img: "imgCarrelage",
                    imgUrl: "./maison/carrelage.png",
                    desc: "est un revêtement en céramique utilisé pour les murs ou les sols dans les salles de bain et cuisines."
                },
                "un pommeau de douche": {
                    name: "Un pommeau de douche",
                    img: "imgPommeauDouche",
                    imgUrl: "./maison/pommeau___de___douche.png",
                    desc: "est utilisé pour diffuser l'eau dans une douche."
                },
                "un rideau de douche": {
                    name: "Un rideau de douche",
                    img: "imgRideauDouche",
                    imgUrl: "./maison/rideau___de___douche.png",
                    desc: "est utilisé pour empêcher l'eau de se répandre hors de la douche."
                },
                "un porte-serviettes": {
                    name: "Un porte-serviettes",
                    img: "imgPorteServiettes",
                    imgUrl: "./maison/porte___serviettes.png",
                    desc: "est un support pour accrocher les serviettes."
                },
                "une serviette de bain": {
                    name: "Une serviette de bain",
                    img: "imgServietteBain",
                    imgUrl: "./maison/serviette___de___bain.png",
                    desc: "est utilisée pour se sécher après un bain ou une douche."
                },
                "un essuie-mains": {
                    name: "Un essuie-mains",
                    img: "imgEssuieMains",
                    imgUrl: "./maison/essuie___mains.png",
                    desc: "est utilisé pour se sécher les mains après les avoir lavées."
                },
                "un miroir": {
                    name: "Un miroir",
                    img: "imgMiroir",
                    imgUrl: "./maison/miroir.png",
                    desc: "est utilisé pour se regarder et se préparer."
                },
                "du papier hygiénique": {
                    name: "Du papier hygiénique",
                    img: "imgPapierHygienique",
                    imgUrl: "./maison/papier___hygienique.png",
                    desc: "est utilisé pour l'hygiène personnelle après avoir utilisé les toilettes."
                },
                "une balayette": {
                    name: "Une balayette",
                    img: "imgBalayette",
                    imgUrl: "./maison/balayette.png",
                    desc: "est utilisée pour nettoyer les toilettes."
                },
                "une cuvette": {
                    name: "Une cuvette",
                    img: "imgCuvette",
                    imgUrl: "./maison/cuvette.png",
                    desc: "est utilisée dans les toilettes pour recueillir les déchets."
                },
                "un lavabo": {
                    name: "Un lavabo",
                    img: "imgLavabo",
                    imgUrl: "./maison/lavabo.png",
                    desc: "est utilisé pour se laver les mains ou le visage."
                },
                "une corbeille à déchets": {
                    name: "Une corbeille à déchets",
                    img: "imgCorbeilleDechets",
                    imgUrl: "./maison/corbeille__a__dechets.png",
                    desc: "est utilisée pour jeter les déchets."
                },
                "une brosse à dents": {
                    name: "Une brosse à dents",
                    img: "imgBrosseDents",
                    imgUrl: "./maison/brosse___a___dents.png",
                    desc: "est utilisée pour nettoyer les dents."
                },
                "un porte-brosses à dents": {
                    name: "Un porte-brosses à dents",
                    img: "imgPorteBrossesDents",
                    imgUrl: "./maison/porte___brosses___a___dents.png",
                    desc: "est utilisé pour ranger les brosses à dents."
                },
                "un tiroir": {
                    name: "Un tiroir",
                    img: "imgTiroir",
                    imgUrl: "./maison/tiroir.png",
                    desc: "est un compartiment coulissant utilisé pour ranger des objets."
                },
                "un cadre à photo": {
                    name: "Un cadre à photo",
                    img: "imgCadrePhoto",
                    imgUrl: "./maison/cadre___a___photo.png",
                    desc: "est utilisé pour afficher des photos."
                },
                "un miroir en pied": {
                    name: "Un miroir en pied",
                    img: "imgMiroirPied",
                    imgUrl: "./maison/miroir___en___pied.png",
                    desc: "est un grand miroir permettant de voir tout le corps."
                },
                "des rideaux": {
                    name: "Des rideaux",
                    img: "imgRideaux",
                    imgUrl: "./maison/rideaux.png",
                    desc: "sont utilisés pour couvrir les fenêtres et bloquer la lumière."
                },
                "un store à lamelles": {
                    name: "Un store à lamelles",
                    img: "imgStoreLamelles",
                    imgUrl: "./maison/store___a___lamelles.png",
                    desc: "est un dispositif de protection solaire composé de lames horizontales."
                },
                "une tête de lit": {
                    name: "Une tête de lit",
                    img: "imgTeteLit",
                    imgUrl: "./maison/tête___de___lit.png",
                    desc: "est la partie du lit située à la tête pour appuyer le dos."
                },
                "un oreiller": {
                    name: "Un oreiller",
                    img: "imgOreiller",
                    imgUrl: "./maison/oreiller.png",
                    desc: "est utilisé pour soutenir la tête pendant le sommeil."
                },
                "un drap housse": {
                    name: "Un drap housse",
                    img: "imgDrapHousse",
                    imgUrl: "./maison/drap___housse.jpeg",
                    desc: "est un drap avec des coins élastiques qui s'ajuste au matelas."
                },
                "un drap plat": {
                    name: "Un drap plat",
                    img: "imgDrapPlat",
                    imgUrl: "./maison/drap_plat.jpeg",
                    desc: "est un drap utilisé pour se couvrir pendant le sommeil."
                },
                "une taie d'oreiller": {
                    name: "Une taie d'oreiller",
                    img: "imgTaieOreiller",
                    imgUrl: "./maison/taie_d_oreiller.png",
                    desc: "est une housse protectrice pour les oreillers."
                },
                "une couverture de lit": {
                    name: "Une couverture de lit",
                    img: "imgCouvertureLit",
                    imgUrl: "./maison/couverture_de_lit.png",
                    desc: "est utilisée pour se réchauffer pendant la nuit."
                },
                "une couette": {
                    name: "Une couette",
                    img: "imgCouette",
                    imgUrl: "./maison/courtepointe.png",
                    desc: "est une couverture garnie de plumes ou matière synthétique, utilisée pour se réchauffer."
                },
                "un volant de lit": {
                    name: "Un volant de lit",
                    img: "imgVolantLit",
                    imgUrl: "./maison/volant_de_lit.png",
                    desc: "est un tissu décoratif qui recouvre le bas du lit."
                },
                "un cadre de lit": {
                    name: "Un cadre de lit",
                    img: "imgCadreLit",
                    imgUrl: "./maison/cadre_de_lit.png",
                    desc: "est la structure en bois ou en métal qui soutient le matelas."
                },
                "un sommier": {
                    name: "Un sommier",
                    img: "imgSommier",
                    imgUrl: "./maison/sommier.png",
                    desc: "est une base rigide sur laquelle repose le matelas."
                },
                "un matelas": {
                    name: "Un matelas",
                    img: "imgMatelas",
                    imgUrl: "./maison/matelas.png",
                    desc: "est utilisé pour dormir confortablement."
                },
                "un plancher en bois": {
                    name: "Un plancher en bois",
                    img: "imgPlancherBois",
                    imgUrl: "./maison/plancher_en_bois.png",
                    desc: "est un type de revêtement de sol en bois naturel ou traité."
                },
                "l' évier": {
                    name: "Un plancher en bois",
                    img: "imgevier",
                    imgUrl: "./maison/envier.png",
                    desc: "est un élément d'une cuisine formant un bassin, muni d'une alimentation en eau et d'une vidange.."
                },
                "un congélateur": {
                    name: "Un congélateur",
                    img: "imcongelateur",
                    imgUrl: "./maison/congelateur.png",
                    desc: "est un appareil qui permettant de congeler des aliments."
                },
                "L' interrupteur": {
                    name: "L'interrupteur",
                    img: "imginterrupteur",
                    imgUrl: "./maison/interrupteur.png",
                    desc: "est un dispositif électrique qui permet d’allumer les lumières."
                },
                "La prise": {
                    name: "La prise",
                    img: "imgPrise",
                    imgUrl: "./maison/prise.png",
                    desc: "est un dispositif électrique utilisé pour brancher des appareils et fournir de l'électricité."
                }

            },

            verbes_cuisine: {
                "Hacher": {
                    name: "Hacher",
                    img: "imgHacher",
                    imgUrl: "./cuisine/hacher.png",
                    desc: "signifie couper finement les aliments en petits morceaux."
                },
                "Émincer": {
                    name: "Émincer",
                    img: "imgEmincer",
                    imgUrl: "./cuisine/emincer.png",
                    desc: "signifie couper en fines tranches, souvent des légumes ou de la viande."
                },
                "Couper": {
                    name: "Couper",
                    img: "imgCouper",
                    imgUrl: "./cuisine/couper.png",
                    desc: "est l'action de diviser les aliments en morceaux."
                },
                "Trancher": {
                    name: "Trancher",
                    img: "imgTrancher",
                    imgUrl: "./cuisine/trancher.png",
                    desc: "désigne couper en tranches régulières, souvent avec un couteau bien aiguisé."
                },
                "Découper": {
                    name: "Découper",
                    img: "imgDecouper",
                    imgUrl: "./cuisine/decouper.png",
                    desc: "signifie séparer en morceaux plus petits, souvent pour la viande."
                },
                "Éplucher": {
                    name: "Éplucher",
                    img: "imgEplucher",
                    imgUrl: "./cuisine/eplucher.png",
                    desc: "consiste à enlever la peau ou la pelure des fruits et légumes."
                },
                "Peler": {
                    name: "Peler",
                    img: "imgPeler",
                    imgUrl: "./cuisine/peler.png",
                    desc: "désigne enlever la peau des fruits ou légumes, similaire à éplucher."
                },
                "Écosser": {
                    name: "Écosser",
                    img: "imgEcosser",
                    imgUrl: "./cuisine/ecosser.png",
                    desc: "signifie retirer les grains des gousses, comme pour les pois."
                },
                "Équeuter": {
                    name: "Équeuter",
                    img: "imgEqueuter",
                    imgUrl: "./cuisine/equeuter.png",
                    desc: "est l'action d'enlever les queues des fruits ou légumes."
                },
                "Évider": {
                    name: "Évider",
                    img: "imgEvider",
                    imgUrl: "./cuisine/evider.png",
                    desc: "signifie enlever le cœur ou la partie intérieure d'un fruit ou légume."
                },
                "Dénoyauter": {
                    name: "Dénoyauter",
                    img: "imgDenoyauter",
                    imgUrl: "./cuisine/denoyauter.png",
                    desc: "consiste à retirer les noyaux des fruits."
                },
                "Râper": {
                    name: "Râper",
                    img: "imgRaper",
                    imgUrl: "./cuisine/raper.png",
                    desc: "désigne réduire en petits morceaux à l'aide d'une râpe."
                },
                "Zester": {
                    name: "Zester",
                    img: "imgZester",
                    imgUrl: "./cuisine/zester.png",
                    desc: "signifie prélever la partie colorée de l'écorce d'un agrume."
                },
                "Presser": {
                    name: "Presser",
                    img: "imgPresser",
                    imgUrl: "./cuisine/presser.png",
                    desc: "est l'action d'extraire le jus d'un fruit ou légume."
                },
                "Mélanger": {
                    name: "Mélanger",
                    img: "imgMelanger",
                    imgUrl: "./cuisine/melanger.png",
                    desc: "consiste à combiner plusieurs ingrédients ensemble."
                },
                "Remuer": {
                    name: "Remuer",
                    img: "imgRemuer",
                    imgUrl: "./cuisine/remuer.png",
                    desc: "signifie agiter les ingrédients pour les mélanger."
                },
                "Battre": {
                    name: "Battre",
                    img: "imgBattre",
                    imgUrl: "./cuisine/battre.png",
                    desc: "est l'action de mélanger énergiquement, souvent avec un fouet."
                },
                "Fouetter": {
                    name: "Fouetter",
                    img: "imgFouetter",
                    imgUrl: "./cuisine/fouetter.png",
                    desc: "consiste à battre pour introduire de l'air, créant une texture légère."
                },
                "Monter": {
                    name: "Monter",
                    img: "imgMonter",
                    imgUrl: "./cuisine/monter.png",
                    desc: "désigne fouetter jusqu'à épaissir ou rendre mousseux."
                },
                "Incorporer": {
                    name: "Incorporer",
                    img: "imgIncorporer",
                    imgUrl: "./cuisine/incorporer.png",
                    desc: "signifie ajouter délicatement un ingrédient à un autre."
                },
                "Assaisonner": {
                    name: "Assaisonner",
                    img: "imgAssaisonner",
                    imgUrl: "./cuisine/assaisonner.png",
                    desc: "est l'ajout de sel, poivre ou épices pour relever le goût."
                },
                "Saler": {
                    name: "Saler",
                    img: "imgSaler",
                    imgUrl: "./cuisine/saler.png",
                    desc: "consiste à ajouter du sel pour rehausser la saveur."
                },
                "Poivrer": {
                    name: "Poivrer",
                    img: "imgPoivrer",
                    imgUrl: "./cuisine/poivrer.png",
                    desc: "désigne l'ajout de poivre pour épicer le plat."
                },
                "Épicer": {
                    name: "Épicer",
                    img: "imgEpicer",
                    imgUrl: "./cuisine/epicer.png",
                    desc: "signifie ajouter des épices pour enrichir la saveur."
                },
                "Mariner": {
                    name: "Mariner",
                    img: "imgMariner",
                    imgUrl: "./cuisine/mariner.png",
                    desc: "signifie tremper un aliment dans une marinade pour le parfumer."
                },
                "Paner": {
                    name: "Paner",
                    img: "imgPaner",
                    imgUrl: "./cuisine/paner.png",
                    desc: "est enrober d'une panure avant la cuisson."
                },
                "Fariner": {
                    name: "Fariner",
                    img: "imgFariner",
                    imgUrl: "./cuisine/fariner.png",
                    desc: "signifie recouvrir d'une fine couche de farine."
                },
                "Saupoudrer": {
                    name: "Saupoudrer",
                    img: "imgSaupoudrer",
                    imgUrl: "./cuisine/saupoudrer.png",
                    desc: "consiste à parsemer légèrement de sucre ou de sel."
                },
                "Napper": {
                    name: "Napper",
                    img: "imgNapper",
                    imgUrl: "./cuisine/napper.png",
                    desc: "signifie couvrir d'une sauce ou d'un coulis."
                },
                "Badigeonner": {
                    name: "Badigeonner",
                    img: "imgBadigeonner",
                    imgUrl: "./cuisine/badigeonner.png",
                    desc: "est l'action de brosser les aliments avec une marinade."
                },
                "Beurrer": {
                    name: "Beurrer",
                    img: "imgBeurrer",
                    imgUrl: "./cuisine/beurrer.png",
                    desc: "consiste à enduire de beurre pour éviter l'adhérence."
                },
                "Huiler": {
                    name: "Huiler",
                    img: "imgHuiler",
                    imgUrl: "./cuisine/huiler.png",
                    desc: "signifie enduire légèrement d'huile avant de cuire."
                },
                "Cuire": {
                    name: "Cuire",
                    img: "imgCuire",
                    imgUrl: "./cuisine/cuire.png",
                    desc: "désigne l'action de chauffer les aliments jusqu'à être prêts à manger."
                },
                "Bouillir": {
                    name: "Bouillir",
                    img: "imgBouillir",
                    imgUrl: "./cuisine/bouillir.png",
                    desc: "signifie porter un liquide à ébullition pour cuire les aliments."
                },
                "Mijoter": {
                    name: "Mijoter",
                    img: "imgMijoter",
                    imgUrl: "./cuisine/mijoter.png",
                    desc: "consiste à cuire à feu doux pendant longtemps."
                },
                "Frémir": {
                    name: "Frémir",
                    img: "imgFremir",
                    imgUrl: "./cuisine/fremir.png",
                    desc: "désigne cuire légèrement sans bouillir."
                },
                "Blanchir": {
                    name: "Blanchir",
                    img: "imgBlanchir",
                    imgUrl: "./cuisine/blanchir.png",
                    desc: "signifie cuire quelques minutes dans l'eau bouillante."
                },
                "Pocher": {
                    name: "Pocher",
                    img: "imgPocher",
                    imgUrl: "./cuisine/pocher.png",
                    desc: "est cuire doucement dans un liquide frémissant."
                },
                "Griller": {
                    name: "Griller",
                    img: "imgGriller",
                    imgUrl: "./cuisine/griller.png",
                    desc: "signifie cuire rapidement avec chaleur directe pour dorer."
                },
                "Rôtir": {
                    name: "Rôtir",
                    img: "imgRotir",
                    imgUrl: "./cuisine/rotir.png",
                    desc: "consiste à cuire dans un four pour obtenir une texture croustillante."
                },
                "Saisir": {
                    name: "Saisir",
                    img: "imgSaisir",
                    imgUrl: "./cuisine/saisir.png",
                    desc: "désigne cuire rapidement pour former une croûte extérieure."
                },
                "Caraméliser": {
                    name: "Caraméliser",
                    img: "imgCarameliser",
                    imgUrl: "./cuisine/carameliser.png",
                    desc: "signifie chauffer les sucres pour obtenir une texture brunâtre et sucrée."
                },
                "Réduire": {
                    name: "Réduire",
                    img: "imgReduire",
                    imgUrl: "./cuisine/reduire.png",
                    desc: "consiste à faire évaporer le liquide pour concentrer les saveurs."
                },
                "Glacer": {
                    name: "Glacer",
                    img: "imgGlacer",
                    imgUrl: "./cuisine/glacer.png",
                    desc: "signifie couvrir les aliments d'un glaçage sucré ou brillant."
                },
                "Servir": {
                    name: "Servir",
                    img: "imgServir",
                    imgUrl: "./cuisine/servir.png",
                    desc: "désigne la mise en assiette pour présentation."
                }
            },


            nettoyage: {
                "un plumeau": {
                    name: "Un plumeau",
                    img: "imgPlumeau",
                    imgUrl: "./nettoyage/plumeau.png",
                    desc: "est utilisé pour dépoussiérer les surfaces."
                },
                "des chiffons": {
                    name: "Des chiffons",
                    img: "imgChiffons",
                    imgUrl: "./nettoyage/chiffons.png",
                    desc: "sont utilisés pour nettoyer et essuyer les surfaces."
                },
                "un ramasse poussière": {
                    name: "Un ramasse-poussière",
                    img: "imgRamassePoussiere",
                    imgUrl: "./nettoyage/ramasse_poussiere.png",
                    desc: "est utilisé pour ramasser la poussière et les débris."
                },
                "un bac de recyclage": {
                    name: "Un bac de recyclage",
                    img: "imgBacDeRecyclage",
                    imgUrl: "./nettoyage/bac_de_recyclage.png",
                    desc: "est un récipient destiné au tri des déchets recyclables."
                },
                "un aspirateur": {
                    name: "Un aspirateur",
                    img: "imgAspirateur",
                    imgUrl: "./nettoyage/aspirateur.png",
                    desc: "est un appareil utilisé pour aspirer la poussière et les saletés."
                },
                "un détergent": {
                    name: "Un détergent",
                    img: "imgDetergent",
                    imgUrl: "./nettoyage/detergent.png",
                    desc: "est un produit utilisé pour nettoyer les surfaces."
                },
                "un nettoyant à four": {
                    name: "Un nettoyant à four",
                    img: "imgNettoyantAFour",
                    imgUrl: "./nettoyage/nettoyant_a_four.png",
                    desc: "est un produit utilisé pour dégraisser et nettoyer les fours."
                },
                "des accessoires d aspirateur": {
                    name: "Des accessoires d'aspirateur",
                    img: "imgAccessoiresAspirateur",
                    imgUrl: "./nettoyage/accessoires_d_aspirateur.png",
                    desc: "sont des pièces détachées pour améliorer le nettoyage."
                },
                "une éponge": {
                    name: "Une éponge",
                    img: "imgEponge",
                    imgUrl: "./nettoyage/eponge.png",
                    desc: "est utilisée pour laver les surfaces."
                },
                "une brosse à récurer": {
                    name: "Une brosse à récurer",
                    img: "imgBrosseARecurer",
                    imgUrl: "./nettoyage/brosse_a_recurer.png",
                    desc: "est utilisée pour nettoyer en profondeur les surfaces."
                },
                "des gants de caoutchouc": {
                    name: "Des gants de caoutchouc",
                    img: "imgGantsDeCaoutchouc",
                    imgUrl: "./nettoyage/gants_de_caoutchouc.png",
                    desc: "protègent les mains pendant le nettoyage."
                },
                "des sacs d aspirateur": {
                    name: "Des sacs d'aspirateur",
                    img: "imgSacsDAspirateur",
                    imgUrl: "./nettoyage/sacs_d_aspirateur.png",
                    desc: "sont des sacs utilisés pour collecter la poussière dans l'aspirateur."
                },
                "un escabeau": {
                    name: "Un escabeau",
                    img: "imgEscabeau",
                    imgUrl: "./nettoyage/escabeau.png",
                    desc: "est une petite échelle utilisée pour atteindre des endroits élevés."
                },
                "un nettoyant à vitres": {
                    name: "Un nettoyant à vitres",
                    img: "imgNettoyantAVitres",
                    imgUrl: "./nettoyage/nettoyant_a_vitres.png",
                    desc: "est un produit utilisé pour nettoyer les fenêtres et les miroirs."
                },
                "une raclette": {
                    name: "Une raclette",
                    img: "imgRaclette",
                    imgUrl: "./nettoyage/raclette.png",
                    desc: "est utilisée pour essuyer les surfaces lisses."
                },
                "un seau": {
                    name: "Un seau",
                    img: "imgSeau",
                    imgUrl: "./nettoyage/seau.png",
                    desc: "est un récipient utilisé pour transporter de l'eau."
                },
                "de l encaustique pour meubles": {
                    name: "De l'encaustique pour meubles",
                    img: "imgEncaustiqueMeubles",
                    imgUrl: "./nettoyage/encaustique_pour_meubles.png",
                    desc: "est utilisée pour polir et protéger les meubles."
                },
                "un balai": {
                    name: "Un balai",
                    img: "imgBalai",
                    imgUrl: "./nettoyage/balai.png",
                    desc: "est utilisé pour balayer les sols."
                },
                "des sacs à ordures": {
                    name: "Des sacs à ordures",
                    img: "imgSacsAOrdures",
                    imgUrl: "./nettoyage/sacs_a_ordures.png",
                    desc: "sont utilisés pour collecter les déchets."
                },
                "des tampons à récurer en laine d acier": {
                    name: "Des tampons à récurer en laine d'acier",
                    img: "imgTamponsRecurerLaineAcier",
                    imgUrl: "./nettoyage/tampons_a_recurer_en_laine_d_acier.png",
                    desc: "sont utilisés pour nettoyer les surfaces difficiles."
                },
                "un balai éponge": {
                    name: "Un balai-éponge",
                    img: "imgBalaiEponge",
                    imgUrl: "./nettoyage/balai_eponge.png",
                    desc: "est utilisé pour essuyer et nettoyer les sols."
                },
                "du détergent à vaisselle": {
                    name: "Du détergent à vaisselle",
                    img: "imgDetergentAVaisselle",
                    imgUrl: "./nettoyage/detergent_a_vaisselle.png",
                    desc: "est un produit utilisé pour laver la vaisselle."
                },
                "un linge à vaisselle": {
                    name: "Un linge à vaisselle",
                    img: "imgLingeVaisselle",
                    imgUrl: "./nettoyage/linge_a_vaisselle.png",
                    desc: "est utilisé pour essuyer la vaisselle après lavage."
                },
                "des serviettes désinfectantes": {
                    name: "Des serviettes désinfectantes",
                    img: "imgServiettesDesinfectantes",
                    imgUrl: "./nettoyage/serviettes_desinfectantes.png",
                    desc: "sont utilisées pour désinfecter rapidement les surfaces."
                }
            }

        }


        window.onload = function () {
            // Eventos para os botões
            document.getElementById('startGameBtn').addEventListener('click', loadSelectedCategory);
            document.getElementById('randomButton').addEventListener('click', loadRandomCategory);
            document.getElementById('generateItemsBtn').addEventListener('click', generateNewItems);
            document.getElementById('finishGameBtn').addEventListener('click', endGame);

            // Carrega a categoria selecionada inicialmente
            const selectedCategory = document.getElementById('categorySelect').value;
            loadCategoryItems(selectedCategory, true);

        };
        //--------------------------------------------------------------------------------------------------------------
        let voicesLoaded = false;

        function loadVoices() {
            return new Promise((resolve) => {
                const voices = window.speechSynthesis.getVoices();
                if (voices.length !== 0) {
                    resolve(voices);
                } else {
                    window.speechSynthesis.onvoiceschanged = () => {
                        resolve(window.speechSynthesis.getVoices());
                    };
                }
            });
        }


        async function playSound(text) {
            if ('speechSynthesis' in window) {
                const voices = await loadVoices();
                const utterance = new SpeechSynthesisUtterance(text);

                // Ajustes para melhorar a naturalidade
                utterance.rate = 0.85;
                utterance.pitch = 1.0;
                utterance.volume = 1;

                // Tentar encontrar uma voz francesa específica
                const preferredVoices = ['Thomas', 'Amélie', 'Aurélie'];
                let frenchVoice = voices.find(voice => preferredVoices.includes(voice.name) && voice.lang.startsWith('fr'));

                // Se não encontrar, usar qualquer voz em francês
                if (!frenchVoice) {
                    frenchVoice = voices.find(voice => voice.lang.startsWith('fr'));
                }

                if (frenchVoice) {
                    utterance.voice = frenchVoice;
                    utterance.lang = frenchVoice.lang;
                    console.log(`Usando a voz: ${frenchVoice.name}`);
                } else {
                    console.warn("Nenhuma voz francesa foi encontrada. Usando a voz padrão.");
                    utterance.lang = 'fr-FR';
                }

                // Cancelar qualquer fala em andamento
                window.speechSynthesis.cancel();

                // Falar o texto
                window.speechSynthesis.speak(utterance);
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
            loadCategoryItems(selectedCategory, true);
        }

        function loadRandomCategory() {
            const categories = Object.keys(correctAnswers);
            const randomIndex = Math.floor(Math.random() * categories.length);
            const randomCategory = categories[randomIndex];

            document.getElementById('categorySelect').value = randomCategory;

            loadCategoryItems(randomCategory, true);
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
                playedItems = []; // Inicializa o array de itens jogados
                itemAttempts = {}; // Inicializa o objeto de tentativas dos itens
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
            items.forEach(word => {
                const zone = document.createElement('div');
                zone.className = 'dropzone';
                zone.id = word;
                zone.ondrop = drop;
                zone.ondragover = allowDrop;

                const soundIcon = document.createElement('img');
                soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png"; // URL da imagem do ícone de som
                soundIcon.alt = "Ícone de som"; // Texto alternativo para acessibilidade
                soundIcon.style.cursor = 'pointer'; // Mudar o cursor ao passar sobre a imagem
                soundIcon.style.width = '24px'; // Ajusta o tamanho da imagem, se necessário
                soundIcon.style.height = '24px';


                // Corrigir o clique do ícone de som
                soundIcon.addEventListener('click', function () {
                    playSound(word); // Chama a função de tocar o som da palavra
                });

                zone.appendChild(document.createTextNode(word));
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
                    showFeedback(null, description, true); // Mostra a descrição da imagem
                });

                itemContainer.appendChild(div);
            });
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
                soundIcon.src = "https://i.ibb.co/YPw1Z7y/2058142.png"; // URL da imagem do ícone de som
                soundIcon.alt = "Ícone de som"; // Texto alternativo para acessibilidade
                soundIcon.style.cursor = 'pointer'; // Mudar o cursor ao passar sobre a imagem
                soundIcon.style.width = '32px'; // Ajusta o tamanho da imagem, se necessário
                soundIcon.style.height = '32px';

                // Adiciona evento de clique ao ícone de som para tocar o feedback
                soundIcon.addEventListener('click', function () {
                    playSound(message); // Reproduz o feedback quando o ícone é clicado
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