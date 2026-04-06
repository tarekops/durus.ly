
function renderLessons(data){
  const wrap = document.querySelector('#lessons-list');
  if(!wrap) return;
  if(!Array.isArray(data) || !data.length){
    wrap.innerHTML = '<div class="empty">لا توجد دروس مضافة حالياً.</div>';
    return;
  }
  wrap.innerHTML = data.map(item => `
    <article class="card resource-card" data-filter-card data-keywords="${item.title || ''} ${item.teacher || ''} ${item.type || ''}">
      <h3>${item.title || ''}</h3>
      <div class="meta">
        ${item.type ? `<span class="badge">${item.type}</span>` : ''}
        ${item.teacher ? `<span class="badge">${item.teacher}</span>` : ''}
      </div>
      <p>${item.description || ''}</p>
      <div class="actions">
        <a class="btn btn-primary" href="${item.url || '#'}" target="_blank">فتح الدرس</a>
      </div>
    </article>
  `).join('');
}

async function loadLessons(){
  const wrap = document.querySelector('#lessons-list');
  if(!wrap) return;

  if (Array.isArray(window.LESSONS_DATA)) {
    renderLessons(window.LESSONS_DATA);
    return;
  }

  try{
    const res = await fetch('assets/data/lessons.json');
    const data = await res.json();
    renderLessons(data);
  }catch(err){
    console.error(err);
    wrap.innerHTML = '<div class="empty">تعذر تحميل قائمة الدروس. ارفع الموقع على الاستضافة أو استخدم النسخة المحدثة التي تعمل محلياً أيضاً.</div>';
  }
}
document.addEventListener('DOMContentLoaded', loadLessons);
