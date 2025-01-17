const Validators = artifacts.require("Validators");

module.exports = function (deployer) {
    deployer.deploy(Validators, "Atul Shrivastav" , "BIT Mesra");
};