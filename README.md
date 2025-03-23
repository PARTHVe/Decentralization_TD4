# Basic Onion Routing Network

## Summary
This project establishes a basic onion routing network that securely transmits messages through multiple nodes, ensuring privacy by encrypting data at each point along the path.

## Key Features
- Ability to launch multiple nodes and users.
- Node registration with a central repository.
- Sending and receiving of encrypted communications.
- Support for both RSA and symmetric encryption.
- Routing messages through a specified network circuit.
- Simple API endpoints for accessing message information.

## Project Layout
```
Simple-Onion-Routing-Network-TD4/
│── src/
│   ├── crypto.ts   # Contains cryptographic functionality
│   ├── network.ts  # Manages network and routing operations
│   ├── registry.ts # Handles node registration processes
│── __test__/
│   ├── tests/
│   │   ├── onionRouting.test.ts  # Tests related to onion routing
│── package.json
│── README.md
```

## Installation Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd Simple-Onion-Routing-Network-TD4
   ```
2. Install the necessary dependencies:
   ```sh
   npm install
   ```

## How to Use
### Initiating the Network
To begin the network with a chosen number of nodes and users, adjust the network initialization script as needed.

### API Endpoints
The following API routes are available:
- **Node API:**
  - `GET /getLastReceivedEncryptedMessage`
  - `GET /getLastReceivedDecryptedMessage`
  - `GET /getLastMessageDestination`
  - `GET /getPrivateKey`
- **User API:**
  - `GET /getLastReceivedMessage`
  - `GET /getLastSentMessage`

## Cryptographic Module
The crypto module includes functions for:
- Generating RSA key pairs (`generateRsaKeyPair`)
- Performing RSA encryption and decryption (`rsaEncrypt`, `rsaDecrypt`)
- Enhancing the efficiency of message forwarding.

## License
This project is licensed under the MIT License.


