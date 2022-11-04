import { Route, Switch } from 'react-router-dom';
import ProfileSection from './components/ProfileSection';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <ProfileSection />
          <LinksSection />
          <Footer />
        </Route>
        <Route path='/contact' >
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
