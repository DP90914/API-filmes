'use strict'

const apiKey = '8bb9f4bfef3260d4276216738392a45a'

const page = 


async function getMovieList() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${page}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

getMovieList()
// criarPoster()