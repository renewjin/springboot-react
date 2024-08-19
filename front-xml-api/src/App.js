import logo from './logo.svg';
import './App.css';
import AirPolluctionData from './AirPolluctionData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>공기오염 조회서비스</h1>
        <AirPolluctionData />
      </header>
    </div>
  );
}

export default App;
