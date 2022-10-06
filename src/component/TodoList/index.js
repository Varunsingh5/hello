import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [inputdata1, setInputData1] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState();
  const [toggleButton, setToggleButton] = useState(false);

  const addItem = () => {
    if (!inputdata) {
      alert("Please fill the data")
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((id) => {
          if (id.id === isEditItem) {
            return { ...id, name: inputdata, phone: inputdata1 };
          }
          return id;
        })
      );
      setInputData("");
      setInputData1("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
        phone: inputdata1
      };
      setItems([...items, myNewInputData]);
      setInputData("");
      setInputData1("");
    }
  };

  const editItem = (index) => {
    const item_todo_edited = items.find((id) => {
      return id.id === index;
    });
    setInputData(item_todo_edited.name);
    setInputData1(item_todo_edited.phone);
    setIsEditItem(index);
    setToggleButton(true);
  };

  const deleteItem = (index) => {
    const updatedItem = items.filter((id) => {
      return id.id !== index;
    });
    setItems(updatedItem);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Container>
        <Row style={{ marginTop: "15px" }} >
          <Col>
            <input type="text" placeholder=' Add item' className='form-control'
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)} />
          </Col>
          <Col>
            <input type="number" placeholder=' Add item' className='form-control'
              value={inputdata1}
              onChange={(event) => setInputData1(event.target.value)} />
          </Col>
          <Col style={{ textAlign: "center" }}>
            {toggleButton ? (
              <button className='btn effect04' data-sm-link-text="Remove All" onClick={addItem} style={{ backgroundColor: "blue", color: "white" }} >EDIT</button>
            ) : (<button className='btn effect04' data-sm-link-text="Remove All" onClick={addItem} style={{ backgroundColor: "blue", color: "white" }}>ADD</button>)
            }
          </Col>
        </Row>
        <div className='showItems'>
          {items.map((id) => {
            return (
              <Row style={{ marginTop: '30px' }}>
                <Col >
                  <h3 style={{ textAlign: "center" }}>{id.name}</h3>
                </Col>
                <Col>
                  <h3 style={{ textAlign: "center" }}>{id.phone}</h3>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <div className='todo-btn'>
                    <i className="far fa-edit add-btn" style={{ textAlign: "center" }} onClick={() => editItem(id.id)} >Edit</i> &nbsp;
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(id.id)} >delete</i>
                  </div>
                </Col>
              </Row>
            )
          })}
        </div>
        <Row>
          <Col sm>
          </Col>
          <Col sm>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll} style={{ backgroundColor: "blue", color: "white", marginTop: "20px", marginBottom: "20px" }}>
              <span>Delete All item</span>
            </button>
          </Col>
          <Col sm>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Todo;
