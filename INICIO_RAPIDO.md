# ⚡ Guia Rápido de Início

## 🚀 Começar em 3 Passos

### Passo 1: Upload dos Arquivos
Envie para seu servidor de hospedagem:
```
✅ index.html
✅ style.css
✅ script.js
```

**Pronto! O sistema já funciona!**

---

### Passo 2: Testar Funcionamento
1. Abra o site no navegador
2. Clique em "Adicionar" em um produto
3. Selecione quantidade
4. Clique em "Adicionar ao Carrinho"
5. Veja o número aparecer no carrinho do cabeçalho
6. Clique "🛒 Carrinho" para ver os itens
7. Clique "Finalizar Pedido"
8. Preencha seus dados
9. Clique "Confirmar Pedido"
10. WhatsApp deve abrir com seu pedido 🎉

---

### Passo 3: Google Sheets (Opcional)
Se quiser salvar pedidos automaticamente em uma planilha:

**A. No Google Apps Script:**
1. Vá em [script.google.com](https://script.google.com)
2. Novo Projeto
3. Cole conteúdo de `google-apps-script.js`
4. Salve como "Fred Burguer 2"
5. Clique "Implantar" → "Nova Implantação"
6. Tipo: "Aplicativo Web"
7. Executar como: Seu email
8. Acesso: "Qualquer pessoa"
9. Copie a URL de implantação

**B. Em script.js:**
1. Abra `script.js`
2. Linha 33, substitua:
   ```javascript
   const sheetUrl = 'https://...sua-url-aqui...';
   ```

**Pronto!** Pedidos agora são salvos automaticamente.

---

## 🎯 Customização Básica

### Mudar WhatsApp
Em `script.js`, linha 33:
```javascript
this.whatsappNumber = '55XXXXXXXXXXXX'; // Seu número
```

### Mudar Cores
Em `style.css`, linha 8:
```css
--primary-color: #1095f3; /* Sua cor */
--dark: #1a1a1a; /* Cor escura */
--light: #f8f9fa; /* Cor clara */
```

---

## ✅ Verificação Rápida

| Funcionalidade | Status |
|---|---|
| Adicionar produtos | ✅ |
| Carrinho funciona | ✅ |
| Checkout funciona | ✅ |
| WhatsApp integrado | ✅ |
| Responsivo (mobile) | ✅ |
| localStorage funciona | ✅ |
| Google Sheets (opt) | ✅ |

---

## 📱 Testar em Celular

```
1. Acesse seu site pelo celular
2. Clique em "Adicionar"
3. Modal deve aparecer
4. Preencha quantidade
5. Clique "Adicionar ao Carrinho"
6. Vá para carrinho
7. Finalize pedido
8. WhatsApp deve abrir no celular
```

---

## 🆘 Problemas Comuns

### "Carrinho vazio ao recarregar"
- ✓ Ative localStorage no navegador
- ✓ Limpe cache
- ✓ Tente outro navegador

### "WhatsApp não abre"
- ✓ Verifique número: 55 + DDD + número
- ✓ Sem espaços ou hífens
- ✓ Use navegador desktop para testar

### "Erro ao salvar no Sheets"
- ✓ Copie URL corretamente
- ✓ Verifique se implantou Google Apps Script
- ✓ Veja console do navegador (F12)

---

## 📞 Suporte

Consulte:
- **README.md** - Guia completo
- **RESUMO.md** - Detalhes da implementação
- **Console** - Pressione F12 > Abas > Console para erros

---

## ✨ Pronto!

Seu e-commerce está funcionando! 🎉

Próximos passos:
1. ✅ Testar tudo
2. ✅ Divulgar para clientes
3. ✅ Recolher feedback
4. ✅ Melhorar conforme necessário

**Divirta-se!** 🍔🛒
