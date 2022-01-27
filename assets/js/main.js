(()=>{
    const minus = document.querySelector(".minus-button");
    const plus = document.querySelector(".plus-button");
    const reset = document.querySelector(".reset-button");
    const counterValue = document.querySelector(".counter-value")

    counterButtonHandler = operation => {
        let counterCurrentValue = +counterValue.innerHTML
        switch (operation) {
            case "-":
                counterCurrentValue--
                if(counterCurrentValue >= 0) {
                    counterValue.innerHTML = counterCurrentValue
                }
                break;
            case "+":
                counterCurrentValue++
                counterValue.innerHTML = counterCurrentValue
                break;
            case "*":
                counterValue.innerHTML = 0
            default:
                break;
        }
    }

    minus.addEventListener('click', () => counterButtonHandler("-"))
    plus.addEventListener('click', () => counterButtonHandler("+"))    
    reset.addEventListener('click', () => counterButtonHandler("*"))
})()

