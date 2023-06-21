exports.seed = function(knex) {
    return knex('tb_tarefas')
      .del()
      .then(function() {
        return knex('tb_tarefas').insert([
          { Descicao_Tarefa: 'trabalhar com knex' , Status_Tarefa: 'fazendo', Responsavel_Tarefa: 'eu do futuro', Nome_Proj: 'trabalho knex'},
          { Descicao_Tarefa: 'jogar bola' , Status_Tarefa: 'jogando', Responsavel_Tarefa: 'lhukas', Nome_Proj: 'Bball'},
        ]);
      })
  };  