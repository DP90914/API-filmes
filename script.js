'use strict'

const apiKey = '8bb9f4bfef3260d4276216738392a45a'

let page = 1


async function getMovieList() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}


async function createMovieList() {
    const images = await getMovieList()


    images.results.forEach(item => {

        const img = document.createElement('img')

        const container = document.getElementById('main_index')
        const container2 = document.createElement('div')
        const container3 = document.createElement('div')

        img.src = `https://image.tmdb.org/t/p/w500/${item['poster_path']}`

        const nome = document.createElement("h3")
        nome.textContent = `${item['title']}`
        nome.classList.add("subtible")

        container2.appendChild(img)
        container2.appendChild(nome)
        container.appendChild(container2)

        container2.classList.add('img_container')
        container3.classList.add('main_container')

        container2.addEventListener('click', async function () {
            const id_fime = item.id
            const container = document.getElementById('main_index')
            container.textContent = ''

            const url = `https://api.themoviedb.org/3/movie/${id_fime}?api_key=${apiKey}&language=pt-BR`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)

            const img2 = document.createElement('img')
            img2.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`

            const titulo = document.createElement("h2")
            const sinopse = document.createElement("h3")
            const tempo_filme = document.createElement("h4")
            const avaliacao_filme = document.createElement("span")

            titulo.textContent = `${data['title']}`
            sinopse.textContent = `${data['overview']}`

            tempo_filme.textContent = `${data['runtime']} minutos`
            avaliacao_filme.textContent = `${data['vote_average']} %`

            const container_hero = document.createElement('div')
            const container_bonus = document.createElement('div')
            const container1 = document.createElement('div')

            titulo.classList.add("titulo")
            sinopse.classList.add("sinopse")
            tempo_filme.classList.add("informacao_bonus")
            avaliacao_filme.classList.add("informacao_bonus")
            container1.classList.add("container")
            container_hero.classList.add("container_hero")
            container_bonus.classList.add("container_bonus")

            container_hero.appendChild(titulo)
            container_hero.appendChild(sinopse)
            container_bonus.appendChild(tempo_filme)
            container_bonus.appendChild(avaliacao_filme)

            container1.append(img)
            container_hero.append(container_bonus)
            container1.appendChild(container_hero)
            container.appendChild(container1)
        })
    })

}


const btn = document.getElementById('proximo_button')
btn.addEventListener('click', async function () {
    page = page + 1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const container = document.getElementById('main_index')
    container.textContent = ''
    createMovieList()
})

const btn2 = document.getElementById('anterior_button')
btn2.addEventListener('click', async function () {
    page = page - 1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const container = document.getElementById('main_index')
    container.textContent = ''
    createMovieList()
})
const logo = document.getElementById('logo')
logo.addEventListener('click', async function () {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=1`
    const response = await fetch(url)
    const container = document.getElementById('main_index')
    container.textContent = ''
    createMovieList()
})

createMovieList()
// getMovieList()
// criarPoster()