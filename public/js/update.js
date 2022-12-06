// Update post function 
async function updateFormHandler(event) {
    event.preventDefault();

    const commentDescription = document.querySelector('#blog-desc').value.trim();
    const title = document.querySelector('#blog-name"]').value;

    if (commentBody) {
        const response = await fetch(`/api/blogs/${id}/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                commentDescription
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            console.log("Error posting comment")
            alert("please login first!");
        }
    }
}

document.querySelector('.postupdatebtn').addEventListener('submit', updateFormHandler);

// delete post function 
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}/edit`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document.querySelector('.postdeletebtn').addEventListener('submit', delButtonHandler);

// cancel button 
document.querySelector('.cancelbtn').onclick = function () {
    location.href = "/profile";
};