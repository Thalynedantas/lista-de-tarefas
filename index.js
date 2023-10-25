let input = document.getElementById('input-principal')
let button = document.getElementById('botao-adicionar')
let tarefas = document.getElementById('tarefas')

let arrayDeTarefas = []

function addTask() { 
    if( input.value.trim() !== ''){ // verifica se o input esta vazio 
        arrayDeTarefas.push(input.value) // se não estiver vazio é adicionado ao array de tarefas 
        input.value = '';
        renderTasks();
    }
}

function renderTasks() { 
    tarefas.innerHTML = ''; // limpa a lista antes de renderizar novamente 

    arrayDeTarefas.forEach((tarefa, index) => {
        
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item"); // adiciona a classe "list-group-item" ao elemento <li>

        listItem.innerHTML = `
                <p>${tarefa}</p>
                <button class="apagar" data-index="${index}"> X </button>
        `;
        tarefas.appendChild(listItem);
    });

}

function deletar(event){
    const index = parseInt(event.target.getAttribute('data-index')); // Aqui, você está obtendo o valor do atributo data-index do elemento que foi clicado. Como o valor do atributo é uma string, você usa parseInt para convertê-lo em um número inteiro e armazená-lo na variável index.
    arrayDeTarefas.splice(index, 1); // Esta linha remove a tarefa da matriz.  O método splice é usado para remover um elemento de uma matriz com base em seu índice
    renderTasks();
}

button.addEventListener('click', addTask);
tarefas.addEventListener('click', (event) => {
    if(event.target.classList.contains('apagar')) {
        deletar(event)
    }
});