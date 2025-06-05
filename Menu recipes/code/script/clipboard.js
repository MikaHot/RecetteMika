const CopieDeTextDansLeClipboard = text => {
    const entréeTemp = document.createElement('input');
    entréeTemp.value = text;
    document.body.appendChild(entréeTemp);
    entréeTemp.select();
    document.execCommand('copy');
    document.body.removeChild(entréeTemp);
};
	
	document.querySelectorAll('.btn-copie').forEach(button =>
    button.addEventListener('click', () => CopieDeTextDansLeClipboard(button.dataset.text))
);