import React from 'react';
import './Privacy.css';
import logo from './assets/logo_inline.svg';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="Privacy">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="DescontOn" height="40" className="me-2" />
            <span className="brand-text">DescontOn</span>
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Início</Link>
            <Link className="nav-link" to="/suporte">Suporte</Link>
          </div>
        </div>
      </nav>

      <div className="container privacy-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="privacy-card">
              <h1 className="privacy-title">Política de Privacidade</h1>
              <p className="privacy-updated">Última atualização: 12 de abril de 2026</p>

              <section>
                <h2>1. Introdução</h2>
                <p>
                  Esta Política de Privacidade descreve como o <strong>DescontOn</strong> ("nós",
                  "nosso" ou "aplicativo") coleta, usa, armazena e compartilha informações pessoais
                  dos usuários do aplicativo móvel DescontOn e do site{' '}
                  <a href="https://www.desconton.com.br">www.desconton.com.br</a>.
                </p>
                <p>
                  Ao usar o DescontOn, você concorda com as práticas descritas nesta política.
                  Se você não concordar, por favor, não utilize nossos serviços.
                </p>
              </section>

              <section>
                <h2>2. Informações que coletamos</h2>
                <h3>2.1. Informações fornecidas por você</h3>
                <ul>
                  <li><strong>Dados de cadastro:</strong> nome, e-mail, telefone, CPF/CNPJ,
                    endereço (rua, número, bairro, cidade, estado, CEP) e senha.</li>
                  <li><strong>Dados do negócio (para lojistas/atacadistas):</strong> razão social,
                    nome fantasia, CNPJ, categoria da loja, horário de funcionamento.</li>
                  <li><strong>Foto de perfil e de ofertas:</strong> imagens que você escolhe enviar
                    ao aplicativo pelo seletor de fotos do sistema.</li>
                  <li><strong>Conteúdo do aplicativo:</strong> ofertas criadas, cupons resgatados,
                    lojas seguidas, comentários e avaliações.</li>
                </ul>

                <h3>2.2. Informações coletadas automaticamente</h3>
                <ul>
                  <li><strong>Localização aproximada:</strong> usamos a localização do dispositivo
                    para mostrar ofertas próximas no mapa. Você pode negar essa permissão a
                    qualquer momento nas configurações do sistema operacional.</li>
                  <li><strong>Dados de uso:</strong> páginas visitadas, ofertas visualizadas,
                    tempo gasto no app e interações, para melhorar a experiência.</li>
                  <li><strong>Informações do dispositivo:</strong> modelo, sistema operacional,
                    idioma e identificador anônimo para fins de segurança e estatísticas.</li>
                </ul>
              </section>

              <section>
                <h2>3. Como usamos suas informações</h2>
                <ul>
                  <li>Criar e manter sua conta no aplicativo.</li>
                  <li>Exibir ofertas relevantes com base na sua localização e interesses.</li>
                  <li>Gerar e validar cupons únicos de resgate (código de 6 dígitos + QR Code).</li>
                  <li>Processar pagamentos de planos de assinatura (através do Google Play / App Store).</li>
                  <li>Enviar notificações sobre ofertas, cupons e atualizações do app.</li>
                  <li>Responder a solicitações de suporte e comunicações diretas.</li>
                  <li>Cumprir obrigações legais e regulamentares.</li>
                  <li>Prevenir fraudes, abusos e violações dos Termos de Uso.</li>
                </ul>
              </section>

              <section>
                <h2>4. Com quem compartilhamos suas informações</h2>
                <p>Não vendemos nem alugamos seus dados pessoais. Compartilhamos apenas quando necessário:</p>
                <ul>
                  <li><strong>Lojistas:</strong> quando você resgata um cupom, o lojista vê seu
                    nome e o código do cupom para realizar a validação presencial.</li>
                  <li><strong>Provedores de infraestrutura:</strong> Google (Firebase, Google Maps,
                    Google Play Billing) para hospedagem, autenticação e processamento de pagamentos.</li>
                  <li><strong>Autoridades legais:</strong> quando exigido por lei, ordem judicial
                    ou para proteger nossos direitos e de terceiros.</li>
                </ul>
              </section>

              <section>
                <h2>5. Armazenamento e segurança</h2>
                <p>
                  Seus dados são armazenados em servidores seguros do Google Cloud Platform
                  (Firebase/Firestore), localizados em regiões que seguem padrões internacionais
                  de proteção de dados.
                </p>
                <p>
                  Utilizamos criptografia em trânsito (HTTPS/TLS) e em repouso, autenticação por
                  Firebase Auth com senha hasheada, regras de acesso estritas e App Check para
                  impedir acesso não autorizado aos nossos servidores.
                </p>
              </section>

              <section>
                <h2>6. Seus direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode:</p>
                <ul>
                  <li><strong>Acessar</strong> os dados que temos sobre você.</li>
                  <li><strong>Corrigir</strong> dados incompletos, inexatos ou desatualizados.</li>
                  <li><strong>Excluir</strong> sua conta e todos os dados pessoais associados,
                    através da página <Link to="/excluir-conta">Excluir Conta</Link> ou dentro
                    do próprio app em Perfil → Excluir conta.</li>
                  <li><strong>Portar</strong> seus dados para outro serviço.</li>
                  <li><strong>Revogar</strong> o consentimento dado a qualquer momento.</li>
                  <li><strong>Reclamar</strong> à ANPD (Autoridade Nacional de Proteção de Dados).</li>
                </ul>
                <p>
                  Para exercer qualquer desses direitos, entre em contato pelo e-mail{' '}
                  <a href="mailto:clipfilme@gmail.com">clipfilme@gmail.com</a>.
                </p>
              </section>

              <section>
                <h2>7. Permissões do aplicativo</h2>
                <p>O DescontOn solicita as seguintes permissões do sistema operacional:</p>
                <ul>
                  <li><strong>Localização:</strong> para mostrar ofertas próximas no mapa.</li>
                  <li><strong>Câmera:</strong> para tirar fotos de perfil e de ofertas.</li>
                  <li><strong>Fotos (Photo Picker):</strong> para selecionar imagens da galeria.
                    Usamos o seletor de fotos do sistema Android/iOS, <em>sem acessar toda a
                    galeria</em>.</li>
                  <li><strong>Internet:</strong> para conectar aos nossos servidores.</li>
                </ul>
                <p>
                  Você pode revogar qualquer permissão a qualquer momento nas configurações
                  do sistema operacional do seu celular.
                </p>
              </section>

              <section>
                <h2>8. Retenção de dados</h2>
                <p>
                  Mantemos seus dados pessoais enquanto sua conta estiver ativa. Ao excluir a conta,
                  todos os dados pessoais são removidos em até 30 dias, exceto:
                </p>
                <ul>
                  <li>Dados necessários para cumprimento de obrigações legais (fiscais, contábeis).</li>
                  <li>Dados anonimizados usados para estatísticas e melhoria do produto.</li>
                </ul>
              </section>

              <section>
                <h2>9. Crianças e adolescentes</h2>
                <p>
                  O DescontOn não é destinado a menores de 13 anos. Não coletamos intencionalmente
                  dados de crianças. Se você é pai/mãe/responsável e acredita que seu filho nos
                  forneceu dados pessoais, entre em contato para que possamos removê-los.
                </p>
              </section>

              <section>
                <h2>10. Alterações nesta política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Quando houver
                  mudanças relevantes, notificaremos você através do aplicativo ou por e-mail.
                  A data da última atualização estará sempre no topo deste documento.
                </p>
              </section>

              <section>
                <h2>11. Contato</h2>
                <p>Para dúvidas, solicitações ou reclamações relacionadas a privacidade:</p>
                <ul className="contact-list">
                  <li><strong>E-mail:</strong> <a href="mailto:clipfilme@gmail.com">clipfilme@gmail.com</a></li>
                  <li><strong>Telefone:</strong> +55 (19) 98920-7072</li>
                  <li><strong>Site:</strong> <a href="https://www.desconton.com.br">www.desconton.com.br</a></li>
                </ul>
              </section>

              <div className="privacy-footer">
                <Link to="/" className="btn btn-outline-light">← Voltar ao início</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
