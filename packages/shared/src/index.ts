// Common types for Stellar operations
export interface StellarAccount {
  publicKey: string;
  balance: string;
}

export interface StellarTransaction {
  id: string;
  sourceAccount: string;
  operations: StellarOperation[];
}

export interface StellarOperation {
  type: string;
  amount?: string;
  asset?: string;
  destination?: string;
}

// Common utilities
export const formatStellarAmount = (amount: string): string => {
  return (parseFloat(amount) / 10000000).toFixed(7);
}; 