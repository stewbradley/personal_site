import './index.css';
import Employees from './pages/Employees';
// useState is an example of Hook. When things start with use, they are hooks
// hooks allow us to use state in functional components, without writing a class
function App() {
  // number 1 rule for state, never assign it directly
  return <Employees />;
}

export default App;
