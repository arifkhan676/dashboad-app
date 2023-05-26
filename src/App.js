import About from './components/About';
import Home from './components/Home';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Setting from './components/Setting';
import Analytics from './components/Analytics';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >  </Route>
          <Route path="/about" element={<About />} >  </Route>
          <Route path="/analytics" element={<Analytics />} >  </Route>
          <Route path="/setting" element={<Setting />} >  </Route>

        </Routes>
        </BrowserRouter>
  );
}

export default App;
