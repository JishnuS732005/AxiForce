import { motion } from 'motion/react';
import { CheckCircle2, Clock, Landmark, ArrowUpRight } from 'lucide-react';
import { WITHDRAWALS } from '../constants';
import { cn } from '../lib/utils';

export default function WithdrawalPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {WITHDRAWALS.map((wd, index) => (
        <motion.div
          key={wd.id}
          initial={{ opacity: 0, x: index === 0 ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
          className="relative rounded-2xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl",
                wd.status === 'Completed' ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
              )}>
                {wd.status === 'Completed' ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{wd.status} Withdrawal</h3>
                <p className="text-xs text-zinc-500">{wd.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-white">₹{wd.amount.toLocaleString()}</p>
              <p className="text-[10px] text-zinc-500 tracking-wider">REF: {wd.id}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-zinc-500" />
              <span className="text-xs text-zinc-400">{wd.bank} • XXXX{wd.accountMask}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Bank Wire</span>
          </div>

          {wd.status === 'Pending' && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-amber-500 uppercase">{wd.statusText}</span>
                <span className="text-xs font-bold text-white">{wd.progress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${wd.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
