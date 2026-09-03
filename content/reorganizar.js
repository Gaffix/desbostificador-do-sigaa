// Arquivo responsável por manipular o DOM e reorganizar os elementos da página

window.addEventListener('load', function() {
    // Remove os botões específicos e deixa o Pergamum e o Meu Pergamum intactos
    document.getElementById('form_links:forumCursos')?.remove();
    document.getElementById('form_links:buscarComunidadeVirtual')?.remove();
    document.querySelector('a[title*="CAPES"]')?.remove();
});