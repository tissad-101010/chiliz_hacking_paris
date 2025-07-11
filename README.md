# ♿️ Tokenized Donations for Para-Sports Associations

A Web3-powered dApp built on the Chiliz Chain that enables fans and supporters to donate CHZ tokens to para-sports associations, with transparent distribution, locked incentives, and community-driven rewards.

## 🎯 Purpose

This project aims to support inclusive sports through a gamified donation model. Fans can fund their favorite teams and receive meaningful, non-financial rewards if their team performs well.

## 🔁 How It Works

1. **Users donate CHZ** to the association of their choice via the dApp.
2. The donation is **automatically split**:
   - 🟢 **50%**: Directly sent to the chosen association (immediate funding).
   - 🟡 **30%**: Locked in a smart contract as **non-cash benefits** (e.g. merch credit, ticket access).
   - 🔴 **20%**: Added to a **reward pool** shared later.

3. At the end of a tournament:
   - The **winning association** receives the **20% reward pool**.
   - The merch funded from that pool is **sent to donors as rewards**.
   - The 30% benefit remains redeemable only **within the ecosystem** (not cashable).

## ⚙️ Tech Stack

- **Frontend**: Next.js (with TypeScript)
- **Blockchain**: Chiliz Chain (EVM-compatible)
- **Wallet**: MetaMask
- **Smart Contracts**: Solidity (donation routing, incentive locking, reward distribution)
- **Web3 Library**: Web3.js or ethers.js

## 🔐 Key Features

- Transparent, on-chain donation and distribution logic
- Donor benefits without monetary gain (non-profit compliant)
- Incentivized engagement through locked ecosystem rewards
- Tournament-based reward mechanism
- Designed for real-world impact in inclusive sports

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
