import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero"
import CardSection from "./components/section/section"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero /> 
      <CardSection title="Top Albums"  type="album"  />
    </div>
  );
};

export default App;