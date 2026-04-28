import { PublicKey } from '@solana/web3.js';

const test = (name, str) => {
  try {
    const pk = new PublicKey(str);
    console.log(`${name} (${str}) is VALID:`, pk.toBase58());
  } catch (e) {
    console.log(`${name} (${str}) is INVALID:`, e.message);
  }
};

test('MERCHANT_WALLET', 'TKTgJpuGqz4yEi7zPGbKTHqYeN9BaB7hvYL5rB75UYs');
test('MEMO_V2_LONG', 'MemoSq4gqABbox76tgS8t8vGyB4X9VMT5D9S69H143');
test('MEMO_V2_SHORT', 'MemoSq4gqABbox76tgS8t8vGyB4X9VMT5D9S69H');
test('MEMO_V1', 'Memo1UhkJRfHyvLMcVucJwxFzwD7Mt1acyAgCCvY786');
