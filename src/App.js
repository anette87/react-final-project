import React from 'react';
import './App.css';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';

class App extends React.Component {
  
  state = {
    isLoginOpen: true,
    isRegisterOpen: false,
  };

  showLoginBox(){
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox(){
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
  
  
  render() {
    return (
      <div className="root-container">
        <div className='box-container'>
          <div className='controller' onClick={this.showLoginBox.bind(this)}>
            Login
          </div> 
          <div className="controller" onClick={this.showRegisterBox.bind(this)}>
            Register
            
          </div> 
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisterOpen && <RegisterBox />}

        </div>
      </div>
    );
  }
}

export default App;

