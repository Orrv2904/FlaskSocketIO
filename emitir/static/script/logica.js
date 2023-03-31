socket = io();

document.querySelector("form").onsubmit = () =>
{
    e.preventDefault()
    nombre = document.querySelector("#nombre").value
    socket.emit("Saludar", nombre)

    return false;

}