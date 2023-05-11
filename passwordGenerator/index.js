


const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
 "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
 "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")




function generatePassword() {

    pass1.textContent = ""
    pass2.textContent = ""

    for (i = 0; i < 15; i++) {
        let indicerandom = Math.floor(Math.random() * characters.length);
        pass1.textContent += characters[indicerandom]
        pass2.textContent += characters[indicerandom]
    }
}


pass1.addEventListener("click", () => {
  const text = pass1.innerText;

  navigator.clipboard.writeText(text).then();
});

pass2.addEventListener("click", () => {
    const text = pass2.innerText;
  
    navigator.clipboard.writeText(text).then();
  });

