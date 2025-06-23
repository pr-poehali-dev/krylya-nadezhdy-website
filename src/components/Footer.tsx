import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer
      className="bg-white border-t border-sky-200 py-12 px-4"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-sky-500 rounded-lg p-2">
                <Icon
                  name="Wings"
                  className="h-6 w-6 text-white"
                  fallback="Shield"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-800">
                  Крылья надежды
                </h3>
                <p className="text-sky-600 text-sm">
                  Государственная организация
                </p>
              </div>
            </div>
            <p className="text-sky-700 leading-relaxed mb-4">
              Мы работаем для того, чтобы каждый человек мог получить
              качественную поддержку и необходимую информацию для решения своих
              задач.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sky-700">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                <span className="text-sm">8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center text-sky-700">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                <span className="text-sm">info@wings-hope.gov.ru</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-800">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Родителям
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Специалистам
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Профориентация
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-sky-800">
              Информация
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Вопрос-ответ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Полезные сайты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-600 hover:text-sky-800 transition-colors duration-200 text-sm"
                >
                  Карта сайта
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-sky-200 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-sky-600">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Крылья надежды. Все права защищены.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-sky-800 transition-colors duration-200"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="hover:text-sky-800 transition-colors duration-200"
            >
              Пользовательское соглашение
            </a>
            <a
              href="#"
              className="hover:text-sky-800 transition-colors duration-200"
            >
              Доступность
            </a>
          </div>
        </div>

        {/* Accessibility Notice */}
        <div className="mt-8 p-4 bg-sky-50 rounded-lg border border-sky-200">
          <div className="flex items-start space-x-3">
            <Icon
              name="Info"
              className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0"
            />
            <div>
              <h5 className="font-medium text-sky-800 mb-1">
                Доступность сайта
              </h5>
              <p className="text-sky-700 text-sm leading-relaxed">
                Наш сайт разработан с учетом требований веб-доступности. Если у
                вас возникли трудности с использованием сайта, свяжитесь с нами
                по телефону 8 (800) 123-45-67 или email info@wings-hope.gov.ru
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
