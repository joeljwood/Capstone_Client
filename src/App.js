
import './App.css';
import React , {useEffect,useState} from 'react'
import axios from 'axios'
import Robot from './components/Robot'
import Question from './components/Question'
import { BrowserRouter , Route , Redirect ,Switch } from 'react-router-dom'
import User from './components/User'
//import Review from './components/Review'
import Users from './components/Users'
import MainNavigation from './components/MainNavigation'

function App() {
  const [result, setResult] = useState({});
  console.log("Test ==> ", result)
  return (
    <div className="App">
   <BrowserRouter>
    <React.Fragment>
       <MainNavigation />
   <main className="main-content">
     <Switch>
       <Redirect from="/" to="/user" exact/>
       <Route path="/question" component={() => <Question result={result} />}/>
       <Route path="/robot" component={Robot}/>
       <Route path="/user" component={() => <User setResult={setResult}/>}/>
     </Switch>
     </main>
     </React.Fragment>
   </BrowserRouter>
 
 
</div>
  );
}

export default App;

//<Route path="/review" component={Review}/> 