function BarreDeRecherche() {
    let entrée = document.getElementById('rechercheEntrée').value.toLowerCase();
    let cases = document.querySelectorAll('.structure-principale:not(.structure-résultat-de-recherche) .case');
    let structurePrincipale = document.querySelectorAll('.structure-principale:not(.structure-résultat-de-recherche)');
    let bouton = document.querySelectorAll('.structure-clipboard');
    let titre = document.querySelectorAll('h1');
    
    // Retire tous les vieux résultats de recherche
    let ancienneStructurePrincipale = document.querySelectorAll('.structure-résultat-de-recherche');
    ancienneStructurePrincipale.forEach(function(strucPrncpl) {
        strucPrncpl.remove();
    });
    
    // Empêche la duplication des messages qui affiche qu'aucun résultat ne correspond
    let vieuxMessages = document.querySelectorAll('.aucun-résultat');
    vieuxMessages.forEach(function(msg) {
        msg.remove();
    });
    
    if (entrée === "") { // Si rien n'est écrit dans la barre de recherche, tout est affiché (code CSS original)
        // Une fois la recherche effacée, l'affichage par défaut est restauré.
        cases.forEach(function(cellule) {
            cellule.style.display = 'block';
        });
        structurePrincipale.forEach(function(strucPrncpl) {
            strucPrncpl.style.display = 'grid';
        });
        titre.forEach(function(ttr) {
            ttr.style.display = 'block';
        });
        bouton.forEach(function(btn) {
            btn.style.display = 'flex';
        });
        return;
    }
    
    // Cache la structure original
    cases.forEach(function(cellule) {
        cellule.style.display = 'none';
    });
    structurePrincipale.forEach(function(strucPrncpl) {
        strucPrncpl.style.display = 'none';
    });
    titre.forEach(function(ttr) {
        ttr.style.display = 'none';
    });
    bouton.forEach(function(btn) {
        btn.style.display = 'none';
    });
    
    // Créer une nouvelle structure pour réunir toutes les structures principales dans la même structure lors d'une recherche
    let structureRésultatDeRecherche = document.createElement('div');
    structureRésultatDeRecherche.classList.add('structure-principale', 'structure-résultat-de-recherche');
    structureRésultatDeRecherche.style.display = 'grid';
    
    // Trouve et affiche les cases qui correspondent, sauf les boutons du clipboard
    let aCorrespondance = false;
    
    cases.forEach(function(cellule) {
        // Ignore les boutons du clipboard
        if (cellule.closest('.structure-clipboard') || cellule.querySelector('.btn-copie')) {
            return;
        }
        
        let contenuDuTexte = cellule.textContent.toLowerCase();
        if (contenuDuTexte.includes(entrée)) {
            let celluleCopie = cellule.cloneNode(true);
            celluleCopie.style.display = 'block';
            structureRésultatDeRecherche.appendChild(celluleCopie);
            aCorrespondance = true;
        }
    });
    
    // Affiche les résultats
    if (aCorrespondance) {
        document.body.appendChild(structureRésultatDeRecherche);
    } else {
        let messagePasDeRésultat = document.createElement('p');
        messagePasDeRésultat.textContent = "Aucun résultat trouvé.";
        messagePasDeRésultat.classList.add('aucun-résultat');
        document.body.appendChild(messagePasDeRésultat);
    }
}