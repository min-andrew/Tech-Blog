// New post function to connect handlebar new post button and route 
const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();

    if (name && description) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create blog');
        }
    }
};

const bloglist = document.querySelector('.blog-list');
const newpost = document.querySelector(".newpostbtn");
const postcard = document.querySelector(".makepostcard");
const cancelbtn = document.querySelector(".cancelbtn");

document
    .querySelector('.makepost-form')
    .addEventListener('submit', newFormHandler);


// Simple hider/unhider functions that reveal the the new posts if youre not creating a post, or hides the create post and just reveals the posts you've already written. 
function unhide() {
    postcard.style.display = "flex";
    console.log("create posts unhidden")
    if (bloglist) {
        bloglist.style.display = "none";
    };
};

function hide() {
    postcard.style.display = "none";
    if (bloglist) {
        bloglist.style.display = "flex";
    };
}

newpost.addEventListener('click', unhide);
cancelbtn.addEventListener('click', hide)
