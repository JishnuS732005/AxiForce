import { Bell, User, ChevronDown, Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Activity className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Axi<span className="text-blue-500">Force</span> Markets
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-4 ring-black"></span>
          </button>

          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-whiteLine">Aakash</p>
              <p className="text-[10px] text-zinc-500">AF-284719</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-white/5 p-1 pr-3 transition-colors hover:bg-white/10">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-800 text-zinc-400">
                <User className="h-5 w-5" />
              </div>
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
