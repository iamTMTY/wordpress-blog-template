import Home from "./js/pages/Home.js";


const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', () => {

    new Home().render()

})