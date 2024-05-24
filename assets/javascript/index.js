const domElements = {
    password: document.querySelector('[data-id-password]'),
    togglePassword: document.querySelector('[data-id-toggle-password]'),
};

const events = {
    click: 'click',
    input: 'input'
};

const iconClasses = {
    eye: 'fa-eye',
    slash: 'fa-eye-slash'
};

const texts = {
    password: 'password',
    text: 'text',
};

domElements.togglePassword.addEventListener(events.click,
    (event) => {
        const eventTarget = event.target;
        const type = domElements.password.type.includes(texts.password) ? texts.text : texts.password;
        const passwordLength = domElements.password.value.length;

        domElements.password.type = type;

        if (passwordLength === 0) return

        eventTarget.classList.toggle(iconClasses.eye);
        eventTarget.classList.toggle(iconClasses.slash);
    }
);

domElements.password.addEventListener(events.input,
    (event) => {
        const eventTarget = event.target;
        const passwordLength = eventTarget.value.length;
        const iconIncludesClassSlash = domElements.togglePassword.className.includes(iconClasses.slash);

        if (passwordLength === 0 && iconIncludesClassSlash) {
            domElements.togglePassword.classList.remove(iconClasses.slash);
            domElements.togglePassword.classList.add(iconClasses.eye);
        }
    }
);