import React, { useState } from "react";
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer 
} from "recharts";
import { 
  TrendingUp, ArrowUpRight, Plus, Store, Truck, Wrench,
  ShoppingBag, Users, Calendar, ChevronDown, Check,
  ChevronRight, MoreHorizontal, ArrowRight, Star,
  Utensils, Smartphone, Shirt, Home, MoreHorizontal as MoreIcon
} from "lucide-react";

interface ModernDashboardProps {
  onNavigateTab?: (tab: string) => void;
}

// Chart data representing Sales Overview curve in the reference image
const salesData = [
  { day: "Oct 1", sales: 22000, orders: 820 },
  { day: "Oct 4", sales: 34000, orders: 1100 },
  { day: "Oct 7", sales: 52000, orders: 1540 },
  { day: "Oct 10", sales: 41000, orders: 1250 },
  { day: "Oct 14", sales: 46000, orders: 1390 },
  { day: "Oct 17", sales: 61000, orders: 1820 },
  { day: "Oct 21", sales: 78420, orders: 2310 }, // peak
  { day: "Oct 24", sales: 62000, orders: 1780 },
  { day: "Oct 27", sales: 54000, orders: 1610 },
  { day: "Oct 30", sales: 68000, orders: 1940 },
];

export default function ModernExptDashboard({ onNavigateTab }: ModernDashboardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  const [chartMetric, setChartMetric] = useState<"sales" | "orders">("sales");

  return (
    <div className="space-y-6 text-white pb-12">
      {/* ─────────────────────────────────────────────────────────────
          TOP SUBHEADER: Welcome banner + Time Range Dropdown
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-[28px] font-bold tracking-tight text-white flex items-center gap-2">
            Welcome back, Ridam!
          </h1>
          <p className="text-xs sm:text-sm text-[#8d95ab] mt-1 font-normal">
            Here's what's happening with your <span className="text-[#8e85fe] font-medium">StockFlow</span> today.
          </p>
        </div>

        {/* Top Dropdown: Last 30 Days */}
        <div className="relative self-start sm:self-auto">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#171a23] border border-white/[0.08] hover:border-[#8e85fe]/50 text-xs font-semibold text-white transition-all shadow-sm group cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#8e85fe]" />
            <span>{timeRange}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-[#7e859a] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setDropdownOpen(false)} 
              />
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#171a23] border border-white/[0.1] shadow-2xl p-1.5 z-50 backdrop-blur-xl">
                {["Today", "Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"].map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setTimeRange(range);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                      timeRange === range
                        ? "bg-[#6964fe] text-white"
                        : "text-[#a0a7bd] hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{range}</span>
                    {timeRange === range && <Check className="w-3.5 h-3.5 text-white" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          ROW 1: 4 Metric Cards with Neon Glow & Sparklines
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* CARD 1: Total Sales */}
        <div className="bg-[#171a23] border border-white/[0.06] rounded-[22px] p-5 relative overflow-hidden group hover:border-[#8e85fe]/40 transition-all">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#282548] border border-[#8e85fe]/30 text-[#8e85fe] flex items-center justify-center font-bold shadow-inner">
              <ShoppingBag className="w-5 h-5 text-[#9e96fe]" />
            </div>
            <span className="text-[#969cb0] text-xs font-medium">Total Sales</span>
          </div>

          <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white mb-2">
            ₹1,24,580
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12.5%</span>
            <span className="text-[#8e94a8] font-normal text-[11px]">vs last month</span>
          </div>

          {/* Sparkline decoration */}
          <div className="absolute right-3 bottom-3 w-20 h-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
            <svg viewBox="0 0 80 40" className="w-full h-full">
              <path d="M 0 32 Q 20 28, 35 15 T 60 22 T 80 8" fill="none" stroke="#8e85fe" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* CARD 2: Total Orders */}
        <div className="bg-[#171a23] border border-white/[0.06] rounded-[22px] p-5 relative overflow-hidden group hover:border-blue-500/40 transition-all">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1e2a4a] border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold shadow-inner">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[#969cb0] text-xs font-medium">Total Orders</span>
          </div>

          <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white mb-2">
            4,892
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+8.3%</span>
            <span className="text-[#8e94a8] font-normal text-[11px]">vs last month</span>
          </div>

          {/* Sparkline decoration */}
          <div className="absolute right-3 bottom-3 w-20 h-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
            <svg viewBox="0 0 80 40" className="w-full h-full">
              <path d="M 0 30 Q 25 35, 45 18 T 65 24 T 80 10" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* CARD 3: Total Customers */}
        <div className="bg-[#171a23] border border-white/[0.06] rounded-[22px] p-5 relative overflow-hidden group hover:border-[#8e85fe]/40 transition-all">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#282548] border border-[#8e85fe]/30 text-[#8e85fe] flex items-center justify-center font-bold shadow-inner">
              <Users className="w-5 h-5 text-[#9e96fe]" />
            </div>
            <span className="text-[#969cb0] text-xs font-medium">Total Customers</span>
          </div>

          <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white mb-2">
            3,245
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+14.7%</span>
            <span className="text-[#8e94a8] font-normal text-[11px]">vs last month</span>
          </div>

          {/* Sparkline decoration */}
          <div className="absolute right-3 bottom-3 w-20 h-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
            <svg viewBox="0 0 80 40" className="w-full h-full">
              <path d="M 0 35 Q 20 22, 40 25 T 60 14 T 80 6" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* CARD 4: Active Stores */}
        <div className="bg-[#171a23] border border-white/[0.06] rounded-[22px] p-5 relative overflow-hidden group hover:border-[#8e85fe]/40 transition-all">
          <div className="flex items-center gap-3 mb-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#282548] border border-[#8e85fe]/30 text-[#8e85fe] flex items-center justify-center font-bold shadow-inner">
              <Store className="w-5 h-5 text-[#9e96fe]" />
            </div>
            <span className="text-[#969cb0] text-xs font-medium">Active Stores</span>
          </div>

          <div className="text-2xl lg:text-[28px] font-bold tracking-tight text-white mb-2">
            156
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#22c55e] font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+6.1%</span>
            <span className="text-[#8e94a8] font-normal text-[11px]">vs last month</span>
          </div>

          {/* Sparkline decoration */}
          <div className="absolute right-3 bottom-3 w-20 h-10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
            <svg viewBox="0 0 80 40" className="w-full h-full">
              <path d="M 0 28 Q 25 15, 50 25 T 80 8" fill="none" stroke="#8e85fe" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          ROW 2: Sales Overview Chart + ⚡ Quick Actions
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT: Sales Overview Multi-curve Chart (7 or 8 cols) */}
        <div className="lg:col-span-8 bg-[#171a23] border border-white/[0.06] rounded-[24px] p-6 hover:border-white/[0.12] transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">Sales Overview</h3>
            </div>

            {/* Metric Switch Pills: Sales / Orders */}
            <div className="flex items-center p-1 rounded-xl bg-[#12141a] border border-white/[0.06]">
              <button
                onClick={() => setChartMetric("sales")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  chartMetric === "sales"
                    ? "bg-[#6964fe] text-white shadow-md"
                    : "text-[#8e94a8] hover:text-white"
                }`}
              >
                Sales
              </button>
              <button
                onClick={() => setChartMetric("orders")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  chartMetric === "orders"
                    ? "bg-[#6964fe] text-white shadow-md"
                    : "text-[#8e94a8] hover:text-white"
                }`}
              >
                Orders
              </button>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="relative h-[250px] w-full pt-4">
            {/* Peak highlight pill on Oct 21 */}
            <div className="absolute top-5 left-[68%] -translate-x-1/2 z-10 pointer-events-none">
              <div className="bg-[#12141a] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-[#8e85fe]/50 shadow-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8e85fe] animate-pulse"></span>
                <span>{chartMetric === "sales" ? "₹78,420" : "2,310 orders"}</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  {/* Purple Neon Gradient */}
                  <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8e85fe" stopOpacity={0.45} />
                    <stop offset="60%" stopColor="#6964fe" stopOpacity={0.12} />
                    <stop offset="100%" stopColor="#171a23" stopOpacity={0.0} />
                  </linearGradient>
                </defs>

                <XAxis 
                  dataKey="day" 
                  stroke="#575e75" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={8}
                />
                <YAxis 
                  stroke="#575e75" 
                  fontSize={11} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(val) => chartMetric === "sales" ? `${val / 1000}k` : `${val}`}
                />

                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#161922", 
                    borderColor: "rgba(255,255,255,0.1)", 
                    borderRadius: "14px", 
                    color: "#fff",
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)"
                  }} 
                  formatter={(val: number) => [
                    chartMetric === "sales" ? `₹${val.toLocaleString()}` : `${val} orders`,
                    chartMetric === "sales" ? "Revenue" : "Orders"
                  ]}
                />

                <Area 
                  type="monotone" 
                  dataKey={chartMetric} 
                  stroke="#8e85fe" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#purpleGlow)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            RIGHT: ⚡ Quick Actions (4 cols)
        ───────────────────────────────────────────────────────────── */}
        <div className="lg:col-span-4 bg-[#171a23] border border-white/[0.06] rounded-[24px] p-6 hover:border-white/[0.12] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="text-[#8e85fe] font-bold text-base">⚡</span>
                <h3 className="text-base font-bold text-white tracking-tight">Quick Actions</h3>
              </div>
            </div>

            {/* 2x2 Grid of Actions */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* 1. Add Product */}
              <button
                type="button"
                onClick={() => onNavigateTab?.('products')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#13151d] border border-white/[0.06] hover:border-[#8e85fe]/50 hover:bg-[#1d202e] transition-all group cursor-pointer text-center active:scale-95 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#282548] text-[#8e85fe] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6964fe] group-hover:text-white transition-all mb-2.5 shadow-inner">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#cfd4e2] group-hover:text-white transition-colors">
                  Add Product
                </span>
              </button>

              {/* 2. Add Store */}
              <button
                type="button"
                onClick={() => onNavigateTab?.('shops')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#13151d] border border-white/[0.06] hover:border-[#8e85fe]/50 hover:bg-[#1d202e] transition-all group cursor-pointer text-center active:scale-95 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#282548] text-[#8e85fe] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6964fe] group-hover:text-white transition-all mb-2.5 shadow-inner">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#cfd4e2] group-hover:text-white transition-colors">
                  Add Store
                </span>
              </button>

              {/* 3. Manage Orders */}
              <button
                type="button"
                onClick={() => onNavigateTab?.('orders')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#13151d] border border-white/[0.06] hover:border-[#8e85fe]/50 hover:bg-[#1d202e] transition-all group cursor-pointer text-center active:scale-95 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#282548] text-[#8e85fe] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6964fe] group-hover:text-white transition-all mb-2.5 shadow-inner">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#cfd4e2] group-hover:text-white transition-colors">
                  Manage Orders
                </span>
              </button>

              {/* 4. Service Center */}
              <button
                type="button"
                onClick={() => onNavigateTab?.('service-corner')}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#13151d] border border-white/[0.06] hover:border-[#8e85fe]/50 hover:bg-[#1d202e] transition-all group cursor-pointer text-center active:scale-95 shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#282548] text-[#8e85fe] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6964fe] group-hover:text-white transition-all mb-2.5 shadow-inner">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#cfd4e2] group-hover:text-white transition-colors">
                  Service Center
                </span>
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3.5 border-t border-white/[0.04] flex items-center justify-between text-xs text-[#8e94a8]">
            <span>Fast navigation</span>
            <button 
              type="button"
              onClick={() => onNavigateTab?.('analytics')} 
              className="text-[#8e85fe] hover:text-white flex items-center gap-1 font-semibold transition-colors"
            >
              All Tools <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          ROW 3: Bottom Cards (Top Categories, Recent Orders, Top Store)
      ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 1. Top Categories (4 cols) */}
        <div className="lg:col-span-4 bg-[#171a23] border border-white/[0.06] rounded-[24px] p-6 hover:border-white/[0.12] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-base font-bold text-white tracking-tight">Top Categories</h3>
              <button 
                type="button"
                onClick={() => onNavigateTab?.('categories')}
                className="text-xs font-semibold text-[#8e85fe] hover:text-[#b4adff] flex items-center gap-1 transition-colors"
              >
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Groceries", icon: ShoppingBag, color: "text-[#8e85fe]" },
                { name: "Food", icon: Utensils, color: "text-amber-400" },
                { name: "Electronics", icon: Smartphone, color: "text-blue-400" },
                { name: "Fashion", icon: Shirt, color: "text-pink-400" },
                { name: "Home & Living", icon: Home, color: "text-emerald-400" },
                { name: "More", icon: MoreIcon, color: "text-[#8e85fe]" },
              ].map((cat) => (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => onNavigateTab?.('categories')}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#13151d] border border-white/[0.04] hover:border-[#8e85fe]/40 hover:bg-[#1a1d29] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#202330] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <span className="text-[11px] font-semibold text-[#969cb0] group-hover:text-white transition-colors truncate max-w-full">
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Recent Orders (5 cols) */}
        <div className="lg:col-span-5 bg-[#171a23] border border-white/[0.06] rounded-[24px] p-6 hover:border-white/[0.12] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white tracking-tight">Recent Orders</h3>
              <button 
                type="button"
                onClick={() => onNavigateTab?.('orders')}
                className="text-xs font-semibold text-[#8e85fe] hover:text-[#b4adff] flex items-center gap-1 transition-colors"
              >
                View All <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: "SM12345",
                  title: "Fresh Vegetables Pack",
                  price: "₹120",
                  status: "Delivered",
                  statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                  img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=80&q=80",
                },
                {
                  id: "SM12344",
                  title: "Wireless Earbuds",
                  price: "₹1,999",
                  status: "Processing",
                  statusCls: "bg-amber-500/10 text-amber-400 border-amber-500/20",
                  img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=80&q=80",
                },
                {
                  id: "SM12343",
                  title: "Mangoes (1kg)",
                  price: "₹90",
                  status: "Delivered",
                  statusCls: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                  img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=80&q=80",
                },
              ].map((ord) => (
                <div 
                  key={ord.id}
                  onClick={() => onNavigateTab?.('orders')}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#13151d] border border-white/[0.04] hover:border-white/[0.1] transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={ord.img} 
                      alt={ord.title} 
                      className="w-10 h-10 rounded-lg object-cover bg-[#222533]" 
                    />
                    <div>
                      <h4 className="text-xs font-semibold text-white group-hover:text-[#8e85fe] transition-colors">
                        {ord.title}
                      </h4>
                      <span className="text-[10px] text-[#787f95]">#{ord.id}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${ord.statusCls}`}>
                      {ord.status}
                    </span>
                    <span className="text-xs font-bold text-white min-w-[50px] text-right">
                      {ord.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Top Performing Store (3 cols) */}
        <div className="lg:col-span-3 bg-[#171a23] border border-white/[0.06] rounded-[24px] p-6 hover:border-white/[0.12] transition-all flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight mb-4">
              Top Performing Store
            </h3>

            <div className="rounded-2xl overflow-hidden mb-3 border border-white/[0.08] relative group">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" 
                alt="Value & Variety Store" 
                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="space-y-1 mb-3">
              <h4 className="text-sm font-bold text-white">Value & Variety</h4>
              <div className="flex items-center gap-1.5 text-xs text-[#969cb0]">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">4.8</span>
                <span className="text-[11px]">(2.1k+ reviews)</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
              <div>
                <div className="text-base font-bold text-white">₹45,230</div>
                <div className="text-[10px] text-[#787f95]">Total Sales</div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#22c55e]">
                <span>↑ 18%</span>
                <svg viewBox="0 0 40 20" className="w-8 h-4">
                  <path d="M 0 15 Q 15 18, 25 8 T 40 4" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
