function buscarAPOD() {
    const chaveAPI = 'SGYswAbi7g6HtBCN2Oykhi8lWzFNLIzXPHucsxgl'; // CHAVE DA API
    const dataInput = document.getElementById('dateInput').value;

    const urlAPI = `https://api.nasa.gov/planetary/apod?api_key=${chaveAPI}&date=${dataInput}`;

    fetch(urlAPI)
        .then(response => response.json())
        .then(data => {
            exibirImagem(data);
        })
        .catch(error => {
            console.error('Erro ao buscar a imagem:', error);
        });
}

function exibirImagem(data) {
    const apodImage = document.getElementById('apodImage');
    apodImage.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = data.title;
    apodImage.appendChild(titulo);

    const dataImagem = document.createElement('p');
    dataImagem.textContent = `Data: ${data.date}`;
    apodImage.appendChild(dataImagem);

    const explicacao = document.createElement('p');
    explicacao.textContent = data.explanation;
    apodImage.appendChild(explicacao);

    const imagem = document.createElement('img');
    imagem.src = data.url;
    imagem.alt = data.title;
    apodImage.appendChild(imagem);
}


