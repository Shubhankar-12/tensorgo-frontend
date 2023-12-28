import './App.css';
import UserList from './components/userList/UserList';

function App() {

  return (
    <div className="App">
      <UserList />
      <button className='csv-btn'>Download CSV</button>
    </div>
  );
}

export default App;
