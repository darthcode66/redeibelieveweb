import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo_desconton.png';
import googlePlayBadge from './assets/google-play-badge.png';
import appStoreBadge from './assets/app-store-badge.svg';
import { Link } from 'react-router-dom';
import {
  FaBolt, FaTags, FaMapMarkerAlt, FaChartBar, FaLock, FaHandshake,
  FaShoppingCart, FaStore, FaTruck, FaCheck, FaTimes, FaBars, FaTimes as FaClose,
  FaChevronDown, FaEnvelope, FaArrowRight
} from 'react-icons/fa';

function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [planType, setPlanType] = useState('lojista');

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const faqs = [
    { q: 'Quais formas de pagamento vocês aceitam?', a: 'Aceitamos cartão de crédito, débito, PIX, boleto bancário e transferência. Para planos anuais, oferecemos desconto adicional no pagamento à vista.' },
    { q: 'Posso cancelar minha assinatura a qualquer momento?', a: 'Sim! Você pode cancelar quando quiser, sem multas ou taxas. Se cancelar no meio do mês, você continua com acesso até o fim do período pago.' },
    { q: 'O que são "ofertas em destaque"?', a: 'Ofertas em destaque aparecem no topo dos resultados de busca e na página inicial do app por 3 dias, aumentando sua visibilidade em até 10x comparado a ofertas normais.' },
    { q: 'O plano gratuito tem alguma limitação de tempo?', a: 'Não! O plano gratuito é 100% gratuito para sempre. Você pode criar até 2 ofertas ativas sem pagar nada. Recursos premium são opcionais.' },
    { q: 'Posso ter múltiplas lojas em um único plano?', a: 'Sim! Nos planos Enterprise e Premium você pode gerenciar múltiplas localizações. Cada loja pode criar ofertas independentemente.' },
    { q: 'Vocês cobram comissão sobre as vendas?', a: 'Atualmente não cobramos comissão sobre vendas ou resgates de ofertas. Você paga apenas a assinatura mensal ou recursos avulsos.' },
    { q: 'Posso fazer upgrade ou downgrade do plano?', a: 'Sim! Você pode mudar de plano a qualquer momento. No upgrade, cobramos apenas a diferença proporcional. No downgrade, o crédito é usado no próximo mês.' },
    { q: 'Existe trial gratuito dos planos pagos?', a: 'Sim! Oferecemos 14 dias grátis do Plano PRO para novos usuários. Não é necessário cartão de crédito para começar o trial.' },
  ];

  return (
    <div className="Home">
      {/* NAVBAR */}
      <nav className="dt-navbar">
        <div className="dt-navbar-inner">
          <Link className="dt-logo" to="/">
            <img src={logo} alt="DescontOn" />
          </Link>
          <ul className={`dt-nav-links ${mobileMenu ? 'open' : ''}`}>
            <li><a href="#about" onClick={() => setMobileMenu(false)}>Sobre</a></li>
            <li><a href="#features" onClick={() => setMobileMenu(false)}>Funcionalidades</a></li>
            <li><a href="#pricing" onClick={() => setMobileMenu(false)}>Precos</a></li>
            <li><a href="#faq" onClick={() => setMobileMenu(false)}>FAQ</a></li>
            <li><Link to="/suporte" onClick={() => setMobileMenu(false)}>Suporte</Link></li>
            <li><a href="#pricing" className="dt-nav-cta" onClick={() => setMobileMenu(false)}>Baixar App</a></li>
          </ul>
          <button className="dt-menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            {mobileMenu ? <FaClose /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="dt-hero">
        <div className="dt-hero-content">
          <div className="dt-hero-badge">
            <FaBolt /> Clube de Vantagens
          </div>
          <h1>
            Descontos exclusivos<br />
            na <span className="dt-highlight">sua cidade</span>
          </h1>
          <p className="dt-hero-desc">
            Conectamos compradores, lojistas e fornecedores em um ecossistema
            de ofertas e descontos exclusivos para fortalecer o comercio local.
          </p>
          <div className="dt-hero-actions">
            <a href="#pricing" className="dt-btn dt-btn-primary">
              Ver Planos <FaArrowRight />
            </a>
            <a href="#features" className="dt-btn dt-btn-outline">
              Como Funciona
            </a>
          </div>
          <div className="dt-hero-stores">
            <a href="https://play.google.com/store/apps/details?id=redeibelieve.app&hl=pt_BR" target="_blank" rel="noopener noreferrer" className="dt-store-badge">
              <img src={googlePlayBadge} alt="Google Play" />
            </a>
            <a href="https://apps.apple.com/br/app/desconton-ofertas-locais/id6754894996" target="_blank" rel="noopener noreferrer" className="dt-store-badge">
              <img src={appStoreBadge} alt="App Store" />
            </a>
          </div>
          <div className="dt-hero-stats">
            <div className="dt-stat">
              <div className="dt-stat-value">100%</div>
              <div className="dt-stat-label">Gratuito para compradores</div>
            </div>
            <div className="dt-stat">
              <div className="dt-stat-value">10x</div>
              <div className="dt-stat-label">Mais visibilidade</div>
            </div>
            <div className="dt-stat">
              <div className="dt-stat-value">0%</div>
              <div className="dt-stat-label">Comissao sobre vendas</div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="dt-section dt-about">
        <div className="dt-container">
          <div className="dt-about-grid">
            <div className="dt-about-text">
              <span className="dt-section-tag">Sobre o DescontOn</span>
              <h2>Tecnologia que conecta pessoas e negocios</h2>
              <p>
                O <strong>DescontOn</strong> e uma plataforma inovadora que revoluciona o conceito de clube de vantagens.
                Conectamos compradores, lojistas e fornecedores em um ecossistema unico de descontos.
              </p>
              <p>
                Nossa missao e <strong>fortalecer o comercio local</strong>, criar oportunidades de negocio
                e proporcionar economia real para todos os usuarios.
              </p>
              <div className="dt-about-points">
                <div className="dt-about-point">
                  <div className="dt-about-point-icon"><FaBolt /></div>
                  <span>Ofertas relampago com descontos exclusivos</span>
                </div>
                <div className="dt-about-point">
                  <div className="dt-about-point-icon"><FaMapMarkerAlt /></div>
                  <span>Geolocalizacao para encontrar ofertas proximas</span>
                </div>
                <div className="dt-about-point">
                  <div className="dt-about-point-icon"><FaHandshake /></div>
                  <span>Rede de parceiros confiaveis e verificados</span>
                </div>
              </div>
            </div>
            <div className="dt-about-visual">
              <div className="dt-about-card">
                <img src={logo} alt="DescontOn" className="dt-about-card-logo" />
                <p>Seu clube de vantagens digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="dt-section">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-tag">Funcionalidades</span>
            <h2>Para cada tipo de usuario</h2>
            <p>Ferramentas poderosas para compradores, lojistas e fornecedores</p>
          </div>
          <div className="dt-features-grid">
            <div className="dt-feature-card">
              <div className="dt-feature-icon buyer"><FaShoppingCart /></div>
              <h3>Compradores</h3>
              <p>Encontre as melhores ofertas e descontos exclusivos na sua regiao.</p>
              <ul className="dt-feature-list">
                <li><FaCheck /> Ofertas por localizacao no mapa</li>
                <li><FaCheck /> Filtro por categoria e proximidade</li>
                <li><FaCheck /> Resgate de cupons digitais</li>
                <li><FaCheck /> Ofertas relampago com countdown</li>
              </ul>
            </div>
            <div className="dt-feature-card">
              <div className="dt-feature-icon merchant"><FaStore /></div>
              <h3>Lojistas</h3>
              <p>Crie e gerencie ofertas promocionais para atrair novos clientes.</p>
              <ul className="dt-feature-list">
                <li><FaCheck /> Criar ofertas ilimitadas</li>
                <li><FaCheck /> Analytics e metricas de resgate</li>
                <li><FaCheck /> Badge "Loja Verificada"</li>
                <li><FaCheck /> Prioridade na busca e no mapa</li>
              </ul>
            </div>
            <div className="dt-feature-card">
              <div className="dt-feature-icon supplier"><FaTruck /></div>
              <h3>Fornecedores</h3>
              <p>Ofereca seus produtos diretamente para lojistas em escala B2B.</p>
              <ul className="dt-feature-list">
                <li><FaCheck /> Alcance de mercado B2B</li>
                <li><FaCheck /> Dashboard de vendas</li>
                <li><FaCheck /> Gestao de multiplas lojas</li>
                <li><FaCheck /> Integracao com cadeia comercial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="dt-section dt-pricing">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-tag">Planos e Precos</span>
            <h2>Escolha o plano ideal</h2>
            <p>Planos para cada tipo de negocio. Comece gratis!</p>
          </div>

          <div className="dt-billing-toggle">
            <button
              className={`dt-billing-btn ${planType === 'lojista' ? 'active' : ''}`}
              onClick={() => setPlanType('lojista')}
            >
              <FaStore style={{ marginRight: 6 }} /> Lojistas
            </button>
            <button
              className={`dt-billing-btn ${planType === 'fornecedor' ? 'active' : ''}`}
              onClick={() => setPlanType('fornecedor')}
            >
              <FaTruck style={{ marginRight: 6 }} /> Fornecedores
            </button>
          </div>

          {/* PLANOS LOJISTAS */}
          {planType === 'lojista' && (
            <div className="dt-pricing-grid dt-pricing-grid-4">
              {/* Gratuito */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Sempre Gratuito</div>
                <h3>Gratuito</h3>
                <p className="dt-pricing-desc">Para comecar a divulgar</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">0</span>
                  <span className="dt-price-period">/mes</span>
                </div>
                <p className="dt-pricing-note">Gratuito para sempre</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 2 ofertas ativas</li>
                  <li><FaCheck className="check" /> Estatisticas basicas</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas em destaque</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas relampago</li>
                  <li className="disabled"><FaTimes className="x" /> Analytics avancados</li>
                  <li className="disabled"><FaTimes className="x" /> Prioridade no mapa</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Comecar Gratis
                </a>
              </div>

              {/* Basico */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Iniciante</div>
                <h3>Basico</h3>
                <p className="dt-pricing-desc">Para lojas em crescimento</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">49</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 5 ofertas ativas</li>
                  <li><FaCheck className="check" /> Estatisticas basicas</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li><FaCheck className="check" /> Ofertas em destaque</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas relampago</li>
                  <li className="disabled"><FaTimes className="x" /> Analytics avancados</li>
                  <li className="disabled"><FaTimes className="x" /> Prioridade no mapa</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Assinar Basico
                </a>
              </div>

              {/* Profissional */}
              <div className="dt-pricing-card popular">
                <div className="dt-pricing-badge">Mais Popular</div>
                <h3>Profissional</h3>
                <p className="dt-pricing-desc">Mais visibilidade e recursos</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">99</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 20 ofertas ativas</li>
                  <li><FaCheck className="check" /> Ofertas em destaque</li>
                  <li><FaCheck className="check" /> Ofertas relampago</li>
                  <li><FaCheck className="check" /> Analytics avancados</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li className="disabled"><FaTimes className="x" /> Prioridade no mapa</li>
                  <li className="disabled"><FaTimes className="x" /> Suporte prioritario</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-primary">
                  Assinar Profissional
                </a>
              </div>

              {/* Premium */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Completo</div>
                <h3>Premium</h3>
                <p className="dt-pricing-desc">Todos os recursos liberados</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">199</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> <strong>Ofertas ilimitadas</strong></li>
                  <li><FaCheck className="check" /> Ofertas em destaque</li>
                  <li><FaCheck className="check" /> Ofertas relampago</li>
                  <li><FaCheck className="check" /> Analytics avancados</li>
                  <li><FaCheck className="check" /> Prioridade no mapa</li>
                  <li><FaCheck className="check" /> Suporte prioritario</li>
                  <li><FaCheck className="check" /> Todos os recursos</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Assinar Premium
                </a>
              </div>
            </div>
          )}

          {/* PLANOS FORNECEDORES / ATACADISTAS */}
          {planType === 'fornecedor' && (
            <div className="dt-pricing-grid dt-pricing-grid-4">
              {/* Gratuito */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Sempre Gratuito</div>
                <h3>Gratuito</h3>
                <p className="dt-pricing-desc">Para comecar no B2B</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">0</span>
                  <span className="dt-price-period">/mes</span>
                </div>
                <p className="dt-pricing-note">Gratuito para sempre</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 2 ofertas ativas</li>
                  <li><FaCheck className="check" /> Estatisticas basicas</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas em destaque</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas relampago</li>
                  <li className="disabled"><FaTimes className="x" /> Analytics avancados</li>
                  <li className="disabled"><FaTimes className="x" /> Suporte prioritario</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Comecar Gratis
                </a>
              </div>

              {/* Starter */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Iniciante</div>
                <h3>Starter</h3>
                <p className="dt-pricing-desc">Para fornecedores iniciantes</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">149</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 10 ofertas ativas</li>
                  <li><FaCheck className="check" /> Estatisticas basicas</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas em destaque</li>
                  <li className="disabled"><FaTimes className="x" /> Ofertas relampago</li>
                  <li className="disabled"><FaTimes className="x" /> Analytics avancados</li>
                  <li className="disabled"><FaTimes className="x" /> Suporte prioritario</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Assinar Starter
                </a>
              </div>

              {/* Business */}
              <div className="dt-pricing-card popular">
                <div className="dt-pricing-badge">Mais Popular</div>
                <h3>Business</h3>
                <p className="dt-pricing-desc">Para operacoes em escala</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">299</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> Ate 50 ofertas ativas</li>
                  <li><FaCheck className="check" /> Ofertas em destaque</li>
                  <li><FaCheck className="check" /> Ofertas relampago</li>
                  <li><FaCheck className="check" /> Analytics avancados</li>
                  <li><FaCheck className="check" /> Perfil da empresa</li>
                  <li className="disabled"><FaTimes className="x" /> Suporte prioritario</li>
                  <li className="disabled"><FaTimes className="x" /> Prioridade no mapa</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-primary">
                  Assinar Business
                </a>
              </div>

              {/* Enterprise */}
              <div className="dt-pricing-card">
                <div className="dt-pricing-badge">Completo</div>
                <h3>Enterprise</h3>
                <p className="dt-pricing-desc">Solucao completa para atacado</p>
                <div className="dt-price">
                  <span className="dt-price-currency">R$</span>
                  <span className="dt-price-amount">499</span>
                  <span className="dt-price-period">,90/mes</span>
                </div>
                <p className="dt-pricing-note">Cancele quando quiser</p>
                <ul className="dt-pricing-features">
                  <li><FaCheck className="check" /> <strong>Ofertas ilimitadas</strong></li>
                  <li><FaCheck className="check" /> Ofertas em destaque</li>
                  <li><FaCheck className="check" /> Ofertas relampago</li>
                  <li><FaCheck className="check" /> Analytics avancados</li>
                  <li><FaCheck className="check" /> Prioridade no mapa</li>
                  <li><FaCheck className="check" /> Suporte prioritario</li>
                  <li><FaCheck className="check" /> Todos os recursos</li>
                </ul>
                <a href="#contact" className="dt-pricing-btn dt-pricing-btn-outline">
                  Assinar Enterprise
                </a>
              </div>
            </div>
          )}

          <div className="dt-pricing-footer">
            <p>Sem comissao sobre vendas. Cancele quando quiser, sem multas.</p>
            <p style={{ marginTop: '0.5rem' }}>Pagamento via Google Play ou App Store. Renovacao automatica mensal.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="dt-section">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-tag">Vantagens</span>
            <h2>Por que escolher o DescontOn?</h2>
            <p>Tudo que voce precisa para impulsionar seu negocio</p>
          </div>
          <div className="dt-benefits-grid">
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaBolt /></div>
              <h4>Ofertas Relampago</h4>
              <p>Descontos por tempo limitado com countdown que gera urgencia e atrai compradores.</p>
            </div>
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaTags /></div>
              <h4>Categorizacao Inteligente</h4>
              <p>10 categorias para organizar ofertas e facilitar a busca dos compradores.</p>
            </div>
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaMapMarkerAlt /></div>
              <h4>Busca por Localizacao</h4>
              <p>Mapa interativo com Google Maps para encontrar ofertas por proximidade.</p>
            </div>
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaChartBar /></div>
              <h4>Analytics Completo</h4>
              <p>Metricas de resgates, visualizacoes e engajamento para otimizar suas ofertas.</p>
            </div>
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaLock /></div>
              <h4>Seguranca e LGPD</h4>
              <p>Dados protegidos com Firebase, separacao de informacoes publicas e privadas.</p>
            </div>
            <div className="dt-benefit-card">
              <div className="dt-benefit-icon"><FaHandshake /></div>
              <h4>Comunidade Local</h4>
              <p>Fortaleca o comercio da sua regiao conectando-se a uma rede de parceiros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="dt-section dt-faq">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-section-tag">FAQ</span>
            <h2>Perguntas Frequentes</h2>
            <p>Tire suas duvidas sobre a plataforma</p>
          </div>
          <div className="dt-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`dt-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="dt-faq-question" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <FaChevronDown className="dt-faq-chevron" />
                </button>
                <div className="dt-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="dt-footer">
        <div className="dt-container">
          <div className="dt-footer-grid">
            <div className="dt-footer-brand">
              <img src={logo} alt="DescontOn" style={{ height: 32 }} />
              <p>Clube de vantagens que conecta pessoas e negocios atraves de ofertas e descontos exclusivos.</p>
            </div>
            <div className="dt-footer-col">
              <h4>Produto</h4>
              <a href="#features">Funcionalidades</a>
              <a href="#pricing">Precos</a>
              <a href="#faq">FAQ</a>
              <Link to="/changelog">Changelog</Link>
            </div>
            <div className="dt-footer-col">
              <h4>Suporte</h4>
              <Link to="/suporte">Central de Suporte</Link>
              <a href="mailto:clipfilme@gmail.com">
                <FaEnvelope style={{ marginRight: 6, fontSize: '0.75rem' }} />
                clipfilme@gmail.com
              </a>
              <Link to="/excluir-conta">Excluir Conta</Link>
              <Link to="/privacidade">Politica de Privacidade</Link>
            </div>
            <div className="dt-footer-col">
              <h4>Baixar App</h4>
              <a href="https://play.google.com/store/apps/details?id=redeibelieve.app&hl=pt_BR" target="_blank" rel="noopener noreferrer">Google Play</a>
              <a href="https://apps.apple.com/br/app/desconton-ofertas-locais/id6754894996" target="_blank" rel="noopener noreferrer">App Store</a>
            </div>
          </div>
          <div className="dt-footer-bottom">
            <p>&copy; 2026 DescontOn. Todos os direitos reservados.</p>
            <p>Feito com dedicacao para o comercio local.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
