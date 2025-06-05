const express = require('express');
const open = require('open');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = 5000;

// Chemin d'ouverture de fichiers
app.get('/open-file', (req, res) => { 
    const filePath = req.query.path;

    if (filePath) {
        exec(`start "" "${filePath}"`, (error) => {
            if (error) {
                console.error('Erreur lors de l\'ouverture du fichier:', error);
                res.status(500).json({ success: false, message: 'Erreur interne lors de l\'ouverture du fichier.' });
            } else {
                res.json({ success: true });
            }
        });
    } else {
        res.status(400).json({ success: false, message: 'Aucun chemin de fichier spécifié.' });
    }
});


app.use(express.static('code'));

// Chemin pour aller chercher l'index html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'index.html'));
});

// -------------Désserts------------------------------------------------------------
// Redirrection vers la page de désserts
app.get('/Desserts', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'desserts.html'));
});

app.get('/Desserts/Brownies', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'brownies.html'));
});
//----------------------
app.get('/Desserts/Gateaux', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'gateaux.html'));
});

app.get('/Desserts/Gateaux/Carotte%20Ghislaine', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'gateau carotte ghislaine.html'));
});
//----------------------
app.get('/Desserts/Biscuits', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'biscuits.html'));
});

app.get('/Desserts/Biscuits/Banane%20choco', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'desserts', 'biscuit banane chocolat.html'));
});
// ---------------------------------------------------------------------------------
// -------------Déjeuner------------------------------------------------------------
app.get('/Dejeuner', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'dejeuner', 'dejeuner.html'));
});

app.get('/Dejeuner/Crepes', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'dejeuner', 'crepes.html'));
});

app.get('/Dejeuner/Gaufres', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'dejeuner', 'gaufres.html'));
});

app.get('/Dejeuner/Pain%20aux%20bananes', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'dejeuner', 'pain aux bananes.html'));
});
// ---------------------------------------------------------------------------------
// -------------Soupes--------------------------------------------------------------
app.get('/Soupes', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'soupes', 'soupes.html'));
});

app.get('/Soupes/Soupes%20aux%20legumes', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'soupes', 'soupes aux legumes.html'));
});

app.get('/Soupes/Soupes%20aux%20legumes/Eric', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'soupes', 'soupe aux legumes eric.html'));
});

app.get('/Soupes/Soupes%20aux%20legumes/Melanie', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'soupes', 'soupe aux legumes melanie.html'));
});
// ---------------------------------------------------------------------------------
// -------------Pasta---------------------------------------------------------------
app.get('/Pates', (req, res) => {
    res.sendFile(path.join(__dirname, 'code', 'pates', 'pasta.html'));
});
// ---------------------------------------------------------------------------------

// Démarrage du serveur (node server.js)
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});