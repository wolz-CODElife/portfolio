//SPDX-License-Identifier: MIT

pragma solidity 0.8.7;
// Import the necessary files and lib

import "./Interfaces/IERC4626.sol";
import "./Interfaces/IERC20.sol";
import "https://github.com/Rari-Capital/solmate/blob/main/src/tokens/ERC20.sol";
// create your contract and inherit the your imports
contract TokenizedVault is IERC4626, ERC20 {


// create an event that will the withdraw and deposit function
    event Deposit(address caller, uint256 amt);
    event Withdraw(address caller, uint256 amt, uint256 per);

//  create your variables and immutables
    ERC20 public immutable  asset;

// a mapping that checks if a user has deposited
    mapping(address => uint256) shareHolder;

    constructor(ERC20 _underlying, string memory _name, string memory _symbol )
     ERC20(_name, _symbol, 18) {
        asset = _underlying;
    }



    // DEPOSIT/WITHDRAWAL LOGIC

// a deposit function that receives assets fron users
    function deposit(uint256 assets) public{
        // checks that the deposit is higher than 0
        require (assets > 0, "Deposit less than Zero");

        asset.transferFrom(msg.sender, address(this), assets);
// checks the value of assets the holder has
        shareHolder[msg.sender] += assets;
// mints the reciept(shares)
        _mint(msg.sender, assets);

        emit Deposit(msg.sender,  assets);

    }
 
// returns total number of assets
    function totalAssets() public view override returns(uint256) {
        return asset.balanceOf(address(this));
    }    



//  users to return shares and get thier token back before they can withdraw, and requiers that the user has a deposit
function redeem(uint256 shares, address receiver ) internal  returns (uint256 assets) {
        require(shareHolder[msg.sender] > 0, "Not a share holder");
        shareHolder[msg.sender] -= shares;

        uint256 per = (10 * shares) / 100;
        
        _burn(msg.sender, shares);

        assets =shares + per;

        emit Withdraw(receiver, assets, per);
        return assets;
    }

    //  allow msg.sender to withdraw his deposit plus interest

    function withdraw(uint256 shares, address receiver) public  {
        uint256 payout = redeem(shares, receiver);
        asset.transfer(receiver, payout);
    }

}