import About from "../components/About.js"
import Contact from "../components/Contact.js"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js"
import Loading from "../components/Loading.js"
import Newsletter from "../components/Newsletter.js"
import Post from "../components/Post.js"
import Social from "../components/Social.js"
import { contactDrawer } from "../utilities/contactDrawer.js"
import readPost from "../utilities/readPost.js"
import PostPage from "./Post.js"

export default class Home {

    body = document.querySelector('body')
    pages = [1,2,3]

    constructor() {
        
    }

    render = async() => {

        this.body.innerHTML = new Loading().showLoading()

        let posts = await this.fetchPosts()
        
        this.body.innerHTML = await this.markup(posts)
        
        this.events()

    }

    markup = async(posts) => {
        return `
        ${new Header().render()}
        <main class="home">
            <div class="intro-img-text">
                <div class="intro-imgs">
                    <img src="./imgs/introimgs/angular-brands.svg" alt="">
                    <img src="./imgs/introimgs/code-branch-solid.svg" alt="">
                    <img src="./imgs/introimgs/code-solid.svg" alt="">
                    <img src="./imgs/introimgs/css3-brands.svg" alt="">
                    <img src="./imgs/introimgs/github.svg" alt="">
                    <img src="./imgs/introimgs/html5-brands.svg" alt="">
                    <img src="./imgs/introimgs/js-brands.svg" alt="">
                    <img src="./imgs/introimgs/node-js-brands.svg" alt="">
                    <img src="./imgs/introimgs/npm-brands.svg" alt="">
                    <img src="./imgs/introimgs/react-brands.svg" alt="">
                    <img src="./imgs/introimgs/sass-brands.svg" alt="">
                    <img src="./imgs/introimgs/wordpress-brands.svg" alt="">
                </div>
                <div class="intro-overlay"></div>
                <div class="intro-content">
                    <h1><span>random</span><span>BLOG</span></h1>
                    <p>random tech articles...</p>
                    <button class="subscribe">
                     <a href="#newsletter"> Subscribe </a> 
                    </button>
                </div>
            </div>
            ${new Social().render()}
            <section class="posts-container">
                <header class="posts-header">
                    <h1>Recent Posts</h1>
                </header>
                <hr class="section-start">
                <div class="posts">
                    ${await new Post(posts).render()}
                </div>
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
        readPost()
    }

    fetchPosts = async() => {
        
        let posts;

        await fetch('https://randomblog0.000webhostapp.com/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(async (data) => {
                posts = data
            })

        return posts
    }

}