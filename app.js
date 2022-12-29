const input = document.querySelector(".no-outline");
const sendButton = document.querySelector('.fa-paper-plane');

function text_change() {
    console.log('change');
    if (input.value.trim() != '') {
        sendButton.style.color = 'var(--main)';
        sendButton.style.cursor = 'pointer';
    } else if (input.value.trim() === '') {
        sendButton.style.color = 'rgb(179, 179, 179)';
        sendButton.style.cursor = 'default';
    }
}