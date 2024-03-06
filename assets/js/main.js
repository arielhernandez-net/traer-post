const button = document.getElementById("button");
const ulElement = document.getElementById("post");

async function getPost() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const first10 = data.slice(0, 10);
    
        first10.forEach(post => {
            const liElement = document.createElement('li');
            const titleElement = document.createElement('h5');
            titleElement.textContent = post.title;
            liElement.appendChild(titleElement);
            const bodyElement = document.createElement('p');
            bodyElement.textContent = post.body;
            liElement.appendChild(bodyElement);
            ulElement.appendChild(liElement);
        });

        button.removeEventListener('click', getPost);
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', getPost);
