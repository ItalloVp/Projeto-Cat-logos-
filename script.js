const livros = JSON.parse(localStorage.getItem('books')) || []

function salvarLivros() {
    localStorage.setItem('books', JSON.stringify(livros))
}

function addBook() {
    const titulo = document.querySelector('#titulo')
    const autor = document.querySelector('#autor')
    const genero = document.querySelector('#genero')
    const ano = document.querySelector('#ano')

    const livro = {
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: Number(ano.value)
    }
    livros.push(livro)
    alert('Livro cadastrado com sucesso!')

    titulo.value = ''
    autor.value = ''
    genero.value = ''
    ano.value = ''
    listarLivros(livros)
}

function listarLivros(catalogoLivros) {
    const catalogo = document.querySelector('#catalogo')
    catalogo.innerHTML = ''

    for (const livro of catalogoLivros) {
        const div = document.createElement('div')
        div.classList.add('livro')
        div.innerHTML = `<h3>${livro.titulo}</h3>
                        <p>Genero: ${livro.autor} </p>
                        <p>Autor: ${livro.autor} </p>
                        <p>Ano: ${livro.ano} </p>`
        catalogo.append(div) 
    }
}

listarLivros(livros)

