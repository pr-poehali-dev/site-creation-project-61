import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="glass border-border/50">
          <CardHeader>
            <CardTitle className="text-4xl gradient-text">
              Политика конфиденциальности
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Последнее обновление: 6 декабря 2024 г.
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Общие положения</h2>
              <p className="leading-relaxed">
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
                которую сайт Камчатка Тур, расположенный на доменном имени kamchatka-tour.ru, может получить о Пользователе 
                во время использования сайта, программ и продуктов сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Определения терминов</h2>
              <p className="leading-relaxed mb-2">
                В настоящей Политике конфиденциальности используются следующие термины:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Администрация сайта</strong> — уполномоченные сотрудники на управление сайтом, действующие от имени Камчатка Тур</li>
                <li><strong>Пользователь сайта</strong> — лицо, имеющее доступ к Сайту посредством сети Интернет</li>
                <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Какие данные мы собираем</h2>
              <p className="leading-relaxed mb-2">
                При использовании нашего сайта мы можем собирать следующую информацию:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Информация о бронировании туров</li>
                <li>IP-адрес и данные браузера (автоматически)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Цели обработки персональных данных</h2>
              <p className="leading-relaxed mb-2">
                Мы используем ваши персональные данные для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Обработки заявок на бронирование туров</li>
                <li>Связи с вами по вопросам ваших заказов</li>
                <li>Отправки информационных рассылок (при вашем согласии)</li>
                <li>Улучшения качества наших услуг</li>
                <li>Соблюдения законодательных требований</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Защита персональных данных</h2>
              <p className="leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты ваших персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к персональным данным 
                имеют только уполномоченные сотрудники компании.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Передача данных третьим лицам</h2>
              <p className="leading-relaxed">
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных 
                законодательством Российской Федерации, или с вашего явного согласия.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Ваши права</h2>
              <p className="leading-relaxed mb-2">
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Получать информацию о наличии и содержании ваших персональных данных</li>
                <li>Требовать уточнения, обновления или удаления ваших данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие Администрации в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Срок хранения данных</h2>
              <p className="leading-relaxed">
                Мы храним ваши персональные данные в течение срока, необходимого для достижения целей обработки, 
                но не более 5 лет с момента последнего взаимодействия, если иное не предусмотрено законодательством.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Контактная информация</h2>
              <p className="leading-relaxed">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
              </p>
              <ul className="list-none space-y-2 ml-4 mt-2">
                <li>Email: info@kamchatka-tour.ru</li>
                <li>Телефон: +7 (123) 456-78-90</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Изменения в Политике</h2>
              <p className="leading-relaxed">
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
                При внесении изменений в актуальной редакции указывается дата последнего обновления. 
                Новая редакция Политики вступает в силу с момента ее размещения на сайте.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
