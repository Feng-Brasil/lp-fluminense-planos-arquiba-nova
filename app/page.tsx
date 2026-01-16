export default function Home() {
  return (
    <main className="min-h-screen bg-[#171717] text-[#ffffff] selection:bg-[#68121f] selection:text-white">
      {/* HEADER / NAVIGATION */}
      <nav className="border-b border-[#393939] bg-[#171717]/90 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#185347] rounded-full flex items-center justify-center border-2 border-[#68121f]">
              <span className="font-bold text-xs">FFC</span>
            </div>
            <span className="uppercase tracking-tighter text-xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Sócio Futebol
            </span>
          </div>
          <div className="hidden md:flex gap-8 uppercase text-sm font-medium tracking-widest">
            <a href="#beneficios" className="hover:text-[#185347] transition-colors">Benefícios</a>
            <a href="#plano" className="hover:text-[#185347] transition-colors">O Plano</a>
            <a href="#contato" className="hover:text-[#185347] transition-colors">Assine Já</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 border-b border-[#393939]">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#185347] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#68121f] text-white text-xs font-bold uppercase tracking-widest mb-6">
                Tradição e Glória
              </span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none mb-6 italic" style={{ fontFamily: 'Oswald, sans-serif' }}>
                PLANO <br />
                <span className="text-[#185347]">ARQUIBA</span> <br />
                NOVA
              </h1>
              <p className="text-xl text-gray-300 max-w-lg mb-10 leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Seja um Guerreiro de verdade. Apoie o Fluminense de perto e garanta seu lugar nas Laranjeiras ou no Maracanã com benefícios exclusivos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contato" className="px-8 py-4 bg-[#ffffff] text-[#171717] font-bold uppercase tracking-widest hover:bg-[#185347] hover:text-white transition-all duration-300">
                  Entre em contato →
                </a>
              </div>
            </div>

            {/* FORMULÁRIO DE LEADS */}
            <div id="contato" className="bg-[#171717] border-2 border-[#185347] p-8 rounded-none shadow-[10px_10px_0px_0px_rgba(24,83,71,1)]">
              <h2 className="text-3xl font-bold uppercase mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Faça parte da nossa história
              </h2>
              <form 
                action="https://formspree.io/f/FORMSPREE_ID_NAO_FORNECIDO" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required 
                    className="w-full px-4 py-3 bg-[#393939]/20 border border-[#393939] focus:border-[#185347] focus:ring-1 focus:ring-[#185347] outline-none transition-all text-white"
                    placeholder="Seu nome tricolor"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">E-mail</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required 
                    className="w-full px-4 py-3 bg-[#393939]/20 border border-[#393939] focus:border-[#185347] focus:ring-1 focus:ring-[#185347] outline-none transition-all text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-[#393939]/20 border border-[#393939] focus:border-[#185347] focus:ring-1 focus:ring-[#185347] outline-none transition-all text-white"
                    placeholder="(21) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold mb-2 text-gray-400">Dúvidas sobre o Plano Arquiba?</label>
                  <textarea 
                    name="message" 
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-[#393939]/20 border border-[#393939] focus:border-[#185347] focus:ring-1 focus:ring-[#185347] outline-none transition-all text-white"
                    placeholder="Como podemos ajudar, guerreiro?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#68121f] hover:bg-[#185347] text-white font-bold uppercase tracking-[0.2em] transition-colors duration-300 mt-4 border border-transparent"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  Enviar e Garantir Vaga
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-24 bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">🏟️</div>
              <h3 className="text-2xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Prioridade 1</h3>
              <p className="text-gray-400 leading-relaxed">Garanta seu ingresso antes de todo mundo nos jogos com mando do Fluminense.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#68121f] transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">🛡️</div>
              <h3 className="text-2xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Rede de Parceiros</h3>
              <p className="text-gray-400 leading-relaxed">Descontos exclusivos em produtos oficiais e marcas parceiras do Tricolor.</p>
            </div>
            <div className="p-8 border border-[#393939] hover:border-[#185347] transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">⚽</div>
              <h3 className="text-2xl font-bold uppercase mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>Experiências</h3>
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
          <p className="uppercase tracking-widest text-sm font-bold mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
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