import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import FirstTask from './components/HW-3.1/FirstTask'
import SecondTask from './components/HW-3.2/SecondTask'
import ThirdTask from './components/HW-3.3/ThirdTask'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="task">
          <Route path="/first" component={ FirstTask } />
          <Route path="/second" component={ SecondTask } />
          <Route path="/third" component={ ThirdTask } />
        </div>
      </div>
    </Router>
  );
}

export default App;
