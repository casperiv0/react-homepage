import React from 'react';
import NavBar from "./components/NavBar/NavBar"
import Banner from './components/Banner/Banner';
import Welcome from './components/Welcome/Welcome';
import GridImages from './components/GridImages/GridImages';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Welcome />
      <GridImages />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
