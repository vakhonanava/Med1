import {React , Suspense}  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, useRef } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products'
import SignUp from './components/pages/Signup';
import Footer from './components/Footer';
import todua from '../src/components/pages/partners/todua';
import Amee from '../src/components/pages/partners/amee';
import Metreveli from '../src/components/pages/partners/Metreveli';
import Aversi from '../src/components/pages/partners/Aversi';
import TSMU from '../src/components/pages/partners/TSMU'
import chachava from '../src/components/pages/partners/chachava';
import Ingorokva from '../src/components/pages/partners/ingorokva';
import partners from '../src/components/pages/partners';
import {useTranslation} from 'react-i18next'
import imageSlider from './components/imageSlider';

function App() {
  // const {t , i18n} = useTranslation()
  // function handleClick(lang){
  //   i18n.changeLanguage(lang )
  
  return (
  
  <Suspense fallback={null}>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Products' component={Products} />
          <Route path='/partners' component={partners}/>
          <Route path='/sign-up' component={SignUp} />
          <Route path='/todua' component={todua} />
          <Route path='/chachava' component={chachava}/>
          <Route path='/Aversi' component={Aversi}/>
          <Route path='/TSMU' component={TSMU}/>
          <Route path='/Metreveli' component={Metreveli}/>
          <Route path='/ingorokva' component={Ingorokva}/>
          <Route path='/Amee' component={Amee}></Route> 

        </Switch>
        <Footer />
      </Router>
    </>
  </Suspense>
  );
}

export default App;
