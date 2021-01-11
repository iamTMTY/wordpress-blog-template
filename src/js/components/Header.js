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
        
            <ul id="navigation" class="navigation">
                <li><a href="#" class="go-home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#" class="pop_up">Contact</a></li>
            </ul>
        </nav>`
    }
}