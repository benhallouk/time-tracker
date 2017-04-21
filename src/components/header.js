import React, { Component } from 'react';

class Header extends Component {
  
  state = {
    email : "",
    password : ""
  }

  onSubmit = (event) => {
    event.preventDefault();
    const credentials  = new FormData();
    credentials.append('email', this.state.email);
    credentials.append('password', this.state.password);
    this.props.onSubmit(credentials);
  }

  render() {
      return  (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Time Tracker</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              {this.props.isAuthenticated ? 
               <form className="navbar-form navbar-right">
                  <button type="submit" className="btn btn-danger">Sign out</button>
                </form>
                : 
                <form className="navbar-form navbar-right" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input type="text" 
                      value={this.state.email}
                      onChange={(event)=>{this.setState({ email:event.target.value });}}
                      placeholder="Email" className="form-control" />
                  </div>                
                  <div className="form-group">
                    <input type="password" 
                      value={this.state.password}
                      onChange={(event)=>{this.setState({ password:event.target.value });}}
                      placeholder="Password" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-success">Sign in</button>
                </form>
              }
            </div>
          </div>
        </nav>  
      )
  }
}

export default Header;
