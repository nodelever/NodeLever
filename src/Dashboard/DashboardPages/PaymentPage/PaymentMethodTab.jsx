import React from 'react';

export const PaymentMethodTab = () => (
  <div className="bg-[#0b071a] p-1 rounded-[2rem] max-w-4xl mx-auto shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)]">
    <div className="bg-[#0f0a1e]/80 backdrop-blur-2xl rounded-[1.8rem] p-8 border border-white/5">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Finances
          </h2>
          <p className="text-gray-400 mt-2 text-base font-medium">
            Link your accounts to automate your workflow.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-500 text-xs uppercase tracking-widest font-bold">Secure Environment</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Connect Providers */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Available Gateways</h3>
            <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded">3 NEW</span>
          </div>

          <div className="space-y-3">
            {/* Provider Item: Airtm */}
            <ProviderCard 
              name="Airtm" 
              color="blue" 
              icon={<span className="text-blue-400 font-black text-lg">A</span>} 
            />

            {/* Provider Item: PayPal */}
            <ProviderCard 
              name="PayPal" 
              color="indigo" 
              icon={
                <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
              } 
            />

            {/* Provider Item: Payoneer */}
            <ProviderCard 
              name="Payoneer" 
              color="orange" 
              icon={
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM10.5 7.5h3.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5H12v3h-1.5v-10zM12 13h2c1.103 0 2-.897 2-2s-.897-2-2-2h-2v4z" />
                </svg>
              } 
            />
          </div>
        </div>

        {/* Right Column: Info/Empty State Placeholder */}
        <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full mb-4 flex items-center justify-center border border-white/10">
             <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
             </svg>
          </div>
          <h4 className="text-white font-semibold text-lg">No Active Methods</h4>
          <p className="text-gray-400 text-sm max-w-[240px] mt-2">
            Select a provider from the left to link your account and start managing your funds.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProviderCard = ({ name, color, icon }) => {
  const colorMap = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
    indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20",
    orange: "bg-orange-500/10 border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20",
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-purple-500/5">
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${colorMap[color]}`}>
          {icon}
        </div>
        <span className="text-white font-semibold tracking-wide text-lg group-hover:translate-x-1 transition-transform">{name}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className={`text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 ${color === 'orange' ? 'text-orange-400' : color === 'blue' ? 'text-blue-400' : 'text-indigo-400'}`}>
          LINK →
        </span>
      </div>
    </div>
  );
};