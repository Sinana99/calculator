const screen = document.querySelector(".screen");
const screenNumber = document.createElement("p");
 
var clean = true
screenNumber.innerHTML ="0"
screenNumber.classList.add("screener")
screen.appendChild(screenNumber)

var firstNum = 0

var SecondNum = 0

var operator = ""

var check = true

var answer = 0

var vastaus = ""

buttons = Array.from(document.querySelectorAll("button"))


buttons.forEach(button => {

    
    
    
    button.addEventListener("click", select)
    }
    
);

function select(e) {
    if (clean && screenNumber.innerHTML.includes("=")) {
        
      screenNumber.innerHTML = "0";
      clean = false;
      ;
    }

    if (firstNum > 0 && check && !e.target.classList.contains("pressed")) {
        
        screenNumber.innerHTML = ""
        check = false
    }
  
    if (e.target.id === "equal") {
      operate(e);
    } else if (e.target.id === "times" || e.target.id === "plus" || e.target.id === "minus" || e.target.id === "divide") {
     
        addPressed(e)
        pressedClean(e)
        calculate(e)
        operator = e.target.id
 
        addPressed(e)

     
      


    } else if (e.target.id !== "del" && e.target.id !== "clear") {
        if (screenNumber.innerHTML === "0") {
            screenNumber.innerHTML = ""
        }
       
      if (screenNumber.innerHTML.length <= 20){
        if (screenNumber.innerHTML.includes(".")) {
            if (e.target.innerHTML === ".") {
            } else {
                screenNumber.innerHTML += e.target.innerHTML
            }
            
        } else {
            screenNumber.innerHTML += e.target.innerHTML
        }
      
        
    } } else {
      clear(e);
    }
  }


  
function clear (e) {
    if (e.target.id === "clear") {
        screenNumber.innerHTML = "" + 0
    } else {
        var test = screenNumber.innerHTML
        test = test.slice(0, -1)
        screenNumber.innerHTML= test
    }
    pressedClean()
    
     firstNum = 0
     SecondNum = 0
     operator = ""
     
}  

function operate (e)  {

  SecondNum = screenNumber.innerHTML * 1

  vastaus = choose(operator)
  
  screenNumber.innerHTML = vastaus + "="
  clean = true
  pressedClean()
  check = false
  
  };
  
  


function addPressed(e) {
   e.target.classList.toggle("pressed")

   
}

function pressedClean() {
    buttons.forEach(buttone => {
        buttone.classList.remove("pressed")
})
}

function calculate(e) {
  firstNum = screenNumber.innerHTML * 1;
  check = true

  

};


function choose(operator) {
    if (operator === "minus") {
       answer =  minus()
    } else if (operator === "plus") {
        answer = add()
    } else if (operator === "times") {
        answer = multiply()
    } else if (operator === "divide") {
        answer = division()
    }
    return answer

}

function add() {
    return firstNum + SecondNum

}

function minus() {
    return firstNum - SecondNum

}

function multiply() {
    let ans = firstNum * SecondNum
    
     if  (Number.isInteger(ans)) {
        return ans
     } else {
        return ans.toFixed(7)
     }
}

function division() {
    if (SecondNum === 0) {
        return undefined
    }
    let ans = firstNum / SecondNum

    
     if  (Number.isInteger(ans)) {
        return ans
     } else {
        return ans.toFixed(7)
     }
}

