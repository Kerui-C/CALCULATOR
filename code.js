document.addEventListener("DOMContentLoaded", (event) => {  
    const buttons = document.querySelectorAll(".b");
    const screen = document.querySelector(".w");
    const solve = document.getElementById("enter")
    function position(string){
        let Key = ["+", "/", "-", "*"];
        for(let i = 0; i < string.length; i++){
            if(Key.includes(string[i])){
                return i;
            }
        }
        return false;
    }
    function Better_eval(Expression){
        if(position(Expression) != 0){
            let first_half = Expression.slice(0, (position(Expression)));
            let second_half = Expression.slice(position(Expression)+1);
            if(position(first_half) === false && position(second_half) === false){
                switch(Expression[i]){
                    case "+":
                        return Number(first_half)+Number(second_half);
                    case "-":
                        return Number(first_half)-Number(second_half);
                    case "*":
                        return Number(first_half)*Number(second_half);
                    case "/":
                        return Number(first_half)/Number(second_half);
                }
            }
            return "failed half has op";
        }
        return "failed no op";
    };
    let curr_exp = "";
    buttons.forEach(function(x){
        x.addEventListener("click", function(){
            screen.innerHTML = screen.innerHTML + this.innerHTML;
            curr_exp += this.id;
            console.log(curr_exp)
        })
    });
    solve.addEventListener("click", function(){
        screen.innerHTML = Better_eval(screen.innerHTML);
    })
});



