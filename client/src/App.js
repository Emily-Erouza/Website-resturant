import './App.css';
import Home from "./components/Home";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Contact from "./components/Contact";
import FormModal from "./components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 
  return (


     
    <div className='welcome'>
    <div className='page'>
      <Home />
    </div>
  
    <Service />
    <Menu />  
    <FormModal/>
    <div className="Snup">
    <Form />

    </div>
    <div className='contact'>
    <Contact />
    </div>
    </div>
    
  );
}

export default App;
