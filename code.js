document.addEventListener("DOMContentLoaded", (event) => {  
    const buttons = document.querySelectorAll(".b");
    const screen = document.querySelector(".w");
    console.log(screen);
    console.log(buttons);
    console.log(buttons.length)
    buttons.forEach(function(x){
        x.addEventListener("click", function(){
            console.log(this.innerHTML);
            screen.innerHTML = screen.innerHTML + this.innerHTML;
        })
    });
});



