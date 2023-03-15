import './index.css';
import Employees from './pages/Employees';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contributors from './pages/Contributors';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
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
                <Route 
                  path='/definition/:search' 
                  element={<Definition />} 
                />
                <Route path='/contributors' element={<Contributors />} /> 
                <Route path='/404' element={<NotFound />} /> 
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Header> 
    </BrowserRouter>
      
  );
}

export default App;
