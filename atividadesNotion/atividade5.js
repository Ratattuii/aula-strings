let listaDeTarefas = []

alert("Digite 3 tarefas que você tem que fazer hoje")

const tarefa1 = prompt("Digite a primeira tarefa:")

const tarefa2 = prompt("Digite a segunda tarefa:")

const tarefa3 = prompt("Digite a terceira tarefa:")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas);

const tarefaFeita = Number(prompt("Digite o número da tarefa que você já realizou (primeira = 0, segunda = 1, terceira = 2)"))

listaDeTarefas.splice(tarefaFeita, 1)

console.log(listaDeTarefas);