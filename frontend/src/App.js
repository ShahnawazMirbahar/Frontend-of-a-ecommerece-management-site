import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import NewWarehouse from './warehouse/pages/NewWarehouse';
import Products from './products/pages/Products';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import WarehouseProducts from './warehouse/pages/WarehouseProducts';
const App=() => {
  return <Router>
    <MainNavigation />
    <main>
    <Switch>
    <Route path="/" exact>
    <Products/>
    </Route>
    <Route path="/:userId/warehouse" exact>
      <WarehouseProducts />
    </Route>
    <Route path="/warehouse/new" exact>
    <NewWarehouse/>
    </Route>
    <Redirect to="/" />
    </Switch>
    </main>
  </Router>;
};

export default App;
