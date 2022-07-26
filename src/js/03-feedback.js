const throttle = require('lodash.throttle');
const DATA_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
    submit: document.querySelector("button"),
}

const formObj = {}
onFillForm()

refs.form.addEventListener("input", throttle(e => {
    formObj[e.target.name] = e.target.value;
    localStorage.setItem(DATA_KEY, JSON.stringify(formObj));
}, 500))

refs.form.addEventListener("submit", e => {
    e.preventDefault();
    if (refs.input.value !== "" && refs.textarea.value !== "") {
        localStorage.clear(DATA_KEY);
        console.log(formObj);
        refs.form.reset();
    } else {
        alert("Fill all fields!");
    }
})

function onFillForm() {
    let storageEl = localStorage.getItem(DATA_KEY)
    if (storageEl) {
        storageEl = JSON.parse(storageEl)
        Object.entries(storageEl).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
            formObj[name] = value;
        });

    }
}

