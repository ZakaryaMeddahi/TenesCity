const tableBody = document.querySelector("tbody")
const tableRow = document.querySelector(".table-row")
// Delete default Row
tableBody.innerHTML = ""
tableRow.classList.remove("hidden")

let images
let i = 0

// Append new row to the table body
function createRow() {

  const row = `<tr class="table-row">
                  ${tableRow.innerHTML}
                </tr>`
    
  tableBody.innerHTML += row
}

// Assign name && description && image of place
function addPlace_user(popupkind) {

  // Inititialize place Row
  if(tableRow.querySelector("#place-name") !== null) {
    tableRow.querySelector("#place-name").innerHTML = popupkind.querySelector("#form_place-name").value
    tableRow.querySelector("#place-description").innerHTML = popupkind.querySelector("#form_place-description").value
    
    console.log("matches")
    popupkind.querySelector("#form_place-image").addEventListener("change", e => {
      i++
      console.log(i)
      images = e.target.files
    }, {once: true})
  }
  // Inititialize user Row
  else {
    tableRow.querySelector("#user-name").innerHTML = popupkind.querySelector("#form_user-name").value
    tableRow.querySelector("#user-email").innerHTML = popupkind.querySelector("#form_user-email").value
    tableRow.querySelector("#user-password").innerHTML = popupkind.querySelector("#form_user-password").value
    tableRow.querySelector("#user-role").innerHTML = popupkind.querySelector("#form_user-role").value
  }
  
}


function modifyPlace_user(popupkind, getRow) {

  // Modify place Row
  if(getRow.querySelector("#place-name") !== null) {
    getRow.querySelector("#place-name").innerHTML = popupkind.querySelector("#change_place-name").value
    getRow.querySelector("#place-description").innerHTML = popupkind.querySelector("#change_place-description").value
    popupkind.querySelector("#change_place-image").addEventListener("change", e => {
      
      console.log("modified")
      images = e.target.files
    }, {once: true})
  }
  // Modify user Row
  else {
    getRow.querySelector("#user-name").innerHTML = popupkind.querySelector("#change_user-name").value
    getRow.querySelector("#user-email").innerHTML = popupkind.querySelector("#change_user-email").value
    getRow.querySelector("#user-password").innerHTML = popupkind.querySelector("#change_user-password").value
    getRow.querySelector("#user-role").innerHTML = popupkind.querySelector("#change_user-role").value
  }
  
}


function togglePopup(popup, currentRow) {
  console.log("sdaas");
  const popupkind = document.querySelector(popup)
  // Toggle popup
  popupkind.classList.toggle("hide-popup")
  
  // listen to ADD button of popup to be pressed
  if(popup === ".popup") {
    popupkind.querySelector("#submit_place-user").addEventListener("click", e => {
      e.preventDefault()
      popupkind.classList.add("hide-popup")
      addPlace_user(popupkind)
      if(images !== undefined)
        tableRow.querySelector("#place-image").src  = URL.createObjectURL(images[0])
      createRow()
    }, {once: true})
  }
  // listen to MODIFY button of popup to be pressed
  else if(popup === ".popup-to-modify") {
    
    popupkind.querySelector("#submit-modify").addEventListener("click", e => {
      e.preventDefault()
      popupkind.classList.add("hide-popup")
      modifyPlace_user(popupkind, currentRow.parentElement.parentElement)
      if(images !== undefined)
        currentRow.parentElement.parentElement.querySelector("#place-image").src  = URL.createObjectURL(images[0])
    }, {once: true})
    
  }
  // listen to DELETE button of popup to be pressed
  else {
    
    document.querySelector("#delete").addEventListener("click", function() {
      currentRow.parentElement.parentElement.remove()
      popupkind.classList.add("hide-popup")
    }, {once: true})
    
  }
  
};

// open += comment popup --OR-- add place popup
document.querySelectorAll("#open_popup").forEach(addPlace__comment => {
  addPlace__comment.addEventListener("click", function() {
    togglePopup(".popup")
  })
})

// close += comment popup --OR-- add place popup
document.querySelector("#close_popup").addEventListener("click", function() {
  togglePopup(".popup")
})

// open +=  modify popup --OR-- delete popup
tableBody.addEventListener("click", function(event) {
    if(event.target.matches('#open_modify-popup')) {
      togglePopup(".popup-to-modify", event.target)
    }
    else if(event.target.matches('#open_delete-popup')) {
      togglePopup(".popup-to-delete", event.target)
    }
})


// close modify popup
document.querySelectorAll("#close_modify-popup").forEach(modify_popup => {
  modify_popup.addEventListener("click", function() {
    togglePopup(".popup-to-modify")
  })
})

// close delete popup
document.querySelectorAll("#close_delete-popup").forEach(delete_popup => {
  delete_popup.addEventListener("click", function() {
    togglePopup(".popup-to-delete")
  })
})

