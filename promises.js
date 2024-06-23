//Promises 
const p = new Promise((resolve, reject) => {
    let a=1+1;
        if (a==2) {
            resolve('successful'); 
        } else {
            reject(new Error('Failure')); 
        }
});

p.then((message)=>{
    console.log( `${message}`);
}).catch((message)=>{
    console.log( `${message}`);
});

//promises example
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }

  let promise = loadScript("https://code.jquery.com/jquery-3.6.0.min.js");

promise.then(
  script => console.log(`${script.src} is loaded!`),
  error => console.error(`Error: ${error.message}`)
);

//Promises chaining
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched user with id ${userId}`);
        resolve({ id: userId, name: "Alice" });
      }, 1000);
    });
  }
  
  function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched posts for user with id ${userId}`);
        resolve([
          { postId: 1, content: "Post 1" },
          { postId: 2, content: "Post 2" }
        ]);
      }, 1000);
    });
  }
  
  function fetchComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched comments for post with id ${postId}`);
        resolve([
          { commentId: 1, content: "Comment 1" },
          { commentId: 2, content: "Comment 2" }
        ]);
      }, 1000);
    });
  }
  const userId = 1;

fetchUser(userId)
  .then(user => {
    console.log(`User: ${user.name}`);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log(`Posts: ${posts.map(post => post.content).join(", ")}`);
    return fetchComments(posts[0].postId);
  })
  .then(comments => {
    console.log(`Comments: ${comments.map(comment => comment.content).join(", ")}`);
  })
  .catch(error => {
    console.error("Error:", error);
  });


//async/await

async function weather() {
    let delhiWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("35 degrees");  // Resolve with the temperature
        }, 1000);
    });

    let chennaiWhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 degrees");  // Resolve with the temperature
        }, 3000);
    });
    console.log("loading delhi weather...");
    let delhiw = await delhiWhether;
    console.log("Delhi weather "+delhiw);
    console.log("loading chennai weather...");
    let chennaiw = await chennaiWhether;
    console.log("Chennai weather "+chennaiw);
    return [delhiw, chennaiw];
}

weather().then((data) => {
    console.log(data);  // Output: ['35 degrees', '30 degrees']
}).catch((error) => { 
    console.log(error);
});

//async and await

// Function to fetch user data from an API
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched user with id ${userId}`);
        resolve({ id: userId, name: "Alice" });
      }, 1000); // Simulating delay of 1 second
    });
  }
  
  // Function to fetch posts for a user
  async function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched posts for user with id ${userId}`);
        resolve([
          { postId: 1, content: "Post 1" },
          { postId: 2, content: "Post 2" }
        ]);
      }, 1000); // Simulating delay of 1 second
    });
  }
  
  // Function to fetch comments for a post
  async function fetchComments(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Fetched comments for post with id ${postId}`);
        resolve([
          { commentId: 1, content: "Comment 1" },
          { commentId: 2, content: "Comment 2" }
        ]);
      }, 1000); // Simulating delay of 1 second
    });
  }
  
  // Async function to fetch user details, posts, and comments
  async function fetchUserDetails(userId) {
    try {
      const user = await fetchUser(userId);
      console.log(`User: ${user.name}`);
  
      const posts = await fetchPosts(user.id);
      console.log(`Posts: ${posts.map(post => post.content).join(", ")}`);
  
      const comments = await fetchComments(posts[0].postId);
      console.log(`Comments: ${comments.map(comment => comment.content).join(", ")}`);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }
  
  // Usage: Call the async function to fetch user details, posts, and comments
  fetchUserDetails(1);
  