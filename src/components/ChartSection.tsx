import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { CHART_DATA } from '../constants';

export default function ChartSection() {
  return (
    <div className="h-[400px] w-full rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">Live Market Chart</h3>
          <p className="text-xs text-zinc-500">EUR / USD • 1H timeframe</p>
        </div>
        <div className="flex gap-2">
          {['1H', '4H', '1D', '1W'].map((t) => (
            <button 
              key={t} 
              className={`rounded-md px-3 py-1 text-[10px] font-bold ${t === '1H' ? 'bg-blue-600 text-white' : 'bg-white/5 text-zinc-500 hover:bg-white/10'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={CHART_DATA}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#71717a' }} 
              minTickGap={20}
            />
            <YAxis 
              domain={['dataMin - 0.001', 'dataMax + 0.001']} 
              hide 
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
              itemStyle={{ color: '#ffffff', fontSize: '12px' }}
              labelStyle={{ color: '#71717a', fontSize: '10px', marginBottom: '4px' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
