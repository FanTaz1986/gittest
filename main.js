const posts = [
  {
    title: "Welcome to My Blog",
    author: "Admin",
    content: "This is the first post on this simple blog. Enjoy reading and feel free to comment!"
  },
  {
    title: "React vs Vite",
    author: "Algirdas",
    content: "Vite is a modern build tool that is much faster than Create React App. Try it for your next project!"
  },
  {
    title: "PowerShell for Web Devs",
    author: "John",
    content: "PowerShell can automate file creation, setup, and more. It is a great tool for developers on Windows."
  }
];

function renderBlog() {
  const root = document.getElementById("root");
  let html = `
    <div class="blog-container">
      <div class="blog-title">Simple Blog</div>
      <div class="blog-author">by Blog Team</div>
      ${posts.map(post => `
        <div class="blog-post">
          <div class="blog-post-title">` + post.title + `</div>
          <div class="blog-author">by ` + post.author + `</div>
          <div class="blog-post-content">` + post.content + `</div>
        </div>
      `).join("")}
    </div>
  `;
  root.innerHTML = html;
}

renderBlog();
