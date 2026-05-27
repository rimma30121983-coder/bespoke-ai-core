import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Пользовательское соглашение — AI Systems" },
      { name: "description", content: "Пользовательское соглашение ООО «ИИ Стратегия» (AI Systems): условия использования сайта и услуг по разработке AI-систем." },
      { property: "og:title", content: "Пользовательское соглашение — AI Systems" },
      { property: "og:description", content: "Пользовательское соглашение ООО «ИИ Стратегия» (AI Systems)." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Пользовательское <span className="gradient-text">соглашение</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Редакция от 27.05.2026</p>

          <div className="mt-10 glass-strong rounded-2xl p-6 sm:p-10 space-y-8 text-foreground/85 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p className="mt-3">
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между
                ООО «ИИ Стратегия» (далее — «Компания») и пользователем сайта{" "}
                <a href="https://aisystems.company" className="text-brand-cyan hover:text-brand-violet transition">https://aisystems.company</a>{" "}
                (далее — «Сайт»).
              </p>
              <p className="mt-3">
                Использование Сайта означает безусловное согласие пользователя с условиями настоящего Соглашения.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Предмет</h2>
              <p className="mt-3">
                Компания предоставляет пользователю доступ к информации об услугах и возможность направить заявку
                на оказание услуг: разработка индивидуальных AI-систем, цифровых систем управления, автоматизация
                бизнес-процессов, AI-аналитика, внутренние бизнес-платформы и сопутствующие консультационные услуги.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Права и обязанности сторон</h2>
              <p className="mt-3">
                Компания обязуется обеспечивать работоспособность Сайта и обрабатывать заявки в разумные сроки.
                Пользователь обязуется предоставлять достоверную информацию и не использовать Сайт для действий,
                нарушающих законодательство Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Интеллектуальная собственность</h2>
              <p className="mt-3">
                Все материалы Сайта (тексты, графика, логотипы, дизайн, программный код) являются собственностью
                Компании и защищены законодательством об интеллектуальной собственности. Использование материалов
                без письменного согласия Компании не допускается.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Персональные данные</h2>
              <p className="mt-3">
                Обработка персональных данных пользователей осуществляется в соответствии с{" "}
                <Link to="/privacy-policy" className="text-brand-cyan hover:text-brand-violet transition">Политикой конфиденциальности</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Ответственность</h2>
              <p className="mt-3">
                Компания не несёт ответственности за прямые или косвенные убытки, возникшие в связи с
                использованием или невозможностью использования Сайта, а также за действия третьих лиц.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Изменения Соглашения</h2>
              <p className="mt-3">
                Компания вправе в одностороннем порядке вносить изменения в настоящее Соглашение. Актуальная
                редакция размещается на Сайте и вступает в силу с момента публикации.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Контакты</h2>
              <p className="mt-3">
                ООО «ИИ Стратегия», email{" "}
                <a href="mailto:aistrategiy@bk.ru" className="text-brand-cyan hover:text-brand-violet transition">aistrategiy@bk.ru</a>,
                телефон +7 (987) 186-12-00, юридический адрес: 423812, Республика Татарстан,
                г. Набережные Челны, пр-кт Мира, д. 23, кв. 16.
              </p>
            </section>
          </div>

          <div className="mt-10 glass-strong rounded-2xl p-6 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Реквизиты <span className="gradient-text">компании</span>
            </h2>
            <dl className="mt-6 divide-y divide-white/10 text-[15px]">
              {[
                ["Полное наименование", "Общество с ограниченной ответственностью «ИИ Стратегия»"],
                ["Краткое наименование", "ООО «ИИ Стратегия»"],
                ["ИНН / КПП / ОГРН", "1650437696 / 165001001 / 1241600041968"],
                ["Юридический адрес", "423812, Республика Татарстан, г. Набережные Челны, пр-кт Мира, д. 23, кв. 16"],
                ["Адрес для корреспонденции", "423800, Республика Татарстан, г. Набережные Челны, ул. Машиностроительная, 91А, IT PARK"],
                ["Расчётный счёт", "40702810110001672679"],
                ["Банк / БИК / к/с", "АО «ТБанк», БИК 044525974, к/с 30101810145250000974"],
                ["Телефон / Email", "+7 (987) 186-12-00 / aistrategiy@bk.ru"],
                ["Подписант", "Генеральный директор Мамонтов Евгений Анатольевич"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-1 sm:gap-6 py-3.5">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="text-foreground/90 break-words">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
