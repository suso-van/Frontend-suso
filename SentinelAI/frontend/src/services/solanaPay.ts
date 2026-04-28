import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { MERCHANT_WALLET } from '../lib/solana-utils';

export const createPaymentTransaction = async (
  userWallet: PublicKey,
  planAmount: number // e.g., 0.1 for 0.1 SOL
) => {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: userWallet,
      toPubkey: MERCHANT_WALLET,
      lamports: Math.round(planAmount * LAMPORTS_PER_SOL),
    })
  );

  return transaction;
};
