async function commentFormHandler(event) {
    event.preventDefault();

    const commentBody = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('input[name="post-id"]').value;

    if (commentBody) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                commentBody
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

document.querySelector('.makecomment-form').addEventListener('submit', commentFormHandler);