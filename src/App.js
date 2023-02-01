import logo from "./logo.svg";
import "./App.css";
import TaskListComponent from "./components/container/TaskListComponent";
import { ContactListComponent } from "./components/container/ContactListComponent";
import HookEjemplo1UseState from "./hooks/HookEjemplo1UseState";
import HookEjemplo3UseStateUseContext from "./hooks/HookEjemplo3UseState-UseContext";
import HookEjemplo2UseEffectUseRefUseState from "./hooks/HookEjemplo2UseEffect-UseRef-UseContex";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HookEjemplo3UseStateUseContext/>
        <hr />
        <HookEjemplo2UseEffectUseRefUseState />
        <hr />
        <HookEjemplo1UseState />
        <hr />
        <TaskListComponent />
        <hr />
        <ContactListComponent />
      </header>
    </div>
  );
}

export default App;
