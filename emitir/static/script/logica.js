socket = io();

document.querySelector("form").onsubmit = () =>
{
    nombre = document.querySelector("#nombre").value
    socket.emit("Saludar", nombre)

    return false;

}