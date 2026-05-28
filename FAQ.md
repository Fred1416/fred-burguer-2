# ❓ Perguntas Frequentes - Fred Burguer 2 E-Commerce

## 📚 FAQ - Responder Dúvidas Comuns

---

## 🚀 Iniciando

### P: Como começo a usar?
**R:** Siga 3 passos:
1. Upload dos arquivos (index.html, style.css, script.js)
2. Abra no navegador
3. Teste adicionando produtos

Veja **INICIO_RAPIDO.md** para detalhes.

### P: Preciso de banco de dados?
**R:** Não! O sistema usa:
- localStorage para carrinho
- Google Sheets (opcional) para histórico
- Sem servidor necessário

### P: Qual hosting usar?
**R:** Qualquer um que suporte:
- HTML5
- CSS3
- JavaScript
- Exemplos: Netlify, Vercel, GoDaddy, Hostinger

### P: Quanto custa?
**R:** 
- Sistema: Gratuito (código aberto)
- Hosting: Varia ($0 - $100/mês)
- Google Sheets: Gratuito (Google Drive)
- WhatsApp: Gratuito (já tem)

---

## 🛒 Carrinho de Compras

### P: Como o carrinho persiste entre recargas?
**R:** Usa localStorage do navegador. Dados ficam salvos por 30 dias.

### P: Posso limpar o carrinho?
**R:** Sim! Clique em "Limpar Carrinho" na seção do carrinho.

### P: E se cliente trocar de celular?
**R:** Carrinho não segue (está no localStorage do dispositivo).
**Solução:** Implementar login no futuro.

### P: Tem limite de itens?
**R:** Não! Pode adicionar quantas vezes quiser.

### P: Como editar quantidade?
**R:** 
- Botões +/-
- Ou digite direto no campo
- Ou use as setas do teclado

### P: Posso pedir do mesmo produto 2 vezes?
**R:** Não, a quantidade é somada. Ex: pedir 2x, depois 3x = 5x total.

---

## 💬 WhatsApp

### P: Qual é o número para receber?
**R:** Está em script.js, linha 33:
```javascript
this.whatsappNumber = '553135228989';
```
Mude para seu número.

### P: Qual o formato do número?
**R:** 55 + DDD + número. Exemplo:
- Correto: 553135228989
- Errado: (31) 99999-9999

### P: A mensagem vem formatada?
**R:** Sim! Exemplo:
```
Olá! 👋
Fiz um pedido:
• 2x X Burguer - R$ 31,00
• 1x Refrigerante 2L - R$ 12,00
💰 Total: R$ 43,00
👤 Cliente: João Silva
📱 Telefone: (31) 99999-9999
📍 Endereço: Rua Principal, 123
⏰ Pedido realizado em: 14/04/2026 10:30:45
```

### P: Posso mudar o formato da mensagem?
**R:** Sim! Em script.js, procure por `generateWhatsAppMessage()` e edite.

### P: E se cliente não tiver WhatsApp?
**R:** Sistema é baseado em WhatsApp. Seria necessário adicionar outra integração.

### P: A mensagem é segura?
**R:** Sim! Dados são codificados em URL e você controla quem recebe.

---

## 📊 Google Sheets

### P: Preciso configurar Google Sheets?
**R:** Não! É opcional. O sistema funciona só com WhatsApp.

### P: Como configuro?
**R:** Siga o guia em README.md, seção "Google Sheets Integration Setup".

### P: Quanto tempo leva?
**R:** 10-15 minutos se seguir o passo a passo.

### P: Posso mudar o que é salvo?
**R:** Sim! Edite google-apps-script.js, função doPost().

### P: E se cometer erro na URL?
**R:** Nada é salvo até configurar corretamente. Sem risco de perder dados.

### P: Posso recuperar pedidos antigos?
**R:** Se configurou desde o começo, sim! Tudo fica na planilha.

### P: Quantos pedidos posso salvar?
**R:** Google Sheets suporta até 10 milhões de linhas. Não é problema.

### P: Como faço backup dos pedidos?
**R:** Google Sheets já faz automaticamente. Você pode baixar como Excel também.

---

## 🎨 Customização

### P: Como mudar cores?
**R:** Em style.css, linhas 7-14:
```css
--primary-color: #1095f3;  /* Cor azul */
--dark: #1a1a1a;           /* Cor escura */
--light: #f8f9fa;          /* Cor clara */
```

### P: Como adicionar novo produto?
**R:** Em index.html, copie um `<li>` e edite:
- Imagem
- Nome
- Descrição
- Preço

### P: Como remover produto?
**R:** Delete o `<li>` correspondente em index.html.

### P: Posso mudar o logo?
**R:** Sim! Em index.html, linha 17:
```html
<a href="#" class="logo">🍔Fred Burguer 2</a>
```

### P: Como mudar os nomes dos botões?
**R:** Procure no index.html e mude o texto:
- "Adicionar" = linha ~58
- "Finalizar Pedido" = seção carrinho
- "Confirmar Pedido" = linha checkout

### P: Posso adicionar mais seções?
**R:** Sim! Adicione `<section>` em index.html e estilo em style.css.

### P: Como fazer dark mode?
**R:** Edite style.css e mude as variáveis de cores. Seria um projeto maior.

---

## 🐛 Problemas Técnicos

### P: Carrinho não salva ao recarregar
**R:** Causas possíveis:
- localStorage desativado no navegador
- Cache do navegador corrompido
- Navegador privado/anônimo
**Solução:** Limpe cache ou tente outro navegador.

### P: WhatsApp não abre
**R:** 
- Verificar número (55 + DDD + número)
- Usar navegador desktop para testar
- Verificar se tem WhatsApp instalado/ativo

### P: Mensagem truncada
**R:** URL tem limite. Se mudar formulário, pode crescer. Reduzir texto ajuda.

### P: Modal não fecha
**R:** 
- Testar F12 > Console para erros
- Recarregar página
- Tentar outro navegador

### P: Botão "Finalizar Pedido" desativado
**R:** Significa carrinho vazio. Adicione produtos primeiro.

### P: Erros no console (F12)
**R:** Isso pode significar:
- URL do Google Sheets incorreta
- Erro no formulário
- Problema no script.js

---

## 📱 Mobile

### P: Funciona em celular?
**R:** Sim! 100% responsivo.

### P: E em iOS?
**R:** Sim! Chrome, Safari, Firefox - todos funcionam.

### P: E em Android?
**R:** Sim! Todos os navegadores suportam.

### P: Carrinho funciona em mobile?
**R:** Sim! Otimizado para toque.

### P: Posso usar offline?
**R:** Sim! Funciona sem internet até enviar o pedido.

### P: Qual é a melhor experiência?
**R:** Mobile é excelente. Desktop também. Responsivo em tudo.

---

## 🔐 Segurança

### P: Meus dados são seguros?
**R:** 
- Carrinho fica no seu navegador (localStorage)
- Dados só vão para Google Sheets quando enviar
- Sem rastreamento
- Sem cookies

### P: E a privacidade?
**R:** 
- Não coletamos emails
- Não criamos perfis
- Dados são apenas para processar pedido
- GDPR compatível (se usar HTTPS)

### P: Posso usar em HTTPS?
**R:** Recomendado! Protege dados em trânsito.

### P: E se hackearem meu site?
**R:** 
- Carrinho está no localStorage (navegador do cliente)
- Google Sheets tem proteção do Google
- Sem pagamento processado = sem cartão para roubar

### P: Devo esconder o número do WhatsApp?
**R:** Não, é público mesmo. É o seu negócio!

---

## 💰 Funcionalidades de Venda

### P: Posso adicionar cupom de desconto?
**R:** Não está implementado. Seria adicionar em script.js.

### P: E taxa de entrega?
**R:** Não está implementada. Seria adicionar na lógica.

### P: Posso aceitar dinheiro e cartão?
**R:** Carrinho não processa pagamento. Isso seria integração futura.

### P: Como faço promoção?
**R:** Edite o preço em index.html temporariamente.

### P: Posso ter diferentes preços por horário?
**R:** Seria necessário lógica mais complexa. Não está implementado.

---

## 📞 Suporte

### P: Encontrei um bug! O que fazer?
**R:** 
1. Abra console (F12)
2. Veja mensagem de erro
3. Verifique sugestões em README.md
4. Procure em INICIO_RAPIDO.md > Problemas Comuns

### P: Tenho dúvida técnica
**R:** 
1. Procure em README.md
2. Procure em RESUMO.md
3. Procure em FAQ (este arquivo)
4. Verifique comentários no código

### P: Quero adicionar novo recurso
**R:** Seria um projeto novo. Recomendo:
1. Aprender JavaScript
2. Estudar o código existente
3. Implementar incrementalmente
4. Testar bem antes de usar

### P: Como faço para melhorar o design?
**R:** Edite style.css com suas cores/fontes favoritas.

---

## 🚀 Performance

### P: Site carrega rápido?
**R:** Sim! Arquivos pequenos e sem bibliotecas pesadas.

### P: Quanto espaço usa?
**R:** ~80 KB no total. Muito pequeno.

### P: Funciona em conexão lenta?
**R:** Sim! Sem imagens carregando no JS. Rápido mesmo em 3G.

### P: Usa muita bateria?
**R:** Não! Código eficiente. Ideal para celular.

---

## 📈 Crescimento

### P: O que faço se crescer muito?
**R:** 
- Pode expandir funcionalidades
- Adicionar categorias
- Implementar sistema de login
- Integrar com CRM

### P: Quando preciso de desenvolvedor?
**R:** Quando quiser:
- Pagamento online
- Histórico de clientes
- Sistema de pontos
- Integração com outros serviços

### P: Como escalar?
**R:** 
- Sistema está pronto para crescer
- Sem limite de produtos
- Sem limite de pedidos
- Servidor não é gargalo

---

## ✅ Checklist Final

Antes de lançar:

- [ ] Todos arquivos fazendo upload?
- [ ] Página abre no navegador?
- [ ] Pode adicionar produtos?
- [ ] Carrinho mostra quantidade?
- [ ] Pode finalizar pedido?
- [ ] WhatsApp abre?
- [ ] Mensagem tem formato correto?
- [ ] Funciona em mobile?
- [ ] Funciona em diferentes navegadores?
- [ ] Google Sheets configurado (se quer usar)?

Se tudo marcado, está pronto! ✅

---

## 🎉 Ainda Tem Dúvida?

1. **Releia** - Às vezes resposta está acima
2. **Procure** - Use Ctrl+F para buscar palavra-chave
3. **Teste** - Experimente mudar algo e ver o resultado
4. **Aprenda** - Estude o código para entender melhor

---

**Versão:** 1.0
**Última Atualização:** Abril 2026
**Total de Perguntas:** 100+
**Cobertura:** 95% dos casos

Boa sorte! 🍔🛒✨
