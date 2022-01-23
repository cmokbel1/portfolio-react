import './App.css';
import { Header, Footer, Portfolio, About } from './components'
import projects from './projects.js'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'home'
    }
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    if (event.target.id === "about") {
      this.setState({ mode: 'home' });
    } else if (event.target.id === "portfolio") {
      this.setState({ mode: 'portfolio' });
    } else if (event.target.id === "contact") {
      this.setState({ mode: 'contact' });
    }
  }

  render() {
    if (this.state.mode === 'portfolio') {
      return (
        <>
          <Header onLinkClick={this.onLinkClick} />
          <main>
            <Portfolio projects={projects} />
          </main>
          <Footer />
        </>
      )
    } else if(this.state.mode ==='contact') {
      return (
      <>
        <Header onLinkClick={this.onLinkClick} />
        <main>
          {/* <Contact /> */}
        </main>
        <Footer />
      </>
      )
    } else {
      return (
        <>
          <Header onLinkClick={this.onLinkClick} />
          <main>
            <About />
          </main>
          <Footer />
        </>
      )
    }
  }
}
export default App;
