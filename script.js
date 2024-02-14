// Capturo botones y variables
const botoCity = document.querySelector(".edit__button");

const popUpCity = document.querySelector(".item__form");

botoCity.addEventListener("click", () => openCity());

function openCity() {
  popUpCity.classList.remove("item__form-disable");
}

const closeButton = document.querySelector(".close__button");

closeButton.addEventListener("click", () => closeCity());

function closeCity() {
  popUpCity.classList.add("item__form-disable");
}

//funcion eliminar trash
const deleteButton = document.querySelectorAll(".element__trash");

deleteButton.forEach((e) => {
  e.addEventListener("click", (e) => eliminar(e));
});

function eliminar(e) {
  e.srcElement.offsetParent.remove();
}

//funcion boton crear
const submitButton = document.querySelector(".create__button");

submitButton.addEventListener("click", () => closeCity());
function crearCity() {
  popUpCity.classList.add("create__button");
}

const inputName = document.querySelector("#name");
const inputProfesion = document.querySelector("#profesion");

const profileName = document.querySelector("#profile-name");
const profileProfesion = document.querySelector("#profile-profesion");

const profileForm = document.querySelector("#profile-form");

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfesion.textContent = inputProfesion.value;
});
