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
    const container = document.getElementById('main_index')
    const container2 = document.createElement('div')
    const container3 = document.createElement('div')
    
    images.results.forEach(item =>{

        const img = document.createElement('img')

    
        img.src = `https://image.tmdb.org/t/p/w500/${item['poster_path']}`
        container2.appendChild(img)
    })
    container.appendChild(container2)
    container2.classList.add('img_container')
    container3.classList.add('main_container')
}


const btn = document.getElementById('proximo_button')
btn.addEventListener('click', async function(){
    page = page + 1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const container = document.getElementById('main_index')
    container.textContent=''
    createMovieList()
})

const btn2 = document.getElementById('anterior_button')
btn2.addEventListener('click', async function(){
    page = page - 1
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const container = document.getElementById('main_index')
    container.textContent=''
    createMovieList()
})


createMovieList()
// getMovieList()
// criarPoster()