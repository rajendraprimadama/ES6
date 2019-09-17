const posts = [
    { title: `Post One`, body: `This is post one` },
    { title: `Post Two`, body: `This is post two`}
]

const getPosts = () => {
    setTimeout(() => {
        let output = ``;
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

const createPost = (post, callbcak) => {
    setTimeout(() => {
        posts.push(post)
        callbcak()
    }, 2000)
}


createPost({ title: `Post Three`, body:`This is post three`}, getPosts)