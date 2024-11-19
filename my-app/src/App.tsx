import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" bg-gray-100 text-gray-800">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
