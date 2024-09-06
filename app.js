function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Verifica se a seção foi encontrada no DOM (para fins de depuração)
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        // Constrói o HTML para cada item, formatando os dados do objeto
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">mais...</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
}