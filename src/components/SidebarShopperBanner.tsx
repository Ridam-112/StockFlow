import React from "react";
import { Rocket, ArrowRight } from "lucide-react";

export default function SidebarShopperBanner() {
  return (
    <div className="relative mx-3.5 mb-4 mt-auto rounded-[20px] bg-gradient-to-br from-[#1c1a35] to-[#121320] p-4 overflow-hidden border border-[#8e85fe]/20 shadow-lg select-none group">
      {/* Glow highlight */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#6964fe]/20 rounded-full blur-xl pointer-events-none" />

      {/* Rocket Icon */}
      <div className="w-9 h-9 rounded-xl bg-[#282548] border border-[#8e85fe]/30 text-[#8e85fe] flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform">
        <Rocket className="w-5 h-5 text-[#9b94fe]" />
      </div>

      {/* Text */}
      <h4 className="text-sm font-bold text-white tracking-tight mb-1">
        Grow Your Business
      </h4>
      <p className="text-[11px] text-[#8e94a8] leading-relaxed mb-3.5">
        Reach more customers with StockFlow
      </p>

      {/* Upgrade Plan Button */}
      <button 
        type="button"
        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#6964fe] to-[#8079ff] hover:from-[#7873ff] hover:to-[#918aff] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-[#6964fe]/25 transition-all cursor-pointer active:scale-95"
      >
        <span>Upgrade Plan</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
