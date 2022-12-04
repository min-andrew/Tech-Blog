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

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
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


if (bloglist) {
    document
        .querySelector('.blog-list')
        .addEventListener('click', delButtonHandler);
};

function unhide() {
    postcard.style.display = "flex";
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
