import Expense from './Component/Expense';
import './App.css';
import Income from './Component/Income';
import MainPage from './Component/MainPage';
import {Route,Routes} from  'react-router-dom'
import { UseContextProvider } from './useContext/UseContext';
import Filter from "./Component/Filter"
function App() {
  return (
    <div className="App" style={{background:"#662222"}}>
      <UseContextProvider> 
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<Expense />} />
      <Route path="/main" element={<Income />} />
      <Route path="/filter" element={<Filter />} />
    </Routes> 
    </UseContextProvider>
 
    </div>
  );
}

export default App;
