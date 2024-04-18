import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js'
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { filterInventory } from "../utilities/utilities";

// Render the Cart component below <Inventory />
export const App = (props) => {
  const { state, dispatch } = props;
  const filteredInventory = filterInventory(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

      <h4>
        <span style={{ color: "var(--purple)" }}>
          {filteredInventory.length}
        </span>{" "}
        items
      </h4>

      <Inventory
        inventory={filteredInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

    </div>
  );
};
