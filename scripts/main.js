const otter_buttons = document.getElementsByName("otter-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")


function change_otter (otter) {
    text.innerHTML = "This is " + otter + "."
    photo.src = "./images/"  + otter + ".jpg"
 }

 otter_buttons.forEach(button => {
        button.addEventListener("change", event => {
            change_otter(button.value)
        })
 })