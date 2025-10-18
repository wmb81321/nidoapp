"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { FundCard, FundButton } from '@coinbase/onchainkit/fund';
import { 
  Avatar, 
  Name, 
  Identity,
  Address
} from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
// Transaction components will be implemented later
// import {
//   Transaction,
//   TransactionButton,
//   TransactionSponsor,
//   TransactionStatus,
//   TransactionToast
// } from '@coinbase/onchainkit/transaction';

export default function Home() {
  const { address, isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <div className={styles.content}>
        <Image
          priority
          src="/sphere.svg"
          alt="Sphere"
          width={200}
          height={200}
        />
        <h1 className={styles.title}>OnchainKit</h1>

        <p>
          Let&apos;s build the blockchain app with OnchainKit
        </p>

        {/* Fund Components Section */}
        {isConnected ? (
          <div className={styles.fundSection}>
            <h2 className={styles.sectionTitle}>Fund Your Wallet</h2>
            
            <div className={styles.fundComponents}>
              <div className={styles.fundItem}>
                <h3>Fund Card</h3>
                <p>Complete funding experience with detailed options</p>
                <FundCard
                  assetSymbol="ETH"
                  country="US"
                  currency="USD"
                />
              </div>

              <div className={styles.fundItem}>
                <h3>Fund Button</h3>
                <p>Simple one-click funding solution</p>
                <FundButton />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.connectPrompt}>
            <h2 className={styles.sectionTitle}>Connect Your Wallet</h2>
            <p>Connect your wallet to access funding and identity features</p>
          </div>
        )}

        {/* Identity Components Section */}
        {isConnected && address ? (
          <div className={styles.identitySection}>
            <h2 className={styles.sectionTitle}>Your Identity</h2>
            
            <div className={styles.identityComponents}>
              <div className={styles.identityItem}>
                <h3>Complete Identity</h3>
                <p>Your wallet identity with avatar, name, and address</p>
                <Identity address={address}>
                  <Avatar />
                  <Name />
                  <Address />
                </Identity>
              </div>

              <div className={styles.identityItem}>
                <h3>Your Avatar</h3>
                <p>Your profile avatar from ENS or Basename</p>
                <Avatar address={address} />
              </div>

              <div className={styles.identityItem}>
                <h3>Your Name</h3>
                <p>Your ENS/Basename with fallback to address</p>
                <Name address={address} />
              </div>
            </div>
          </div>
        ) : null}

        {/* Transaction Components Section */}
        <div className={styles.transactionSection}>
          <h2 className={styles.sectionTitle}>Transaction Components</h2>
          
          {isConnected && address ? (
            <div className={styles.transactionComponents}>
              <div className={styles.transactionItem}>
                <h3>Ready for Transactions</h3>
                <p>Wallet connected - Transaction components ready for implementation</p>
                
                <div className={styles.transactionDemo}>
                  <button 
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: '1px solid #0052ff',
                      background: 'rgba(0, 82, 255, 0.1)',
                      color: '#0052ff',
                      cursor: 'default',
                    }}
                  >
                    Wallet Connected ✓
                  </button>
                  <p style={{fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7}}>
                    Connected to: {address.slice(0, 6)}...{address.slice(-4)}
                  </p>
                </div>
              </div>

              <div className={styles.transactionItem}>
                <h3>Transaction Features</h3>
                <p>Available transaction capabilities with your connected wallet</p>
                
                <div className={styles.transactionDemo}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#22c55e' }}>✓ Send transactions</span>
                    <span style={{ fontSize: '0.9rem', color: '#22c55e' }}>✓ Smart contract interactions</span>
                    <span style={{ fontSize: '0.9rem', color: '#22c55e' }}>✓ Gas estimation</span>
                    <span style={{ fontSize: '0.9rem', color: '#fbbf24' }}>⚡ Coming soon: Full implementation</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.connectPrompt}>
              <p>Connect your wallet to see transaction capabilities</p>
            </div>
          )}
        </div>

        <h2 className={styles.componentsTitle}>Explore Components</h2>

        <ul className={styles.components}>
          {[
            {
              name: "Transaction",
              url: "https://docs.base.org/onchainkit/transaction/transaction",
            },
            {
              name: "Swap",
              url: "https://docs.base.org/onchainkit/swap/swap",
            },
            {
              name: "Checkout",
              url: "https://docs.base.org/onchainkit/checkout/checkout",
            },
            {
              name: "Wallet",
              url: "https://docs.base.org/onchainkit/wallet/wallet",
            },
            {
              name: "Identity",
              url: "https://docs.base.org/onchainkit/identity/identity",
            },
          ].map((component) => (
            <li key={component.name}>
              <a target="_blank" rel="noreferrer" href={component.url}>
                {component.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
