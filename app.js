function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Digite sua pesquisa."
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        tituo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
// Constrói o HTML para cada item do resultado
resultados += `
<div class="item-resultado">
    <h2> 
        <a href="#" target="_blank">${dado.titulo}</a> 
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Mais informações</a>
</div>
`;
 }
             
    }
if (!resultados) {
    resultados = "<p>Não existe na base de dados</p>"
}

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}