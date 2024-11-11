import './App.css';
import {useState} from 'react';

import Title from './components/title/title';
import ConnectButton from './components/connect_button/connectButton';
import MyWalletForm from './components/mywallet_form/mywalletForm';
import ShowBalance from './components/showBalance/showBalance';

import requestToConnect from './assets/requestToConnect';

import { ethers } from 'ethers';

function App() {
  const [buttonState, setButtonState] = useState("Connect");
  const [walletProvider, setWalletProvider] = useState(undefined);
  const [myBalance, setMyBalance] = useState(0);

  const [signe, setSigner] = useState(undefined);
  const [address, setAddress] = useState("No address connected yet");
  const [contract, setContract] = useState(undefined);
  
  async function runRequestToConnect() {
    try{
      const _walletProvider = await requestToConnect();
      const _signer = await _walletProvider.getSigner();
      const _address = await _signer.getAddress();
      const _balance = await _walletProvider.getBalance(_address);

      setWalletProvider(_walletProvider);
      setSigner(_signer);
      setAddress(_address);
      setMyBalance( ethers.formatEther(_balance)); 
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
      <div className="balance-container">
        <ShowBalance showBalance={myBalance}/>
      </div>
      
    </div>
  );
}

export default App;
