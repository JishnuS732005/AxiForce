export interface Trade {
  id: string;
  pair: string;
  type: 'Buy' | 'Sell';
  lots: number;
  entryPrice: number;
  exitPrice: number;
  profit: number;
  date: string;
}

export interface Withdrawal {
  id: string;
  amount: number;
  currency: string;
  status: 'Completed' | 'Pending';
  method: string;
  date: string;
  bank: string;
  accountMask: string;
  progress?: number;
  statusText?: string;
}

export interface MarketTicker {
  symbol: string;
  price: number;
  change: number;
}
