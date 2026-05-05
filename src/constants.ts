import { Trade, Withdrawal, MarketTicker } from './types';

export const TRADES_DATA: Trade[] = [
  { id: 'T-1001', pair: 'EUR/USD', type: 'Buy', lots: 0.05, entryPrice: 1.0823, exitPrice: 1.0825, profit: 2.50, date: '2026-04-04 10:24' },
  { id: 'T-1002', pair: 'BTC/USD', type: 'Sell', lots: 0.01, entryPrice: 64200.50, exitPrice: 64150.20, profit: 5.03, date: '2026-04-03 09:15' },
  { id: 'T-1003', pair: 'GBP/USD', type: 'Buy', lots: 0.08, entryPrice: 1.2540, exitPrice: 1.2520, profit: -16.00, date: '2026-04-02 22:10' },
  { id: 'T-1004', pair: 'USD/JPY', type: 'Sell', lots: 0.12, entryPrice: 154.20, exitPrice: 154.10, profit: 12.00, date: '2026-04-01 18:45' },
  { id: 'T-1005', pair: 'ETH/USD', type: 'Buy', lots: 0.2, entryPrice: 3200.00, exitPrice: 3150.00, profit: -10.00, date: '2026-03-30 14:30' },
  { id: 'T-1006', pair: 'AUD/USD', type: 'Buy', lots: 0.04, entryPrice: 0.6510, exitPrice: 0.6555, profit: 18.00, date: '2026-03-28 11:15' },
  { id: 'T-1007', pair: 'USD/CHF', type: 'Sell', lots: 0.03, entryPrice: 0.9120, exitPrice: 0.9150, profit: -9.00, date: '2026-03-25 08:00' },
  { id: 'T-1008', pair: 'BTC/USD', type: 'Buy', lots: 0.005, entryPrice: 62000.00, exitPrice: 63800.00, profit: 12.00, date: '2026-03-22 23:50' },
  { id: 'T-1009', pair: 'EUR/GBP', type: 'Sell', lots: 0.1, entryPrice: 0.8560, exitPrice: 0.8540, profit: 19.50, date: '2026-03-20 21:05' },
  { id: 'T-1010', pair: 'XAU/USD', type: 'Buy', lots: 0.01, entryPrice: 2320.50, exitPrice: 2315.20, profit: -5.30, date: '2026-03-18 16:30' },
  { id: 'T-1011', pair: 'NZD/USD', type: 'Buy', lots: 0.07, entryPrice: 0.5920, exitPrice: 0.5980, profit: 4.20, date: '2026-03-15 12:45' },
  { id: 'T-1012', pair: 'USD/CAD', type: 'Sell', lots: 0.05, entryPrice: 1.3650, exitPrice: 1.3680, profit: -15.00, date: '2026-03-12 09:10' },
];

export const WITHDRAWALS: Withdrawal[] = [
  {
    id: 'WD-48388',
    amount: 50000,
    currency: 'INR',
    status: 'Pending',
    method: 'Bank Wire Transfer',
    date: '6 May 2026',
    bank: 'Bank of India',
    accountMask: '8137',
    progress: 72,
    statusText: 'Awaiting bank clearance'
  },
  {
    id: 'WD-48201',
    amount: 50000,
    currency: 'INR',
    status: 'Completed',
    method: 'Bank Wire Transfer',
    date: '30 April 2026',
    bank: 'Bank of India',
    accountMask: '8137'
  }
];

export const MARKET_TICKERS: MarketTicker[] = [
  { symbol: 'EUR/USD', price: 1.0851, change: 0.24 },
  { symbol: 'GBP/USD', price: 1.2542, change: -0.12 },
  { symbol: 'USD/JPY', price: 153.82, change: 0.45 },
  { symbol: 'BTC/USD', price: 63842.20, change: 1.42 },
  { symbol: 'ETH/USD', price: 3182.50, change: -0.85 },
];

export const CHART_DATA = [
  { time: '09:00', price: 1.0820 },
  { time: '10:00', price: 1.0835 },
  { time: '11:00', price: 1.0828 },
  { time: '12:00', price: 1.0842 },
  { time: '13:00', price: 1.0855 },
  { time: '14:00', price: 1.0848 },
  { time: '15:00', price: 1.0862 },
  { time: '16:00', price: 1.0851 },
];
