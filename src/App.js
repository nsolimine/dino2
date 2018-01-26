import React, { Component } from 'react';
import './App.css';
import { Header } from './header.js';
import { Section } from './profiles.js';
import { Footer } from './footer.js';

class App extends Component {
  state = {dinosaurs: []}

  constructor(props) {
    super(props)
    this.state = {dinosaurs: []}
  }

  componentDidMount() {
    this.getDinosaurs();
  }

  getDinosaurs = () => {
    return fetch("./dinosaurs.json")
    .then(response => response.json())
    .then(dinosaurs => this.setState({dinosaurs}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Section cards={this.state.dinosaurs} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
