import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Hedder";
import HomeScreen from "./components/screens/HomeScreen";
import ProductDetails from "./components/ProductDetails"
import CartScreen from "./components/screens/CartScreen"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={()=><HomeScreen/>} exact />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/cart/:id?" component={CartScreen} />
      </main>
    </Router>
  );
}

export default App;
