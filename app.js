const LESSONS = [
  {
    id: 1,
    icon: '🎯',
    category: 'Старт',
    title: 'Финансовые цели и стартовый капитал',
    goal: 'После урока вы поймете, какие деньги можно направлять в инвестиции, а какие лучше оставить в резерве.',
    concepts: ['цель', 'резерв', 'горизонт', 'сложный процент'],
    visual: 'goal',
    sections: [
      'Инвестиции начинаются не с выбора акции, а с цели. Когда понятны сумма, срок и регулярный взнос, проще выбрать подходящие инструменты и не реагировать на каждое движение рынка.',
      'Сначала отделите резерв от инвестиционных денег. Резерв нужен для жизни и непредвиденных расходов, а инвестиционный капитал можно размещать на срок, который соответствует вашей цели.',
      'Регулярность часто важнее попытки угадать идеальный момент входа. Даже небольшие пополнения со временем начинают работать сильнее за счет сложного процента.'
    ],
    tipTitle: 'Финансовая подушка — до инвестиций',
    tipText: 'Сформируйте резерв на 3–6 месяцев обязательных расходов. Эти деньги лучше хранить в ликвидных инструментах, чтобы быстро воспользоваться ими при необходимости.',
    widget: 'capital-calc',
    tests: [
      {q:'Что такое финансовая подушка безопасности?', answers:['Деньги для покупки самых доходных акций','Резерв на 3–6 месяцев расходов в надежном и ликвидном инструменте','Кредитный лимит на карте'], correct:1, expl:'Подушка нужна для непредвиденных ситуаций. Ее не стоит подвергать рыночному риску.'},
      {q:'Что лучше сделать перед первой инвестицией?', answers:['Купить одну популярную акцию на всю сумму','Открыть счет и сразу торговать каждый день','Определить цель, срок, взнос и допустимый риск'], correct:2, expl:'План снижает риск эмоциональных решений и помогает выбирать инструменты осознанно.'},
      {q:'Когда работает сложный процент?', answers:['Когда доход остается внутри капитала и начинает приносить новый доход','Когда ставка фиксирована навсегда','Когда деньги каждый месяц снимаются со счета'], correct:0, expl:'Сложный процент усиливается при реинвестировании дохода и регулярных пополнениях.'}
    ]
  },
  {
    id: 2,
    icon: '📈',
    category: 'Активы',
    title: 'Акции — покупаем долю в бизнесе',
    goal: 'После урока вы поймете, что акция — это доля в бизнесе, а не гарантированный процентный доход.',
    concepts: ['акция', 'дивиденды', 'рост цены', 'волатильность'],
    visual: 'stocks',
    sections: [
      'Покупая акцию, вы становитесь совладельцем компании. Ваш результат зависит от того, как развивается бизнес и как рынок оценивает его перспективы.',
      'Доход по акциям может складываться из роста цены и дивидендов. Но ни одно из этих событий не гарантировано: цена может снижаться, а дивиденды могут изменяться или отменяться.',
      'Перед покупкой полезно понять бизнес-модель компании, долговую нагрузку, отраслевые риски и историю выплат. Так акция превращается из случайной идеи в осознанное решение.'
    ],
    tipTitle: 'Главный вопрос перед покупкой акции',
    tipText: 'Спросите себя: почему этот бизнес может стоить дороже через несколько лет и что может помешать этому сценарию?',
    widget: 'stock-simulator',
    tests: [
      {q:'Что получает инвестор при покупке акции?', answers:['Обязательство вернуть номинал','Долю в бизнесе компании','Гарантированный купон'], correct:1, expl:'Акция — долевой инструмент. Она дает участие в бизнесе, но не гарантирует доход.'},
      {q:'Из чего может складываться доход по акциям?', answers:['Только из купонов','Только из налогового вычета','Из роста цены и дивидендов'], correct:2, expl:'Инвестор может заработать на росте рыночной цены и дивидендах, если компания их выплачивает.'},
      {q:'Почему акции рискованнее облигаций?', answers:['Цена сильнее меняется, а выплаты не гарантированы','Акции доступны только квалифицированным инвесторам','Акции нельзя продать'], correct:0, expl:'У акций нет обязательства вернуть вложенные деньги или регулярно платить доход.'}
    ]
  },
  {
    id: 3,
    icon: '🛡️',
    category: 'Активы',
    title: 'Облигации — даем в долг государству и бизнесу',
    goal: 'После урока вы поймете, почему купон — не вся доходность облигации и какие риски есть у долговых инструментов.',
    concepts: ['номинал', 'купон', 'цена', 'доходность к погашению'],
    visual: 'bonds',
    sections: [
      'Облигация — это заем в виде ценной бумаги. Инвестор дает деньги эмитенту, а эмитент обязан платить купоны и вернуть номинал по условиям выпуска.',
      'Не смотрите только на купон. Итоговый результат зависит от цены покупки, срока до погашения, налогов, ликвидности и надежности эмитента.',
      'Чем выше доходность облигации, тем внимательнее стоит изучить причину. Иногда рынок закладывает повышенный кредитный риск или низкую ликвидность.'
    ],
    tipTitle: 'Купон и доходность — не одно и то же',
    tipText: 'Если облигация куплена ниже или выше номинала, доходность к погашению может заметно отличаться от купонной ставки.',
    widget: 'bond-calculator',
    tests: [
      {q:'Что происходит при покупке облигации?', answers:['Инвестор покупает долю бизнеса','Инвестор дает деньги эмитенту в долг','Инвестор получает дивиденды'], correct:1, expl:'Облигация — долговой инструмент с условиями купонов и погашения.'},
      {q:'Почему купон не равен полной доходности?', answers:['Потому что купон не выплачивается','Потому что доходность всегда равна ключевой ставке','Важны цена покупки и срок до погашения'], correct:2, expl:'Цена, срок, купон и погашение вместе формируют доходность к погашению.'},
      {q:'Что такое ОФЗ?', answers:['Облигации федерального займа','Опцион с фиксированной защитой','Фонд на акции'], correct:0, expl:'ОФЗ выпускаются государством и считаются одним из наиболее надежных долговых инструментов в России.'}
    ]
  },
  {
    id: 4,
    icon: '🧩',
    category: 'Фонды',
    title: 'ПИФы и ETF — готовые инвестиции',
    goal: 'После урока вы поймете, как один пай фонда может заменить набор из десятков отдельных бумаг.',
    concepts: ['ПИФ', 'БПИФ', 'ETF', 'диверсификация', 'комиссия'],
    visual: 'funds',
    sections: [
      'Фонд — это готовая корзина активов. Внутри могут быть акции, облигации, инструменты денежного рынка или смешанный набор.',
      'Фонды удобны для старта: одной покупкой можно получить долю в большом портфеле. Это экономит время и помогает снизить зависимость от одной бумаги.',
      'Перед покупкой фонда смотрите стратегию, состав, комиссию, ликвидность и динамику стоимости пая. Готовое решение тоже требует осознанного выбора.'
    ],
    tipTitle: 'Фонд не отменяет риск',
    tipText: 'Фонд помогает диверсифицировать портфель, но его стоимость тоже может снижаться в зависимости от активов внутри.',
    widget: 'etf-pie',
    tests: [
      {q:'Что такое фонд в инвестициях?', answers:['Кредитный договор','Готовый набор активов, разделенный на паи','Гарантированный вклад'], correct:1, expl:'Фонд объединяет средства инвесторов и покупает активы по выбранной стратегии.'},
      {q:'В чем преимущество фондов?', answers:['Полное отсутствие риска','Обязательная доходность выше рынка','Диверсификация одной покупкой'], correct:2, expl:'Фонд позволяет купить набор активов, но не гарантирует доходность.'},
      {q:'Где обычно учитывается комиссия фонда?', answers:['В стоимости чистых активов фонда','Только при закрытии ИИС','Отдельным счетом каждый день'], correct:0, expl:'Комиссия управляющей компании влияет на стоимость пая и обычно уже учтена внутри фонда.'}
    ]
  },
  {
    id: 5,
    icon: '⚖️',
    category: 'Стратегия',
    title: 'Риски и составление личного портфеля',
    goal: 'После урока вы поймете, какой уровень риска вам ближе и почему портфель лучше собирать из разных активов.',
    concepts: ['риск-профиль', 'просадка', 'диверсификация', 'баланс'],
    visual: 'risk',
    sections: [
      'Риск — это не только вероятность потерять деньги, но и готовность выдерживать временные просадки. Чем выше потенциальная доходность, тем выше колебания портфеля.',
      'Распределение активов помогает не зависеть от одной идеи. В портфеле могут сочетаться акции, облигации, фонды денежного рынка и защитные инструменты.',
      'Риск-профиль нужен, чтобы портфель соответствовал вашему сроку, доходу, цели и психологической готовности к снижению стоимости активов.'
    ],
    tipTitle: 'Портфель должен быть удобен именно вам',
    tipText: 'Даже доходная стратегия не подходит, если вы продаете активы в первую же просадку. Комфортный риск помогает сохранять дисциплину.',
    widget: 'risk-profiler',
    tests: [
      {q:'Что обычно связано с повышенной потенциальной доходностью?', answers:['Гарантия сохранности капитала','Повышенный риск и возможные просадки','Отсутствие налогов'], correct:1, expl:'Рынок обычно платит за риск, но результат не гарантирован.'},
      {q:'Что такое диверсификация?', answers:['Покупка одной акции на всю сумму','Полный отказ от облигаций','Распределение капитала между разными активами'], correct:2, expl:'Диверсификация снижает зависимость портфеля от одного инструмента или эмитента.'},
      {q:'Зачем нужен риск-профиль?', answers:['Чтобы подобрать портфель под цель, срок и готовность к просадкам','Чтобы не платить комиссии','Чтобы получить гарантированный доход'], correct:0, expl:'Риск-профиль помогает выбрать более подходящее соотношение активов.'}
    ]
  },
  {
    id: 6,
    icon: '🧾',
    category: 'Налоги',
    title: 'Налоги и государственные льготы — ИИС-3',
    goal: 'После урока вы поймете, как работает ИИС-3, почему вычет зависит от ставки НДФЛ и когда льготы можно потерять.',
    concepts: ['ИИС-3', 'НДФЛ', 'вычет', 'льгота на доход', 'срок'],
    visual: 'tax',
    sections: [
      'ИИС-3 — индивидуальный инвестиционный счет третьего типа. Он совмещает вычет на взносы и льготу на инвестиционный доход при соблюдении условий.',
      'Пополнять ИИС-3 можно без ограничения по сумме, но база для ежегодного вычета ограничена 400 000 ₽. Размер возврата зависит от вашей ставки НДФЛ и фактически уплаченного налога.',
      'Для счетов, открытых в 2024–2026 годах, минимальный срок владения для сохранения льгот — 5 лет. При досрочном закрытии льготы теряются.'
    ],
    tipTitle: 'ИИС-3 — инструмент для длинной цели',
    tipText: 'Если деньги могут понадобиться раньше минимального срока, обычный брокерский счет или более ликвидные инструменты могут быть удобнее.',
    widget: 'iis-calculator',
    tests: [
      {q:'Что такое ИИС-3?', answers:['Обычный банковский вклад','Инвестиционный счет с налоговыми льготами при соблюдении условий','Страховой полис'], correct:1, expl:'ИИС-3 дает налоговые преимущества, но требует соблюдения условий и срока владения.'},
      {q:'С какой базы рассчитывается ежегодный вычет на взнос?', answers:['С любой суммы без ограничений','Только с 1 млн ₽','До 400 000 ₽ в год'], correct:2, expl:'Пополнения могут быть больше, но база для вычета ограничена 400 000 ₽ в год.'},
      {q:'Какой максимальный возврат возможен при ставке НДФЛ 22%?', answers:['88 000 ₽','400 000 ₽','52 000 ₽'], correct:0, expl:'22% от 400 000 ₽ = 88 000 ₽ при наличии достаточного уплаченного НДФЛ.'}
    ]
  }
];

const PRACTICES = {
  1: { title:'Соберите стартовую карту', text:'Запишите одну цель, срок и сумму регулярного пополнения. Отдельно рассчитайте резерв на 3–6 месяцев расходов.', checks:['Цель выражена в рублях','Понятен срок цели','Резерв отделен от инвестиций'] },
  2: { title:'Разберите одну компанию', text:'Выберите публичную компанию и коротко ответьте: чем она зарабатывает, есть ли дивиденды и какой главный риск у бизнеса.', checks:['Понятна бизнес-модель','Проверена дивидендная история','Записан главный риск'] },
  3: { title:'Сравните две облигации', text:'Сравните две облигации с похожим сроком: эмитент, купон, цена, доходность к погашению и рейтинг.', checks:['Сравнен эмитент','Проверена доходность к погашению','Понятен главный риск'] },
  4: { title:'Проверьте фонд', text:'Откройте карточку любого фонда и найдите его состав, комиссию и стратегию.', checks:['Найден состав фонда','Проверена комиссия','Понятна стратегия'] },
  5: { title:'Определите комфортную просадку', text:'Выберите снижение портфеля, которое вы готовы выдержать без эмоциональной продажи: 5%, 10%, 20% или больше.', checks:['Выбрана комфортная просадка','Понятен срок инвестирования','Портфель не зависит от одного актива'] },
  6: { title:'Оцените ИИС-3 для своей цели', text:'Введите сумму взноса и ставку НДФЛ в калькуляторе. Проверьте, готовы ли держать счет не менее 5 лет.', checks:['Проверена база 400 000 ₽','Выбрана ставка НДФЛ','Цель подходит под срок ИИС-3'] }
};

const STORAGE_KEY = 'akbf-academy-polished-v1';
const appState = {
  activeLesson: 0,
  theme: 'light',
  progress: { lessons: Array(6).fill(false), tests: Array(6).fill(false), scores: Array(6).fill(0) },
  answered: {},
  practice: {},
  sim: { price: 100, cash: 100000, shares: 0, avgPrice: 0, history: [95,98,97,101,100,103,104,102,106,108,107,110] },
  certificateName: ''
};

const els = {};
let deferredPrompt = null;

function cacheEls(){
  ['splashScreen','onboardingBackdrop','onboardingModal','closeOnboarding','startLearning','sidebar','lessonNav','completedLessons','completedTests','progressFill','progressPercent','resetProgress','installApp','openCompletion','completionHint','content','pageTitle','pageSubtitle','offlineBadge','lessonChip','showOnboarding','continueCourse','jumpToTest','lessonPanel','widgetPanel','practicePanel','testPanel','completionPanel','finalLessons','finalTests','finalScore','certificateStatus','certificateNameInput','certificateName','certificateDate','downloadCertificate','scrollToLessons','lessonSheet','lessonSheetBackdrop','lessonSheetList','closeLessonSheet'].forEach(id=>els[id]=document.getElementById(id));
}
function safeLoad(){ try{ const data=JSON.parse(localStorage.getItem(STORAGE_KEY)); if(data) Object.assign(appState, data); }catch(_){} }
function safeSave(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); }catch(_){} }
function formatMoney(v){ return new Intl.NumberFormat('ru-RU',{style:'currency',currency:'RUB',maximumFractionDigits:0}).format(v); }
function formatPct(v){ return new Intl.NumberFormat('ru-RU',{minimumFractionDigits:1,maximumFractionDigits:1}).format(v)+'%'; }
function lessonKey(){ return `lesson-${appState.activeLesson}`; }
function isComplete(){ return appState.progress.tests.filter(Boolean).length === LESSONS.length; }
function getToday(){ return new Intl.DateTimeFormat('ru-RU',{day:'2-digit',month:'long',year:'numeric'}).format(new Date()); }

function applyTheme(){
  document.documentElement.setAttribute('data-theme', appState.theme);
  if(els.showOnboarding) document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.textContent = appState.theme === 'dark' ? '☀' : '☾');
}
function setActiveBottom(action){ document.querySelectorAll('[data-mobile-action]').forEach(b=>b.classList.toggle('active', b.dataset.mobileAction===action)); }
function scrollToTarget(target, behavior='smooth'){
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if(!el) return;
  const offset = window.innerWidth <= 920 ? 72 : 16;
  const rect = el.getBoundingClientRect();
  const top = window.scrollY + rect.top - offset;
  window.scrollTo({top: Math.max(0, top), behavior});
  if(els.content && els.content.scrollHeight > els.content.clientHeight) els.content.scrollTo({top: Math.max(0, el.offsetTop - offset), behavior});
}
function scrollMainToTop(behavior = window.innerWidth <= 920 ? 'auto':'smooth'){
  requestAnimationFrame(()=>scrollToTarget('#courseTop', behavior));
}

function renderSidebar(){
  els.lessonNav.innerHTML = LESSONS.map((lesson, idx)=>lessonNavButton(lesson, idx)).join('');
  els.lessonSheetList.innerHTML = LESSONS.map((lesson, idx)=>lessonNavButton(lesson, idx, true)).join('');
  document.querySelectorAll('[data-lesson]').forEach(btn=>btn.addEventListener('click',()=>{
    setLesson(+btn.dataset.lesson);
    closeLessonSheet();
  }));
}
function lessonNavButton(lesson, idx, compact=false){
  const done = appState.progress.tests[idx] ? 'done' : appState.progress.lessons[idx] ? 'started' : '';
  return `<button class="lesson-link ${idx===appState.activeLesson?'active':''} ${done}" data-lesson="${idx}">
    <span class="lesson-index">${lesson.id}</span>
    <span><strong>${lesson.title}</strong>${compact ? `<em>${lesson.category}</em>` : `<small>${lesson.goal}</small>`}</span>
  </button>`;
}
function updateProgress(){
  const lessonsDone = appState.progress.lessons.filter(Boolean).length;
  const testsDone = appState.progress.tests.filter(Boolean).length;
  const percent = Math.round(((lessonsDone + testsDone) / 12) * 100);
  els.completedLessons.textContent = lessonsDone;
  els.completedTests.textContent = testsDone;
  els.progressPercent.textContent = `${percent}%`;
  els.progressFill.style.width = `${percent}%`;
  els.openCompletion.disabled = !isComplete();
  els.completionHint.textContent = isComplete() ? 'Курс завершен. Можно открыть итог и скачать сертификат.' : `Финальный экран откроется после всех тестов. Сейчас завершено ${testsDone}/6.`;
  updateCompletionPanel(false);
}
function setLesson(index, shouldScroll=true){
  appState.activeLesson = Math.max(0, Math.min(LESSONS.length-1, index));
  renderLesson();
  if(shouldScroll) scrollMainToTop(window.innerWidth <= 920 ? 'auto':'smooth');
}

function renderLesson(){
  const lesson = LESSONS[appState.activeLesson];
  appState.progress.lessons[appState.activeLesson] = true;
  els.pageTitle.textContent = lesson.title;
  els.pageSubtitle.textContent = lesson.goal;
  els.lessonChip.textContent = `Урок ${lesson.id} из 6`;
  renderSidebar();
  renderLessonPanel(lesson);
  renderWidget(lesson.widget);
  renderPractice(lesson);
  renderTest(lesson);
  renderLessonActions();
  updateProgress();
  safeSave();
}
function renderLessonPanel(lesson){
  els.lessonPanel.innerHTML = `<div class="lesson-head">
    <div><div class="eyebrow">${lesson.category}</div><h3>${lesson.icon} ${lesson.title}</h3><p class="panel-intro">${lesson.goal}</p></div>
    <div class="lesson-illustration">${lessonIllustration(lesson.visual)}</div>
  </div>
  <div class="key-tags">${lesson.concepts.map(c=>`<span class="tag">${c}</span>`).join('')}</div>
  <div class="lesson-sections">${lesson.sections.map((s,i)=>`<p><strong>${i+1}.</strong> ${s}</p>`).join('')}</div>
  <div class="tip"><strong>${lesson.tipTitle}</strong><p>${lesson.tipText}</p></div>`;
}
function lessonIllustration(type){
  const paths = {
    goal:'<circle cx="64" cy="64" r="48"/><path d="M64 32v32l24 14"/>',
    stocks:'<path d="M20 92h88"/><path d="M28 82l22-22 18 14 34-38"/><path d="M88 36h14v16"/>',
    bonds:'<rect x="22" y="34" width="84" height="60" rx="12"/><path d="M36 54h52M36 72h34"/>',
    funds:'<path d="M64 20v44l38 22"/><path d="M64 64L26 86"/><circle cx="64" cy="64" r="44"/>',
    risk:'<path d="M64 22v84"/><path d="M30 52h68"/><path d="M40 52l-18 34h36L40 52zM88 52L70 86h36L88 52z"/>',
    tax:'<rect x="30" y="20" width="68" height="88" rx="10"/><path d="M44 44h40M44 64h28M44 84h18"/>'
  };
  return `<svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">${paths[type]||paths.goal}</g></svg>`;
}
function renderPractice(lesson){
  const tasks = PRACTICES[lesson.id];
  const done = appState.practice[lesson.id] || [];
  els.practicePanel.innerHTML = `<div class="panel-header-line"><div><div class="eyebrow">Практика</div><h3>${tasks.title}</h3></div><span class="chip">${done.length}/${tasks.checks.length}</span></div><p class="panel-intro">${tasks.text}</p><div class="practice-list">${tasks.checks.map((check,idx)=>`<label class="practice-check"><input type="checkbox" data-practice="${lesson.id}" data-check="${idx}" ${done.includes(idx)?'checked':''}> <span>${check}</span></label>`).join('')}</div><div class="practice-status" id="practiceStatus"></div>`;
  els.practicePanel.querySelectorAll('[data-practice]').forEach(input=>input.addEventListener('change',()=>{
    const lid = +input.dataset.practice, cid = +input.dataset.check;
    appState.practice[lid] = appState.practice[lid] || [];
    if(input.checked && !appState.practice[lid].includes(cid)) appState.practice[lid].push(cid);
    if(!input.checked) appState.practice[lid] = appState.practice[lid].filter(x=>x!==cid);
    safeSave(); renderPractice(lesson);
  }));
  const status = els.practicePanel.querySelector('#practiceStatus');
  status.textContent = done.length === tasks.checks.length ? 'Готово. Практика закреплена — переходите к тесту.' : `Выполнено пунктов: ${done.length} из ${tasks.checks.length}.`;
}

function renderWidget(type){
  const map = {
    'capital-calc': capitalWidget,
    'stock-simulator': stockWidget,
    'bond-calculator': bondWidget,
    'etf-pie': etfWidget,
    'risk-profiler': riskWidget,
    'iis-calculator': iisWidget
  };
  els.widgetPanel.innerHTML = '';
  els.widgetPanel.appendChild((map[type]||capitalWidget)());
}
function widgetShell(title, html){
  const wrap = document.createElement('div');
  wrap.className = 'widget-inner';
  wrap.innerHTML = `<div class="widget-title"><span>Интерактивный блок</span><h4>${title}</h4></div>${html}`;
  return wrap;
}
function rangeField(id, label, min, max, step, value, suffix=''){
  return `<label class="field range-field"><span>${label}: <b id="${id}-label"></b></span><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-suffix="${suffix}"></label>`;
}
function setRangeLabel(root, id, formatter){
  const input = root.querySelector('#'+id);
  const label = root.querySelector('#'+id+'-label');
  if(!input || !label) return 0;
  const value = +input.value;
  label.textContent = formatter ? formatter(value) : value + (input.dataset.suffix || '');
  return value;
}
function capitalWidget(){
  const el = widgetShell('Калькулятор сложного процента', `<div class="widget-grid">
    ${rangeField('cc-start','Стартовая сумма',10000,1000000,10000,30000,' ₽')}
    ${rangeField('cc-month','Ежемесячное пополнение',0,100000,1000,5000,' ₽')}
    ${rangeField('cc-rate','Доходность годовых',1,30,1,15,'%')}
    ${rangeField('cc-years','Срок инвестирования',1,25,1,5,' лет')}
  </div><div class="result-box" id="capitalResult"></div>`);
  const calc=()=>{
    const start=setRangeLabel(el,'cc-start',formatMoney), month=setRangeLabel(el,'cc-month',formatMoney), rate=setRangeLabel(el,'cc-rate',v=>v+'%')/100/12, years=setRangeLabel(el,'cc-years',v=>v+' лет');
    let total=start; for(let i=0;i<years*12;i++) total=(total+month)*(1+rate);
    const invested=start+month*years*12;
    el.querySelector('#capitalResult').innerHTML=`<strong>${formatMoney(total)}</strong><span>Вложено: ${formatMoney(invested)} · потенциальный результат: ${formatMoney(total-invested)}</span>`;
  };
  el.querySelectorAll('input[type="range"]').forEach(i=>i.addEventListener('input',calc)); calc(); return el;
}
function stockWidget(){
  const el = widgetShell('Тренажер покупки акций', `<div class="simulator-top"><div><span class="muted">Учебная цена акции</span><div class="price" id="stockPrice"></div></div><span id="stockChange" class="price-change up">0%</span></div><div class="chart" id="stockChart"></div><div class="sim-balance"><div class="sim-kpi"><span>Деньги</span><b id="cashValue"></b></div><div class="sim-kpi"><span>Акции</span><b id="sharesValue"></b></div><div class="sim-kpi"><span>Портфель</span><b id="portfolioValue"></b></div></div><div class="widget-grid compact-widget-grid">${rangeField('trade-qty','Количество акций в сделке',1,50,1,10,' шт.')}</div><div class="btn-row"><button class="btn btn-primary" id="buyBtn">Купить</button><button class="btn btn-secondary" id="sellBtn">Продать</button><button class="btn btn-ghost" id="tickBtn">Следующий день</button></div>`);
  const tradeQty=()=>setRangeLabel(el,'trade-qty',v=>v+' шт.');
  const renderChart=()=>{ const data=appState.sim.history, min=Math.min(...data), max=Math.max(...data), range=max-min||1; const pts=data.map((v,i)=>`${(i/(data.length-1))*100},${100-((v-min)/range)*80-10}`).join(' '); el.querySelector('#stockChart').innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points="${pts}" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`; };
  const upd=()=>{ const s=appState.sim; el.querySelector('#stockPrice').textContent=s.price.toFixed(1)+' ₽'; el.querySelector('#cashValue').textContent=formatMoney(s.cash); el.querySelector('#sharesValue').textContent=s.shares+' шт.'; el.querySelector('#portfolioValue').textContent=formatMoney(s.cash+s.shares*s.price); tradeQty(); renderChart(); };
  el.querySelector('#tickBtn').onclick=()=>{ const old=appState.sim.price; appState.sim.price=Math.max(60, +(old+(Math.random()*8-3.5)).toFixed(1)); appState.sim.history.push(appState.sim.price); if(appState.sim.history.length>18) appState.sim.history.shift(); const pct=(appState.sim.price-old)/old*100; const change=el.querySelector('#stockChange'); change.textContent=(pct>=0?'+':'')+pct.toFixed(1)+'%'; change.className='price-change '+(pct>=0?'up':'down'); upd(); safeSave(); };
  el.querySelector('#buyBtn').onclick=()=>{ const qty=tradeQty(), cost=qty*appState.sim.price; if(appState.sim.cash>=cost){ appState.sim.cash-=cost; appState.sim.shares+=qty; } upd(); safeSave(); };
  el.querySelector('#sellBtn').onclick=()=>{ const qty=Math.min(tradeQty(),appState.sim.shares); appState.sim.shares-=qty; appState.sim.cash+=qty*appState.sim.price; upd(); safeSave(); };
  el.querySelector('#trade-qty').addEventListener('input', upd); upd(); return el;
}
function bondWidget(){
  const el=widgetShell('Калькулятор доходности облигации', `<div class="widget-grid">
    ${rangeField('bond-price','Цена от номинала',80,120,1,96,'%')}
    ${rangeField('bond-coupon','Купон годовых',5,25,0.5,13,'%')}
    ${rangeField('bond-years','Срок до погашения',1,10,1,3,' лет')}
    ${rangeField('bond-face','Номинал',1000,10000,1000,1000,' ₽')}
  </div><div class="result-box" id="bondResult"></div>`);
  const calc=()=>{
    const pricePct=setRangeLabel(el,'bond-price',v=>v+'%'), couponPct=setRangeLabel(el,'bond-coupon',v=>v+'%'), years=setRangeLabel(el,'bond-years',v=>v+' лет'), face=setRangeLabel(el,'bond-face',formatMoney);
    const price=face*pricePct/100, coupon=face*couponPct/100;
    const ytm=((coupon+(face-price)/years)/((face+price)/2))*100;
    el.querySelector('#bondResult').innerHTML=`<strong>${formatPct(ytm)}</strong><span>Ориентир доходности к погашению. Купон: ${formatMoney(coupon)}, цена покупки: ${formatMoney(price)}.</span>`;
  };
  el.querySelectorAll('input[type="range"]').forEach(i=>i.addEventListener('input',calc)); calc(); return el;
}
function etfWidget(){
  const el=widgetShell('Конструктор портфеля из фондов', `<div class="widget-grid">
    ${rangeField('etf-stock','Акции',0,100,5,50,'%')}
    ${rangeField('etf-bond','Облигации',0,100,5,35,'%')}
    ${rangeField('etf-cash','Денежный рынок',0,100,5,15,'%')}
  </div><div class="allocation" id="allocation"></div><div class="result-box" id="etfResult"></div>`);
  const sync=()=>{ const vals=['stock','bond','cash'].map(x=>setRangeLabel(el,'etf-'+x,v=>v+'%')); const total=vals.reduce((a,b)=>a+b,0); el.querySelector('#allocation').innerHTML=vals.map((v,i)=>`<span style="width:${total?v/total*100:0}%"></span>`).join(''); el.querySelector('#etfResult').innerHTML=`<strong>${total===100?'Портфель собран корректно':'Проверьте сумму долей'}</strong><span>Сумма долей: ${total}%. Ориентир: привести сумму к 100%.</span>`; };
  el.querySelectorAll('input[type="range"]').forEach(i=>i.addEventListener('input',sync)); sync(); return el;
}
function riskWidget(){
  const labels={
    'risk-h':['До 1 года','1–3 года','Более 3 лет'],
    'risk-d':['До 5%','До 15%','Более 15%'],
    'risk-g':['Сохранить капитал','Умеренный рост','Активный рост']
  };
  const el=widgetShell('Мини-тест риск-профиля', `<div class="widget-grid">
    ${rangeField('risk-h','Горизонт',1,3,1,2)}
    ${rangeField('risk-d','Готовность к просадке',1,3,1,2)}
    ${rangeField('risk-g','Цель',1,3,1,2)}
  </div><div class="result-box" id="riskResult"></div>`);
  const val=(id)=>setRangeLabel(el,id,v=>labels[id][v-1]);
  const calc=()=>{ const score=val('risk-h')+val('risk-d')+val('risk-g'); let res='Консервативный', text='Больше внимания стабильности и ликвидности.'; if(score>=6){res='Умеренный'; text='Баланс акций, облигаций и денежных инструментов.';} if(score>=8){res='Агрессивный'; text='Выше доля акций и готовность к заметным просадкам.';} el.querySelector('#riskResult').innerHTML=`<strong>${res}</strong><span>${text}</span>`; };
  el.querySelectorAll('input[type="range"]').forEach(i=>i.addEventListener('input',calc)); calc(); return el;
}
function iisWidget(){
  const el=widgetShell('Калькулятор вычета по ИИС-3', `<div class="widget-grid">
    ${rangeField('iis-amount','Взнос за год',50000,1000000,50000,400000,' ₽')}
    ${rangeField('iis-tax','Ставка НДФЛ',13,22,1,22,'%')}
    ${rangeField('iis-years','Срок владения',1,10,1,5,' лет')}
  </div><div class="result-box" id="iisResult"></div>`);
  const calc=()=>{ const amount=setRangeLabel(el,'iis-amount',formatMoney), tax=setRangeLabel(el,'iis-tax',v=>v+'%')/100, years=setRangeLabel(el,'iis-years',v=>v+' лет'); const base=Math.min(amount,400000), deduction=base*tax; el.querySelector('#iisResult').innerHTML=`<strong>${formatMoney(deduction)}</strong><span>Потенциальный возврат за год. База: ${formatMoney(base)}. Срок в калькуляторе: ${years} лет.</span>`; };
  el.querySelectorAll('input[type="range"]').forEach(i=>i.addEventListener('input',calc)); calc(); return el;
}

function renderTest(lesson){
  const key = lessonKey();
  const answered = appState.answered[key] || {};
  const tests = lesson.tests;
  let score = appState.progress.scores[appState.activeLesson] || 0;
  els.testPanel.innerHTML = `<div class="panel-header-line"><div><div class="eyebrow">Проверочный тест</div><h3>Закрепите тему</h3></div><span class="chip">${Object.keys(answered).length}/${tests.length}</span></div><p class="panel-intro">Выберите ответ — правильный вариант подсветится зеленым, ошибка красным, а ниже появится пояснение.</p><div class="test-list">${tests.map((test,qi)=>`<div class="test-card" data-test="${qi}"><div class="test-q">${qi+1}. ${test.q}</div><div class="answers">${test.answers.map((ans,ai)=>`<button class="answer-btn" data-q="${qi}" data-a="${ai}">${ans}</button>`).join('')}</div><div class="answer-expl hidden" id="expl-${qi}"></div></div>`).join('')}</div><div class="test-score" id="testScore">Правильных ответов: ${score} из ${tests.length}</div>`;
  Object.entries(answered).forEach(([q,chosen])=>applyAnswerState(+q, chosen, tests));
  els.testPanel.querySelectorAll('.answer-btn').forEach(btn=>btn.addEventListener('click',()=>{
    const q=+btn.dataset.q, a=+btn.dataset.a;
    if((appState.answered[key]||{})[q] !== undefined) return;
    appState.answered[key] = {...(appState.answered[key]||{}), [q]:a};
    applyAnswerState(q,a,tests);
    score = Object.entries(appState.answered[key]).reduce((acc,[idx,chosen])=>acc+(tests[idx].correct===chosen?1:0),0);
    appState.progress.scores[appState.activeLesson]=score;
    els.testPanel.querySelector('#testScore').textContent=`Правильных ответов: ${score} из ${tests.length}`;
    if(Object.keys(appState.answered[key]).length === tests.length) appState.progress.tests[appState.activeLesson]=true;
    updateProgress(); renderSidebar(); renderLessonActions(); safeSave();
  }));
}
function applyAnswerState(q, chosen, tests){
  const card=els.testPanel.querySelector(`[data-test="${q}"]`); if(!card) return;
  card.querySelectorAll('.answer-btn').forEach((b,idx)=>{ if(idx===tests[q].correct)b.classList.add('correct'); else if(idx===chosen)b.classList.add('wrong'); b.disabled=true; });
  const expl=card.querySelector(`#expl-${q}`); expl.classList.remove('hidden'); expl.textContent=tests[q].expl;
}
function renderLessonActions(){
  els.testPanel.querySelectorAll('.lesson-actions').forEach(node=>node.remove());
  const current = appState.activeLesson, last = current === LESSONS.length - 1;
  const html = `<div class="lesson-actions"><button class="btn btn-secondary" id="prevLesson" ${current===0?'disabled':''}>← Предыдущий урок</button><button class="btn btn-primary" id="nextLesson">${last ? 'Перейти к итогу' : 'Следующий урок →'}</button></div>`;
  els.testPanel.insertAdjacentHTML('beforeend', html);
  els.testPanel.querySelector('#prevLesson').onclick=()=>setLesson(current-1);
  els.testPanel.querySelector('#nextLesson').onclick=()=>{ if(last) openCompletion(); else setLesson(current+1); };
}

function openLessonSheet(){ els.lessonSheetBackdrop.classList.remove('hidden'); els.lessonSheet.classList.remove('hidden'); setActiveBottom('lessons'); }
function closeLessonSheet(){ els.lessonSheetBackdrop.classList.add('hidden'); els.lessonSheet.classList.add('hidden'); }
function openCompletion(){
  if(!isComplete()){ alert('Финальный сертификат откроется после прохождения всех 6 тестов.'); return; }
  els.completionPanel.classList.remove('hidden'); updateCompletionPanel(true); scrollToTarget(els.completionPanel);
}
function updateCompletionPanel(visibleOnly=true){
  const lessonsDone=appState.progress.lessons.filter(Boolean).length, testsDone=appState.progress.tests.filter(Boolean).length, total=appState.progress.scores.reduce((a,b)=>a+b,0);
  if(els.finalLessons) els.finalLessons.textContent=`${lessonsDone}/6`;
  if(els.finalTests) els.finalTests.textContent=`${testsDone}/6`;
  if(els.finalScore) els.finalScore.textContent=`${total} из 18`;
  if(els.certificateDate) els.certificateDate.textContent=getToday();
  updateCertificateName();
  if(!visibleOnly && !isComplete()) els.completionPanel.classList.add('hidden');
}
function updateCertificateName(){
  const name=(els.certificateNameInput?.value || appState.certificateName || '').trim();
  appState.certificateName = name;
  if(els.certificateName) els.certificateName.textContent = name || 'ФИО участника';
  if(els.downloadCertificate) els.downloadCertificate.disabled = !(isComplete() && name.length >= 5);
  safeSave();
}
async function exportCertificate(){
  updateCertificateName();
  if(els.downloadCertificate.disabled) return;
  if(document.fonts && document.fonts.ready) await document.fonts.ready;
  if(typeof html2canvas !== 'function') { alert('Библиотека html2canvas еще загружается. Попробуйте через несколько секунд.'); return; }
  const canvas = await html2canvas(document.getElementById('certificateCard'), { scale: 2, useCORS: true, backgroundColor: null });
  const link=document.createElement('a');
  link.download='akbf-academy-certificate.png';
  link.href=canvas.toDataURL('image/png');
  link.click();
}

function updateOnline(){ els.offlineBadge.textContent = navigator.onLine ? 'Онлайн' : 'Оффлайн'; els.offlineBadge.className = 'chip ' + (navigator.onLine ? '' : 'chip-offline'); }
function setupEvents(){
  els.closeOnboarding.onclick=hideOnboarding;
  els.startLearning.onclick=()=>{ hideOnboarding(); scrollMainToTop(); };
  els.showOnboarding.onclick=showOnboarding;
  els.onboardingBackdrop.onclick=hideOnboarding;
  document.querySelectorAll('[data-theme-toggle]').forEach(btn=>btn.onclick=()=>{ appState.theme=appState.theme==='dark'?'light':'dark'; applyTheme(); safeSave(); });
  els.resetProgress.onclick=()=>{ if(confirm('Сбросить прогресс курса?')){ localStorage.removeItem(STORAGE_KEY); location.reload(); } };
  els.openCompletion.onclick=openCompletion;
  els.continueCourse.onclick=()=>setLesson(LESSONS.findIndex((_,i)=>!appState.progress.tests[i]) >= 0 ? LESSONS.findIndex((_,i)=>!appState.progress.tests[i]) : 0);
  els.jumpToTest.onclick=()=>scrollToTarget(els.testPanel);
  els.certificateNameInput.addEventListener('input', updateCertificateName);
  els.downloadCertificate.onclick=exportCertificate;
  els.scrollToLessons.onclick=()=>scrollToTarget('#courseTop');
  els.closeLessonSheet.onclick=closeLessonSheet;
  els.lessonSheetBackdrop.onclick=closeLessonSheet;
  document.querySelectorAll('[data-mobile-action]').forEach(btn=>btn.addEventListener('click',()=>{
    const action=btn.dataset.mobileAction; setActiveBottom(action);
    if(action==='course') scrollToTarget('#courseTop');
    if(action==='lessons') openLessonSheet();
    if(action==='practice') scrollToTarget(els.practicePanel);
    if(action==='test') scrollToTarget(els.testPanel);
    if(action==='final') openCompletion();
  }));
  window.addEventListener('online',updateOnline); window.addEventListener('offline',updateOnline);
  window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; els.installApp.disabled=false; });
  els.installApp.onclick=async()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; els.installApp.disabled=true; };
}
function showOnboarding(){ els.onboardingBackdrop.classList.remove('hidden'); els.onboardingModal.classList.remove('hidden'); }
function hideOnboarding(){ els.onboardingBackdrop.classList.add('hidden'); els.onboardingModal.classList.add('hidden'); localStorage.setItem('akbf-academy-onboarding-seen','1'); }
function hideSplash(){ setTimeout(()=>els.splashScreen.classList.add('hidden'), 500); }
function registerSW(){ if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{}); }

function init(){
  cacheEls(); safeLoad(); applyTheme(); setupEvents(); renderSidebar(); renderLesson(); updateOnline(); hideSplash(); registerSW();
  if(!localStorage.getItem('akbf-academy-onboarding-seen')) setTimeout(showOnboarding, 650);
  if(els.certificateNameInput) els.certificateNameInput.value = appState.certificateName || '';
  updateCertificateName();
}

document.addEventListener('DOMContentLoaded', init);
