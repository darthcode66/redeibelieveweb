import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo_redeibelieve.png';
import googlePlayBadge from './assets/google-play-badge.png';
import appStoreBadge from './assets/app-store-badge.svg';
import { Link } from 'react-router-dom';

function Home() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const calculateSavings = (monthlyPrice) => {
    if (billingPeriod === 'annual') {
      const annualPrice = monthlyPrice * 10; // 12 meses - 2 meses grátis
      const monthlySavings = (monthlyPrice * 12) - annualPrice;
      return {
        price: annualPrice,
        savings: monthlySavings,
        monthlyEquivalent: (annualPrice / 12).toFixed(0)
      };
    }
    return {
      price: monthlyPrice,
      savings: 0,
      monthlyEquivalent: monthlyPrice
    };
  };

  const proPlan = calculateSavings(149);
  const businessPlan = calculateSavings(499);

  return (
    <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Rede I Believe Logo" width="150" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Funcionalidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Preços</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/changelog">Changelog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/suporte">Suporte</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header id="home" className="hero-section text-center text-white">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-4 notranslate">Rede I Believe</h1>
            <p className="lead">🎯 Clube de Vantagens que Conecta Pessoas e Negócios<br/>através de Ofertas e Descontos Exclusivos</p>
            <div className="coming-soon">
              <div className="mb-4">
                <a href="#pricing" className="cta-button cta-primary">
                  💰 Ver Planos e Preços
                </a>
                <a href="#features" className="cta-button cta-secondary">
                  ✨ Conhecer Funcionalidades
                </a>
              </div>
              <p className="download-note">📱 Baixe o app gratuitamente e comece a economizar hoje!</p>
              <h3>🚀 Disponível nas Lojas</h3>
              <div className="store-logos">
                <img src={googlePlayBadge} alt="Baixar na Google Play Store" width="250" />
                <img src={appStoreBadge} alt="Baixar na Apple App Store" width="250" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>🏢 Sobre <span className="notranslate">a Rede I Believe</span></h2>
              <p>
                <span className="notranslate">A Rede I Believe</span> é uma plataforma inovadora que revoluciona o conceito de clube de vantagens.
                Conectamos compradores, lojistas e fornecedores em um ecossistema único de descontos e ofertas exclusivas.
              </p>
              <p>
                Nossa missão é <strong>fortalecer o comércio local</strong>, criar oportunidades de negócio e
                proporcionar economia real para todos os usuários da plataforma.
              </p>
              <div className="mt-4">
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-text">Descontos Exclusivos e Ofertas Especiais</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🌍</div>
                  <div className="benefit-text">Fortalecimento do Comércio Local</div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🤝</div>
                  <div className="benefit-text">Rede de Parceiros Confiáveis</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-image">
                <div>
                  <h3>📱 App <span className="notranslate">Rede I Believe</span></h3>
                  <p className="mt-3 mb-0">Tecnologia que conecta<br/>pessoas e negócios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <h2 className="text-center">🚀 Funcionalidades para Todos</h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card feature-card text-center">
                <div className="card-body">
                  <div className="feature-icon comprador">🛒</div>
                  <h5 className="card-title">Compradores</h5>
                  <p className="card-text">
                    Encontre as <strong>melhores ofertas</strong> e descontos exclusivos na sua região.
                    Economize em compras do dia a dia com ofertas verificadas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card feature-card text-center">
                <div className="card-body">
                  <div className="feature-icon lojista">🏪</div>
                  <h5 className="card-title">Lojistas</h5>
                  <p className="card-text">
                    Crie e gerencie suas <strong>ofertas promocionais</strong> para atrair novos clientes
                    e aumentar suas vendas de forma estratégica.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card feature-card text-center">
                <div className="card-body">
                  <div className="feature-icon fornecedor">🚚</div>
                  <h5 className="card-title">Fornecedores</h5>
                  <p className="card-text">
                    Ofereça seus produtos diretamente para <strong>lojistas</strong>,
                    expandindo seu alcance no mercado B2B e fortalecendo a cadeia comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="text-center">💰 Planos e Preços</h2>
          <p className="text-center subtitle">Escolha o plano ideal para impulsionar seu negócio</p>

          {/* Billing Period Toggle */}
          <div className="billing-toggle text-center mb-5">
            <button
              className={`billing-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensal
            </button>
            <button
              className={`billing-btn ${billingPeriod === 'annual' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('annual')}
            >
              Anual
              <span className="badge-save">Economize até 17%</span>
            </button>
          </div>

          <div className="row justify-content-center">
            {/* Plano Gratuito */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="pricing-card">
                <div className="pricing-badge">Sempre Gratuito</div>
                <div className="pricing-icon">🎁</div>
                <h3>Plano Gratuito</h3>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-amount">0</span>
                  <span className="price-period">/mês</span>
                </div>
                <p className="pricing-description">Perfeito para começar a divulgar suas ofertas</p>
                <ul className="pricing-features">
                  <li>✅ Criar ofertas ilimitadas</li>
                  <li>✅ Ofertas normais e relâmpago</li>
                  <li>✅ Editar e pausar ofertas</li>
                  <li>✅ Estatísticas básicas</li>
                  <li>✅ Perfil da empresa</li>
                  <li>❌ Ofertas em destaque</li>
                  <li>❌ Analytics avançados</li>
                  <li>❌ Badge premium</li>
                </ul>
                <a href="#contact" className="pricing-button btn-free">
                  Começar Grátis
                </a>
              </div>
            </div>

            {/* Plano PRO - Recomendado */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="pricing-card popular">
                <div className="pricing-badge popular-badge">🌟 Mais Popular</div>
                <div className="pricing-icon">⭐</div>
                <h3>Plano PRO</h3>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-amount">
                    {billingPeriod === 'monthly' ? '149' : proPlan.monthlyEquivalent}
                  </span>
                  <span className="price-period">/mês</span>
                </div>
                {billingPeriod === 'annual' && (
                  <div className="pricing-savings">
                    💰 R$ {proPlan.price.toLocaleString('pt-BR')}/ano - Economize R$ {proPlan.savings}!
                  </div>
                )}
                {billingPeriod === 'monthly' && (
                  <div className="pricing-note">Ou R$ 1.490/ano (economize R$ 298)</div>
                )}
                <p className="pricing-description">Para quem quer mais visibilidade e resultados</p>
                <ul className="pricing-features">
                  <li>✅ <strong>Tudo do plano Gratuito</strong></li>
                  <li>✅ <strong>5 ofertas em destaque/mês</strong></li>
                  <li>✅ Badge "Loja Verificada" 🏅</li>
                  <li>✅ Analytics avançados</li>
                  <li>✅ Prioridade na busca</li>
                  <li>✅ Suporte prioritário</li>
                  <li>✅ Relatórios de desempenho</li>
                  <li>✅ Insights de público</li>
                </ul>
                <a href="#contact" className="pricing-button btn-annual">
                  Assinar Plano PRO
                </a>
              </div>
            </div>

            {/* Plano Business */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="pricing-card">
                <div className="pricing-badge">Para Empresas</div>
                <div className="pricing-icon">🚀</div>
                <h3>Plano Business</h3>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-amount">
                    {billingPeriod === 'monthly' ? '499' : businessPlan.monthlyEquivalent}
                  </span>
                  <span className="price-period">/mês</span>
                </div>
                {billingPeriod === 'annual' && (
                  <div className="pricing-savings">
                    💎 R$ {businessPlan.price.toLocaleString('pt-BR')}/ano - Economize R$ {businessPlan.savings}!
                  </div>
                )}
                {billingPeriod === 'monthly' && (
                  <div className="pricing-note">Ou R$ 4.990/ano (economize R$ 998)</div>
                )}
                <p className="pricing-description">Solução completa para redes e múltiplas lojas</p>
                <ul className="pricing-features">
                  <li>✅ <strong>Tudo do plano PRO</strong></li>
                  <li>✅ <strong>Ofertas destaque ilimitadas</strong></li>
                  <li>✅ Até 5 localizações (lojas)</li>
                  <li>✅ Publicidade segmentada</li>
                  <li>✅ API de integração</li>
                  <li>✅ Dashboard customizado</li>
                  <li>✅ Gerente de conta dedicado</li>
                  <li>✅ Consultoria de marketing</li>
                </ul>
                <a href="#contact" className="pricing-button btn-monthly">
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>

          <div className="pricing-footer text-center">
            <p><strong>🎯 Recursos À La Carte</strong> (para quem está no Plano Gratuito):</p>
            <p>
              1 Oferta em Destaque (3 dias): <strong>R$ 79</strong> •
              Pacote 3 Ofertas: <strong>R$ 199</strong> •
              Pacote 10 Ofertas: <strong>R$ 590</strong>
            </p>
            <p className="mt-3">
              <em>💳 Aceitamos todas as formas de pagamento. Cancele quando quiser, sem multas.</em>
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="text-center">❓ Perguntas Frequentes sobre Preços</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq-item">
                <h5>💳 Quais formas de pagamento vocês aceitam?</h5>
                <p>Aceitamos cartão de crédito, débito, PIX, boleto bancário e transferência. Para planos anuais, oferecemos desconto adicional no pagamento à vista.</p>
              </div>
              <div className="faq-item">
                <h5>🔄 Posso cancelar minha assinatura a qualquer momento?</h5>
                <p>Sim! Você pode cancelar quando quiser, sem multas ou taxas. Se cancelar no meio do mês, você continua com acesso até o fim do período pago.</p>
              </div>
              <div className="faq-item">
                <h5>📊 O que são "ofertas em destaque"?</h5>
                <p>Ofertas em destaque aparecem no topo dos resultados de busca e na página inicial do app por 3 dias, aumentando sua visibilidade em até 10x comparado a ofertas normais.</p>
              </div>
              <div className="faq-item">
                <h5>🎁 O plano gratuito tem alguma limitação de tempo?</h5>
                <p>Não! O plano gratuito é <strong>100% gratuito para sempre</strong>. Você pode criar ofertas ilimitadas sem pagar nada. Recursos premium são opcionais.</p>
              </div>
              <div className="faq-item">
                <h5>🏪 Posso ter múltiplas lojas em um único plano?</h5>
                <p>Sim! No <strong>Plano Business</strong> você pode gerenciar até 5 localizações diferentes. Cada loja pode criar ofertas independentemente.</p>
              </div>
              <div className="faq-item">
                <h5>📈 Vocês cobram comissão sobre as vendas?</h5>
                <p>Atualmente <strong>não cobramos comissão</strong> sobre vendas ou resgates de ofertas. Você paga apenas a assinatura mensal ou recursos avulsos.</p>
              </div>
              <div className="faq-item">
                <h5>🔼 Posso fazer upgrade ou downgrade do plano?</h5>
                <p>Sim! Você pode mudar de plano a qualquer momento. No upgrade, cobramos apenas a diferença proporcional. No downgrade, o crédito é usado no próximo mês.</p>
              </div>
              <div className="faq-item">
                <h5>🆓 Existe trial gratuito dos planos pagos?</h5>
                <p>Sim! Oferecemos <strong>14 dias grátis</strong> do Plano PRO para novos usuários. Não é necessário cartão de crédito para começar o trial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="text-center">⭐ Por que Escolher o <span className="notranslate">Rede I Believe</span>?</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">Ofertas Relâmpago com Descontos Imperdíveis</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🏷️</div>
                <div className="benefit-text">Categorização Inteligente de Produtos</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📍</div>
                <div className="benefit-text">Busca por Localização e Proximidade</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <div className="benefit-text">Analytics e Métricas de Engajamento</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔒</div>
                <div className="benefit-text">Segurança e Proteção de Dados</div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-text">Comunidade de Benefícios Mútuos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <p><strong>&copy; 2025 <span className="notranslate">Rede I Believe</span></strong></p>
              <p>Todos os direitos reservados.</p>
            </div>
            <div className="col-md-4">
              <p><strong>📋 Novidades</strong></p>
              <Link to="/changelog" className="btn btn-outline-light btn-sm mt-2">
                📋 Changelog
              </Link>
            </div>
            <div className="col-md-4">
              <p><strong>📧 Contato e Suporte</strong></p>
              <p>suporte@redeibelieve.app</p>
              <Link to="/suporte" className="btn btn-outline-light btn-sm mt-2">
                🎫 Central de Suporte
              </Link>
            </div>
          </div>
          <hr style={{margin: '2rem 0', opacity: '0.3'}} />
          <p className="mb-0">
            <em>💚 Desenvolvido com ❤️ para conectar pessoas e negócios através de vantagens exclusivas.</em>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;