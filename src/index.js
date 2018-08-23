import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_type: 'customer',
      authenticated: false,
      format: 'desktop',
      size: 'regular'
    }
    this.checkIfAdmin()
  }

  componentDidMount() {
    window.onresize = () => {
      this.resize();
    };
    this.resize();
  }

  resize() {
    let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let screenWidth = window.screen.availWidth;
    let screenHeight = window.screen.availHeight;
    let styleProps = []

    if (screenHeight > screenWidth) {
      this.setState({format:'mobile'});
    } else {
      let size = 'regular';
      if (windowWidth < 650) {
        size = 'skinny';
      }
      this.setState({format:'desktop', size: size});
    }
    styleProps.forEach(({ name, value}) => {
      document.documentElement.style.setProperty(name, value)
    })
  }

  checkIfAdmin() {
    if (window.location.href === 'admin') {
      this.setState({user_type:'admin'});
    }
  }

  render() {
    return (
      <div>this is another test to make sure webpack is setup properly</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));