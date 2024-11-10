import './App.css';
import Title from './components/title/title';
import ConnectButton from './components/connect_button/connectButton';
import MyWalletForm from './components/mywallet_form/mywalletForm';
import {useState} from 'react';
import requestToConnect from './assets/requestToConnect';

function App() {
  const [buttonState, setButtonState] = useState("Connect");
  const [walletProvider, setWalletProvider] = useState(undefined);
  const [signe, setSigner] = useState(undefined);
  const [address, setAddress] = useState("No address connected yet");


  async function runRequestToConnect() {
    try{
      const _walletProvider = await requestToConnect();
      const _signer = await _walletProvider.getSigner();
      const _address = await _signer.getAddress();

      setWalletProvider(_walletProvider);
      setSigner(_signer);
      setAddress(_address);
      setButtonState("Connected");

    }catch(error){
      console.error("Failed to connect", error);
    }
  }

  return (
    <div className="center-content">
      <div className="title-container">
        <Title />
      </div>
      <div className="form-button-container">
        <div className="my-wallet-form">
          <MyWalletForm currentAddress={address} />
        </div>
        <div className="connect-button">
          <ConnectButton state={buttonState} requestToConnect={runRequestToConnect} />
        </div>
      </div>
    </div>
  );
  
  
}

export default App;
