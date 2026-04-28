import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';

// Use 'devnet' for the hackathon so you don't spend real money
export const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

// The address where subscription payments will be sent
export const MERCHANT_WALLET = new PublicKey('TKTgJpuGqz4yEi7zPGbKTHqYeN9BaB7hvYL5rB75UYs');

// Standard Memo Program ID for anchoring data
export const MEMO_PROGRAM_ID = new PublicKey('Memo1UhkJRfHyvLMcVucJwxFzwD7Mt1acyAgCCvY786');

export const getExplorerUrl = (signature: string) =>
  `https://explorer.solana.com/tx/${signature}?cluster=devnet`;
