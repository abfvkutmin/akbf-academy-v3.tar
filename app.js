const LESSONS = [
  {
    id: 1,
    title: 'Финансовые цели и стартовый капитал',
    goal: 'После урока вы поймете, какие деньги можно направлять в инвестиции, а какие лучше оставить в резерве.',
    concepts: ['финансовая цель', 'подушка безопасности', 'горизонт инвестирования', 'сложный процент'],
    sections: [
      'Прежде чем вкладывать деньги на фондовом рынке, важно собрать финансовый фундамент. Инвестиции помогают сохранять и приумножать капитал, но не заменяют регулярный доход и не отменяют риск. Первый шаг — понять, ради какой цели вы инвестируете.',
      'После формирования резерва можно переходить к цели. Хорошая цель отвечает на четыре вопроса: сколько нужно денег, к какому сроку, какую сумму вы готовы пополнять регулярно и какой риск для вас допустим.',
      'Регулярные вложения запускают эффект сложного процента: полученный доход остается внутри капитала и начинает приносить новый доход. В долгосрочном инвестировании дисциплина часто важнее попыток поймать идеальный момент для покупки.'
    ],
    tipTitle: 'Правило финансовой подушки безопасности',
    tipText: 'Не инвестируйте последние деньги. Сначала сформируйте резерв на 3–6 месяцев обязательных расходов. Подушка должна быть доступна быстро: на счете, вкладе или другом ликвидном инструменте.',
    widget: 'capital-calc',
    tests: [
      {q:'Что такое финансовая подушка безопасности?', answers:['Резервный фонд на 3–6 месяцев расходов на надежном и ликвидном счете','Деньги для спекулятивной торговли','Любой капитал, вложенный в акции'], correct:0, expl:'Финансовая подушка нужна для непредвиденных ситуаций. Ее лучше хранить в ликвидных инструментах, а не подвергать рыночному риску.'},
      {q:'Какое решение считается наиболее разумным на старте?', answers:['Определить цели, сформировать подушку и регулярно инвестировать комфортную сумму','Вложить все свободные деньги в одну идею','Открыть несколько счетов и постоянно переключаться между активами'], correct:0, expl:'На старте важны цель, резерв, регулярность и диверсификация. Это снижает риск эмоциональных решений.'},
      {q:'В чем суть сложного процента?', answers:['Доход реинвестируется и начинает приносить новый доход','Доход выплачивается на карту и тратится','Процент фиксируется навсегда'], correct:0, expl:'Сложный процент работает, когда доход остается в капитале и участвует в дальнейшем росте.'}
    ]
  },
  {
    id: 2,
    title: 'Акции — покупаем долю в бизнесе',
    goal: 'После урока вы поймете, что покупка акции — это покупка доли в бизнесе, а не гарантированный процентный доход.',
    concepts: ['акция', 'дивиденды', 'капитализация', 'волатильность'],
    sections: [
      'Покупая акцию, вы приобретаете небольшую долю в компании. Вы становитесь акционером и можете участвовать в финансовом результате бизнеса, если компания развивается и рынок положительно оценивает ее перспективы.',
      'Доход по акциям может складываться из двух частей: роста рыночной цены и дивидендов. Но ни рост цены, ни дивиденды не гарантированы: стоимость акций меняется под влиянием отчетности, новостей, ставок, ожиданий инвесторов и общей ситуации в экономике.',
      'Перед покупкой акции полезно понять, чем компания зарабатывает, насколько устойчивы ее прибыль и долг, есть ли дивидендная история и какие риски есть в отрасли.'
    ],
    tipTitle: 'Обыкновенные и привилегированные акции',
    tipText: 'Обыкновенные акции обычно дают право голоса на собрании акционеров. Привилегированные акции часто имеют особенности по дивидендам, но конкретные права зависят от устава компании.',
    widget: 'stock-simulator',
    tests: [
      {q:'Что дает инвестору покупка акции?', answers:['Долю в бизнесе компании и право претендовать на часть ее успеха','Фиксированную ставку дохода','Только право на купон'], correct:0, expl:'Акция — долевая ценная бумага. Она дает участие в бизнесе, но не гарантирует доход.'},
      {q:'Из чего может складываться доходность акций?', answers:['Из роста рыночной стоимости и дивидендов','Только из дивидендов','Только из налогового вычета'], correct:0, expl:'Инвестор может заработать на росте цены акции и на дивидендных выплатах, если компания их объявляет.'},
      {q:'Почему акции считаются рискованнее облигаций?', answers:['Цена сильнее колеблется, а выплаты не гарантированы','Потому что акции нельзя продать','Потому что по ним всегда отрицательная доходность'], correct:0, expl:'По акциям нет обязательства вернуть вложенную сумму или регулярно выплачивать доход.'}
    ]
  },
  {
    id: 3,
    title: 'Облигации — даем в долг государству и бизнесу',
    goal: 'После урока вы поймете, почему купон — не вся доходность облигации и какие риски есть даже у долговых инструментов.',
    concepts: ['номинал', 'купон', 'НКД', 'доходность к погашению', 'ОФЗ'],
    sections: [
      'Облигация — это долговая ценная бумага. Покупая облигацию, вы фактически даете деньги эмитенту в долг. Эмитентом может быть государство, регион или компания.',
      'Купон не равен полной доходности. Если облигация покупается ниже или выше номинала, итоговая доходность меняется. Поэтому инвесторы смотрят на доходность к погашению, цену, срок и надежность эмитента.',
      'Облигации бывают государственными, субфедеральными и корпоративными. Чем выше риск эмитента, тем выше может быть доходность, но вместе с ней растет и вероятность неблагоприятного сценария.'
    ],
    tipTitle: 'Основные параметры облигаций',
    tipText: 'Номинал — сумма долга, которую эмитент должен вернуть при погашении. Купон — регулярная процентная выплата. Срок погашения — дата, когда эмитент должен вернуть номинал.',
    widget: 'bond-calculator',
    tests: [
      {q:'Что происходит, когда инвестор покупает облигацию?', answers:['Он дает деньги эмитенту в долг под условия выпуска','Он покупает долю в бизнесе','Он получает право на дивиденды'], correct:0, expl:'Облигация — долговой инструмент: эмитент обязан платить купоны и вернуть номинал по условиям выпуска.'},
      {q:'Почему купон не равен полной доходности?', answers:['Потому что важны цена покупки, срок и погашение','Потому что налог отменяет купон','Потому что купон выплачивается только по акциям'], correct:0, expl:'Если цена покупки отличается от номинала, итоговая доходность может отличаться от купонной ставки.'},
      {q:'Что такое ОФЗ?', answers:['Облигации федерального займа','Общий фонд защиты','Опционный финансовый заем'], correct:0, expl:'ОФЗ выпускаются государством и относятся к наиболее надежным долговым инструментам в России.'}
    ]
  },
  {
    id: 4,
    title: 'ПИФы и ETF — готовые инвестиции',
    goal: 'После урока вы поймете, как один пай фонда может заменить набор из десятков отдельных бумаг.',
    concepts: ['ПИФ', 'БПИФ', 'ETF', 'пай', 'диверсификация', 'комиссия фонда'],
    sections: [
      'ПИФы, БПИФы и ETF — это формы коллективных инвестиций. Деньги многих инвесторов объединяются в общий портфель, которым управляют по заранее описанной стратегии.',
      'Вместо самостоятельного выбора десятков бумаг вы покупаете пай фонда и получаете долю в готовом наборе активов. Это помогает быстрее собрать диверсификацию и сэкономить время на анализе.',
      'У фондов есть комиссия за управление, которая уже учитывается в стоимости пая. Перед покупкой полезно посмотреть состав фонда, стратегию, ликвидность, размер комиссии и историю стоимости пая.'
    ],
    tipTitle: 'Удобство готовых решений',
    tipText: 'Фонд дает доступ к набору активов одной покупкой, но доходность не гарантирует.',
    widget: 'etf-pie',
    tests: [
      {q:'Что такое ПИФ или ETF?', answers:['Форма коллективных инвестиций с набором активов внутри','Разновидность банковского вклада','Гарантированный способ получить фиксированный доход'], correct:0, expl:'Фонд объединяет средства инвесторов и покупает набор активов по выбранной стратегии.'},
      {q:'В чем ключевое преимущество фондов?', answers:['Автоматическая диверсификация и экономия времени','Полное отсутствие риска','Обязательная доходность выше рынка'], correct:0, expl:'Фонд дает доступ к набору активов одной покупкой, но доходность не гарантирует.'},
      {q:'Как обычно удерживается комиссия фонда?', answers:['Автоматически из активов фонда','Отдельным ежемесячным платежом на карту','Только при закрытии брокерского счета'], correct:0, expl:'Комиссия управляющей компании учитывается внутри чистых активов фонда и влияет на стоимость пая.'}
    ]
  },
  {
    id: 5,
    title: 'Риски и составление личного портфеля',
    goal: 'После урока вы поймете, какой уровень риска вам ближе и почему портфель лучше собирать из разных активов.',
    concepts: ['риск-профиль', 'диверсификация', 'распределение активов', 'портфель 60/40'],
    sections: [
      'Базовое правило инвестиций: потенциальная доходность связана с риском. Чем выше возможность заработать больше рынка, тем выше вероятность просадки или потери части капитала.',
      'Диверсификация — защита от одной ошибки. Распределяйте капитал между разными классами активов, отраслями и эмитентами. Если одна идея окажется неудачной, остальные части портфеля могут снизить общий ущерб.',
      'Классический умеренный подход часто описывают как сочетание 60% акций и 40% облигаций. Это не универсальный рецепт, а учебный ориентир: доли зависят от целей, срока, возраста, дохода и готовности к просадкам.'
    ],
    tipTitle: 'Учебный ориентир',
    tipText: 'Соотношение 60/40 — не обязательная формула, а наглядный пример баланса между ростом и стабильностью.',
    widget: 'risk-profiler',
    tests: [
      {q:'Как связаны риск и потенциальная доходность?', answers:['Чем выше риск, тем выше потенциальная доходность и вероятность потерь','Риск и доходность не связаны','Высокий риск всегда означает гарантированную прибыль'], correct:0, expl:'Повышенная потенциальная доходность обычно является компенсацией за дополнительный риск.'},
      {q:'Что такое диверсификация?', answers:['Распределение капитала между разными активами и эмитентами','Покупка только одного надежного актива','Полный отказ от облигаций'], correct:0, expl:'Диверсификация снижает зависимость портфеля от одной бумаги, отрасли или идеи.'},
      {q:'Какое сочетание часто называют классическим умеренным портфелем?', answers:['60% акций и 40% облигаций','90% кэш и 10% акции','100% акции'], correct:0, expl:'Соотношение 60/40 — учебный ориентир для баланса между ростом и стабильностью.'}
    ]
  },
  {
    id: 6,
    title: 'Налоги и государственные льготы — ИИС-3',
    goal: 'После урока вы поймете, как работает ИИС-3, почему вычет зависит от ставки НДФЛ и когда льготы можно потерять.',
    concepts: ['ИИС-3', 'НДФЛ', 'вычет на взнос', 'льгота на доход', 'минимальный срок владения'],
    sections: [
      'Прибыль от инвестиций облагается НДФЛ. В России действует прогрессивная шкала: ставка зависит от размера совокупного дохода. Налог может возникать при продаже активов с прибылью и при получении отдельных видов дохода.',
      'ИИС-3 — индивидуальный инвестиционный счет третьего типа. Он совмещает две льготы: вычет на взносы и освобождение инвестиционного дохода при соблюдении минимального срока владения счетом.',
      'Если закрыть ИИС-3 раньше минимального срока, право на льготы утрачивается: ранее полученные вычеты нужно вернуть, а доход может быть обложен налогом.'
    ],
    tipTitle: 'Ключевые условия ИИС-3',
    tipText: 'Ограничения по сумме пополнений нет, но вычет рассчитывается только с базы до 400 000 ₽ в год. При ставке НДФЛ 22% максимальный возврат может составить до 88 000 ₽ в год. Для счетов, открытых в 2024–2026 годах, минимальный срок владения для сохранения льгот — 5 лет.',
    widget: 'iis-calculator',
    tests: [
      {q:'Что такое ИИС-3?', answers:['Брокерский счет с налоговыми льготами при соблюдении условий','Любой банковский вклад','Отдельный налог на инвестиции'], correct:0, expl:'ИИС-3 — инвестиционный счет, который совмещает вычет на взносы и льготу на инвестиционный доход при выполнении условий.'},
      {q:'С какой базы рассчитывается ежегодный вычет на взносы по ИИС-3?', answers:['С суммы до 400 000 ₽ в год','Со всей суммы пополнения без ограничения','Только со 100 000 ₽'], correct:0, expl:'Пополнять можно больше, но база для расчета вычета ограничена 400 000 ₽ в год.'},
      {q:'Какой максимальный возврат возможен при ставке НДФЛ 22%?', answers:['88 000 ₽','40 000 ₽','120 000 ₽'], correct:0, expl:'22% от 400 000 ₽ = 88 000 ₽. Итог зависит от фактически уплаченного НДФЛ.'}
    ]
  }
];

const PRACTICES = {
  1: {
    title: 'Соберите финансовый фундамент',
    text: 'Перед стартом инвестиций проверьте, что у вас есть понятная цель и резерв на непредвиденные расходы.',
    checks: ['Записал одну финансовую цель с суммой и сроком', 'Рассчитал резерв на 3–6 месяцев расходов', 'Определил комфортную сумму регулярного пополнения']
  },
  2: {
    title: 'Разберите акцию как долю в бизнесе',
    text: 'Выберите знакомую компанию и оцените ее не как тикер, а как реальный бизнес.',
    checks: ['Понял, чем компания зарабатывает', 'Проверил, есть ли дивидендная история', 'Записал один фактор роста и один риск']
  },
  3: {
    title: 'Сравните параметры облигации',
    text: 'Посмотрите на облигацию через цену, купон, срок и надежность эмитента.',
    checks: ['Проверил срок погашения', 'Сравнил купон и доходность к погашению', 'Оценил кредитный риск эмитента']
  },
  4: {
    title: 'Соберите учебный портфель из фондов',
    text: 'Попробуйте распределить доли между акциями, облигациями и защитными активами.',
    checks: ['Сумма долей в портфеле равна 100%', 'В портфеле есть минимум два класса активов', 'Проверил комиссию и состав фонда']
  },
  5: {
    title: 'Определите комфортный уровень риска',
    text: 'Подумайте, какую просадку вы сможете выдержать без эмоциональной продажи активов.',
    checks: ['Выбрал допустимую просадку портфеля', 'Понял свой инвестиционный горизонт', 'Сформулировал, когда буду пересматривать портфель']
  },
  6: {
    title: 'Оцените пользу ИИС-3 для своей цели',
    text: 'Сравните потенциальный налоговый вычет, срок владения и готовность не закрывать счет досрочно.',
    checks: ['Ввел сумму взноса в калькулятор', 'Понял ограничение базы вычета 400 000 ₽', 'Проверил, подходит ли срок 5 лет для моей цели']
  },
  default: {
    title: 'Закрепите материал',
    text: 'Выполните короткую проверку перед переходом к тесту.',
    checks: ['Прочитал материал', 'Проверил ключевые понятия', 'Выполнил расчет в тренажере']
  }
};

const STORAGE_KEY = 'akbf-academy-pwa-final-1';
const appState = {
  activeLesson: 0,
  theme: 'light',
  progress: { lessons: Array(6).fill(false), tests: Array(6).fill(false), scores: Array(6).fill(0) },
  answered: {},
  practice: {},
  sim: { cash: 100000, shares: 0, avgPrice: 0, price: 124.8, history: [118,120,119,122,121,124,126,125,127,126,128,124.8] }
};

const els = {
  nav: document.getElementById('lessonNav'),
  lessonPanel: document.getElementById('lessonPanel'),
  widgetPanel: document.getElementById('widgetPanel'),
  testPanel: document.getElementById('testPanel'),
  progressFill: document.getElementById('progressFill'),
  completedLessons: document.getElementById('completedLessons'),
  completedTests: document.getElementById('completedTests'),
  progressPercent: document.getElementById('progressPercent'),
  pageTitle: document.getElementById('pageTitle'),
  pageSubtitle: document.getElementById('pageSubtitle'),
  lessonChip: document.getElementById('lessonChip'),
  themeToggle: document.querySelector('[data-theme-toggle]'),
  sidebar: document.getElementById('sidebar'),
  menuToggle: document.getElementById('menuToggle'),
  resetBtn: document.getElementById('resetProgress'),
  installBtn: document.getElementById('installApp'),
  embedCode: document.getElementById('embedCode'),
  offlineBadge: document.getElementById('offlineBadge')
};

let deferredPrompt = null;

function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data && typeof data === 'object') {
      Object.assign(appState, data);
      appState.progress.lessons = data.progress?.lessons || Array(6).fill(false);
      appState.progress.tests = data.progress?.tests || Array(6).fill(false);
      appState.progress.scores = data.progress?.scores || Array(6).fill(0);
      appState.answered = data.answered || {};
      appState.practice = data.practice || {};
      appState.sim = data.sim || appState.sim;
    }
  } catch (_) {}
}
function safeSave() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); } catch (_) {}
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', appState.theme);
  els.themeToggle.innerHTML = appState.theme === 'dark'
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function formatMoney(v){ return new Intl.NumberFormat('ru-RU', {style:'currency', currency:'RUB', maximumFractionDigits:0}).format(v); }
function formatPct(v){ return new Intl.NumberFormat('ru-RU',{minimumFractionDigits:1,maximumFractionDigits:1}).format(v) + '%'; }
function getLessonKey(i){ return `lesson-${i}`; }

function renderNav() {
  els.nav.innerHTML = LESSONS.map((lesson, idx)=>`
    <button class="lesson-link ${idx===appState.activeLesson?'active':''}" data-lesson="${idx}">
      <span class="lesson-index">${lesson.id}</span>
      <span><strong>${lesson.title}</strong><span>${lesson.goal}</span></span>
    </button>`).join('');
}

function updateProgress() {
  const lessonsDone = appState.progress.lessons.filter(Boolean).length;
  const testsDone = appState.progress.tests.filter(Boolean).length;
  const percent = Math.round(((lessonsDone + testsDone) / 12) * 100);
  els.progressFill.style.width = `${percent}%`;
  els.completedLessons.textContent = lessonsDone;
  els.completedTests.textContent = testsDone;
  els.progressPercent.textContent = `${percent}%`;
}

function renderLesson() {
  const lesson = LESSONS[appState.activeLesson];
  appState.progress.lessons[appState.activeLesson] = true;
  els.pageTitle.textContent = lesson.title;
  els.pageSubtitle.textContent = lesson.goal;
  els.lessonChip.textContent = `Урок ${lesson.id} из 6`;
  renderNav();
  els.lessonPanel.innerHTML = `
    <h3>${lesson.title}</h3>
    <p class="panel-intro">${lesson.goal}</p>
    <div class="key-tags">${lesson.concepts.map(c=>`<span class="tag">${c}</span>`).join('')}</div>
    <div class="lesson-sections" style="margin-top:var(--space-5)">${lesson.sections.map(s=>`<p>${s}</p>`).join('')}</div>
    <div class="tip" style="margin-top:var(--space-5)"><strong>${lesson.tipTitle}</strong><p>${lesson.tipText}</p></div>
    ${renderPracticeBlock(lesson)}
  `;
  bindPracticeBlock(lesson);
  renderWidget(lesson.widget);
  renderTest(lesson.tests);
  updateProgress();
  safeSave();
}

function renderPracticeBlock(lesson) {
  const tasks = PRACTICES[lesson.id] || PRACTICES.default;
  return `
    <section class="practice-card" aria-labelledby="practice-title-${lesson.id}">
      <div class="eyebrow">Практическое задание</div>
      <h4 id="practice-title-${lesson.id}">${tasks.title}</h4>
      <p>${tasks.text}</p>
      <div class="practice-list">
        ${tasks.checks.map((check, idx) => {
          const checked = appState.practice?.[lesson.id]?.includes(idx) ? 'checked' : '';
          return `<label class="practice-check"><input type="checkbox" data-practice="${lesson.id}" data-check="${idx}" ${checked}> <span>${check}</span></label>`;
        }).join('')}
      </div>
      <div class="practice-status" id="practiceStatus-${lesson.id}"></div>
    </section>
  `;
}

function bindPracticeBlock(lesson) {
  const updateStatus = () => {
    const tasks = PRACTICES[lesson.id] || PRACTICES.default;
    const done = appState.practice?.[lesson.id]?.length || 0;
    const status = document.getElementById(`practiceStatus-${lesson.id}`);
    if (status) status.textContent = done === tasks.checks.length
      ? 'Задание выполнено. Отлично — можно переходить к тесту.'
      : `Выполнено пунктов: ${done} из ${tasks.checks.length}.`;
  };

  els.lessonPanel.querySelectorAll('[data-practice]').forEach(input => {
    input.addEventListener('change', () => {
      const lessonId = String(input.dataset.practice);
      const checkId = +input.dataset.check;
      appState.practice[lessonId] = appState.practice[lessonId] || [];
      if (input.checked && !appState.practice[lessonId].includes(checkId)) appState.practice[lessonId].push(checkId);
      if (!input.checked) appState.practice[lessonId] = appState.practice[lessonId].filter(x => x !== checkId);
      safeSave();
      updateStatus();
    });
  });

  updateStatus();
}

function scrollMainToTop() {
  const content = document.querySelector('.content');
  const main = document.getElementById('main');
  if (content) content.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (main) main.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderWidget(type) {
  const widgets = {
    'capital-calc': `<div class="widget"><h4>Калькулятор сложного процента</h4><p>Оцените, как стартовый капитал и регулярные пополнения влияют на итоговую сумму.</p><div class="form-row"><div class="field"><label for="cc-start">Стартовый капитал, ₽</label><input id="cc-start" type="number" value="100000"></div><div class="field"><label for="cc-month">Ежемесячное пополнение, ₽</label><input id="cc-month" type="number" value="15000"></div><div class="field"><label for="cc-rate">Средняя доходность, % годовых</label><input id="cc-rate" type="number" value="12" step="0.1"></div><div class="field"><label for="cc-years">Горизонт, лет</label><input id="cc-years" type="number" value="5"></div></div><div class="btn-row"><button class="btn btn-primary" id="calcCapital">Рассчитать</button></div><div class="result-box" id="capitalResult"></div></div>`,
    'stock-simulator': `<div class="widget"><h4>Тренажер торговли акциями</h4><p>Учебный симулятор показывает, как меняется цена, средняя цена покупки и результат позиции.</p><div class="simulator-top"><div><div class="price" id="stockPrice"></div><div id="stockChange" class="price-change up"></div></div><div class="btn-row"><button class="btn btn-secondary" id="tickBtn">Обновить цену</button><button class="btn btn-primary" id="buyBtn">Купить 10 шт.</button><button class="btn btn-ghost" id="sellBtn">Продать 10 шт.</button></div></div><div class="chart"><svg viewBox="0 0 600 180" preserveAspectRatio="none"><path id="stockArea" d=""/><path id="stockLine" d=""/></svg></div><div class="sim-balance"><div class="sim-kpi"><div class="label">Кэш</div><div class="value" id="cashValue"></div></div><div class="sim-kpi"><div class="label">Акции</div><div class="value" id="sharesValue"></div></div><div class="sim-kpi"><div class="label">Результат</div><div class="value" id="pnlValue"></div></div></div></div>`,
    'bond-calculator': `<div class="widget"><h4>Калькулятор доходности облигации</h4><p>Сравните купон и приблизительную доходность к погашению с учетом цены покупки.</p><div class="form-row"><div class="field"><label for="bond-price">Цена покупки, % от номинала</label><input id="bond-price" type="number" value="97" step="0.1"></div><div class="field"><label for="bond-coupon">Купон, % годовых</label><input id="bond-coupon" type="number" value="11.5" step="0.1"></div><div class="field"><label for="bond-years">Лет до погашения</label><input id="bond-years" type="number" value="3"></div><div class="field"><label for="bond-face">Номинал, ₽</label><input id="bond-face" type="number" value="1000"></div></div><div class="btn-row"><button class="btn btn-primary" id="calcBond">Рассчитать</button></div><div class="result-box" id="bondResult"></div></div>`,
    'etf-pie': `<div class="widget"><h4>Конструктор ETF-портфеля</h4><p>Измените доли активов и проверьте, что портфель в сумме дает 100%.</p><div class="form-row"><div class="field"><label for="etf-stock">Акции, %</label><input id="etf-stock" type="range" min="0" max="100" value="50"></div><div class="field"><label for="etf-bond">Облигации, %</label><input id="etf-bond" type="range" min="0" max="100" value="30"></div><div class="field"><label for="etf-gold">Золото, %</label><input id="etf-gold" type="range" min="0" max="100" value="10"></div><div class="field"><label for="etf-cash">Деньги, %</label><input id="etf-cash" type="range" min="0" max="100" value="10"></div></div><div class="portfolio-bars" id="portfolioBars"></div><div class="result-box" id="etfResult"></div></div>`,
    'risk-profiler': `<div class="widget"><h4>Тест на риск-профиль</h4><p>Ответьте на три вопроса и получите учебную подсказку по структуре портфеля.</p><div class="field"><label for="risk-horizon">Ваш горизонт инвестирования</label><select id="risk-horizon"><option value="1">До 2 лет</option><option value="2">2–5 лет</option><option value="3">Более 5 лет</option></select></div><div class="field"><label for="risk-drop">Как вы реагируете на просадку -15%?</label><select id="risk-drop"><option value="1">Стану сокращать риск</option><option value="2">Ничего не меняю</option><option value="3">Готов докупить</option></select></div><div class="field"><label for="risk-goal">Что важнее?</label><select id="risk-goal"><option value="1">Стабильность</option><option value="2">Баланс</option><option value="3">Рост капитала</option></select></div><div class="btn-row"><button class="btn btn-primary" id="calcRisk">Определить профиль</button></div><div class="result-box" id="riskResult"></div></div>`,
    'iis-calculator': `<div class="widget"><h4>Калькулятор ИИС-3 и вклада</h4><p>Сравните налоговый вычет по ИИС-3 и предполагаемый доход по вкладу.</p><div class="form-row"><div class="field"><label for="iis-amount">Годовое пополнение, ₽</label><input id="iis-amount" type="number" value="400000"></div><div class="field"><label for="iis-tax">Ставка НДФЛ, %</label><input id="iis-tax" type="number" value="22"></div><div class="field"><label for="iis-deposit">Ставка по вкладу, %</label><input id="iis-deposit" type="number" value="15" step="0.1"></div><div class="field"><label for="iis-years">Срок, лет</label><input id="iis-years" type="number" value="5"></div></div><div class="btn-row"><button class="btn btn-primary" id="calcIis">Сравнить</button></div><div class="result-box" id="iisResult"></div></div>`
  };
  els.widgetPanel.innerHTML = `<h3>Практический блок</h3><p class="panel-intro">Каждый урок закрепляется интерактивным упражнением.</p><div class="widget-grid">${widgets[type]}</div>`;
  bindWidget(type);
}

function renderStockChart(){
  const data = appState.sim.history;
  const max = Math.max(...data), min = Math.min(...data);
  const toY = v => 150 - ((v - min) / (max - min || 1)) * 110;
  const toX = i => 24 + i * ((600 - 48) / (data.length - 1));
  const pts = data.map((v,i)=>`${toX(i)},${toY(v)}`);
  document.getElementById('stockLine').setAttribute('d', 'M ' + pts.join(' L '));
  document.getElementById('stockLine').setAttribute('fill', 'none');
  document.getElementById('stockLine').setAttribute('stroke', 'var(--color-primary)');
  document.getElementById('stockLine').setAttribute('stroke-width', '4');
  document.getElementById('stockLine').setAttribute('stroke-linecap', 'round');
  document.getElementById('stockArea').setAttribute('d', 'M ' + pts.join(' L ') + ` L ${toX(data.length-1)},170 L 24,170 Z`);
  document.getElementById('stockArea').setAttribute('fill', 'color-mix(in srgb, var(--color-primary) 16%, transparent)');
}
function updateStockKpis(){
  const marketValue = appState.sim.shares * appState.sim.price;
  const pnl = marketValue - appState.sim.shares * appState.sim.avgPrice;
  document.getElementById('stockPrice').textContent = new Intl.NumberFormat('ru-RU',{minimumFractionDigits:1,maximumFractionDigits:1}).format(appState.sim.price) + ' ₽';
  document.getElementById('stockChange').textContent = 'Учебная котировка';
  document.getElementById('cashValue').textContent = formatMoney(appState.sim.cash);
  document.getElementById('sharesValue').textContent = appState.sim.shares + ' шт.';
  const pnlEl = document.getElementById('pnlValue');
  pnlEl.textContent = (pnl >= 0 ? '+' : '') + formatMoney(pnl);
  pnlEl.style.color = pnl >= 0 ? 'var(--color-success)' : 'var(--color-error)';
}

function bindWidget(type){
  if(type === 'capital-calc'){
    const calc = ()=>{
      const start = +document.getElementById('cc-start').value || 0;
      const month = +document.getElementById('cc-month').value || 0;
      const rate = (+document.getElementById('cc-rate').value || 0) / 100 / 12;
      const years = +document.getElementById('cc-years').value || 0;
      let total = start;
      for(let i=0;i<years*12;i++) total = (total + month) * (1 + rate);
      const invested = start + month*years*12;
      document.getElementById('capitalResult').innerHTML = `<strong>Итоговый капитал: ${formatMoney(total)}</strong>Вложено: ${formatMoney(invested)}<br>Потенциальный инвестиционный результат: ${formatMoney(total - invested)}`;
    }; document.getElementById('calcCapital').onclick = calc; calc();
  }
  if(type === 'stock-simulator'){
    const tick = ()=>{
      const old = appState.sim.price;
      appState.sim.price = Math.max(60, +(appState.sim.price + (Math.random()*6 - 3)).toFixed(1));
      appState.sim.history.push(appState.sim.price);
      if(appState.sim.history.length > 18) appState.sim.history.shift();
      const pct = ((appState.sim.price - old)/old)*100;
      const changeEl = document.getElementById('stockChange');
      changeEl.textContent = `${pct >= 0 ? '+' : ''}${new Intl.NumberFormat('ru-RU',{minimumFractionDigits:1,maximumFractionDigits:1}).format(pct)}% за тик`;
      changeEl.className = `price-change ${pct >= 0 ? 'up':'down'}`;
      renderStockChart(); updateStockKpis(); safeSave();
    };
    document.getElementById('tickBtn').onclick = tick;
    document.getElementById('buyBtn').onclick = ()=>{
      const qty = 10, cost = qty * appState.sim.price;
      if(appState.sim.cash < cost) return;
      const totalCost = appState.sim.avgPrice * appState.sim.shares + cost;
      appState.sim.shares += qty;
      appState.sim.avgPrice = totalCost / appState.sim.shares;
      appState.sim.cash -= cost;
      updateStockKpis(); safeSave();
    };
    document.getElementById('sellBtn').onclick = ()=>{
      const qty = Math.min(10, appState.sim.shares);
      if(qty <= 0) return;
      appState.sim.shares -= qty;
      appState.sim.cash += qty * appState.sim.price;
      if(appState.sim.shares === 0) appState.sim.avgPrice = 0;
      updateStockKpis(); safeSave();
    };
    renderStockChart(); updateStockKpis();
  }
  if(type === 'bond-calculator'){
    const calc = ()=>{
      const pricePct = +document.getElementById('bond-price').value || 0;
      const couponPct = +document.getElementById('bond-coupon').value || 0;
      const years = +document.getElementById('bond-years').value || 1;
      const face = +document.getElementById('bond-face').value || 1000;
      const price = face * pricePct / 100;
      const coupon = face * couponPct / 100;
      const ytm = ((coupon + ((face - price)/years)) / ((face + price)/2)) * 100;
      document.getElementById('bondResult').innerHTML = `<strong>Ориентир по доходности к погашению: ${formatPct(ytm)}</strong>Годовой купон: ${formatMoney(coupon)}<br>Цена покупки: ${formatMoney(price)}<br>Если бумага куплена ниже номинала, итоговая доходность выше купона.`;
    }; document.getElementById('calcBond').onclick = calc; calc();
  }
  if(type === 'etf-pie'){
    const ids = ['etf-stock','etf-bond','etf-gold','etf-cash'];
    const labels = ['Акции','Облигации','Золото','Деньги'];
    const colors = ['var(--color-primary)','var(--color-blue)','var(--color-gold)','var(--color-text-muted)'];
    const sync = ()=>{
      const vals = ids.map(id=> +document.getElementById(id).value);
      const total = vals.reduce((a,b)=>a+b,0);
      document.getElementById('portfolioBars').innerHTML = vals.map((v,i)=>`<div class="portfolio-bar"><div class="meta"><span>${labels[i]}</span><strong>${v}%</strong></div><div class="bar"><span style="width:${v}%;background:${colors[i]}"></span></div></div>`).join('');
      document.getElementById('etfResult').innerHTML = `<strong>${total === 100 ? 'Портфель сбалансирован' : 'Нужна корректировка'}</strong>Сумма долей: ${total}%`;
    };
    ids.forEach(id=> document.getElementById(id).addEventListener('input', sync)); sync();
  }
  if(type === 'risk-profiler'){
    document.getElementById('calcRisk').onclick = ()=>{
      const score = ['risk-horizon','risk-drop','risk-goal'].reduce((acc,id)=> acc + (+document.getElementById(id).value || 0), 0);
      let title = 'Консервативный профиль', text = 'Ориентир: выше доля облигаций и денег, ниже доля акций.';
      if(score >= 6 && score <= 7) { title = 'Умеренный профиль'; text = 'Ориентир: сбалансированное сочетание акций и облигаций, например учебный диапазон около 60/40.'; }
      if(score >= 8) { title = 'Агрессивный профиль'; text = 'Ориентир: выше доля акций и длинный горизонт. Важно быть готовым к заметным просадкам.'; }
      document.getElementById('riskResult').innerHTML = `<strong>${title}</strong>${text}`;
    };
  }
  if(type === 'iis-calculator'){
    const calc = ()=>{
      const amount = +document.getElementById('iis-amount').value || 0;
      const tax = (+document.getElementById('iis-tax').value || 0) / 100;
      const deposit = (+document.getElementById('iis-deposit').value || 0) / 100;
      const years = +document.getElementById('iis-years').value || 1;
      const deductionBase = Math.min(amount, 400000);
      const deduction = deductionBase * tax;
      const depositIncome = amount * deposit * years;
      document.getElementById('iisResult').innerHTML = `<strong>Потенциальный вычет по ИИС-3: ${formatMoney(deduction)}</strong>База для вычета: ${formatMoney(deductionBase)}<br>Доход по вкладу за ${years} лет без капитализации: ${formatMoney(depositIncome)}<br>Для сохранения льгот по ИИС-3 важно выдержать минимальный срок владения.`;
    }; document.getElementById('calcIis').onclick = calc; calc();
  }
}

function renderTest(tests){
  const key = getLessonKey(appState.activeLesson);
  const answered = appState.answered[key] || {};
  let score = appState.progress.scores[appState.activeLesson] || 0;
  els.testPanel.innerHTML = `<h3>Проверка знаний</h3><p class="panel-intro">После каждого ответа показывается пояснение.</p><div class="test-list">${tests.map((test, qi)=>`
    <div class="test-card" data-test="${qi}"><div class="test-q">${qi+1}. ${test.q}</div><div class="answers">${test.answers.map((ans, ai)=>`<button class="answer-btn" data-q="${qi}" data-a="${ai}">${ans}</button>`).join('')}</div><div class="answer-expl hidden" id="expl-${qi}"></div></div>`).join('')}</div><div class="test-score" id="testScore">Правильных ответов: ${score} из ${tests.length}</div>`;

  Object.entries(answered).forEach(([qIdx, chosen])=> applyAnswerState(+qIdx, chosen, tests));

  els.testPanel.querySelectorAll('.answer-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const q = +btn.dataset.q, a = +btn.dataset.a;
      if ((appState.answered[key] || {})[q] !== undefined) return;
      appState.answered[key] = { ...(appState.answered[key] || {}), [q]: a };
      applyAnswerState(q, a, tests);
      const answersCount = Object.keys(appState.answered[key]).length;
      score = Object.entries(appState.answered[key]).reduce((acc,[idx,chosen])=> acc + (tests[idx].correct === chosen ? 1 : 0), 0);
      appState.progress.scores[appState.activeLesson] = score;
      document.getElementById('testScore').textContent = `Правильных ответов: ${score} из ${tests.length}`;
      if (answersCount === tests.length) appState.progress.tests[appState.activeLesson] = true;
      updateProgress(); safeSave();
    });
  });
}

function applyAnswerState(q, chosen, tests) {
  const card = els.testPanel.querySelector(`[data-test="${q}"]`);
  if (!card) return;
  [...card.querySelectorAll('.answer-btn')].forEach((b, idx)=>{
    if (idx === tests[q].correct) b.classList.add('correct');
    else if (idx === chosen) b.classList.add('wrong');
    b.disabled = true;
  });
  const expl = document.getElementById(`expl-${q}`);
  expl.classList.remove('hidden');
  expl.textContent = tests[q].expl;
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  }
}
function setupInstall() {
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    els.installBtn.disabled = false;
  });
  els.installBtn.addEventListener('click', async ()=>{
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    els.installBtn.disabled = true;
  });
}
function updateOnlineStatus() {
  els.offlineBadge.textContent = navigator.onLine ? 'Онлайн' : 'Оффлайн';
  els.offlineBadge.className = `chip ${navigator.onLine ? '' : 'chip-offline'}`;
}

function initEvents() {
  els.nav.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-lesson]');
    if(!btn) return;
    appState.activeLesson = +btn.dataset.lesson;
    renderLesson();
    els.sidebar.classList.remove('open');
    setTimeout(scrollMainToTop, 0);
  });
  els.themeToggle.addEventListener('click', ()=>{
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    applyTheme(); safeSave();
  });
  els.menuToggle.addEventListener('click', ()=> els.sidebar.classList.toggle('open'));
  document.addEventListener('click', (e)=>{
    if(window.innerWidth > 920) return;
    if(!els.sidebar.contains(e.target) && !els.menuToggle.contains(e.target)) els.sidebar.classList.remove('open');
  });
  els.resetBtn.addEventListener('click', ()=>{
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

function fillEmbedCode() {
  if (!els.embedCode) return;
  els.embedCode.textContent = `<!-- АКБФ Академия PWA с меню: вставить в Tilda, блок T123 -->\n<div id="akbf-academy-wrapper">\n  <iframe\n    id="akbf-academy-iframe"\n    src="https://abfvkutmin.github.io/akbf-academy-v3.tar/"\n    allow="clipboard-write"\n    referrerpolicy="no-referrer"\n    loading="lazy">\n  </iframe>\n</div>\n\n<style>\n  #akbf-academy-wrapper { width:100%; height:100vh; min-height:900px; overflow:hidden; background:#f4f7fb; }\n  #akbf-academy-iframe { width:100%; height:100%; border:none; outline:none; display:block; background:#f4f7fb; }\n  @media screen and (max-width:768px) {\n    #akbf-academy-wrapper { width:100vw; height:100svh; min-height:100svh; margin-left:calc(50% - 50vw); margin-right:calc(50% - 50vw); }\n  }\n</style>\n\n<script>\n(function(){function adjust(){var wrapper=document.getElementById('akbf-academy-wrapper'); if(!wrapper) return; if(window.innerWidth<768){wrapper.style.width='100vw';wrapper.style.height='100svh';wrapper.style.minHeight='100svh';wrapper.style.marginLeft='calc(50% - 50vw)';wrapper.style.marginRight='calc(50% - 50vw)';} else {wrapper.style.width='100%';wrapper.style.height='100vh';wrapper.style.minHeight='900px';wrapper.style.marginLeft='0';wrapper.style.marginRight='0';}} window.addEventListener('resize',adjust); window.addEventListener('DOMContentLoaded',adjust); adjust();})();\n<\/script>`;
}

(function init(){
  safeLoad();
  if (!appState.theme) appState.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme();
  initEvents();
  fillEmbedCode();
  renderNav();
  renderLesson();
  updateProgress();
  updateOnlineStatus();
  setupInstall();
  registerSW();
})();

const splash = document.getElementById('splashScreen');
const onboardingBackdrop = document.getElementById('onboardingBackdrop');
const onboardingModal = document.getElementById('onboardingModal');
const closeOnboardingBtn = document.getElementById('closeOnboarding');
const startLearningBtn = document.getElementById('startLearning');
const showOnboardingBtn = document.getElementById('showOnboarding');
const openCompletionBtn = document.getElementById('openCompletion');
const completionPanel = document.getElementById('completionPanel');
const finalLessons = document.getElementById('finalLessons');
const finalTests = document.getElementById('finalTests');
const finalScore = document.getElementById('finalScore');
const certificateStatus = document.getElementById('certificateStatus');
const downloadCertificateBtn = document.getElementById('downloadCertificate');
const scrollToLessonsBtn = document.getElementById('scrollToLessons');

function hideSplash(){ setTimeout(()=> splash && splash.classList.add('hidden'), 900); }
function showOnboarding(){ onboardingBackdrop.classList.remove('hidden'); onboardingModal.classList.remove('hidden'); }
function hideOnboarding(){ onboardingBackdrop.classList.add('hidden'); onboardingModal.classList.add('hidden'); }
function updateCompletionPanel(){
  const lessonsDone = appState.progress.lessons.filter(Boolean).length;
  const testsDone = appState.progress.tests.filter(Boolean).length;
  const totalScore = appState.progress.scores.reduce((a,b)=>a+b,0);
  finalLessons.textContent = `${lessonsDone}/6`;
  finalTests.textContent = `${testsDone}/6`;
  finalScore.textContent = `${totalScore} из 18`;
  certificateStatus.textContent = testsDone === 6 ? 'Курс завершен' : 'В процессе';
  completionPanel.classList.toggle('hidden', false);
}
function exportCertificate(){
  const card = document.getElementById('certificateCard');
  const rect = card.getBoundingClientRect();
  const canvas = document.createElement('canvas');
  const scale = 2;
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;
  const ctx = canvas.getContext('2d');
  ctx.scale(scale, scale);
  ctx.fillStyle = '#efe7d9';
  ctx.fillRect(0,0,rect.width,rect.height);
  ctx.strokeStyle = '#d8c8af';
  ctx.lineWidth = 2;
  ctx.strokeRect(12,12,rect.width-24,rect.height-24);
  ctx.fillStyle = '#476166';
  ctx.font = '12px Satoshi, Arial';
  ctx.fillText('АКБФ АКАДЕМИЯ ИНВЕСТИЦИЙ', 28, 42);
  ctx.fillStyle = '#213032';
  ctx.font = 'bold 28px Satoshi, Arial';
  ctx.fillText('Сертификат о прохождении', 28, 96);
  ctx.font = 'bold 18px Satoshi, Arial';
  ctx.fillText('Слушатель учебного модуля', 28, 150);
  ctx.font = '16px Satoshi, Arial';
  const lines = [
    'Подтверждается завершение базового курса по инвестициям,',
    'включающего темы по акциям, облигациям, фондам,',
    'риск-профилю и ИИС-3.'
  ];
  lines.forEach((line,i)=> ctx.fillText(line, 28, 190 + i*26));
  ctx.font = 'bold 14px Satoshi, Arial';
  ctx.fillText('Формат', 28, rect.height - 72);
  ctx.fillText('Статус', rect.width/2, rect.height - 72);
  ctx.font = '16px Satoshi, Arial';
  ctx.fillText('PWA-обучение', 28, rect.height - 44);
  ctx.fillText(certificateStatus.textContent, rect.width/2, rect.height - 44);
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = 'akbf-academy-certificate.png';
  a.click();
}

const originalUpdateProgress = updateProgress;
updateProgress = function(){
  originalUpdateProgress();
  if (typeof updateCompletionPanel === 'function') updateCompletionPanel();
};

// Финальная инициализация клиентской версии.
hideSplash();
if (!localStorage.getItem('akbf-academy-onboarding-seen')) showOnboarding();
closeOnboardingBtn?.addEventListener('click', ()=>{ hideOnboarding(); localStorage.setItem('akbf-academy-onboarding-seen','1'); });
startLearningBtn?.addEventListener('click', ()=>{ hideOnboarding(); localStorage.setItem('akbf-academy-onboarding-seen','1'); });
onboardingBackdrop?.addEventListener('click', ()=>{ hideOnboarding(); localStorage.setItem('akbf-academy-onboarding-seen','1'); });
showOnboardingBtn?.addEventListener('click', showOnboarding);
openCompletionBtn?.addEventListener('click', ()=>{ updateCompletionPanel(); completionPanel.scrollIntoView({behavior:'smooth', block:'start'}); });
downloadCertificateBtn?.addEventListener('click', exportCertificate);
scrollToLessonsBtn?.addEventListener('click', ()=> document.getElementById('lessonPanel')?.scrollIntoView({behavior:'smooth', block:'start'}));
updateCompletionPanel();
