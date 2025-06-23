import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const sections = [
    {
      title: "Новости",
      description: "Актуальные новости и объявления организации",
      icon: "Newspaper",
      color: "bg-sky-50 border-sky-200",
      iconColor: "text-sky-600",
      link: "/news",
    },
    {
      title: "Родителям",
      description: "Информация и ресурсы для родителей",
      icon: "Heart",
      color: "bg-sky-50 border-sky-200",
      iconColor: "text-sky-600",
      link: "/parents",
    },
    {
      title: "Специалистам",
      description: "Профессиональные материалы и методики",
      icon: "BookOpen",
      color: "bg-white border-sky-200",
      iconColor: "text-sky-600",
      link: "/specialists",
    },
    {
      title: "Работодателю",
      description: "Программы трудоустройства и сотрудничества",
      icon: "Building",
      color: "bg-sky-50 border-sky-200",
      iconColor: "text-sky-600",
      link: "/employers",
    },
    {
      title: "Полезные сайты",
      description: "Подборка полезных ресурсов и ссылок",
      icon: "ExternalLink",
      color: "bg-white border-sky-200",
      iconColor: "text-sky-600",
      link: "/useful-sites",
    },
    {
      title: "Вопрос-ответ",
      description: "Часто задаваемые вопросы и ответы",
      icon: "MessageCircle",
      color: "bg-sky-50 border-sky-200",
      iconColor: "text-sky-600",
      link: "/faq",
    },
    {
      title: "Профориентация",
      description: "Помощь в выборе профессии и карьерном росте",
      icon: "Target",
      color: "bg-white border-sky-200",
      iconColor: "text-sky-600",
      link: "/career-guidance",
    },
    {
      title: "Контактная информация",
      description: "Способы связи и расположение офисов",
      icon: "Phone",
      color: "bg-sky-50 border-sky-200",
      iconColor: "text-sky-600",
      link: "/contacts",
    },
  ];

  return (
    <section
      className="py-16 px-4 bg-white"
      role="navigation"
      aria-label="Основные разделы"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Разделы портала
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            Выберите интересующий вас раздел для получения подробной информации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className={`${section.color} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${section.iconColor} mr-3`}>
                    <Icon name={section.icon as any} className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {section.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full hover:bg-white hover:text-gray-900"
                >
                  Перейти
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
