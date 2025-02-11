let filter = document.querySelector('.filter');
let form = document.querySelector('.form');
let confirmButton = document.querySelector('.form__button-submit')
function createFilterEventListener() {
    filter.addEventListener("click", (e) => {
        form.style.display = 'flex';
        filter.addEventListener("click", (e) => {
            form.style.display = 'none';
            createFilterEventListener()
        })
    });
}
createFilterEventListener()
confirmButton.addEventListener("click", (e) => {
    form.style.display = 'none';
})  