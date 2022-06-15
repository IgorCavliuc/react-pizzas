import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Component_JSX";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters, 
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return{
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//     dispatch
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
