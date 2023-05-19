import { createSelector } from "reselect";

export const todoList = (state) => state.todoList;
export const filterSearchText = (state) => state.filter.searchText;
export const filterStatus = (state) => state.filter.status;
export const filterPriorities = (state) => state.filter.priorities;

export const todoListFilter = createSelector(
  todoList,
  filterStatus,
  filterSearchText,
  filterPriorities,
  (todoListData, status, searchText, priorities) => {
    return todoListData.filter((todo) => {
      if (status === "All") {
        console.log("ALL");
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      console.log("Complete?");
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
