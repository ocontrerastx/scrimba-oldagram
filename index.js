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

const main = document.querySelector("main")

function renderPosts (posts) {

  let postList = ''

  for (i = 0; i < posts.length; i++) {
    let postSection = `
    <section class="post-content">
      <div class="post-author">
        <img class="avatar" src="${posts[i].avatar}" alt="" />
        <div class="post-author-details">
          <p class="post-author-name">${posts[i].name}</p>
          <p class="post-author-location">${posts[i].location}</p>
        </div>
      </div>

      <div class="post-img">
        <img src="${posts[i].post}" alt="" class="post-image" />
      </div>

      <div class="post-body">
        <div class="post-actions">
          <div class="post-actions-button" role="button">
            <img src="images/icon-heart.png" alt="Heart shaped icon" />
          </div>
          <div class="post-actions-button" role="button">
            <img src="images/icon-comment.png" alt="Comment bubble icon" />
          </div>
          <div class="post-actions-button" role="button">
            <img src="images/icon-dm.png" alt="Message icon" />
          </div>
        </div>
        <div class="post-metrics">
          <p>${posts[i].likes} Likes</p>
        </div>
        <div class="post-comments">
          <p>
            <span class="bold">${posts[i].username}</span> ${posts[i].comment}
          </p>
        </div>
      </div>
    </section>`

    postList += postSection

  }

  main.innerHTML = postList
}

renderPosts(posts)