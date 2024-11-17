import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 text-gray-800">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}

// <h1 className="text-3xl font-bold underline">Hello world!</h1>
// <button className="rounded bg-indigo-700 px-4 py-2 font-semibold text-white">
//   ボタン
// </button>
export default App;
