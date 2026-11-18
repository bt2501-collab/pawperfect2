// PawPerfect — зоомагазин (CRUD, пошук, фільтри; дані в localStorage)
const CATS=['Корм для тварин','Аксесуари','Засоби догляду'];
const CE=['🍖','🧸','🛁'];
// [назва, категорія, виробник, призначення, вага/об’єм, ціна, фото, опис]
const SEED=[
['Сухий корм для дорослих собак',0,'Royal Canin','Для собак середніх порід','3 кг',685,'images/products/food-royal-canin.jpg','Збалансований корм для підтримки здоров’я шкіри та шерсті.'],
['Корм для кошенят',0,'Purina Pro Plan','Для кошенят до 12 місяців','1,5 кг',420,'images/products/food-purina-pro-plan.jpg','З куркою та пробіотиками для міцного імунітету.'],
['Вологий корм із лососем',0,'Gourmet','Для дорослих котів','85 г',28,'images/products/food-gourmet.jpg','Ніжні шматочки лосося в соусі.'],
['Корм для декоративних кролів',0,'Versele-Laga','Для кролів','1 кг',210,'images/products/food-versele-laga.jpg','Трав’яні гранули з клітковиною для здорового травлення.'],
['Корм для хвилястих папуг',0,'Padovan','Для папуг','500 г',135,'images/products/food-padovan.jpg','Суміш зерен і насіння з вітамінами.'],
['Корм для тропічних рибок',0,'Tetra','Для акваріумних рибок','100 мл',150,'images/products/food-tetra.jpg','Пластівці для щоденного годування, яскраве забарвлення.'],
['Ласощі-кісточки',0,'Beaphar','Для собак, нагорода','150 г',98,'images/products/food-beaphar.jpg','Смачні кісточки, що чистять зуби.'],
['Корм для морських свинок',0,'Little One','Для морських свинок','900 г',175,'images/products/food-little-one.jpg','З вітаміном C та лучними травами.'],
['Беззерновий корм для котів',0,'Acana','Для дорослих котів','1,8 кг',890,'images/products/food-acana.jpg','Високий вміст м’яса, без зернових.'],
['Корм для цуценят дрібних порід',0,'Brit Premium','Для цуценят','1 кг',310,'images/products/food-brit-premium.jpg','Маленькі гранули для малих щелеп.'],
['Нашийник нейлоновий',1,'Trixie','Для собак','M, 30–45 см',165,'images/products/acc-trixie.jpg','М’який регульований нашийник із міцною застібкою.'],
['Повідець-рулетка',1,'Flexi','Для собак до 25 кг','5 м',520,'images/products/acc-flexi.jpg','Зручна ручка та надійне гальмо.'],
['Лежак м’який',1,'Ferplast','Для котів і малих собак','55×45 см',640,'images/products/acc-ferplast.jpg','Пухнастий лежак з високими бортиками.'],
['М’яч для собак',1,'Kong','Іграшка для активних ігор','Ø 7 см',210,'images/products/acc-kong.jpg','Міцна гума, пружно відскакує.'],
['Когтеточка-стовпчик',1,'Trixie','Для котів','60 см',480,'images/products/acc-trixiekogtetochka.jpg','Сизалевий стовпчик на стійкій основі.'],
['Миска керамічна',1,'Hunter','Для котів і собак','350 мл',150,'images/products/acc-hunter.jpg','Важка миска, що не ковзає по підлозі.'],
['Переноска для котів',1,'Savic','Для перевезення тварин','48×32×31 см',780,'images/products/acc-savic.jpg','Пластикова переноска з вентиляцією.'],
['Шлейка для собак',1,'Ferplast','Для прогулянок','L, 60–80 см',360,'images/products/acc-ferplastshleika.jpg','Легка шлейка з м’якою підкладкою.'],
['Іграшка-вудочка',1,'Petstages','Для котів','45 см',95,'images/products/acc-petstages.jpg','Пір’їнка на гнучкій вудочці для ігор.'],
['Клітка для хом’яка',1,'Savic','Для гризунів','40×25×30 см',950,'images/products/acc-savicklitka.jpg','Клітка з колесом, поїлкою та будиночком.'],
['Шампунь для собак',2,'Beaphar','Для догляду за шерстю','250 мл',135,'images/products/care-beaphar.jpg','Делікатний шампунь з алое вера.'],
['Гіпоалергенний шампунь для котів',2,'Hartz','Для чутливої шкіри','237 мл',180,'images/products/care-hartz.jpg','Без барвників і сильних ароматизаторів.'],
['Краплі від бліх і кліщів',2,'Frontline','Для собак 10–20 кг','2,68 мл',360,'images/products/care-frontline.jpg','Захист до 4 тижнів.'],
['Щітка-фурмінатор',2,'FURminator','Для вичісування шерсті','M',1150,'images/products/care-furminator.jpg','Прибирає підшерсток, зменшує линьку.'],
['Зубна паста для собак',2,'Virbac','Гігієна ротової порожнини','70 г',140,'images/products/care-virbac.jpg','Зі смаком курки, без полоскання.'],
['Гігієнічні пелюшки',2,'Super Sorb','Для цуценят і дорослих собак','30 шт',260,'images/products/care-super-sorb.jpg','Вбирають вологу та нейтралізують запах.'],
['Наповнювач для лотка',2,'Catsan','Для котів','5 л',230,'images/products/care-catsan.jpg','Грудкується, довго тримає свіжість.'],
['Кігтеріз',2,'Trixie','Для котів і собак','12 см',120,'images/products/care-trixie.jpg','Нержавіючі леза та зручна ручка.'],
['Лосьйон для вух',2,'Beaphar','Чищення вух','50 мл',110,'images/products/care-beapharlosyondlyavuh.jpg','М’яко очищує та знімає подразнення.'],
['Вітаміни для кішок',2,'8in1','Підтримка здоров’я','100 таблеток',295,'images/products/care-8in1.jpg','Комплекс вітамінів і мінералів.']
];
const KEY='pawperfect_products_v2';
let P=[];
try{P=JSON.parse(localStorage.getItem(KEY)||'null')||[]}catch(e){}
if(!P.length){P=SEED.map((s,i)=>({id:i+1,name:s[0],cat:CATS[s[1]],brand:s[2],purpose:s[3],size:s[4],price:s[5],photo:s[6],desc:s[7]}))}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(P))}catch(e){alert('Не вдалося зберегти: можливо, фото завелике.')}};
function isImg(s){return !!s&&(s.startsWith('data:')||s.startsWith('images/'))}
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=id=>document.getElementById(id);
const F={q:'',cat:'',min:'',max:'',sort:''};
let editId=null,photoData=null;

function card(p){
  const ph=isImg(p.photo)?`<img src="${p.photo}" alt="${esc(p.name)}">`:esc(p.photo||'🐾');
  return `<article class="card" data-view="${p.id}"><div class="ph">${ph}</div><div class="bd">
  <span class="tag">${esc(p.cat)}</span><h3>${esc(p.name)}</h3>${ratingLine(p.id)}
  <p class="d">${esc(p.desc)}</p>
  <div class="meta">Виробник: ${esc(p.brand)}<br>Призначення: ${esc(p.purpose)}<br>Вага/об’єм: ${esc(p.size)}</div>
  <div class="row"><span class="price">${Number(p.price).toLocaleString('uk-UA')} ₴</span><button class="btn sm" data-add="${p.id}">🛒 У кошик</button></div></div>
  <div class="acts"><button class="btn alt sm" data-edit="${p.id}">Редагувати</button><button class="btn ghost sm" data-del="${p.id}">Видалити</button></div></article>`;
}
function filtered(){
  const q=F.q.trim().toLowerCase(),min=F.min===''?-Infinity:+F.min,max=F.max===''?Infinity:+F.max;
  let r=P.filter(p=>(!q||[p.name,p.cat,p.brand].some(v=>String(v).toLowerCase().includes(q)))&&(!F.cat||p.cat===F.cat)&&p.price>=min&&p.price<=max);
  if(F.sort==='asc')r.sort((a,b)=>a.price-b.price);else if(F.sort==='desc')r.sort((a,b)=>b.price-a.price);
  return r;
}
function drawGrid(){
  const r=filtered();
  $('grid').innerHTML=r.length?r.map(card).join(''):'<div class="empty" style="grid-column:1/-1">Нічого не знайдено 🐾</div>';
  $('cnt').textContent=r.length+' з '+P.length+' товарів';
}
function home(){
  $('app').innerHTML=`<section class="hero"><div class="hero-txt"><h1>Щасливі лапки — щасливий дім</h1><p>Корми, аксесуари та засоби догляду для котів, собак, гризунів, птахів і рибок — усе в одному місці.</p><a class="btn light" href="#catalog">До каталогу</a></div><div class="hero-art"><img src="images/hero.webp" alt="Цуценя, морська свинка, кролик і кошеня"></div></section>
  <div class="cats">${CATS.map((c,i)=>`<div class="cat" data-c="${c}"><h3>${c}</h3><p class="meta">${P.filter(p=>p.cat===c).length} товарів</p></div>`).join('')}</div>
  <h2>Популярні товари</h2><div class="grid">${[0,10,20,3].map(i=>P[i]).filter(Boolean).map(card).join('')}</div>`;
}
function catalog(){
  $('app').innerHTML=`<div class="top"><h1 style="font-size:2.4rem">Каталог</h1><button class="btn" id="add">+ Додати товар</button></div>
  <div class="bar"><input class="s" id="q" placeholder="Пошук за назвою, категорією, виробником…" value="${esc(F.q)}">
  <select id="fc"><option value="">Усі категорії</option>${CATS.map(c=>`<option ${F.cat===c?'selected':''}>${c}</option>`).join('')}</select>
  <input id="mn" type="number" min="0" placeholder="Ціна від" value="${F.min}"><input id="mx" type="number" min="0" placeholder="Ціна до" value="${F.max}">
  <select id="so"><option value="">Без сортування</option><option value="asc" ${F.sort==='asc'?'selected':''}>Спочатку дешевші</option><option value="desc" ${F.sort==='desc'?'selected':''}>Спочатку дорожчі</option></select></div>
  <p class="meta" id="cnt"></p><div class="grid" id="grid"></div>`;
  drawGrid();
  const bind=(id,k)=>$(id).addEventListener('input',e=>{F[k]=e.target.value;drawGrid()});
  bind('q','q');bind('fc','cat');bind('mn','min');bind('mx','max');bind('so','sort');
  $('add').onclick=()=>openForm();
}
function route(){
  const h=location.hash.replace('#','')||'home';
  $('n-home').className=h==='home'?'on':'';$('n-catalog').className=h==='catalog'?'on':'';
  h==='admin'?admin():h==='catalog'?catalog():(home(),$('app').insertAdjacentHTML('beforeend',homeReviews()));
  window.scrollTo(0,0);
}
function openForm(id){
  editId=id||null;photoData=null;$('err').textContent='';$('f-file').value='';
  $('f-cat').innerHTML=CATS.map(c=>`<option>${c}</option>`).join('');
  const p=P.find(x=>x.id===id)||{name:'',cat:CATS[0],brand:'',purpose:'',size:'',price:'',desc:'',photo:'🐾'};
  $('mt').textContent=id?'Редагувати товар':'Новий товар';
  ['name','brand','purpose','size','price','desc'].forEach(k=>$('f-'+k).value=p[k]);
  $('f-cat').value=p.cat;$('modal').classList.add('open');
}
$('f-file').addEventListener('change',e=>{
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,500/im.width),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);photoData=c.toDataURL('image/jpeg',.8)};im.src=r.result};
  r.readAsDataURL(f);
});
$('cancel').onclick=()=>$('modal').classList.remove('open');
$('save').onclick=()=>{
  const v=k=>$('f-'+k).value.trim();
  if(!v('name')||!v('brand')||v('price')===''||+v('price')<0){$('err').textContent='Заповніть назву, виробника та коректну ціну.';return}
  const old=P.find(x=>x.id===editId);
  const d={name:v('name'),cat:$('f-cat').value,brand:v('brand'),purpose:v('purpose'),size:v('size'),price:+v('price'),desc:v('desc'),photo:photoData||(old?old.photo:'🐾')};
  if(old)Object.assign(old,d);else P.unshift({id:Date.now(),...d});
  save();$('modal').classList.remove('open');if($('grid'))drawGrid();if($('admTbl'))admProdRows();
};
document.addEventListener('click',e=>{
  const t=e.target;cartClick(t);viewClick(t);revClick(t);admClick(t);
  if(t.dataset.edit)openForm(+t.dataset.edit);
  if(t.dataset.del&&confirm('Видалити цей товар?')){P=P.filter(p=>p.id!==+t.dataset.del);save();delete C[t.dataset.del];saveC();badge();R=R.filter(r=>String(r.pid)!==t.dataset.del);saveR();if($('admTbl'))admProdRows();else location.hash==='#catalog'?drawGrid():home();}
  const c=t.closest('.cat');if(c){F.cat=c.dataset.c;location.hash='catalog'}
  if(t===$('modal'))$('modal').classList.remove('open');
});
window.addEventListener('hashchange',route);


/* ===== Кошик і замовлення ===== */
const CK='pawperfect_cart_v1',OK='pawperfect_orders_v1';
let C={};try{C=JSON.parse(localStorage.getItem(CK)||'{}')||{}}catch(e){}
const saveC=()=>{try{localStorage.setItem(CK,JSON.stringify(C))}catch(e){}};
const items=()=>Object.keys(C).map(id=>({p:P.find(x=>String(x.id)===id),q:C[id]})).filter(i=>i.p);
const badge=()=>{$('cartN').textContent=items().reduce((s,i)=>s+i.q,0)};
const thumb=p=>isImg(p.photo)?`<img src="${p.photo}" alt="">`:esc(p.photo||'🐾');
function toast(t){let e=$('toast');if(!e){e=document.createElement('div');e.id='toast';document.body.appendChild(e)}e.textContent=t;e.className='show';clearTimeout(toast.t);toast.t=setTimeout(()=>e.className='',1600)}
function addToCart(id){C[id]=(C[id]||0)+1;saveC();badge();toast('Додано до кошика 🐾')}
function drawList(){
  const it=items(),sum=it.reduce((s,i)=>s+i.p.price*i.q,0);
  $('cl').innerHTML=it.length?it.map(({p,q})=>`<div class="ci"><div class="cth">${thumb(p)}</div><div class="cn"><b>${esc(p.name)}</b><span class="meta">${p.price} ₴</span></div><div class="qty"><button class="btn sm ghost" data-dec="${p.id}">−</button><b>${q}</b><button class="btn sm ghost" data-inc="${p.id}">+</button></div><button class="btn sm ghost" data-rm="${p.id}" title="Видалити">✕</button></div>`).join('')+`<div class="tot">Разом: <span class="price">${sum.toLocaleString('uk-UA')} ₴</span></div>`:'<div class="empty">Кошик порожній 🐾</div>';
  $('cf').style.display=it.length?'':'none';
}
function openCart(){
  $('cartBox').innerHTML=`<div class="top"><h2 style="margin:0">Кошик 🛒</h2><button class="btn sm ghost" id="cartClose">✕</button></div>
  <div id="cl"></div>
  <div id="cf"><h3 style="margin:14px 0 8px">Оформлення замовлення</h3><div class="f">
  <div><label>Ім’я</label><input id="o-name" autocomplete="name"></div>
  <div><label>Телефон</label><input id="o-phone" type="tel" placeholder="+380…" autocomplete="tel"></div>
  <div class="w"><label>Адреса доставки</label><input id="o-addr" placeholder="Місто, вулиця, будинок / відділення"></div>
  <div><label>Доставка</label><select id="o-del"><option>Нова пошта</option><option>Укрпошта</option><option>Самовивіз</option></select></div>
  <div><label>Оплата</label><select id="o-pay"><option>Під час отримання</option><option>Карткою онлайн</option></select></div>
  <div class="w"><label>Коментар</label><textarea id="o-note" rows="2"></textarea></div></div>
  <p class="meta" id="o-err" style="color:#c0392b"></p>
  <button class="btn" id="order" style="width:100%">Оформити замовлення</button></div>`;
  $('cartModal').classList.add('open');drawList();
}
function placeOrder(){
  const v=id=>$(id).value.trim(),it=items();
  if(!it.length)return;
  if(v('o-name').length<2||v('o-phone').replace(/\D/g,'').length<10||(v('o-del')!=='Самовивіз'&&v('o-addr').length<5)){$('o-err').textContent='Вкажіть ім’я, телефон (мін. 10 цифр) та адресу.';return}
  const o={id:Date.now(),date:new Date().toISOString(),status:'Нове',name:v('o-name'),phone:v('o-phone'),addr:v('o-addr'),delivery:v('o-del'),pay:v('o-pay'),note:v('o-note'),items:it.map(i=>({name:i.p.name,price:i.p.price,qty:i.q})),sum:it.reduce((s,i)=>s+i.p.price*i.q,0)};
  try{const l=JSON.parse(localStorage.getItem(OK)||'[]');l.push(o);localStorage.setItem(OK,JSON.stringify(l))}catch(e){}
  C={};saveC();badge();
  $('cartBox').innerHTML=`<div class="empty"><h2>🎉 Дякуємо, ${esc(o.name)}!</h2><p>Замовлення №${String(o.id).slice(-6)} на суму <b>${o.sum.toLocaleString('uk-UA')} ₴</b> оформлено. Ми зателефонуємо вам найближчим часом.</p><button class="btn" id="cartClose">Закрити</button></div>`;
}
function cartClick(t){
  const d=t.dataset;
  if(d.add)addToCart(+d.add);
  if(d.inc){C[d.inc]++;saveC();badge();drawList()}
  if(d.dec){C[d.dec]--;if(C[d.dec]<1)delete C[d.dec];saveC();badge();drawList()}
  if(d.rm){delete C[d.rm];saveC();badge();drawList()}
  if(t.closest('#cartBtn'))openCart();
  if(t.id==='cartClose'||t===$('cartModal'))$('cartModal').classList.remove('open');
  if(t.id==='order')placeOrder();
}
$('n-contacts').addEventListener('click',e=>{e.preventDefault();$('contacts').scrollIntoView({behavior:'smooth'})});
badge();


/* ===== Перегляд товару ===== */
function openView(id,keep){
  const p=P.find(x=>x.id===id);if(!p)return;rvStar=0;
  const big=isImg(p.photo)?`<img src="${p.photo}" alt="${esc(p.name)}">`:esc(p.photo||'🐾');
  const rel=P.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,3);
  $('viewBox').innerHTML=`<button class="btn sm ghost vclose" id="viewClose" aria-label="Закрити">✕</button>
  <div class="vgrid"><div class="vph">${big}</div><div class="vinfo">
    <span class="tag">${esc(p.cat)}</span><h2>${esc(p.name)}</h2>
    <div class="price vprice">${Number(p.price).toLocaleString('uk-UA')} ₴</div>
    <p class="vdesc">${esc(p.desc)||'Опис відсутній.'}</p>
    <dl class="spec"><dt>Виробник</dt><dd>${esc(p.brand)}</dd><dt>Призначення</dt><dd>${esc(p.purpose)||'—'}</dd><dt>Вага / об’єм</dt><dd>${esc(p.size)||'—'}</dd><dt>Категорія</dt><dd>${esc(p.cat)}</dd></dl>
    <div class="vact"><button class="btn" data-add="${p.id}">🛒 Додати до кошика</button><button class="btn ghost" id="viewClose2">До каталогу</button></div>
  </div></div>
  ${reviewsHTML(p.id)}
  ${rel.length?`<h3 class="rel">Вам також сподобається</h3><div class="chips">${rel.map(r=>`<a class="chip" data-view="${r.id}">${thumb(r)} ${esc(r.name)}</a>`).join('')}</div>`:''}`;
  $('viewModal').classList.add('open');if(!keep)$('viewBox').scrollTop=0;
}
function viewClick(t){
  if(t.id==='viewClose'||t.id==='viewClose2'||t===$('viewModal')){$('viewModal').classList.remove('open');return}
  if(t.closest('button')||t.closest('#viewBox .vinfo'))return;
  const v=t.closest('[data-view]');if(v)openView(+v.dataset.view);
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.open').forEach(m=>m.classList.remove('open'))});


/* ===== Відгуки ===== */
const RK='pawperfect_reviews_v1';
const RSEED=[
[1,'Олена К.',5,'Пес із задоволенням їсть, а шерсть стала блискучою. Замовляємо вже втретє.','2026-10-04'],
[2,'Марина Т.',5,'Кошеня підросло на цьому кормі без проблем із травленням. Дуже задоволені.','2026-09-21'],
[5,'Віталій Р.',5,'Папуги в захваті, суміш свіжа й без пилу.','2026-09-12'],
[9,'Андрій П.',4,'Якісний склад, кіт їсть із апетитом. Трохи дорожчий за інші, але воно того варте.','2026-10-18'],
[13,'Ірина С.',5,'М’який і гарно пошитий. Кішка зайняла лежак у перший же день.','2026-10-27'],
[14,'Максим Л.',5,'Міцний м’яч: пес гризе його вже пів року, і жодної подряпини.','2026-10-30'],
[15,'Наталя В.',4,'Стійка стабільна, кіт точить кігті тільки на ній. Диван урятовано!','2026-10-09'],
[17,'Оксана Д.',5,'Зручна переноска з гарною вентиляцією. До ветеринара їздили без стресу.','2026-11-02'],
[20,'Катерина Б.',4,'Клітка простора та легко збирається. Хом’як задоволений.','2026-08-29'],
[21,'Софія М.',4,'Приємний запах, шерсть після миття м’яка. Пес більше не боїться купання.','2026-10-14'],
[23,'Тетяна Ю.',5,'Швидка доставка, препарат оригінальний. Блохи зникли.','2026-09-30'],
[24,'Дмитро Г.',5,'Линька зменшилась суттєво. Найкраща щітка з усіх, що ми пробували.','2026-11-05']
];
let R=null;try{R=JSON.parse(localStorage.getItem(RK)||'null')}catch(e){}
if(!Array.isArray(R))R=RSEED.map((s,i)=>({id:i+1,pid:s[0],name:s[1],rating:s[2],text:s[3],date:s[4]}));
const saveR=()=>{try{localStorage.setItem(RK,JSON.stringify(R))}catch(e){}};
let rvStar=0;
const stars=n=>'★'.repeat(n)+'☆'.repeat(5-n);
const fmtD=d=>{const x=new Date(d);return isNaN(x)?'':x.toLocaleDateString('uk-UA',{day:'numeric',month:'long',year:'numeric'})};
const avgOf=l=>l.reduce((s,r)=>s+r.rating,0)/l.length;
function ratingLine(pid){
  const l=R.filter(r=>r.pid===pid);
  return l.length?`<div class="rate"><span class="st">★</span><b>${avgOf(l).toFixed(1)}</b><span class="meta">(відгуків: ${l.length})</span></div>`:'<div class="rate meta">Ще немає відгуків</div>';
}
function reviewsHTML(pid){
  const l=R.filter(r=>r.pid===pid);
  return `<section class="revs"><h3 class="rel">Відгуки (${l.length})</h3>
  ${l.length?`<div class="rate big"><span class="st">★</span><b>${avgOf(l).toFixed(1)}</b><span class="meta">із 5</span></div>`:''}
  ${l.map(r=>`<div class="rv2"><div class="rvh"><b>${esc(r.name)}</b><span class="st">${stars(r.rating)}</span><span class="meta">${fmtD(r.date)}</span></div><p>${esc(r.text)}</p></div>`).join('')||'<p class="meta">Відгуків ще немає — будьте першим!</p>'}
  <div class="rform"><h4>Залишити відгук</h4>
  <div class="stp">${[1,2,3,4,5].map(n=>`<button type="button" class="star" data-star="${n}" aria-label="Оцінка ${n}">★</button>`).join('')}</div>
  <input id="rv-name" placeholder="Ваше ім’я" maxlength="40"><textarea id="rv-text" rows="3" placeholder="Ваш відгук" maxlength="500"></textarea>
  <p class="meta" id="rv-err" style="color:#c0392b;margin:0"></p>
  <button class="btn" id="revSend" data-pid="${pid}">Надіслати відгук</button></div></section>`;
}
function homeReviews(){
  const l=R.filter(r=>P.some(p=>p.id===r.pid)).sort((a,b)=>String(b.date).localeCompare(String(a.date))||b.id-a.id);
  if(!l.length)return '';
  return `<section id="revHome"><h2>Відгуки покупців</h2><p class="meta" style="margin:-8px 0 16px"><span class="st">★</span> <b>${avgOf(l).toFixed(1)}</b> із 5 · відгуків: ${l.length}</p>
  <div class="rgrid">${l.slice(0,6).map(r=>{const p=P.find(x=>x.id===r.pid);return `<div class="rv" data-view="${p.id}"><div class="st">${stars(r.rating)}</div><p>“${esc(r.text)}”</p><div class="rvf"><b>${esc(r.name)}</b><span class="meta">${esc(p.name)}</span></div></div>`}).join('')}</div></section>`;
}
function revClick(t){
  const b=t.closest('[data-star]');
  if(b){rvStar=+b.dataset.star;document.querySelectorAll('.star').forEach(s=>s.classList.toggle('on',+s.dataset.star<=rvStar))}
  if(t.id==='revSend'){
    const name=$('rv-name').value.trim(),text=$('rv-text').value.trim(),pid=+t.dataset.pid;
    if(!rvStar||name.length<2||text.length<5){$('rv-err').textContent='Оберіть оцінку, вкажіть ім’я та напишіть відгук (мінімум 5 символів).';return}
    R.unshift({id:Date.now(),pid,name,rating:rvStar,text,date:new Date().toISOString().slice(0,10)});
    saveR();openView(pid,true);
    if($('grid'))drawGrid();else if($('revHome'))$('revHome').outerHTML=homeReviews();
    toast('Дякуємо за відгук!');
  }
}


/* ===== Адмін-панель (пароль + керування товарами й замовленнями) ===== */
/* УВАГА: це клієнтський захист без сервера. Він ховає інтерфейс, але не є справжньою безпекою. */
const AK='pawperfect_admin_hash',DEF_HASH='a14f3ca503da5c8ba59f0515d55b7598a26046976ba292c88755d7fc32c678aa';
const ST=['Нове','В обробці','Відправлено','Виконано','Скасовано'];
function sha256(msg){
  const rr=(v,a)=>(v>>>a)|(v<<(32-a));
  const b=new TextEncoder().encode(msg),K=[],H=[];let pc=0;
  for(let c=2;pc<64;c++){let p=true;for(let d=2;d*d<=c;d++)if(c%d===0){p=false;break}
    if(p){if(pc<8)H[pc]=(Math.pow(c,.5)%1*4294967296)|0;K[pc++]=(Math.pow(c,1/3)%1*4294967296)|0}}
  const l=b.length,n=((l+8)>>6)+1,w=new Array(n*16).fill(0);
  for(let i=0;i<l;i++)w[i>>2]|=b[i]<<(24-(i%4)*8);
  w[l>>2]|=0x80<<(24-(l%4)*8);w[n*16-1]=l*8;
  for(let j=0;j<w.length;j+=16){
    const x=w.slice(j,j+16),h=H.slice(0);
    for(let i=0;i<64;i++){
      if(i>=16){const a=x[i-15],c=x[i-2];x[i]=(x[i-16]+(rr(a,7)^rr(a,18)^(a>>>3))+x[i-7]+(rr(c,17)^rr(c,19)^(c>>>10)))|0}
      const e=h[4],a=h[0];
      const t1=(h[7]+(rr(e,6)^rr(e,11)^rr(e,25))+((e&h[5])^(~e&h[6]))+K[i]+x[i])|0;
      const t2=((rr(a,2)^rr(a,13)^rr(a,22))+((a&h[1])^(a&h[2])^(h[1]&h[2])))|0;
      h.pop();h.unshift((t1+t2)|0);h[4]=(h[4]+t1)|0;
    }
    for(let i=0;i<8;i++)H[i]=(H[i]+h[i])|0;
  }
  return H.map(v=>(v>>>0).toString(16).padStart(8,'0')).join('');
}
let admFlag=false,admTab='orders',fails=0,lockUntil=0;
const ordF={q:'',st:''},pf={q:'',c:''};
const isAdm=()=>{try{return admFlag||sessionStorage.getItem('pp_admin')==='1'}catch(e){return admFlag}};
const setAdm=v=>{admFlag=v;try{v?sessionStorage.setItem('pp_admin','1'):sessionStorage.removeItem('pp_admin')}catch(e){}};
const adminHash=()=>{try{return localStorage.getItem(AK)||DEF_HASH}catch(e){return DEF_HASH}};
const loadOrders=()=>{try{const l=JSON.parse(localStorage.getItem(OK)||'[]');return Array.isArray(l)?l:[]}catch(e){return []}};
const saveOrders=l=>{try{localStorage.setItem(OK,JSON.stringify(l))}catch(e){}};
const money=n=>Number(n||0).toLocaleString('uk-UA')+' ₴';
const odate=o=>new Date(o.date||o.id).toLocaleString('uk-UA',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'});

function admin(){
  if(!isAdm()){
    $('app').innerHTML=`<div class="login"><h1>Вхід для адміністратора</h1><p class="meta" style="margin:0">Введіть пароль, щоб керувати товарами та замовленнями.</p><input id="adm-pass" type="password" placeholder="Пароль" autocomplete="current-password"><p class="meta" id="adm-err" style="color:#c0392b;margin:0"></p><button class="btn" id="adm-login">Увійти</button><a href="#home" class="meta">← На головну</a></div>`;
    return;
  }
  $('app').innerHTML=`<div class="top"><h1>Адмін-панель</h1><button class="btn ghost sm" id="adm-out">Вийти</button></div>
  <div class="stats" id="adm-stats"></div>
  <div class="tabs">${[['orders','Замовлення'],['products','Товари'],['settings','Налаштування']].map(([k,n])=>`<button class="tab ${admTab===k?'on':''}" data-tab="${k}">${n}</button>`).join('')}</div>
  <div id="adm-body"></div>`;
  admStats();
  ({orders:admOrders,products:admProducts,settings:admSettings})[admTab]();
}
function admLogin(){
  const err=t=>{$('adm-err').textContent=t};
  if(Date.now()<lockUntil){err('Забагато спроб. Спробуйте через '+Math.ceil((lockUntil-Date.now())/1000)+' с.');return}
  if(sha256($('adm-pass').value)===adminHash()){fails=0;setAdm(true);admin()}
  else{fails++;if(fails>=5){lockUntil=Date.now()+60000;fails=0}err('Невірний пароль.')}
}
function admStats(){
  const o=loadOrders(),rev=o.filter(x=>x.status!=='Скасовано').reduce((s,x)=>s+(x.sum||0),0);
  $('adm-stats').innerHTML=[['Замовлень',o.length],['Нових',o.filter(x=>(x.status||'Нове')==='Нове').length],['Виручка',money(rev)],['Товарів',P.length]].map(([a,b])=>`<div class="stat"><span class="meta">${a}</span><b>${b}</b></div>`).join('');
}
function admOrders(){
  $('adm-body').innerHTML=`<div class="bar adm-bar"><input id="of-q" placeholder="Пошук: №, ім’я, телефон" value="${esc(ordF.q)}"><select id="of-st"><option value="">Усі статуси</option>${ST.map(s=>`<option ${ordF.st===s?'selected':''}>${s}</option>`).join('')}</select><button class="btn alt sm" id="of-csv">Експорт CSV</button></div><div id="of-list"></div>`;
  admOrderList();
}
function admOrderList(){
  const q=ordF.q.trim().toLowerCase();
  const l=loadOrders().filter(o=>(!ordF.st||(o.status||'Нове')===ordF.st)&&(!q||[String(o.id).slice(-6),o.name,o.phone].some(v=>String(v||'').toLowerCase().includes(q)))).sort((a,b)=>b.id-a.id);
  $('of-list').innerHTML=l.length?l.map(o=>{const s=o.status||'Нове';return `<article class="ord"><div class="oh"><b>№${String(o.id).slice(-6)}</b><span class="meta">${odate(o)}</span><span class="pill st${ST.indexOf(s)}">${s}</span><b class="price">${money(o.sum)}</b></div>
  <div class="om"><b>${esc(o.name)}</b> · <a href="tel:${esc(o.phone)}">${esc(o.phone)}</a><br><span class="meta">${esc(o.delivery)}${o.addr?' · '+esc(o.addr):''} · ${esc(o.pay)}</span></div>
  <details><summary>Склад замовлення (${(o.items||[]).length})</summary><ul>${(o.items||[]).map(i=>`<li>${esc(i.name)} × ${i.qty} — ${money(i.price*i.qty)}</li>`).join('')}</ul>${o.note?`<p class="meta">Коментар: ${esc(o.note)}</p>`:''}</details>
  <div class="oa"><select data-ost="${o.id}">${ST.map(x=>`<option ${x===s?'selected':''}>${x}</option>`).join('')}</select><button class="btn ghost sm" data-odel="${o.id}">Видалити</button></div></article>`}).join(''):'<div class="empty">Замовлень не знайдено</div>';
}
function admProducts(){
  $('adm-body').innerHTML=`<div class="bar adm-bar"><input id="pf-q" placeholder="Пошук товару…" value="${esc(pf.q)}"><select id="pf-c"><option value="">Усі категорії</option>${CATS.map(c=>`<option ${pf.c===c?'selected':''}>${c}</option>`).join('')}</select><button class="btn sm" id="pf-add">+ Додати товар</button></div>
  <div class="tw"><table class="tbl"><thead><tr><th></th><th>Назва</th><th>Категорія</th><th>Виробник</th><th>Ціна, ₴</th><th></th></tr></thead><tbody id="admTbl"></tbody></table></div>`;
  admProdRows();
}
function admProdRows(){
  const q=pf.q.trim().toLowerCase();
  const l=P.filter(p=>(!pf.c||p.cat===pf.c)&&(!q||[p.name,p.brand,p.cat].some(v=>String(v).toLowerCase().includes(q))));
  $('admTbl').innerHTML=l.map(p=>`<tr><td><div class="cth">${thumb(p)}</div></td><td><b>${esc(p.name)}</b></td><td>${esc(p.cat)}</td><td>${esc(p.brand)}</td><td><input class="pin" type="number" min="0" value="${p.price}" data-pp="${p.id}"></td><td class="tr"><button class="btn alt sm" data-edit="${p.id}">Редагувати</button> <button class="btn ghost sm" data-del="${p.id}">Видалити</button></td></tr>`).join('')||'<tr><td colspan="6" class="empty">Нічого не знайдено</td></tr>';
}
function admSettings(){
  $('adm-body').innerHTML=`<div class="login" style="margin:10px 0;text-align:left"><h3>Змінити пароль</h3><input id="pw-new" type="password" placeholder="Новий пароль (мін. 6 символів)" autocomplete="new-password"><input id="pw-new2" type="password" placeholder="Повторіть пароль" autocomplete="new-password"><p class="meta" id="pw-msg" style="color:#c0392b;margin:0"></p><button class="btn" id="pw-save">Зберегти пароль</button></div>`;
}
function changePw(){
  const a=$('pw-new').value,b=$('pw-new2').value,m=$('pw-msg');m.style.color='#c0392b';
  if(a.length<6){m.textContent='Пароль має містити щонайменше 6 символів.';return}
  if(a!==b){m.textContent='Паролі не збігаються.';return}
  try{localStorage.setItem(AK,sha256(a))}catch(e){m.textContent='Не вдалося зберегти пароль.';return}
  $('pw-new').value=$('pw-new2').value='';m.style.color='#2e7d32';m.textContent='Пароль змінено.';
}
function exportCsv(){
  const q=s=>'"'+String(s??'').replace(/"/g,'""')+'"';
  const rows=[['№','Дата','Ім’я','Телефон','Адреса','Доставка','Оплата','Статус','Сума, ₴','Товари','Коментар']].concat(loadOrders().map(o=>[String(o.id).slice(-6),odate(o),o.name,o.phone,o.addr,o.delivery,o.pay,o.status||'Нове',o.sum,(o.items||[]).map(i=>i.name+' × '+i.qty).join('; '),o.note]));
  const blob=new Blob(['\ufeff'+rows.map(r=>r.map(q).join(';')).join('\r\n')],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='orders.csv';a.click();
}
function admClick(t){
  const d=t.dataset;
  if(t.id==='adm-login')admLogin();
  if(t.id==='adm-out'){setAdm(false);admin()}
  if(d.tab){admTab=d.tab;admin()}
  if(t.id==='pf-add')openForm();
  if(t.id==='of-csv')exportCsv();
  if(t.id==='pw-save')changePw();
  if(d.odel&&confirm('Видалити це замовлення?')){saveOrders(loadOrders().filter(o=>String(o.id)!==d.odel));admStats();admOrderList()}
}
document.addEventListener('input',e=>{const t=e.target;
  if(t.id==='of-q'){ordF.q=t.value;admOrderList()}
  if(t.id==='pf-q'){pf.q=t.value;admProdRows()}});
document.addEventListener('change',e=>{const t=e.target,d=t.dataset;
  if(t.id==='of-st'){ordF.st=t.value;admOrderList()}
  if(t.id==='pf-c'){pf.c=t.value;admProdRows()}
  if(d.ost){const l=loadOrders(),o=l.find(x=>String(x.id)===d.ost);if(o){o.status=t.value;saveOrders(l);admStats();admOrderList()}}
  if(d.pp){const p=P.find(x=>String(x.id)===d.pp);if(p&&t.value!==''&&+t.value>=0){p.price=+t.value;save();admStats();toast('Ціну оновлено')}}});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='adm-pass')admLogin()});

/* Старт — після оголошення всіх модулів */
route();
