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
            <!-- <hr class="post-divider"> -->
            ${await this.markup(postDetails)}
            ` 
            )
            
            return acc

        }, [])



        return postMarkup.join('');

    }

    markup = async(postDetails) => {
        return `
        <section class="post" data-postId="${postDetails.id}">
            <article>
                <div class="tags">
                    <div class="tag-link">
                        <img class="tag-img" src="./imgs/tags-solid.svg" alt="">
                        <a href=""> Beginner </a>
                    </div>
                    <div class="tag-link">
                        <img class="tag-img" src="./imgs/tags-solid.svg" alt="">
                        <a href=""> Web Development </a>
                    </div>
                    <div class="tag-link">
                        <img class="tag-img" src="./imgs/tags-solid.svg" alt="">
                        <a href=""> Javascript </a>
                    </div>
                </div>
                <header class="post-header"> 
                    <h2>${postDetails.title.rendered}</h2>
                    <div class="date_author">
                        <p class="author">${postDetails.acf.author}</p>
                        <p class="date">${formatDate(postDetails.date.split('T')[0])}</p>
                    </div>
                </header>
                <div class="post-content">
                    <div class="post-image" style="background-image: url('${await this.getImage(postDetails.featured_media)}');"></div>
                </div>
            </article>
        </section>
        `
    }

    getImage = async (imgId) => {

            let img

            await fetch(`https://randomblog0.000webhostapp.com/wp-json/wp/v2/media/${imgId}`)
            .then(res => res.json())
            .then(imgData => {
                img = imgData.media_details.sizes.full.source_url
            })
            .catch( err => {
                img = `https://cdn.pixabay.com/photo/2018/05/02/23/42/website-3370083_960_720.jpg`            

                return false
            })

            return img
    }
    
}
