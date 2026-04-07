import React, { useState } from 'react';
import './Changelog.css';
import logo from './assets/logo_desconton.png';
import { Link } from 'react-router-dom';

function Changelog() {
  const [selectedVersion] = useState('current');

  const versions = {
    current: {
      version: 'Em Desenvolvimento - Outubro 2025',
      date: '06 de Outubro de 2025',
      highlights: [
        'Sistema completo de localização e geocoding',
        'Nova experiência de cadastro (Happy Path)',
        'Gerenciamento avançado de ofertas',
        'Layout com marca DescontOn',
      ],
      features: [
        {
          title: 'Sistema de Localização e Geocoding',
          icon: '🗺️',
          items: [
            'Mapa interativo com pins de lojas',
            'Conversão automática de endereços em coordenadas',
            'Geocoding reverso (coordenadas → endereço)',
            '"Usar minha localização" no cadastro',
            'Script de migração de coordenadas para lojas existentes'
          ]
        },
        {
          title: 'Sistema de Busca e Validação',
          icon: '🔍',
          items: [
            'Busca automática de endereço por CEP (API ViaCEP)',
            'Validação de CNPJ com identificação de segmento',
            'Detecção automática de atividade comercial',
            'Preenchimento inteligente de formulários'
          ]
        },
        {
          title: 'Gerenciamento de Ofertas',
          icon: '🎯',
          items: [
            'Reativação de ofertas expiradas',
            'Edição completa de promoções (todos os campos)',
            'Controle de status: pausar/reativar ofertas',
            'Seletor de data para validade',
            'Cards coloridos indicando status visual'
          ]
        },
        {
          title: 'Layout com Marca DescontOn',
          icon: '🎨',
          items: [
            'Header com carrossel da marca (3 mensagens)',
            'Seção combinada: Destaques + Ofertas Relâmpago',
            'Auto-rotação a cada 5 segundos',
            'Gradiente nas cores da marca',
            'Design moderno e profissional'
          ]
        },
        {
          title: 'Sistema de Avisos',
          icon: '🚨',
          items: [
            'Detecção automática de problemas de endereço',
            'Avisos visuais no perfil do lojista',
            'Dialog de ajuda contextual',
            'Sugestões de correção de endereço'
          ]
        },
        {
          title: 'Nova Experiência de Cadastro',
          icon: '✨',
          items: [
            'Wizard em 4 etapas (Happy Path)',
            'Validação em tempo real',
            'Cards animados para seleção',
            'Tela de sucesso celebrativa',
            'Transições suaves entre etapas'
          ]
        },
        {
          title: 'Melhorias de Privacidade',
          icon: '🔒',
          items: [
            'Campo "Nome da Empresa" separado',
            'Separação de dados públicos e privados',
            'Conformidade com LGPD',
            'Proteção de dados pessoais'
          ]
        }
      ],
      improvements: [
        {
          category: 'Interface do Comprador',
          items: [
            'Página inicial completamente redesenhada (+358 linhas)',
            'Melhorias na busca de lojas (+282 linhas)',
            'Mapa interativo com bottom sheet (+422 linhas)',
            'Detalhes da oferta aprimorados (+706 linhas)'
          ]
        },
        {
          category: 'Interface do Lojista',
          items: [
            'Criar oferta redesenhado (+1400 linhas)',
            'Editar oferta com todos os campos (+506 linhas)',
            'Minhas ofertas melhorado (+562 linhas)',
            'Cards de status visuais'
          ]
        },
        {
          category: 'Admin Dashboard',
          items: [
            'Widget para executar script de coordenadas',
            'Cadastro de lojas com geocoding automático (+128 linhas)',
            'Validação de CNPJ integrada'
          ]
        }
      ],
      technical: [
        {
          title: 'Novos Serviços',
          items: [
            'geocoding_service.dart - Geocoding completo',
            'cep_service.dart - Integração ViaCEP'
          ]
        },
        {
          title: 'Novos Widgets',
          items: [
            'address_warning_widget.dart - Avisos de endereço',
            'check_coordinates_widget.dart - Verificação de coordenadas',
            'ibelieve_header.dart - Header da marca'
          ]
        },
        {
          title: 'Scripts',
          items: [
            'add_coordinates_to_empresas.dart - Migração de coordenadas'
          ]
        },
        {
          title: 'APIs Externas',
          items: [
            'ViaCEP - Busca de endereço (gratuita)',
            'ReceitaWS - Validação de CNPJ (gratuita)',
            'Nominatim - Geocoding (gratuita)'
          ]
        }
      ],
      stats: {
        filesModified: 19,
        linesAdded: 5438,
        linesRemoved: 1021,
        netChange: '+4417 linhas'
      }
    }
  };

  const currentVersion = versions[selectedVersion];

  return (
    <div className="Changelog">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="DescontOn Logo" width="150" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/changelog">Changelog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/suporte">Suporte</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="changelog-header">
        <div className="container">
          <h1>📋 Histórico de Alterações</h1>
          <p>Acompanhe todas as novidades e melhorias do aplicativo <span className="notranslate">DescontOn</span></p>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="version-header">
          <div className="version-info">
            <h2>{currentVersion.version}</h2>
            <span className="version-date">📅 {currentVersion.date}</span>
          </div>
          <div className="version-badge">
            <span className="badge bg-primary">Em Desenvolvimento</span>
          </div>
        </div>

        <div className="highlights-section">
          <h3>⭐ Destaques desta Versão</h3>
          <div className="highlights-grid">
            {currentVersion.highlights.map((highlight, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">✨</div>
                <div className="highlight-text">{highlight}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-section">
          <h3>🚀 Novas Funcionalidades</h3>
          {currentVersion.features.map((feature, index) => (
            <div key={index} className="feature-block">
              <h4>
                <span className="feature-icon">{feature.icon}</span>
                {feature.title}
              </h4>
              <ul className="feature-list">
                {feature.items.map((item, idx) => (
                  <li key={idx}>✅ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="improvements-section">
          <h3>🔧 Melhorias e Otimizações</h3>
          <div className="row">
            {currentVersion.improvements.map((improvement, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="improvement-card">
                  <h5>{improvement.category}</h5>
                  <ul>
                    {improvement.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="technical-section">
          <h3>💻 Detalhes Técnicos</h3>
          <div className="row">
            {currentVersion.technical.map((tech, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="technical-card">
                  <h5>{tech.title}</h5>
                  <ul>
                    {tech.items.map((item, idx) => (
                      <li key={idx}><code>{item}</code></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>📊 Estatísticas de Código</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{currentVersion.stats.filesModified}</div>
              <div className="stat-label">Arquivos Modificados</div>
            </div>
            <div className="stat-card stat-success">
              <div className="stat-number">+{currentVersion.stats.linesAdded}</div>
              <div className="stat-label">Linhas Adicionadas</div>
            </div>
            <div className="stat-card stat-danger">
              <div className="stat-number">-{currentVersion.stats.linesRemoved}</div>
              <div className="stat-label">Linhas Removidas</div>
            </div>
            <div className="stat-card stat-primary">
              <div className="stat-number">{currentVersion.stats.netChange}</div>
              <div className="stat-label">Saldo Total</div>
            </div>
          </div>
        </div>

        <div className="documentation-section">
          <h3>📚 Documentação Criada</h3>
          <div className="doc-grid">
            <div className="doc-item">📄 ADDRESS_WARNING_SYSTEM.md</div>
            <div className="doc-item">📄 BRAND_LAYOUT_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 CEP_CNPJ_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 FIX_ADDRESSES.md</div>
            <div className="doc-item">📄 GEOCODING_GUIDE.md</div>
            <div className="doc-item">📄 GEOCODING_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 LOCATION_FEATURE.md</div>
            <div className="doc-item">📄 OFFERS_MANAGEMENT_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 PRIVACY_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 REGISTER_IMPROVEMENTS.md</div>
            <div className="doc-item">📄 CHANGELOG.md</div>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-info">
            <p><strong>👨‍💻 Desenvolvido com assistência de:</strong> Claude Code (Anthropic)</p>
            <p><strong>📅 Última atualização:</strong> {currentVersion.date}</p>
            <p><strong>🚀 Projeto:</strong> <span className="notranslate">DescontOn</span> - Plataforma de ofertas e descontos</p>
          </div>
          <div className="footer-actions">
            <Link to="/" className="btn btn-primary">Voltar ao Início</Link>
            <Link to="/suporte" className="btn btn-outline-primary">Central de Suporte</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changelog;
