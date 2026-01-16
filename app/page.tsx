export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#68121f] selection:text-white font-sans">
      {/* HEADER STRIPES */}
      <div className="w-full">
        <div className="h-[28px] bg-[#68121f] w-full"></div>
        <div className="h-[6px] bg-[#ffffff] w-full"></div>
        <div className="h-[20px] bg-[#185347] w-full"></div>
      </div>

      {/* HERO SECTION - 100VH */}
      <section className="relative h-[calc(100vh-54px)] w-full overflow-hidden flex flex-col">
        {/* BACKGROUND IMAGE WITH OVERLAY */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000" 
            alt="Torcida Fluminense" 
            className="w-full h-full object-cover blur-[2px] grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-brightness-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171717]/40 to-[#171717]"></div>
        </div>

        {/* TOP NAVIGATION BAR */}
        <div className="relative z-20 w-full px-4 md:px-8 py-4 flex justify-between items-start max-w-[1440px] mx-auto">
          {/* LOGO BLOCK */}
          <div className="flex flex-col items-center bg-[#68121f] p-4 pt-2 min-w-[100px]">
            <img 
              src="https://upload.wikimedia.org/wikipedia/pt/a/a3/Fluminense_FC_escudo.png" 
              alt="Fluminense" 
              className="w-12 h-12 brightness-0 invert mb-2"
            />
            <span className="text-white text-xs font-bold tracking-tighter leading-none text-center">
              SÓCIO<br/>FUTEBOL
            </span>
          </div>

          {/* COUNTER */}
          <div className="hidden md:flex flex-col items-center text-white">
            <span className="text-xs tracking-[0.3em] font-bold opacity-80">SOMOS</span>
            <span className="text-5xl font-black tracking-tighter leading-none">39.095</span>
            <span className="text-xs tracking-[0.3em] font-bold opacity-80">SÓCIOS DO FLU</span>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-sm font-medium tracking-widest uppercase">Login</span>
            </div>
            <button className="bg-[#68121f] px-6 py-3 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-[#185347] transition-colors">
              Cadastre-se
            </button>
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="relative z-20 px-4 md:px-8 mt-4 max-w-[1440px] mx-auto w-full">
          <button className="flex items-center gap-3 bg-[#68121f] px-4 py-2 rounded-md group">
            <div className="bg-white/10 p-1 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Voltar</span>
          </button>
        </div>

        {/* CENTRAL CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4">
          <span className="text-2xl md:text-3xl font-bold tracking-[0.4em] mb-2">PLANOS</span>
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-none mb-8">
            ARQUIBA
          </h1>
          
          <div className="mt-12 flex flex-col items-center animate-bounce">
            <span className="text-sm md:text-lg font-medium tracking-[0.3em] mb-4">CONHEÇA TODOS OS PLANOS</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>

        {/* FLOATING WHATSAPP */}
        <div className="fixed bottom-8 right-8 z-50">
          <div className="w-16 h-16 bg-[#185347] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform border-2 border-white/20">
            <img 
              src="https://upload.wikimedia.org/wikipedia/pt/a/a3/Fluminense_FC_escudo.png" 
              alt="Suporte" 
              className="w-10 h-10 brightness-0 invert"
            />
          </div>
        </div>
      </section>

      {/* BENEFICIOS SECTION */}
      <section id="beneficios" className="py-24 bg-[#171717] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group bg-[#1a1a1a]">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">🏟️</div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Prioridade 1</h3>
              <p className="text-gray-400 leading-relaxed">Garanta seu ingresso antes de todo mundo nos jogos com mando do Fluminense.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#68121f] transition-colors group bg-[#1a1a1a]">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">🛡️</div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Rede de Parceiros</h3>
              <p className="text-gray-400 leading-relaxed">Descontos exclusivos em produtos oficiais e marcas parceiras do Tricolor.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group bg-[#1a1a1a]">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">⚽</div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Experiências</h3>
              <p className="text-gray-400 leading-relaxed">Participe de sorteios para visitas ao CT, Laranjeiras e eventos exclusivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#393939] bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <span className="w-12 h-1 bg-[#185347]"></span>
            <span className="w-12 h-1 bg-[#ffffff]"></span>
            <span className="w-12 h-1 bg-[#68121f]"></span>
          </div>
          <p className="uppercase tracking-widest text-sm font-bold mb-4">
            Fluminense Football Club - Sócio Futebol
          </p>
          <p className="text-[#393939] text-xs uppercase tracking-tighter">
            &copy; {new Date().getFullYear()} - O orgulho de ser tricolor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}