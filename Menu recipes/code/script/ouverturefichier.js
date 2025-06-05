function ouvertureFichier(filePath) {
    fetch(`/open-file?path=${encodeURIComponent(filePath)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Le fichier a été ouvert avec succès.');
            } else {
                alert('Erreur lors de l\'ouverture du fichier.');
            }
        })
        .catch(error => {
            console.log(error.message);
        });
}