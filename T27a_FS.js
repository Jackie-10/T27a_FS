document.querySelector("#id_btn").addEventListener("click", sumbitClick);

changeMeBtn = document.querySelector("#btn_changeMe");
changeMeBtn.addEventListener("click", changeMe);

textBoxInput = document.querySelector("#id_input");
textBoxInput.addEventListener("focusin", getFocusIn);

let timeON = false;
let clickMe = 0;
changeMe()

 function sumbitClick() {     
    let userInput = textBoxInput.value;    
       
  if(!timeON){         
    if(!(isNaN(userInput))  && userInput !=""){
        userInput = Number(userInput) + 10; 
        document.querySelector("#id_span").textContent = userInput;
        textBoxInput.value = userInput;       
        document.querySelector("#id_span").style.color= "rgb(57, 157, 65)";   
    }else{
        timeON = true;
        textBoxInput.value = "";        
        myInterval = setInterval(blinkMsg ,200);        
        stopTime = setTimeout(stopSetTime,2000);        
    }
  }  
}

function changeMe(){  
  let strA = ""; 
  let strB = ""; 
  let h1_Color = "";

  switch (clickMe){ 
    case 0:    
    strA = "Click Me";
    strB = "Hello World";  
    h1_Color = "rgb(71, 136, 226)";  
    clickMe = 1;
    break;

    case 1:   
    strA = "Click Me Again";
    strB = "Have A Nice Day"; 
    h1_Color = "rgb(218, 117, 255)";
    clickMe=2;
    break;   

    case 2:
    strA = "And Click Again"
    strB = "😄 לא נמאס לכם לשחק";    
    h1_Color = "rgb(241, 100, 87)";    
    clickMe=0;
   }      
      changeMeBtn.textContent = strA;
      document.querySelector("#id_h1").textContent = strB;
      document.querySelector("#id_h1").style.color = h1_Color;
  }

function getFocusIn(){  
  if(timeON){    
    stopSetTime();
  }
}

function blinkMsg(){     
    let blink = textBoxInput;   
    textBoxInput.placeholder = "Enter Only Number";
    blink.style.background = blink.style.background == "white" ? "rgb(145, 240, 145)" : "white";     
}

function stopSetTime(){
    clearInterval(myInterval);
    clearTimeout(stopTime);
    textBoxInput.placeholder = ""; 
    textBoxInput.style.background = "white";  
    timeON = false;   
}