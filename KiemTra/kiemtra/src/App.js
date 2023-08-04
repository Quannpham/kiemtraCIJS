import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isShowAll, setShowAll] = useState(false);
  const [isShowActive, setShowActive] = useState(false);
  const [isShowCompleted, setShowCompleted] = useState(false);

  const [listTodo, setListTodo] = useState([]);
  const [newListTodo, setNewListTodo] = useState("");

  const handleAddListTodo = () => {
    setListTodo(...listTodo, newListTodo);
    console.log(newListTodo);
  };

  const handleDeleteListTodo = () => {
    const newList = listTodo.filter((newListTodo) => {
      setNewListTodo(newList);
    })
  };


  return (
    <div className="App">
      <h1 className="todo">#todo</h1>
      <div className="head">
        <div className="all-page" onClick={() => setShowAll(!isShowAll)}>
          All
        </div>
        <div
          className="active-page"
          onClick={() => setShowActive(!isShowActive)}
        >
          Active
        </div>
        <div
          className="completed-page"
          onClick={() => setShowCompleted(!isShowCompleted)}
        >
          Completed
        </div>
      </div>
      <div className="section">
        {isShowAll === true ? (
          <div className="all">
            <input
              type="text"
              placeholder="   add details"
              className="all-input"
              value={newListTodo}
              onChange={(e) => setNewListTodo(e.target.value)}
            />
            <button className="all-add" onClick={handleAddListTodo}>Add</button>
            <div className="all-checkbox">
              <input type="checkbox" />
              All coding challenges
            </div>
          </div>
        ) : (
          ""
        )}
        {isShowActive === true ? (
          <div className="active">
            <input
              type="text"
              placeholder="   add details"
              className="active-input"
            />
            <button className="active-add">Add</button>

            <div className="active-checkbox">
              <input type="checkbox" />
              Active coding challenges
            </div>
          </div>
        ) : (
          ""
        )}
        {isShowCompleted === true ? (
          <div className="completed">
            <div className="completed-deleted">
              <input type="checkbox" 
              value={newListTodo}
              />
              Task done
              <i class="fa-solid fa-trash"></i>
            </div>
            <button className="completed-delete" onClick={handleDeleteListTodo}>Delete All</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
