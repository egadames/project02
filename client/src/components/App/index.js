import React from 'react';
import StartPage from '../StartPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../../containers/Counter';
import FlashCardByID from '../../containers/FlashCardByID';
import ViewAll from '../../containers/ViewAll'
import Navbar from '../Navbar';

const App = () => (
<Router>
<Navbar/>
<Route exact path='/' component={StartPage}/>
<Route exact path='/counter' component={Counter}/>
<Route exact path='/flashCardId' component={FlashCardByID}/>
<Route exact path='/flashcard' component={ViewAll}/>
{/* <Route exact path='/todos/:todoId' component={TodoCard}/>  */}
</Router>
);
export default App;
