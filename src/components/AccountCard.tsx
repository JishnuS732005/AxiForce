import { motion } from 'motion/react';
import { Wallet, TrendingUp, ShieldCheck } from 'lucide-react';

export default function AccountCard() {
  const stats = [
    { label: 'Balance', value: '$0.00', color: 'text-white' },
    { label: 'Equity', value: '$0.00', color: 'text-white' },
    { label: 'Margin', value: '$0.00', color: 'text-zinc-500' },
    { label: 'Free Margin', value: '$0.00', color: 'text-zinc-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]"></div>
      <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-[80px]"></div>

      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-zinc-400">
            <ShieldCheck className="h-4 w-4 text-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-wider">Account Overview</span>
          </div>
          <h2 className="mt-1 text-2xl font-bold text-white tracking-tight">Standard Pro</h2>
          <p className="text-sm text-zinc-500">ID: AF-284719 • Aakash</p>
        </div>
        <div className="rounded-xl bg-blue-500/10 p-3 text-blue-500">
          <Wallet className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-xs font-medium text-zinc-500">{stat.label}</span>
            <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <button 
          onClick={() => alert('Deposit modal would open here.')}
          className="flex-1 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-95"
        >
          Deposit
        </button>
        <button 
          onClick={() => alert('Redirecting to WebTrader...') }
          className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
        >
          Trade Now
        </button>
      </div>
    </motion.div>
  );
}
