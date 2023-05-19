export const addToDo = (data) => {
  return {
    type: "toDoList/addToDo",
    payload: data,
  };
};

export const toggleCompleted = (id) => {
  return {
    type: "toDoList/toggleCompleted",
    payload: id,
  };
};

export const addSearchText = (data) => {
  return {
    type: "filter/addSearchText",
    payload: data,
  };
};

export const addStatus = (data) => {
  return {
    type: "filter/addStatus",
    payload: data,
  };
};

export const addPriorities = (data) => {
  return {
    type: "filter/addPriorities",
    payload: data,
  };
};
