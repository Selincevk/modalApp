import { BrowserRouter, Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path="/" element={<Product/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;