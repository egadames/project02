import React from 'react';
import StartPage from '../StartPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../../containers/Counter';
import FlashCardByID from '../../containers/FlashCardByID';
import ViewAll from '../../containers/ViewAll';
import Navbar from '../Navbar';
import UpdateByID from '../../containers/UpdateByID';
import NewFlashCard from '../../containers/NewFlashCard';

const App = () => (
<Router>
<Navbar/>
<Route exact path='/' component={StartPage}/>
<Route exact path='/counter' component={Counter}/>
<Route exact path='/flashcard' component={ViewAll}/>
<Route exact path='/flashcard/add' component={NewFlashCard}/>
<Route exact path='/flashcard/update/:flashId' component={UpdateByID}/>
{/* <Route exact path='/flashcard/delete/:flashId' component={DeleteByID}/> */}
<Route exact path='/flashcard/:flashId' component={FlashCardByID}/>


</Router>
);
export default App;
