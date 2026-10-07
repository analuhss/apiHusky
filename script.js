// -------------------
// API CACHORROS
// -------------------

// Endereço API que vamos utilizar

const url = 'https://dog.ceo/api/breed/husky/images/random';

// Pegando os elementos HTML

const fotoCachorro = document.getElementById('fotoCachorro')

// BOTÃO PELO SEU ID

const btnNovaFoto = document.getElementById('btnNovaFoto')

// ==================================
// Função para buscar uma novo foto
// ==================================

async function buscarFoto() {
    // Fzer uma requisição para a API
    const resposta = await fetch(url);

    // converter a resposta da API JSON
    const dados = await resposta.json()

    // Mostrar no console o que a API retornou
    console.log(dados)

    // alteramos o endereço na imagem no HTML
    fotoCachorro.src = dados.message;

}

// ======
// Botão 
// ======
// Quando o usuário clicar mmp botão, vamos executar a função buscarFoto()

btnNovaFoto.addEventListener('click', buscarFoto);

// Quando a página abrir, já buscamos uma foto
buscarFoto()