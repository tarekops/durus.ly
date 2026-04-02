
function renderMutoonTable(data){
  const wrap = document.querySelector('#mutoon-list');
  if(!wrap) return;
  if(!Array.isArray(data) || !data.length){
    wrap.innerHTML = '<tr><td colspan="3"><div class="empty">لا توجد متون مضافة حالياً.</div></td></tr>';
    return;
  }
  wrap.innerHTML = data.map(item => {
    const actions = item.file
      ? `<div class="actions"><a class="btn btn-primary" href="${item.file}" target="_blank">تحميل</a></div>`
      : `<span class="muted">سيضاف لاحقًا</span>`;
    return `
      <tr data-filter-card data-keywords="${item.keywords || ''} ${item.title || ''} ${item.category || ''}">
        <td class="title-cell">
          <strong>${item.title || ''}</strong>
          <small>${item.description || ''}</small>
        </td>
        <td>${item.category || ''}</td>
        <td class="actions-cell">${actions}</td>
      </tr>
    `;
  }).join('');
}

async function loadMutoon(){
  const wrap = document.querySelector('#mutoon-list');
  if(!wrap) return;

  if (Array.isArray(window.MUTOON_DATA)) {
    renderMutoonTable(window.MUTOON_DATA);
    return;
  }

  try{
    const res = await fetch('assets/data/mutoon.json');
    const data = await res.json();
    renderMutoonTable(data);
  }catch(err){
    console.error(err);
    wrap.innerHTML = '<tr><td colspan="3"><div class="empty">تعذر تحميل قائمة المتون. ارفع الموقع على الاستضافة أو استخدم النسخة المحدثة التي تعمل محلياً أيضاً.</div></td></tr>';
  }
}
document.addEventListener('DOMContentLoaded', loadMutoon);
