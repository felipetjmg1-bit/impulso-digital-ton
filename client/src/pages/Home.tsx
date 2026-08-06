import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Coins, 
  ExternalLink, 
  Copy, 
  Check, 
  Wallet, 
  ArrowRight, 
  Globe, 
  Layers, 
  ChevronRight, 
  Activity, 
  Server, 
  Terminal,
  Menu,
  X,
  Sparkles,
  Lock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [aurBalance] = useState("12,450.00");
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [stakingAmount, setStakingAmount] = useState([5000]);
  const [activeLang, setActiveLang] = useState("PT");

  const contractAddress = "EQD_ImpulsoDigital_AUR_ID_TON_Contract_2026_x89";

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Endereço do Contrato AUR I.D copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleConnectWallet = (provider: string) => {
    const mockAddr = "UQCt8...v9Z2_ImpulsoWallet";
    setWalletAddress(mockAddr);
    setWalletConnected(true);
    setIsWalletModalOpen(false);
    toast.success(`Carteira conectada via ${provider} com sucesso!`);
  };

  const handleDisconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress("");
    toast.info("Carteira desconectada.");
  };

  const calculatedReward = (stakingAmount[0] * 0.185).toFixed(2);

  return (
    <div className="min-h-screen bg-[#06060a] text-slate-100 relative overflow-hidden bg-grid-pattern selection:bg-[#00f2fe]/30 selection:text-[#00f2fe]">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#7928ca]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-[#7928ca]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with Hex Core Motif */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#7928ca] p-0.5 shadow-lg shadow-[#00f2fe]/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#06060a] rounded-[10px] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00f2fe]/10 animate-pulse" />
                <img 
                  src="/manus-storage/logo-aur_e3d30e5b.png" 
                  alt="Impulso Digital Hex Core" 
                  className="w-7 h-7 object-contain relative z-10"
                  onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                />
                <Cpu className="w-5 h-5 text-[#00f2fe] absolute" style={{ zIndex: 0 }} />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white font-['Space_Grotesk']">
                IMPULSO<span className="text-[#00f2fe]"> DIGITAL</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#00f2fe]/80 font-mono">
                AUR I.D • TON Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#home" className="text-slate-300 hover:text-[#00f2fe] transition-colors">Home</a>
            <a href="#ecosystem" className="text-slate-300 hover:text-[#00f2fe] transition-colors">Ecossistema</a>
            <a href="#token" className="text-slate-300 hover:text-[#00f2fe] transition-colors">AUR I.D Token</a>
            <a href="#staking" className="text-slate-300 hover:text-[#00f2fe] transition-colors">Staking</a>
            <a href="#about" className="text-slate-300 hover:text-[#00f2fe] transition-colors">Sobre</a>
            <a href="#contract" className="text-slate-300 hover:text-[#00f2fe] transition-colors">Contrato TON</a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono">
              <Globe className="w-3.5 h-3.5 text-[#00f2fe] mr-1.5" />
              <button 
                onClick={() => { setActiveLang("PT"); toast.info("Idioma alterado para Português"); }}
                className={`px-1.5 py-0.5 rounded ${activeLang === "PT" ? "bg-[#00f2fe]/20 text-[#00f2fe] font-bold" : "text-slate-400"}`}
              >
                PT
              </button>
              <span className="text-white/20 mx-1">/</span>
              <button 
                onClick={() => { setActiveLang("EN"); toast.info("Language switched to English"); }}
                className={`px-1.5 py-0.5 rounded ${activeLang === "EN" ? "bg-[#00f2fe]/20 text-[#00f2fe] font-bold" : "text-slate-400"}`}
              >
                EN
              </button>
            </div>

            {!walletConnected ? (
              <Dialog open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#06060a] font-bold px-6 py-2.5 rounded-xl shadow-lg neon-glow-cyan hover:opacity-90 transition-all transform hover:-translate-y-0.5">
                    <Wallet className="w-4 h-4 mr-2" /> Conectar Carteira
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-panel border-white/15 text-slate-100 sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold font-['Space_Grotesk'] text-gradient-cyan-purple">
                      Conectar à Rede TON
                    </DialogTitle>
                    <DialogDescription className="text-slate-400">
                      Selecione sua carteira Web3 compatível com a TON para acessar o ecossistema AUR I.D.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 py-4">
                    <button 
                      onClick={() => handleConnectWallet("Tonkeeper")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#00f2fe]/20 flex items-center justify-center text-[#00f2fe] font-bold">TK</div>
                        <div className="text-left">
                          <div className="font-semibold group-hover:text-[#00f2fe] transition-colors">Tonkeeper</div>
                          <div className="text-xs text-slate-400">A carteira mais popular da TON</div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button 
                      onClick={() => handleConnectWallet("Telegram Wallet")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#00f2fe]/20 flex items-center justify-center text-[#00f2fe] font-bold">TG</div>
                        <div className="text-left">
                          <div className="font-semibold group-hover:text-[#00f2fe] transition-colors">Telegram Wallet (@wallet)</div>
                          <div className="text-xs text-slate-400">Conexão instantânea via Telegram</div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button 
                      onClick={() => handleConnectWallet("MyTonWallet")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#7928ca]/20 flex items-center justify-center text-purple-400 font-bold">MT</div>
                        <div className="text-left">
                          <div className="font-semibold group-hover:text-[#00f2fe] transition-colors">MyTonWallet</div>
                          <div className="text-xs text-slate-400">Versão web e extensão navegador</div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex items-center gap-3 bg-white/5 border border-[#00f2fe]/30 rounded-xl px-4 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ffcc] animate-pulse" />
                <div className="text-xs">
                  <div className="font-mono text-[#00f2fe]">{walletAddress}</div>
                  <div className="text-slate-400 font-semibold">{aurBalance} AUR I.D</div>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={handleDisconnectWallet}
                  className="text-slate-400 hover:text-red-400 ml-2 h-7 px-2 text-xs"
                >
                  Sair
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 font-medium">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">Home</a>
              <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">Ecossistema</a>
              <a href="#token" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">AUR I.D Token</a>
              <a href="#staking" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">Staking</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">Sobre</a>
              <a href="#contract" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f2fe] py-2">Contrato TON</a>
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              {!walletConnected ? (
                <Button 
                  onClick={() => { setIsMobileMenuOpen(false); setIsWalletModalOpen(true); }}
                  className="w-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#06060a] font-bold py-3 rounded-xl"
                >
                  <Wallet className="w-4 h-4 mr-2" /> Conectar Carteira
                </Button>
              ) : (
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl">
                  <div>
                    <div className="text-xs font-mono text-[#00f2fe]">{walletAddress}</div>
                    <div className="text-sm font-bold">{aurBalance} AUR I.D</div>
                  </div>
                  <Button size="sm" variant="destructive" onClick={handleDisconnectWallet}>Sair</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00f2fe]/10 to-[#7928ca]/20 border border-[#00f2fe]/30 text-xs font-medium text-[#00f2fe]">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Rede TON • Blockchain de Alta Performance & Inteligência Quântica</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-[1.1]">
                Impulsionando o <span className="text-gradient-cyan-purple">Futuro Digital</span> com IA e Blockchain.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal">
                Acesse o ecossistema tecnológico da <strong className="text-white">Impulso Digital</strong> através do nosso token de utilidade <span className="text-[#00f2fe] font-semibold">AUR I.D</span> na rede TON. Soberania tecnológica, alta performance e automação inteligente.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#ecosystem" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#06060a] font-bold px-8 py-4 rounded-xl shadow-lg neon-glow-cyan hover:scale-105 transition-all text-base">
                    Explorar Ecossistema <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="#contract" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition-all text-base">
                    Ver Contrato na TON
                  </Button>
                </a>
              </div>

              {/* Quick Network Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
                <div className="glass-panel p-4 rounded-xl text-center">
                  <div className="text-xs text-slate-400 font-mono">TVL Global</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-[#00f2fe]">$48.5M</div>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center">
                  <div className="text-xs text-slate-400 font-mono">AUR I.D Preço</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-[#00ffcc]">$2.48 <span className="text-xs text-[#00ffcc]">+14.2%</span></div>
                </div>
                <div className="glass-panel p-4 rounded-xl text-center">
                  <div className="text-xs text-slate-400 font-mono">Holders TON</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-purple-400">64.2K+</div>
                </div>
              </div>

            </div>

            {/* Right Visual Element */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl glass-panel p-4 flex items-center justify-center neon-glow-purple animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2fe]/25 via-transparent to-[#7928ca]/30 rounded-3xl" />
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center bg-[#0a0a14]">
                  <img 
                    src="/manus-storage/hero-futuristic-ai_5c5e8457.png" 
                    alt="Holographic AUR I.D Intelligence Core" 
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-2xl border border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00f2fe]/20 flex items-center justify-center text-[#00f2fe]">
                        <Activity className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Status da Rede TON</div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#00ffcc]" /> 65,420 TPS • Operacional
                        </div>
                      </div>
                    </div>
                    <Coins className="w-6 h-6 text-[#00f2fe]" />
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section id="ecosystem" className="py-24 relative border-t border-white/10 bg-[#040408]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7928ca]/20 border border-[#7928ca]/30 text-xs font-mono text-purple-300">
              <Layers className="w-3.5 h-3.5" /> Arquitetura Tecnológica
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight">
              O Ecossistema <span className="text-gradient-cyan-purple">Impulso Digital</span>
            </h2>
            <p className="text-slate-300 text-base">
              Desenvolvemos uma suíte integrada de soluções descentralizadas de alta velocidade na rede TON, potencializadas pelo token utilitário AUR I.D.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f2fe]/20 to-[#4facfe]/20 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3 text-white">IA Descentralizada</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Rede de computação distribuída para execução de modelos de linguagem e inferência em tempo real na TON.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00ffcc]">
                <span>Módulo Ativo</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7928ca]/20 to-purple-500/20 border border-[#7928ca]/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3 text-white">Gateway API Web3</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Infraestrutura de alta disponibilidade para desenvolvedores conectarem dApps a contratos inteligentes na TON.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00f2fe]">
                <span>Alta Performance</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7928ca]/20 to-[#7928ca]/40 border border-[#7928ca]/30 flex items-center justify-center text-[#7928ca] mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3 text-white">Governança On-Chain</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Detentores de AUR I.D votam em propostas de expansão, alocação de tesouraria e novos recursos do ecossistema.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00ffcc]">
                <span>DAO Ativa</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f2fe]/20 to-teal-500/20 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] mb-6 group-hover:scale-110 transition-transform">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3 text-white">Staking & Liquidez</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Gere rendimento passivo bloqueando AUR I.D em pools de liquidez validados na blockchain TON.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00ffcc]">
                <span>APY 18.5%</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="glass-panel p-8 rounded-3xl border border-white/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f2fe]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#00f2fe]">Inovação Contínua</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
                  Poder computacional descentralizado para a era moderna
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A Impulso Digital unifica o poder de processamento global com a velocidade inigualável da TON. O token AUR I.D atua como a chave mestra para pagamentos de serviços, taxas de API e direitos de governança em toda a rede.
                </p>
                <div className="pt-2 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00ffcc]" />
                    <span className="text-sm font-medium">Transações em Segundos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00ffcc]" />
                    <span className="text-sm font-medium">Segurança Criptográfica</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 flex items-center justify-center">
                <img 
                  src="/manus-storage/eco-ai_1f364ee4.png" 
                  alt="Ecosystem AI Node" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                />
              </div>
              <div className="aspect-video sm:aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 p-2 flex items-center justify-center">
                <img 
                  src="/manus-storage/eco-ton_d2aecf82.png" 
                  alt="TON Token Mechanism" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TOKEN & STAKING SECTION */}
      <section id="token" className="py-24 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/30 text-xs font-mono text-[#00f2fe]">
                <Coins className="w-3.5 h-3.5" /> Tokenomics Oficial
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight">
                O Token <span className="text-gradient-cyan-purple">AUR I.D</span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Desenhado com uma economia deflacionária e utilitária na rede TON, o AUR I.D é o motor que movimenta todas as transações e serviços dentro do ecossistema Impulso Digital.
              </p>

              <div className="space-y-4 pt-2">
                <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-white/10">
                  <span className="text-slate-400 text-sm">Supply Total</span>
                  <span className="font-mono font-bold text-white">1,000,000,000 AUR I.D</span>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-white/10">
                  <span className="text-slate-400 text-sm">Rede Blockchain</span>
                  <span className="font-mono font-bold text-[#00f2fe]">TON (The Open Network)</span>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-white/10">
                  <span className="text-slate-400 text-sm">Padrão do Token</span>
                  <span className="font-mono font-bold text-purple-400">Jetton (TON Standard)</span>
                </div>
                <div className="glass-panel p-4 rounded-xl flex items-center justify-between border border-white/10">
                  <span className="text-slate-400 text-sm">Taxa de Queima (Burn)</span>
                  <span className="font-mono font-bold text-[#00ffcc]">1.5% por transação de API</span>
                </div>
              </div>

            </div>

            <div id="staking" className="lg:col-span-6">
              <div className="glass-panel p-8 rounded-3xl border border-white/20 relative shadow-2xl neon-glow-cyan">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#00f2fe]/20 text-[#00f2fe] rounded-bl-2xl text-xs font-mono font-bold">
                  Simulador de Staking APY 18.5%
                </div>

                <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-2">Simule Seus Ganhos</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Bloqueie tokens AUR I.D no contrato de Staking da TON e receba recompensas diárias.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Quantidade em Staking:</span>
                      <span className="font-mono font-bold text-lg text-[#00f2fe]">{stakingAmount[0].toLocaleString()} AUR I.D</span>
                    </div>
                    <Slider 
                      value={stakingAmount} 
                      onValueChange={setStakingAmount} 
                      max={50000} 
                      step={500} 
                      className="py-4 cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                      <span>500 AUR</span>
                      <span>25,000 AUR</span>
                      <span>50,000 AUR</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Rendimento Anual Estimado:</span>
                      <span className="font-mono font-bold text-[#00ffcc] text-base">+{calculatedReward} AUR I.D</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">APY Base na TON:</span>
                      <span className="font-mono font-bold text-purple-400">18.5%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Período de Lock:</span>
                      <span className="font-mono font-bold text-white">30 Dias</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      if (!walletConnected) {
                        toast.error("Por favor, conecte sua carteira TON primeiro.");
                        setIsWalletModalOpen(true);
                      } else {
                        toast.success(`Staking de ${stakingAmount[0]} AUR I.D iniciado com sucesso na rede TON!`);
                      }
                    }}
                    className="w-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#06060a] font-bold py-4 rounded-xl shadow-lg neon-glow-cyan hover:opacity-90 transition-all text-base"
                  >
                    Iniciar Staking de AUR I.D
                  </Button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative border-t border-white/10 bg-[#040408]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7928ca]/20 border border-[#7928ca]/30 text-xs font-mono text-purple-300">
              <Award className="w-3.5 h-3.5" /> Quem Somos
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight">
              Sobre a <span className="text-gradient-cyan-purple">Impulso Digital</span>
            </h2>
            <p className="text-slate-300 text-base">
              Fundada com a visão de liderar a soberania tecnológica e a descentralização de inteligência artificial, a Impulso Digital constrói pontes entre o mundo corporativo e a Web3 na rede TON.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center font-bold">01</div>
              <h3 className="text-xl font-bold font-['Space_Grotesk']">Missão</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Democratizar o acesso a ferramentas de inteligência artificial de alta performance através de smart contracts seguros e rápidos na blockchain TON.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#7928ca]/20 text-purple-400 flex items-center justify-center font-bold">02</div>
              <h3 className="text-xl font-bold font-['Space_Grotesk']">Visão</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ser o ecossistema tecnológico referência global em utilidade de tokens e infraestrutura corporativa descentralizada até 2028.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#7928ca]/30 text-[#00f2fe] flex items-center justify-center font-bold">03</div>
              <h3 className="text-xl font-bold font-['Space_Grotesk']">Valores</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transparência on-chain, inovação implacável, segurança rigorosa e foco absoluto na experiência do usuário e do desenvolvedor.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#7928ca]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00f2fe]">Liderança Executiva</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
                  Mentes por trás da inovação
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Nossa equipe reúne especialistas em criptografia, engenharia de IA, arquitetura blockchain TON e expansão de ecossistemas globais.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-[#00f2fe]/40 transition-all group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/20">
                    <img 
                      src="/manus-storage/avatar-tech_7987a5e9.png" 
                      alt="CEO Avatar" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-['Space_Grotesk']">Alexandre Voss</h4>
                    <p className="text-xs text-[#00f2fe] font-mono">Fundador & CEO</p>
                    <p className="text-xs text-slate-400 mt-1">Ex-arquiteto de sistemas distribuídos e Web3.</p>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center gap-4 hover:border-[#00f2fe]/40 transition-all group">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 flex-shrink-0 border border-white/20">
                    <img 
                      src="/manus-storage/avatar-tech_7987a5e9.png" 
                      alt="CTO Avatar" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      onError={(e)=>{ (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-['Space_Grotesk']">Dr. Helena Rostova</h4>
                    <p className="text-xs text-purple-400 font-mono">Diretora de IA & TON</p>
                    <p className="text-xs text-slate-400 mt-1">PhD em Inteligência Artificial Aplicada.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONTRACT SECTION */}
      <section id="contract" className="py-24 relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00f2fe]/10 to-[#7928ca]/20 border border-[#00f2fe]/30 text-xs font-medium text-[#00f2fe]">
            <Terminal className="w-3.5 h-3.5" /> Smart Contract Verificado na TON
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight">
            Contrato Oficial do <span className="text-gradient-cyan-purple">AUR I.D</span>
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Verifique o contrato inteligente diretamente no explorador oficial da blockchain TON. Copie o endereço oficial para negociar em DEXs compatíveis.
          </p>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl neon-glow-purple">
            <div className="font-mono text-xs sm:text-sm text-[#00f2fe] break-all text-left bg-black/40 p-4 rounded-xl border border-white/10 w-full">
              {contractAddress}
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Button 
                onClick={handleCopyContract}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all"
              >
                {copied ? <Check className="w-4 h-4 mr-2 text-[#00ffcc]" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? "Copiado!" : "Copiar Endereço"}
              </Button>
              <a 
                href={`https://tonscan.org/address/${contractAddress}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#06060a] font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-90 transition-all">
                  Tonscan <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-4 font-mono">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#00ffcc]" /> Auditado por CertiK</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#00f2fe]" /> Liquidez Trancada na TON</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#030306] py-16 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#7928ca] p-0.5">
                  <div className="w-full h-full bg-[#06060a] rounded-[10px] flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-[#00f2fe]" />
                  </div>
                </div>
                <span className="font-bold text-lg text-white font-['Space_Grotesk']">
                  IMPULSO<span className="text-[#00f2fe]"> DIGITAL</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ecossistema tecnológico avançado operando na rede TON. Soberania digital, inteligência artificial e utilidade real em criptoativos.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white font-['Space_Grotesk'] mb-4">Ecossistema</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#ecosystem" className="hover:text-[#00f2fe] transition-colors">IA Descentralizada</a></li>
                <li><a href="#ecosystem" className="hover:text-[#00f2fe] transition-colors">Gateway API Web3</a></li>
                <li><a href="#token" className="hover:text-[#00f2fe] transition-colors">Token AUR I.D</a></li>
                <li><a href="#staking" className="hover:text-[#00f2fe] transition-colors">Staking & Yield</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white font-['Space_Grotesk'] mb-4">Governança & Legal</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#contract" className="hover:text-[#00f2fe] transition-colors">Contrato TON</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); toast.info("Whitepaper 2.0 disponível em breve.");}} className="hover:text-[#00f2fe] transition-colors">Whitepaper 2.0</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); toast.info("Auditoria de segurança pública disponível no Tonscan.");}} className="hover:text-[#00f2fe] transition-colors">Auditoria CertiK</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); toast.info("Termos de Uso e Privacidade vigentes.");}} className="hover:text-[#00f2fe] transition-colors">Termos de Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white font-['Space_Grotesk'] mb-4">Comunidade Global</h4>
              <p className="text-xs text-slate-400 mb-4">Junte-se a mais de 64.000 detentores e desenvolvedores no Telegram e X.</p>
              <div className="flex items-center gap-3">
                <a href="https://telegram.org" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f2fe] hover:bg-white/10 hover:border-[#00f2fe] transition-all">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f2fe] hover:bg-white/10 hover:border-[#00f2fe] transition-all">
                  <Activity className="w-5 h-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f2fe] hover:bg-white/10 hover:border-[#00f2fe] transition-all">
                  <Terminal className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <div>
              © 2026 Impulso Digital Tech Ltda. • CNPJ: 48.912.000/0001-88 • Dubai & São Paulo. Todos os direitos reservados.
            </div>
            <div className="mt-4 sm:mt-0 font-mono text-[#00f2fe]/80">
              Rede TON • AUR I.D Utility Token
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
