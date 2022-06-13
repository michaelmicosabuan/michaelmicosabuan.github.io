import './App.css';
import Essay from './core/Essay';
import Header from './core/Header';
import Discription from './core/Description';
import Resume from './core/Resume';
import Narative from './core/Narative';
import Record from './core/Record';
import Reflection from './core/Reflection';

function App() {
  return (
    <div className="App">
      <Header />
      <Essay />
      <Discription />
      <Resume />
      <Narative />
      <Record />
      <Reflection />
    </div>
  );
}

export default App;
