// ===== SHOPPING CART SYSTEM =====
// This script handles the complete e-commerce functionality:
// - Product management and modal interactions
// - Shopping cart operations (add, remove, update)
// - localStorage persistence
// - Checkout form and order processing
// - WhatsApp message generation
// - Google Sheets integration

// ===== CART STATE MANAGEMENT =====

const produtosCardapio = [
    { nome: "Misto Quente", descricao: "Pão, 2 queijos derretidos, 2 presuntos e maionese.", preco: 8.50, imagem: "https://media.istockphoto.com/id/155388694/pt/foto/sanduíches-em-pão-de-queijo-prensado.webp?a=1&b=1&s=612x612&w=0&k=20&c=45UlUjqiBl6w31YiWjG1lWspRtip7F8bW1aAC-ROlnY=", badge: null },
    { nome: "Mistão", descricao: "Pão, ovo, queijo derretido, presunto, batata palha e maionese.", preco: 10.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97b90dace64001ccb4983-1695151121348blob_600.webp", badge: null },
    { nome: "X Egg Burguer", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, ovo, alface, tomate, milho, batata palha e maionese.", preco: 12.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97c54949be4001bc7fc2d-1695151165558blob_600.webp", badge: null },
    { nome: "Big Burguer", descricao: "Pão de hambúrguer, 2 carnes de hambúrguer, queijo derretido, alface, tomate, milho, batata palha e maionese.", preco: 13.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97eda949be4001bc8139f-1695151221105blob_600.webp", badge: null },
    { nome: "X Egg Frango", descricao: "Pão de hambúrguer, frango desfiado, queijo derretido, ovo, alface, tomate, batata palha e maionese.", preco: 13.00, imagem: "https://imagens.jotaja.com/produtos/4427/3F7F4189A16963ABB49593EB3D30A74DE778A0ACE8BFA9314993564BA0B8C01B.jpeg", badge: null },
    { nome: "Ki-Kó-Kó Bacon", descricao: "Pão de hambúrguer, frango desfiado, bacon, queijo derretido, alface, tomate, batata palha.", preco: 14.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98880949be4001bc87527-1689969537928blob_600.webp", badge: null },
    { nome: "X Bacon", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, bacon, alface, tomate, batata palha e maionese.", preco: 14.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b989592a96bd0027042fcd-1689969592014blob_600.webp", badge: null },
    { nome: "Califórnia", descricao: "Pão de hambúrguer, carne de hambúrguer, presunto, ovo, bacon, abacaxi, alface, tomate, batata palha e maionese.", preco: 15.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b989f2949be4001bc89c2f-1695151285607blob_600.webp", badge: null },
    { nome: "Laçador", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, presunto, bacon, alface, tomate, batata palha, maionese e milho.", preco: 16.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxyUFUOHCgooeDcP2PYZumQ1BEa-0qAOCjcw&s", badge: null },
    { nome: "Havaiano", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, presunto, ovo, bacon, banana, alface, tomate, batata palha e maionese.", preco: 16.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98b30949be4001bc8b8be-1689969660149blob_600.webp", badge: null },
    { nome: "Framburguer", descricao: "Pão de hambúrguer, frango desfiado, queijo derretido, bacon, ovo, alface, tomate, milho, batata palha e maionese.", preco: 16.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98c3fdace64001ccc3100-1695151303050blob_600.webp", badge: null },
    { nome: "X Tudo", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, presunto, ovo, bacon, frango desfiado, alface, tomate, abacaxi, milho, batata palha e maionese.", preco: 20.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98cfa949be4001bc8daa7-1689969725675blob_600.webp", badge: null },
    { nome: "Fred Burguer 2", descricao: "Pão de hambúrguer, 2 carnes de hambúrguer, catupiry, bife de lombo, queijo derretido, presunto, ovo, bacon, frango desfiado, alface, tomate, abacaxi, milho, batata palha e maionese.", preco: 26.00, imagem: "https://static.expressodelivery.com.br/imagens/produtos/135309/180/Expresso-Delivery_0779b433dc6615174b090719afe46127.png", badge: "Mais vendido" },
    { nome: "Hambúrguer", descricao: "Pão de hambúrguer, carne de hambúrguer, alface, tomate em rodelas, batata palha e maionese.", preco: 8.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97b3c949be4001bc7f735-1690205377246blob_600.webp", badge: null },
    { nome: "Egg Burguer", descricao: "Pão de hambúrguer, carne de hambúrguer, ovo, alface, tomate, milho, batata palha e maionese.", preco: 10.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97c0edace64001ccb4d81-1695151151640blob_600.webp", badge: null },
    { nome: "X Salada", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, presunto, milho, batata palha, alface, tomate e maionese.", preco: 11.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97d67949be4001bc80865-1690205252015blob_600.webp", badge: null },
    { nome: "Vegetariano", descricao: "Pão de hambúrguer, catupiry, 2 fatias de queijo derretido, ovo, alface, tomate, abacaxi, milho, batata palha e maionese.", preco: 12.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b97e80dace64001ccb791d-1695151196755blob_600.webp", badge: null },
    { nome: "X Egg Especial", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, presunto, ovo, milho, batata palha, alface, tomate e maionese.", preco: 8.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxyUFUOHCgooeDcP2PYZumQ1BEa-0qAOCjcw&s", badge: null },
    { nome: "Ki-Kó-Kó Catupiry", descricao: "Pão de hambúrguer, frango desfiado, catupiry, milho, batata palha, alface, tomate e maionese.", preco: 13.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98808dace64001ccbf7de-1690205269649blob_600.webp", badge: null },
    { nome: "Rokókó Cheddar", descricao: "Pão de hambúrguer, frango desfiado, bacon, cheddar, alface, tomate, batata palha e maionese.", preco: 14.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b989088513cc0027a93af8-1695151257523blob_600.webp", badge: null },
    { nome: "X Egg Bacon", descricao: "Pão de hambúrguer, carne hambúrguer, queijo derretido, bacon, ovo, alface, tomate, batata palha e maionese.", preco: 15.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b989a0dace64001ccc0c96-1689969573681blob_600.webp", badge: null },
    { nome: "X Lombo", descricao: "Pão de hambúrguer, bife de lombo, queijo derretido, bacon, ovo, alface, tomate, batata palha e maionese.", preco: 16.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98a39dace64001ccc0fae-1689969613517blob_600.webp", badge: null },
    { nome: "Americano", descricao: "Pão de hambúrguer, carne de hambúrguer, queijo derretido, bacon, ovo, catupiry, alface, tomate, batata palha e maionese.", preco: 16.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98ae28513cc0027a94e35-1689969630955blob_600.webp", badge: null },
    { nome: "Big Cheddar", descricao: "Pão de hambúrguer, 2 carnes de hambúrguer, bacon, cheddar, alface, tomate, batata palha e maionese.", preco: 16.50, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98bfe949be4001bc8bf34-1689969680895blob_600.webp", badge: null },
    { nome: "Duplo Cheddar", descricao: "Pão de hambúrguer, carne de hambúrguer, bacon, ovo, duplo cheddar, alface, tomate, batata palha, milho e maionese.", preco: 18.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98c84dace64001ccc3a5f-1689969702575blob_600.webp", badge: null },
    { nome: "X Tudo Especial", descricao: "Pão de hambúrguer, carne de hambúrguer, bife de lombo, queijo derretido, presunto, ovo, bacon, frango desfiado, alface, tomate, abacaxi, milho, batata palha e maionese.", preco: 23.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98d9b949be4001bc8e94e-1690205296464blob_600.webp", badge: "Mais vendido" },
    { nome: "Fred Burguer 2 Especial", descricao: "Pão de hambúrguer, 2 carnes de hambúrguer, 2 bifes de lombo, queijo derretido, presunto, ovo, bacon, frango desfiado, catupiry, batata palha, milho, alface, tomate, abacaxi e maionese.", preco: 28.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b979ef8513cc0027a89611/64b98e84dace64001ccc9109-1690205322414blob_600.webp", badge: "Novidade" },
    { nome: "Água Mineral", descricao: "Com Gás e Sem Gás.", preco: 3.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b7efacd6547f0019e85296/64b933c6949be4001bc4c169-1690209366633blob_600.webp", badge: null },
    { nome: "Refrigerante 600ml", descricao: "Sabores: Coca Cola e Fanta.", preco: 6.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b7efacd6547f0019e85296/64b7efacd6547f0019e8529a-1690219068401blob_600.webp", badge: null },
    { nome: "Refrigerante 2L", descricao: "Sabores: Mate Couro, Sukita, Guaraná, Pepsi, Coca Cola, Fanta e Guarapan.", preco: 12.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b7efacd6547f0019e85296/64b973af3355d70027ca3e6d-1690209396237blob_600.webp", badge: null },
    { nome: "Suco Tial 330ml", descricao: "Sabores: Uva, Goiaba e Manga.", preco: 8.00, imagem: "https://client-assets.anota.ai/produtos/64b7efab04bb6d0012da889b/64b7efacd6547f0019e85296/64beabca0fc3be001c86e4b6-1690219017557blob_600.webp", badge: null }
];

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.whatsappNumber = '5531971364558';
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('fred_burguer_2_cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('fred_burguer_2_cart', JSON.stringify(this.items));
        this.updateCartUI();
    }

    // Add product to cart
    addProduct(name, price, quantity) {
        const existingItem = this.items.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ name, price: parseFloat(price), quantity });
        }
        
        this.saveCart();
    }

    // Remove product from cart
    removeProduct(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.saveCart();
    }

    // Update product quantity
    updateQuantity(name, quantity) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            if (quantity <= 0) {
                this.removeProduct(name);
            } else {
                item.quantity = quantity;
                this.saveCart();
            }
        }
    }

    // Calculate total
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Get item count
    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    // Clear cart
    clearCart() {
        this.items = [];
        this.saveCart();
    }

    // Update cart UI (badge and display)
    updateCartUI() {
        const cartBadge = document.getElementById('cart-badge');
        const count = this.getItemCount();
        
        if (cartBadge) {
            if (count > 0) {
                cartBadge.textContent = count;
                cartBadge.style.display = 'flex';
            } else {
                cartBadge.style.display = 'none';
            }
        }

        this.renderCartItems();
    }

    // Render cart items in cart display
    renderCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
            document.getElementById('cart-total').innerHTML = '<strong>Total: R$ 0,00</strong>';
            document.getElementById('checkout-btn').disabled = true;
            return;
        }

        let html = '';
        this.items.forEach(item => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>R$ ${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity - 1})">−</button>
                        <input type="number" value="${item.quantity}" min="1" onchange="cart.updateQuantity('${item.name}', parseInt(this.value))" class="qty-input">
                        <button class="qty-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
                    </div>
                    <div class="cart-item-total">
                        <p>R$ ${itemTotal}</p>
                        <button class="remove-btn" onclick="cart.removeProduct('${item.name}')">Remover</button>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        
        const total = this.getTotal().toFixed(2);
        document.getElementById('cart-total').innerHTML = `<strong>Total: R$ ${total}</strong>`;
        document.getElementById('checkout-btn').disabled = false;
    }

    // Generate formatted WhatsApp message
    generateWhatsAppMessage(customerName, customerPhone, customerAddress) {
        if (this.items.length === 0) return '';

        let message = `Olá! 👋\n\nFiz um pedido:\n\n`;
        
        // Add products
        this.items.forEach(item => {
            message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += `\n💰 Total: R$ ${this.getTotal().toFixed(2)}\n`;
        message += `👤 Cliente: ${customerName}\n`;
        message += `📱 Telefone: ${customerPhone}\n`;
        message += `📍 Endereço: ${customerAddress}\n`;
        message += `\n⏰ Pedido realizado em: ${new Date().toLocaleString('pt-BR')}`;

        return message;
    }

    // Send to WhatsApp
    sendToWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
}

// ===== MODAL MANAGEMENT =====
class ProductModal {
    constructor() {
        this.currentProduct = null;
    }

    // Open modal with product details
    open(productName, productPrice, productDescription) {
        this.currentProduct = { name: productName, price: productPrice, description: productDescription };
        
        const modal = document.getElementById('product-modal');
        const title = modal.querySelector('.modal-title');
        const desc = modal.querySelector('.modal-description');
        const price = modal.querySelector('.modal-price');
        
        title.textContent = productName;
        desc.textContent = productDescription;
        price.textContent = `R$ ${productPrice}`;
        
        // Reset quantity input
        document.getElementById('modal-quantity').value = 1;
        
        modal.style.display = 'flex';
    }

    // Close modal
    close() {
        const modal = document.getElementById('product-modal');
        modal.style.display = 'none';
        this.currentProduct = null;
    }

    // Add to cart from modal
    addToCart() {
        if (!this.currentProduct) return;
        
        const quantity = parseInt(document.getElementById('modal-quantity').value) || 1;
        cart.addProduct(this.currentProduct.name, this.currentProduct.price, quantity);
        
        // Show feedback
        this.showAddedFeedback();
        this.close();
    }

    // Show "added to cart" feedback
    showAddedFeedback() {
        const feedback = document.createElement('div');
        feedback.className = 'added-feedback';
        feedback.textContent = '✓ Adicionado ao carrinho!';
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 2000);
    }
}

// ===== CHECKOUT MANAGEMENT =====
class CheckoutForm {
    constructor() {
        this.formData = {};
    }

    // Open checkout
    open() {
        // Update checkout summary
        document.getElementById('checkout-item-count').textContent = cart.getItemCount();
        document.getElementById('checkout-total').textContent = `R$ ${cart.getTotal().toFixed(2)}`;
        
        const checkoutModal = document.getElementById('checkout-modal');
        checkoutModal.style.display = 'flex';
    }

    // Close checkout
    close() {
        const checkoutModal = document.getElementById('checkout-modal');
        checkoutModal.style.display = 'none';
    }

    // Validate and submit checkout
    submit() {
        const name = document.getElementById('checkout-name').value.trim();
        const phone = document.getElementById('checkout-phone').value.trim();
        const address = document.getElementById('checkout-address').value.trim();

        if (!name || !phone || !address) {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (cart.items.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }

        this.formData = { name, phone, address };
        this.processCheckout();
    }

    // Process checkout: save to Sheets and send to WhatsApp
    async processCheckout() {
        const { name, phone, address } = this.formData;
        const message = cart.generateWhatsAppMessage(name, phone, address);

        // Send to Google Sheets
        await this.sendToGoogleSheets(name, phone, address);

        // Send to WhatsApp
        cart.sendToWhatsApp(message);

        // Clear cart and close modals
        cart.clearCart();
        this.close();
        document.getElementById('product-modal').style.display = 'none';
        
        // Clear form
        document.getElementById('checkout-form').reset();
        
        alert('Pedido enviado com sucesso! 🎉');
    }

    // Send order data to Google Sheets via Google Apps Script
    async sendToGoogleSheets(name, phone, address) {
        const sheetUrl = 'https://script.google.com/macros/s/AKfycbzMAgtLsApOFqUYmZ-Pwv-SrhflUd4Sx_i7hKDR0PlL_b3-VnkKIdjb7eU5l460Ja6t/exec';
        
        if (sheetUrl === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
            console.warn('Google Apps Script URL not configured. Order not saved to Sheets.');
            return;
        }

        const orderData = {
            timestamp: new Date().toLocaleString('pt-BR'),
            customerName: name,
            customerPhone: phone,
            customerAddress: address,
            products: cart.items,
            total: cart.getTotal().toFixed(2)
        };

        try {
            const response = await fetch(sheetUrl, {
                method: 'POST',
                mode: 'no-cors', // Magia do bypass de segurança do Google!
                body: JSON.stringify(orderData)
            });
            console.log('Order saved to Google Sheets:', response.status);
        } catch (error) {
            console.error('Error sending to Google Sheets:', error);
        }
    }
}

// ===== INITIALIZATION =====
let cart;
let productModal;
let checkoutForm;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart and modals
    cart = new ShoppingCart();
    productModal = new ProductModal();
    checkoutForm = new CheckoutForm();

    // Initialize cart UI
    cart.updateCartUI();

    // Setup modal event listeners
    setupModalListeners();
});

// Setup modal event listeners
function setupModalListeners() {
    const productModalEl = document.getElementById('product-modal');
    const checkoutModalEl = document.getElementById('checkout-modal');

    // Close on X button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Close on outside click
    productModalEl.addEventListener('click', function(e) {
        if (e.target === productModalEl) {
            productModalEl.style.display = 'none';
        }
    });

    checkoutModalEl.addEventListener('click', function(e) {
        if (e.target === checkoutModalEl) {
            checkoutModalEl.style.display = 'none';
        }
    });

    // Modal buttons
    document.getElementById('modal-add-btn').addEventListener('click', () => {
        productModal.addToCart();
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        checkoutForm.open();
    });

    document.getElementById('checkout-submit-btn').addEventListener('click', () => {
        checkoutForm.submit();
    });

    // Quantity input handlers
    document.getElementById('modal-quantity').addEventListener('change', function() {
        if (this.value < 1) this.value = 1;
    });

    document.getElementById('modal-quantity').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            productModal.addToCart();
        }
    });

        // Nossos botões pescados pelo ID!
    document.getElementById('btn-minus').addEventListener('click', () => {
        const input = document.getElementById('modal-quantity');
        // Pega o valor atual, diminui 1. O Math.max(1, ...) impede que fique menor que 1.
        input.value = Math.max(1, parseInt(input.value) - 1);
    });

    document.getElementById('btn-plus').addEventListener('click', () => {
        const input = document.getElementById('modal-quantity');
        // Pega o valor atual e soma 1
        input.value = parseInt(input.value) + 1;
    });

}

// Função makeProductsClickable removida pois a renderCardapio já cuida do botão!

// === FUNÇÃO PARA RENDERIZAR O CARDÁPIO DINAMICAMENTE ===
function renderCardapio() {
    // 1. O robô "pesca" a vitrine do HTML
    const vitrine = document.querySelector('.menu-grid');
    
    // 2. O robô limpa tudo que tem nela
    vitrine.innerHTML = '';

    // 3. O robô passa por TODOS os lanches da sua lista (Array)
    produtosCardapio.forEach(ficha => {
        
        // Se tiver badge (como o Novidade), renderiza o HTML dela, se for null não coloca nada
        const badgeHTML = ficha.badge ? `<span class="badge">${ficha.badge}</span>` : '';
        
        // 4. O robô constrói o molde e *injeta* os dados de cada lanche no lugar dos buracos ${ }
        vitrine.innerHTML += `
            <li>
                <img src="${ficha.imagem}" alt="${ficha.nome}">
                ${badgeHTML}
                <h3>${ficha.nome}</h3>
                <p>${ficha.descricao}</p>
                <strong>R$ ${ficha.preco.toFixed(2).replace('.', ',')}</strong>
                <button class="btn" onclick="productModal.open('${ficha.nome}', '${ficha.preco}', '${ficha.descricao}')">Adicionar</button>
            </li>
        `;
    });
}

// Essa linha avisa: "Robô, assim que ler isso, monte a vitrine já!"
renderCardapio();


// Alias antigo removido para evitar bugs
