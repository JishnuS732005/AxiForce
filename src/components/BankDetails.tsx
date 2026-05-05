import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, User, CreditCard, Eye, EyeOff } from 'lucide-react';

export default function BankDetails() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-zinc-400">
          <Landmark className="h-4 w-4 text-emerald-500" />
          <span className="text-xs font-semibold uppercase tracking-wider">Primary Bank Details</span>
        </div>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-500 transition-all hover:bg-emerald-500/20 active:scale-95"
        >
          {isVisible ? <><EyeOff className="h-3 w-3" /> Hide Details</> : <><Eye className="h-3 w-3" /> Show Details</>}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-colors group-hover:bg-white/10">
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Bank Name</p>
                <p className="text-sm font-semibold text-white">Bank of India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
                <CreditCard className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Account Number</p>
                <p className="font-mono text-sm font-semibold text-white tracking-widest">
                  8209 1011 001<span className="text-emerald-500">8137</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">Account Holder</p>
                <p className="text-sm font-semibold text-white uppercase">Aakash</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center text-zinc-600"
          >
            <Landmark className="h-12 w-12 opacity-20 mb-3" />
            <p className="text-xs">Bank details are hidden for security.<br />Click the button above to view.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
