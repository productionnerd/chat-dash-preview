const input = document.querySelector(".no-outline");
const sendButton = document.querySelector('.fa-paper-plane');
const Notifications = document.querySelector('.notifications');
buttons = document.querySelectorAll('.buttons .toastbtn');

const toastDetials = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success! This is a success toast.'
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error! This is an error toast.'
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning! This is a warning toast.'
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info! This is an info toast.'
    }

}

const removeToast = (toast) => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 500)
}

const createToast = (id) => {
    const { icon, text } = toastDetials[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = ` <div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onclick = "removeToast(this.parentElement)"></i>`;
    Notifications.appendChild(toast);
    setTimeout(() => removeToast(toast), toastDetials.timer);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
})

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