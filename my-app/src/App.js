import { useState, useEffect } from 'react'
import "./App.css"
import Loading from "./animations/loading/Loading"
import router from "./routes/routes.js"
import { RouterProvider } from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <RouterProvider router={router} />
        </>
      )}
    </div>
  );
}

export default App;
