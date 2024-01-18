'use client'

import React from 'react';

const Component1 = () => <div>Component 1</div>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <div>Component 3</div>;


const Sacdeli = () => {
  // Create an array of React components
  const componentsArray = [Component1, Component2, Component3];
  console.log(componentsArray);

  // Map over the array and render each component
  const renderedComponents = componentsArray.map((Component, index) => (
    <div key={index}>
      <Component />
    </div>
  ));

  return (
    <div>
      <h1>Array of React Components</h1>
      {renderedComponents}
    </div>
  );
};

export default Sacdeli;
