var Cometcoinv2b = artifacts.require("./Cometcoinv2b.sol");
var Hackathon = artifacts.require("./Hackathon.sol");

module.exports = function(deployer) {
  deployer.deploy(Cometcoinv2b);
deployer.deploy(Hackathon);
};
