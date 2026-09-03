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
        "Pesquisa",
        "Extensão",
        "Ações Associadas",
        "Bolsas",
        "Outros"
    ];

    const itensDoMenu = document.querySelectorAll('.ThemeOfficeMainItemText, .ThemeOfficeMainFolderText');

    itensDoMenu.forEach(item => {
        const textoDoItem = item.innerText.trim(); // Pega o texto e tira espaços extras
        
        if (lixoDoMenu.includes(textoDoItem)) {
            // Se achou na lista, sobe para a tag <td> (o item da tabela) e destrói ela
            const linhaDaTabela = item.closest('td');
            if (linhaDaTabela) {
                linhaDaTabela.remove();
            }
        }
    });
});


// Body principal
const todosOsH4 = document.querySelectorAll('h4');

todosOsH4.forEach(h4 => {
    if (h4.innerText.includes('Turmas do Semestre') || h4.innerText.includes('Minhas atividades') || h4.innerText.includes('FÓRUM DO CURSO DE TÉCNICO EM INFORMÁTICA')) {
        h4.remove();
    }
});


window.addEventListener('load', function() {
    const horario = document.querySelectorAll('th');
    horario.forEach(horario => {
        if (horario.innerText.includes('Horário')) {
            horario.remove();
        }
    });

    const centros = document.querySelectorAll('center');

    centros.forEach(centro => {
        //regra (Regex) que acha exatamente o formato (numero/numero/numero - numero/numero/numero)
        const padraoData = /\(\d{2}\/\d{2}\/\d{4} - \d{2}\/\d{2}\/\d{4}\)/;
        
        if (padraoData.test(centro.innerText)) {
            centro.remove();
        }
    });
});