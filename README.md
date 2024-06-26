# Codecademy Store

## Codecademy Project

In this project, you’ll build a program that mimics Codecademy’s own online store! The application should display products from the Codecademy store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

![An animated gif showing a demo of the Codecademy store's features](https://static-assets.codecademy.com/Courses/Learn-Redux/codecademy-store/shopping-cart-demo.gif)

This application has three slices of state:

- <code>inventory</code>: An array of objects representing the items that are available to purchase.
- <code>cart</code>: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
- <code>currencyFilter</code>: A string that represents the currency used to calculate the prices displayed to the user: <code>'USD'</code>, <code>'CAD'</code> or <code>'EUR'</code>.
An example of this application’s state might look like this:

```
state = {
  inventory: [
    { name: 'Hat', img: 'img/hat.png', price: 15.99 },
    { name: 'T-Shirt', img: 'img/t-shirt.png', price: 18.99 },
    { name: 'Hoodie', img: 'img/hoodie.png', price: 49.99 },
  ],
  cart: {
    'Hat': { price: 15.99, quantity: 0 },
    'T-Shirt': { price: 15.99, quantity: 2 },
    'Hoodie': { price: 18.99, quantity: 1 },
  },
  currencyFilter: 'CAD'
}
```

As you will see, the file structure has been organized using the recommended feature-based pattern and most of the inventory and currency features have been built for you. It will be up to you to:

- complete the cart’s action creators and reducer logic
- create the <code>store</code> using <code>createStore()</code> and <code>combineReducers()</code>
- pass the <code>store</code> resources to presentational components via the top-level ```<App />``` component
- render the ```<Cart />``` component using the current state data
- dispatch actions to the <code>store</code>

Let’s get started!