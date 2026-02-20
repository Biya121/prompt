// sidebar.js — 공통 사이드바 렌더링 및 검색/필터 로직

const NAV_DATA = [
  {
    type: 'home',
    items: [
      { page: 'index.html', label: '홈', icon: '🏠', tags: '' }
    ]
  },
  {
    type: 'basic',
    groupLabel: '기본 섹션',
    items: [
      { page: 'pages/p1.html', label: '프롬프트의 세 가지 유형', icon: '📝', badge: 'basic', tags: '서술형 지침형 함수형 프롬프트 유형 맥락 규칙 구조 json 입력 출력' },
      { page: 'pages/p2.html', label: '제로샷 / 원샷 / 퓨샷', icon: '🎯', badge: 'basic', tags: '제로샷 원샷 퓨샷 few-shot 예시 hs code 분류' },
      { page: 'pages/p3.html', label: '마크다운 프롬프트 작성법', icon: '📐', badge: 'basic', tags: '마크다운 헤더 코드블럭 인용문 목록 표 굵게 기울임 fta 원산지 구조' },
      { page: 'pages/p4.html', label: '표현 강도 · 우선순위 · 톤', icon: '⚖️', badge: 'basic', tags: '강도 우선순위 톤 표현 중요도 절대 강조 권장 보고서 독자' },
    ]
  },
  {
    type: 'pattern',
    groupLabel: '패턴 섹션',
    items: [
      { page: 'pages/p5.html', label: '페르소나 패턴', icon: '🎭', badge: 'pattern', tags: '페르소나 역할 관세사 비평가 멀티 전문가 말투 배경 경력' },
      { page: 'pages/p6.html', label: '이용자 페르소나 패턴', icon: '👤', badge: 'pattern', tags: '이용자 페르소나 대상 맞춤 수출 담당자 대학생 체크리스트 블록체인' },
      { page: 'pages/p7.html', label: '대안 접근법 패턴', icon: '🔀', badge: 'pattern', tags: '대안 접근법 나열 비교 축 상황 역발상 의사결정 fastapi django flask' },
      { page: 'pages/p8.html', label: '레시피 패턴', icon: '📋', badge: 'pattern', tags: '레시피 단계 절차 목표 현재 스텝 step 순서 행동 지침 분기 클레임' },
      { page: 'pages/p9.html', label: '뒤집힌 상호작용 패턴', icon: '🔄', badge: 'pattern', tags: '뒤집힌 상호작용 질문 수집 역방향 정보 수집 수출 제안서 한번에' },
      { page: 'pages/p10.html', label: '인지 검증자 패턴', icon: '🧠', badge: 'pattern', tags: '인지 검증자 복잡 하위 질문 분해 통합 단계 판단 분석 베트남 법인' },
    ]
  }
];

function renderSidebar(currentPage) {
  // currentPage: e.g. 'index.html' or 'pages/p1.html'
  // Resolve relative root based on depth
  const isSubPage = currentPage.startsWith('pages/');
  const root = isSubPage ? '../' : '';

  const sidebar = document.getElementById('sidebar');

  // Build top
  sidebar.innerHTML = `
    <div class="sidebar-top">
      <div class="logo">
        <a href="${root}index.html" class="logo-link">
          <div class="logo-dot">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          </div>
          <span class="logo-text">프롬프트 가이드</span>
        </a>
      </div>
      <div class="search-box">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" id="searchInput" placeholder="검색..." oninput="handleSearch(this.value)">
      </div>
    </div>
    <nav class="nav-scroll" id="navList">${buildNavHTML(currentPage, root)}</nav>
    <div class="sidebar-footer">
      <button class="filter-chip active" id="chip-all" onclick="filterGroup('all',this)">전체</button>
      <button class="filter-chip" id="chip-basic" onclick="filterGroup('basic',this)">기본</button>
      <button class="filter-chip" id="chip-pattern" onclick="filterGroup('pattern',this)">패턴</button>
    </div>
  `;
}

function buildNavHTML(currentPage, root) {
  let html = '';
  for (const group of NAV_DATA) {
    html += `<div class="nav-group" ${group.type !== 'home' ? `data-group="${group.type}"` : ''}>`;
    if (group.groupLabel) {
      html += `<div class="nav-group-label">${group.groupLabel}</div>`;
    }
    for (const item of group.items) {
      const href = root + item.page;
      const isActive = item.page === currentPage;
      const badgeHTML = item.badge
        ? `<span class="nav-badge badge-${item.badge}">${item.badge === 'basic' ? '기본' : '패턴'}</span>`
        : '';
      html += `
        <a class="nav-item${isActive ? ' active' : ''}" href="${href}" data-tags="${item.tags}">
          <span class="nav-icon">${item.icon}</span>
          <span class="nav-label">${item.label}</span>
          ${badgeHTML}
        </a>`;
    }
    html += `</div>`;
  }
  html += `<div id="noResult">검색 결과 없음</div>`;
  return html;
}

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
    const tags = (item.dataset.tags || '').toLowerCase();
    const label = item.querySelector('.nav-label')?.textContent.toLowerCase() || '';
    if (item.querySelector('.nav-label')?.textContent === '홈') {
      item.style.display = query ? 'none' : '';
      return;
    }
    const match = !query || tags.includes(query) || label.includes(query);
    item.style.display = match ? '' : 'none';
    if (match) any = true;
  });
  document.getElementById('noResult').style.display = (query && !any) ? 'block' : 'none';
}

function copyCode(btn) {
  const pre = btn.previousElementSibling;
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '복사됨 ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = '복사'; btn.classList.remove('copied'); }, 1800);
  });
}