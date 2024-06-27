// script.js

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        
        const allH1texto = document.querySelectorAll('.H1texto');
        allH1texto.forEach(texto => {
            texto.style.display = 'none';
        });
        
        const targetH1texto = document.querySelector(`.H1texto[data-id="${targetId}"]`);
        if (targetH1texto) {
            targetH1texto.style.display = 'block';
        }
    });
});
