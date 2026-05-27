import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — AI Systems" },
      { name: "description", content: "Политика конфиденциальности ООО «ИИ Стратегия» (AI Systems): обработка персональных данных, цели, правовые основания и права субъектов." },
      { property: "og:title", content: "Политика конфиденциальности — AI Systems" },
      { property: "og:description", content: "Политика конфиденциальности ООО «ИИ Стратегия» (AI Systems)." },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Политика <span className="gradient-text">конфиденциальности</span>
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Редакция от 27.05.2026</p>

          <div className="mt-10 glass-strong rounded-2xl p-6 sm:p-10 space-y-8 text-foreground/85 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Общие положения</h2>
              <p className="mt-3">
                Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок обработки и
                защиты персональных данных пользователей сайта{" "}
                <a href="https://aisystems.company" className="text-brand-cyan hover:text-brand-violet transition">https://aisystems.company</a>{" "}
                (далее — «Сайт») оператором ООО «ИИ Стратегия» (далее — «Компания»).
              </p>
              <p className="mt-3">
                Используя Сайт и оставляя заявку, пользователь подтверждает согласие с условиями настоящей Политики.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Оператор персональных данных</h2>
              <ul className="mt-3 space-y-1.5">
                <li><span className="text-muted-foreground">Компания:</span> ООО «ИИ Стратегия»</li>
                <li><span className="text-muted-foreground">Сайт:</span> https://aisystems.company</li>
                <li><span className="text-muted-foreground">Email:</span> aistrategiy@bk.ru</li>
                <li><span className="text-muted-foreground">Телефон:</span> +7 (987) 186-12-00</li>
                <li><span className="text-muted-foreground">Юридический адрес:</span> 423812, Республика Татарстан, г. Набережные Челны, пр-кт Мира, д. 23, кв. 16</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. Какие данные мы обрабатываем</h2>
              <p className="mt-3">При заполнении форм на Сайте Компания может собирать следующие категории данных:</p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 marker:text-brand-cyan">
                <li>имя или название организации;</li>
                <li>контактный телефон;</li>
                <li>адрес электронной почты;</li>
                <li>идентификаторы в мессенджерах (Telegram, WhatsApp);</li>
                <li>сферу бизнеса и описание задачи;</li>
                <li>технические данные: IP-адрес, тип браузера, cookie-файлы, источник перехода.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. Цели обработки</h2>
              <p className="mt-3">Персональные данные обрабатываются в следующих целях:</p>
              <ul className="mt-3 list-disc list-inside space-y-1.5 marker:text-brand-cyan">
                <li>обработка заявок и обратная связь;</li>
                <li>заключение и исполнение договоров на оказание услуг по разработке индивидуальных AI-систем,
                    цифровых систем управления, автоматизации бизнес-процессов, AI-аналитики, внутренних
                    бизнес-платформ и сопутствующих консультационных услуг;</li>
                <li>информирование пользователя о статусе работ и предложениях Компании;</li>
                <li>улучшение работы Сайта и анализ поведения посетителей.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Правовые основания</h2>
              <p className="mt-3">
                Обработка персональных данных осуществляется на основании согласия субъекта данных,
                а также в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Передача данных третьим лицам</h2>
              <p className="mt-3">
                Компания не передаёт персональные данные третьим лицам, за исключением случаев,
                предусмотренных законодательством Российской Федерации, и привлечения подрядчиков,
                действующих на условиях конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Хранение и защита</h2>
              <p className="mt-3">
                Данные хранятся на защищённых серверах и обрабатываются с применением технических и
                организационных мер защиты. Срок хранения определяется целями обработки и требованиями закона.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Права пользователя</h2>
              <p className="mt-3">
                Пользователь вправе запросить информацию об обработке своих данных, потребовать их уточнения,
                блокирования или удаления, направив запрос на адрес{" "}
                <a href="mailto:aistrategiy@bk.ru" className="text-brand-cyan hover:text-brand-violet transition">aistrategiy@bk.ru</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. Контакты</h2>
              <p className="mt-3">
                По вопросам обработки персональных данных обращайтесь в ООО «ИИ Стратегия»,{" "}
                <a href="mailto:aistrategiy@bk.ru" className="text-brand-cyan hover:text-brand-violet transition">aistrategiy@bk.ru</a>,
                +7 (987) 186-12-00.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
