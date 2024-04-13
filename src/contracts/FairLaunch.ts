export default {
  abi: [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_amountPerUnits",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalSupply",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_mintLimit",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_luncher",
          type: "address",
        },
        {
          internalType: "address",
          name: "_uniswapRouter",
          type: "address",
        },
        {
          internalType: "address",
          name: "_uniswapFactory",
          type: "address",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_symbol",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [],
      name: "ReentrancyGuardReentrantCall",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
      ],
      name: "FairMinted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "ethAmount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "liquidity",
          type: "uint256",
        },
      ],
      name: "LunchEvent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "bnb",
          type: "uint256",
        },
      ],
      name: "RefundEvent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "amountPerUnits",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "launcher",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "mintLimit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minted",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "price",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "started",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "uniswapFactory",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "uniswapRouter",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ] as const,
  input: {
    language: "Solidity",
    sources: {
      "contracts/fair-launch-uniswap-v2.sol": {
        content:
          '// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.19;\r\n\r\nimport "./support/IERC20.sol";\r\nimport "./support/SafeERC20.sol";\r\nimport "./support/ERC20.sol";\r\nimport "./support/utils/ReentrancyGuard.sol";\r\n\r\ninterface IUniswapV2Router01 {\r\n    function WETH() external pure returns (address);\r\n\r\n    function addLiquidityETH(\r\n        address token,\r\n        uint amountTokenDesired,\r\n        uint amountTokenMin,\r\n        uint amountETHMin,\r\n        address to,\r\n        uint deadline\r\n    )\r\n        external\r\n        payable\r\n        returns (uint amountToken, uint amountETH, uint liquidity);\r\n}\r\n\r\ninterface IUniswapV2Factory {\r\n    function getPair(\r\n        address tokenA,\r\n        address tokenB\r\n    ) external view returns (address pair);\r\n    function createPair(\r\n        address tokenA,\r\n        address tokenB\r\n    ) external returns (address pair);\r\n}\r\n\r\ncontract FairLaunchToken is ERC20, ReentrancyGuard {\r\n    using SafeERC20 for IERC20;\r\n\r\n    uint256 public price;\r\n    uint256 public amountPerUnits;\r\n\r\n    uint256 public mintLimit;\r\n    uint256 public minted;\r\n\r\n    bool public started;\r\n    address public launcher;\r\n\r\n    address public uniswapRouter;\r\n    address public uniswapFactory;\r\n\r\n    event FairMinted(address indexed to, uint256 amount, uint256 ethAmount);\r\n\r\n    event LunchEvent(\r\n        address indexed to,\r\n        uint256 amount,\r\n        uint256 ethAmount,\r\n        uint256 liquidity\r\n    );\r\n\r\n    event RefundEvent(address indexed from, uint256 amount, uint256 bnb);\r\n\r\n    constructor(\r\n        uint256 _price,\r\n        uint256 _amountPerUnits,\r\n        uint256 totalSupply,\r\n        uint256 _mintLimit,\r\n        address _luncher,\r\n        address _uniswapRouter,\r\n        address _uniswapFactory,\r\n        string memory _name,\r\n        string memory _symbol\r\n    ) ERC20(_name, _symbol) {\r\n        price = _price;\r\n        amountPerUnits = _amountPerUnits;\r\n        started = false;\r\n        _mint(address(this), totalSupply);\r\n        // 50% of total supply for mint\r\n        mintLimit = (totalSupply) * _mintLimit / 10000;\r\n        // set luncher\r\n        launcher = _luncher;\r\n        // set uniswap router\r\n        uniswapRouter = _uniswapRouter;\r\n        uniswapFactory = _uniswapFactory;\r\n    }\r\n\r\n    receive() external payable {\r\n        if (msg.value == 0.0005 ether && !started) {\r\n            if (minted == mintLimit) {\r\n                start();\r\n            } else {\r\n                require(\r\n                    msg.sender == launcher,\r\n                    "FairMint: only launcher can start"\r\n                );\r\n                start();\r\n            }\r\n        } else {\r\n            mint();\r\n        }\r\n    }\r\n\r\n    function mint() virtual internal nonReentrant {\r\n        require(msg.value >= price, "FairMint: value not match");\r\n        require(!_isContract(msg.sender), "FairMint: can not mint to contract");\r\n        require(msg.sender == tx.origin, "FairMint: can not mint to contract.");\r\n        // not start\r\n        require(!started, "FairMint: already started");\r\n\r\n        uint256 units = msg.value / price;\r\n        uint256 realCost = units * price;\r\n        uint256 refund = msg.value - realCost;\r\n\r\n        require(\r\n            minted + units * amountPerUnits <= mintLimit,\r\n            "FairMint: exceed max supply"\r\n        );\r\n\r\n        _transfer(address(this), msg.sender, units * amountPerUnits);\r\n        minted += units * amountPerUnits;\r\n\r\n        emit FairMinted(msg.sender, units * amountPerUnits, realCost);\r\n\r\n        if (refund > 0) {\r\n            payable(msg.sender).transfer(refund);\r\n        }\r\n    }\r\n\r\n    function start() internal {\r\n        require(!started, "FairMint: already started");\r\n        address _weth = IUniswapV2Router01(uniswapRouter).WETH();\r\n        address _pair = IUniswapV2Factory(uniswapFactory).getPair(\r\n            address(this),\r\n            _weth\r\n        );\r\n\r\n        if (_pair == address(0)) {\r\n            _pair = IUniswapV2Factory(uniswapFactory).createPair(\r\n                address(this),\r\n                _weth\r\n            );\r\n        }\r\n        _pair = IUniswapV2Factory(uniswapFactory).getPair(address(this), _weth);\r\n        // assert pair exists\r\n        assert(_pair != address(0));\r\n\r\n        // set started\r\n        started = true;\r\n\r\n        // add liquidity\r\n        IUniswapV2Router01 router = IUniswapV2Router01(uniswapRouter);\r\n        uint256 balance = balanceOf(address(this));\r\n        uint256 diff = balance - minted;\r\n        // burn diff\r\n        _burn(address(this), diff);\r\n        _approve(address(this), uniswapRouter, type(uint256).max);\r\n        // add liquidity\r\n        (uint256 tokenAmount, uint256 ethAmount, uint256 liquidity) = router\r\n            .addLiquidityETH{value: address(this).balance}(\r\n            address(this), // token\r\n            minted, // token desired\r\n            minted, // token min\r\n            address(this).balance, // eth min\r\n            address(this), // lp to\r\n            block.timestamp + 1 days // deadline\r\n        );\r\n\r\n        emit LunchEvent(address(this), tokenAmount, ethAmount, liquidity);\r\n    }\r\n\r\n    function _update(\r\n        address from,\r\n        address to,\r\n        uint256 value\r\n    ) internal override(ERC20) {\r\n        // if not started, only allow refund\r\n        if (!started) {\r\n            if (to == address(this) && from != address(0)) {\r\n                // refund deprecated\r\n            } else {\r\n                // if it is not refund operation, check and revert.\r\n                if (from != address(0) && from != address(this)) {\r\n                    // if it is not INIT action, revert. from address(0) means INIT action. from address(this) means mint action.\r\n                    revert("FairMint: all tokens are locked until launch.");\r\n                }\r\n            }\r\n        } else {\r\n            if (to == address(this) && from != address(0)) {\r\n                revert(\r\n                    "FairMint: You can not send token to contract after launched."\r\n                );\r\n            }\r\n        }\r\n        super._update(from, to, value);\r\n        if (to == address(this) && from != address(0)) {\r\n            _refund(from, value);\r\n        }\r\n    }\r\n\r\n    function _refund(address from, uint256 value) internal nonReentrant {\r\n        require(!started, "FairMint: already started");\r\n        require(!_isContract(from), "FairMint: can not refund to contract");\r\n        require(from == tx.origin, "FairMint: can not refund to contract.");\r\n        require(value >= amountPerUnits, "FairMint: value not match");\r\n        require(value % amountPerUnits == 0, "FairMint: value not match");\r\n\r\n        uint256 _bnb = (value / amountPerUnits) * price;\r\n        require(_bnb > 0, "FairMint: no refund");\r\n\r\n        minted -= value;\r\n        payable(from).transfer(_bnb);\r\n        emit RefundEvent(from, value, _bnb);\r\n    }\r\n\r\n    // is contract\r\n    function _isContract(address _addr) internal view returns (bool) {\r\n        uint32 size;\r\n        assembly {\r\n            size := extcodesize(_addr)\r\n        }\r\n        return (size > 0);\r\n    }\r\n}\r\n// powered by WRB\r\n// https://github.com/WhiteRiverBay/evm-fair-launch\r\n',
      },
      "contracts/support/utils/ReentrancyGuard.sol": {
        content:
          "// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v5.0.0) (utils/ReentrancyGuard.sol)\r\n\r\npragma solidity ^0.8.19;\r\n\r\n/**\r\n * @dev Contract module that helps prevent reentrant calls to a function.\r\n *\r\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\r\n * available, which can be applied to functions to make sure there are no nested\r\n * (reentrant) calls to them.\r\n *\r\n * Note that because there is a single `nonReentrant` guard, functions marked as\r\n * `nonReentrant` may not call one another. This can be worked around by making\r\n * those functions `private`, and then adding `external` `nonReentrant` entry\r\n * points to them.\r\n *\r\n * TIP: If you would like to learn more about reentrancy and alternative ways\r\n * to protect against it, check out our blog post\r\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\r\n */\r\nabstract contract ReentrancyGuard {\r\n    // Booleans are more expensive than uint256 or any type that takes up a full\r\n    // word because each write operation emits an extra SLOAD to first read the\r\n    // slot's contents, replace the bits taken up by the boolean, and then write\r\n    // back. This is the compiler's defense against contract upgrades and\r\n    // pointer aliasing, and it cannot be disabled.\r\n\r\n    // The values being non-zero value makes deployment a bit more expensive,\r\n    // but in exchange the refund on every call to nonReentrant will be lower in\r\n    // amount. Since refunds are capped to a percentage of the total\r\n    // transaction's gas, it is best to keep them low in cases like this one, to\r\n    // increase the likelihood of the full refund coming into effect.\r\n    uint256 private constant NOT_ENTERED = 1;\r\n    uint256 private constant ENTERED = 2;\r\n\r\n    uint256 private _status;\r\n\r\n    /**\r\n     * @dev Unauthorized reentrant call.\r\n     */\r\n    error ReentrancyGuardReentrantCall();\r\n\r\n    constructor() {\r\n        _status = NOT_ENTERED;\r\n    }\r\n\r\n    /**\r\n     * @dev Prevents a contract from calling itself, directly or indirectly.\r\n     * Calling a `nonReentrant` function from another `nonReentrant`\r\n     * function is not supported. It is possible to prevent this from happening\r\n     * by making the `nonReentrant` function external, and making it call a\r\n     * `private` function that does the actual work.\r\n     */\r\n    modifier nonReentrant() {\r\n        _nonReentrantBefore();\r\n        _;\r\n        _nonReentrantAfter();\r\n    }\r\n\r\n    function _nonReentrantBefore() private {\r\n        // On the first call to nonReentrant, _status will be NOT_ENTERED\r\n        if (_status == ENTERED) {\r\n            revert ReentrancyGuardReentrantCall();\r\n        }\r\n\r\n        // Any calls to nonReentrant after this point will fail\r\n        _status = ENTERED;\r\n    }\r\n\r\n    function _nonReentrantAfter() private {\r\n        // By storing the original value once again, a refund is triggered (see\r\n        // https://eips.ethereum.org/EIPS/eip-2200)\r\n        _status = NOT_ENTERED;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\r\n     * `nonReentrant` function in the call stack.\r\n     */\r\n    function _reentrancyGuardEntered() internal view returns (bool) {\r\n        return _status == ENTERED;\r\n    }\r\n}",
      },
      "contracts/support/ERC20.sol": {
        content:
          '// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)\r\n\r\npragma solidity ^0.8.19;\r\n\r\nimport {IERC20} from "./IERC20.sol";\r\nimport {IERC20Metadata} from "./IERC20Metadata.sol";\r\nimport {Context} from "./utils/Context.sol";\r\nimport {IERC20Errors} from "./interfaces/draft-IERC6093.sol";\r\n\r\n/**\r\n * @dev Implementation of the {IERC20} interface.\r\n *\r\n * This implementation is agnostic to the way tokens are created. This means\r\n * that a supply mechanism has to be added in a derived contract using {_mint}.\r\n *\r\n * TIP: For a detailed writeup see our guide\r\n * https://forum.openzeppelin.com/t/how-to-implement-erc20-supply-mechanisms/226[How\r\n * to implement supply mechanisms].\r\n *\r\n * The default value of {decimals} is 18. To change this, you should override\r\n * this function so it returns a different value.\r\n *\r\n * We have followed general OpenZeppelin Contracts guidelines: functions revert\r\n * instead returning `false` on failure. This behavior is nonetheless\r\n * conventional and does not conflict with the expectations of ERC-20\r\n * applications.\r\n *\r\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\r\n * This allows applications to reconstruct the allowance for all accounts just\r\n * by listening to said events. Other implementations of the ERC may not emit\r\n * these events, as it isn\'t required by the specification.\r\n */\r\nabstract contract ERC20 is Context, IERC20, IERC20Metadata, IERC20Errors {\r\n    mapping(address account => uint256) private _balances;\r\n\r\n    mapping(address account => mapping(address spender => uint256)) private _allowances;\r\n\r\n    uint256 private _totalSupply;\r\n\r\n    string private _name;\r\n    string private _symbol;\r\n\r\n    /**\r\n     * @dev Sets the values for {name} and {symbol}.\r\n     *\r\n     * All two of these values are immutable: they can only be set once during\r\n     * construction.\r\n     */\r\n    constructor(string memory name_, string memory symbol_) {\r\n        _name = name_;\r\n        _symbol = symbol_;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the name of the token.\r\n     */\r\n    function name() public view virtual returns (string memory) {\r\n        return _name;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the symbol of the token, usually a shorter version of the\r\n     * name.\r\n     */\r\n    function symbol() public view virtual returns (string memory) {\r\n        return _symbol;\r\n    }\r\n\r\n    /**\r\n     * @dev Returns the number of decimals used to get its user representation.\r\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\r\n     * be displayed to a user as `5.05` (`505 / 10 ** 2`).\r\n     *\r\n     * Tokens usually opt for a value of 18, imitating the relationship between\r\n     * Ether and Wei. This is the default value returned by this function, unless\r\n     * it\'s overridden.\r\n     *\r\n     * NOTE: This information is only used for _display_ purposes: it in\r\n     * no way affects any of the arithmetic of the contract, including\r\n     * {IERC20-balanceOf} and {IERC20-transfer}.\r\n     */\r\n    function decimals() public view virtual override(IERC20Metadata, IERC20) returns (uint8) {\r\n        return 18;\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-totalSupply}.\r\n     */\r\n    function totalSupply() public view virtual returns (uint256) {\r\n        return _totalSupply;\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-balanceOf}.\r\n     */\r\n    function balanceOf(address account) public view virtual returns (uint256) {\r\n        return _balances[account];\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-transfer}.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `to` cannot be the zero address.\r\n     * - the caller must have a balance of at least `value`.\r\n     */\r\n    function transfer(address to, uint256 value) public virtual returns (bool) {\r\n        address owner = _msgSender();\r\n        _transfer(owner, to, value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-allowance}.\r\n     */\r\n    function allowance(address owner, address spender) public view virtual returns (uint256) {\r\n        return _allowances[owner][spender];\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-approve}.\r\n     *\r\n     * NOTE: If `value` is the maximum `uint256`, the allowance is not updated on\r\n     * `transferFrom`. This is semantically equivalent to an infinite approval.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `spender` cannot be the zero address.\r\n     */\r\n    function approve(address spender, uint256 value) public virtual returns (bool) {\r\n        address owner = _msgSender();\r\n        _approve(owner, spender, value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * @dev See {IERC20-transferFrom}.\r\n     *\r\n     * Emits an {Approval} event indicating the updated allowance. This is not\r\n     * required by the ERC. See the note at the beginning of {ERC20}.\r\n     *\r\n     * NOTE: Does not update the allowance if the current allowance\r\n     * is the maximum `uint256`.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `from` and `to` cannot be the zero address.\r\n     * - `from` must have a balance of at least `value`.\r\n     * - the caller must have allowance for ``from``\'s tokens of at least\r\n     * `value`.\r\n     */\r\n    function transferFrom(address from, address to, uint256 value) public virtual returns (bool) {\r\n        address spender = _msgSender();\r\n        _spendAllowance(from, spender, value);\r\n        _transfer(from, to, value);\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * @dev Moves a `value` amount of tokens from `from` to `to`.\r\n     *\r\n     * This internal function is equivalent to {transfer}, and can be used to\r\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     *\r\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\r\n     */\r\n    function _transfer(address from, address to, uint256 value) internal {\r\n        if (from == address(0)) {\r\n            revert ERC20InvalidSender(address(0));\r\n        }\r\n        if (to == address(0)) {\r\n            revert ERC20InvalidReceiver(address(0));\r\n        }\r\n        _update(from, to, value);\r\n    }\r\n\r\n    /**\r\n     * @dev Transfers a `value` amount of tokens from `from` to `to`, or alternatively mints (or burns) if `from`\r\n     * (or `to`) is the zero address. All customizations to transfers, mints, and burns should be done by overriding\r\n     * this function.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     */\r\n    function _update(address from, address to, uint256 value) internal virtual {\r\n        if (from == address(0)) {\r\n            // Overflow check required: The rest of the code assumes that totalSupply never overflows\r\n            _totalSupply += value;\r\n        } else {\r\n            uint256 fromBalance = _balances[from];\r\n            if (fromBalance < value) {\r\n                revert ERC20InsufficientBalance(from, fromBalance, value);\r\n            }\r\n            unchecked {\r\n                // Overflow not possible: value <= fromBalance <= totalSupply.\r\n                _balances[from] = fromBalance - value;\r\n            }\r\n        }\r\n\r\n        if (to == address(0)) {\r\n            unchecked {\r\n                // Overflow not possible: value <= totalSupply or value <= fromBalance <= totalSupply.\r\n                _totalSupply -= value;\r\n            }\r\n        } else {\r\n            unchecked {\r\n                // Overflow not possible: balance + value is at most totalSupply, which we know fits into a uint256.\r\n                _balances[to] += value;\r\n            }\r\n        }\r\n\r\n        emit Transfer(from, to, value);\r\n    }\r\n\r\n    /**\r\n     * @dev Creates a `value` amount of tokens and assigns them to `account`, by transferring it from address(0).\r\n     * Relies on the `_update` mechanism\r\n     *\r\n     * Emits a {Transfer} event with `from` set to the zero address.\r\n     *\r\n     * NOTE: This function is not virtual, {_update} should be overridden instead.\r\n     */\r\n    function _mint(address account, uint256 value) internal {\r\n        if (account == address(0)) {\r\n            revert ERC20InvalidReceiver(address(0));\r\n        }\r\n        _update(address(0), account, value);\r\n    }\r\n\r\n    /**\r\n     * @dev Destroys a `value` amount of tokens from `account`, lowering the total supply.\r\n     * Relies on the `_update` mechanism.\r\n     *\r\n     * Emits a {Transfer} event with `to` set to the zero address.\r\n     *\r\n     * NOTE: This function is not virtual, {_update} should be overridden instead\r\n     */\r\n    function _burn(address account, uint256 value) internal {\r\n        if (account == address(0)) {\r\n            revert ERC20InvalidSender(address(0));\r\n        }\r\n        _update(account, address(0), value);\r\n    }\r\n\r\n    /**\r\n     * @dev Sets `value` as the allowance of `spender` over the `owner` s tokens.\r\n     *\r\n     * This internal function is equivalent to `approve`, and can be used to\r\n     * e.g. set automatic allowances for certain subsystems, etc.\r\n     *\r\n     * Emits an {Approval} event.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `owner` cannot be the zero address.\r\n     * - `spender` cannot be the zero address.\r\n     *\r\n     * Overrides to this logic should be done to the variant with an additional `bool emitEvent` argument.\r\n     */\r\n    function _approve(address owner, address spender, uint256 value) internal {\r\n        _approve(owner, spender, value, true);\r\n    }\r\n\r\n    /**\r\n     * @dev Variant of {_approve} with an optional flag to enable or disable the {Approval} event.\r\n     *\r\n     * By default (when calling {_approve}) the flag is set to true. On the other hand, approval changes made by\r\n     * `_spendAllowance` during the `transferFrom` operation set the flag to false. This saves gas by not emitting any\r\n     * `Approval` event during `transferFrom` operations.\r\n     *\r\n     * Anyone who wishes to continue emitting `Approval` events on the`transferFrom` operation can force the flag to\r\n     * true using the following override:\r\n     * ```\r\n     * function _approve(address owner, address spender, uint256 value, bool) internal virtual override {\r\n     *     super._approve(owner, spender, value, true);\r\n     * }\r\n     * ```\r\n     *\r\n     * Requirements are the same as {_approve}.\r\n     */\r\n    function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual {\r\n        if (owner == address(0)) {\r\n            revert ERC20InvalidApprover(address(0));\r\n        }\r\n        if (spender == address(0)) {\r\n            revert ERC20InvalidSpender(address(0));\r\n        }\r\n        _allowances[owner][spender] = value;\r\n        if (emitEvent) {\r\n            emit Approval(owner, spender, value);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @dev Updates `owner` s allowance for `spender` based on spent `value`.\r\n     *\r\n     * Does not update the allowance value in case of infinite allowance.\r\n     * Revert if not enough allowance is available.\r\n     *\r\n     * Does not emit an {Approval} event.\r\n     */\r\n    function _spendAllowance(address owner, address spender, uint256 value) internal virtual {\r\n        uint256 currentAllowance = allowance(owner, spender);\r\n        if (currentAllowance != type(uint256).max) {\r\n            if (currentAllowance < value) {\r\n                revert ERC20InsufficientAllowance(spender, currentAllowance, value);\r\n            }\r\n            unchecked {\r\n                _approve(owner, spender, currentAllowance - value, false);\r\n            }\r\n        }\r\n    }\r\n}',
      },
      "contracts/support/SafeERC20.sol": {
        content:
          '// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v4.8.0) (token/ERC20/utils/SafeERC20.sol)\r\n\r\npragma solidity ^0.8.0;\r\n\r\nimport "./IERC20.sol";\r\nimport "./IERC20Permit.sol";\r\nimport "./Address.sol";\r\n\r\n/**\r\n * @title SafeERC20\r\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\r\n * contract returns false). Tokens that return no value (and instead revert or\r\n * throw on failure) are also supported, non-reverting calls are assumed to be\r\n * successful.\r\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\r\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\r\n */\r\nlibrary SafeERC20 {\r\n    using Address for address;\r\n\r\n    /**\r\n     * @dev Transfer `value` amount of `token` from the calling contract to `to`. If `token` returns no value,\r\n     * non-reverting calls are assumed to be successful.\r\n     */\r\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\r\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\r\n    }\r\n\r\n    /**\r\n     * @dev Transfer `value` amount of `token` from `from` to `to`, spending the approval given by `from` to the\r\n     * calling contract. If `token` returns no value, non-reverting calls are assumed to be successful.\r\n     */\r\n    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\r\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\r\n    }\r\n\r\n    /**\r\n     * @dev Deprecated. This function has issues similar to the ones found in\r\n     * {IERC20-approve}, and its usage is discouraged.\r\n     *\r\n     * Whenever possible, use {safeIncreaseAllowance} and\r\n     * {safeDecreaseAllowance} instead.\r\n     */\r\n    function safeApprove(IERC20 token, address spender, uint256 value) internal {\r\n        // safeApprove should only be called when setting an initial allowance,\r\n        // or when resetting it to zero. To increase and decrease it, use\r\n        // \'safeIncreaseAllowance\' and \'safeDecreaseAllowance\'\r\n        require(\r\n            (value == 0) || (token.allowance(address(this), spender) == 0),\r\n            "SafeERC20: approve from non-zero to non-zero allowance"\r\n        );\r\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\r\n    }\r\n\r\n    /**\r\n     * @dev Increase the calling contract\'s allowance toward `spender` by `value`. If `token` returns no value,\r\n     * non-reverting calls are assumed to be successful.\r\n     */\r\n    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\r\n        uint256 oldAllowance = token.allowance(address(this), spender);\r\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, oldAllowance + value));\r\n    }\r\n\r\n    /**\r\n     * @dev Decrease the calling contract\'s allowance toward `spender` by `value`. If `token` returns no value,\r\n     * non-reverting calls are assumed to be successful.\r\n     */\r\n    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {\r\n        unchecked {\r\n            uint256 oldAllowance = token.allowance(address(this), spender);\r\n            require(oldAllowance >= value, "SafeERC20: decreased allowance below zero");\r\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, oldAllowance - value));\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @dev Set the calling contract\'s allowance toward `spender` to `value`. If `token` returns no value,\r\n     * non-reverting calls are assumed to be successful. Compatible with tokens that require the approval to be set to\r\n     * 0 before setting it to a non-zero value.\r\n     */\r\n    function forceApprove(IERC20 token, address spender, uint256 value) internal {\r\n        bytes memory approvalCall = abi.encodeWithSelector(token.approve.selector, spender, value);\r\n\r\n        if (!_callOptionalReturnBool(token, approvalCall)) {\r\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, 0));\r\n            _callOptionalReturn(token, approvalCall);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @dev Use a ERC-2612 signature to set the `owner` approval toward `spender` on `token`.\r\n     * Revert on invalid signature.\r\n     */\r\n    function safePermit(\r\n        IERC20Permit token,\r\n        address owner,\r\n        address spender,\r\n        uint256 value,\r\n        uint256 deadline,\r\n        uint8 v,\r\n        bytes32 r,\r\n        bytes32 s\r\n    ) internal {\r\n        uint256 nonceBefore = token.nonces(owner);\r\n        token.permit(owner, spender, value, deadline, v, r, s);\r\n        uint256 nonceAfter = token.nonces(owner);\r\n        require(nonceAfter == nonceBefore + 1, "SafeERC20: permit did not succeed");\r\n    }\r\n\r\n    /**\r\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\r\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\r\n     * @param token The token targeted by the call.\r\n     * @param data The call data (encoded using abi.encode or one of its variants).\r\n     */\r\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\r\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\r\n        // we\'re implementing it ourselves. We use {Address-functionCall} to perform this call, which verifies that\r\n        // the target address contains contract code and also asserts for success in the low-level call.\r\n\r\n        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");\r\n        require(returndata.length == 0 || abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");\r\n    }\r\n\r\n    /**\r\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\r\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\r\n     * @param token The token targeted by the call.\r\n     * @param data The call data (encoded using abi.encode or one of its variants).\r\n     *\r\n     * This is a variant of {_callOptionalReturn} that silents catches all reverts and returns a bool instead.\r\n     */\r\n    function _callOptionalReturnBool(IERC20 token, bytes memory data) private returns (bool) {\r\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\r\n        // we\'re implementing it ourselves. We cannot use {Address-functionCall} here since this should return false\r\n        // and not revert is the subcall reverts.\r\n\r\n        (bool success, bytes memory returndata) = address(token).call(data);\r\n        return\r\n            success && (returndata.length == 0 || abi.decode(returndata, (bool))) && Address.isContract(address(token));\r\n    }\r\n}',
      },
      "contracts/support/IERC20.sol": {
        content:
          "// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)\r\n\r\npragma solidity ^0.8.0;\r\n\r\n/**\r\n * @dev Interface of the ERC20 standard as defined in the EIP.\r\n */\r\ninterface IERC20 {\r\n    /**\r\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\r\n     * another (`to`).\r\n     *\r\n     * Note that `value` may be zero.\r\n     */\r\n    event Transfer(address indexed from, address indexed to, uint256 value);\r\n\r\n    /**\r\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\r\n     * a call to {approve}. `value` is the new allowance.\r\n     */\r\n    event Approval(address indexed owner, address indexed spender, uint256 value);\r\n\r\n    /**\r\n     * @dev Returns the amount of tokens in existence.\r\n     */\r\n    function totalSupply() external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Returns the amount of tokens owned by `account`.\r\n     */\r\n    function balanceOf(address account) external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Moves `amount` tokens from the caller's account to `to`.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     */\r\n    function transfer(address to, uint256 amount) external returns (bool);\r\n\r\n    /**\r\n     * @dev Returns the remaining number of tokens that `spender` will be\r\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\r\n     * zero by default.\r\n     *\r\n     * This value changes when {approve} or {transferFrom} are called.\r\n     */\r\n    function allowance(address owner, address spender) external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\r\n     * that someone may use both the old and the new allowance by unfortunate\r\n     * transaction ordering. One possible solution to mitigate this race\r\n     * condition is to first reduce the spender's allowance to 0 and set the\r\n     * desired value afterwards:\r\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\r\n     *\r\n     * Emits an {Approval} event.\r\n     */\r\n    function approve(address spender, uint256 amount) external returns (bool);\r\n\r\n    /**\r\n     * @dev Moves `amount` tokens from `from` to `to` using the\r\n     * allowance mechanism. `amount` is then deducted from the caller's\r\n     * allowance.\r\n     *\r\n     * Returns a boolean value indicating whether the operation succeeded.\r\n     *\r\n     * Emits a {Transfer} event.\r\n     */\r\n    function transferFrom(address from, address to, uint256 amount) external returns (bool);\r\n\r\n    function decimals() external view returns (uint8);\r\n}",
      },
      "contracts/support/Address.sol": {
        content:
          '// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/Address.sol)\r\n\r\npragma solidity ^0.8.1;\r\n\r\n/**\r\n * @dev Collection of functions related to the address type\r\n */\r\nlibrary Address {\r\n    /**\r\n     * @dev Returns true if `account` is a contract.\r\n     *\r\n     * [IMPORTANT]\r\n     * ====\r\n     * It is unsafe to assume that an address for which this function returns\r\n     * false is an externally-owned account (EOA) and not a contract.\r\n     *\r\n     * Among others, `isContract` will return false for the following\r\n     * types of addresses:\r\n     *\r\n     *  - an externally-owned account\r\n     *  - a contract in construction\r\n     *  - an address where a contract will be created\r\n     *  - an address where a contract lived, but was destroyed\r\n     *\r\n     * Furthermore, `isContract` will also return true if the target contract within\r\n     * the same transaction is already scheduled for destruction by `SELFDESTRUCT`,\r\n     * which only has an effect at the end of a transaction.\r\n     * ====\r\n     *\r\n     * [IMPORTANT]\r\n     * ====\r\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\r\n     *\r\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\r\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\r\n     * constructor.\r\n     * ====\r\n     */\r\n    function isContract(address account) internal view returns (bool) {\r\n        // This method relies on extcodesize/address.code.length, which returns 0\r\n        // for contracts in construction, since the code is only stored at the end\r\n        // of the constructor execution.\r\n\r\n        return account.code.length > 0;\r\n    }\r\n\r\n    /**\r\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\r\n     * `recipient`, forwarding all available gas and reverting on errors.\r\n     *\r\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\r\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\r\n     * imposed by `transfer`, making them unable to receive funds via\r\n     * `transfer`. {sendValue} removes this limitation.\r\n     *\r\n     * https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/[Learn more].\r\n     *\r\n     * IMPORTANT: because control is transferred to `recipient`, care must be\r\n     * taken to not create reentrancy vulnerabilities. Consider using\r\n     * {ReentrancyGuard} or the\r\n     * https://solidity.readthedocs.io/en/v0.8.0/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\r\n     */\r\n    function sendValue(address payable recipient, uint256 amount) internal {\r\n        require(address(this).balance >= amount, "Address: insufficient balance");\r\n\r\n        (bool success, ) = recipient.call{value: amount}("");\r\n        require(success, "Address: unable to send value, recipient may have reverted");\r\n    }\r\n\r\n    /**\r\n     * @dev Performs a Solidity function call using a low level `call`. A\r\n     * plain `call` is an unsafe replacement for a function call: use this\r\n     * function instead.\r\n     *\r\n     * If `target` reverts with a revert reason, it is bubbled up by this\r\n     * function (like regular Solidity function calls).\r\n     *\r\n     * Returns the raw returned data. To convert to the expected return value,\r\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `target` must be a contract.\r\n     * - calling `target` with `data` must not revert.\r\n     *\r\n     * _Available since v3.1._\r\n     */\r\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\r\n        return functionCallWithValue(target, data, 0, "Address: low-level call failed");\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\r\n     * `errorMessage` as a fallback revert reason when `target` reverts.\r\n     *\r\n     * _Available since v3.1._\r\n     */\r\n    function functionCall(\r\n        address target,\r\n        bytes memory data,\r\n        string memory errorMessage\r\n    ) internal returns (bytes memory) {\r\n        return functionCallWithValue(target, data, 0, errorMessage);\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n     * but also transferring `value` wei to `target`.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - the calling contract must have an ETH balance of at least `value`.\r\n     * - the called Solidity function must be `payable`.\r\n     *\r\n     * _Available since v3.1._\r\n     */\r\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\r\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\r\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\r\n     *\r\n     * _Available since v3.1._\r\n     */\r\n    function functionCallWithValue(\r\n        address target,\r\n        bytes memory data,\r\n        uint256 value,\r\n        string memory errorMessage\r\n    ) internal returns (bytes memory) {\r\n        require(address(this).balance >= value, "Address: insufficient balance for call");\r\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\r\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n     * but performing a static call.\r\n     *\r\n     * _Available since v3.3._\r\n     */\r\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\r\n        return functionStaticCall(target, data, "Address: low-level static call failed");\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\r\n     * but performing a static call.\r\n     *\r\n     * _Available since v3.3._\r\n     */\r\n    function functionStaticCall(\r\n        address target,\r\n        bytes memory data,\r\n        string memory errorMessage\r\n    ) internal view returns (bytes memory) {\r\n        (bool success, bytes memory returndata) = target.staticcall(data);\r\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\r\n     * but performing a delegate call.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\r\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\r\n    }\r\n\r\n    /**\r\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\r\n     * but performing a delegate call.\r\n     *\r\n     * _Available since v3.4._\r\n     */\r\n    function functionDelegateCall(\r\n        address target,\r\n        bytes memory data,\r\n        string memory errorMessage\r\n    ) internal returns (bytes memory) {\r\n        (bool success, bytes memory returndata) = target.delegatecall(data);\r\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\r\n    }\r\n\r\n    /**\r\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\r\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\r\n     *\r\n     * _Available since v4.8._\r\n     */\r\n    function verifyCallResultFromTarget(\r\n        address target,\r\n        bool success,\r\n        bytes memory returndata,\r\n        string memory errorMessage\r\n    ) internal view returns (bytes memory) {\r\n        if (success) {\r\n            if (returndata.length == 0) {\r\n                // only check isContract if the call was successful and the return data is empty\r\n                // otherwise we already know that it was a contract\r\n                require(isContract(target), "Address: call to non-contract");\r\n            }\r\n            return returndata;\r\n        } else {\r\n            _revert(returndata, errorMessage);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn\'t, either by bubbling the\r\n     * revert reason or using the provided one.\r\n     *\r\n     * _Available since v4.3._\r\n     */\r\n    function verifyCallResult(\r\n        bool success,\r\n        bytes memory returndata,\r\n        string memory errorMessage\r\n    ) internal pure returns (bytes memory) {\r\n        if (success) {\r\n            return returndata;\r\n        } else {\r\n            _revert(returndata, errorMessage);\r\n        }\r\n    }\r\n\r\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\r\n        // Look for revert reason and bubble it up if present\r\n        if (returndata.length > 0) {\r\n            // The easiest way to bubble the revert reason is using memory via assembly\r\n            /// @solidity memory-safe-assembly\r\n            assembly {\r\n                let returndata_size := mload(returndata)\r\n                revert(add(32, returndata), returndata_size)\r\n            }\r\n        } else {\r\n            revert(errorMessage);\r\n        }\r\n    }\r\n}',
      },
      "contracts/support/IERC20Permit.sol": {
        content:
          "// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/IERC20Permit.sol)\r\n\r\npragma solidity ^0.8.0;\r\n\r\n/**\r\n * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\r\n * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\r\n *\r\n * Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\r\n * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\r\n * need to send a transaction, and thus is not required to hold Ether at all.\r\n */\r\ninterface IERC20Permit {\r\n    /**\r\n     * @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\r\n     * given ``owner``'s signed approval.\r\n     *\r\n     * IMPORTANT: The same issues {IERC20-approve} has related to transaction\r\n     * ordering also apply here.\r\n     *\r\n     * Emits an {Approval} event.\r\n     *\r\n     * Requirements:\r\n     *\r\n     * - `spender` cannot be the zero address.\r\n     * - `deadline` must be a timestamp in the future.\r\n     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\r\n     * over the EIP712-formatted function arguments.\r\n     * - the signature must use ``owner``'s current nonce (see {nonces}).\r\n     *\r\n     * For more information on the signature format, see the\r\n     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\r\n     * section].\r\n     */\r\n    function permit(\r\n        address owner,\r\n        address spender,\r\n        uint256 value,\r\n        uint256 deadline,\r\n        uint8 v,\r\n        bytes32 r,\r\n        bytes32 s\r\n    ) external;\r\n\r\n    /**\r\n     * @dev Returns the current nonce for `owner`. This value must be\r\n     * included whenever a signature is generated for {permit}.\r\n     *\r\n     * Every successful call to {permit} increases ``owner``'s nonce by one. This\r\n     * prevents a signature from being used multiple times.\r\n     */\r\n    function nonces(address owner) external view returns (uint256);\r\n\r\n    /**\r\n     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\r\n     */\r\n    // solhint-disable-next-line func-name-mixedcase\r\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\r\n}",
      },
      "contracts/support/interfaces/draft-IERC6093.sol": {
        content:
          "// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v5.0.0) (interfaces/draft-IERC6093.sol)\r\npragma solidity ^0.8.19;\r\n\r\n/**\r\n * @dev Standard ERC-20 Errors\r\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-20 tokens.\r\n */\r\ninterface IERC20Errors {\r\n    /**\r\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     * @param balance Current balance for the interacting account.\r\n     * @param needed Minimum amount required to perform a transfer.\r\n     */\r\n    error ERC20InsufficientBalance(address sender, uint256 balance, uint256 needed);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     */\r\n    error ERC20InvalidSender(address sender);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\r\n     * @param receiver Address to which tokens are being transferred.\r\n     */\r\n    error ERC20InvalidReceiver(address receiver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `spender`’s `allowance`. Used in transfers.\r\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\r\n     * @param allowance Amount of tokens a `spender` is allowed to operate with.\r\n     * @param needed Minimum amount required to perform a transfer.\r\n     */\r\n    error ERC20InsufficientAllowance(address spender, uint256 allowance, uint256 needed);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\r\n     * @param approver Address initiating an approval operation.\r\n     */\r\n    error ERC20InvalidApprover(address approver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `spender` to be approved. Used in approvals.\r\n     * @param spender Address that may be allowed to operate on tokens without being their owner.\r\n     */\r\n    error ERC20InvalidSpender(address spender);\r\n}\r\n\r\n/**\r\n * @dev Standard ERC-721 Errors\r\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-721 tokens.\r\n */\r\ninterface IERC721Errors {\r\n    /**\r\n     * @dev Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in ERC-20.\r\n     * Used in balance queries.\r\n     * @param owner Address of the current owner of a token.\r\n     */\r\n    error ERC721InvalidOwner(address owner);\r\n\r\n    /**\r\n     * @dev Indicates a `tokenId` whose `owner` is the zero address.\r\n     * @param tokenId Identifier number of a token.\r\n     */\r\n    error ERC721NonexistentToken(uint256 tokenId);\r\n\r\n    /**\r\n     * @dev Indicates an error related to the ownership over a particular token. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     * @param tokenId Identifier number of a token.\r\n     * @param owner Address of the current owner of a token.\r\n     */\r\n    error ERC721IncorrectOwner(address sender, uint256 tokenId, address owner);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     */\r\n    error ERC721InvalidSender(address sender);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\r\n     * @param receiver Address to which tokens are being transferred.\r\n     */\r\n    error ERC721InvalidReceiver(address receiver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.\r\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\r\n     * @param tokenId Identifier number of a token.\r\n     */\r\n    error ERC721InsufficientApproval(address operator, uint256 tokenId);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\r\n     * @param approver Address initiating an approval operation.\r\n     */\r\n    error ERC721InvalidApprover(address approver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\r\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\r\n     */\r\n    error ERC721InvalidOperator(address operator);\r\n}\r\n\r\n/**\r\n * @dev Standard ERC-1155 Errors\r\n * Interface of the https://eips.ethereum.org/EIPS/eip-6093[ERC-6093] custom errors for ERC-1155 tokens.\r\n */\r\ninterface IERC1155Errors {\r\n    /**\r\n     * @dev Indicates an error related to the current `balance` of a `sender`. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     * @param balance Current balance for the interacting account.\r\n     * @param needed Minimum amount required to perform a transfer.\r\n     * @param tokenId Identifier number of a token.\r\n     */\r\n    error ERC1155InsufficientBalance(address sender, uint256 balance, uint256 needed, uint256 tokenId);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `sender`. Used in transfers.\r\n     * @param sender Address whose tokens are being transferred.\r\n     */\r\n    error ERC1155InvalidSender(address sender);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the token `receiver`. Used in transfers.\r\n     * @param receiver Address to which tokens are being transferred.\r\n     */\r\n    error ERC1155InvalidReceiver(address receiver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `operator`’s approval. Used in transfers.\r\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\r\n     * @param owner Address of the current owner of a token.\r\n     */\r\n    error ERC1155MissingApprovalForAll(address operator, address owner);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `approver` of a token to be approved. Used in approvals.\r\n     * @param approver Address initiating an approval operation.\r\n     */\r\n    error ERC1155InvalidApprover(address approver);\r\n\r\n    /**\r\n     * @dev Indicates a failure with the `operator` to be approved. Used in approvals.\r\n     * @param operator Address that may be allowed to operate on tokens without being their owner.\r\n     */\r\n    error ERC1155InvalidOperator(address operator);\r\n\r\n    /**\r\n     * @dev Indicates an array length mismatch between ids and values in a safeBatchTransferFrom operation.\r\n     * Used in batch transfers.\r\n     * @param idsLength Length of the array of token identifiers\r\n     * @param valuesLength Length of the array of token amounts\r\n     */\r\n    error ERC1155InvalidArrayLength(uint256 idsLength, uint256 valuesLength);\r\n}",
      },
      "contracts/support/utils/Context.sol": {
        content:
          "// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v5.0.1) (utils/Context.sol)\r\n\r\npragma solidity ^0.8.19;\r\n\r\n/**\r\n * @dev Provides information about the current execution context, including the\r\n * sender of the transaction and its data. While these are generally available\r\n * via msg.sender and msg.data, they should not be accessed in such a direct\r\n * manner, since when dealing with meta-transactions the account sending and\r\n * paying for execution may not be the actual sender (as far as an application\r\n * is concerned).\r\n *\r\n * This contract is only required for intermediate, library-like contracts.\r\n */\r\nabstract contract Context {\r\n    function _msgSender() internal view virtual returns (address) {\r\n        return msg.sender;\r\n    }\r\n\r\n    function _msgData() internal view virtual returns (bytes calldata) {\r\n        return msg.data;\r\n    }\r\n\r\n    function _contextSuffixLength() internal view virtual returns (uint256) {\r\n        return 0;\r\n    }\r\n}",
      },
      "contracts/support/IERC20Metadata.sol": {
        content:
          '// SPDX-License-Identifier: MIT\r\n// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/extensions/IERC20Metadata.sol)\r\n\r\npragma solidity ^0.8.19;\r\n\r\nimport {IERC20} from "./IERC20.sol";\r\n\r\n/**\r\n * @dev Interface for the optional metadata functions from the ERC-20 standard.\r\n */\r\ninterface IERC20Metadata is IERC20 {\r\n    /**\r\n     * @dev Returns the name of the token.\r\n     */\r\n    function name() external view returns (string memory);\r\n\r\n    /**\r\n     * @dev Returns the symbol of the token.\r\n     */\r\n    function symbol() external view returns (string memory);\r\n\r\n    /**\r\n     * @dev Returns the decimals places of the token.\r\n     */\r\n    function decimals() external view returns (uint8);\r\n}',
      },
    },
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
      outputSelection: {
        "*": {
          "": ["ast"],
          "*": [
            "abi",
            "metadata",
            "devdoc",
            "userdoc",
            "storageLayout",
            "evm.legacyAssembly",
            "evm.bytecode",
            "evm.deployedBytecode",
            "evm.methodIdentifiers",
            "evm.gasEstimates",
            "evm.assembly",
          ],
        },
      },
      remappings: [],
    },
  },
  bytecode:
    "0x60806040523480156200001157600080fd5b5060405162003f4e38038062003f4e833981810160405281019062000037919062000c67565b818181600390816200004a919062000fc5565b5080600490816200005c919062000fc5565b505050600160058190555088600681905550876007819055506000600a60006101000a81548160ff021916908315150217905550620000a230886200019760201b60201c565b6127108688620000b39190620010db565b620000bf919062001155565b60088190555084600a60016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050505050620016c8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200020c5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200020391906200119e565b60405180910390fd5b62000220600083836200022460201b60201c565b5050565b600a60009054906101000a900460ff166200035b573073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148015620002a25750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b6200035557600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156200031157503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1562000354576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200034b9062001242565b60405180910390fd5b5b62000408565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148015620003c45750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1562000407576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003fe90620012da565b60405180910390fd5b5b6200041b838383620004a260201b60201c565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16148015620004845750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b156200049d576200049c8382620006d260201b60201c565b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620004f8578060026000828254620004eb9190620012fc565b92505081905550620005ce565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101562000587578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016200057e9392919062001348565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000619578060026000828254039250508190555062000666565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620006c5919062001385565b60405180910390a3505050565b620006e2620009ca60201b60201c565b600a60009054906101000a900460ff161562000735576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200072c90620013f2565b60405180910390fd5b620007468262000a1160201b60201c565b1562000789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000780906200148a565b60405180910390fd5b3273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614620007fa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007f19062001522565b60405180910390fd5b60075481101562000842576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008399062001594565b60405180910390fd5b600060075482620008549190620015b6565b1462000897576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200088e9062001594565b60405180910390fd5b600060065460075483620008ac919062001155565b620008b89190620010db565b90506000811162000900576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620008f7906200163e565b60405180910390fd5b816009600082825462000914919062001660565b925050819055508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801562000962573d6000803e3d6000fd5b508273ffffffffffffffffffffffffffffffffffffffff167fb24b09fd2e8e4d8904c3c26f3e935824e032891520ffda419dec9f086b0e1eea8383604051620009ad9291906200169b565b60405180910390a250620009c662000a2a60201b60201c565b5050565b60026005540362000a07576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600581905550565b600080823b905060008163ffffffff1611915050919050565b6001600581905550565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b62000a5d8162000a48565b811462000a6957600080fd5b50565b60008151905062000a7d8162000a52565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000ab08262000a83565b9050919050565b62000ac28162000aa3565b811462000ace57600080fd5b50565b60008151905062000ae28162000ab7565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000b3d8262000af2565b810181811067ffffffffffffffff8211171562000b5f5762000b5e62000b03565b5b80604052505050565b600062000b7462000a34565b905062000b82828262000b32565b919050565b600067ffffffffffffffff82111562000ba55762000ba462000b03565b5b62000bb08262000af2565b9050602081019050919050565b60005b8381101562000bdd57808201518184015260208101905062000bc0565b60008484015250505050565b600062000c0062000bfa8462000b87565b62000b68565b90508281526020810184848401111562000c1f5762000c1e62000aed565b5b62000c2c84828562000bbd565b509392505050565b600082601f83011262000c4c5762000c4b62000ae8565b5b815162000c5e84826020860162000be9565b91505092915050565b60008060008060008060008060006101208a8c03121562000c8d5762000c8c62000a3e565b5b600062000c9d8c828d0162000a6c565b995050602062000cb08c828d0162000a6c565b985050604062000cc38c828d0162000a6c565b975050606062000cd68c828d0162000a6c565b965050608062000ce98c828d0162000ad1565b95505060a062000cfc8c828d0162000ad1565b94505060c062000d0f8c828d0162000ad1565b93505060e08a015167ffffffffffffffff81111562000d335762000d3262000a43565b5b62000d418c828d0162000c34565b9250506101008a015167ffffffffffffffff81111562000d665762000d6562000a43565b5b62000d748c828d0162000c34565b9150509295985092959850929598565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000dd757607f821691505b60208210810362000ded5762000dec62000d8f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830262000e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000e18565b62000e63868362000e18565b95508019841693508086168417925050509392505050565b6000819050919050565b600062000ea662000ea062000e9a8462000a48565b62000e7b565b62000a48565b9050919050565b6000819050919050565b62000ec28362000e85565b62000eda62000ed18262000ead565b84845462000e25565b825550505050565b600090565b62000ef162000ee2565b62000efe81848462000eb7565b505050565b5b8181101562000f265762000f1a60008262000ee7565b60018101905062000f04565b5050565b601f82111562000f755762000f3f8162000df3565b62000f4a8462000e08565b8101602085101562000f5a578190505b62000f7262000f698562000e08565b83018262000f03565b50505b505050565b600082821c905092915050565b600062000f9a6000198460080262000f7a565b1980831691505092915050565b600062000fb5838362000f87565b9150826002028217905092915050565b62000fd08262000d84565b67ffffffffffffffff81111562000fec5762000feb62000b03565b5b62000ff8825462000dbe565b6200100582828562000f2a565b600060209050601f8311600181146200103d576000841562001028578287015190505b62001034858262000fa7565b865550620010a4565b601f1984166200104d8662000df3565b60005b82811015620010775784890151825560018201915060208501945060208101905062001050565b8683101562001097578489015162001093601f89168262000f87565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620010e88262000a48565b9150620010f58362000a48565b9250828202620011058162000a48565b915082820484148315176200111f576200111e620010ac565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000620011628262000a48565b91506200116f8362000a48565b92508262001182576200118162001126565b5b828204905092915050565b620011988162000aa3565b82525050565b6000602082019050620011b560008301846200118d565b92915050565b600082825260208201905092915050565b7f466169724d696e743a20616c6c20746f6b656e7320617265206c6f636b65642060008201527f756e74696c206c61756e63682e00000000000000000000000000000000000000602082015250565b60006200122a602d83620011bb565b91506200123782620011cc565b604082019050919050565b600060208201905081810360008301526200125d816200121b565b9050919050565b7f466169724d696e743a20596f752063616e206e6f742073656e6420746f6b656e60008201527f20746f20636f6e7472616374206166746572206c61756e636865642e00000000602082015250565b6000620012c2603c83620011bb565b9150620012cf8262001264565b604082019050919050565b60006020820190508181036000830152620012f581620012b3565b9050919050565b6000620013098262000a48565b9150620013168362000a48565b9250828201905080821115620013315762001330620010ac565b5b92915050565b620013428162000a48565b82525050565b60006060820190506200135f60008301866200118d565b6200136e602083018562001337565b6200137d604083018462001337565b949350505050565b60006020820190506200139c600083018462001337565b92915050565b7f466169724d696e743a20616c7265616479207374617274656400000000000000600082015250565b6000620013da601983620011bb565b9150620013e782620013a2565b602082019050919050565b600060208201905081810360008301526200140d81620013cb565b9050919050565b7f466169724d696e743a2063616e206e6f7420726566756e6420746f20636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b600062001472602483620011bb565b91506200147f8262001414565b604082019050919050565b60006020820190508181036000830152620014a58162001463565b9050919050565b7f466169724d696e743a2063616e206e6f7420726566756e6420746f20636f6e7460008201527f726163742e000000000000000000000000000000000000000000000000000000602082015250565b60006200150a602583620011bb565b91506200151782620014ac565b604082019050919050565b600060208201905081810360008301526200153d81620014fb565b9050919050565b7f466169724d696e743a2076616c7565206e6f74206d6174636800000000000000600082015250565b60006200157c601983620011bb565b9150620015898262001544565b602082019050919050565b60006020820190508181036000830152620015af816200156d565b9050919050565b6000620015c38262000a48565b9150620015d08362000a48565b925082620015e357620015e262001126565b5b828206905092915050565b7f466169724d696e743a206e6f20726566756e6400000000000000000000000000600082015250565b600062001626601383620011bb565b91506200163382620015ee565b602082019050919050565b60006020820190508181036000830152620016598162001617565b9050919050565b60006200166d8262000a48565b91506200167a8362000a48565b9250828203905081811115620016955762001694620010ac565b5b92915050565b6000604082019050620016b2600083018562001337565b620016c1602083018462001337565b9392505050565b61287680620016d86000396000f3fe6080604052600436106101025760003560e01c806370a0823111610095578063996517cf11610064578063996517cf1461042f578063a035b1fe1461045a578063a9059cbb14610485578063dd62ed3e146104c2578063f95b5514146104ff576101f0565b806370a0823114610371578063735de9f7146103ae5780638bdb2afa146103d957806395d89b4114610404576101f0565b80631f2698ab116100d15780631f2698ab146102b357806323b872dd146102de578063313ce5671461031b5780634f02c42014610346576101f0565b806306fdde03146101f5578063095ea7b31461022057806316eebd1e1461025d57806318160ddd14610288576101f0565b366101f0576601c6bf526340003414801561012a5750600a60009054906101000a900460ff16155b156101e557600854600954036101475761014261052a565b6101e0565b600a60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ce90611c45565b60405180910390fd5b6101df61052a565b5b6101ee565b6101ed610a1e565b5b005b600080fd5b34801561020157600080fd5b5061020a610cfe565b6040516102179190611ce4565b60405180910390f35b34801561022c57600080fd5b5061024760048036038101906102429190611d9f565b610d90565b6040516102549190611dfa565b60405180910390f35b34801561026957600080fd5b50610272610db3565b60405161027f9190611e24565b60405180910390f35b34801561029457600080fd5b5061029d610dd9565b6040516102aa9190611e4e565b60405180910390f35b3480156102bf57600080fd5b506102c8610de3565b6040516102d59190611dfa565b60405180910390f35b3480156102ea57600080fd5b5061030560048036038101906103009190611e69565b610df6565b6040516103129190611dfa565b60405180910390f35b34801561032757600080fd5b50610330610e25565b60405161033d9190611ed8565b60405180910390f35b34801561035257600080fd5b5061035b610e2e565b6040516103689190611e4e565b60405180910390f35b34801561037d57600080fd5b5061039860048036038101906103939190611ef3565b610e34565b6040516103a59190611e4e565b60405180910390f35b3480156103ba57600080fd5b506103c3610e7c565b6040516103d09190611e24565b60405180910390f35b3480156103e557600080fd5b506103ee610ea2565b6040516103fb9190611e24565b60405180910390f35b34801561041057600080fd5b50610419610ec8565b6040516104269190611ce4565b60405180910390f35b34801561043b57600080fd5b50610444610f5a565b6040516104519190611e4e565b60405180910390f35b34801561046657600080fd5b5061046f610f60565b60405161047c9190611e4e565b60405180910390f35b34801561049157600080fd5b506104ac60048036038101906104a79190611d9f565b610f66565b6040516104b99190611dfa565b60405180910390f35b3480156104ce57600080fd5b506104e960048036038101906104e49190611f20565b610f89565b6040516104f69190611e4e565b60405180910390f35b34801561050b57600080fd5b50610514611010565b6040516105219190611e4e565b60405180910390f35b600a60009054906101000a900460ff161561057a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057190611fac565b60405180910390fd5b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ad5c46486040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060d9190611fe1565b90506000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390530846040518363ffffffff1660e01b815260040161066e92919061200e565b602060405180830381865afa15801561068b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106af9190611fe1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361078857600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c9c6539630846040518363ffffffff1660e01b815260040161074292919061200e565b6020604051808303816000875af1158015610761573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107859190611fe1565b90505b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e6a4390530846040518363ffffffff1660e01b81526004016107e592919061200e565b602060405180830381865afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108269190611fe1565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361086557610864612037565b5b6001600a60006101000a81548160ff0219169083151502179055506000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060006108b230610e34565b90506000600954826108c49190612095565b90506108d03082611016565b61091d30600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611098565b60008060008573ffffffffffffffffffffffffffffffffffffffff1663f305d7194730600954600954476000620151804261095891906120c9565b6040518863ffffffff1660e01b8152600401610979969594939291906120fd565b60606040518083038185885af1158015610997573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906109bc9190612173565b9250925092503073ffffffffffffffffffffffffffffffffffffffff167f12a6b3d75229eabd5144023a37b7c6e2e458c56c02d59cb6e9c905c869d943b5848484604051610a0c939291906121c6565b60405180910390a25050505050505050565b610a266110aa565b600654341015610a6b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6290612249565b60405180910390fd5b610a74336110f0565b15610ab4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aab906122db565b60405180910390fd5b3273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b199061236d565b60405180910390fd5b600a60009054906101000a900460ff1615610b72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6990611fac565b60405180910390fd5b600060065434610b8291906123bc565b9050600060065482610b9491906123ed565b905060008134610ba49190612095565b905060085460075484610bb791906123ed565b600954610bc491906120c9565b1115610c05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfc9061247b565b60405180910390fd5b610c1d303360075486610c1891906123ed565b611109565b60075483610c2b91906123ed565b60096000828254610c3c91906120c9565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f89465d28e06b66e9452c0d4914497293f7cd7350ce4ba96a31a74d8048c61f9660075485610c8991906123ed565b84604051610c9892919061249b565b60405180910390a26000811115610cf1573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610cef573d6000803e3d6000fd5b505b505050610cfc6111fd565b565b606060038054610d0d906124f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610d39906124f3565b8015610d865780601f10610d5b57610100808354040283529160200191610d86565b820191906000526020600020905b815481529060010190602001808311610d6957829003601f168201915b5050505050905090565b600080610d9b611207565b9050610da8818585611098565b600191505092915050565b600a60019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254905090565b600a60009054906101000a900460ff1681565b600080610e01611207565b9050610e0e85828561120f565b610e19858585611109565b60019150509392505050565b60006012905090565b60095481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060048054610ed7906124f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610f03906124f3565b8015610f505780601f10610f2557610100808354040283529160200191610f50565b820191906000526020600020905b815481529060010190602001808311610f3357829003601f168201915b5050505050905090565b60085481565b60065481565b600080610f71611207565b9050610f7e818585611109565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60075481565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110885760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161107f9190611e24565b60405180910390fd5b611094826000836112a3565b5050565b6110a58383836001611503565b505050565b6002600554036110e6576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600581905550565b600080823b905060008163ffffffff1611915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361117b5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016111729190611e24565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111ed5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016111e49190611e24565b60405180910390fd5b6111f88383836112a3565b505050565b6001600581905550565b600033905090565b600061121b8484610f89565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461129d578181101561128d578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161128493929190612524565b60405180910390fd5b61129c84848484036000611503565b5b50505050565b600a60009054906101000a900460ff166113d2573073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614801561131f5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b6113cd57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561138c57503073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b156113cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c3906125cd565b60405180910390fd5b5b61147b565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614801561143a5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561147a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114719061265f565b60405180910390fd5b5b6114868383836116da565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161480156114ee5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b156114fe576114fd83826118ff565b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036115755760006040517fe602df0500000000000000000000000000000000000000000000000000000000815260040161156c9190611e24565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036115e75760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016115de9190611e24565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156116d4578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516116cb9190611e4e565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361172c57806002600082825461172091906120c9565b925050819055506117ff565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156117b8578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016117af93929190612524565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036118485780600260008282540392505081905550611895565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516118f29190611e4e565b60405180910390a3505050565b6119076110aa565b600a60009054906101000a900460ff1615611957576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194e90611fac565b60405180910390fd5b611960826110f0565b156119a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611997906126f1565b60405180910390fd5b3273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611a0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a0590612783565b60405180910390fd5b600754811015611a53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a4a90612249565b60405180910390fd5b600060075482611a6391906127a3565b14611aa3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a9a90612249565b60405180910390fd5b600060065460075483611ab691906123bc565b611ac091906123ed565b905060008111611b05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611afc90612820565b60405180910390fd5b8160096000828254611b179190612095565b925050819055508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015611b64573d6000803e3d6000fd5b508273ffffffffffffffffffffffffffffffffffffffff167fb24b09fd2e8e4d8904c3c26f3e935824e032891520ffda419dec9f086b0e1eea8383604051611bad92919061249b565b60405180910390a250611bbe6111fd565b5050565b600082825260208201905092915050565b7f466169724d696e743a206f6e6c79206c61756e636865722063616e207374617260008201527f7400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c2f602183611bc2565b9150611c3a82611bd3565b604082019050919050565b60006020820190508181036000830152611c5e81611c22565b9050919050565b600081519050919050565b60005b83811015611c8e578082015181840152602081019050611c73565b60008484015250505050565b6000601f19601f8301169050919050565b6000611cb682611c65565b611cc08185611bc2565b9350611cd0818560208601611c70565b611cd981611c9a565b840191505092915050565b60006020820190508181036000830152611cfe8184611cab565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d3682611d0b565b9050919050565b611d4681611d2b565b8114611d5157600080fd5b50565b600081359050611d6381611d3d565b92915050565b6000819050919050565b611d7c81611d69565b8114611d8757600080fd5b50565b600081359050611d9981611d73565b92915050565b60008060408385031215611db657611db5611d06565b5b6000611dc485828601611d54565b9250506020611dd585828601611d8a565b9150509250929050565b60008115159050919050565b611df481611ddf565b82525050565b6000602082019050611e0f6000830184611deb565b92915050565b611e1e81611d2b565b82525050565b6000602082019050611e396000830184611e15565b92915050565b611e4881611d69565b82525050565b6000602082019050611e636000830184611e3f565b92915050565b600080600060608486031215611e8257611e81611d06565b5b6000611e9086828701611d54565b9350506020611ea186828701611d54565b9250506040611eb286828701611d8a565b9150509250925092565b600060ff82169050919050565b611ed281611ebc565b82525050565b6000602082019050611eed6000830184611ec9565b92915050565b600060208284031215611f0957611f08611d06565b5b6000611f1784828501611d54565b91505092915050565b60008060408385031215611f3757611f36611d06565b5b6000611f4585828601611d54565b9250506020611f5685828601611d54565b9150509250929050565b7f466169724d696e743a20616c7265616479207374617274656400000000000000600082015250565b6000611f96601983611bc2565b9150611fa182611f60565b602082019050919050565b60006020820190508181036000830152611fc581611f89565b9050919050565b600081519050611fdb81611d3d565b92915050565b600060208284031215611ff757611ff6611d06565b5b600061200584828501611fcc565b91505092915050565b60006040820190506120236000830185611e15565b6120306020830184611e15565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006120a082611d69565b91506120ab83611d69565b92508282039050818111156120c3576120c2612066565b5b92915050565b60006120d482611d69565b91506120df83611d69565b92508282019050808211156120f7576120f6612066565b5b92915050565b600060c0820190506121126000830189611e15565b61211f6020830188611e3f565b61212c6040830187611e3f565b6121396060830186611e3f565b6121466080830185611e15565b61215360a0830184611e3f565b979650505050505050565b60008151905061216d81611d73565b92915050565b60008060006060848603121561218c5761218b611d06565b5b600061219a8682870161215e565b93505060206121ab8682870161215e565b92505060406121bc8682870161215e565b9150509250925092565b60006060820190506121db6000830186611e3f565b6121e86020830185611e3f565b6121f56040830184611e3f565b949350505050565b7f466169724d696e743a2076616c7565206e6f74206d6174636800000000000000600082015250565b6000612233601983611bc2565b915061223e826121fd565b602082019050919050565b6000602082019050818103600083015261226281612226565b9050919050565b7f466169724d696e743a2063616e206e6f74206d696e7420746f20636f6e74726160008201527f6374000000000000000000000000000000000000000000000000000000000000602082015250565b60006122c5602283611bc2565b91506122d082612269565b604082019050919050565b600060208201905081810360008301526122f4816122b8565b9050919050565b7f466169724d696e743a2063616e206e6f74206d696e7420746f20636f6e74726160008201527f63742e0000000000000000000000000000000000000000000000000000000000602082015250565b6000612357602383611bc2565b9150612362826122fb565b604082019050919050565b600060208201905081810360008301526123868161234a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006123c782611d69565b91506123d283611d69565b9250826123e2576123e161238d565b5b828204905092915050565b60006123f882611d69565b915061240383611d69565b925082820261241181611d69565b9150828204841483151761242857612427612066565b5b5092915050565b7f466169724d696e743a20657863656564206d617820737570706c790000000000600082015250565b6000612465601b83611bc2565b91506124708261242f565b602082019050919050565b6000602082019050818103600083015261249481612458565b9050919050565b60006040820190506124b06000830185611e3f565b6124bd6020830184611e3f565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061250b57607f821691505b60208210810361251e5761251d6124c4565b5b50919050565b60006060820190506125396000830186611e15565b6125466020830185611e3f565b6125536040830184611e3f565b949350505050565b7f466169724d696e743a20616c6c20746f6b656e7320617265206c6f636b65642060008201527f756e74696c206c61756e63682e00000000000000000000000000000000000000602082015250565b60006125b7602d83611bc2565b91506125c28261255b565b604082019050919050565b600060208201905081810360008301526125e6816125aa565b9050919050565b7f466169724d696e743a20596f752063616e206e6f742073656e6420746f6b656e60008201527f20746f20636f6e7472616374206166746572206c61756e636865642e00000000602082015250565b6000612649603c83611bc2565b9150612654826125ed565b604082019050919050565b600060208201905081810360008301526126788161263c565b9050919050565b7f466169724d696e743a2063616e206e6f7420726566756e6420746f20636f6e7460008201527f7261637400000000000000000000000000000000000000000000000000000000602082015250565b60006126db602483611bc2565b91506126e68261267f565b604082019050919050565b6000602082019050818103600083015261270a816126ce565b9050919050565b7f466169724d696e743a2063616e206e6f7420726566756e6420746f20636f6e7460008201527f726163742e000000000000000000000000000000000000000000000000000000602082015250565b600061276d602583611bc2565b915061277882612711565b604082019050919050565b6000602082019050818103600083015261279c81612760565b9050919050565b60006127ae82611d69565b91506127b983611d69565b9250826127c9576127c861238d565b5b828206905092915050565b7f466169724d696e743a206e6f20726566756e6400000000000000000000000000600082015250565b600061280a601383611bc2565b9150612815826127d4565b602082019050919050565b60006020820190508181036000830152612839816127fd565b905091905056fea2646970667358221220776afbdc1d316eed7f563bfa8ae1c6004cd164aa29fc3d36fcdd8816ace3c9c864736f6c63430008130033",
}
