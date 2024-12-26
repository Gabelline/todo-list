
<img alt="ToDo List" src="https://viaa.link/github/todoList.png" />
<h2 align="center">
  Desafios ToDo List - by Rocketseat
</h2>

Esta é uma aplicação de controle de tarefas simples e funcional, no estilo to-do list,
construída em React Native, com o objetivo de ajudar o usuário a gerenciar suas tarefas diárias.
A aplicação é intuitiva e apresenta as seguintes funcionalidades principais:


## Fluxo de Trabalho
- O usuário adiciona uma nova tarefa pelo campo de entrada.
- A tarefa é exibida na lista como “não concluída”.
- O usuário pode tocar na tarefa para alternar entre “concluída” e “não concluída”.
- O progresso das tarefas é atualizado automaticamente.
- O usuário pode remover qualquer tarefa da lista quando ela não for mais necessária.
 

## Benefícios da Implementação
- Organização: Componentes bem definidos tornam o código mais limpo e fácil de manter.
- Reatividade: O uso de estados e listas permite que as alterações sejam refletidas na interface instantaneamente.
- Escalabilidade: A aplicação pode ser facilmente estendida com novas funcionalidades, </br> como persistência local, filtros (tarefas concluídas/não concluídas), ou integração com banco de dados.
  
## Conceitos Aplicados

A aplicação utiliza os seguintes conceitos fundamentais do React Native:

1. Estados
	•	Os estados são usados para armazenar a lista de tarefas e o texto da nova tarefa a ser adicionada.
	•	As alterações nos estados são tratadas de forma reativa, garantindo que a interface do usuário seja atualizada automaticamente.

2. Imutabilidade do estado
	•	A lista de tarefas é manipulada de maneira imutável, criando uma nova versão do estado sempre que uma tarefa é adicionada, concluída ou removida.
	•	Isso garante a integridade dos dados e evita efeitos colaterais indesejados.

3. Listas e chaves no React Native
	•	A lista de tarefas é renderizada utilizando o componente FlatList, que é otimizado para lidar com grandes volumes de dados.
	•	Cada tarefa possui uma chave única (id) para garantir a eficiência e a identificação correta durante as atualizações.

4. Propriedades
	•	Os componentes filhos, como o item de tarefa e o campo de entrada, recebem dados e funções via props, permitindo a reutilização e melhor separação de responsabilidades.

5. Componentização
	•	A aplicação é organizada em componentes reutilizáveis e bem isolados, como:
	•	TaskInput: Componente para entrada e adição de novas tarefas.
	•	TaskItem: Componente que representa cada tarefa individual.
	•	TaskProgress: Componente que exibe o progresso das tarefas concluídas.


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
