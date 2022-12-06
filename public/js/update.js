// Update post function 
async function updateFormHandler(event) {
    event.preventDefault();

    const blogDescription = document.querySelector('#blog-desc').value.trim();
    const title = document.querySelector('#blog-name').value;
    const id = document.querySelector('.postupdatebtn').getAttribute('data-id');

    if (blogDescription) {
        const response = await fetch(`/api/blogs/${id}/edit`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                blogDescription
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log("ok")
            document.location.replace('/profile');
        } else {
            console.log("Error updating comment");
        }
    }
}

document.querySelector('.postupdatebtn').addEventListener('click', updateFormHandler);

// delete post function 
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogs/${id}/edit`, {
            method: 'DELETE',
            body: JSON.stringify({ blog_id: id })
        });

        if (response.ok) {
            console.log("ok")
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document.querySelector('.postdeletebtn').addEventListener('click', delButtonHandler);