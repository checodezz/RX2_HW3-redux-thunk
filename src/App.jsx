import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inventory from "./pages/Inventory";
import RemainingItems from "./pages/RemainingItems";
import RemovedItems from "./pages/RemovedItems";
import "./App.css";
import AddNewItemForm from "./pages/AddNewItemForm";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>

              <li>
                <Link to="/removedItems">Removed Items</Link>
              </li>

              <li>
                <Link to="/remainingItems">Remaining Items</Link>
              </li>

              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/removedItems" element={<RemovedItems />} />
            <Route path="/remainingItems" element={<RemainingItems />} />
            <Route path="/" element={<AddNewItemForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
