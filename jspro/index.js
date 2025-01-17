const Web3 = require('web3');
const fs = require('fs');

// Connect to Ganache using the Truffle-config network settings
const web3 = new Web3('http://127.0.0.1:7545');

// ABI and deployed contract address (replace with your deployed address)
const contractData = require('../build/contracts/Validators.json'); // Adjust the path as needed
const contractABI = contractData.abi; // Use the ABI from Validators.json
const contractAddress = '0x2D3Ba610F5A46d9E45E6fDE535826bffD034250a'; // Replace with your deployed contract address

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Account from Ganache
const account = '0xaF86F14725c991643D4466c530BF821041d617Ad'; // Replace with one of your Ganache accounts

// Function to add credentials
async function addCredentials(addr, name, institution, fileHash) {
  try {
    await contract.methods
      .addCredentials(addr, name, institution, web3.utils.soliditySha3(fileHash))
      .send({ from: account, gas: 3000000 });
    console.log('Credentials added successfully.');
  } catch (error) {
    console.error('Error adding credentials:', error);
  }
}

// Function to retrieve student credentials
async function getStudent(addr) {
  try {
    const credentials = await contract.methods.getStudent(addr).call();
    console.log('Retrieved student credentials:', credentials);
  } catch (error) {
    console.error('Error retrieving student credentials:', error);
  }
}

// Example Usage
const studentAddress = '0xAE4541c1100c69f250172A95886d477076090BBd'; // Replace with a student's Ethereum address
const studentName = 'Akshat';
const institution = 'BIT';
const fileHash = '0x32c57e00d74a2aa4165b3c2d244df82a99f3c3d613d204031e2316025bd2587f';

addCredentials(studentAddress, studentName, institution, fileHash).then(() =>
  getStudent(studentAddress)
);
