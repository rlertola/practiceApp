var ENTER_KEY = 13;
var ESCAPE_KEY = 27;


var Helpers = {
  // init
  // store
  // storeTodos
  // bindEvents
  // makeId


}

var View = {
  todos: [],

  // makeLiTemplate
  makeLiTemplate: function() {
    var todos = this.todos;
    var todosUL = document.querySelector('ul');

    todos.forEach(function(todo) {



    })


  },

  makeTodoItem: function() {
    var todoLi = document.createElement('li');

    var liCheckbox = document.createElement('input');
    liInput.type = 'checkbox';
    liInput.id = 'checkbox';

    var liSpan = document.createElement('span');
    liSpan.id = 'todoItem';

    var liDeleteButton = document.createElement('button');
    liDeleteButton.id = 'deleteButton';


  }

  // displayTodos
  // createToggleItemButton
  // createDeleteButton
  // createEditButton

}




var Control = {
  // eventHandlers
  // addTodo
  // editTodo
  // deleteTodo
  // toggleItem
  // toggleAll
  // getActiveTodos
  // getCompletedTodos
  // getFilteredTodos
  // clearCompleted

}
