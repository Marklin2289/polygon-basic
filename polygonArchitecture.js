//  three layered architectures
// 1 Staking and Plasma smart contracts on Ethereum
// 2 Heimdall (proof of stake layer == POS Nodes)
// 3 Bor (Block producer layer)

// checkpoints are important

// asset flow in Plasma bridge

// POS bridge(Deposit):
// locks amount of tokens to be deposited on mainnet Ethereum
// State Sync mechanism : RootChainManager that triggers ChildChainManager on  polygon chain
// ChildChainManager -> childToken.deposit() will mint token to user's account

// POS bridge(Withdraw):
// Burn asset on polygon chain
// Burn transaction get checkPointed on Ethereum mainnet by POS validators
// RootChainManager.exit() on Ethereum mainnet to submit proof of burn transaction
// triggers predicate contract which has locked tokens to release on Ethereum

// Types of transactions
// Fund transfer between EOA(externally owned account)
// Smart contract deployment
// Function executed on deployed smart contract
