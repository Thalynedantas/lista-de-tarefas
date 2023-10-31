let input = document.getElementById('input-principal')
let button = document.getElementById('botao-adicionar')
let tarefas = document.getElementById('tarefas')

let arrayDeTarefas = []

function addTask() { 
    if( input.value.trim() !== ''){ // verifica se o input esta vazio 
        arrayDeTarefas.push({
            tarefa: input.value,
            concluida: false  
        })

        input.value = '';
        renderTasks();
    }
}

function renderTasks() { 
    let listItem = ''

    arrayDeTarefas.forEach((item, index) => {
        
        listItem = listItem + `

            <li class="list-group-item ${item.concluida && "done"}">
                <button class="concluido" style="background-color: green" onclick="concluirTasks(${index})"> ✓ </button>
                <p>${item.tarefa}</p>
                <button class="apagar" onclick="deletar(${index})"> X </button>
            </li>

        `;
    });

    tarefas.innerHTML = listItem

    localStorage.setItem('lista', JSON.stringify(arrayDeTarefas))

}   

function concluirTasks(index){
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida
    renderTasks();
}

function deletar(index){
    arrayDeTarefas.splice(index, 1); // Esta linha remove a tarefa da matriz.  O método splice é usado para remover um elemento de uma matriz com base em seu índice
    renderTasks();
}

function recarregarTarefas(){
    const tasksLocalStorage = localStorage.getItem('lista')

    if (tasksLocalStorage) {
        arrayDeTarefas = JSON.parse(tasksLocalStorage)
    }

    renderTasks()
}

recarregarTarefas()
button.addEventListener('click', addTask);