import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Hedder";
import HomeScreen from "./screens/HomeScreen";
import ProductsCardList from "./components/ProductsCardList"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={()=><HomeScreen/>} exact />
        <Route path="/product/:id" component={ProductsCardList} />
      </main>
    </Router>
  );
}

export default App;
