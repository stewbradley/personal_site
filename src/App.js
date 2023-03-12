import './index.css';
import Employees from './pages/Employees';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contributors from './pages/Contributors';
import Dictionary from './components/Dictionary';
// useState is an example of Hook. When things start with use, they are hooks
// hooks allow us to use state in functional components, without writing a class
function App() {
  // number 1 rule for state, never assign it directly
  // header must be in the BrowserRouter, otherwise it will not work
  return (
    <BrowserRouter>
        <Header> 
            <Routes>
                <Route path='/employees' element={<Employees />} />
                <Route path='/dictionary' element={<Dictionary />} />
                <Route path='/contributors' element={<Contributors />} /> 
            </Routes>
        </Header> 
    </BrowserRouter>
      
  );
}

export default App;
