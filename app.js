// ===== RELIABLE IMAGE SOURCES =====
// Using verified Unsplash CDN direct photo IDs (no CORS, no hotlink block)
const IMGS = {
    halwapuri: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=400&h=280&fit=crop&auto=format',
    paye: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&h=280&fit=crop&auto=format',
    chana: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=280&fit=crop&auto=format',
    lassi: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=280&fit=crop&auto=format',
    chai: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=280&fit=crop&auto=format',
    paratha: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=280&fit=crop&auto=format',
    nihari: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=280&fit=crop&auto=format',
    haleem: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=280&fit=crop&auto=format',
    maghz: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=280&fit=crop&auto=format',
    naan: 'https://images.unsplash.com/photo-1542528180-1c2803fa048c?w=400&h=280&fit=crop&auto=format',
    karahi: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=280&fit=crop&auto=format',
    karahiC: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=280&fit=crop&auto=format',
    fish: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=280&fit=crop&auto=format',
    pulao: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=280&fit=crop&auto=format',
    biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=280&fit=crop&auto=format',
    biryani2: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=280&fit=crop&auto=format',
    chapli: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=280&fit=crop&auto=format',
    seekh: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=400&h=280&fit=crop&auto=format',
    tikka: 'https://images.unsplash.com/photo-1640451710686-d4dde0830aad?w=400&h=280&fit=crop&auto=format',
    bbq: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=280&fit=crop&auto=format',
    mutton: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=280&fit=crop&auto=format',
    juice: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=280&fit=crop&auto=format',
    shake: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=280&fit=crop&auto=format',
    fruitsalad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=280&fit=crop&auto=format',
    colddrink: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=280&fit=crop&auto=format',
};

// ===== MENU DATA =====
const menuData = {
    nashta: [
        { icon: '🍛', name: 'اسپیشل حلوہ پوری (پلیٹ ون پرسن)', price: 270, desc: 'روایتی پشاوری ناشتہ', img: IMGS.halwapuri },
        { icon: '🍖', name: 'اسپیشل بڑے پائے (ڈبل)', price: 800, desc: 'مزیدار مصالحہ دار پائے', img: IMGS.paye },
        { icon: '🍖', name: 'اسپیشل بڑے پائے (سنگل)', price: 400, desc: 'ایک پیالہ', img: IMGS.paye },
        { icon: '🥣', name: 'اسپیشل چھوٹے پائے (ڈبل)', price: 800, desc: 'تازہ صبح کا ناشتہ', img: IMGS.paye },
        { icon: '🥣', name: 'اسپیشل چھوٹے پائے (سنگل)', price: 400, desc: '', img: IMGS.paye },
        { icon: '🍞', name: 'اسپیشل نان چنے + انڈے', price: 250, desc: 'مکمل ناشتہ', img: IMGS.chana },
        { icon: '🍳', name: 'اسپیشل سادہ چنے', price: 170, desc: '', img: IMGS.chana },
        { icon: '🥛', name: 'میٹھی نمکین لسی', price: 220, desc: 'تازہ دہی سے بنی لسی', img: IMGS.lassi },
        { icon: '☕', name: 'دودھ پتی اسپیشل چائے', price: 80, desc: '', img: IMGS.chai },
        { icon: '🍞', name: 'توا پراٹھہ', price: 50, desc: '', img: IMGS.paratha },
        { icon: '🍗', name: 'مغز فرائی', price: 500, desc: 'خصوصی پشاوری ڈش', img: IMGS.maghz },
        { icon: '🫓', name: 'روغنی نان', price: 50, desc: '', img: IMGS.naan },
        { icon: '🍖', name: 'اسپیشل نہاری (ڈبل)', price: 500, desc: '', img: IMGS.nihari },
        { icon: '🍖', name: 'اسپیشل نہاری (سنگل)', price: 250, desc: '', img: IMGS.nihari },
        { icon: '🍗', name: 'چکن حلیم', price: 250, desc: '', img: IMGS.haleem },
    ],
    karahi: [
        { icon: '🍲', name: 'مٹن کڑاہی', price: 550, desc: 'اصل مٹن کڑاہی دیسی گھی میں', img: IMGS.karahi },
        { icon: '🍲', name: 'چکن کڑاہی', price: 500, desc: 'تازہ فارم چکن', img: IMGS.karahiC },
        { icon: '🍲', name: 'بیف کڑاہی', price: 500, desc: '', img: IMGS.karahi },
        { icon: '🍲', name: 'مکس کڑاہی', price: 500, desc: '', img: IMGS.karahi },
        { icon: '🍲', name: 'کلیجی کڑاہی', price: 500, desc: '', img: IMGS.karahiC },
        { icon: '🦐', name: 'فش کڑاہی', price: 300, desc: 'تازہ مچھلی', img: IMGS.fish },
        { icon: '🍲', name: 'پشاوری کڑاہی (اسپیشل)', price: 550, desc: 'روایتی پشاوری ترکیب', img: IMGS.karahi },
        { icon: '🍲', name: 'مٹن چانپ کڑاہی', price: 550, desc: '', img: IMGS.karahi },
        { icon: '🍲', name: 'چکن کلیجی', price: 550, desc: '', img: IMGS.karahiC },
        { icon: '🍲', name: 'سری پائے', price: 560, desc: '', img: IMGS.paye },
        { icon: '🍲', name: 'دماغ کڑاہی', price: 560, desc: '', img: IMGS.maghz },
        { icon: '🍲', name: 'گردہ کپورہ', price: 800, desc: '', img: IMGS.karahi },
        { icon: '🍲', name: 'مکس چکن مٹن', price: 300, desc: '', img: IMGS.karahiC },
        { icon: '🍲', name: 'چاپلی کباب کڑاہی', price: 300, desc: '', img: IMGS.chapli },
        { icon: '🍚', name: 'پلاؤ (سادہ)', price: 550, desc: '', img: IMGS.pulao },
    ],
    biryani: [
        { icon: '🍛', name: 'بریانی پیکج — 2 مرغی شامل (4-6 افراد)', price: 4000, desc: 'پوری مرغی + بریانی + نان + رائتہ + مشروب', img: IMGS.biryani },
        { icon: '🍛', name: 'بریانی پیکج — 1 مرغی شامل (4-6 افراد)', price: 8000, desc: 'بڑا فیملی پیکج', img: IMGS.biryani },
        { icon: '🍛', name: 'چکن بریانی (پلیٹ)', price: 350, desc: 'مصالحہ دار بریانی', img: IMGS.biryani },
        { icon: '🍛', name: 'مٹن بریانی (پلیٹ)', price: 450, desc: 'سافٹ مٹن بریانی', img: IMGS.biryani2 },
        { icon: '🍛', name: 'بیف بریانی (پلیٹ)', price: 400, desc: '', img: IMGS.biryani2 },
    ],
    kabab: [
        { icon: '🍖', name: 'چاپلی کباب', price: 1000, desc: 'پشاور کا مشہور کباب', img: IMGS.chapli },
        { icon: '🍖', name: 'سیخ کباب', price: 1000, desc: '', img: IMGS.seekh },
        { icon: '🍖', name: 'شامی کباب', price: 1000, desc: '', img: IMGS.chapli },
        { icon: '🍖', name: 'بوٹی کباب', price: 1100, desc: '', img: IMGS.mutton },
        { icon: '🍖', name: 'تکہ بوٹی', price: 1000, desc: '', img: IMGS.tikka },
        { icon: '🍗', name: 'چکن تکہ', price: 1200, desc: '', img: IMGS.tikka },
        { icon: '🍗', name: 'چکن باربی کیو', price: 1000, desc: '', img: IMGS.bbq },
        { icon: '🍗', name: 'چکن شامی', price: 1000, desc: '', img: IMGS.chapli },
        { icon: '🍖', name: 'مٹن باربی کیو', price: 1800, desc: '', img: IMGS.mutton },
        { icon: '🍖', name: 'مٹن چانپ', price: 2000, desc: '', img: IMGS.mutton },
        { icon: '🍖', name: 'مٹن ریشمی', price: 1800, desc: '', img: IMGS.seekh },
        { icon: '🍖', name: 'مٹن مکس گرل', price: 1800, desc: '', img: IMGS.bbq },
        { icon: '🍖', name: 'مٹن شامی', price: 2200, desc: '', img: IMGS.chapli },
        { icon: '🍖', name: 'مٹن سیخ', price: 2500, desc: '', img: IMGS.seekh },
    ],
    drinks: [
        { icon: '🥛', name: 'میٹھی لسی', price: 120, desc: 'تازہ دہی', img: IMGS.lassi },
        { icon: '🥛', name: 'نمکین لسی', price: 120, desc: '', img: IMGS.lassi },
        { icon: '🧃', name: 'فروٹ چاٹ', price: 150, desc: '', img: IMGS.fruitsalad },
        { icon: '🥤', name: 'کولڈ ڈرنک', price: 80, desc: '', img: IMGS.colddrink },
        { icon: '☕', name: 'چائے', price: 80, desc: '', img: IMGS.chai },
        { icon: '☕', name: 'دودھ پتی', price: 100, desc: '', img: IMGS.chai },
        { icon: '🧊', name: 'جوس', price: 150, desc: 'تازہ پھلوں کا جوس', img: IMGS.juice },
        { icon: '🥛', name: 'شیک', price: 200, desc: '', img: IMGS.shake },
    ]
};

// ===== CART STATE =====
let cart = [];

// ===== RENDER MENU =====
function renderMenus() {
    Object.keys(menuData).forEach(category => {
        const container = document.querySelector(`#${category} .menu-grid-inner`);
        if (!container) return;
        container.innerHTML = '';
        menuData[category].forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img
            src="${item.img}"
            alt="${item.name}"
            class="menu-card-img"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'menu-card-img-fallback\\'>${item.icon}</div>'"
          />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${item.name}</div>
          ${item.desc ? `<div class="menu-card-desc">${item.desc}</div>` : ''}
          <div class="menu-card-footer">
            <span class="menu-card-price">₨ ${item.price.toLocaleString()}</span>
            <button class="add-btn" id="btn-${category}-${idx}" onclick="addToCart('${category}',${idx}, this)">+ شامل کریں</button>
          </div>
        </div>
      `;
            container.appendChild(card);
        });
    });
}

// ===== SHOW CATEGORY =====
function showCategory(cat) {
    document.querySelectorAll('.menu-grid').forEach(g => g.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const grid = document.getElementById(cat);
    if (grid) grid.classList.remove('hidden');
    event.currentTarget.classList.add('active');
}

// ===== CART FUNCTIONS =====
function addToCart(category, idx, btn) {
    const item = menuData[category][idx];
    const existing = cart.find(c => c.category === category && c.idx === idx);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ category, idx, name: item.name, price: item.price, icon: item.icon, qty: 1 });
    }
    btn.textContent = '✔ شامل ہو گیا';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = '+ شامل کریں';
        btn.classList.remove('added');
    }, 1500);
    updateCartUI();
    document.getElementById('cartBtn').style.transform = 'scale(1.25)';
    setTimeout(() => document.getElementById('cartBtn').style.transform = '', 300);
}

function updateCartUI() {
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    const count = cart.reduce((s, c) => s + c.qty, 0);
    document.getElementById('cartCount').textContent = count;
    const cartItemsEl = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<div class="cart-empty"><i class="fas fa-utensils"></i><p>ابھی کوئی آئٹم نہیں</p><p>مینو سے آئٹم شامل کریں</p></div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItemsEl.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <span class="cart-item-icon">${item.icon}</span>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₨ ${(item.price * item.qty).toLocaleString()}</div>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn qty-minus" onclick="changeQty(${i}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn qty-plus" onclick="changeQty(${i}, 1)">+</button>
        </div>
      </div>
    `).join('');
        cartFooter.style.display = 'block';
        document.getElementById('cartTotal').textContent = `₨ ${total.toLocaleString()}`;
    }
    updateOrderPreview();
}

function changeQty(idx, delta) {
    cart[idx].qty += delta;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function proceedOrder() {
    toggleCart();
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

function sendWhatsApp() {
    if (cart.length === 0) return;
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    let msg = '🍽️ *اکبر شنواری ریسٹورنٹ — آرڈر*\n\n';
    cart.forEach(item => {
        msg += `• ${item.name} × ${item.qty} = ₨${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\n💰 *کل رقم: ₨${total.toLocaleString()}*\n\nبراہ کرم آرڈر کنفرم کریں۔ شکریہ! 🙏`;
    window.open(`https://wa.me/923091999786?text=${encodeURIComponent(msg)}`, '_blank');
}

function updateOrderPreview() {
    const preview = document.getElementById('orderCartPreview');
    if (cart.length === 0) { preview.classList.remove('visible'); return; }
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    preview.classList.add('visible');
    let html = '<strong>🛒 آپ کے منتخب آئٹمز:</strong><br/>';
    cart.forEach(item => { html += `${item.icon} ${item.name} × ${item.qty} — ₨${(item.price * item.qty).toLocaleString()}<br/>`; });
    html += `<strong>کل: ₨${total.toLocaleString()}</strong>`;
    preview.innerHTML = html;
    document.getElementById('oItems').value = cart.map(c => `${c.name} × ${c.qty}`).join(', ');
}

function submitOrder(e) {
    e.preventDefault();
    const name = document.getElementById('oName').value;
    const phone = document.getElementById('oPhone').value;
    const address = document.getElementById('oAddress').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const items = document.getElementById('oItems').value;
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    let msg = `🍽️ *اکبر شنواری ریسٹورنٹ — نیا آرڈر*\n\n`;
    msg += `👤 *نام:* ${name}\n📞 *فون:* ${phone}\n📍 *پتہ:* ${address}\n💳 *ادائیگی:* ${payment}\n\n`;
    if (items) msg += `📋 *آرڈر:*\n${items}\n\n`;
    if (total > 0) msg += `💰 *کل رقم: ₨${total.toLocaleString()}*\n`;
    msg += '\nبراہ کرم آرڈر کنفرم کریں۔ شکریہ! 🙏';
    window.open(`https://wa.me/923091999786?text=${encodeURIComponent(msg)}`, '_blank');
    showModal('✅', 'آرڈر موصول ہو گیا!', `${name} صاحب، آپ کا آرڈر واٹس ایپ پر بھیج دیا گیا ہے۔`);
    e.target.reset(); cart = []; updateCartUI();
}

function submitReservation(e) {
    e.preventDefault();
    const name = document.getElementById('rName').value;
    const phone = document.getElementById('rPhone').value;
    const date = document.getElementById('rDate').value;
    const time = document.getElementById('rTime').value;
    const guests = document.getElementById('rGuests').value;
    const occasion = document.getElementById('rOccasion').value;
    const note = document.getElementById('rNote').value;
    let msg = `📅 *اکبر شنواری — میز ریزرویشن*\n\n`;
    msg += `👤 *نام:* ${name}\n📞 *فون:* ${phone}\n📅 *تاریخ:* ${date}\n🕐 *وقت:* ${time}\n👥 *افراد:* ${guests}\n`;
    if (occasion) msg += `🎉 *تقریب:* ${occasion}\n`;
    if (note) msg += `📝 *نوٹ:* ${note}\n`;
    msg += '\nبراہ کرم ریزرویشن کنفرم کریں۔ شکریہ! 🙏';
    window.open(`https://wa.me/923091999786?text=${encodeURIComponent(msg)}`, '_blank');
    showModal('📅', 'میز محفوظ ہو گئی!', `${name} صاحب، آپ کی ریزرویشن ${date} کو ${time} بجے کے لیے بھیج دی گئی ہے۔`);
    e.target.reset();
}

function showModal(icon, title, msg) {
    document.getElementById('modalIcon').textContent = icon;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMsg').textContent = msg;
    document.getElementById('modalOverlay').classList.add('open');
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('navLinks').classList.remove('open');
});

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.animate-fade-up, .animate-fade-left, .animate-fade-right').forEach(el => observer.observe(el));
}

window.addEventListener('load', () => {
    setTimeout(() => { document.getElementById('loader').classList.add('hidden'); }, 2200);
    renderMenus();
    initAnimations();
    document.getElementById('rDate').min = new Date().toISOString().split('T')[0];
});

document.getElementById('modalOverlay').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => { document.getElementById('navLinks').classList.remove('open'); });
});
