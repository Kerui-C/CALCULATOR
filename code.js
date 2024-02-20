document.addEventListener("DOMContentLoaded", (event) => {  
    const buttons = document.querySelectorAll(".b");
    const screen = document.querySelector(".w");
    const solve = document.getElementById("enter");
    const remove = document.getElementById("clear");
    function position(string){
        let Key = ["+", "÷", "-", "x"];
        for(let i = 0; i < string.length; i++){
            if(Key.includes(string[i])){
                return i;
            }
        }
        return false;
    }
    function Better_eval(Expression){
        let first_half = Expression.slice(0, (position(Expression)));
        let second_half = Expression.slice(position(Expression)+1);
        console.log(first_half);
        console.log(second_half);
        if(position(first_half) === false && position(second_half) === false){
            switch(Expression[position(Expression)]){
                case "+":
                    return Number(first_half) + Number(second_half);
                case "-":
                    return Number(first_half) - Number(second_half);
                case "x":
                    return Number(first_half) * Number(second_half);
                case "÷":
                    if(Number(second_half) != 0){return Number(first_half) / Number(second_half);}
                    return "you can't use a calculator properly???";
                default:
                    return first_half+second_half
            }
        }
        return "failed half has op";
    }

    let curr_exp = "";
    buttons.forEach(function(x){
        x.addEventListener("click", function(){
            screen.innerHTML = screen.innerHTML + this.innerHTML;
            curr_exp += this.innerHTML;
            console.log(curr_exp)
        })
    });
    solve.addEventListener("click", function(){
        screen.innerHTML = Better_eval(screen.innerHTML);
    })
    remove.addEventListener("click", function(){
        screen.innerHTML = "";
        curr_exp = "";
    })
});



