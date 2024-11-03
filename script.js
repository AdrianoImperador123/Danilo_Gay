// Exemplo de funcionalidade simples para clicar e ampliar as imagens
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            window.open(img.src, '_blank');
        });
    });
});
