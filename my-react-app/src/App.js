import icon from './icon-music.svg';
import hero from './illustration-hero.svg';
import './App.css';


function App() {
  return (
    <div className="main">
      <div className="order-summary">
        <img src={hero} className="App-hero" alt="hero" />
        <div className='order-info'>
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
          </p>
        </div>
        <div className='selected-plan'>
        <img src={icon} className="Music-icon" alt="music" />
          <div className='plan-details'>
          
            <h4>Annual Plan</h4>
            <p>$59.99/year</p>
          </div>
          <p className="fake-link">
            Change
          </p>
        </div>
        <button className="primary-btn">Proceed to Payment</button>
        <p className="secondary-btn">Cancel Order</p>
      </div>
    </div>
   
  );
}

export default App;
