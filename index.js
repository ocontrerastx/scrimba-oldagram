const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let main = document.querySelector("main")

let postContent = document.createElement('section')
postContent.classList.add('post-content')
let postAuthorDiv = document.createElement('div')
postAuthorDiv.classList.add('post-author')

main.append(postContent)

let postSection = `
    <section class="post-content">
      <div class="post-author">
        <img class="avatar" src="${posts[0].avatar}" alt="" />
        <div class="post-author-details">
          <p class="post-author-name">${posts[0].name}</p>
          <p class="post-author-location">${posts[0].location}</p>
        </div>
      </div>

      <div class="post-img">
        <img src="${posts[0].post}" alt="" class="post-image" />
      </div>

      <div class="post-body">
        <div class="post-actions">
          <img src="/images/icon-heart.png" alt="" />
          <img src="/images/icon-comment.png" alt="" />
          <img src="/images/icon-dm.png" alt="" />
        </div>
        <div class="post-metrics">
          <p>${posts[0].likes}</p>
        </div>
        <div class="post-comments">
          <p>
            <span class="bold">${posts[0].username}</span> ${posts[0].comment}
          </p>
        </div>
      </div>
    </section>`

main.innerHTML = postSection