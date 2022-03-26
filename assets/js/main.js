const form = document.getElementById("formulario-contacto");

form.addEventListener("submit", ()=>{
   
    ////*** 1. SI NUESTRO NAVEGADOR ES ACTUAL UTILIZARÁ XMLHttpRequest en caso contrario utiliza ActiveXObject ******** */
    let xhr;
    if(XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft:XMLHTTP")

    //2.utilizamos el método open para abrir la conexión
    xhr.open("GET", "assets/bac-end/main.php");

    //3.Quedamos a la escucha de respuesta, en tal caso se ejecutará un callback al que le pasamos por parámetros la respuesta del servidor. 

    xhr.addEventListener("load", (data)=>{
        console.log(data);

    });
}

);