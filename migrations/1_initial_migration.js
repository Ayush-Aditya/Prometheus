const Validators = artifacts.require("Validators");
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
    deployer.deploy(Validators, { gas: 6721975 });
    deployer.deploy(Migrations,{ gas: 6721975 });
};