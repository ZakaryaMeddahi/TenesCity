
const checkBox = document.getElementById("show-password")
const submit = document.getElementById("submit")


function changeRegisterStatus() {

    const registrationHeader = document.getElementsByClassName("register")
    const signUpMode = document.getElementById("sign-up")
    const logInMode = document.getElementById("log-in")

    registrationHeader[0].classList.toggle("active")
    registrationHeader[1].classList.toggle("active")

    if(signUpMode.style.display === "none") {
        signUpMode.style.setProperty("display", "flex")
        logInMode.style.setProperty("display", "none")
    } else {
        signUpMode.style.setProperty("display", "none")
        logInMode.style.setProperty("display", "flex")
    }
    
}


// submit.addEventListener("click", function() {
    
//     const str = document.getElementById()
//     const error = document.querySelector(".error-password")

//     if(str.length > 14) {
//         error.innerHTML = "the password must have less than 15 characters"
//     } else if(str.length < 8) {
//         error.innerHTML = "the password must have more than 7 characters"
//     }
// })


checkBox.addEventListener("click", function() {

    const showPassword = document.getElementById("password")

    if(checkBox.checked) {
        showPassword.type = "text"
    } else {
        showPassword.type = "password"
    }
})

