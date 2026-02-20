// sidebar.js

// ── SVG 아이콘 라이브러리 ──────────────────────────────────────
const ICONS = {
  home:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,
  doc:        `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  target:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  code:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  sliders:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  user:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  shuffle:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  list:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  refresh:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>`,
  brain:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9.5 2a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 1 4.5V18a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V6.5A2.5 2.5 0 0 1 9.5 2z"/><path d="M6 9.5a2.5 2.5 0 0 0 0 5"/><path d="M18 9.5a2.5 2.5 0 0 1 0 5"/></svg>`,
  gamepad:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/></svg>`,
  search:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  check:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="20 6 9 17 4 12"/></svg>`,
  hash:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>`,
  mirror:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,
  layers:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  settings:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  infinity:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg>`,
  map:        `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
  star:       `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  focus:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M3 9V5a2 2 0 0 1 2-2h4"/><path d="M21 9V5a2 2 0 0 0-2-2h-4"/><path d="M3 15v4a2 2 0 0 0 2 2h4"/><path d="M21 15v4a2 2 0 0 1-2 2h-4"/></svg>`,
  flower:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 7.794M12 7.5a4.5 4.5 0 1 0-4.5 7.794M12 7.5V9"/><circle cx="12" cy="14" r="2.5"/><path d="M12 16.5V21"/></svg>`,
  trend:      `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  bridge:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 18V12a10 10 0 0 1 20 0v6"/><path d="M2 12h20"/><path d="M7 12v6"/><path d="M17 12v6"/><path d="M12 7v5"/></svg>`,
};

// ── 네비게이션 데이터 ──────────────────────────────────────────
const NAV_DATA = [
  {
    type: 'home',
    items: [
      { page: 'index.html', label: '홈', icon: 'home', num: '' }
    ]
  },
  {
    type: 'basic',
    groupLabel: '기본',
    items: [
      { page: 'pages/p1.html', label: '프롬프트의 세 가지 유형', icon: 'doc',     num: '01', badge: 'basic' },
      { page: 'pages/p2.html', label: '제로샷 / 원샷 / 퓨샷',    icon: 'target',  num: '02', badge: 'basic' },
      { page: 'pages/p3.html', label: '마크다운 프롬프트 작성법', icon: 'code',    num: '03', badge: 'basic' },
      { page: 'pages/p4.html', label: '표현 강도 · 우선순위 · 톤',icon: 'sliders', num: '04', badge: 'basic' },
    ]
  },
  {
    type: 'pattern',
    groupLabel: '패턴',
    items: [
      { page: 'pages/p5.html',  label: '페르소나 패턴',        icon: 'user',     num: '05', badge: 'pattern' },
      { page: 'pages/p6.html',  label: '이용자 페르소나 패턴', icon: 'users',    num: '06', badge: 'pattern' },
      { page: 'pages/p7.html',  label: '대안 접근법 패턴',     icon: 'shuffle',  num: '07', badge: 'pattern' },
      { page: 'pages/p8.html',  label: '레시피 패턴',          icon: 'list',     num: '08', badge: 'pattern' },
      { page: 'pages/p9.html',  label: '뒤집힌 상호작용 패턴', icon: 'refresh',  num: '09', badge: 'pattern' },
      { page: 'pages/p10.html', label: '인지 검증자 패턴',     icon: 'brain',    num: '10', badge: 'pattern' },
      { page: 'pages/p11.html', label: '게임 플레이 패턴',     icon: 'gamepad',  num: '11', badge: 'pattern' },
      { page: 'pages/p12.html', label: '질문 개선 패턴',       icon: 'search',   num: '12', badge: 'pattern' },
      { page: 'pages/p13.html', label: '팩트체크 목록 패턴',   icon: 'check',    num: '13', badge: 'pattern' },
      { page: 'pages/p14.html', label: '메타언어 생성 패턴',   icon: 'hash',     num: '14', badge: 'pattern' },
      { page: 'pages/p15.html', label: '리플렉션 패턴',        icon: 'mirror',   num: '15', badge: 'pattern' },
      { page: 'pages/p16.html', label: '아웃라인 확장 패턴',   icon: 'layers',   num: '16', badge: 'pattern' },
      { page: 'pages/p17.html', label: '컨텍스트 관리자 패턴', icon: 'settings', num: '17', badge: 'pattern' },
      { page: 'pages/p18.html', label: '무한 생성 패턴',       icon: 'infinity', num: '18', badge: 'pattern' },
    ]
  },
  {
    type: 'framework',
    groupLabel: '프레임워크',
    items: [
      { page: 'pages/f1.html', label: '5W1H',    icon: 'map',    num: 'F1', badge: 'framework' },
      { page: 'pages/f2.html', label: 'CO-STAR', icon: 'star',   num: 'F2', badge: 'framework' },
      { page: 'pages/f3.html', label: 'FOCUS',   icon: 'focus',  num: 'F3', badge: 'framework' },
      { page: 'pages/f4.html', label: 'ROSES',   icon: 'flower', num: 'F4', badge: 'framework' },
      { page: 'pages/f5.html', label: 'RISEN',   icon: 'trend',  num: 'F5', badge: 'framework' },
      { page: 'pages/f6.html', label: 'BAB',     icon: 'bridge', num: 'F6', badge: 'framework' },
    ]
  }
];

// ── 렌더링 ─────────────────────────────────────────────────────
function renderSidebar(currentPage) {
  const isSubPage = currentPage.startsWith('pages/');
  const root = isSubPage ? '../' : '';
  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML =
    '<div class="sidebar-top">' +
      '<a href="' + root + 'index.html" class="logo-link">' +
        '<div class="logo-mark">' + ICONS.doc + '</div>' +
        '<span class="logo-text">프롬프트 가이드</span>' +
      '</a>' +
      '<div class="search-box">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '<input type="text" id="searchInput" placeholder="검색..." oninput="handleSearch(this.value)">' +
      '</div>' +
    '</div>' +
    '<nav class="nav-scroll" id="navList">' + buildNavHTML(currentPage, root) + '</nav>' +
    '<div class="sidebar-footer">' +
      '<button class="filter-chip active" id="chip-all"       onclick="filterGroup(\'all\',this)">전체</button>' +
      '<button class="filter-chip" id="chip-basic"            onclick="filterGroup(\'basic\',this)">기본</button>' +
      '<button class="filter-chip" id="chip-pattern"          onclick="filterGroup(\'pattern\',this)">패턴</button>' +
      '<button class="filter-chip" id="chip-framework"        onclick="filterGroup(\'framework\',this)">프레임</button>' +
    '</div>';
}

function buildNavHTML(currentPage, root) {
  let html = '';
  for (const group of NAV_DATA) {
    html += '<div class="nav-group"' + (group.type !== 'home' ? ' data-group="' + group.type + '"' : '') + '>';
    if (group.groupLabel) {
      html += '<div class="nav-group-label">' + group.groupLabel + '</div>';
    }
    for (const item of group.items) {
      const href  = root + item.page;
      const active = item.page === currentPage;
      const svgIcon = ICONS[item.icon] || ICONS.doc;

      let badgeLabel = '';
      if (item.badge === 'basic')     badgeLabel = '기본';
      else if (item.badge === 'pattern')   badgeLabel = '패턴';
      else if (item.badge === 'framework') badgeLabel = 'FW';

      const badgeHTML = item.badge
        ? '<span class="nav-badge badge-' + item.badge + '">' + badgeLabel + '</span>'
        : '';

      const numHTML = item.num
        ? '<span class="nav-num">' + item.num + '</span>'
        : '';

      html +=
        '<a class="nav-item' + (active ? ' active' : '') + '" href="' + href + '"' +
        ' data-tags="' + (item.tags || item.label.toLowerCase()) + '">' +
        '<span class="nav-icon">' + svgIcon + '</span>' +
        numHTML +
        '<span class="nav-label">' + item.label + '</span>' +
        badgeHTML +
        '</a>';
    }
    html += '</div>';
  }
  html += '<div id="noResult">검색 결과 없음</div>';
  return html;
}

// ── 필터 / 검색 ───────────────────────────────────────────────
function filterGroup(group, btn) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.nav-group').forEach(g => {
    const gType = g.dataset.group;
    if (!gType) { g.style.display = ''; return; }
    g.style.display = (group === 'all' || group === gType) ? '' : 'none';
  });
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.nav-item').forEach(n => n.style.display = '');
  document.getElementById('noResult').style.display = 'none';
}

function handleSearch(q) {
  const query = q.trim().toLowerCase();
  document.querySelectorAll('.nav-group').forEach(g => g.style.display = '');
  const items = document.querySelectorAll('.nav-item');
  let any = false;
  items.forEach(item => {
    const tags  = (item.dataset.tags || '').toLowerCase();
    const label = item.querySelector('.nav-label')?.textContent.toLowerCase() || '';
    if (label === '홈') { item.style.display = query ? 'none' : ''; return; }
    const match = !query || tags.includes(query) || label.includes(query);
    item.style.display = match ? '' : 'none';
    if (match) any = true;
  });
  document.getElementById('noResult').style.display = (query && !any) ? 'block' : 'none';
}

// ── 복사 버튼 ─────────────────────────────────────────────────
function copyCode(btn) {
  const pre = btn.previousElementSibling;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '복사됨';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 1800);
  });
}