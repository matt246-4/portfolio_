/* =========================================================
   BASE DE DONNÉES DES COMPÉTENCES
========================================================= */

const skillsData = {

    "TCP/IP": {
        def: "Ensemble de protocoles de communication standardisés permettant le transfert de données sur un réseau informatique.",
        use: "Assure la communication universelle et fiable entre tous les ordinateurs et périphériques connectés au réseau ou à Internet."
    },

    "VLAN": {
        def: "Réseau local virtuel permettant de regrouper un ensemble de machines de manière logique et non physique.",
        use: "Sépare les flux réseau (ex: Direction, Visiteurs, Serveurs) afin de renforcer la sécurité et réduire le trafic inutilisé."
    },

    "Routage": {
        def: "Mécanisme par lequel les paquets de données sont acheminés d'un réseau source à un réseau destination via des routeurs.",
        use: "Permet de faire communiquer différents sous-réseaux et d'interconnecter l'entreprise à des sites distants ou à Internet."
    },

    "VPN": {
        def: "Réseau privé virtuel créant un tunnel chiffré et sécurisé à travers un réseau public comme Internet.",
        use: "Permet aux collaborateurs en télétravail d'accéder en toute sécurité aux ressources internes de l'entreprise."
    },

    "DNS / DHCP": {
        def: "DNS traduit les noms de domaine en IP. DHCP attribue automatiquement les configurations IP aux équipements.",
        use: "Simplifie la navigation réseau et automatise l'intégration de nouveaux équipements sans intervention manuelle."
    },

    "Firewall": {
        def: "Pare-feu matériel ou logiciel filtrant le trafic réseau entrant et sortant selon des règles de sécurité prédéfinies.",
        use: "Bloque les accès non autorisés et protège le réseau informatique contre les cyberattaques externes."
    },

    "Wi-Fi": {
        def: "Technologie de transmission sans fil utilisant des ondes radio pour relier des équipements au réseau local.",
        use: "Offre de la mobilité aux employés et un accès Internet restreint pour les visiteurs."
    },

    "Linux": {
        def: "Système d'exploitation libre et open-source reconnu pour sa stabilité, sa sécurité et sa légèreté.",
        use: "Utilisé pour faire tourner la majorité des serveurs web, bases de données et infrastructures critiques d'entreprise."
    },

    "Windows Server": {
        def: "Système d'exploitation serveur édité par Microsoft offrant des services d'infrastructures centralisés.",
        use: "Gère l'annuaire d'entreprise, les autorisations des utilisateurs, le partage de fichiers et les stratégies de groupe."
    },

    "Active Directory": {
        def: "Service d'annuaire développé par Microsoft centralisant la gestion des utilisateurs, postes et droits sur un réseau.",
        use: "Permet aux administrateurs d'attribuer des accès sécurisés et de déployer des règles (GPO) sur tous les postes."
    },

    "Virtualisation": {
        def: "Technologie permettant d'exécuter plusieurs systèmes d'exploitation virtuels sur un seul serveur physique.",
        use: "Optimise l'utilisation des ressources matérielles, réduit les coûts d'infrastructure et facilite la sauvegarde."
    },

    "Nginx": {
        def: "Serveur web, proxy inverse et répartiteur de charge haute performance.",
        use: "Achemine le trafic web de manière rapide, sécurise le serveur principal (Reverse Proxy) et gère les certificats SSL."
    },

    "SSH": {
        def: "Protocole de communication sécurisé permettant de prendre le contrôle d'une machine distante à travers une ligne de commande.",
        use: "Permet l'administration et la maintenance à distance des serveurs en toute confidentialité."
    },

    "Wireshark": {
        def: "Analyseur de paquets réseau permettant de capturer et d'examiner le trafic en temps réel.",
        use: "Diagnostic de pannes réseau, analyse approfondie de protocoles et détection d'anomalies de sécurité."
    },

    "Cisco Packet Tracer": {
        def: "Logiciel de simulation réseau édité par Cisco pour concevoir, configurer et dépanner des topologies d'infrastructures.",
        use: "Permet de modéliser et tester des architectures réseau complexes avant leur déploiement physique réel."
    },

    "Git": {
        def: "Système de contrôle de version décentralisé enregistrant l'historique des modifications apportées au code.",
        use: "Facilite le travail d'équipe, le suivi des versions de logiciels ou de scripts d'automatisation et le retour en arrière."
    },

    "Bash": {
        def: "Interprète de commandes shell sous Unix/Linux permettant d'exécuter des scripts automatisés.",
        use: "Automatise la gestion quotidienne des serveurs (sauvegardes, création d'utilisateurs, mises à jour)."
    },

    "HTML / CSS": {
        def: "Langages de balisage et de style servant à structurer et concevoir des interfaces web visuelles.",
        use: "Permet de concevoir des tableaux de bord, des portails captifs ou la documentation interne d'entreprise."
    }

};


/* =========================================================
   GESTION DES ONGLETS
========================================================= */

function switchTab(tabId, evt) {

    /* Retire la classe active des boutons */
    document
        .querySelectorAll('.tab-btn')
        .forEach(btn => {
            btn.classList.remove('active');
        });


    /* Retire la classe active des contenus */
    document
        .querySelectorAll('.tab-content')
        .forEach(content => {
            content.classList.remove('active');
        });


    /* Active le bouton cliqué */
    if (evt && evt.currentTarget) {

        evt.currentTarget.classList.add('active');

    }


    /* Recherche le contenu correspondant */
    const activeTab =
        document.getElementById('tab-' + tabId);


    /* Active uniquement le contenu trouvé */
    if (activeTab) {

        activeTab.classList.add('active');

    }

}


/* =========================================================
   AFFICHAGE DES INFORMATIONS D'UNE COMPÉTENCE
========================================================= */

function showSkillInfo(skillName) {

    const skillModal =
        document.getElementById('skill-modal');

    const skillTitle =
        document.getElementById('skill-modal-title');

    const skillDef =
        document.getElementById('skill-modal-def');

    const skillUse =
        document.getElementById('skill-modal-use');


    /* Si la fenêtre n'existe pas, on arrête */
    if (!skillModal) {

        return;

    }


    /* Recherche les informations */
    const data =
        skillsData[skillName] || {

            def: "Technologie essentielle enseignée au cours du cursus.",

            use: "Permet d'assurer la gestion et la sécurité du système d'information."

        };


    /* Remplit la fenêtre */
    if (skillTitle) {

        skillTitle.innerText =
            skillName;

    }


    if (skillDef) {

        skillDef.innerText =
            data.def;

    }


    if (skillUse) {

        skillUse.innerText =
            data.use;

    }


    /* Affiche la fenêtre */
    skillModal.style.display =
        'flex';

}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {


        /* =================================================
           MODALE CV
        ================================================= */

        const cvModal =
            document.getElementById('cv-modal');

        const openCvBtn =
            document.getElementById('open-cv-btn');

        const closeCvModal =
            document.getElementById('close-cv-modal');


        /* Ouvrir le CV */

        if (openCvBtn && cvModal) {

            openCvBtn.addEventListener(
                'click',
                () => {

                    cvModal.style.display =
                        'flex';

                }
            );

        }


        /* Fermer le CV */

        if (closeCvModal && cvModal) {

            closeCvModal.addEventListener(
                'click',
                () => {

                    cvModal.style.display =
                        'none';

                }
            );

        }


        /* =================================================
           MODALE COMPÉTENCES
        ================================================= */

        const skillModal =
            document.getElementById('skill-modal');

        const closeSkillModal =
            document.getElementById('close-skill-modal');


        /* Fermer la modale */

        if (closeSkillModal && skillModal) {

            closeSkillModal.addEventListener(
                'click',
                () => {

                    skillModal.style.display =
                        'none';

                }
            );

        }


        /* =================================================
           FERMETURE DES MODALES
           EN CLIQUANT À L'EXTÉRIEUR
        ================================================= */

        window.addEventListener(
            'click',
            (event) => {


                if (
                    cvModal &&
                    event.target === cvModal
                ) {

                    cvModal.style.display =
                        'none';

                }


                if (
                    skillModal &&
                    event.target === skillModal
                ) {

                    skillModal.style.display =
                        'none';

                }

            }
        );

/* =================================================
           MENU ACTIF SELON LA PAGE COURANTE OU LE SCROLL
        ================================================= */

        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        function updateActiveNavigation() {
            let currentSection = '';

            // 1. Détecte la section si on est sur une page mono-page avec ancres (#)
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });

            // 2. Met à jour la classe active selon l'URL ou la section
            navLinks.forEach(link => {
                const href = link.getAttribute('href');

                if (href && href.startsWith('#')) {
                    // Si le lien est une ancre (# section)
                    if (href.substring(1) === currentSection) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                } else if (href) {
                    // Si le lien est une page HTML complète
                    if (href === currentPage) {
                        link.classList.add('active');
                    }
                }
            });
        }

        window.addEventListener('scroll', updateActiveNavigation);
        updateActiveNavigation();


        /*
           Lance une première fois la fonction
           au chargement.
        */

       

    }
);
