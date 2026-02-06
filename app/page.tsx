import localFont from 'next/font/local';

const balboa = localFont({
  src: [
    {
      path: '../public/fonts/Balboa-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Balboa-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Balboa-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-balboa',
});

export default function Home() {
  return (
    <main className={`${balboa.className} min-h-screen text-[#ffffff] selection:bg-[#68121f] selection:text-white overflow-x-hidden relative font-normal`}>
      {/* BACKGROUND GLOBAL COM FILTRO VERDE */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/54977830972_fd630a8cec_o.jpg" 
          alt="Background Fluminense" 
          className="w-full h-full object-cover"
        />
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
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col pt-[54px] z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>

        {/* TOP NAVIGATION BAR */}
        <div className="relative z-20 w-full max-w-[1140px] mx-auto px-[15px] py-6 flex justify-between items-center">
          <div className="pt-2">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/logo-socio-flu.png" 
              alt="Sócio Futebol" 
              className="h-16 md:h-24 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Login</span>
            </div>
            <button className="bg-[#68121f] px-6 md:px-8 py-2.5 md:py-3 rounded-sm font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#185347] transition-all shadow-lg">
              Minha Conta
            </button>
          </div>
        </div>

        {/* CENTRAL CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-[15px] py-12 md:py-20 mt-[-40px] md:mt-[-80px]">
          
          <div className="mb-8 md:mb-12 bg-[#185347] text-white px-6 md:px-8 py-3 rounded-full font-bold text-[10px] md:text-xs tracking-widest animate-pulse shadow-2xl border border-white/20 uppercase">
            1 MÊS GRÁTIS NA MENSALIDADE DO CONVIDADO
          </div>

          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-[90px] lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-white drop-shadow-2xl uppercase">
              O FLU SE VIVE JUNTO!
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl font-bold max-w-[800px] mx-auto text-gray-200 drop-shadow-lg leading-relaxed">
              Convide, economize e sigam juntos na arquibancada.
            </p>
          </div>

          {/* GRID DE BENEFÍCIOS */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full max-w-[1140px] mx-auto">
            <div className="bg-black/60 backdrop-blur-md p-8 border-l-4 border-[#68121f] text-left">
              <div className="mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider leading-snug">Mais prioridade na compra de ingressos</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-8 border-l-4 border-[#185347] text-left">
              <div className="mb-4 text-white">
                <span className="text-3xl font-bold leading-none">$</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider leading-snug">Descontos em ingressos para convidados</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-8 border-l-4 border-[#68121f] text-left">
              <div className="mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider leading-snug">Viva o jogo com quem faz parte da sua história</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-8 border-l-4 border-[#185347] text-left">
              <div className="mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider leading-snug">VAMOS TODOS JUNTOS RUMO À GLÓRIA</p>
            </div>
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <button className="bg-[#68121f] px-10 md:px-14 py-4 md:py-5 rounded-sm font-bold text-base md:text-lg tracking-[0.2em] uppercase hover:bg-[#185347] transition-all shadow-[0_0_40px_rgba(104,18,31,0.4)] hover:scale-105 block w-fit">
              Adicionar convidado agora
            </button>
          </div>
          
          <div className="animate-bounce opacity-40 mt-12 md:mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* NOVO SCROLL — DETALHES DO CONVIDADO (VERTICAL SPLIT) */}
      <section className="relative min-h-screen w-full flex items-center z-10 bg-black/60 backdrop-blur-md py-20 border-y border-white/5">
        <div className="max-w-[1140px] mx-auto px-[15px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* LADO ESQUERDO: TEXTO EXPLICATIVO */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-tight border-l-8 border-[#68121f] pl-6">
              Leve mais uma pessoa para todos os jogos
            </h2>
            
            <div className="space-y-6 text-gray-200">
              <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                Ao adicionar um convidado ao seu plano, você passa a ter direito a comprar 1 ingresso extra por partida, sempre com:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#185347] rotate-45 shrink-0"></div>
                  <span className="text-base md:text-lg font-bold">50% de desconto garantido</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-[#185347] rotate-45 shrink-0"></div>
                  <span className="text-base md:text-lg font-bold">Mesma prioridade de compra do titular</span>
                </li>
              </ul>

              <p className="text-base md:text-lg italic text-[#ffffff]/90 font-medium">
                Ou seja: mais chances reais de garantir presença nos jogos mais disputados.
              </p>

              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-sm md:text-base leading-relaxed">
                  <strong className="text-white block mb-2 uppercase tracking-widest text-xs">Como usar na prática:</strong>
                  Você cadastra uma lista de pessoas autorizadas e decide, a cada jogo, quem vai usar o ingresso.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  A quantidade de pessoas que podem ser cadastradas depende do seu plano — assim você mantém flexibilidade para levar amigos e familiares ao longo da temporada.
                </p>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: ESPAÇO PARA IMAGEM */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#68121f]/20 rounded-xl blur-2xl group-hover:bg-[#185347]/20 transition-colors duration-500"></div>
            <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/54124694464_515904085f_o.jpg" 
                alt="Sócio e convidado entrando juntos no Maracanã" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-2 mb-3">
                  <div className="h-1 w-8 bg-[#68121f]"></div>
                  <div className="h-1 w-8 bg-white"></div>
                  <div className="h-1 w-8 bg-[#185347]"></div>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-white">Vibre em cada lance acompanhado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL 2 — EXPLICAÇÃO + REGRAS */}
      <section className="py-20 md:py-32 relative z-10 bg-black/40">
        <div className="max-w-[1140px] mx-auto px-[15px]">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-6 drop-shadow-lg">Seu plano agora vale ainda mais</h2>
            <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md font-normal leading-relaxed">
              Com convidados, seu plano ganha mais poder: mais pessoas com prioridade, mais economia e mais companhia para viver cada jogo decisivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-20 md:mb-32">
            {/* ARQUIBA 100% */}
            <div className="bg-black/70 border-t-8 border-[#68121f] p-8 md:p-12 rounded-b-xl shadow-2xl flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">ARQUIBA 100%</h3>
                  <span className="bg-[#68121f] text-[10px] font-bold px-4 py-1.5 rounded whitespace-nowrap inline-block tracking-widest">MAIS COMPLETO</span>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#68121f] rounded-full mt-1.5 shrink-0"></div>
                    Mais liberdade para compartilhar a experiência
                  </li>
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#68121f] rounded-full mt-1.5 shrink-0"></div>
                    Pode contratar até 3 convidados
                  </li>
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#68121f] rounded-full mt-1.5 shrink-0"></div>
                    Pode cadastrar até 5 convidados
                  </li>
                  <li className="flex items-start gap-3 text-white font-bold text-sm">
                    <div className="h-2 w-2 bg-[#68121f] rounded-full mt-1.5 shrink-0"></div>
                    Mais pessoas com prioridade nos ingressos
                  </li>
                </ul>
                <p className="text-[10px] md:text-xs text-gray-400 italic font-normal">*Valor por convidado: R$ 25,00/mês</p>
              </div>
              <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066489568_bbbfe6968c_o.jpg" 
                  alt="Torcida Tricolor Arquiba 100%" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* ARQUIBA 75% */}
            <div className="bg-black/70 border-t-8 border-[#185347] p-8 md:p-12 rounded-b-xl shadow-2xl flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">ARQUIBA 75%</h3>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-1.5 shrink-0"></div>
                    A forma mais fácil de trazer alguém para viver o Flu com você
                  </li>
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-1.5 shrink-0"></div>
                    Pode contratar 1 convidado
                  </li>
                  <li className="flex items-start gap-3 text-gray-200 font-normal text-sm">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-1.5 shrink-0"></div>
                    Pode cadastrar até 3 convidados
                  </li>
                </ul>
                <p className="text-[10px] md:text-xs text-gray-400 italic font-normal">*Valor por convidado: R$ 25,00/mês</p>
              </div>
              <div className="w-full md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55067665758_fd737bdc80_jhgsfrd.jpg" 
                  alt="Torcida Tricolor Arquiba 75%" 
                  className="w-full h-full object-cover object-[center_35%]"
                />
              </div>
            </div>
          </div>

          {/* BLOCO EMOCIONAL */}
          <div className="relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden mb-20 md:mb-32 shadow-2xl">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066556724_670bdec29c_o.jpg" 
              alt="Torcida Fluminense Libertadores" 
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-[#185347]/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-16">
              <h3 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter mb-8 md:mb-12 max-w-4xl drop-shadow-2xl leading-tight">
                A Libertadores está chegando. Quem vai estar ao seu lado quando o Maracanã pulsar com o verde e grená?
              </h3>
              <div className="bg-[#68121f] px-6 md:px-10 py-4 md:py-6 rounded-sm shadow-xl border border-white/10">
                <p className="font-bold text-base md:text-xl uppercase tracking-widest">Contrate um convidado e ganhe 1 mês grátis na mensalidade dele.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pb-12 md:pb-20">
            <button className="bg-[#185347] px-10 md:px-14 py-5 md:py-7 rounded-sm font-bold text-lg md:text-2xl tracking-[0.2em] uppercase hover:bg-[#68121f] transition-all shadow-2xl hover:scale-105 mb-6">
              Quero trazer meu convidado
            </button>
            <p className="text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs drop-shadow-md">Leva menos de 1 minuto.</p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP / SUPPORT */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#185347] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform border-2 border-white/10 overflow-hidden">
          <img 
            src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/webchat-icon-1743608850551.png" 
            alt="Suporte" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-12 md:py-16 border-t border-white/10 bg-black/90 backdrop-blur-md relative z-10">
        <div className="max-w-[1140px] mx-auto px-[15px] text-center">
          <div className="flex justify-center gap-1 mb-8">
            <span className="w-12 h-1 bg-[#68121f]"></span>
            <span className="w-12 h-1 bg-[#ffffff]"></span>
            <span className="w-12 h-1 bg-[#185347]"></span>
          </div>
          <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4">
            Fluminense Football Club - Sócio Futebol
          </p>
          <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} - O orgulho de ser tricolor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}