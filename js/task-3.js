const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
// console.log(inputEl);
// console.log(outputEl);
inputEl.addEventListener('input', greetings);
function greetings(event) {
    const name = event.target.value.trim();
    outputEl.textContent = name === '' ? 'Anonymous' : name;
}