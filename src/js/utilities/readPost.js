import PostPage from "../pages/Post.js"

export default function readPost() {
    document.querySelectorAll('.post-header > h2')
        .forEach( post => {
            post.addEventListener('click', (e) => {
                let postId = getPostId(e)
                new PostPage(postId).render()                
            })
        })
}


function getPostId(e) {
    let postId = e.target.parentElement.parentElement.parentElement.dataset.postid

    return postId

}