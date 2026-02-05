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

      {/* PLANOS SECTION */}
      <section className="py-24 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Arquiba 100% */}
            <div className="bg-[#1a1a1a] border-t-4 border-[#68121f] p-6 flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Arquiba 100%</h3>
              <ul className="text-xs space-y-3 mb-8 flex-grow text-gray-300">
                <li>• Desconto em ingressos</li>
                <li>• Prioridade 1 na compra de ingressos</li>
                <li>• Nível 2 de acúmulo de pontos</li>
                <li>• Até 3 convidados por R$ 25/mês cada</li>
                <li>• Cashback nas lojas oficiais</li>
                <li>• Direito a voto após 2 anos de contribuição ininterruptos</li>
                <li>• 8 Cupons de R$ 10,00 no Zé Delivery</li>
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-black mb-4">R$ 160,00/mês*</p>
                <button className="w-full bg-[#68121f] py-3 font-black text-xs uppercase tracking-widest hover:bg-[#185347] transition-colors">ASSOCIE-SE</button>
              </div>
            </div>

            {/* Arquiba 75% */}
            <div className="bg-[#1a1a1a] border-t-4 border-[#185347] p-6 flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Arquiba 75%</h3>
              <ul className="text-xs space-y-3 mb-8 flex-grow text-gray-300">
                <li>• Desconto em ingressos</li>
                <li>• Prioridade 2 na compra de ingressos</li>
                <li>• Nível 3 de acúmulo de pontos</li>
                <li>• Até 1 convidado por R$ 25/mês</li>
                <li>• Cashback nas lojas oficiais</li>
                <li>• Direito a voto após 2 anos de contribuição ininterruptos</li>
                <li>• 4 Cupons de R$ 10,00 no Zé Delivery</li>
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-black mb-4">R$ 80,00/mês*</p>
                <button className="w-full bg-[#185347] py-3 font-black text-xs uppercase tracking-widest hover:bg-[#68121f] transition-colors">ASSOCIE-SE</button>
              </div>
            </div>

            {/* Arquiba Raiz */}
            <div className="bg-[#1a1a1a] border-t-4 border-[#68121f] p-6 flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Arquiba Raiz</h3>
              <ul className="text-xs space-y-3 mb-8 flex-grow text-gray-300">
                <li>• Desconto no setor popular do jogo e 60% nos demais ingressos</li>
                <li>• Prioridade 3 na compra de ingressos</li>
                <li>• Nível 4 de acúmulo de pontos</li>
                <li>• Cashback nas lojas oficiais</li>
                <li>• 2 Cupons de R$ 10,00 no Zé Delivery</li>
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-black mb-4">R$ 40,00/mês*</p>
                <button className="w-full bg-[#68121f] py-3 font-black text-xs uppercase tracking-widest hover:bg-[#185347] transition-colors">ASSOCIE-SE</button>
              </div>
            </div>

            {/* Maraca + */}
            <div className="bg-[#1a1a1a] border-t-4 border-[#185347] p-6 flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Maraca +</h3>
              <ul className="text-xs space-y-3 mb-8 flex-grow text-gray-300">
                <li>• Desconto no Maracanã Mais (com buffet) e na arquibancada</li>
                <li>• Prioridade 1 na compra de ingressos</li>
                <li>• Nível 1 de acúmulo de pontos</li>
                <li>• Cashback nas lojas oficiais</li>
                <li>• Direito a voto após 2 anos de contribuição ininterruptos</li>
                <li>• 30 Cupons de R$ 10,00 no Zé Delivery</li>
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-black mb-4">R$ 600,00/mês*</p>
                <button className="w-full bg-[#185347] py-3 font-black text-xs uppercase tracking-widest hover:bg-[#68121f] transition-colors">SAIBA MAIS</button>
              </div>
            </div>

            {/* Sub-12 */}
            <div className="bg-[#1a1a1a] border-t-4 border-[#68121f] p-6 flex flex-col h-full">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Sub-12</h3>
              <ul className="text-xs space-y-3 mb-8 flex-grow text-gray-300">
                <li>• Experiências exclusivas</li>
                <li>• Nível 3 de acúmulo de pontos</li>
                <li>• Cashback nas lojas oficiais</li>
                <li>• Plano exclusivo para menores de 12 anos</li>
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-black mb-4">R$ 15,00/mês*</p>
                <button className="w-full bg-[#68121f] py-3 font-black text-xs uppercase tracking-widest hover:bg-[#185347] transition-colors">ASSOCIE-SE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVIDADOS SECTION */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">LEVE SEUS CONVIDADOS PARA O MARACA</h2>
          <div className="space-y-4 text-gray-300 mb-10">
            <p>Inclua convidados e leve seus amigos e familiares para apoiar o Flu no Maracanã!</p>
            <p>50% de desconto em ingressos extras para convidados, na mesma prioridade do titular!</p>
            <p>No plano Arquiba 75, você pode incluir até 1 convidado. No Arquiba 100, até 3!</p>
            <p>Você pode cadastrar até 5 pessoas e escolher entre elas a cada jogo quem irá poder usar os ingressos extras.</p>
            <p className="text-white font-bold text-xl">Valor por mês por convidado: R$25,00</p>
          </div>
          <button className="bg-[#68121f] px-12 py-4 font-black uppercase tracking-widest hover:bg-[#185347] transition-all">SEJA SÓCIO</button>
        </div>
      </section>

      {/* PRIORIDADE SECTION */}
      <section className="py-20 bg-[#171717] border-y border-[#333]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">PRIORIDADE NA COMPRA DE INGRESSOS</h2>
          <p className="text-gray-300 mb-10">Garanta sua presença antes de todo mundo. A cada jogo no Maraca, a venda de ingressos será liberada antes para os sócios do Flu de acordo com a prioridade de cada plano.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
            <div className="bg-[#1a1a1a] p-4 border-l-4 border-[#68121f]">
              <p className="font-bold">Prioridade 1: Arquiba 100%, Maraca +</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 border-l-4 border-[#185347]">
              <p className="font-bold">Prioridade 2: Arquiba 75%</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 border-l-4 border-[#68121f]">
              <p className="font-bold">Prioridade 3: Arquiba Raiz</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 border-l-4 border-[#185347]">
              <p className="font-bold">Prioridade 4: Guerreiro</p>
            </div>
          </div>
          <button className="bg-[#185347] px-12 py-4 font-black uppercase tracking-widest hover:bg-[#68121f] transition-all">SEJA SÓCIO</button>
        </div>
      </section>

      {/* EXPERIENCIAS SECTION */}
      <section className="py-20 bg-[#121212]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">EXPERIÊNCIAS ÚNICAS E INESQUECÍVEIS</h2>
          <p className="text-gray-300 mb-10">Ser sócio é poder viver momentos marcantes com o Flu, dentro ou fora do Maracanã, que serão lembrados para o resto da vida.</p>
          <button className="bg-[#68121f] px-12 py-4 font-black uppercase tracking-widest hover:bg-[#185347] transition-all">SEJA SÓCIO</button>
        </div>
      </section>

      {/* SUB-12 SECTION */}
      <section className="py-20 bg-[#171717] border-t border-[#333]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter">SUB-12: O FUTURO DA TORCIDA</h2>
          <p className="text-gray-300 mb-8">O plano feito para o guerreirinho de até 12 anos. Além de mostrar o amor pelo Tricolor, ainda aproveita benefícios exclusivos, como:</p>
          <ul className="text-left max-w-md mx-auto space-y-3 mb-10 text-gray-300">
            <li>• Experiências especiais para os pequenos tricolores</li>
            <li>• Acúmulo de pontos</li>
            <li>• 10% de cashback na loja oficial do clube</li>
          </ul>
          <button className="bg-[#185347] px-12 py-4 font-black uppercase tracking-widest hover:bg-[#68121f] transition-all">SEJA SÓCIO</button>
        </div>
      </section>

      {/* BENEFICIOS SECTION (ORIGINAL) */}
      <section id="beneficios" className="py-32 bg-[#121212] relative z-20">
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

      {/* FAQ & CONTACT SECTION */}
      <section className="py-20 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black uppercase mb-12 tracking-tighter text-center">PERGUNTAS FREQUENTES</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-black uppercase mb-6 border-b border-[#68121f] pb-2">Informações de Contato</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <p><span className="text-white font-bold">Horário:</span> Segunda a sexta, das 9h às 21h; Sábados: das 10h às 16h</p>
                <p><span className="text-white font-bold">Telefone:</span> (21) 2117-4652</p>
                <p><span className="text-white font-bold">E-mail:</span> contato@fluminense.com.br</p>
                <p><span className="text-white font-bold">Chat:</span> <span className="text-[#185347] cursor-pointer hover:underline">Abrir chat</span></p>
                <p><span className="text-white font-bold">WhatsApp:</span> Temporariamente indisponível</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase mb-6 border-b border-[#185347] pb-2">Links de Navegação</h3>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-[#68121f] transition-colors">HOME</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">MINHA CONTA</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">PLANOS</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">INGRESSOS</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">RESGATES</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">PARCEIROS</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">EMBAIXADAS</a>
                <a href="#" className="hover:text-[#68121f] transition-colors">FALE CONOSCO</a>
              </div>
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