:root {
  --bg: #F2F5FB;
  --card: #fff;
  --ink: #17213A;
  --muted: #5B6580;
  --line: #D9E0EE;
  --acc: #2F5BEA;
  --acc-ink: #fff;
  --hl: #FFD84D;
  box-sizing: border-box;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #111729;
    --card: #1A2340;
    --ink: #EEF1FA;
    --muted: #A2ACC8;
    --line: #2D3857;
    --acc: #7C9BFF;
    --acc-ink: #0E1530;
  }
}

:root[data-theme="dark"] {
  --bg: #111729;
  --card: #1A2340;
  --ink: #EEF1FA;
  --muted: #A2ACC8;
  --line: #2D3857;
  --acc: #7C9BFF;
  --acc-ink: #0E1530;
}

html {
  scroll-padding-top: env(safe-area-inset-top, 0px);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Onest", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  line-height: 1.5;
}

main {
  max-width: 600px;
  margin: 0 auto;
  padding: 28px 18px 48px;
}

h1 {
  font-size: clamp(28px, 7vw, 40px);
  line-height: 1.1;
  font-weight: 800;
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

h1 mark {
  background: var(--hl);
  color: #17213A;
  padding: 0 0.18em;
  border-radius: 6px;
}

.lead {
  color: var(--muted);
  margin: 0 0 24px;
  font-size: 17px;
}

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 22px;
}

.bar {
  height: 6px;
  background: var(--line);
  border-radius: 3px;
  margin-bottom: 18px;
  overflow: hidden;
}

.bar i {
  display: block;
  width: 0;
  height: 100%;
  background: var(--acc);
  transition: width 0.3s;
}

h2 {
  font-size: 22px;
  line-height: 1.25;
  margin: 0 0 16px;
  font-weight: 600;
}

.opt {
  display: block;
  width: 100%;
  text-align: left;
  font: inherit;
  color: var(--ink);
  background: transparent;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.opt:hover {
  border-color: var(--acc);
}

.opt:focus-visible,
.btn:focus-visible {
  outline: 3px solid var(--acc);
  outline-offset: 2px;
}

.btn {
  font: inherit;
  font-weight: 600;
  background: var(--acc);
  color: var(--acc-ink);
  border: 0;
  border-radius: 12px;
  padding: 13px 22px;
  cursor: pointer;
}

.res h2 {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 8px;
}

.res p {
  margin: 0 0 14px;
}

.res .kicker {
  color: var(--muted);
  margin-bottom: 6px;
}

.res h3 {
  font-size: 17px;
  margin: 18px 0 6px;
}

.res ul {
  margin: 0;
  padding-left: 20px;
}

.res li {
  margin-bottom: 5px;
}

.res .also {
  margin: 20px 0 0;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  color: var(--muted);
}

.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 22px;
}

[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}(function () {
  "use strict";

  // Вопросы: [текст ответа, {баллы по направлениям}]
  var QUESTIONS = [
    {
      t: "Что тебе нравится делать больше всего?",
      o: [
        ["Общаться и заниматься с детьми", { tutor: 2 }],
        ["Работать с текстами и переводить", { trans: 2 }],
        ["Придумывать карточки, игры, задания", { mat: 2 }],
        ["Всё понемногу", { tutor: 1, trans: 1, mat: 1 }]
      ]
    },
    {
      t: "Сколько часов в неделю ты можешь уделять подработке?",
      o: [
        ["До 5 часов", { trans: 1, mat: 1 }],
        ["5–10 часов", { tutor: 1, trans: 1 }],
        ["Больше 10 часов", { tutor: 2 }]
      ]
    },
    {
      t: "Какой формат тебе удобнее?",
      o: [
        ["Онлайн, из дома", { trans: 1, mat: 1 }],
        ["Очно, с живым общением", { tutor: 2 }],
        ["Не важно", { tutor: 1, trans: 1, mat: 1 }]
      ]
    }
  ];

  // Результаты
  var RESULTS = {
    tutor: {
      name: "Занятия с детьми младших классов",
      desc: "Тебе подходит работа с людьми. Английский для малышей строится на играх, песнях и карточках, и твой уровень языка для этого достаточен.",
      steps: [
        "Расскажи о себе знакомым и в родительских чатах района или школы.",
        "Подготовь пробное занятие на 30 минут: игра, песня, мини-квиз.",
        "Реши, что тебе удобнее: занятия очно или онлайн на платформах для репетиторов."
      ]
    },
    trans: {
      name: "Переводы и работа с текстами",
      desc: "Тебе подходит спокойная работа с языком. Гибкий график позволяет совмещать её с учёбой.",
      steps: [
        "Выбери 2–3 простых типа заказов: описания товаров, субтитры, сайты.",
        "Сделай 2–3 пробных перевода и оформи их как портфолио.",
        "Зарегистрируйся на бирже фриланса и откликайся на небольшие заказы."
      ]
    },
    mat: {
      name: "Учебные материалы и мини-квизы",
      desc: "Тебе подходит творческая работа. Карточки, рабочие листы и квизы можно делать в свободные часы и предлагать учителям и родителям.",
      steps: [
        "Сделай набор из 10 карточек или один рабочий лист по одной теме.",
        "Покажи его знакомым учителям и родителям и спроси, что добавить.",
        "Если материал заходит, делай серии по темам и предлагай их за плату."
      ]
    }
  };

  var step = 0;
  var scores = {};

  function $(id) {
    return document.getElementById(id);
  }

  function start() {
    step = 0;
    scores = { tutor: 0, trans: 0, mat: 0 };
    showQuestion();
  }

  function showQuestion() {
    var q = QUESTIONS[step];
    var box = $("opts");

    $("start").hidden = true;
    $("result").hidden = true;
    $("quiz").hidden = false;

    $("q").textContent = q.t;
    $("prog").style.width = (step / QUESTIONS.length) * 100 + "%";
    box.textContent = "";

    q.o.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "opt";
      btn.textContent = item[0];
      btn.addEventListener("click", function () {
        answer(item[1]);
      });
      box.appendChild(btn);
    });
  }

  function answer(points) {
    for (var key in points) {
      scores[key] += points[key];
    }
    step++;
    if (step < QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    var keys = Object.keys(scores).sort(function (a, b) {
      return scores[b] - scores[a];
    });
    var main = RESULTS[keys[0]];
    var second = RESULTS[keys[1]];
    var list = $("res-steps");

    $("quiz").hidden = true;
    $("result").hidden = false;

    $("res-title").textContent = main.name;
    $("res-desc").textContent = main.desc;

    list.textContent = "";
    main.steps.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
    });

    $("res-also").textContent =
      "Запасной вариант: " + second.name.toLowerCase() + ". Его можно пробовать параллельно.";

    window.scrollTo(0, 0);
  }

  $("go").addEventListener("click", start);
  $("again").addEventListener("click", start);
})();