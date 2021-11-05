import React, { Component } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk
Amplify.configure(aws_exports);

class App extends Component {
  render() {

    const runRoutine = () => {
      Auth.currentCredentials()
        .then(credentials => {
          const lambda = new Lambda({
            credentials: Auth.essentialCredentials(credentials),
            region: 'us-east-1',

          });
          lambda.invoke({
            FunctionName: 'runRoutine-deva'
          }).send()
        });
    }

    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <button style={{margin: '20px', width: '200px', height: '50px'}} onClick={runRoutine}>It's Naptime!</button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
