const postsContainer = document.querySelector(".blog-posts");

const url = "https://rikkedishingtonschool.com/fed-up/wp-json/wp/v2/posts";

async function fetchPosts() {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach((post) => {
      createHtml(post);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();

function createHtml(post) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const titleElement = document.createElement("h2");
  titleElement.innerText = post.title.rendered;
  postElement.appendChild(titleElement);

  const contentElement = document.createElement("div");
  contentElement.innerHTML = post.content.rendered;
  postElement.appendChild(contentElement);

  postsContainer.appendChild(postElement);
}
