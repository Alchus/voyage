This is a rough draft of a token Dapp made for the UT Dallas Blockchain and Cryptography club.
You can (as of September 10, 2017) find it at http://utdcrypto.com 
The tokens don't have any monetary value, but this was made as a teaching tool for members
and visitors to learn how to write and interact with contracts, as well as how to integrate
web3/ethereum functionality into a web app.

It was built using the React-Auth version of 'truffle-box', though it has been refactored
to use react-router-dom (AKA react-router v4) instead of react-router v3.

## Installation

1. Install the needed node packages
    ```javascript
    npm install
    ```

2. Compile contracts
    ```javascript
    truffle compile
    ```

3. Run the page on localhost
    ```javascript
    npm start
    ```
