import About from "../components/About.js"
import Contact from "../components/Contact.js"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import Newsletter from "../components/Newsletter.js"
import Post from "../components/Post.js"
import Social from "../components/Social.js"
import { contactDrawer } from "../utilities/contact.js"
import { toggleNav } from "../utilities/nav.js"
import readPost from "../utilities/readPost.js"
import PostPage from "./Post.js"

export default class Home {

    body = document.querySelector('body')
    pages = [1,2,3]

    constructor() {
        
    }

    render = async() => {

        this.body.innerHTML = `<h1>Loading...</h1>`

        let posts = await this.fetchPosts()
        
        this.body.innerHTML = await this.markup(posts)
        
        this.events()

    }

    markup = async(posts) => {
        return `
        ${new Header().render()}
        <main class="home">
            ${new Social().render()}
            <section class="posts">
                <header class="posts-header">
                    <h1>Recent Posts</h1>
                </header>
                <hr class="section-start">
                ${await new Post(posts).render()}
                <div class="paging">
                    ${this.pages.reduce((acc, curr, idx) => {
                        return acc + `<button>${idx + 1}</button>`
                    }, ``)}
                </div>
            </section>
            ${new Newsletter().render()}
        </main>
        ${new Contact().render()}
        ${new About().render()}
        ${new Footer().render()}
        `
    }

    events = () => {
        contactDrawer()
        toggleNav()
        readPost()
    }

    fetchPosts = async() => {
        
        let posts;

        await fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(async (data) => {
                posts = data
            })

        return posts
    }

}