import { Oswald } from 'next/font/google';
import { Metadata } from 'next';

// Configuração da fonte Oswald idêntica ao site de referência
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Convidados Sócio Futebol',
  icons: {
    icon: 'https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/escudo-flu.png',
  },
};

export default function Home() {
  const REDIRECT_URL = "https://nense.com.br/minha-conta/lista-de-convidado";

  // Estilos tipográficos ajustados com tamanhos ligeiramente aumentados
  const titleStyle = {
    fontFamily: 'var(--font-oswald)',
    fontWeight: 700,
    color: 'rgb(244, 244, 244)',
    fontSize: '72px', // Aumentado de 64px
    lineHeight: '1.1',
    letterSpacing: '0.02em',
    fontStyle: 'normal',
  };

  const sectionTitleStyle = {
    fontFamily: 'var(--font-oswald)',
    fontWeight: 700,
    color: 'rgb(248, 248, 248)',
    fontSize: 'clamp(36px, 5vw, 64px)', // Aumentado de clamp(32px, 4vw, 56px)
    lineHeight: '1.1',
    letterSpacing: '0.01em',
    fontStyle: 'normal',
  };

  const buttonFontStyle = `font-bold tracking-[0.1em]`;

  return (
    <main className={`${oswald.variable} font-sans min-h-screen text-[rgb(248,248,248)] selection:bg-[#451021] selection:text-white overflow-x-hidden relative font-normal`} style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
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
        <div className="h-[28px] bg-[#451021] w-full"></div>
        <div className="h-[6px] bg-[#ffffff] w-full"></div>
        <div className="h-[20px] bg-[#185347] w-full"></div>
      </div>

      {/* SCROLL 1 — HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col pt-[54px] z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>

        {/* TOP NAVIGATION BAR */}
        <div className="relative z-20 w-full px-2 md:px-6 py-4 flex justify-between items-start">
          <div className="pt-0 pl-16 md:pl-48">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/logo-socio-flu.png" 
              alt="Sócio Futebol" 
              className="h-16 md:h-28 w-auto object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex items-center gap-3 md:gap-6 pt-2 pr-2 md:pr-6">
            <a href={REDIRECT_URL} className={`flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity ${buttonFontStyle} text-[rgb(248,248,248)]`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span className="text-[14px] md:text-lg uppercase tracking-widest">Login</span>
            </a>
            <a href={REDIRECT_URL} className={`${buttonFontStyle} bg-[#451021] text-[rgb(248,248,248)] px-4 md:px-6 py-2 md:py-2.5 rounded-sm text-[14px] md:text-lg uppercase hover:bg-[#185347] transition-all shadow-lg inline-block tracking-widest`}>
              Cadastre-se
            </a>
          </div>
        </div>

        {/* CENTRAL CONTENT */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-[15px] py-12 md:py-20 mt-[-60px] md:mt-[-100px]">
          
          <div className="space-y-8 md:space-y-10">
            <h1 
              className="hidden md:block drop-shadow-2xl uppercase"
              style={titleStyle}
            >
              O FLU SE VIVE JUNTO!
            </h1>
            <h1 className="font-bold md:hidden text-6xl leading-[1.1] tracking-normal text-[rgb(244,244,244)] drop-shadow-2xl uppercase" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
              O FLU SE VIVE JUNTO!
            </h1>
            
            <p className="text-base md:text-xl lg:text-2xl font-bold max-w-[800px] mx-auto text-[rgb(248,248,248)] drop-shadow-lg leading-relaxed tracking-[0.05em]">
              Convide, economize e sigam juntos na arquibancada.
            </p>
          </div>

          {/* GRID DE BENEFÍCIOS */}
          <div className="mt-10 md:mt-14 grid grid-cols-4 gap-[10px] md:gap-[15px] w-full max-w-[1100px] mx-auto">
            <div className="bg-black/60 backdrop-blur-md p-3 md:p-5 border-l-4 border-[#451021] text-left">
              <div className="mb-3 text-[rgb(248,248,248)] hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>
              </div>
              <p className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-[rgb(248,248,248)]">Mais prioridade na compra de ingressos</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 md:p-5 border-l-4 border-[#451021] text-left">
              <div className="mb-3 text-[rgb(248,248,248)] hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.942 3.197M12 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM21 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM3.75 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1-4.5 0ZM5.25 18.72a9.094 9.094 0 0 1-3.741-.479 3 3 0 0 1 4.682-2.72m-.94 3.198.001.031c0 .225.012.447.037.666A11.944 11.944 0 0 0 12 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0 0 18 18.719" />
                </svg>
              </div>
              <p className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-[rgb(248,248,248)]">Viva o jogo com quem faz parte da sua história</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 md:p-5 border-l-4 border-[#451021] text-left">
              <div className="mb-3 text-[rgb(248,248,248)] hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <p className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-[rgb(248,248,248)]">Desconto garantido para todos os convidados</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 md:p-5 border-l-4 border-[#451021] text-left">
              <div className="mb-3 text-[rgb(248,248,248)] hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 1 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1.401A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <p className="text-[8px] md:text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed text-[rgb(248,248,248)]">Vamos todos juntos rumo à glória</p>
            </div>
          </div>

          <div className="mt-10 md:mt-14 flex justify-center">
            <a href={REDIRECT_URL} className={`${buttonFontStyle} bg-[#451021] text-[rgb(248,248,248)] px-8 md:px-14 py-3 md:py-5 rounded-sm text-xl md:text-2xl uppercase hover:bg-[#185347] transition-all shadow-[0_0_40px_rgba(69,16,33,0.4)] hover:scale-105 block w-fit tracking-[0.15em]`}>
              Adicionar convidado agora
            </a>
          </div>
          
          <div className="animate-bounce opacity-40 mt-10 md:mt-14 text-[rgb(248,248,248)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* SCROLL 2 — COMO FUNCIONA O CONVIDADO */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-center z-10 bg-[#185347] backdrop-blur-xl py-10 md:py-20 border-y border-white/5">
        <div className="max-w-[1100px] mx-auto px-[15px] w-full">
          <div className="mb-6 md:mb-10">
            <h2 className="font-bold text-[rgb(248,248,248)] tracking-[0.2em] text-lg md:text-xl uppercase" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>Como funciona o convidado:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col space-y-6">
              <h3 
                className="hidden md:block uppercase"
                style={sectionTitleStyle}
              >
                Leve até 3 pessoas para todos os jogos
              </h3>
              <h3 className="font-bold md:hidden text-4xl uppercase tracking-normal leading-[1.1] text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
                Leve até 3 pessoas para todos os jogos
              </h3>
              <div className="space-y-6 text-[rgb(248,248,248)]">
                <p className="text-base md:text-lg font-bold text-[rgb(248,248,248)] leading-relaxed tracking-[0.05em]">
                  Ao adicionar convidado(s) ao seu plano, você passa a ter direito a comprar um ingresso extra para cada convidado contratado, sempre com: 50% de desconto e a mesma prioridade de compra do titular.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-[rgb(248,248,248)] uppercase tracking-[0.15em] text-xl" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>Como usar na prática:</h4>
                  <p className="text-sm md:text-base leading-relaxed text-[rgb(248,248,248)] opacity-80 tracking-[0.05em]">
                    Você cadastra uma lista com até 5 pessoas autorizadas e decide, a cada jogo, para quem comprar o ingresso extra. A quantidade de pessoas contratadas depende do seu plano.
                  </p>
                </div>

                <div className="bg-black/20 border-l-4 border-[#451021] p-6 space-y-2">
                  <p className="font-bold text-2xl md:text-3xl text-[rgb(248,248,248)] tracking-[0.02em]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
                    R$ 25 por mês por convidado contratado
                  </p>
                  <p className="text-[11px] md:text-[12px] text-[rgb(248,248,248)] opacity-60 font-medium italic tracking-[0.1em]">
                    Simples, acessível e pensado para você nunca precisar ir sozinho ao Maracanã.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <a href={REDIRECT_URL} className={`${buttonFontStyle} bg-transparent border-2 border-[#451021] text-[rgb(248,248,248)] px-10 py-4 rounded-sm text-lg uppercase hover:bg-[#451021] transition-all shadow-lg inline-block tracking-[0.2em]`}>
                  QUERO ADICIONAR CONVIDADO(S)
                </a>
              </div>
            </div>

            <div className="relative group md:-mr-8 lg:-mr-12">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#451021]/30 to-black/30 opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
              <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] md:aspect-[4/5] lg:aspect-square max-h-[600px] w-full">
                <img 
                  src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066556724_670bdec29c_o.jpg" 
                  alt="Torcida Fluminense" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="font-bold text-lg uppercase tracking-[0.2em] text-[rgb(248,248,248)] opacity-90" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>A experiência completa de ser tricolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLL 3 — EXPLICAÇÃO + REGRAS */}
      <section className="py-16 md:py-28 relative z-10 bg-black/40">
        <div className="max-w-[1100px] mx-auto px-[15px]">
          <div className="text-center mb-12 md:mb-24 flex flex-col items-center">
            <h2 
              className="hidden md:block uppercase mb-6 drop-shadow-lg"
              style={sectionTitleStyle}
            >
              Seu plano agora vale ainda mais
            </h2>
            <h2 className="font-bold md:hidden text-4xl uppercase tracking-normal mb-6 drop-shadow-lg text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
              Seu plano agora vale ainda mais
            </h2>
            <p className="text-base md:text-xl text-[rgb(248,248,248)] max-w-3xl mx-auto drop-shadow-md font-normal leading-relaxed tracking-[0.05em]">
              Com convidados, seu plano ganha mais poder: mais pessoas com prioridade, mais economia e mais companhia para viver cada jogo decisivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-16 md:mb-28">
            {/* BOX ARQUIBA 100% */}
            <div className="bg-black/70 border-t-8 border-[#451021] rounded-b-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 p-8 md:p-10">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                  <h3 className="font-bold text-3xl md:text-4xl tracking-wider text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>ARQUIBA 100%</h3>
                  <span className="font-bold bg-[#451021] text-[rgb(248,248,248)] text-[12px] px-4 py-1.5 rounded whitespace-nowrap inline-block tracking-[0.2em]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>MAIS COMPLETO</span>
                </div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#451021] rounded-full mt-2 shrink-0"></div>
                    Mais liberdade para compartilhar a experiência
                  </li>
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#451021] rounded-full mt-2 shrink-0"></div>
                    Pode contratar até 3 convidados
                  </li>
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#451021] rounded-full mt-2 shrink-0"></div>
                    Pode cadastrar até 5 convidados
                  </li>
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-bold text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#451021] rounded-full mt-2 shrink-0"></div>
                    Mais pessoas com prioridade nos ingressos
                  </li>
                </ul>
                <p className="text-[10px] md:text-[12px] text-[rgb(248,248,248)] opacity-50 italic font-normal tracking-[0.1em]">*Valor por convidado: R$ 25,00/mês</p>
              </div>
              <div className="w-full md:w-[40%] h-56 md:h-auto relative overflow-hidden">
                <div className="h-full w-full">
                  <img 
                    src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066489568_bbbfe6968c_o.jpg" 
                    alt="Torcida Tricolor Arquiba 100%" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* BOX ARQUIBA 75% */}
            <div className="bg-black/70 border-t-8 border-[#185347] rounded-b-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-bold text-3xl md:text-4xl tracking-wider text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>ARQUIBA 75%</h3>
                </div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-2 shrink-0"></div>
                    A forma mais fácil de trazer alguém para viver o Flu com você
                  </li>
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-2 shrink-0"></div>
                    Pode contratar 1 convidado
                  </li>
                  <li className="flex items-start gap-4 text-[rgb(248,248,248)] font-normal text-sm md:text-base tracking-[0.08em] leading-relaxed">
                    <div className="h-2 w-2 bg-[#185347] rounded-full mt-2 shrink-0"></div>
                    Pode cadastrar até 5 convidados
                  </li>
                </ul>
                <p className="text-[10px] md:text-[12px] text-[rgb(248,248,248)] opacity-50 italic font-normal tracking-[0.1em]">*Valor por convidado: R$ 25,00/mês</p>
              </div>
              <div className="w-full md:w-[40%] h-56 md:h-auto relative overflow-hidden">
                <div className="h-full w-full">
                  <img 
                    src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55067665758_fd737bdc80_jhgsfrd.jpg" 
                    alt="Torcida Tricolor Arquiba 75%" 
                    className="w-full h-full object-cover object-[center_35%]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16 md:mb-28 shadow-2xl">
            <img 
              src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/55066556724_670bdec29c_o.jpg" 
              alt="Torcida Fluminense Libertadores" 
              className="w-full h-full object-cover brightness-[0.35]"
            />
            <div className="absolute inset-0 bg-[#185347]/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12">
              <h3 
                className="hidden md:block uppercase mb-10 max-w-5xl drop-shadow-2xl"
                style={{...sectionTitleStyle, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.3', letterSpacing: '0.05em'}}
              >
                A Libertadores está chegando. Quem vai estar ao seu lado quando o Maraca pulsar com o verde, branco e grená?
              </h3>
              <h3 className="font-bold md:hidden text-3xl uppercase tracking-normal mb-8 max-w-3xl drop-shadow-2xl leading-[1.2] text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
                A Libertadores está chegando. Quem vai estar ao seu lado quando o Maraca pulsar com o verde, branco e grená?
              </h3>
              <a href={REDIRECT_URL} className={`${buttonFontStyle} bg-[#451021] text-[rgb(248,248,248)] px-8 md:px-10 py-4 md:py-5 rounded-sm shadow-xl border border-white/10 inline-block`}>
                <p className="text-xl md:text-3xl uppercase tracking-[0.2em]">contrate um convidado!</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center pb-10 md:pb-20">
            <a href={REDIRECT_URL} className={`${buttonFontStyle} bg-[#185347] text-[rgb(248,248,248)] px-10 md:px-16 py-5 md:py-6 rounded-sm text-xl md:text-3xl uppercase hover:bg-[#451021] transition-all shadow-2xl hover:scale-105 mb-6 inline-block tracking-[0.2em]`}>
              Quero trazer meu convidado
            </a>
            <p className="text-[rgb(248,248,248)] opacity-80 font-bold uppercase tracking-[0.3em] text-[10px] md:text-[12px] drop-shadow-md">Leva menos de 1 minuto.</p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP / SUPPORT */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href={REDIRECT_URL} className="w-14 h-14 md:w-16 md:h-16 bg-[#185347] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform border-2 border-white/10 overflow-hidden">
          <img 
            src="https://fluminensefc.s3.us-east-1.amazonaws.com/2026/Fevereiro/0502/webchat-icon-1743608850551.png" 
            alt="Suporte" 
            className="w-full h-full object-cover"
          />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="py-12 md:py-16 border-t border-white/10 bg-[#185347] backdrop-blur-md relative z-10">
        <div className="max-w-[1100px] mx-auto px-[15px] text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-lg md:text-xl mb-4 text-[rgb(248,248,248)]" style={{ fontStyle: 'normal', fontFamily: 'var(--font-oswald)' }}>
            Fluminense Football Club - Sócio Futebol
          </p>
          <p className="text-[rgb(248,248,248)] opacity-40 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} - O orgulho de ser tricolor. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}