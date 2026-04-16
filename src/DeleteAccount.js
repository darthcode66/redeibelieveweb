import React, { useState } from 'react';
import './DeleteAccount.css';
import logo from './assets/logo_inline.svg';
import { Link } from 'react-router-dom';

function DeleteAccount() {
  const [form, setForm] = useState({
    email: '',
    reason: '',
    confirm: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="DeleteAccount">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="DescontOn" height="40" className="me-2" />
            <span className="brand-text">DescontOn</span>
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/suporte">Suporte</Link>
          </div>
        </div>
      </nav>

      <div className="container delete-container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="delete-card">
              <h1 className="delete-title">Exclusão de Conta</h1>
              <p className="delete-subtitle">
                Solicite a exclusão da sua conta do aplicativo <strong>DescontOn</strong>.
              </p>

              {!submitted ? (
                <>
                  <div className="delete-info">
                    <h5>O que acontece ao excluir sua conta:</h5>
                    <ul>
                      <li>Seus dados pessoais (nome, email, telefone, endereço) serão permanentemente removidos</li>
                      <li>Suas ofertas publicadas serão desativadas e removidas</li>
                      <li>Seu histórico de resgates será excluído</li>
                      <li>Suas assinaturas ativas serão canceladas</li>
                      <li>Esta ação é irreversível</li>
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email da conta *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Digite o email cadastrado no app"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="reason" className="form-label">Motivo (opcional)</label>
                      <select
                        className="form-select"
                        id="reason"
                        name="reason"
                        value={form.reason}
                        onChange={handleInputChange}
                      >
                        <option value="">Selecione um motivo</option>
                        <option value="nao_uso">Não uso mais o aplicativo</option>
                        <option value="privacidade">Preocupações com privacidade</option>
                        <option value="outro_app">Encontrei outro aplicativo</option>
                        <option value="experiencia">Experiência insatisfatória</option>
                        <option value="outro">Outro motivo</option>
                      </select>
                    </div>

                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="confirm"
                        name="confirm"
                        checked={form.confirm}
                        onChange={handleInputChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="confirm">
                        Entendo que a exclusão da minha conta no <strong>DescontOn</strong> é permanente e irreversível.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-danger w-100 delete-btn"
                      disabled={!form.confirm || !form.email}
                    >
                      Solicitar exclusão da conta
                    </button>
                  </form>
                </>
              ) : (
                <div className="delete-success">
                  <div className="success-icon">✓</div>
                  <h4>Solicitação enviada</h4>
                  <p>
                    Recebemos sua solicitação de exclusão de conta do <strong>DescontOn</strong>.
                    Seus dados serão removidos em até <strong>30 dias</strong>.
                  </p>
                  <p>Você receberá uma confirmação no email <strong>{form.email}</strong>.</p>
                  <Link to="/" className="btn btn-outline-primary mt-3">Voltar ao início</Link>
                </div>
              )}
            </div>

            <div className="delete-footer">
              <p>
                <strong>DescontOn</strong> — Plataforma de descontos e ofertas exclusivas.
                <br />
                Em caso de dúvidas, entre em contato pelo <Link to="/suporte">suporte</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;
