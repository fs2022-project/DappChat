exports.content2 = () => {
    return `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.10;
    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/ERC721.sol";
    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
    import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.4.2/contracts/utils/Counters.sol";
    
    contract NFTtoken is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    constructor() ERC721 ("Token-NFT", "DappChat-NFT") {}
    
    function mint(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _tokenIds.increment();
        return newItemId;
        }
    }
`}

exports.abi2 = () => {
    return [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};

exports.bytecode2 = () => {
    return ("60806040523480156200001157600080fd5b506040518060400160405280600981526020017f546f6b656e2d4e465400000000000000000000000000000000000000000000008152506040518060400160405280600c81526020017f44617070436861742d4e4654000000000000000000000000000000000000000081525081600090816200008f919062000324565b508060019081620000a1919062000324565b5050506200040b565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012c57607f821691505b602082108103620001425762000141620000e4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200016d565b620001b886836200016d565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000205620001ff620001f984620001d0565b620001da565b620001d0565b9050919050565b6000819050919050565b6200022183620001e4565b6200023962000230826200020c565b8484546200017a565b825550505050565b600090565b6200025062000241565b6200025d81848462000216565b505050565b5b8181101562000285576200027960008262000246565b60018101905062000263565b5050565b601f821115620002d4576200029e8162000148565b620002a9846200015d565b81016020851015620002b9578190505b620002d1620002c8856200015d565b83018262000262565b50505b505050565b600082821c905092915050565b6000620002f960001984600802620002d9565b1980831691505092915050565b6000620003148383620002e6565b9150826002028217905092915050565b6200032f82620000aa565b67ffffffffffffffff8111156200034b576200034a620000b5565b5b62000357825462000113565b6200036482828562000289565b600060209050601f8311600181146200039c576000841562000387578287015190505b62000393858262000306565b86555062000403565b601f198416620003ac8662000148565b60005b82811015620003d657848901518255600182019150602085019450602081019050620003af565b86831015620003f65784890151620003f2601f891682620002e6565b8355505b6001600288020188555050505b505050505050565b612dc3806200041b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063b88d4fde11610066578063b88d4fde1461025b578063c87b56dd14610277578063d85d3d27146102a7578063e985e9c5146102d7576100ea565b806370a08231146101f157806395d89b4114610221578063a22cb4651461023f576100ea565b8063095ea7b3116100c8578063095ea7b31461016d57806323b872dd1461018957806342842e0e146101a55780636352211e146101c1576100ea565b806301ffc9a7146100ef57806306fdde031461011f578063081812fc1461013d575b600080fd5b610109600480360381019061010491906118bc565b610307565b6040516101169190611904565b60405180910390f35b6101276103e9565b60405161013491906119b8565b60405180910390f35b61015760048036038101906101529190611a10565b61047b565b6040516101649190611a7e565b60405180910390f35b61018760048036038101906101829190611ac5565b610500565b005b6101a3600480360381019061019e9190611b05565b610617565b005b6101bf60048036038101906101ba9190611b05565b610677565b005b6101db60048036038101906101d69190611a10565b610697565b6040516101e89190611a7e565b60405180910390f35b61020b60048036038101906102069190611b58565b610748565b6040516102189190611b94565b60405180910390f35b6102296107ff565b60405161023691906119b8565b60405180910390f35b61025960048036038101906102549190611bdb565b610891565b005b61027560048036038101906102709190611d50565b6108a7565b005b610291600480360381019061028c9190611a10565b610909565b60405161029e91906119b8565b60405180910390f35b6102c160048036038101906102bc9190611e74565b610a5a565b6040516102ce9190611b94565b60405180910390f35b6102f160048036038101906102ec9190611ebd565b610a90565b6040516102fe9190611904565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e257506103e182610b24565b5b9050919050565b6060600080546103f890611f2c565b80601f016020809104026020016040519081016040528092919081815260200182805461042490611f2c565b80156104715780601f1061044657610100808354040283529160200191610471565b820191906000526020600020905b81548152906001019060200180831161045457829003601f168201915b5050505050905090565b600061048682610b8e565b6104c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bc90611fcf565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061050b82610697565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361057b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057290612061565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661059a610bfa565b73ffffffffffffffffffffffffffffffffffffffff1614806105c957506105c8816105c3610bfa565b610a90565b5b610608576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ff906120f3565b60405180910390fd5b6106128383610c02565b505050565b610628610622610bfa565b82610cbb565b610667576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065e90612185565b60405180910390fd5b610672838383610d99565b505050565b610692838383604051806020016040528060008152506108a7565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361073f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073690612217565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107af906122a9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461080e90611f2c565b80601f016020809104026020016040519081016040528092919081815260200182805461083a90611f2c565b80156108875780601f1061085c57610100808354040283529160200191610887565b820191906000526020600020905b81548152906001019060200180831161086a57829003601f168201915b5050505050905090565b6108a361089c610bfa565b8383610ff4565b5050565b6108b86108b2610bfa565b83610cbb565b6108f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ee90612185565b60405180910390fd5b61090384848484611160565b50505050565b606061091482610b8e565b610953576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094a9061233b565b60405180910390fd5b600060066000848152602001908152602001600020805461097390611f2c565b80601f016020809104026020016040519081016040528092919081815260200182805461099f90611f2c565b80156109ec5780601f106109c1576101008083540402835291602001916109ec565b820191906000526020600020905b8154815290600101906020018083116109cf57829003601f168201915b5050505050905060006109fd6111bc565b90506000815103610a12578192505050610a55565b600082511115610a47578082604051602001610a2f929190612397565b60405160208183030381529060405292505050610a55565b610a50846111d3565b925050505b919050565b600080610a67600761127a565b9050610a733382611288565b610a7d81846112a6565b610a876007611313565b80915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c7583610697565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610cc682610b8e565b610d05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfc9061242d565b60405180910390fd5b6000610d1083610697565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d7f57508373ffffffffffffffffffffffffffffffffffffffff16610d678461047b565b73ffffffffffffffffffffffffffffffffffffffff16145b80610d905750610d8f8185610a90565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610db982610697565b73ffffffffffffffffffffffffffffffffffffffff1614610e0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e06906124bf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7590612551565b60405180910390fd5b610e89838383611329565b610e94600082610c02565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ee491906125a0565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3b91906125d4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611062576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105990612676565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111539190611904565b60405180910390a3505050565b61116b848484610d99565b6111778484848461132e565b6111b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ad90612708565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606111de82610b8e565b61121d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112149061279a565b60405180910390fd5b60006112276111bc565b905060008151116112475760405180602001604052806000815250611272565b80611251846114b5565b604051602001611262929190612397565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b6112a2828260405180602001604052806000815250611615565b5050565b6112af82610b8e565b6112ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e59061282c565b60405180910390fd5b8060066000848152602001908152602001600020908161130e91906129f8565b505050565b6001816000016000828254019250508190555050565b505050565b600061134f8473ffffffffffffffffffffffffffffffffffffffff16611670565b156114a8578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611378610bfa565b8786866040518563ffffffff1660e01b815260040161139a9493929190612b1f565b6020604051808303816000875af19250505080156113d657506040513d601f19601f820116820180604052508101906113d39190612b80565b60015b611458573d8060008114611406576040519150601f19603f3d011682016040523d82523d6000602084013e61140b565b606091505b506000815103611450576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144790612708565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506114ad565b600190505b949350505050565b6060600082036114fc576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611610565b600082905060005b6000821461152e57808061151790612bad565b915050600a826115279190612c24565b9150611504565b60008167ffffffffffffffff81111561154a57611549611c25565b5b6040519080825280601f01601f19166020018201604052801561157c5781602001600182028036833780820191505090505b5090505b600085146116095760018261159591906125a0565b9150600a856115a49190612c55565b60306115b091906125d4565b60f81b8183815181106115c6576115c5612c86565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116029190612c24565b9450611580565b8093505050505b919050565b61161f8383611683565b61162c600084848461132e565b61166b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166290612708565b60405180910390fd5b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036116f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e990612d01565b60405180910390fd5b6116fb81610b8e565b1561173b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161173290612d6d565b60405180910390fd5b61174760008383611329565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461179791906125d4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61189981611864565b81146118a457600080fd5b50565b6000813590506118b681611890565b92915050565b6000602082840312156118d2576118d161185a565b5b60006118e0848285016118a7565b91505092915050565b60008115159050919050565b6118fe816118e9565b82525050565b600060208201905061191960008301846118f5565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561195957808201518184015260208101905061193e565b83811115611968576000848401525b50505050565b6000601f19601f8301169050919050565b600061198a8261191f565b611994818561192a565b93506119a481856020860161193b565b6119ad8161196e565b840191505092915050565b600060208201905081810360008301526119d2818461197f565b905092915050565b6000819050919050565b6119ed816119da565b81146119f857600080fd5b50565b600081359050611a0a816119e4565b92915050565b600060208284031215611a2657611a2561185a565b5b6000611a34848285016119fb565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a6882611a3d565b9050919050565b611a7881611a5d565b82525050565b6000602082019050611a936000830184611a6f565b92915050565b611aa281611a5d565b8114611aad57600080fd5b50565b600081359050611abf81611a99565b92915050565b60008060408385031215611adc57611adb61185a565b5b6000611aea85828601611ab0565b9250506020611afb858286016119fb565b9150509250929050565b600080600060608486031215611b1e57611b1d61185a565b5b6000611b2c86828701611ab0565b9350506020611b3d86828701611ab0565b9250506040611b4e868287016119fb565b9150509250925092565b600060208284031215611b6e57611b6d61185a565b5b6000611b7c84828501611ab0565b91505092915050565b611b8e816119da565b82525050565b6000602082019050611ba96000830184611b85565b92915050565b611bb8816118e9565b8114611bc357600080fd5b50565b600081359050611bd581611baf565b92915050565b60008060408385031215611bf257611bf161185a565b5b6000611c0085828601611ab0565b9250506020611c1185828601611bc6565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c5d8261196e565b810181811067ffffffffffffffff82111715611c7c57611c7b611c25565b5b80604052505050565b6000611c8f611850565b9050611c9b8282611c54565b919050565b600067ffffffffffffffff821115611cbb57611cba611c25565b5b611cc48261196e565b9050602081019050919050565b82818337600083830152505050565b6000611cf3611cee84611ca0565b611c85565b905082815260208101848484011115611d0f57611d0e611c20565b5b611d1a848285611cd1565b509392505050565b600082601f830112611d3757611d36611c1b565b5b8135611d47848260208601611ce0565b91505092915050565b60008060008060808587031215611d6a57611d6961185a565b5b6000611d7887828801611ab0565b9450506020611d8987828801611ab0565b9350506040611d9a878288016119fb565b925050606085013567ffffffffffffffff811115611dbb57611dba61185f565b5b611dc787828801611d22565b91505092959194509250565b600067ffffffffffffffff821115611dee57611ded611c25565b5b611df78261196e565b9050602081019050919050565b6000611e17611e1284611dd3565b611c85565b905082815260208101848484011115611e3357611e32611c20565b5b611e3e848285611cd1565b509392505050565b600082601f830112611e5b57611e5a611c1b565b5b8135611e6b848260208601611e04565b91505092915050565b600060208284031215611e8a57611e8961185a565b5b600082013567ffffffffffffffff811115611ea857611ea761185f565b5b611eb484828501611e46565b91505092915050565b60008060408385031215611ed457611ed361185a565b5b6000611ee285828601611ab0565b9250506020611ef385828601611ab0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f4457607f821691505b602082108103611f5757611f56611efd565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611fb9602c8361192a565b9150611fc482611f5d565b604082019050919050565b60006020820190508181036000830152611fe881611fac565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b600061204b60218361192a565b915061205682611fef565b604082019050919050565b6000602082019050818103600083015261207a8161203e565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b60006120dd60388361192a565b91506120e882612081565b604082019050919050565b6000602082019050818103600083015261210c816120d0565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061216f60318361192a565b915061217a82612113565b604082019050919050565b6000602082019050818103600083015261219e81612162565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061220160298361192a565b915061220c826121a5565b604082019050919050565b60006020820190508181036000830152612230816121f4565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000612293602a8361192a565b915061229e82612237565b604082019050919050565b600060208201905081810360008301526122c281612286565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b600061232560318361192a565b9150612330826122c9565b604082019050919050565b6000602082019050818103600083015261235481612318565b9050919050565b600081905092915050565b60006123718261191f565b61237b818561235b565b935061238b81856020860161193b565b80840191505092915050565b60006123a38285612366565b91506123af8284612366565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612417602c8361192a565b9150612422826123bb565b604082019050919050565b600060208201905081810360008301526124468161240a565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b60006124a960298361192a565b91506124b48261244d565b604082019050919050565b600060208201905081810360008301526124d88161249c565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061253b60248361192a565b9150612546826124df565b604082019050919050565b6000602082019050818103600083015261256a8161252e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125ab826119da565b91506125b6836119da565b9250828210156125c9576125c8612571565b5b828203905092915050565b60006125df826119da565b91506125ea836119da565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561261f5761261e612571565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061266060198361192a565b915061266b8261262a565b602082019050919050565b6000602082019050818103600083015261268f81612653565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006126f260328361192a565b91506126fd82612696565b604082019050919050565b60006020820190508181036000830152612721816126e5565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000612784602f8361192a565b915061278f82612728565b604082019050919050565b600060208201905081810360008301526127b381612777565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612816602e8361192a565b9150612821826127ba565b604082019050919050565b6000602082019050818103600083015261284581612809565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026128ae7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612871565b6128b88683612871565b95508019841693508086168417925050509392505050565b6000819050919050565b60006128f56128f06128eb846119da565b6128d0565b6119da565b9050919050565b6000819050919050565b61290f836128da565b61292361291b826128fc565b84845461287e565b825550505050565b600090565b61293861292b565b612943818484612906565b505050565b5b818110156129675761295c600082612930565b600181019050612949565b5050565b601f8211156129ac5761297d8161284c565b61298684612861565b81016020851015612995578190505b6129a96129a185612861565b830182612948565b50505b505050565b600082821c905092915050565b60006129cf600019846008026129b1565b1980831691505092915050565b60006129e883836129be565b9150826002028217905092915050565b612a018261191f565b67ffffffffffffffff811115612a1a57612a19611c25565b5b612a248254611f2c565b612a2f82828561296b565b600060209050601f831160018114612a625760008415612a50578287015190505b612a5a85826129dc565b865550612ac2565b601f198416612a708661284c565b60005b82811015612a9857848901518255600182019150602085019450602081019050612a73565b86831015612ab55784890151612ab1601f8916826129be565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b6000612af182612aca565b612afb8185612ad5565b9350612b0b81856020860161193b565b612b148161196e565b840191505092915050565b6000608082019050612b346000830187611a6f565b612b416020830186611a6f565b612b4e6040830185611b85565b8181036060830152612b608184612ae6565b905095945050505050565b600081519050612b7a81611890565b92915050565b600060208284031215612b9657612b9561185a565b5b6000612ba484828501612b6b565b91505092915050565b6000612bb8826119da565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612bea57612be9612571565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612c2f826119da565b9150612c3a836119da565b925082612c4a57612c49612bf5565b5b828204905092915050565b6000612c60826119da565b9150612c6b836119da565b925082612c7b57612c7a612bf5565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612ceb60208361192a565b9150612cf682612cb5565b602082019050919050565b60006020820190508181036000830152612d1a81612cde565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612d57601c8361192a565b9150612d6282612d21565b602082019050919050565b60006020820190508181036000830152612d8681612d4a565b905091905056fea264697066735822122067223937ffe6436b4c18e03e6d30f2dd29c31e6f2d44161cc286eba21c652d3764736f6c634300080f0033")
}