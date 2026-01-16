export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#68121f] selection:text-white font-sans overflow-x-hidden">
      {/* HEADER STRIPES */}
      <div className="w-full fixed top-0 z-50">
        <div className="h-[28px] bg-[#68121f] w-full"></div>
        <div className="h-[6px] bg-[#ffffff] w-full"></div>
        <div className="h-[20px] bg-[#185347] w-full"></div>
      </div>

      {/* HERO SECTION - 100VH */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col pt-[54px]">
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000" 
            alt="Torcida Fluminense" 
            className="w-full h-full object-cover blur-[4px] brightness-[0.4] grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#171717]"></div>
          <div className="absolute inset-0 bg-[#185347]/10 mix-blend-overlay"></div>
        </div>

        {/* TOP NAVIGATION BAR */}
        <div className="relative z-20 w-full px-4 md:px-12 py-0 flex justify-between items-start">
          {/* LOGO BLOCK */}
          <div className="flex flex-col items-center bg-[#68121f] p-4 pt-6 min-w-[120px] shadow-xl">
            <img 
              src="https://upload.wikimedia.org/wikipedia/pt/a/a3/Fluminense_FC_escudo.png" 
              alt="Fluminense" 
              className="w-14 h-14 brightness-0 invert mb-3"
            />
            <span className="text-white text-[10px] font-black tracking-widest leading-none text-center uppercase">
              Sócio<br/>Futebol
            </span>
          </div>

          {/* COUNTER */}
          <div className="absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center text-white">
            <span className="text-[10px] tracking-[0.4em] font-bold opacity-90 mb-1">SOMOS</span>
            <span className="text-6xl md:text-7xl font-black tracking-tighter leading-none">39.095</span>
            <span className="text-[10px] tracking-[0.4em] font-bold opacity-90 mt-1">SÓCIOS DO FLU</span>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-xs font-medium tracking-[0.2em] uppercase">Login</span>
            </div>
            <button className="bg-[#68121f] px-8 py-3 rounded-sm font-black text-xs tracking-[0.2em] uppercase hover:bg-[#185347] transition-all shadow-lg">
              Cadastre-se
            </button>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="relative z-20 px-4 md:px-12 mt-8 w-full">
          <button className="flex items-center gap-4 bg-[#68121f] pl-2 pr-6 py-2 rounded-md hover:translate-x-[-4px] transition-transform">
            <div className="bg-white/20 p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Voltar</span>
          </button>
        </div>

        {/* CENTRAL CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 -mt-20">
          <span className="text-xl md:text-2xl font-bold tracking-[0.6em] mb-4 opacity-90">PLANOS</span>
          <h1 className="text-8xl md:text-[160px] font-black tracking-tighter leading-none text-white drop-shadow-2xl">
            ARQUIBA
          </h1>
          
          <div className="mt-16 flex flex-col items-center animate-bounce opacity-80">
            <span className="text-xs md:text-sm font-bold tracking-[0.5em] mb-4">CONHEÇA TODOS OS PLANOS</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>

        {/* FLOATING WHATSAPP */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="w-16 h-16 bg-[#185347] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(24,83,71,0.5)] cursor-pointer hover:scale-110 transition-transform border-2 border-white/10">
            <img 
              src="https://upload.wikimedia.org/wikipedia/pt/a/a3/Fluminense_FC_escudo.png" 
              alt="Suporte" 
              className="w-10 h-10 brightness-0 invert"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section id="beneficios" className="py-32 bg-[#171717] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 border border-[#393939] hover:border-[#185347] transition-all group bg-[#1a1a1a] relative overflow-hidden">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">🏟️</div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Prioridade 1</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Garanta seu ingresso antes de todo mundo nos jogos com mando do Fluminense.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#185347] group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="p-10 border border-[#393939] hover:border-[#68121f] transition-all group bg-[#1a1a1a] relative overflow-hidden">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">🛡️</div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Rede de Parceiros</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Descontos exclusivos em produtos oficiais e marcas parceiras do Tricolor.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#68121f] group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="p-10 border border-[#393939] hover:border-[#185347] transition-all group bg-[#1a1a1a] relative overflow-hidden">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">⚽</div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">Experiências</h3>
              <p className="text-gray-400 leading-relaxed font-medium">Participe de sorteios para visitas ao CT, Laranjeiras e eventos exclusivos.</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#185347] group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-[#393939] bg-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-10">
            <span className="w-16 h-1.5 bg-[#68121f]"></span>
            <span className="w-16 h-1.5 bg-[#ffffff]"></span>
            <span className="w-16 h-1.5 bg-[#185347]"></span>
          </div>
          <p className="uppercase tracking-[0.3em] text-sm font-black mb-6">
            Fluminense Football Club - Sócio Futebol
          </p>
          <p className="text-[#4a4a4a] text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} - O orgulho de ser tricolor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}