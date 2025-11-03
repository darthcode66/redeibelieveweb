# 🚀 Deploy no Hostinger - redeibelieve.com.br

## ✅ Build Concluído
Os arquivos de produção foram gerados na pasta `build/`

## 📋 Métodos de Deploy

### Método 1: Upload via File Manager (Recomendado para Iniciantes)

#### Passo 1: Acessar o Painel Hostinger
1. Acesse https://hpanel.hostinger.com
2. Faça login com suas credenciais
3. Selecione o domínio **redeibelieve.com.br**

#### Passo 2: Acessar File Manager
1. No painel do domínio, clique em **"File Manager"** ou **"Gerenciador de Arquivos"**
2. Navegue até a pasta **`public_html`** (pasta raiz do site)

#### Passo 3: Limpar Pasta (se houver arquivos antigos)
1. Selecione todos os arquivos em `public_html`
2. Delete todos (exceto `.htaccess` se existir)

#### Passo 4: Upload dos Arquivos
1. No File Manager, clique em **"Upload"**
2. Selecione TODOS os arquivos da pasta **`build/`** do seu projeto:
   ```
   build/
   ├── static/
   ├── index.html
   ├── manifest.json
   ├── favicon.ico
   ├── logo192.png
   ├── logo512.png
   └── robots.txt
   ```
3. Aguarde o upload completar

#### Passo 5: Mover Arquivos para a Raiz
1. Após upload, os arquivos estarão em `public_html/build/`
2. **Mova** todos os arquivos de `build/` para `public_html/`
3. Delete a pasta vazia `build/`

#### Passo 6: Criar arquivo .htaccess (Importante para React Router)
Crie um arquivo `.htaccess` em `public_html/` com o conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

### Método 2: Upload via FTP (Mais Rápido)

#### Passo 1: Obter Credenciais FTP
1. No painel Hostinger, vá em **"FTP Accounts"** ou **"Contas FTP"**
2. Anote:
   - **Host/Servidor**: ftp.redeibelieve.com.br (ou IP fornecido)
   - **Usuário**: (geralmente seu email ou username)
   - **Senha**: (sua senha FTP)
   - **Porta**: 21

#### Passo 2: Instalar Cliente FTP
Download do FileZilla: https://filezilla-project.org/download.php?type=client

#### Passo 3: Conectar ao Servidor
1. Abra o FileZilla
2. Preencha:
   - Host: ftp.redeibelieve.com.br
   - Usuário: [seu usuário]
   - Senha: [sua senha]
   - Porta: 21
3. Clique em "Conexão Rápida"

#### Passo 4: Upload
1. Navegue no painel direito (servidor) até `public_html/`
2. No painel esquerdo (local), navegue até a pasta `build/` do projeto
3. Selecione TODOS os arquivos dentro de `build/`
4. Arraste para `public_html/` no painel direito
5. Aguarde transferência

#### Passo 5: Criar .htaccess
Use o mesmo conteúdo do Método 1

---

### Método 3: Git + Deploy Automático (Avançado)

Se a Hostinger suportar Git:

1. Inicialize o repositório (se ainda não fez):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Configure deploy automático no painel Hostinger
3. Push para o repositório conectado

---

## 🔧 Configurações Importantes

### SSL/HTTPS
1. No painel Hostinger, vá em **"SSL"**
2. Ative o **SSL gratuito** (Let's Encrypt)
3. Force redirecionamento HTTPS

### DNS (se necessário)
Se o domínio não estiver apontando:
1. Vá em **"DNS Zone"**
2. Verifique se o registro A aponta para o IP do servidor Hostinger
3. Aguarde propagação (até 24h)

---

## 📁 Estrutura Final em public_html/

```
public_html/
├── .htaccess          (criar manualmente)
├── index.html
├── manifest.json
├── favicon.ico
├── logo192.png
├── logo512.png
├── robots.txt
├── asset-manifest.json
└── static/
    ├── css/
    │   └── main.c10b6b1c.css
    ├── js/
    │   ├── main.c3097ff6.js
    │   └── 453.ae6a7549.chunk.js
    └── media/
        └── [imagens]
```

---

## ✅ Verificação

Após deploy:
1. Acesse https://redeibelieve.com.br
2. Teste todas as rotas:
   - https://redeibelieve.com.br/
   - https://redeibelieve.com.br/suporte
   - https://redeibelieve.com.br/changelog
3. Verifique se as imagens carregam
4. Teste em mobile

---

## 🐛 Troubleshooting

### Problema: Página em branco
**Solução**: Verifique se o arquivo `.htaccess` foi criado corretamente

### Problema: Rotas não funcionam (erro 404)
**Solução**: Adicione/verifique o arquivo `.htaccess` com as regras de rewrite

### Problema: CSS não carrega
**Solução**: Verifique se a pasta `static/` foi enviada corretamente

### Problema: Imagens não aparecem
**Solução**: Verifique se a pasta `static/media/` contém os arquivos

---

## 🔄 Atualizações Futuras

Sempre que fizer mudanças:

1. Execute o build:
   ```bash
   npm run build
   ```

2. Faça upload apenas dos arquivos modificados
   - Substitua `index.html`
   - Substitua pasta `static/` completa
   - Mantenha `.htaccess`

3. Limpe cache do navegador (Ctrl + F5)

---

## 📞 Suporte Hostinger

- **Chat**: Disponível no painel
- **Email**: suporte@hostinger.com.br
- **Base de conhecimento**: https://support.hostinger.com

---

**Status do Build**: ✅ Concluído
**Tamanho Total**: ~122 KB (gzipped)
**Arquivos Prontos**: `build/` folder
