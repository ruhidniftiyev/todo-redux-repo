import './App.css';
import yellow from './img/yellow.svg';
import add from './img/add.svg';
import clear from './img/clear.svg';
import sort from './img/sort_nha.svg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="yellow">
            <img src={yellow} alt="yellow" />
          </div>
          <div>
            <h2>To-do list</h2>
          </div>
        </div>
        <div className="sortClass">
          <img src={sort} alt="sort" id="sortBtn" />
        </div>
        <div className="card-body">
          <ul className="" id="toDoList"></ul>
        </div>
        <div className="card-footer">
          <input type="text" id="toDoInput" />
          <img src={add} alt="add" id="toDoBtn" />
          <img src={clear} alt="add" id="removeAllBtn" />
        </div>
        <div className="notification"></div>
      </div>
    </div>
  );
}

export default App;
