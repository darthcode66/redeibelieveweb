# 🚀 Configuração de Ambiente de Staging (dev-redeibelieve.com.br)

## 📋 Estratégia: Git Branches com Deploy Automático

- **Branch `main`** → **redeibelieve.com.br** (Produção)
- **Branch `dev`** → **dev-redeibelieve.com.br** (Staging/Testes)

---

## ✅ Status Atual

- ✅ Branch `dev` criada localmente
- ✅ Seção de preços implementada (pronta para commit)
- ⏳ Aguardando criação do repositório `redeibelieveweb` no GitHub

---

## 📝 PASSO A PASSO COMPLETO

### **ETAPA 1: Criar Repositório no GitHub**

1. Acesse: https://github.com/new
2. Nome do repositório: **`redeibelieveweb`**
3. Descrição: "Landing page do Rede I Believe - React"
4. Visibilidade: **Private** (recomendado) ou Public
5. **NÃO** marque nenhuma opção de inicializar (README, .gitignore, license)
6. Clique em **"Create repository"**

---

### **ETAPA 2: Conectar Repositório Local ao GitHub**

No terminal (Git Bash ou PowerShell), execute:

```bash
cd C:\Users\pedro\Documentos\ProjetosdoAndre\redeibelieveweb

# Verificar que estamos na branch dev
git branch
# Deve mostrar: * dev

# Voltar para master e renomear para main
git checkout master
git branch -m main

# Adicionar remote do GitHub (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/redeibelieveweb.git

# Verificar remote
git remote -v
# Deve mostrar:
# origin  https://github.com/SEU_USUARIO/redeibelieveweb.git (fetch)
# origin  https://github.com/SEU_USUARIO/redeibelieveweb.git (push)
```

---

### **ETAPA 3: Preparar Arquivos para Commit**

```bash
# Adicionar .gitignore se não existir
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Vercel
.vercel

# Temp files
*.tar.gz
*.zip
__MACOSX/
EOF

# Adicionar arquivos da branch main
git add .
git status
# Verificar que os arquivos corretos estão staged

# Commit inicial da branch main
git commit -m "Initial commit: React landing page with pricing section

- Setup Create React App structure
- Add Home, Changelog, and Support pages
- Implement pricing section with 3 tiers (Free, Pro, Business)
- Add interactive annual/monthly billing toggle
- Add FAQ section for pricing
- Configure Bootstrap and custom CSS
- Add Vercel deployment configuration"
```

---

### **ETAPA 4: Push da Branch Main**

```bash
# Push branch main para GitHub
git push -u origin main
```

---

### **ETAPA 5: Commit e Push da Branch Dev**

```bash
# Ir para branch dev
git checkout dev

# Verificar status (deve mostrar as mudanças de pricing)
git status

# Adicionar as mudanças de pricing
git add src/App.css src/Home.js

# Commit da branch dev
git commit -m "Add interactive pricing section with staging setup

Features:
- Pricing cards for Free, Pro, and Business plans
- Monthly/Annual billing toggle with dynamic pricing
- Savings calculator (17% discount on annual)
- FAQ section with 8 common questions
- Updated hero section CTAs
- Added 'Preços' link to navbar

Pricing Strategy:
- Freemium model (always free tier)
- Pro plan: R$ 149/month or R$ 1,490/year
- Business plan: R$ 499/month or R$ 4,990/year
- À la carte options for featured offers"

# Push branch dev para GitHub
git push -u origin dev
```

---

### **ETAPA 6: Conectar Vercel ao GitHub**

1. Acesse: https://vercel.com/dashboard
2. Clique em **"Add New..."** → **"Project"**
3. Clique em **"Import Git Repository"**
4. Selecione o repositório **`redeibelieveweb`**
5. Configure o projeto:
   - **Framework Preset**: Create React App
   - **Root Directory**: `./` (deixe vazio)
   - **Build Command**: `npm run build` (já detectado)
   - **Output Directory**: `build` (já detectado)
   - **Install Command**: `npm install` (já detectado)
6. Clique em **"Deploy"**

**Aguarde o primeiro deploy (~2 minutos)**

Vercel vai criar automaticamente:
- ✅ Deploy de produção da branch `main`
- ✅ Preview deploy da branch `dev`

---

### **ETAPA 7: Configurar Domínios no Vercel**

#### **7.1 - Domínio de Produção (já deve estar configurado)**

No Vercel Dashboard → Seu Projeto → **Settings** → **Domains**:

1. Se já tiver `redeibelieve.com.br` configurado, pule esta etapa
2. Senão, clique em **"Add Domain"**
3. Digite: `redeibelieve.com.br`
4. Clique em **"Add"**
5. Configure o DNS (veja seção **DNS da Hostinger** abaixo)

#### **7.2 - Domínio de Staging (novo)**

No Vercel Dashboard → Seu Projeto → **Settings** → **Domains**:

1. Clique em **"Add Domain"**
2. Digite: `dev-redeibelieve.com.br`
3. Em **"Git Branch"**, selecione: `dev`
4. Clique em **"Add"**

Vercel vai mostrar as instruções de DNS.

---

### **ETAPA 8: Configurar DNS na Hostinger**

#### **Para dev-redeibelieve.com.br (Staging)**

1. Acesse: https://hpanel.hostinger.com
2. Vá em **"Domínios"** → Clique em **`redeibelieve.com.br`**
3. Clique em **"DNS / Gerenciar DNS"**
4. Clique em **"Adicionar Registro"**

**Adicione o registro CNAME:**

```
Tipo: CNAME
Nome: dev
Conteúdo: cname.vercel-dns.com
TTL: 3600 (ou Automático)
```

5. Clique em **"Adicionar Registro"**
6. Aguarde propagação (5-30 minutos, pode levar até 24h)

#### **Verificar DNS:**

Teste em: https://dnschecker.org

Digite: `dev-redeibelieve.com.br`

Deve mostrar: `cname.vercel-dns.com`

---

## 🔄 WORKFLOW DE DESENVOLVIMENTO (Após Setup)

### **Desenvolver Nova Feature (em Staging)**

```bash
# Ir para branch dev
git checkout dev

# Fazer mudanças no código
# ... editar arquivos ...

# Commit e push
git add .
git commit -m "Descrição da feature"
git push origin dev

# 🚀 Deploy automático em dev-redeibelieve.com.br
# Acesse https://dev-redeibelieve.com.br para testar
```

### **Promover para Produção (após testes)**

```bash
# Ir para branch main
git checkout main

# Merge da branch dev
git merge dev

# Push para produção
git push origin main

# 🚀 Deploy automático em redeibelieve.com.br
```

### **Reverter Mudanças (se algo der errado)**

```bash
# Na branch main
git checkout main
git revert HEAD  # Reverte último commit
git push origin main

# Ou voltar para commit específico
git log  # Ver commits
git reset --hard COMMIT_ID
git push origin main --force  # ⚠️ Cuidado com --force
```

---

## 📊 ESTRUTURA DAS BRANCHES

```
main (produção)
├── redeibelieve.com.br
└── Auto-deploy on push

dev (staging)
├── dev-redeibelieve.com.br
├── Auto-deploy on push
└── Merge to main quando aprovado
```

---

## 🎯 VANTAGENS DESTE SETUP

✅ **Deploy Automático**: Push = Deploy (sem comandos manuais)
✅ **Preview URLs**: Cada commit tem URL única para testar
✅ **Rollback Fácil**: Reverter via Git se algo quebrar
✅ **DNS Separado**: Staging não afeta produção
✅ **Zero Downtime**: Vercel cuida de tudo
✅ **Grátis**: Vercel Free Tier suporta tudo isso

---

## 🔍 MONITORAMENTO

### **Ver Deployments no Vercel:**

1. Acesse: https://vercel.com/dashboard
2. Clique no projeto `redeibelieveweb`
3. Veja lista de deployments:
   - **Production**: Deploys da branch `main`
   - **Preview**: Deploys da branch `dev` e outras

### **Ver Logs de Build:**

Clique em qualquer deployment → **"View Build Logs"**

### **Verificar Status:**

- Produção: https://redeibelieve.com.br
- Staging: https://dev-redeibelieve.com.br
- Vercel Status: https://vercel-status.com

---

## 🆘 TROUBLESHOOTING

### **DNS não propaga**
```bash
# Windows: Limpar cache DNS
ipconfig /flushdns

# Testar DNS
nslookup dev-redeibelieve.com.br
# Deve retornar: cname.vercel-dns.com
```

### **Deploy falha**
1. Ver logs no Vercel Dashboard
2. Verificar `package.json` (scripts de build)
3. Testar build local: `npm run build`

### **Branches dessincronizadas**
```bash
# Atualizar dev com main
git checkout dev
git merge main
git push origin dev
```

### **Conflito de merge**
```bash
# Resolver conflitos manualmente
git status  # Ver arquivos em conflito
# Editar arquivos, remover marcadores <<<< ==== >>>>
git add .
git commit -m "Resolve merge conflict"
```

---

## 📚 COMANDOS ÚTEIS

```bash
# Ver todas as branches
git branch -a

# Ver último commit de cada branch
git log --oneline --graph --all -10

# Comparar branches
git diff main..dev

# Ver arquivos modificados
git status

# Descartar mudanças locais
git restore .

# Criar nova branch de feature
git checkout -b feature/nova-funcionalidade

# Deletar branch local
git branch -d nome-da-branch

# Deletar branch remota
git push origin --delete nome-da-branch
```

---

## 🎉 CHECKLIST DE SETUP

- [ ] Criar repositório `redeibelieveweb` no GitHub
- [ ] Conectar repositório local ao GitHub (`git remote add origin`)
- [ ] Push da branch `main`
- [ ] Push da branch `dev`
- [ ] Conectar Vercel ao repositório GitHub
- [ ] Adicionar domínio `dev-redeibelieve.com.br` no Vercel
- [ ] Configurar DNS CNAME na Hostinger
- [ ] Aguardar propagação DNS (5-30 min)
- [ ] Testar acesso a `dev-redeibelieve.com.br`
- [ ] Testar workflow: commit em dev → deploy automático
- [ ] Testar merge: dev → main → deploy em produção

---

## 📞 PRÓXIMOS PASSOS

Após setup completo:

1. **Documentar fluxo** no README.md
2. **Configurar GitHub Actions** (CI/CD avançado - opcional)
3. **Setup de testes** antes de deploy (opcional)
4. **Notificações** de deploy (Slack/Discord - opcional)

---

**Status**: ⏳ Aguardando criação do repositório no GitHub
**Autor**: Claude Code
**Data**: 2025-11-03
