import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';


function App() {
  return (
    <div className="App bg-back_blue text-white p-8 md:p-4"> 
     <Header/>
     <Body/>
    </div>
  );
}

export default App;
