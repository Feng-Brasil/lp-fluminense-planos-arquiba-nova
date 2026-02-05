export default function Home() {
  return (
    <main className="min-h-screen text-[#ffffff] selection:bg-[#68121f] selection:text-white font-sans overflow-x-hidden relative">
      {/* BACKGROUND GLOBAL COM FILTRO VERDE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066304911_1ff1b8ac8b_o.jpg" 
          alt="Background Fluminense" 
          className="w-full h-full object-cover"
        />
        {/* Camada de Filtro Esverdeado e Escurecimento */}
        <div className="absolute inset-0 bg-[#185347]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* HEADER STRIPES */}
      <div className="w-full fixed top-0 z-50">
        <div className="h-[28px] bg-[#68121f] w-full"></div>
        <div className="h-[6px] bg-[#ffffff] w-full"></div>
        <div className="h-[20px] bg-[#185347] w-full"></div>
      </div>

      {/* SCROLL 1 — HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col pt-[54px] z-10">
        {/* Gradient Overlay para suavizar o topo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>

        {/* TOP NAVIGATION BAR */}
        <div className="relative z-20 w-full px-4 md:px-12 py-0 flex justify-between items-start">
          {/* LOGO SÓCIO FLU */}
          <div className="pt-4">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/logo-socio-flu.png" 
              alt="Sócio Futebol" 
              className="h-24 md:h-32 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex items-center gap-8 mt-8">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-xs font-medium tracking-[0.2em] uppercase">Login</span>
            </div>
            <button className="bg-[#68121f] px-8 py-3 rounded-sm font-black text-xs tracking-[0.2em] uppercase hover:bg-[#185347] transition-all shadow-lg">
              Minha Conta
            </button>
          </div>
        </div>

        {/* CENTRAL CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 -mt-10">
          <div className="bg-[#185347] text-white px-6 py-2 rounded-full font-black text-sm tracking-widest mb-8 animate-pulse shadow-2xl border border-white/20">
            1 MÊS GRÁTIS NA MENSALIDADE DO CONVIDADO
          </div>
          
          <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-none text-white drop-shadow-2xl uppercase">
            Flu se vive junto!
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl font-medium max-w-2xl text-gray-200 drop-shadow-lg">
            Agora você pode levar quem vive o Fluminense com você. Convide, economize e tenha tricolores juntos.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
            <div className="bg-black/60 backdrop-blur-md p-4 border-l-4 border-[#68121f] text-left">
              <span className="block text-2xl mb-2">🎟️</span>
              <p className="text-sm font-bold uppercase tracking-wider">Mais prioridade na compra de ingressos</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-4 border-l-4 border-[#185347] text-left">
              <span className="block text-2xl mb-2">💰</span>
              <p className="text-sm font-bold uppercase tracking-wider">Descontos em ingressos para convidados</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-4 border-l-4 border-[#68121f] text-left">
              <span className="block text-2xl mb-2">👥</span>
              <p className="text-sm font-bold uppercase tracking-wider">Viva o jogo com quem faz parte da sua história</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-4 border-l-4 border-[#185347] text-left">
              <span className="block text-2xl mb-2">🏆</span>
              <p className="text-sm font-bold uppercase tracking-wider">Caminho para a Libertadores, juntos desde agora</p>
            </div>
          </div>

          <button className="mt-12 bg-[#68121f] px-12 py-5 rounded-sm font-black text-lg tracking-[0.2em] uppercase hover:bg-[#185347] transition-all shadow-[0_0_30px_rgba(104,18,31,0.4)] hover:scale-105">
            Adicionar convidado agora
          </button>
          
          <div className="mt-8 animate-bounce opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* SCROLL 2 — EXPLICAÇÃO + REGRAS */}
      <section className="py-24 relative z-10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 drop-shadow-lg">Seu plano agora vale ainda mais</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
              Com convidados, seu plano ganha mais poder: mais pessoas com prioridade, mais economia e mais companhia para viver cada jogo decisivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* ARQUIBA 100% */}
            <div className="bg-black/70 backdrop-blur-lg border-t-8 border-[#68121f] p-10 rounded-b-xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter">ARQUIBA 100%</h3>
                <span className="bg-[#68121f] text-xs font-bold px-3 py-1 rounded">MAIS COMPLETO</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#68121f] rounded-full"></div>
                  Mais liberdade para compartilhar a experiência
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#68121f] rounded-full"></div>
                  Pode contratar até 3 convidados
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#68121f] rounded-full"></div>
                  Pode cadastrar até 5 convidados
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-bold text-white">
                  <div className="h-2 w-2 bg-[#68121f] rounded-full"></div>
                  Mais pessoas com prioridade nos ingressos
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#68121f] rounded-full"></div>
                  Ideal para família e grupo de amigos
                </li>
              </ul>
              <p className="text-sm text-gray-400 italic">*Valor por convidado: R$ 25,00/mês</p>
            </div>

            {/* ARQUIBA 75% */}
            <div className="bg-black/70 backdrop-blur-lg border-t-8 border-[#185347] p-10 rounded-b-xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter">ARQUIBA 75%</h3>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#185347] rounded-full"></div>
                  A forma mais fácil de trazer alguém para viver o Flu com você
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#185347] rounded-full"></div>
                  Pode contratar 1 convidado
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <div className="h-2 w-2 bg-[#185347] rounded-full"></div>
                  Pode cadastrar até 3 convidados
                </li>
              </ul>
              <p className="text-sm text-gray-400 italic">*Valor por convidado: R$ 25,00/mês</p>
            </div>
          </div>

          {/* BLOCO EMOCIONAL */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-20 shadow-2xl">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066304911_1ff1b8ac8b_o.jpg" 
              alt="Torcida Fluminense" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-[#185347]/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 max-w-4xl drop-shadow-2xl">
                A Libertadores está chegando. Quem vai estar ao seu lado quando o Maracanã pulsar com o verde e grená?
              </h3>
              <div className="bg-[#68121f] px-8 py-4 rounded-sm shadow-xl">
                <p className="font-black text-xl uppercase tracking-widest">Contrate um convidado e ganhe 1 mês grátis na mensalidade dele.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#185347] px-16 py-6 rounded-sm font-black text-2xl tracking-[0.2em] uppercase hover:bg-[#68121f] transition-all shadow-2xl hover:scale-105 mb-4">
              Quero trazer meu convidado
            </button>
            <p className="text-gray-300 font-bold uppercase tracking-widest text-sm drop-shadow-md">Leva menos de 1 minuto.</p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP / SUPPORT */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-16 h-16 bg-[#185347] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(24,83,71,0.5)] cursor-pointer hover:scale-110 transition-transform border-2 border-white/10 overflow-hidden">
          <img 
            src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/webchat-icon-1743608850551.png" 
            alt="Suporte" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/10 bg-black/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-10">
            <span className="w-16 h-1.5 bg-[#68121f]"></span>
            <span className="w-16 h-1.5 bg-[#ffffff]"></span>
            <span className="w-16 h-1.5 bg-[#185347]"></span>
          </div>
          <p className="uppercase tracking-[0.3em] text-sm font-black mb-6">
            Fluminense Football Club - Sócio Futebol
          </p>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} - O orgulho de ser tricolor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}