# Wallet Authentication Demo

Author: Pedro Machado 

This is a repo for demonstrating how to authenticate a wallet in a web3 app.

## Requirements:

- Node.js ^v20.11.0
- Metamask latest version

## Run:

```
yarn install
yarn run start
```
Description
This script provides a function `requestToConnect`, written in JavaScript, that allows a web application to connect to a user's Ethereum wallet using the **ethers.js** library. Below is an explanation of its components:

---

### **Code Walkthrough**

#### **1. Importing ethers.js**
```javascript
import { ethers } from "ethers";
```
- This imports the **ethers.js** library, which is used to interact with Ethereum and its wallets.
- The library provides utilities for connecting to wallets, interacting with smart contracts, and handling blockchain-related data.

---

#### **2. `requestToConnect` Function**
```javascript
async function requestToConnect() {
    let provider = window.ethereum;
```
- **`provider`**: Refers to the `window.ethereum` object, injected into the browser by Ethereum wallet extensions like **MetaMask**.
- This checks if the browser has access to a provider (e.g., MetaMask).

---

#### **3. Checking if Provider Exists**
```javascript
if (provider !== undefined) {
```
- Ensures that an Ethereum provider is available in the browser.
- If `window.ethereum` is undefined, the user does not have a compatible wallet installed.

---

#### **4. Creating a Browser Provider**
```javascript
const walletProvider = new ethers.BrowserProvider(provider);
```
- **`ethers.BrowserProvider`**: A wrapper provided by ethers.js for interacting with the Ethereum provider (like MetaMask).
- It enables functionality like requesting accounts, signing transactions, and accessing blockchain data.

---

#### **5. Requesting Wallet Access**
```javascript
await walletProvider.send("eth_requestAccounts", []);
```
- **`eth_requestAccounts`**: A JSON-RPC method used to request permission from the user to access their wallet.
- This will prompt the user (via MetaMask or a similar wallet) to authorize the connection.

---

#### **6. Returning the Wallet Provider**
```javascript
return walletProvider;
```
- Once the user grants permission, the function returns the connected wallet provider, which can be used for further blockchain interactions (e.g., sending transactions or reading account balances).

---

#### **7. Handling Errors**
```javascript
} catch (error) {
    if (error.code === 4001) {
        alert("The user rejected the request.");
    }
    throw(error);
}
```
- The **try-catch** block handles potential errors:
  - **Error Code 4001**: This error occurs if the user rejects the wallet connection request.
  - If the error is not related to rejection, it is thrown to the calling function for further handling.

---

#### **8. Handling Missing Wallet**
```javascript
alert("You need to install a Provider. Try with Metamask. https://metamask.io/download/");
```
- If no Ethereum provider is found in the browser, an alert notifies the user to install a wallet like **MetaMask** and provides a link to download it.

---

### **Default Export**
```javascript
export default requestToConnect;
```
- The function is exported as the default module, making it reusable in other parts of the application.

---

### **How It Works**
1. When invoked, the function checks for the presence of an Ethereum wallet provider in the browser.
2. If a provider exists:
   - It requests access to the user's wallet using the `eth_requestAccounts` method.
   - If the user grants access, the function returns the wallet provider, ready for use.
   - If the user rejects the request, an error message is shown.
3. If no provider exists, the user is prompted to install a wallet like MetaMask.

---

### **Practical Use Case**
- **Connecting Wallets in dApps**: This function is commonly used in decentralized applications (dApps) to connect a user's wallet for tasks like viewing balances, interacting with smart contracts, or signing transactions.
  
---

### **Dependencies**
- **ethers.js**: A JavaScript library for blockchain interaction. Install it using:
-   ```
