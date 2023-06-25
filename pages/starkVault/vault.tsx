export const vault_abi =  [
  {
    "type": "function",
    "name": "constructor",
    "inputs": [
      {
        "name": "staking_token",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "token_rewards",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "pragma_address",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "key_pair",
        "type": "core::felt252"
      },
      {
        "name": "_owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "view_price_data",
    "inputs": [],
    "outputs": [
      {
        "type": "core::felt252"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "balanceStaked",
    "inputs": [
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [
      {
        "type": "core::integer::u256"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "earnedRewards",
    "inputs": [
      {
        "name": "account",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [
      {
        "type": "core::integer::u256"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "stakingToken",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "token_rewards",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "eth_staked",
    "inputs": [],
    "outputs": [
      {
        "type": "core::integer::u256"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "usd_value_staked",
    "inputs": [],
    "outputs": [
      {
        "type": "core::integer::u256"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "stake",
    "inputs": [
      {
        "name": "amount",
        "type": "core::integer::u256"
      },
      {
        "name": "user_stake",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [
      {
        "type": "core::integer::u256"
      }
    ],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "withdrawStake",
    "inputs": [
      {
        "name": "amount",
        "type": "core::integer::u256"
      },
      {
        "name": "user_stake",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "claimRewards",
    "inputs": [
      {
        "name": "user_stake",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "rebalance",
    "inputs": [],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      {
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "value",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      {
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "value",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "event",
    "name": "Claim_Rewards",
    "inputs": [
      {
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "value",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "type": "event",
    "name": "Rebalanced",
    "inputs": [
      {
        "name": "value",
        "type": "core::integer::u256"
      },
      {
        "name": "_time",
        "type": "core::integer::u64"
      }
    ]
  }
]