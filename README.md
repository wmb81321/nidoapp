# 🪺 NidoApp

A modern blockchain application built with Next.js and OnchainKit, featuring funding components for seamless crypto transactions.

## ✨ Features

- **OnchainKit Integration**: Built with Coinbase's OnchainKit for robust blockchain functionality
- **Fund Components**: Includes both FundCard and FundButton for flexible funding options
- **Responsive Design**: Beautiful UI that works on all devices
- **TypeScript**: Fully typed for better development experience
- **Modern Stack**: Next.js 14 with React 18

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Coinbase Developer Platform account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wmb81321/nidoapp.git
   cd nidoapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   NEXT_PUBLIC_CDP_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_PROJECT_NAME=NidoApp
   ```

4. **Get your credentials**
   - Visit [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
   - Copy your API Key and Project ID
   - Update your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Configuration

### OnchainKit Setup

The app is pre-configured with OnchainKit. Make sure you have:

1. **API Key**: From your Coinbase Developer Platform dashboard
2. **Project ID**: Required for Fund components to work
3. **Chain Configuration**: Currently set to Base network

### Fund Components

The app includes two funding options:

- **FundCard**: Complete funding experience with detailed options
- **FundButton**: Simple one-click funding solution

## 🏗️ Project Structure

```
nidoapp/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page with Fund components
│   ├── page.module.css      # Page-specific styles
│   └── rootProvider.tsx     # OnchainKit provider setup
├── public/
│   └── sphere.svg           # App icon
├── .env.local               # Environment variables (create this)
├── package.json             # Dependencies
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Blockchain**: OnchainKit (Coinbase)
- **Styling**: CSS Modules
- **Network**: Base (Ethereum L2)

## 📚 Usage

### Fund Your Wallet

The app provides two ways to fund your wallet:

1. **Using FundCard**: Provides a comprehensive funding interface with detailed options
2. **Using FundButton**: Quick and simple funding with one click

Both components automatically detect your wallet type and direct you to the appropriate funding flow.

### Wallet Connection

Connect your wallet using the wallet button in the header. Supports:
- Coinbase Smart Wallet
- MetaMask
- WalletConnect
- And more...

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

You can customize the Fund components by modifying the props in `app/page.tsx`:

```tsx
// Customize FundCard
<FundCard
  assetSymbol="USDC"  // Change asset
  country="US"        // Set country
  currency="USD"      // Set currency
/>

// Customize FundButton
<FundButton 
  text="Buy Crypto"   // Custom text
  hideIcon={false}    // Show/hide icon
/>
```

## 🚨 Troubleshooting

### Common Issues

1. **"Something went wrong" error on pay.coinbase.com**
   - Disable "enforce secure initialization" in your [Onramp config](https://portal.cdp.coinbase.com/products/onramp)

2. **Fund components not working**
   - Make sure `NEXT_PUBLIC_CDP_PROJECT_ID` is set in your `.env.local`
   - Verify your Project ID in the Coinbase Developer Platform

3. **Wallet connection issues**
   - Check that `NEXT_PUBLIC_ONCHAINKIT_API_KEY` is correct
   - Ensure you're on a supported network (Base)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [OnchainKit Documentation](https://docs.base.org/onchainkit)
- [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
- [Base Network](https://base.org/)
- [Next.js Documentation](https://nextjs.org/docs)

---

Built with ❤️ using OnchainKit and Next.js