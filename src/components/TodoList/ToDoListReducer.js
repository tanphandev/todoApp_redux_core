const initalValue = [
  { id: 1, name: "Learn Redux", priority: "High", completed: false },
  { id: 2, name: "Learn JavaScript", priority: "Medium", completed: true },
  { id: 3, name: "Learn HTML", priority: "Low", completed: true },
  { id: 4, name: "Learn Java", priority: "High", completed: false },
];

function ToDoListReducer(state = initalValue, action) {
  switch (action.type) {
    case "toDoList/addToDo":
      return [...state, action.payload];
    case "toDoList/toggleCompleted":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

export default ToDoListReducer;
