import {
  AlertTriangle, EyeOff, ClipboardX, Shuffle, BarChart3, Hand, Puzzle, BotOff,
  Search, LayoutGrid, Palette, Rocket,
  Gauge, Users, ListChecks, Workflow, Truck, Brain, Plug, ShieldCheck, FileBarChart, Bell, BookOpen, Boxes,
  Factory, Stethoscope, GraduationCap, Building2, Scale, Wrench, Megaphone, Briefcase, ShoppingCart, Network, Warehouse, MapPin,
  Check, X,
  AlertOctagon, TrendingDown, Clock, FileText, MessageSquare, Lightbulb, ShieldAlert, Cog,
  Microscope, FileEdit, Eye, Code2, FlaskConical, RefreshCw,
  Trophy, Sparkles, Settings as SettingsIcon, ChevronRight,
} from "lucide-react";

const SectionTitle = ({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground ${center ? "" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
        {eyebrow}
      </div>
    )}
    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 ${className}`}>{children}</div>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white shrink-0">
    {children}
  </div>
);

/* ---------------- PROBLEMS ---------------- */
export function Problems() {
  const items = [
    { i: <AlertTriangle className="w-5 h-5" />, t: "Данные разбросаны по Excel, чатам и разным сервисам" },
    { i: <EyeOff className="w-5 h-5" />, t: "Руководитель не видит полную картину бизнеса" },
    { i: <ClipboardX className="w-5 h-5" />, t: "Сотрудники теряют задачи и договорённости" },
    { i: <Shuffle className="w-5 h-5" />, t: "Продажи, клиенты и поставщики ведутся хаотично" },
    { i: <BarChart3 className="w-5 h-5" />, t: "Нет единой аналитики и прозрачности" },
    { i: <Hand className="w-5 h-5" />, t: "Много ручной работы" },
    { i: <Puzzle className="w-5 h-5" />, t: "Стандартные CRM не подходят под реальные процессы" },
    { i: <BotOff className="w-5 h-5" />, t: "AI не встроен в ежедневную работу команды" },
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Проблема"
          title={<>Когда бизнес растёт, таблиц и мессенджеров <span className="gradient-text">уже недостаточно</span></>}
          subtitle="Разрозненные данные, потерянные задачи и отсутствие прозрачности мешают руководителю видеть реальную картину бизнеса."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <Card key={it.t}>
              <Icon>{it.i}</Icon>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{it.t}</p>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-lg sm:text-xl font-medium">
          Мы превращаем хаос в <span className="gradient-text">единую управляемую систему</span>.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
export function Solution() {
  const steps = [
    { i: <Search className="w-5 h-5" />, n: "01", t: "Анализируем процессы", d: "Изучаем текущую структуру бизнеса, задачи, роли и узкие места." },
    { i: <LayoutGrid className="w-5 h-5" />, n: "02", t: "Проектируем систему", d: "Создаём логику разделов, сценарии пользователей, права доступа и будущую архитектуру." },
    { i: <Palette className="w-5 h-5" />, n: "03", t: "Разрабатываем интерфейс", d: "Делаем удобный, адаптивный и понятный интерфейс под ежедневную работу команды." },
    { i: <Rocket className="w-5 h-5" />, n: "04", t: "Внедряем и улучшаем", d: "Запускаем систему, тестируем сценарии и дорабатываем под реальные процессы." },
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Решение"
          title={<>Разрабатываем CRM-систему <span className="gradient-text">именно под вашу бизнес-модель</span></>}
          subtitle="Мы изучаем ваши процессы, роли сотрудников, этапы продаж, работу с клиентами, поставщиками, задачами и аналитикой — и на этой основе создаём индивидуальную систему."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <Card key={s.n}>
              <div className="flex items-center justify-between">
                <Icon>{s.i}</Icon>
                <span className="text-xs font-mono text-muted-foreground">{s.n}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURES ---------------- */
export function Features() {
  const items = [
    { i: <Gauge className="w-5 h-5" />, t: "Дашборд руководителя", d: "Ключевые метрики, задачи, продажи, эффективность команды и состояние бизнеса в одном экране." },
    { i: <Users className="w-5 h-5" />, t: "Клиенты и контрагенты", d: "Единая база клиентов, партнёров, поставщиков, контактов и истории взаимодействий." },
    { i: <ListChecks className="w-5 h-5" />, t: "Задачи и процессы", d: "Постановка задач, контроль сроков, статусы, ответственные и напоминания." },
    { i: <Workflow className="w-5 h-5" />, t: "Продажи и воронки", d: "Управление лидами, сделками, этапами, оплатами, договорами и результатами менеджеров." },
    { i: <Truck className="w-5 h-5" />, t: "Поставщики и закупки", d: "Контроль поставщиков, условий, заявок, заказов, логистики и взаиморасчётов." },
    { i: <Brain className="w-5 h-5" />, t: "AI-анализ", d: "ИИ анализирует данные, выявляет проблемы, даёт рекомендации и помогает принимать решения." },
    { i: <Plug className="w-5 h-5" />, t: "Интеграции", d: "Подключение почты, телефонии, мессенджеров, сайта, форм, складов и платёжных систем." },
    { i: <ShieldCheck className="w-5 h-5" />, t: "Роли и доступы", d: "Разные уровни доступа для руководителей, менеджеров, администраторов и партнёров." },
    { i: <FileBarChart className="w-5 h-5" />, t: "Отчёты и аналитика", d: "Финансовые отчёты, эффективность сотрудников, динамика продаж, прогнозы и выводы." },
    { i: <Bell className="w-5 h-5" />, t: "Уведомления", d: "Автоматические напоминания, события, просрочки и важные сигналы для команды." },
    { i: <BookOpen className="w-5 h-5" />, t: "База знаний", d: "Инструкции, регламенты, документы, шаблоны и обучение сотрудников внутри системы." },
    { i: <Boxes className="w-5 h-5" />, t: "Индивидуальные модули", d: "Любые разделы под конкретную сферу: медицина, строительство, франшизы, производство." },
  ];
  return (
    <section id="features" className="relative py-20 lg:py-28">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-radial-fade opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Возможности"
          title={<>Что может входить в вашу <span className="gradient-text">CRM / AI-систему</span></>}
          subtitle="Система собирается из нужных модулей под вашу сферу, команду и бизнес-процессы."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Card key={it.t} className="group">
              <Icon>{it.i}</Icon>
              <h3 className="mt-4 text-base font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
export function Industries() {
  const items = [
    { i: <Network className="w-4 h-4" />, t: "Франшизы и управляющие компании" },
    { i: <Briefcase className="w-4 h-4" />, t: "Отделы продаж" },
    { i: <Factory className="w-4 h-4" />, t: "Производство" },
    { i: <Wrench className="w-4 h-4" />, t: "Строительство и ремонт" },
    { i: <Stethoscope className="w-4 h-4" />, t: "Медицина и клиники" },
    { i: <GraduationCap className="w-4 h-4" />, t: "Образование и онлайн-школы" },
    { i: <Truck className="w-4 h-4" />, t: "Логистика" },
    { i: <Building2 className="w-4 h-4" />, t: "Недвижимость" },
    { i: <Scale className="w-4 h-4" />, t: "Юридические и консалтинговые компании" },
    { i: <Cog className="w-4 h-4" />, t: "Сервисные компании" },
    { i: <Megaphone className="w-4 h-4" />, t: "Маркетинговые агентства" },
    { i: <Briefcase className="w-4 h-4" />, t: "B2B-компании" },
    { i: <ShoppingCart className="w-4 h-4" />, t: "E-commerce" },
    { i: <Network className="w-4 h-4" />, t: "Дилерские и партнёрские сети" },
    { i: <Warehouse className="w-4 h-4" />, t: "Складские и закупочные процессы" },
  ];
  return (
    <section id="industries" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Для кого"
          title={<>Создаём системы для <span className="gradient-text">разных сфер бизнеса</span></>}
          subtitle="Каждая система проектируется индивидуально — под процессы, роли, задачи и цели конкретной компании."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {items.map((it) => (
            <div key={it.t} className="glass rounded-full px-4 py-2.5 inline-flex items-center gap-2 text-sm hover:border-white/20 transition">
              <span className="text-brand-cyan">{it.i}</span>
              <span>{it.t}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground">
          <MapPin className="inline w-4 h-4 mr-1 text-brand-violet" />
          Даже если вашей сферы нет в списке — мы спроектируем систему под вашу бизнес-логику.
        </p>
      </div>
    </section>
  );
}

/* ---------------- COMPARISON ---------------- */
export function Comparison() {
  const rows = [
    ["Нужно подстраиваться под чужую логику", "Система строится под ваши процессы"],
    ["Много лишних функций", "Только нужные модули"],
    ["Команде сложно внедриться", "Интерфейс понятен сотрудникам"],
    ["Ограниченная кастомизация", "Можно развивать под рост бизнеса"],
    ["AI часто отсутствует", "AI можно встроить в ключевые процессы"],
    ["Разрозненные сервисы", "Всё собрано в одной системе"],
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Сравнение"
          title={<>Почему индивидуальная CRM <span className="gradient-text">лучше шаблонной</span></>}
        />

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Desktop header */}
          <div className="hidden md:grid grid-cols-2 gap-4 mb-3">
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-2 text-sm">
              <X className="w-4 h-4 text-destructive" />
              <span className="font-medium">Шаблонная CRM</span>
            </div>
            <div className="rounded-xl px-5 py-3 flex items-center gap-2 text-sm gradient-brand text-white">
              <Check className="w-4 h-4" />
              <span className="font-medium">Индивидуальная CRM</span>
            </div>
          </div>

          <div className="space-y-3">
            {rows.map(([a, b], idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="glass rounded-xl px-5 py-4 flex items-start gap-3">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <div className="md:hidden text-[11px] uppercase tracking-wide text-muted-foreground mb-1">Шаблонная</div>
                    <p className="text-sm text-muted-foreground">{a}</p>
                  </div>
                </div>
                <div className="rounded-xl px-5 py-4 flex items-start gap-3" style={{ background: "linear-gradient(135deg, oklch(0.65 0.21 265 / 0.15), oklch(0.6 0.24 295 / 0.12))", border: "1px solid oklch(1 0 0 / 0.1)" }}>
                  <Check className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                  <div>
                    <div className="md:hidden text-[11px] uppercase tracking-wide text-brand-cyan mb-1">Индивидуальная</div>
                    <p className="text-sm text-foreground/90">{b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-lg sm:text-xl font-medium">
            Индивидуальная система становится <span className="gradient-text">цифровым центром управления бизнесом</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI BLOCK ---------------- */
export function AIBlock() {
  const items = [
    { i: <AlertOctagon className="w-4 h-4" />, t: "Анализирует данные и находит слабые места" },
    { i: <Lightbulb className="w-4 h-4" />, t: "Даёт рекомендации по улучшению процессов" },
    { i: <Clock className="w-4 h-4" />, t: "Помогает контролировать задачи и просрочки" },
    { i: <FileText className="w-4 h-4" />, t: "Формирует отчёты и управленческие выводы" },
    { i: <MessageSquare className="w-4 h-4" />, t: "Анализирует клиентов, сделки и коммуникации" },
    { i: <ChevronRight className="w-4 h-4" />, t: "Подсказывает следующие действия менеджерам" },
    { i: <ShieldAlert className="w-4 h-4" />, t: "Помогает руководителю видеть риски заранее" },
    { i: <Cog className="w-4 h-4" />, t: "Автоматизирует рутинные операции" },
  ];
  return (
    <section id="ai" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-radial-fade opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="AI"
          title={<>AI <span className="gradient-text">внутри вашей системы</span></>}
          subtitle="ИИ может быть не отдельным модным инструментом, а встроенным помощником руководителя и команды."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((it) => (
              <div key={it.t} className="glass rounded-xl p-4 flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg gradient-brand inline-flex items-center justify-center text-white shrink-0">
                  {it.i}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">{it.t}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-brand-violet/30 to-brand-blue/20 blur-2xl rounded-3xl" />
            <div className="relative glass-strong rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gradient-brand inline-flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">Анализ за последние 14 дней</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] text-brand-cyan">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" /> active
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                <p className="text-sm leading-relaxed text-foreground/90">
                  В отделе продаж снизилась конверсия на этапе переговоров. Рекомендуется проверить скрипты, скорость ответа и причины отказов за последние 14 дней.
                </p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-1"><TrendingDown className="w-3 h-3" />Риск</div>
                  <div className="text-sm font-semibold text-destructive mt-1">Высокий</div>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground">Зона</div>
                  <div className="text-sm font-semibold mt-1">Продажи</div>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground">Действие</div>
                  <div className="text-sm font-semibold mt-1">Этап переговоров</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
export function Process() {
  const steps = [
    { i: <Microscope className="w-5 h-5" />, t: "Диагностика", d: "Изучаем бизнес, процессы, роли, задачи, текущие проблемы и цели." },
    { i: <FileEdit className="w-5 h-5" />, t: "Проектирование", d: "Создаём структуру будущей системы: разделы, логику, связи, права доступа и сценарии пользователей." },
    { i: <Eye className="w-5 h-5" />, t: "Прототип", d: "Показываем визуальную и функциональную модель системы, чтобы согласовать логику до разработки." },
    { i: <Code2 className="w-5 h-5" />, t: "Разработка", d: "Создаём интерфейс, модули, базу данных, интеграции, AI-функции и внутреннюю механику." },
    { i: <FlaskConical className="w-5 h-5" />, t: "Тестирование", d: "Проверяем сценарии, адаптивность, удобство, корректность данных и логику переходов." },
    { i: <RefreshCw className="w-5 h-5" />, t: "Внедрение и развитие", d: "Запускаем систему, обучаем команду и улучшаем функционал по мере роста бизнеса." },
  ];
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Процесс" title={<>Как мы <span className="gradient-text">создаём систему</span></>} />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <Card key={s.t}>
              <div className="flex items-center justify-between">
                <Icon>{s.i}</Icon>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STRUCTURE ---------------- */
export function Structure() {
  const sections = [
    "Дашборд", "Задачи", "Клиенты", "Контрагенты", "Поставщики",
    "Продажи", "Финансы", "Документы", "Аналитика", "AI-анализ",
    "Уведомления", "Пользователи", "Роли и доступы",
  ];
  const settings = ["Интеграции", "Права доступа", "Пользователи", "Уведомления", "Параметры системы"];

  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Структура"
          title={<>Пример <span className="gradient-text">структуры будущей системы</span></>}
          subtitle="Структура может быть любой — мы создаём её под вашу логику, а не заставляем бизнес подстраиваться под готовую CRM."
        />

        <div className="mt-12 glass-strong rounded-2xl p-5 sm:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {sections.map((s) => (
              <div key={s} className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3 text-sm flex items-center gap-2 hover:border-white/20 transition">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                {s}
              </div>
            ))}
            <div className="rounded-xl p-4 col-span-2 sm:col-span-3 lg:col-span-4 mt-2" style={{ background: "linear-gradient(135deg, oklch(0.65 0.21 265 / 0.12), oklch(0.6 0.24 295 / 0.1))", border: "1px solid oklch(1 0 0 / 0.1)" }}>
              <div className="flex items-center gap-2 text-sm font-medium">
                <SettingsIcon className="w-4 h-4 text-brand-violet" />
                Настройки
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {settings.map((s) => (
                  <span key={s} className="text-xs rounded-full bg-white/[0.05] border border-white/10 px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
export function Benefits() {
  const items = [
    { i: <Gauge className="w-5 h-5" />, t: "Полный контроль", d: "Руководитель видит состояние бизнеса в одном дашборде." },
    { i: <Eye className="w-5 h-5" />, t: "Прозрачность процессов", d: "Понятно, кто за что отвечает, где просрочки и что требует внимания." },
    { i: <Cog className="w-5 h-5" />, t: "Меньше ручной работы", d: "Система автоматизирует повторяющиеся действия и снижает человеческий фактор." },
    { i: <Users className="w-5 h-5" />, t: "Удобство для команды", d: "Интерфейс проектируется так, чтобы сотрудники быстро начали им пользоваться." },
    { i: <Trophy className="w-5 h-5" />, t: "Масштабируемость", d: "Систему можно развивать, добавлять модули и адаптировать под рост компании." },
    { i: <Sparkles className="w-5 h-5" />, t: "AI-рекомендации", d: "ИИ помогает не просто хранить данные, а делать из них управленческие выводы." },
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Преимущества" title={<>Что получает <span className="gradient-text">бизнес</span></>} />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <Card key={it.t}>
              <Icon>{it.i}</Icon>
              <h3 className="mt-4 text-base font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INCLUDES ---------------- */
export function Includes() {
  const items = [
    "анализ бизнес-процессов",
    "проектирование архитектуры CRM",
    "разработка дизайна интерфейса",
    "создание пользовательских ролей",
    "разработка модулей и разделов",
    "настройка базы данных",
    "создание дашбордов и аналитики",
    "внедрение AI-функций",
    "интеграции с внешними сервисами",
    "адаптация под ноутбуки, планшеты и телефоны",
    "тестирование пользовательских сценариев",
    "настройка прав доступа",
    "подготовка системы к масштабированию",
    "сопровождение и развитие",
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Скоуп" title={<>Что входит в <span className="gradient-text">создание системы</span></>} />
        <div className="mt-12 max-w-5xl mx-auto glass rounded-2xl p-6 sm:p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                <span className="text-foreground/90">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
export function Trust() {
  const items = [
    { t: "Думаем бизнес-логикой" },
    { t: "Проектируем понятную структуру" },
    { t: "Убираем лишнее" },
    { t: "Создаём систему, которой реально пользуются" },
  ];
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Подход"
          title={<>Мы понимаем бизнес, <span className="gradient-text">а не просто делаем интерфейсы</span></>}
          subtitle="Система создаётся не ради красивых экранов, а ради управляемости, прозрачности и роста бизнеса. Мы смотрим на проект глазами собственника, руководителя, сотрудника и IT-специалиста одновременно."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Card key={it.t}>
              <div className="text-xs font-mono text-brand-cyan">0{i + 1}</div>
              <h3 className="mt-3 text-base font-semibold leading-snug">{it.t}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
