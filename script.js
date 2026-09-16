const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');

if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
  });
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

const copyBtn=document.getElementById('copy-ip');
if(copyBtn){
  copyBtn.addEventListener('click',async()=>{
    const ip=document.getElementById('server-ip').textContent.trim();
    try{await navigator.clipboard.writeText(ip)}
    catch(e){
      const t=document.createElement('textarea');
      t.value=ip;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();
    }
    const toast=document.getElementById('toast');
    if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}
  });
}

document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  const f=tab.dataset.filter;
  document.querySelectorAll('.product').forEach(p=>{
    p.classList.toggle('hidden',f!=='all'&&p.dataset.category!==f);
  });
}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const topBtn=document.getElementById('to-top');
if(topBtn){
  window.addEventListener('scroll',()=>{
    topBtn.classList.toggle('show',window.scrollY>650);
  },{passive:true});
  topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}
