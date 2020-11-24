import './App.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import ColorConverter from './components/HW-4.1/ColorConverter'
import ActivityTracker from './components/HW-4.2/ActivityTracker'
import PhotoManager from './components/HW-4.3/PhotoManager'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Navigation />
        </div>
        <div className="task">
          <Route path="/first" component={ ColorConverter } />
          <Route path="/second" component={ ActivityTracker } />
          <Route path="/third" component={ PhotoManager } />
        </div>
      </div>
    </Router>
  );
}

export default App;
