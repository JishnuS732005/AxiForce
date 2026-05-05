import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { TRADES_DATA } from '../constants';
import { cn } from '../lib/utils';

export default function TradeTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <h3 className="text-lg font-bold text-white tracking-tight">Recent Trade History</h3>
        <button 
          onClick={() => alert('Viewing full trade history details...')}
          className="text-sm font-medium text-blue-500 hover:underline active:opacity-70 transition-opacity"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Pair</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Type</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Lots</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Entry / Exit</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500 text-right">Profit/Loss</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Date</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {TRADES_DATA.map((trade) => (
              <tr key={trade.id} className="group transition-colors hover:bg-white/[0.02]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{trade.pair}</span>
                    <span className="text-[10px] text-zinc-600 font-mono">{trade.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "flex w-fit items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    trade.type === 'Buy' ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
                  )}>
                    {trade.type === 'Buy' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {trade.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-zinc-300">{trade.lots}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-xs">
                    <p className="text-zinc-400">{trade.entryPrice.toFixed(4)}</p>
                    <p className="text-zinc-600">→ {trade.exitPrice.toFixed(4)}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={cn(
                    "text-sm font-bold",
                    trade.profit >= 0 ? "text-emerald-500" : "text-red-500"
                  )}>
                    {trade.profit >= 0 ? '+' : ''}${Math.abs(trade.profit).toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-zinc-500">{trade.date}</span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button 
                    onClick={() => alert(`Options for Trade ${trade.id}`)}
                    className="rounded-lg p-1 text-zinc-600 transition-colors hover:bg-white/5 group-hover:text-zinc-300 active:scale-95"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
