import { Outlet } from "react-router-dom";
import "./global.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet /> {/* Aqui as páginas são renderizadas */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
