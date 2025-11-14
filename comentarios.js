document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const chatMessages = document.getElementById('chat-messages');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = commentText;
            chatMessages.appendChild(messageElement);
            commentInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
