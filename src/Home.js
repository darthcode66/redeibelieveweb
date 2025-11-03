import React from 'react';
import './App.css';
import logo from './assets/logo_redeibelieve.png';
import googlePlayBadge from './assets/google-play-badge.png';
import appStoreBadge from './assets/app-store-badge.svg';
import { Link } from 'react-router-dom';

function Home() {
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
                <a href="#features" className="cta-button">
                  ✨ Conheça as Funcionalidades
                </a>
              </div>
              <h3>🚀 Em Breve nas Lojas</h3>
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
              <h2>🏢 Sobre o <span className="notranslate">Rede I Believe</span></h2>
              <p>
                O <strong className="notranslate">Rede I Believe</strong> é uma plataforma inovadora que revoluciona o conceito de clube de vantagens.
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