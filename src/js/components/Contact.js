export default class Contact {

    constructor() {

    }

    render = () => {

        return `
        <div class="contact">
            <div class="content">
                <div class="close">&times;</div>
                <h2>send me a message</h2>
                <hr class="section-start">
                <form action="">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Libero rem non dolorem blanditiis nostrum molestiae
                    </p>
                    <div class="name_email">
                        <div class="name">
                            <label for="name">Name : </label>
                            <input type="text" name="name" placeholder="John" id="name">
                        </div>
                        <div class="email">
                            <label for="E-mail">E-mail :</label>
                            <input type="email" name="e-mail" placeholder="johndoe@hostname.com" id="E-mail">
                        </div>
                    </div>
                    <div class="message">
                        <label for="message">Message : </label>
                        <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="Send">
                </form>
            </div>
        </div>
        `
    }
}