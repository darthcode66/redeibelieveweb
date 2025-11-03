# 🚀 Deploy com Vercel + Domínio Hostinger

## Por que Vercel?
- ✅ Hospedagem **100% GRATUITA**
- ✅ Deploy em **30 segundos**
- ✅ SSL automático (HTTPS)
- ✅ CDN global (site ultra-rápido)
- ✅ Perfeito para React
- ✅ Deploy automático a cada mudança

---

## 📋 Método 1: Deploy via Interface (SEM código)

### Passo 1: Criar Conta na Vercel
1. Acesse: https://vercel.com/signup
2. Faça login com GitHub, GitLab ou Email

### Passo 2: Deploy Manual
1. Após login, clique em **"Add New..."** → **"Project"**
2. Clique em **"Deploy"** ou arraste a pasta **`build/`**
3. Aguarde o deploy (30 segundos)
4. Vercel vai dar um domínio temporário: `https://seu-projeto.vercel.app`

### Passo 3: Configurar Domínio Personalizado
1. No painel do projeto, vá em **"Settings"** → **"Domains"**
2. Adicione: **`redeibelieve.com.br`**
3. A Vercel vai pedir para configurar DNS

### Passo 4: Configurar DNS na Hostinger
1. Acesse o painel Hostinger: https://hpanel.hostinger.com
2. Vá em **"Domínios"** → Clique em **redeibelieve.com.br**
3. Clique em **"DNS / Name Servers"** ou **"Gerenciar DNS"**
4. Adicione os seguintes registros:

**Registro A (para redeibelieve.com.br):**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
TTL: 3600
```

**Registro CNAME (para www.redeibelieve.com.br):**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

5. Salve e aguarde até 24h (geralmente 10-30 minutos)

---

## 📋 Método 2: Deploy via CLI (Mais Profissional)

### Passo 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
# Na pasta do projeto
vercel
```

Responda as perguntas:
- Set up and deploy? **Y**
- Which scope? Selecione sua conta
- Link to existing project? **N**
- Project name? **redeibelieve** (ou deixe o padrão)
- In which directory is your code? **./build**
- Override settings? **N**

### Passo 4: Deploy para Produção
```bash
vercel --prod
```

### Passo 5: Adicionar Domínio
```bash
vercel domains add redeibelieve.com.br
```

Depois configure DNS na Hostinger (mesmo passo do Método 1)

---

## 📋 Método 3: Deploy via GitHub (AUTOMÁTICO)

### Passo 1: Criar Repositório no GitHub
```bash
# Inicializar Git (se ainda não fez)
git init
git add .
git commit -m "Initial commit"

# Criar repositório no GitHub
# Vá em https://github.com/new
# Crie um repositório chamado "redeibelieve-web"

# Conectar e enviar
git remote add origin https://github.com/SEU_USUARIO/redeibelieve-web.git
git branch -M main
git push -u origin main
```

### Passo 2: Conectar Vercel ao GitHub
1. Na Vercel: **"Add New..."** → **"Project"**
2. Clique em **"Import Git Repository"**
3. Selecione o repositório **redeibelieve-web**
4. Configure:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Clique em **"Deploy"**

### Passo 3: Deploy Automático
Agora, sempre que você fizer um `git push`, o site atualiza automaticamente!

```bash
# Fazer mudanças no código
# Depois:
git add .
git commit -m "Atualizações"
git push
```

---

## 🔧 Configuração do DNS na Hostinger

### Opção A: Usando Name Servers da Vercel (Recomendado)
1. Na Hostinger, vá em **Domínios** → **redeibelieve.com.br**
2. Clique em **"Name Servers"** ou **"Servidores DNS"**
3. Mude para **"Personalizado"** e adicione:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

### Opção B: Usando Registros DNS (Mais rápido)
1. Mantenha os Name Servers da Hostinger
2. Vá em **"DNS Zone"** ou **"Gerenciar DNS"**
3. Adicione:

**Para redeibelieve.com.br:**
```
Tipo: A
Nome: @ (ou deixe vazio)
Conteúdo: 76.76.21.21
TTL: 3600
```

**Para www.redeibelieve.com.br:**
```
Tipo: CNAME
Nome: www
Conteúdo: cname.vercel-dns.com
TTL: 3600
```

4. Delete registros A antigos se houver conflito

---

## ⚙️ Configuração Especial para React Router

A Vercel detecta automaticamente React, mas se precisar, crie:

**vercel.json** (na raiz do projeto):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Depois faça novo deploy:
```bash
vercel --prod
```

---

## ✅ Verificação

Após configurar DNS:
1. Aguarde 10-30 minutos (pode levar até 24h)
2. Acesse: https://redeibelieve.com.br
3. Teste as rotas:
   - https://redeibelieve.com.br/suporte
   - https://redeibelieve.com.br/changelog

---

## 🎯 Vantagens da Vercel vs Hostinger

| Recurso | Vercel | Hostinger |
|---------|--------|-----------|
| Preço | **Grátis** | Pago |
| SSL/HTTPS | ✅ Automático | Manual |
| CDN Global | ✅ Incluído | ❌ |
| Deploy Automático | ✅ Git Push | ❌ Manual |
| Velocidade | ⚡ Ultra-rápido | Médio |
| Otimização React | ✅ Nativa | ❌ |

---

## 🔄 Atualizações Futuras

### Com Vercel CLI:
```bash
npm run build
vercel --prod
```

### Com GitHub (automático):
```bash
git add .
git commit -m "Atualização"
git push
# Site atualiza sozinho! 🎉
```

---

## 🆘 Troubleshooting

### DNS não propaga
- Aguarde até 24h
- Teste em: https://dnschecker.org
- Limpe cache DNS: `ipconfig /flushdns` (Windows)

### Site não carrega
- Verifique build: `npm run build`
- Confirme pasta output: `build/`
- Veja logs na Vercel dashboard

### Rotas 404
- Adicione `vercel.json` com rewrites
- Redeploy: `vercel --prod`

---

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Support**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions

---

**Status**: ✅ Pronto para deploy
**Custo**: 💰 R$ 0,00 (100% grátis)
**Tempo**: ⏱️ 5-10 minutos
