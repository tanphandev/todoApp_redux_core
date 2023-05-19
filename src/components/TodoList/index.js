import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { todoListFilter } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { addToDo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todo, setToDo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const filterData = useSelector(todoListFilter);
  useEffect(() => {
    console.log("re-render");
  }, [filterData]);

  console.log("filterData", filterData);
  const dispatch = useDispatch();

  const handleAddToDo = () => {
    dispatch(
      addToDo({
        id: uuidv4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
    setToDo("");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {filterData.map((todo, index) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todo}
            onChange={(e) => {
              setToDo(e.target.value);
            }}
          />
          <Select
            onChange={(e) => {
              setPriority(e);
            }}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddToDo} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
