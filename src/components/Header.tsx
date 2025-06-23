import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="bg-white shadow-sm border-b border-gray-200"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 bg-sky-400 rounded-lg p-2">
              <Icon
                name="Wings"
                className="h-8 w-8 text-white"
                fallback="Shield"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Название</h1>
              <p className="text-sm text-sky-100">
                Государственная организация
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-1"
            role="navigation"
            aria-label="Основная навигация"
          >
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            >
              Новости
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            >
              Родителям
            </Button>
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-sky-600 hover:bg-sky-50"
            >
              Контакты
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Открыть меню"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200"
            role="navigation"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Главная
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Новости
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Родителям
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Специалистам
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Работодателю
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Полезные сайты
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Вопрос-ответ
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Профориентация
              </Button>
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-sky-600 hover:bg-sky-50"
              >
                Контакты
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
