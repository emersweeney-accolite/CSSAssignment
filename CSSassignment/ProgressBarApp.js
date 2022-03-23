const button = document.querySelector('#click');
const progressBar = document.querySelector('#progress');
const message = document.querySelector('#message');
let width=progressBar.style.width;
console.log("first" + width);
button.addEventListener('click', function(){
    if (width<10){
        progressBar.style.width = 10*++width + "%";
        console.log(width);
        if (width==10) {
            button.parentElement.removeChild(button);
            message.textContent="Progress Complete !";
        }
    }
});