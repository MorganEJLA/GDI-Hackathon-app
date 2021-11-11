import './App.css';
import ShowCards from './Components/ShowCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

// test Button added along with bootstrap core styling, feel free to remove - jules

function App() {
  return (
    <div className="App">
      <ShowCards />
      <Button variant="dark">Dark Test Button</Button>{' '}
    </div>
  );
}

export default App;
