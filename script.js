const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const toast = document.getElementById('toast');
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

document.getElementById('copy-ip')?.addEventListener('click', async () => {
  const ip = document.getElementById('server-ip').textContent.trim();
  try {
    await navigator.clipboard.writeText(ip);
    showToast('✅ IP copiado!');
  } catch {
    showToast('📋 Selecione e copie o IP: ' + ip);
  }
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.product').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast('🎟️ Crie um ticket no Discord e informe: ' + btn.dataset.item);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
