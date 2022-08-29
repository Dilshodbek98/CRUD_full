import React, { useState } from "react";
import { Btn, Container } from "./styledCrud";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { dataBase } from "./data";

const Crud = () => {
  const [data, setData] = useState(dataBase);
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState("id");
  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [selected, setSelected] = useState(null);
  // logic functions
  const deleteItem = (id) => {
    let res = data.filter((vl) => vl.id !== id);
    setData(res);
  };

  const searchItem = (e) => {
    let res = dataBase.filter((value) => {
      return `${value[option]}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setData(res);
  };

  const addItem = () => {
    let newUser = { id: data.length + 1, name: newName, course: newCourse };
    setData([...data, newUser]);
  };

  const editItem = () => {
    let res = data.map(value => {
      return value.id === selected.id ? selected : value;
    })
    setData(res)
    setSelected(null)
  }
  return (
    <Container>
      <h1>Students list</h1>
      <div className="navbar">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="input"
            onChange={searchItem}
          />
          <select onChange={(e) => setOption(e.target.value)}>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="course">Course</option>
          </select>
        </div>
        {!modal ? (
          <Btn
            borderColor="blue"
            color="white"
            backColor="blue"
            onClick={() => setModal(!modal)}
          >
            <AiOutlineUserAdd /> Add User
          </Btn>
        ) : (
          <Btn
            borderColor="red"
            color="white"
            backColor="red"
            onClick={() => setModal(!modal)}
          >
            <GrFormClose /> Close
          </Btn>
        )}
      </div>
      {modal && (
        <div className="modal">
          <input
            type="text"
            className="input"
            placeholder="Name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="Course"
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <Btn
            color="white"
            backColor="green"
            borderColor="green"
            onClick={() => addItem()}
          >
            Save
          </Btn>
        </div>
      )}
      <table className="table" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td className="id">{index + 1}</td>
                  {selected?.id !== value.id ? (
                    <>
                      <td>{value.name}</td>
                      <td>{value.course}</td>
                    </>
                  ) : (
                    <>
                      <td>
                        <input defaultValue={selected.name} type="text" className="input" onChange={(e)=> setSelected({...selected, name: e.target.value})}/>
                      </td>
                      <td>
                        <input defaultValue={selected.course} type="text" className="input" onChange={(e)=> setSelected({...selected, course: e.target.value})}/>
                      </td>
                    </>
                  )}

                  <td className="action">
                    {selected?.id == value.id ? (
                      <>
                        <Btn
                          color="white"
                          backColor="green"
                          borderColor="green"
                          onClick={() => editItem()}
                        >
                          Save
                        </Btn>
                        <Btn
                          color="white"
                          backColor="blue"
                          borderColor="blue"
                          onClick={() => setSelected(null)}
                        >
                          Cancel
                        </Btn>
                      </>
                    ) : (
                      <>
                        <Btn
                          color="white"
                          backColor="orange"
                          borderColor="orange"
                          onClick={() => setSelected(value)}
                        >
                          Edit
                        </Btn>
                        <Btn
                          color="white"
                          backColor="red"
                          borderColor="red"
                          onClick={() => deleteItem(value.id)}
                        >
                          Delete
                        </Btn>
                      </>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr style={{ textAlign: "center" }}>
              <td colSpan={4}>
                <h3>No Data</h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default Crud;
