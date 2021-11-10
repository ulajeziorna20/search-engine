import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FilteredList />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
