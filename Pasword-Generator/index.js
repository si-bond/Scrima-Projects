const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

const password1Element = document.getElementById("pass1")
const password2Element = document.getElementById("pass2")
const generatePasswordBtn = document.getElementById("generate")
const passwordLengthElement = document.getElementById("pass-length")

generatePasswordBtn.addEventListener("click", createPassword)

function getRandomNumber(){
    return Math.floor(Math.random()*characters.length)
}

function getRandomCharacter (){ 
    return characters[getRandomNumber()] 
}

function createPassword(){

    let password1 = ""
    let password2 = ""
    
    passwordLength = passwordLengthElement.value
    
    for (let i=0; i<passwordLength; i++){
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
    
    password1Element.textContent = password1
    password2Element.textContent = password2
}




