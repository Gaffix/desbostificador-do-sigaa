// Arquivo responsável por manipular o DOM e reorganizar os elementos da página

window.addEventListener('load', function() {
    // Remove os botões específicos e deixa o Pergamum e o Meu Pergamum intactos
    document.getElementById('form_links:forumCursos')?.remove();
    document.getElementById('form_links:buscarComunidadeVirtual')?.remove();
    document.querySelector('a[title*="CAPES"]')?.remove();
});

/* DIV menu-dropdown (Ensino, Pesquisa, Extensão...) */
window.addEventListener('load', function() {
    const lixoDoMenu = [
        "Extensão",
        "Ações Associadas",
        "Bolsas",
        "Outros"
    ];

    // 2. Seleciona todos os textos das opções de menu do SIGAA
    const itensDoMenu = document.querySelectorAll('.ThemeOfficeMainItemText, .ThemeOfficeMainFolderText');

    // 3. Passa por cada item verificando se está na sua lista de lixo
    itensDoMenu.forEach(item => {
        const textoDoItem = item.innerText.trim(); // Pega o texto e tira espaços extras
        
        if (lixoDoMenu.includes(textoDoItem)) {
            // Se achou na lista, sobe para a tag <tr> (a linha da tabela) e destrói ela
            const linhaDaTabela = item.closest('td');
            if (linhaDaTabela) {
                linhaDaTabela.remove();
            }
        }
    });
});