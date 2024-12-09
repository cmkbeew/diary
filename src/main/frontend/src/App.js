import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

function App() {
  const  [data, setData] = useState();

  useEffect(() => {
    axios.get("/api/data")
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div>{data}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
