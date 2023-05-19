import FilterReducer from "../components/Filters/FilterReducer";
import ToDoListReducer from "../components/TodoList/ToDoListReducer";

function RootReducer(state = {}, action) {
  return {
    filter: FilterReducer(state.filter, action),
    todoList: ToDoListReducer(state.todoList, action),
  };
}

export default RootReducer;
