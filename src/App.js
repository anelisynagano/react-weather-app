import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import key from './keys';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Lisbon&appid=${key}`)
      .then(res => res.json())
      // .then() receives an anonymous function === .then(() => {})
      .then(data => {
        this.setState({
          data,
        })
      })
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => data && <Home {...data} cityName={data.city.name} />} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
