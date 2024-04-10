// Seleciona o botão de alterar cor de fundo
const changeBgBtn = document.getElementById('change-bg-btn');

// Adiciona um evento de clique ao botão
changeBgBtn.addEventListener('click', function() {
    // Gera uma cor aleatória em formato hexadecimal
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Define a cor de fundo da página como a cor aleatória
    document.body.style.backgroundColor = randomColor;
});

// Modifica o tamanho da imagem e a cor de fundo
window.addEventListener('load', function() {
    // Seleciona a imagem
    const profileImage = document.getElementById('profile-image');
    // Modifica o tamanho da imagem
    profileImage.style.width = '200px';
    profileImage.style.height = '200px';
    // Modifica a cor de fundo da imagem
    profileImage.style.backgroundColor = '#f8f8f8';
});
