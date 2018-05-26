import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';
import HeaderView from './main/view/HeaderView';
import FooterView from './main/view/FooterView';
import VotingListView from './main/view/VotingListView';
import EnrollView from './main/view/EnrollView';
import VoteView from './main/view/VoteView';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider>
        <div className="App">
          <HeaderView title="Votestagram"></HeaderView>
          <Switch>
            <Route exact={true} path="/" component={VotingListView} />
            <Route path="/votinglist" component={VotingListView} />
            <Route path="/enroll" component={EnrollView} />
            <Route path="/vote/:id" component={VoteView} />
          </Switch>
          <FooterView />
        </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
