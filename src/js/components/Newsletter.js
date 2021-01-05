export default class Newsletter {

    constructor() {

    }

    render = () => {
        return `
        <section class="newsletter" id="newsletter">
            <h2>Subscribe to Newsletter</h2>
            <hr class="section-start">

            <form action="" method="post">
                <p>
                    subscribe to my newsletter for weekly amazing content
                    <br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maxime nesciunt error doloribus cumque est recusandae 
                    placeat esse modi velit iusto provident qui nihil, porro 
                    consequuntur, numquam neque molestias? Quasi, velit!
                </p>
                <div class="email">
                    <label for="E-mail">E-mail :</label>
                    <input type="email" name="e-mail" placeholder="johndoe@hostname.com" id="E-mail">
                </div>
                <div class="first-name">
                    <label for="first-name">First Name :</label>
                    <input type="text" name="first-name" placeholder="John" id="first-name">
                </div>    
                <input type="submit" value="Subscribe" class="form-submit">
            </form>
        </section>
        `
    }
}