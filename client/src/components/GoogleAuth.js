import React from 'react';
import {signIn , signOut} from '../actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component {

   // state = { isSignedIn : null};

    componentDidMount() {
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({clientId: '503697795568-ntqm5jmikbe2dhesrqmhrq5v60ubs50c.apps.googleusercontent.com' ,
            scope: 'email'}).then(() => { 
                this.auth = window.gapi.auth2.getAuthInstance();
              //  this.setState({ isSignedIn : this.auth.isSignedIn.get() });
              this.onAuthChanged(this.auth.isSignedIn.get());  
              this.auth.isSignedIn.listen(this.onAuthChanged);
            });
        }); 
    }

    onAuthChanged = (isSignedIn) => {
        if(isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();    
    }

    onSignOutClick = () => { 
        this.auth.signOut();
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        }
        else if(this.props.isSignedIn){
            return <div> <button className="ui red google button" onClick={this.onSignOutClick}><i className="google icon" /> Sign Out </button></div>;
        }
        else {
            return <div> <button className="ui blue google button"  onClick={this.onSignInClick}><i className="google icon" />  Sign in with Google </button> </div>;
        }

    }

    render() {
        return <div> {this.renderAuthButton()} </div>
    }
    
}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);