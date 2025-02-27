function playClickSound() {
    const audio = new Audio('sound.mp3');
    audio.play();
}

const allH1texto = document.querySelectorAll('.H1texto');
allH1texto.forEach((texto, index) => {
    if (index !== 0) {
        texto.style.display = 'none';
    }
});

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playClickSound();
        
        const targetId = this.getAttribute('data-target');
        
        allH1texto.forEach(texto => {
            texto.style.display = 'none';
        });
        
        const targetH1texto = document.querySelector(`.H1texto[data-id="${targetId}"]`);
        if (targetH1texto) {
            targetH1texto.style.display = 'block';
        }
    });
});
