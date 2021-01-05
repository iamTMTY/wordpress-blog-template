import formatDate from "../utilities/formatDate.js";

export default class Post {

    constructor(postDetails) {
        this.postDetails = postDetails
    }

    render = async() => {

        let postMarkup = [];

        await this.postDetails.reduce(async(acc, postDetails) => {
            
            postMarkup.push(
            `
            <hr class="post-divider">
            ${await this.markup(postDetails)}
            ` 
            )
            
            return acc

        }, [])

        // console.log(await this.markup(this.postDetails))


        return postMarkup.join('');

    }

    markup = async(postDetails) => {
        return `
        <section class="post" data-postId="${postDetails.id}">
            <article>
                <header class="post-header"> 
                    <h2>${postDetails.title.rendered}</h2>
                    <div class="date_author">
                        <p class="author">${postDetails.acf.author}</p>
                        <p class="date">${formatDate(postDetails.date.split('T')[0])}</p>
                    </div>
                </header>
                <div class="post-content">
                    <div class="post-image" style="background-image: url('${await this.getImage(postDetails.featured_media)}');"></div>
                    <div class="post-excerpt-container">
                        ${postDetails.excerpt.rendered}
                        <button class="continue-reading"> continue reading <i class="material-icons">arrow_forward</i></button>
                    </div>
                </div>
                <div class="tags">
                    <img class="tag-img" src="./imgs/tags-solid.svg" alt="">
                    <div class="tag-links">
                        <a href=""> Beginner </a>
                        <a href=""> Web Development </a>
                        <a href=""> Javascript </a>
                    </div>
                </div>
            </article>
        </section>
        `
    }

    getImage = async (imgId) => {

            let img

            await fetch(`http://localhost/wordpress/wp-json/wp/v2/media/${imgId}`)
            .then(res => res.json())
            .then(imgData => {
                img = imgData.media_details.sizes.full.source_url
            })

            console.log(img);

            return img
    }
    
}
