import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/home/Footer";
import Header from "./components/home/header/Header";
import HomePages from "./components/pages/HomePages";
import Blog from "./components/home/blog/Blog";
import Work from "./components/home/work/Work";
import Post from "./components/home/blog/Post";
import Contact from "./components/home/contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/portfolio" exact component={Work} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={Post} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
