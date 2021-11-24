var pacientes = document.querySelectorAll(".paciente");

var talbela = document.querySelector("table");

talbela.addEventListener("dblclick" , (event) =>{
    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(()=>{
        event.target.parentNode.remove()
    }, 500)
})
