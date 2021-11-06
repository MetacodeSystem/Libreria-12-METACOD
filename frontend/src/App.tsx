import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Switcher from './Switcher';
import Menu from './Menu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <div className="container">
           <Menu></Menu>
          </div>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              />
      </BrowserRouter>

    </div>
  );
}

export default App;
