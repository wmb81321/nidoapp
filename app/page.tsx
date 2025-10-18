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
// Transaction components will be implemented later
// import {
//   Transaction,
//   TransactionButton,
//   TransactionSponsor,
//   TransactionStatus,
//   TransactionToast
// } from '@coinbase/onchainkit/transaction';

export default function Home() {
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

        {/* Identity Components Section */}
        <div className={styles.identitySection}>
          <h2 className={styles.sectionTitle}>Identity Components</h2>
          
          <div className={styles.identityComponents}>
            <div className={styles.identityItem}>
              <h3>User Identity</h3>
              <p>Complete identity display with avatar, name, and address</p>
              <Identity address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10744c737d5720b2e3e5bc7e24d01b1">
                <Avatar />
                <Name />
                <Address />
              </Identity>
            </div>

            <div className={styles.identityItem}>
              <h3>Avatar Only</h3>
              <p>Display user avatar from ENS or Basename</p>
              <Avatar address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
            </div>

            <div className={styles.identityItem}>
              <h3>Name Display</h3>
              <p>Show ENS/Basename with fallback to address</p>
              <Name address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
            </div>
          </div>
        </div>

        {/* Transaction Components Section */}
        <div className={styles.transactionSection}>
          <h2 className={styles.sectionTitle}>Transaction Components</h2>
          
          <div className={styles.transactionComponents}>
            <div className={styles.transactionItem}>
              <h3>Transaction Demo</h3>
              <p>Transaction components (requires wallet connection and valid calls)</p>
              
              <div className={styles.transactionDemo}>
                <button 
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    background: '#f5f5f5',
                    cursor: 'not-allowed',
                    opacity: 0.6
                  }}
                  disabled
                >
                  Transaction Demo (Coming Soon)
                </button>
                <p style={{fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7}}>
                  Transaction components will be implemented with proper configuration
                </p>
              </div>
            </div>

            <div className={styles.transactionItem}>
              <h3>Transaction Status</h3>
              <p>Status tracking and toast notifications for transactions</p>
              
              <div className={styles.transactionDemo}>
                <button 
                  style={{
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    background: '#f5f5f5',
                    cursor: 'not-allowed',
                    opacity: 0.6
                  }}
                  disabled
                >
                  Demo Status Button
                </button>
                <p style={{fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7}}>
                  Transaction status and toasts will appear here
                </p>
              </div>
            </div>
          </div>
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
