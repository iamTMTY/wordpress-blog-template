export function contactDrawer() {

    document.querySelectorAll('.pop_up').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.contact').style.top = `${window.scrollY}px`
            document.querySelector('.contact').style.height = '100vh'
            document.querySelector('body').style.overflowY = 'hidden'
        })
    })

    window.addEventListener('scroll', () => {
        document.querySelector('.contact').style.top = `${window.scrollY}px`
    })

    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.contact').style.height = '0'
        document.querySelector('body').style.overflowY = 'visible'
    })
}