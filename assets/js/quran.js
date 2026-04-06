
const surahData = [
  {
    "n": 1,
    "name": "الفاتحة",
    "page": 1
  },
  {
    "n": 2,
    "name": "البقرة",
    "page": 2
  },
  {
    "n": 3,
    "name": "آل عمران",
    "page": 50
  },
  {
    "n": 4,
    "name": "النساء",
    "page": 77
  },
  {
    "n": 5,
    "name": "المائدة",
    "page": 106
  },
  {
    "n": 6,
    "name": "الأنعام",
    "page": 128
  },
  {
    "n": 7,
    "name": "الأعراف",
    "page": 151
  },
  {
    "n": 8,
    "name": "الأنفال",
    "page": 177
  },
  {
    "n": 9,
    "name": "التوبة",
    "page": 187
  },
  {
    "n": 10,
    "name": "يونس",
    "page": 208
  },
  {
    "n": 11,
    "name": "هود",
    "page": 221
  },
  {
    "n": 12,
    "name": "يوسف",
    "page": 235
  },
  {
    "n": 13,
    "name": "الرعد",
    "page": 249
  },
  {
    "n": 14,
    "name": "إبراهيم",
    "page": 255
  },
  {
    "n": 15,
    "name": "الحجر",
    "page": 262
  },
  {
    "n": 16,
    "name": "النحل",
    "page": 267
  },
  {
    "n": 17,
    "name": "الإسراء",
    "page": 282
  },
  {
    "n": 18,
    "name": "الكهف",
    "page": 293
  },
  {
    "n": 19,
    "name": "مريم",
    "page": 305
  },
  {
    "n": 20,
    "name": "طه",
    "page": 312
  },
  {
    "n": 21,
    "name": "الأنبياء",
    "page": 322
  },
  {
    "n": 22,
    "name": "الحج",
    "page": 332
  },
  {
    "n": 23,
    "name": "المؤمنون",
    "page": 342
  },
  {
    "n": 24,
    "name": "النور",
    "page": 350
  },
  {
    "n": 25,
    "name": "الفرقان",
    "page": 359
  },
  {
    "n": 26,
    "name": "الشعراء",
    "page": 367
  },
  {
    "n": 27,
    "name": "النمل",
    "page": 377
  },
  {
    "n": 28,
    "name": "القصص",
    "page": 385
  },
  {
    "n": 29,
    "name": "العنكبوت",
    "page": 396
  },
  {
    "n": 30,
    "name": "الروم",
    "page": 404
  },
  {
    "n": 31,
    "name": "لقمان",
    "page": 411
  },
  {
    "n": 32,
    "name": "السجدة",
    "page": 415
  },
  {
    "n": 33,
    "name": "الأحزاب",
    "page": 418
  },
  {
    "n": 34,
    "name": "سبأ",
    "page": 428
  },
  {
    "n": 35,
    "name": "فاطر",
    "page": 434
  },
  {
    "n": 36,
    "name": "يس",
    "page": 440
  },
  {
    "n": 37,
    "name": "الصافات",
    "page": 446
  },
  {
    "n": 38,
    "name": "ص",
    "page": 453
  },
  {
    "n": 39,
    "name": "الزمر",
    "page": 458
  },
  {
    "n": 40,
    "name": "غافر",
    "page": 467
  },
  {
    "n": 41,
    "name": "فصلت",
    "page": 477
  },
  {
    "n": 42,
    "name": "الشورى",
    "page": 483
  },
  {
    "n": 43,
    "name": "الزخرف",
    "page": 489
  },
  {
    "n": 44,
    "name": "الدخان",
    "page": 496
  },
  {
    "n": 45,
    "name": "الجاثية",
    "page": 499
  },
  {
    "n": 46,
    "name": "الأحقاف",
    "page": 502
  },
  {
    "n": 47,
    "name": "محمد",
    "page": 507
  },
  {
    "n": 48,
    "name": "الفتح",
    "page": 511
  },
  {
    "n": 49,
    "name": "الحجرات",
    "page": 515
  },
  {
    "n": 50,
    "name": "ق",
    "page": 518
  },
  {
    "n": 51,
    "name": "الذاريات",
    "page": 520
  },
  {
    "n": 52,
    "name": "الطور",
    "page": 523
  },
  {
    "n": 53,
    "name": "النجم",
    "page": 526
  },
  {
    "n": 54,
    "name": "القمر",
    "page": 528
  },
  {
    "n": 55,
    "name": "الرحمن",
    "page": 531
  },
  {
    "n": 56,
    "name": "الواقعة",
    "page": 534
  },
  {
    "n": 57,
    "name": "الحديد",
    "page": 537
  },
  {
    "n": 58,
    "name": "المجادلة",
    "page": 542
  },
  {
    "n": 59,
    "name": "الحشر",
    "page": 545
  },
  {
    "n": 60,
    "name": "الممتحنة",
    "page": 549
  },
  {
    "n": 61,
    "name": "الصف",
    "page": 551
  },
  {
    "n": 62,
    "name": "الجمعة",
    "page": 553
  },
  {
    "n": 63,
    "name": "المنافقون",
    "page": 554
  },
  {
    "n": 64,
    "name": "التغابن",
    "page": 556
  },
  {
    "n": 65,
    "name": "الطلاق",
    "page": 558
  },
  {
    "n": 66,
    "name": "التحريم",
    "page": 560
  },
  {
    "n": 67,
    "name": "الملك",
    "page": 562
  },
  {
    "n": 68,
    "name": "القلم",
    "page": 564
  },
  {
    "n": 69,
    "name": "الحاقة",
    "page": 566
  },
  {
    "n": 70,
    "name": "المعارج",
    "page": 568
  },
  {
    "n": 71,
    "name": "نوح",
    "page": 570
  },
  {
    "n": 72,
    "name": "الجن",
    "page": 572
  },
  {
    "n": 73,
    "name": "المزمل",
    "page": 574
  },
  {
    "n": 74,
    "name": "المدثر",
    "page": 575
  },
  {
    "n": 75,
    "name": "القيامة",
    "page": 577
  },
  {
    "n": 76,
    "name": "الإنسان",
    "page": 578
  },
  {
    "n": 77,
    "name": "المرسلات",
    "page": 580
  },
  {
    "n": 78,
    "name": "النبأ",
    "page": 582
  },
  {
    "n": 79,
    "name": "النازعات",
    "page": 583
  },
  {
    "n": 80,
    "name": "عبس",
    "page": 585
  },
  {
    "n": 81,
    "name": "التكوير",
    "page": 586
  },
  {
    "n": 82,
    "name": "الانفطار",
    "page": 587
  },
  {
    "n": 83,
    "name": "المطففين",
    "page": 587
  },
  {
    "n": 84,
    "name": "الانشقاق",
    "page": 589
  },
  {
    "n": 85,
    "name": "البروج",
    "page": 590
  },
  {
    "n": 86,
    "name": "الطارق",
    "page": 591
  },
  {
    "n": 87,
    "name": "الأعلى",
    "page": 591
  },
  {
    "n": 88,
    "name": "الغاشية",
    "page": 592
  },
  {
    "n": 89,
    "name": "الفجر",
    "page": 593
  },
  {
    "n": 90,
    "name": "البلد",
    "page": 594
  },
  {
    "n": 91,
    "name": "الشمس",
    "page": 595
  },
  {
    "n": 92,
    "name": "الليل",
    "page": 595
  },
  {
    "n": 93,
    "name": "الضحى",
    "page": 596
  },
  {
    "n": 94,
    "name": "الشرح",
    "page": 596
  },
  {
    "n": 95,
    "name": "التين",
    "page": 597
  },
  {
    "n": 96,
    "name": "العلق",
    "page": 597
  },
  {
    "n": 97,
    "name": "القدر",
    "page": 598
  },
  {
    "n": 98,
    "name": "البينة",
    "page": 598
  },
  {
    "n": 99,
    "name": "الزلزلة",
    "page": 599
  },
  {
    "n": 100,
    "name": "العاديات",
    "page": 599
  },
  {
    "n": 101,
    "name": "القارعة",
    "page": 600
  },
  {
    "n": 102,
    "name": "التكاثر",
    "page": 600
  },
  {
    "n": 103,
    "name": "العصر",
    "page": 601
  },
  {
    "n": 104,
    "name": "الهمزة",
    "page": 601
  },
  {
    "n": 105,
    "name": "الفيل",
    "page": 601
  },
  {
    "n": 106,
    "name": "قريش",
    "page": 602
  },
  {
    "n": 107,
    "name": "الماعون",
    "page": 602
  },
  {
    "n": 108,
    "name": "الكوثر",
    "page": 602
  },
  {
    "n": 109,
    "name": "الكافرون",
    "page": 603
  },
  {
    "n": 110,
    "name": "النصر",
    "page": 603
  },
  {
    "n": 111,
    "name": "المسد",
    "page": 603
  },
  {
    "n": 112,
    "name": "الإخلاص",
    "page": 604
  },
  {
    "n": 113,
    "name": "الفلق",
    "page": 604
  },
  {
    "n": 114,
    "name": "الناس",
    "page": 604
  }
];

const quranState = {
  currentJuz: 1,
  currentPage: 1,
  useImage: true
};

const juzData = [
{juz:1,start:1,end:21,label:'الفاتحة - البقرة'},
{juz:2,start:22,end:41,label:'البقرة'},
{juz:3,start:42,end:61,label:'البقرة - آل عمران'},
{juz:4,start:62,end:81,label:'آل عمران - النساء'},
{juz:5,start:82,end:101,label:'النساء'},
{juz:6,start:102,end:121,label:'النساء - المائدة'},
{juz:7,start:122,end:141,label:'المائدة - الأنعام'},
{juz:8,start:142,end:161,label:'الأنعام - الأعراف'},
{juz:9,start:162,end:181,label:'الأعراف - الأنفال'},
{juz:10,start:182,end:201,label:'الأنفال - التوبة'},
{juz:11,start:202,end:221,label:'التوبة - يونس'},
{juz:12,start:222,end:241,label:'يونس - هود'},
{juz:13,start:242,end:261,label:'يوسف - إبراهيم'},
{juz:14,start:262,end:281,label:'الحجر - النحل'},
{juz:15,start:282,end:301,label:'الإسراء - الكهف'},
{juz:16,start:302,end:321,label:'الكهف - طه'},
{juz:17,start:322,end:341,label:'الأنبياء - الحج'},
{juz:18,start:342,end:361,label:'المؤمنون - الفرقان'},
{juz:19,start:362,end:381,label:'الفرقان - النمل'},
{juz:20,start:382,end:401,label:'النمل - العنكبوت'},
{juz:21,start:402,end:421,label:'العنكبوت - الأحزاب'},
{juz:22,start:422,end:441,label:'الأحزاب - يس'},
{juz:23,start:442,end:461,label:'يس - الزمر'},
{juz:24,start:462,end:481,label:'الزمر - فصلت'},
{juz:25,start:482,end:501,label:'فصلت - الجاثية'},
{juz:26,start:502,end:521,label:'الأحقاف - الذاريات'},
{juz:27,start:522,end:541,label:'الطور - الحديد'},
{juz:28,start:542,end:561,label:'المجادلة - التحريم'},
{juz:29,start:562,end:581,label:'جزء تبارك'},
{juz:30,start:582,end:604,label:'جزء عم'}
];

function q(sel) { return document.querySelector(sel); }
function pad3(num) { return String(num).padStart(3,'0'); }
function currentJuzData() { return juzData.find(j => j.juz === quranState.currentJuz) || juzData[0]; }
function pageImageUrl(page){ return `https://quran.ksu.edu.sa/png_big/${page}.png`; }

function preloadNearbyPages(page){
  [page-1, page+1].forEach(p => {
    if(p >= 1 && p <= 604){
      const img = new Image();
      img.src = pageImageUrl(p);
    }
  });
}

async function fetchPageText(page){
  const url = `https://api.alquran.cloud/v1/page/${page}/quran-uthmani`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('page fetch failed');
  return res.json();
}

function renderJuzIndex(){
  const wrap = q('#juz-index');
  if(!wrap) return;
  wrap.innerHTML = juzData.map(item => `
    <button class="juz-card" data-juz="${item.juz}">
      <div class="thumb"><img src="${pageImageUrl(item.start)}" loading="lazy" alt="أول صفحة من الجزء ${item.juz}"></div>
      <span class="num">الجزء ${item.juz}</span>
      <div class="juz-title">${item.label}</div>
      <div class="juz-range">من الصفحة ${item.start} إلى الصفحة ${item.end}</div>
    </button>
  `).join('');
  wrap.querySelectorAll('[data-juz]').forEach(btn => {
    btn.addEventListener('click', () => {
      quranState.currentJuz = Number(btn.dataset.juz);
      quranState.currentPage = currentJuzData().start;
      openReader();
    });
  });
}

function renderSurahIndex(){
  const wrap = q('#surah-index');
  if(!wrap) return;
  wrap.innerHTML = surahData.map(item => `
    <button class="juz-card" data-page="${item.page}" data-name="${item.name}">
      <div class="thumb"><img src="${pageImageUrl(item.page)}" loading="lazy" alt="أول صفحة من سورة ${item.name}"></div>
      <span class="num">سورة ${item.n}</span>
      <div class="juz-title">${item.name}</div>
      <div class="juz-range">تبدأ من الصفحة ${item.page}</div>
    </button>
  `).join('');
  wrap.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      quranState.currentPage = Number(btn.dataset.page);
      const found = juzData.find(j => quranState.currentPage >= j.start && quranState.currentPage <= j.end);
      if(found) quranState.currentJuz = found.juz;
      q('#meta-surah').textContent = btn.dataset.name || 'القرآن الكريم';
      openReader(btn.dataset.name || 'القرآن الكريم');
    });
  });
}

function setBrowseMode(mode){
  const juzIndex = q('#juz-index');
  const surahIndex = q('#surah-index');
  const juzBtn = q('#browse-juz');
  const surahBtn = q('#browse-surah');
  if(mode === 'surah'){
    if(juzIndex) juzIndex.style.display = 'none';
    if(surahIndex) surahIndex.style.display = '';
    if(juzBtn){ juzBtn.classList.remove('btn-primary'); juzBtn.classList.add('btn-secondary'); }
    if(surahBtn){ surahBtn.classList.remove('btn-secondary'); surahBtn.classList.add('btn-primary'); }
  } else {
    if(juzIndex) juzIndex.style.display = '';
    if(surahIndex) surahIndex.style.display = 'none';
    if(juzBtn){ juzBtn.classList.remove('btn-secondary'); juzBtn.classList.add('btn-primary'); }
    if(surahBtn){ surahBtn.classList.remove('btn-primary'); surahBtn.classList.add('btn-secondary'); }
  }
}

function updateMeta(){
  const juz = currentJuzData();
  q('#meta-juz').textContent = `الجزء ${juz.juz}`;
  q('#meta-page').textContent = `الصفحة ${quranState.currentPage}`;
  q('#meta-juz-inline').textContent = `الجزء ${juz.juz}`;
  q('#meta-page-inline').textContent = `الصفحة ${quranState.currentPage}`;
  q('#page-number').value = quranState.currentPage;
}

function showIndex(show=true){
  q('#index-view').style.display = show ? '' : 'none';
  q('#reader-view').style.display = show ? 'none' : '';
}

async function renderReader(selectedSurah=''){
  updateMeta();
  const frame = q('#page-host');
  frame.innerHTML = '<div class="empty">جاري تحميل الصفحة...</div>';

  if(quranState.useImage){
    frame.innerHTML = `
      <div class="quran-page-wrap">
        <div class="quran-image-frame">
          <img src="${pageImageUrl(quranState.currentPage)}" alt="صفحة القرآن ${quranState.currentPage}" loading="eager" decoding="async">
        </div>
      </div>
    `;
    if(selectedSurah) q('#meta-surah').textContent = selectedSurah;
    preloadNearbyPages(quranState.currentPage);
    return;
  }

  try{
    const payload = await fetchPageText(quranState.currentPage);
    const ayat = payload?.data?.ayahs || [];
    const first = ayat[0];
    const last = ayat[ayat.length - 1];
    const surahText = selectedSurah || (ayat.length ? `${first.surah.name}${last && last.surah.name !== first.surah.name ? ' - ' + last.surah.name : ''}` : 'القرآن الكريم');
    q('#meta-surah').textContent = surahText;
    frame.innerHTML = `<div class="quran-text">${ayat.map(a => `${a.text} ﴿${a.numberInSurah}﴾`).join(' ')}</div>`;
  }catch(err){
    console.error(err);
    frame.innerHTML = '<div class="empty">تعذر تحميل الصفحة الآن.</div>';
  }
}

function openReader(selectedSurah=''){
  showIndex(false);
  if(!selectedSurah) q('#meta-surah').textContent = 'القرآن الكريم';
  renderReader(selectedSurah);
}

document.addEventListener('DOMContentLoaded', () => {
  renderJuzIndex();
  renderSurahIndex();
  setBrowseMode('juz');

  q('#browse-juz')?.addEventListener('click', () => setBrowseMode('juz'));
  q('#browse-surah')?.addEventListener('click', () => setBrowseMode('surah'));
  q('#back-to-index')?.addEventListener('click', () => showIndex(true));
  q('#view-mode')?.addEventListener('change', (e) => {
    quranState.useImage = e.target.value === 'image';
    renderReader(q('#meta-surah')?.textContent || '');
  });
  q('#go-page')?.addEventListener('click', () => {
    const val = Number(q('#page-number').value);
    if(val >= 1 && val <= 604){
      quranState.currentPage = val;
      const found = juzData.find(j => val >= j.start && val <= j.end);
      if(found) quranState.currentJuz = found.juz;
      renderReader(q('#meta-surah')?.textContent || '');
    }
  });
  q('#prev-page')?.addEventListener('click', () => {
    if(quranState.currentPage > 1){
      quranState.currentPage--;
      const found = juzData.find(j => quranState.currentPage >= j.start && quranState.currentPage <= j.end);
      if(found) quranState.currentJuz = found.juz;
      renderReader(q('#meta-surah')?.textContent || '');
    }
  });
  q('#next-page')?.addEventListener('click', () => {
    if(quranState.currentPage < 604){
      quranState.currentPage++;
      const found = juzData.find(j => quranState.currentPage >= j.start && quranState.currentPage <= j.end);
      if(found) quranState.currentJuz = found.juz;
      renderReader(q('#meta-surah')?.textContent || '');
    }
  });
});
