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

// Provide required variables:
const
    nav = document.querySelector('.nav'),
    boxNav = nav.getBoundingClientRect(),
    navLeft = boxNav.left,
    navTop = boxNav.top,
    navWidth = boxNav.width,
    navHeight = boxNav.height,
    frm = document.querySelector('.frame');
// Move frame to new position:
function moveFrame(elem) {
    // elem is the element the frame should be moved to
    const
        box = elem.getBoundingClientRect(),
        boxLeft = box.left,
        boxTop = box.top,
        boxWidth = box.width,
        boxHeight = box.height,
        // Element currently active:
        activeEle = document.querySelector('.active');
    // Shift frame to new position.
    // Position is relative to container .nav
    // therefore we have to subtract top and left
    // of .nav:
    frm.style.left = (boxLeft - navLeft) + 'px';
    frm.style.top = (boxTop - navTop) + 'px';
    frm.style.width = boxWidth + 'px';
    frm.style.height = boxHeight + 'px';
    // Remove class "active" from previous element:
    if (activeEle) {
        activeEle.classList.remove('active');
    }
    // Add class "active" to new element:
    elem.classList.add('active');
}

// Position frame to initial element having class "active".
// As fontawesome is loaded asynchronously we have to
// wait until the font is ready:
const firstActive = document.querySelector('.active');
let timer = setInterval(() => {
    if (firstActive.querySelector('i').getBoundingClientRect().width > 0) {
        console.log('font awesome loaded');
        moveFrame(firstActive);
        clearInterval(timer);
        // Subsequently we move the frame in an animated way:
        frm.classList.add('animate');
    }
}, 10);
window.addEventListener('click', event => {
    moveFrame(event.target.closest('.page'));
});