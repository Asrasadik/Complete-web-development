var todos = [
    "clean",
    "brush",
    "eat",
    "sleep"];

    var todosImportatnt = [
        "clean !",
        "brush !",
        "eat !",
        "sleep !"
    ]
    var i;

    var logTodos = function(todo,i){
        console.log(todo,i);
    }
todos.forEach(logTodos);
todosImportatnt.forEach(logTodos);
