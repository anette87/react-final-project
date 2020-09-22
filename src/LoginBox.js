import React from 'react';

class LoginBox extends React.Component {

    state = {};
    
  
    handleSubmit(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
            <div className="box">
                <form onSubmit={this.props.handleSubmit}>
                    
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>
        
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <input type="submit" value="Login"/>
                    </div>
                </form>
            </div>
        </div>
        
      );
    }
  }

export default LoginBox;