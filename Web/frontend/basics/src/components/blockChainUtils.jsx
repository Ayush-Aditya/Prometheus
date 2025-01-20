import Web3 from 'web3';

// Connect to Ganache using the Truffle-config network settings
const web3 = new Web3('http://127.0.0.1:7545');

// ABI and deployed contract address (replace with your deployed address)
import contractData from '../../../../../../build/contracts/Validators.json'; // Make sure the path is correct
 // Adjust the path as needed
const contractABI = contractData.abi;
const contractAddress = '0x96Ab2B3ee208065dbb36158f3d191742fbcB5a53'; // Replace with your deployed contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);
const account = '0x9C86Ad16d22672E7a4864E7A76c3EcEC5030Df5D'; // Replace with one of your Ganache accounts

// Function to add credentials
export const addCredentials = async (addr, name, institution, fileHash) => {
  try {
    await contract.methods
      .addCredentials(addr, name, institution, fileHash)
      .send({ from: account, gas: 3000000 });
    alert('Credentials added successfully.');
  } catch (error) {
    console.log(error);
    alert('Error adding credentials:', error);
  }
};

// Function to retrieve student credentials
export const getStudent = async (addr, setRetrievedCredentials) => {
  try {
    const credentials = await contract.methods.getStudent(addr).call();
    setRetrievedCredentials(credentials);
  } catch (error) {
    console.log(error);
    alert('Error retrieving student credentials:', error);
  }
};
