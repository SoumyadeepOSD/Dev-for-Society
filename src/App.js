import './index.css';
import '../src/App.css';
import Brand from './components/Hero/brand';
import Ideas from './components/Hero/ideas';
import Mission from './components/Hero/mission';
import Bonding from './components/Hero/bonding';
import MainTitle from './components/Main/maintitle';
import { CardComponent } from './components/Main/cards';




// Brand ==> The bold text in home page
//Mission ==> The mission text
//Ideas ==> The idea list, followed by (1), (2), (3)
//Bonding ==> Links to join discord and github
//MainTitle ==> "Explore our open source project" text
//CardComponent ==> 17 UN's problem list


function App() {
  return (
    <div className='App'>
      <Brand/>
      <Mission/>
      <Ideas/>
      <Bonding/>
      <MainTitle/>
      <CardComponent/>
    </div>
  );
}

export default App;
