
const graybox = document.querySelector(".formContainer")
const signUpMode = graybox.querySelector("#sign-up")
const logInMode = graybox.querySelector("#log-in")

const checkBox = document.querySelector("#show-password")
const submit = document.getElementById("submit")


// function changeRegisterStatus() {

//     const registrationMode = document.getElementsByClassName("register")
//     var signUpMode = graybox.querySelector("#sign-up").cloneNode(true)
//     var logInMode = graybox.querySelector("#log-in").cloneNode(true)

//     registrationMode[0].classList.toggle("active")
//     registrationMode[1].classList.toggle("active")

//     if(registrationMode[0].classList.contains("active")) {
//         graybox.appendChild(signUpMode)
//         graybox.removeChild(document.getElementById("log-in"))
//     } else {
//         graybox.appendChild(logInMode)
//         graybox.removeChild(document.getElementById("sign-up"))
//     }
    
// }

function changeRegisterStatus() {

    const registrationMode = document.getElementsByClassName("register")

    registrationMode[0].classList.toggle("active")
    registrationMode[1].classList.toggle("active")

    if(registrationMode[0].classList.contains("active")) {
        signUpMode.style.display = "flex"
        logInMode.style.display = "none"

    } else {
        signUpMode.style.display = "none"
        logInMode.style.display = "flex"
    }
    
}


submit.addEventListener("submit", function() {
    
    const password = document.getElementById("password").value
    const error = document.querySelector(".error-password")

    if(password.length > 14) {
        error.innerHTML = "password must have less than 15 characters"
    }
    else if(password.length < 8) {
        error.innerHTML = "password must have more than 7 characters"
    }
})


checkBox.addEventListener("click", function() {

    const showPassword = document.querySelector("#password")

    if(checkBox.checked) {
        showPassword.type = "text"
    } else {
        showPassword.type = "password"
    }
})

