let botaoAdiconar = document.querySelector("#buscar-pacientes");

botaoAdiconar.addEventListener("click", ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    let erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load",()=>{
        let resposta = xhr.responseText;

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            let pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            
            erroAjax.classList.remove("invisivel")
        }


    });

    xhr.send();
})