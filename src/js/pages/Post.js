import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Newsletter from "../components/Newsletter.js";
import { contactDrawer } from "../utilities/contactDrawer.js";
import goHome from "../utilities/goHomeBtn.js";
import formatDate from "../utilities/formatDate.js";
import Loading from "../components/Loading.js";

export default class PostPage {
	root = document.querySelector(".root");

	constructor(postId) {
		this.postId = postId;
	}

	render = async () => {
		this.root.innerHTML = new Loading().showLoading();
		let article = await this.fetchPost();
		this.root.innerHTML = this.markup(article);
		this.events();
	};

	markup = (article) => {
		return `
        ${new Header().render()}
        <main class="article">
            <header class="article-header">
                <div class="article_header-text">
                    <h1>${article.title.rendered}</h1>
                    <!-- <div class="divider"></div> -->
                    <div class="article_date_author">
                        <p class="article_author">written by : <a href="${
													article.acf.authorUrl
												}" target="_blank" rel="noopener noreferrer">${article.acf.author}</a></p>
                        <p class="article_date">Last updated on ${formatDate(
													article.date.split("T")[0]
												)}</p>
                    </div>
                </div>
                <!-- <img src="" alt=""> -->
            </header>
            <article class="article-content">
                ${article.content.rendered}
            </article>
            <div class="bottom-nav">
                <button class="go-home">Back</button>
                <button>Next article</button>
            </div>
        </main>
        ${new Newsletter().render()}
        ${new Contact().render()}
        ${new About().render()}
        ${new Footer().render()}
        `;
	};

	events = () => {
		contactDrawer();
		goHome();
	};

	fetchPost = async () => {
		let post;

		await fetch(`https://randomblog0.000webhostapp.com/wp-json/wp/v2/posts/${this.postId}`)
			.then((res) => res.json())
			.then(async (data) => {
				post = data;
			});

		return post;
	};
}
