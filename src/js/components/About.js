export default class About {

    constructor() {

    }

    render = () => {
        return `
        <div class="about" id="about">
            <h2>About</h2>
            <hr class="section-start">

            <img src="./imgs/background.jpg" alt="">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorum iure cumque aspernatur nostrum vero earum deserunt 
                ipsa placeat cupiditate ad facilis minus voluptatum omnis, 
                corrupti soluta ut dolorem in voluptatibus sunt neque quo 
                quia aliquam? Itaque error recusandae molestiae ad nam 
                distinctio est officia, dolor dolorum vitae labore natus delectus?
            </p>
            <button class="pop_up">Send a Message</button>
        </div>
        `
    }
}