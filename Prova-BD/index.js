const projetos = require('./models/projetos');
const tarefas = require('./models/tarefas');

const ExemploTarefas = {
    Descicao_Tarefa: 'prova bd', 
    Status_Tarefa: 'fazendo',
    Responsavel_Tarefa: 'lucas', 
    Nome_Proj: 'prova bedê'
  };
   
console.log('banco de dados')
tarefas.inserirTarefas(ExemploTarefas)

const AtualizarTarefas = {
    Descicao_Tarefa: 'prova banco de dados', 
    Status_Tarefa: 'fazendo',
    Responsavel_Tarefa: 'lucas', 
    Nome_Proj: 'prova bedê'
  };


console.log('inserindo uma tarefa');
tarefas.inserirLivro(ExemploTarefas);

console.log('Obtendo uma tarefa pelo nome');
tarefas.obterTarefas('prova bedê');

console.log('tarefa atualizada');
tarefas.atualizarTarefas('Prova banco de dados', AtualizarTarefas);

console.log('Obtendo o livro atualizado');
tarefas.obterTarefas('prova bedê');

console.log('Excluindo o livro pelo nome');
tarefas.excluirTobterTarefas('prova bedê');