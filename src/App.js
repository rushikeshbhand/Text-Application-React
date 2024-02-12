import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea'

function App() {
  return (
    <div>
    <Navbar title="TextApp"/>
    <div className="container">
    <TextArea/>
    </div>
    </div>
  );
}

export default App;
