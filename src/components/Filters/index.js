import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListFilter } from "../../redux/selectors";
import { addPriorities, addSearchText, addStatus } from "../../redux/actions";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState("All");
  const [priories, setPriories] = useState([]);
  const dispatch = useDispatch();

  const filterData = useSelector(todoListFilter);
  console.log("filterData", filterData);
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(addSearchText(e.target.value));
  };

  const handleAddStatus = (e) => {
    setStatus(e.target.value);
    dispatch(addStatus(e.target.value));
  };

  const handleAddPriorities = (e) => {
    setPriories(e);
    dispatch(addPriorities(e));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleAddStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priories}
          onChange={handleAddPriorities}
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
      </Col>
    </Row>
  );
}
