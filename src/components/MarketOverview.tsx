import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { MARKET_TICKERS } from '../constants';
import { cn } from '../lib/utils';

export default function MarketOverview() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
      {MARKET_TICKERS.map((ticker, i) => (
        <motion.div
           key={ticker.symbol}
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: i * 0.05 }}
           className="min-w-[180px] flex-shrink-0 rounded-xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur-sm transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-white tracking-tight">{ticker.symbol}</span>
            <div className={cn(
              "flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded",
              ticker.change >= 0 ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
            )}>
              {ticker.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {ticker.change}%
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white font-mono">{ticker.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
