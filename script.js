// Capturo botones y variables
const botoCity = document.querySelector(".edit__button")

const popUpCity= document.querySelector(".item__form")

botoCity.addEventListener("click",()=>abrirCity())

function abrirCity(){
    popUpCity.classList.remove("item__form-disable")
   
}

const closeButton= document.querySelector(".close-button")


closeButton.addEventListener("click",()=>cerrarCity())

function cerrarCity(){
    popUpCity.classList.add("item__form-disable")
}





// Llamamos a imagen

const imagen = document.querySelectorAll(".element__image")

imagen.forEach((e)=>{
e.addEventListener("click",(e)=>image(e))
})

function image(e){
    const src= e.target.src
    const popUpI = document.querySelector(".pop-upI")
    
    popUpI.classList.remove(".pop-upI-empty")


    // capturo variable que complrtar
    // asignar mvalor variable.src= src

}

//funcion eliminar trash
const botonEliminar = document.querySelectorAll(".element__trash")

botonEliminar.forEach((e)=>{
e.addEventListener("click",(e)=>eliminar(e))
})

function eliminar(e){
e.srcElement.offsetParent.remove()
}


//funcion boton crear 
const submitButton = document.querySelector(".create-button")

submitButton.addEventListener("click",()=>cerrarCity())
function crearCity(){
    popUpCity.classList.add("create-button")
}




const inputName = document.querySelector("#name")
const inputProfesion = document.querySelector("#profesion")

const profileName = document.querySelector("#profile-name")
const profileProfesion = document.querySelector("#profile-profesion")

const profileForm = document.querySelector("#profile-form")

profileForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    profileName.textContent = inputName.value 
    profileProfesion.textContent = inputProfesion.value 
})


