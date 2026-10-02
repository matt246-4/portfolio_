// Gestion des Onglets (Semestres)
function switchTab(tabId, event) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetContent = document.getElementById('tab-' + tabId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Données des Modales de Compétences
const skillData = {
    'TCP/IP': {
        def: "Ensemble des protocoles fondamentaux permettant la communication et le transfert de données sur Internet et au sein des réseaux locaux.",
        use: "Indispensable pour configurer les cartes réseaux, diagnostiquer les pannes de connectivité et structurer les adresses IP d'une entreprise."
    },
    'VLAN': {
        def: "Technique d'isolation réseau permettant de créer plusieurs réseaux virtuels indépendants sur un même équipement physique.",
        use: "Sépare les flux (ex: isoler le réseau Direction du réseau Invités) pour renforcer la sécurité et optimiser la bande passante."
    },
    'Routage': {
        def: "Mécanisme qui achemine les paquets de données entre différents réseaux distants ou sous-réseaux.",
        use: "Permet d'interconnecter plusieurs sites d'entreprise et d'assurer que l'information emprunte le chemin le plus rapide et fiable."
    },
    'VPN': {
        def: "Tunnel sécurisé et chiffré établi entre deux points d'un réseau public comme Internet.",
        use: "Permet aux collaborateurs en télétravail d'accéder au réseau interne de l'entreprise en toute sécurité."
    },
    'DNS / DHCP': {
        def: "DNS traduit les noms de domaine en adresses IP. DHCP attribue automatiquement les adresses IP aux équipements.",
        use: "Automatise la connexion des postes clients et simplifie la navigation sur les services internes et externes."
    },
    'Firewall': {
        def: "Système de filtrage de sécurité contrôlant le trafic entrant et sortant selon des règles prédéfinies.",
        use: "Protège le réseau d'entreprise contre les intrusions, attaques et accès non autorisés."
    },
    'Wi-Fi': {
        def: "Technologie de transmission de données sans fil utilisant des ondes radio.",
        use: "Assure la mobilité des collaborateurs tout en appliquant des normes de chiffrement strictes (WPA3/Enterprise)."
    },
    'Linux': {
        def: "Système d'exploitation open-source réputé pour sa stabilité, sa sécurité et sa légèreté.",
        use: "Base essentielle pour héberger des serveurs web, des bases de données et des services d'infrastructures critiques."
    },
    'Windows Server': {
        def: "Système d'exploitation serveur édité par Microsoft offrant une gestion centralisée d'un parc informatique.",
        use: "Gère les identités, les droits d'accès, l'annuaire Active Directory et le déploiement centralisé de stratégies."
    },
    'Active Directory': {
        def: "Annuaire propriétaire Microsoft qui centralise la gestion des utilisateurs, des ordinateurs et des droits.",
        use: "Permet à l'administrateur de gérer les autorisations (GPO) et d'authentifier les utilisateurs sur tout le domaine."
    },
    'Virtualisation': {
        def: "Technologie permettant d'exécuter plusieurs systèmes d'exploitation virtuels sur un seul serveur physique.",
        use: "Optimise l'utilisation des ressources matérielles, réduit les coûts d'infrastructure et simplifie les sauvegardes."
    },
    'Nginx': {
        def: "Serveur web et proxy inverse ultra-rapide conçu pour gérer de fortes charges de trafic.",
        use: "Sert de point d'entrée sécurisé (Reverse Proxy) et de répartiteur de charge devant les applications d'entreprise."
    },
    'SSH': {
        def: "Protocole de communication chiffré permettant d'administrer des machines distantes en ligne de commande.",
        use: "Permet aux administrateurs de prendre le contrôle à distance des serveurs de manière totalement sécurisée."
    },
    'Wireshark': {
        def: "Outil d'analyse de la sécurité réseau capable de capturer et d'analyser le trafic en temps réel.",
        use: "Permet de diagnostiquer les dysfonctionnements réseau et de repérer d'éventuelles anomalies ou attaques."
    },
    'Cisco Packet Tracer': {
        def: "Simulateur de réseau développé par Cisco pour concevoir et tester des topologies complexes.",
        use: "Idéal pour modéliser des architectures réseau avant leur déploiement physique."
    },
    'Git': {
        def: "Système de contrôle de version distribué assurant le suivi des modifications de code.",
        use: "Facilite le travail d'équipe, le versionnage des projets et le retour en arrière en cas d'erreur."
    },
    'Bash': {
        def: "Langage de commande et de script pour les systèmes d'exploitation Unix / Linux.",
        use: "Automatise les tâches répétitives d'administration (sauvegardes, création d'utilisateurs, maintenance)."
    },
    'HTML / CSS': {
        def: "Langages fondamentaux du Web : HTML structure le contenu et CSS en assure la mise en forme.",
        use: "Permet de concevoir des interfaces web professionnelles, ergonomiques et adaptatives."
    }
};

// Modale Compétences
function showSkillInfo(skillKey) {
    const modal = document.getElementById('skill-modal');
    const title = document.getElementById('skill-modal-title');
    const def = document.getElementById('skill-modal-def');
    const use = document.getElementById('skill-modal-use');

    if (skillData[skillKey]) {
        title.innerText = skillKey;
        def.innerText = skillData[skillKey].def;
        use.innerText = skillData[skillKey].use;
        modal.style.display = 'flex';
    }
}

// Fermeture de la Modale
document.addEventListener('DOMContentLoaded', () => {
    const closeModalBtn = document.getElementById('close-skill-modal');
    const modal = document.getElementById('skill-modal');

    if (closeModalBtn && modal) {
        closeModalBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target === modal) modal.style.display = 'none';
        };
    }
});
