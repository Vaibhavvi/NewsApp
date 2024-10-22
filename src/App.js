import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News'
import { HashRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <HashRouter>
    <Navbar/>
    <Routes>
      <Route caseSensitive path='/NewNews/health' element={<News key='home' pageSize={5} country="us" category="health"/>}></Route>
      <Route caseSensitive path='/' element={<News key='helth' pageSize={5} country="us" category="science"/>}></Route>
      <Route caseSensitive path='/NewNews/technology' element={<News key='technology' pageSize={5} country="us" category="technology"/>}></Route>
      <Route caseSensitive path='/NewNews/sport' element={<News key='sport' pageSize={5} country="us" category="sport"/>}></Route>
      <Route caseSensitive path='/NewNews/business' element={<News key='business' pageSize={5} country="us" category="business"/>}></Route>
      <Route caseSensitive path='/NewNews/science' element={<News key='science' pageSize={5} country="us" category="science"/>}></Route>
      <Route caseSensitive path='/NewNews/entertanment' element={<News key='entertanment' pageSize={5} country="us" category="entertanment"/>}></Route>
      </Routes>  
    </HashRouter>
    </div>
  );
}

export default App;
