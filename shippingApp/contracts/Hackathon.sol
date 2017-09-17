pragma solidity ^0.4.15;

contract Hackathon {

  struct Shippers {
    address shipper1;
    address shipper2;
    address shipper3;
  }

  struct Returnstring {
    string statusString;
  }

  mapping (bytes32 => Shippers) public hashToShippers;
  mapping (bytes32 => mapping (address => uint)) public hashToPayouts;
  mapping (address => bytes32) public companiesToShipments;
  mapping (bytes32 => uint) public shipmentStatus;
  mapping (bytes32 => address) public shipmentsToCompanies;

  function Hackathon() {
  }



  function newShipment(
    bytes32 _shipmentHash,
    uint _payoutOne,
    uint _payoutTwo,
    uint _payoutThree,
    address _addressOne,
    address _addressTwo,
    address _addressThree
    ) payable returns (bool success) {
      require(msg.value >= (_payoutOne + _payoutTwo + _payoutThree));
      hashToShippers[_shipmentHash] = Shippers(_addressOne, _addressTwo, _addressThree);
      hashToPayouts[_shipmentHash][_addressOne] = _payoutOne;
      hashToPayouts[_shipmentHash][_addressTwo] = _payoutTwo;
      hashToPayouts[_shipmentHash][_addressThree] = _payoutThree;
      companiesToShipments[msg.sender] = _shipmentHash;
      shipmentStatus[_shipmentHash] = 3;
      shipmentsToCompanies[_shipmentHash] = msg.sender;
      return true;
    }

    function getStatus(bytes32 _shipmentHash) constant returns (uint _status) {
      return shipmentStatus[_shipmentHash];
    }

  function makePaymentFromTwo(bytes32 _shipmentHash) returns (bool success) {
    address payee = hashToShippers[_shipmentHash].shipper1;
    uint paymentAmount = hashToPayouts[_shipmentHash][payee];
    //require(msg.sender == hashToShippers[_shipmentHash].shipper2);
    hashToPayouts[_shipmentHash][payee] = 0;
    payee.transfer(paymentAmount);
    shipmentStatus[_shipmentHash] = 2;
    return true;
  }

  function makePaymentFromThree(bytes32 _shipmentHash) returns (bool success) {
    address shipperOne = hashToShippers[_shipmentHash].shipper1;
    uint shipperOnePayout = hashToPayouts[_shipmentHash][shipperOne];
    address payee = hashToShippers[_shipmentHash].shipper2;
    uint paymentAmount = hashToPayouts[_shipmentHash][payee];
    //require(msg.sender == hashToShippers[_shipmentHash].shipper3 && shipperOnePayout == 0);
    hashToPayouts[_shipmentHash][payee] = 0;
    payee.transfer(paymentAmount);
    shipmentStatus[_shipmentHash] = 1;
    return true;
  }

  function makePaymentFromFinal(bytes32 _shipmentHash) returns (bool success) {
    address payee = hashToShippers[_shipmentHash].shipper3;
    address shipperTwo = hashToShippers[_shipmentHash].shipper2;
    address company = shipmentsToCompanies[_shipmentHash];
    uint paymentAmount = hashToPayouts[_shipmentHash][payee];
    //require(hashToPayouts[_shipmentHash][shipperTwo] == 0 && msg.sender == company);
    hashToPayouts[_shipmentHash][payee] = 0;
    payee.transfer(paymentAmount);
    shipmentStatus[_shipmentHash] = 0;
    return true;
  }
}
