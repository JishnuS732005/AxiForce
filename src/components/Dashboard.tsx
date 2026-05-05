import Header from './Header';
import AccountCard from './AccountCard';
import MarketOverview from './MarketOverview';
import ChartSection from './ChartSection';
import WithdrawalPanel from './WithdrawalPanel';
import BankDetails from './BankDetails';
import TradeTable from './TradeTable';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      
      <main className="container mx-auto px-4 py-8 lg:px-8">
        <div className="flex flex-col gap-8">
          
          {/* Market Tickers */}
          <section>
            <MarketOverview />
          </section>

          {/* Top Grid: Account & Chart */}
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <AccountCard />
              <div className="hidden lg:block h-full"> 
                 {/* Secondary info or placeholder if needed */}
                 <div className="rounded-2xl border border-dashed border-white/10 p-6 flex flex-col items-center justify-center text-center gap-2 h-full opacity-50">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">Trading Signals</p>
                    <p className="text-[10px] text-zinc-700">Expert analysis active</p>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-8">
               <ChartSection />
            </div>
          </section>

          {/* Funding Section: Withdrawals & Bank Details */}
          <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
               <div className="mb-4">
                  <h2 className="text-lg font-bold text-white tracking-tight">Funding & Withdrawals</h2>
                  <p className="text-xs text-zinc-500">Manage your capital and bank accounts</p>
               </div>
               <WithdrawalPanel />
            </div>
            <div className="lg:col-span-4 self-end">
               <BankDetails />
            </div>
          </section>

          {/* Trade History */}
          <section>
            <TradeTable />
          </section>

          {/* Footer Note */}
          <footer className="mt-8 pb-12 text-center">
            <p className="text-[10px] text-zinc-700 uppercase tracking-widest">
              AxiForce Markets • Secure Trading Environment • Strictly Prototype
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
