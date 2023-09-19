import React from "react";
import { createRoot } from "react-dom/client";

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I am an h1 tag</h1>
 *          <h1>I am an h1 tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am an h1 tag</h1>
 *          <h1>I am an h1 tag</h1>
 *      </div>
 * </div>
 */

/*
const parent = React.createElement('div', 
    {id: "parent"}, 
    [
    React.createElement('div',
    { id: "child1"},
        [
            React.createElement('h1', {}, "I am an h1 tag"),
            React.createElement('h1', {}, "I am an h1 tag"),
        ]
    ),
    React.createElement('div',
    { id: "child2"},
        [
            React.createElement('h1', {}, "I am an h1 tag"),
            React.createElement('h1', {}, "I am an h1 tag"),
        ]
    )
]);
*/

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container"></div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
