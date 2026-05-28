# Fred Burguer 2 - Guia de Implementação do E-Commerce

## 📋 Visão Geral
Sistema de e-commerce completo para a hamburgueria Fred Burguer 2 com:
- Carrinho de compras com modal de seleção de produtos
- Formulário de coleta de dados do cliente
- Processamento de pedidos via WhatsApp
- Persistência de dados em Google Sheets

## 📁 Estrutura de Arquivos

### Arquivos Frontend (HTML, CSS, JavaScript)
- **index.html** - Website principal com seção de carrinho, modais e formulário
- **style.css** - Estilo responsivo para todos os componentes
- **script.js** - Lógica completa do carrinho de compras e sistema de checkout

### Integração Backend
- **google-apps-script.js** - Google Apps Script para integração com Sheets

## 🚀 Como Usar

### 1. Configuração Básica
1. Envie todos os arquivos para seu hosting (index.html, style.css, script.js)
2. Certifique-se de que script.js está no mesmo diretório que index.html
3. Teste a funcionalidade do frontend

### 2. Configuração da Integração com Google Sheets

#### Passo 1: Criar Google Apps Script
1. Acesse [script.google.com](https://script.google.com)
2. Clique em "Novo Projeto"
3. Copie todo o conteúdo do arquivo `google-apps-script.js`
4. Cole no editor do Apps Script
5. Salve o projeto (nomeie como "Fred Burguer 2 Pedidos")

#### Passo 2: Criar Google Sheets
1. Acesse [sheets.google.com](https://sheets.google.com)
2. Crie uma nova planilha em branco
3. Nomeie como "Fred Burguer 2 Pedidos"
4. Volte ao seu Google Apps Script
5. Clique em "Configurações do Projeto" (ícone de engrenagem)
6. Copie o "ID do Script"
7. Em sua Planilha Google, vá em Extensões > Apps Script
8. Cole o ID do script ou vincule-os manualmente

#### Passo 3: Implantar como Web App
1. No Google Apps Script, clique em "Implantar" → "Nova Implantação"
2. Selecione tipo: "Aplicativo Web"
3. Executar como: **Seu endereço de email**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique em "Implantar"
6. Copie a URL de implantação

#### Passo 4: Conectar ao Frontend
1. Abra `script.js`
2. Encontre a linha: `const sheetUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Substitua pela sua URL de implantação real:
   ```javascript
   const sheetUrl = 'https://script.google.com/macros/d/SEU_ID_DO_SCRIPT/userweb/do?id=SEU_ID_DE_IMPLANTACAO';
   ```

### 3. Recursos e Funcionalidades

#### Gerenciamento de Produtos
- Clique em "Adicionar" em qualquer produto para abrir o modal
- Selecione a quantidade no modal
- Clique em "Adicionar ao Carrinho" para adicionar o produto
- Nome do produto, preço e quantidade são extraídos do HTML

#### Carrinho de Compras
- Visualize todos os produtos selecionados com quantidades e totais
- Ajuste quantidades com botões +/- ou digitando no campo
- Remova produtos com o botão "Remover"
- Limpe todo o carrinho com "Limpar Carrinho"
- O carrinho é armazenado no localStorage do navegador
- Badge do carrinho mostra a quantidade de itens no cabeçalho

#### Processo de Checkout
1. Clique no botão "Finalizar Pedido" na seção do carrinho
2. Preencha as informações do cliente:
   - Nome Completo
   - Telefone/WhatsApp
   - Endereço de Entrega
3. Clique em "Confirmar Pedido"
4. O sistema irá:
   - Salvar o pedido em Google Sheets (se configurado)
   - Gerar mensagem formatada do WhatsApp
   - Abrir WhatsApp Web com a mensagem pré-preenchida
   - Limpar o carrinho

#### Formato da Mensagem do Pedido
A mensagem do WhatsApp inclui:
- Lista de produtos itemizada com quantidades e preços
- Valor total do pedido
- Nome, telefone e endereço do cliente
- Data e hora do pedido

## 🔧 Detalhes Técnicos

### Local Storage
- Dados do carrinho são salvos em localStorage como 'fred_burguer_2_cart'
- Persiste entre sessões do navegador
- Formato JSON para manipulação fácil

### Dados Enviados para Google Sheets
```json
{
  "timestamp": "14/04/2026 10:30:45",
  "customerName": "João Silva",
  "customerPhone": "(31) 99999-9999",
  "customerAddress": "Rua Principal, 123, Belo Horizonte",
  "products": [
    { "name": "X Burguer", "price": 15.50, "quantity": 2 },
    { "name": "Refrigerante 2L", "price": 12.00, "quantity": 1 }
  ],
  "total": "39.00"
```

### Colunas do Google Sheets
1. **Timestamp** - Data e hora do pedido (formato PT-BR)
2. **Nome do Cliente** - Nome completo do cliente
3. **Telefone** - Número do WhatsApp
4. **Endereço** - Endereço de entrega
5. **Produtos** - Nomes dos produtos separados por pipe (|)
6. **Quantidades** - Quantidades separadas por pipe (|)
7. **Preços** - Preços unitários separados por pipe (|)
8. **Total** - Total do pedido em R$
9. **ID do Pedido** - Identificador único do pedido (ORD-timestamp)

## 🎨 Personalização

### Mudar Número do WhatsApp
Edite o número do WhatsApp em `script.js`:
```javascript
this.whatsappNumber = '553135228989'; // Substitua pelo seu número
```

### Modificar Informações do Produto
Os produtos são extraídos dinamicamente do HTML:
- Nome do produto: Da tag `<h3>`
- Preço: Da tag `<strong>` (primeira no card)
- Descrição: Da tag `<p>` (primeira no card)

### Atualizar Estilo
- Cores: Edite as variáveis CSS na seção `:root` de `style.css`
- Cor primária: `--primary-color: #1095f3`
- Cor escura: `--dark: #1a1a1a`
- Fundo claro: `--light: #f8f9fa`

## 🐛 Solução de Problemas

### Carrinho não salva em Sheets
- Verifique se a URL do Google Apps Script está correta em script.js
- Verifique o console do navegador (F12) para mensagens de erro
- Certifique-se de que Google Apps Script está implantado como "Qualquer pessoa" pode acessar
- Verifique permissões da Planilha Google

### Mensagem do WhatsApp não abre
- Verifique se o formato do número do WhatsApp está correto (código do país + número, sem espaços/hífens)
- A mensagem é codificada em URL, caracteres especiais são tratados automaticamente
- Teste com uma mensagem simples primeiro

### Carrinho não persiste
- Verifique se localStorage está ativado no navegador
- Tente limpar o cache do navegador e recarregue
- Verifique o console do navegador para erros de cota de armazenamento

### Modal não fecha
- Verifique se todos os botões modal-close têm a classe correta
- Verifique se há erros JavaScript no console (F12)

## 💻 Compatibilidade de Navegadores
- Chrome/Edge: ✅ Totalmente suportado
- Firefox: ✅ Totalmente suportado
- Safari: ✅ Totalmente suportado
- Navegadores móveis: ✅ Design responsivo incluído

## 🔒 Notas de Segurança
- Dados do cliente são enviados para Google Sheets apenas quando submetem checkout
- Números do WhatsApp não são armazenados em nenhum lugar
- Nenhuma informação de pagamento sensível é coletada
- Use HTTPS para implantação em produção

## 📱 Como Usar o Sistema

### Para o Cliente:
1. Acesse o site
2. Clique em "Adicionar" em um produto que deseja
3. Selecione a quantidade na janela que aparecer
4. Clique em "Adicionar ao Carrinho"
5. Repita para mais produtos
6. Clique no link "🛒 Carrinho" no cabeçalho
7. Clique em "Finalizar Pedido"
8. Preencha seus dados (nome, telefone, endereço)
9. Clique em "Confirmar Pedido"
10. WhatsApp abre com seu pedido formatado pronto para enviar

### Para a Loja (Receber Pedidos):
- Os pedidos chegam via WhatsApp (como era antes)
- Opcionalmente: configure Google Sheets para registrar automaticamente
- Acompanhe todos os pedidos em uma planilha

## 📊 Exemplo de Mensagem Enviada para WhatsApp

```
Olá! 👋

Fiz um pedido:

• 2x X Burguer - R$ 31,00
• 1x Refrigerante 2L - R$ 12,00

💰 Total: R$ 43,00
👤 Cliente: João Silva
📱 Telefone: (31) 99999-9999
📍 Endereço: Rua Principal, 123, Belo Horizonte

⏰ Pedido realizado em: 14/04/2026 10:30:45
```

## ✨ O Que Funciona Pronto para Usar

- ✅ Adicionar produtos ao carrinho
- ✅ Visualizar carrinho com totais
- ✅ Ajustar quantidades
- ✅ Remover itens
- ✅ Preencher formulário de checkout
- ✅ Gerar mensagem do WhatsApp
- ✅ Abrir WhatsApp com detalhes do pedido
- ✅ Carrinho persiste (localStorage)
- ✅ Responsivo em mobile
- ✅ Notificações toast

## 📋 Lista de Verificação de Testes

Você pode verificar a funcionalidade:
1. Clique em "Adicionar" em qualquer produto → Modal abre ✓
2. Selecione quantidade → Adicione ao carrinho ✓
3. Veja o badge do carrinho atualizar ✓
4. Clique no link do carrinho → Veja a seção do carrinho ✓
5. Ajuste quantidades → Totais atualizam ✓
6. Remova item → Carrinho atualiza ✓
7. Clique em "Finalizar Pedido" → Formulário de checkout abre ✓
8. Preencha formulário → Envie → WhatsApp abre com mensagem ✓
9. Recarregue página → Itens do carrinho ainda lá ✓

## 🚀 Melhorias Futuras
- Adicionar categorias/filtros de produtos
- Implementar integração com gateway de pagamento
- Adicionar histórico de pedidos para clientes
- Criar painel de administração
- Adicionar notificações por email
- Implementar rastreamento de entrega

## 📞 Suporte
Para dúvidas ou problemas:
1. Verifique a seção de solução de problemas acima
2. Revise o console do navegador (F12) para mensagens de erro
3. Verifique se todos os arquivos estão no local correto
4. Certifique-se de que Google Apps Script está implantado corretamente

---

**Última Atualização:** Abril 2026
**Versão:** 1.0
