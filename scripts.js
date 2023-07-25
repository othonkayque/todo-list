var arrayTarefas = [];

//div de conteudo mostrado
var container = document.querySelector("#container")
var conteudo = document.querySelector("#conteudo")
var divCheckbox = document.querySelector("#checkboxs")

//inputs
var TarefaInput = document.querySelector("#TarefaInput").value
var buttonSendTarefa = document.querySelector("#buttonSendTarefa")
var x = document.querySelector(".x")

//adcionar tarefa
function addTarefa(){
    arrayTarefas.forEach((value, index) => {

        //div para tudo
        var divTarefas = document.createElement("div");
        divTarefas.setAttribute("class", "elementoTarefas")
        conteudo.appendChild(divTarefas)
        
        //texto da tarefa
        var textTarefa = document.createElement("p")
        textTarefa.setAttribute("class", "tarefa")
        textTarefa.innerHTML = `${value}`;
        divTarefas.appendChild(textTarefa)
        
        //Div para os checkbox
        var divCheckbox = document.createElement("div")
        divCheckbox.setAttribute("id", "checkboxs")
        divTarefas.appendChild(divCheckbox)
        
        //input checkbox
        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "check");
        checkbox.setAttribute("id", `check${index+1}`);
        divCheckbox.appendChild(checkbox)
        
        //label do checkbox
        var labelCheckbox = document.createElement("label")
        labelCheckbox.setAttribute("for", `check${index+1}`)
        divCheckbox.appendChild(labelCheckbox)
    })
}

buttonSendTarefa.addEventListener("click", () => {
    var TarefaInput = document.querySelector("#TarefaInput").value   
    if(TarefaInput){
        arrayTarefas.push(TarefaInput)
        console.log(TarefaInput, arrayTarefas)
        conteudo.innerHTML = '';
        addTarefa()
    }
})
