export default class Header {

    constructor() {

    }

    render = () => {
        return `
        <nav>
            <div class="logo">
                <div class="random">Random</div>
                <div class="blog">Blog</div>
            </div>

            <div class="ham-menu">
                <div class="dash"></div>
                <div class="dash"></div>
                <div class="dash"></div>
            </div>
        
            <ul id="navigation" class="navigation">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#" class="pop_up">Contact</a></li>
                <li><a href="#newsletter">Subscribe</a></li>
            </ul>
        </nav>
        
        <div class="mobile-nav">
            <a href="#about">About</a>
            <a href="#" class="pop_up">Contact</a>
            <a href="#newsletter"> Subscribe </a>
        </div>`
    }
}