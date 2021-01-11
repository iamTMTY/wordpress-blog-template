import Home from "../pages/Home.js";

export default function goHome() {
    document.querySelectorAll(".go-home").forEach(el => {
        el.addEventListener('click', () => {
            new Home().render()
        })
    })
}