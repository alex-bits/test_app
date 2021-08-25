import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import ManageBooks from './pages/ManageBooks';
import {BooksProvider} from './context/bookContext';
import Alert from './components/Alert';

function App() {
    return (
      <BooksProvider>
          <div className='wrapper'>
              <Router>
                  <Switch>
                      <Route exact path='/' component={Main} />
                      <Route exact path='/manage/' component={ManageBooks} />
                      <Route exact path='/manage/:id' component={ManageBooks} />
                  </Switch>
              </Router>
          </div>
          <Alert />
      </BooksProvider>
    );
}

export default App;
