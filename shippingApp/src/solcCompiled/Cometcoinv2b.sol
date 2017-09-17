pragma solidity ^0.4.13;

contract Cometcoinv2b {

  address public TokenAdmin;
  mapping (address => uint) balances;
  mapping (address => mapping (address => uint)) allowances;

  event Transfer(address indexed _from, address indexed _to, uint256 _value);
  event Approval(address indexed _owner, address indexed _spender, uint256 _value);
  event Drip(address indexed _recipient);

  string public name = "CometCoin";
  string public symbol = "UTD";
  string public version = "0.2.b";
  uint8 public decimals = 18;
  uint public totalSupply;

  function Cometcoinv2b() {
    TokenAdmin = msg.sender;
    totalSupply += 1 * 10 ** 24;
    balances[msg.sender] += 1 * 10 **24;
  }

  function drip() returns (bool success) {
    require(msg.sender != TokenAdmin);
    require(balances[TokenAdmin] >= 1 * 10 ** 19);
    balances[TokenAdmin] -= 1 * 10 ** 19;
    balances[msg.sender] += 1 * 10 ** 19;
    Drip(msg.sender);
    return true;
  }

  function getBalance() constant returns (uint _gotBalance) {
    return balances[msg.sender];
  }

  function getAllowance(address _allower) constant returns (uint _allowance) {
    return allowances[_allower][msg.sender];
  }

  function transfer(address _to, uint _value) returns (bool success) {
    require(balances[msg.sender] >= _value && _value > 0);
    balances[msg.sender] -= _value;
    balances[_to] += _value;
    assert(balances[msg.sender] > _value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  function allowance(address _allowed, uint _value) returns (bool success) {
    require(balances[msg.sender] >= _value && _value > 0);
    allowances[msg.sender][_allowed] += _value;
    assert(allowances[msg.sender][_allowed] >= _value);
    Approval(msg.sender, _allowed, _value);
    return true;
  }

  function spendAllowance(address _from, address _to, uint _value) returns (bool success) {
    require(allowances[_from][msg.sender] >= _value && _value > 0);
    balances[_from] -= _value;
    allowances[_from][msg.sender] -= _value;
    balances[_to] += _value;
    assert(balances[_to] >= _value);
    Transfer(msg.sender, _to, _value);
    return true;
  }

  function redButton() {
    require(msg.sender == TokenAdmin);
    selfdestruct(TokenAdmin);
  }

}
