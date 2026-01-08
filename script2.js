let emailInput = document.querySelector("#email");
let nameInput = document.querySelector("#name");
let submitBtn = document.querySelector("#submit");
let themeBtn = document.querySelector("#theme");
let background = document.querySelector(".box")
submitBtn.addEventListener("click", ()=>{
    let email = emailInput.value.trim();
    let name = nameInput.value.trim();
     if(email==="" && name===""){
            alert("name and email cannot be empty");
        }
else if(email === ""){
        alert("email cannot be empty");
    }
else if (name === ""){
    alert("name cannot be empty");
}
else{
    alert("form submitted successfully");
}
}); 

themeBtn.addEventListener("click",()=>{
    background.classList.toggle("dark");
});



















