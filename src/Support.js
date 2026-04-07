import React, { useState } from 'react';
import './Support.css';
import logo from './assets/logo_desconton.png';

function Support() {
  const [activeTab, setActiveTab] = useState('tickets');
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    category: '',
    priority: 'medium',
    subject: '',
    description: '',
    attachment: null
  });
  const [tickets] = useState([
    {
      id: 'TK-2025-001',
      status: 'aberto',
      priority: 'alta',
      category: 'Técnico',
      subject: 'Erro no login do aplicativo',
      date: '2025-01-10',
      lastUpdate: '2025-01-10'
    },
    {
      id: 'TK-2025-002',
      status: 'em_andamento',
      priority: 'media',
      category: 'Suporte',
      subject: 'Como criar uma oferta?',
      date: '2025-01-09',
      lastUpdate: '2025-01-10'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setTicketForm(prev => ({
      ...prev,
      attachment: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do ticket
    alert('Ticket enviado com sucesso! Você receberá uma confirmação por email.');
    setTicketForm({
      name: '',
      email: '',
      category: '',
      priority: 'medium',
      subject: '',
      description: '',
      attachment: null
    });
  };

  const faqData = [
    {
      question: 'Como faço para criar uma conta no <span class="notranslate">DescontOn</span>?',
      answer: 'Para criar uma conta, baixe o aplicativo na App Store ou Google Play, toque em "Criar Conta" e siga as instruções. Você precisará escolher seu tipo de usuário (Comprador, Lojista ou Fornecedor).'
    },
    {
      question: 'Como criar uma oferta sendo lojista?',
      answer: 'Após fazer login como lojista, acesse o dashboard, toque em "Criar Oferta", preencha os dados da promoção (título, descrição, desconto, validade) e publique. A oferta ficará visível para os compradores.'
    },
    {
      question: 'Como resgatar uma oferta?',
      answer: 'Encontre a oferta desejada, toque nela para ver os detalhes e clique em "Resgatar Oferta". Você receberá um código ou QR Code para apresentar na loja.'
    },
    {
      question: 'O app é gratuito?',
      answer: 'Sim, o <span class="notranslate">DescontOn</span> é completamente gratuito para todos os tipos de usuário. Não cobramos taxas de inscrição ou mensalidades.'
    },
    {
      question: 'Como alterar meus dados cadastrais?',
      answer: 'No app, acesse "Configurações" ou "Perfil", edite as informações desejadas e salve as alterações.'
    },
    {
      question: 'Esqueci minha senha, como recupero?',
      answer: 'Na tela de login, toque em "Esqueci minha senha", digite seu email e siga as instruções que serão enviadas para sua caixa de entrada.'
    }
  ];

  const getStatusBadge = (status) => {
    const statusMap = {
      'aberto': { class: 'status-open', text: 'Aberto' },
      'em_andamento': { class: 'status-progress', text: 'Em Andamento' },
      'resolvido': { class: 'status-resolved', text: 'Resolvido' },
      'fechado': { class: 'status-closed', text: 'Fechado' }
    };
    const statusInfo = statusMap[status] || { class: 'status-open', text: status };
    return <span className={`status-badge ${statusInfo.class}`}>{statusInfo.text}</span>;
  };

  const getPriorityBadge = (priority) => {
    const priorityMap = {
      'baixa': { class: 'priority-low', text: 'Baixa' },
      'media': { class: 'priority-medium', text: 'Média' },
      'alta': { class: 'priority-high', text: 'Alta' },
      'critica': { class: 'priority-critical', text: 'Crítica' }
    };
    const priorityInfo = priorityMap[priority] || { class: 'priority-medium', text: priority };
    return <span className={`priority-badge ${priorityInfo.class}`}>{priorityInfo.text}</span>;
  };

  return (
    <div className="Support">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="DescontOn Logo" width="150" />
          </a>
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="/">Início</a>
            <a className="nav-link active" href="/suporte">Suporte</a>
          </div>
        </div>
      </nav>

      <div className="support-header">
        <div className="container">
          <h1>Central de Suporte</h1>
          <p>Estamos aqui para ajudar você! Entre em contato conosco através dos canais abaixo.</p>
        </div>
      </div>

      <div className="container mt-4">
        <div className="support-tabs">
          <button
            className={`tab-button ${activeTab === 'tickets' ? 'active' : ''}`}
            onClick={() => setActiveTab('tickets')}
          >
            🎫 Abrir Ticket
          </button>
          <button
            className={`tab-button ${activeTab === 'my-tickets' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-tickets')}
          >
            📋 Meus Tickets
          </button>
          <button
            className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            ❓ FAQ
          </button>
          <button
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            📞 Contato
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'tickets' && (
            <div className="ticket-form-section">
              <h2>Abrir Novo Ticket</h2>
              <form onSubmit={handleSubmit} className="ticket-form">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nome Completo *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={ticketForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={ticketForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="category" className="form-label">Categoria *</label>
                    <select
                      className="form-control"
                      id="category"
                      name="category"
                      value={ticketForm.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="tecnico">Problema Técnico</option>
                      <option value="conta">Conta e Login</option>
                      <option value="ofertas">Ofertas e Descontos</option>
                      <option value="pagamento">Pagamento</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="priority" className="form-label">Prioridade</label>
                    <select
                      className="form-control"
                      id="priority"
                      name="priority"
                      value={ticketForm.priority}
                      onChange={handleInputChange}
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                      <option value="critica">Crítica</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Assunto *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={ticketForm.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descrição do Problema *</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="5"
                    value={ticketForm.description}
                    onChange={handleInputChange}
                    placeholder="Descreva detalhadamente o problema ou dúvida..."
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="attachment" className="form-label">Anexo (Opcional)</label>
                  <input
                    type="file"
                    className="form-control"
                    id="attachment"
                    name="attachment"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                  />
                  <small className="text-muted">Formatos aceitos: JPG, PNG, PDF, DOC, DOCX (máx. 5MB)</small>
                </div>

                <button type="submit" className="btn btn-primary">
                  📤 Enviar Ticket
                </button>
              </form>
            </div>
          )}

          {activeTab === 'my-tickets' && (
            <div className="my-tickets-section">
              <h2>Meus Tickets</h2>
              <div className="tickets-list">
                {tickets.map(ticket => (
                  <div key={ticket.id} className="ticket-card">
                    <div className="ticket-header">
                      <div className="ticket-id">{ticket.id}</div>
                      <div className="ticket-badges">
                        {getStatusBadge(ticket.status)}
                        {getPriorityBadge(ticket.priority)}
                      </div>
                    </div>
                    <h4>{ticket.subject}</h4>
                    <div className="ticket-meta">
                      <span>📁 {ticket.category}</span>
                      <span>📅 Criado: {new Date(ticket.date).toLocaleDateString('pt-BR')}</span>
                      <span>🔄 Atualizado: {new Date(ticket.lastUpdate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="ticket-actions">
                      <button className="btn btn-outline-primary btn-sm">Ver Detalhes</button>
                      <button className="btn btn-outline-secondary btn-sm">Adicionar Comentário</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="faq-section">
              <h2>Perguntas Frequentes</h2>
              <div className="faq-list">
                {faqData.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="contact-section">
              <h2>Outros Canais de Contato</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-card">
                    <div className="contact-icon">📧</div>
                    <h4>Email</h4>
                    <p>suporte@desconton.com.br</p>
                    <small>Resposta em até 24 horas</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-card">
                    <div className="contact-icon">💬</div>
                    <h4>WhatsApp</h4>
                    <p>(11) 99999-9999</p>
                    <small>Seg à Sex, 9h às 18h</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-card">
                    <div className="contact-icon">📞</div>
                    <h4>Telefone</h4>
                    <p>(11) 3333-3333</p>
                    <small>Seg à Sex, 9h às 18h</small>
                  </div>
                </div>
              </div>

              <div className="business-hours">
                <h3>Horário de Atendimento</h3>
                <div className="hours-grid">
                  <div>Segunda à Sexta: 9h às 18h</div>
                  <div>Sábado: 9h às 14h</div>
                  <div>Domingo: Fechado</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Support;