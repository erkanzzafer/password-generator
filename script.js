const resultEL=document.getElementsByClassName("result")[0];
const lengthEL=document.getElementById("length");
const uppercaseEL=document.getElementById("uppercase");
const lowercaseEL=document.getElementById("lowercase");
const numbersEL=document.getElementById("numbers");
const symbolsEL=document.getElementById("symbols");
const generateEL=document.getElementById("generate");
const clipboardEL=document.getElementById("clipboard");



// 97 - 122
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// 65 - 90
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);

}

//48 to 57
function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}


function getRandomSymbols(){
const symbols="!@#$%^&*(){}[]=<>/,.";
return symbols[Math.floor(Math.random()*symbols.length)];
}

const randomFunc={
    lower:getRandomLowerCase,
    upper:getRandomUpperCase,
    number:getRandomNumbers,
    symbols:getRandomSymbols
}


generateEL.addEventListener("click",()=>{
const length = +lengthEL.value;
const hasLower =lowercaseEL.checked;
const hasUpper =uppercaseEL.checked;
const hasNumber =numbersEL.checked;
const hasSymbol =symbolsEL.checked;


resultEL.innerHTML=generatePassword(hasLower,hasUpper,hasNumber,hasSymbol,length);
});


typesArr=[];
function generatePassword(lower,upper,number,symbol,length){

let generatedPassword='';
let typeCount = lower+upper+number+symbol;
typesArr=[{lower},{upper},{number},{symbols}].filter((item)=>
    Object.values(item)[0]
)
alert(typesArr.toString());
if (typeCount===0){
    return '';
}

for(let i=0;i<length;i+=typeCount){
   
    typesArr.forEach((type)=>{
        const keyFromRandomFun=Object.keys(type)[0];
        console.log(keyFromRandomFun);
     // alert(randomFunc[keyFromRandomFun]);
        generatedPassword+=randomFunc[keyFromRandomFun]();
    })
}

const finalPassword=generatedPassword.slice(0,length);

return finalPassword;




}








