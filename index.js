string = document.getElementById("operation");
buttons = document.querySelectorAll('input[type="button"]');
stringValue = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.value;
        if(buttonText == "X"){
            buttonText = "*";
            stringValue += buttonText;
            string.value = stringValue;
        }else if(buttonText == "C"){
            stringValue = "";
            string.value = stringValue;
            document.getElementById("expression").innerHTML = "";
        }else if(buttonText == "="){
            string.value = eval(stringValue);
            document.getElementById("expression").innerHTML = stringValue+" = "+string.value;
            stringValue = string.value;              
        }else if(buttonText == "CE"){
            newVal = "";
            stringValue = stringValue.toString();
            for(i=0; i<stringValue.length-1; i++){
                newVal += stringValue[i];
            }
            stringValue = newVal;
            string.value = stringValue;

        }else if(buttonText == "x^2"){
            document.getElementById("expression").innerHTML = stringValue+"*"+stringValue+" = "+stringValue*stringValue;
            stringValue *= stringValue;
            string.value = stringValue;

        }else{
            stringValue += buttonText;
            string.value = stringValue;
        }
    })
}