socket = io();

document.querySelector("form").onsubmit = (e) =>
{
    e.preventDefault()
    nombre = document.querySelector("#nombre").value
    socket.emit("Saludar", nombre)

    return false;

}