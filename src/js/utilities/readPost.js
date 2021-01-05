import PostPage from "../pages/Post.js"

export default function readPost() {
    document.querySelectorAll('.post-header > h2, .continue-reading')
        .forEach( post => {
            post.addEventListener('click', (e) => {
                let postId = getPostId(e)
                new PostPage(postId).render()                
            })
        })
}


function getPostId(e) {
    let postId = e.target.parentElement.parentElement.parentElement.dataset.postid

    switch (e.target.tagName) {
        case "I":
            postId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.postid
            break;
    
        case "BUTTON":
            postId = e.target.parentElement.parentElement.parentElement.parentElement.dataset.postid
            break;
    }

    console.log(postId);

    return postId

}