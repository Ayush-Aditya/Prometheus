# Blockchain-Based Certificate Verification System

## 🚀 Project Overview
This project leverages the power of blockchain technology to revolutionize the way graduation certificates and other legal documents are verified. The primary goal is to create a secure, transparent, and decentralized platform where colleges publish certificates on the blockchain, allowing companies to verify their authenticity seamlessly.

---

## 🌟 Key Features
- **Certificate Publishing:** Colleges can upload certificates to the blockchain, ensuring they are tamper-proof and publicly verifiable.
- **Instant Verification:** Companies can validate the authenticity of certificates without relying on intermediaries.
- **Enhanced Security:** The blockchain ensures that all records are immutable and protected against fraud.
- **Decentralized:** Eliminates centralized points of failure, ensuring reliability and transparency.

---

## 🛠️ Tech Stack

### **Frontend**
- **React:** Interactive and dynamic user interface for seamless user experience.
- **JavaScript:** Core functionality for user interactions and logic.

### **Backend**
- **Node.js:** Handles server-side logic and API integration.
- **MongoDB:** NoSQL database to manage user and certificate metadata.

### **Blockchain Tools**
- **Truffle Framework:** For writing, testing, and deploying smart contracts.
- **Ganache:** Local Ethereum blockchain network for development and testing.
- **Web3.js:** JavaScript library for interacting with the blockchain from the front end.

---

## 📜 Workflow
1. **Certificate Upload:** Colleges upload certificates to the system.
2. **Blockchain Integration:** The certificate details are hashed and stored on the blockchain using smart contracts.
3. **Verification:** Companies can search for a certificate's hash to verify its authenticity instantly.
4. **Immutable Records:** Once published, certificates cannot be altered or deleted.

---

## 📂 File Structure
```
project-root/
├── contracts/            # Smart contract code
├── client/               # React frontend
├── server/               # Node.js backend
├── migrations/           # Smart contract deployment scripts
├── test/                 # Smart contract test cases
├── package.json          # Node.js dependencies
├── truffle-config.js     # Truffle configuration
└── README.md             # Project documentation
```

---

## 🏗️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Truffle](https://trufflesuite.com/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Abhishek242004/BlockFiles.git
   cd BlockFiles
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Start Ganache:**
   - Open Ganache and create a new workspace.

4. **Deploy Smart Contracts:**
   ```bash
   truffle migrate --network development
   ```

5. **Run Backend Server:**
   ```bash
   cd server
   npm start
   ```

6. **Start Frontend:**
   ```bash
   cd client
   npm start
   ```

7. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

---

## 🔬 Testing
- Use Truffle's testing framework to run unit tests for the smart contracts:
  ```bash
  truffle test
  ```
- Ensure all tests pass before deploying to a live network.

---

## 🤝 Contributions
We welcome contributions to improve this project! Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---

## 🛡️ License
This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact
For any inquiries or feedback, feel free to reach out:
- **Name:** Team Prometheus
- **Members:** Ayush Aditya,
               Abhishek Sahu,
               Akshat Gupta

---

## 🌐 Future Enhancements
- Integration with a live Ethereum network for real-world deployment.
- Advanced user authentication and access control.
- Enhanced user interface with certificate visualization.
- Support for additional types of documents and records.

