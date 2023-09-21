import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./views/Account";
import Map from "./views/Map";
//import Login from "./views/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/account" element={<Account />} />
          <Route path="/map" element={<Map />} />          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
