import List from './components/list'
import './App.css';
import HomePage from './components/HomePage/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <List />
    <Route path='/' exact component={HomePage} />
    </>
  );
}

export default App;
