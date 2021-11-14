
import Example1 from '../Example1';
import Example2 from '../Example2';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Lesson 2
        <Example1/>
        <Example2 testProp='text' testProp2 = '  hi, everybody!'/>
      </h2>
    </div>
    
  );
}

export default App;
