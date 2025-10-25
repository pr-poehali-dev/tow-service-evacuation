import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+79001234567";
  };

  const services = [
    {
      icon: "Car",
      title: "Легковые автомобили",
      description: "Эвакуация легковых авто любой массы",
      details: "",
      price: "от 3 000 ₽"
    },
    {
      icon: "Truck",
      title: "Грузовые автомобили",
      description: "Перевозка грузовых авто и микроавтобусов",
      details: "",
      price: "от 4 500 ₽"
    },
    {
      icon: "Bike",
      title: "Мотоциклы и квадроциклы",
      description: "Бережная транспортировка мототехники",
      details: "",
      price: "от 1 800 ₽"
    },
    {
      icon: "Construction",
      title: "Спецтехника",
      description: "Эвакуация строительной и спецтехники",
      details: "",
      price: "от 6 000 ₽"
    }
  ];

  const prices = [
    { distance: "До 5 км", car: "2 500 ₽", truck: "4 500 ₽", moto: "1 800 ₽" },
    { distance: "5-10 км", car: "3 000 ₽", truck: "5 500 ₽", moto: "2 200 ₽" },
    { distance: "10-20 км", car: "4 000 ₽", truck: "7 000 ₽", moto: "3 000 ₽" },
    { distance: "20-50 км", car: "6 000 ₽", truck: "10 000 ₽", moto: "4 500 ₽" },
    { distance: "Свыше 50 км", car: "от 80 ₽/км", truck: "от 120 ₽/км", moto: "от 60 ₽/км" }
  ];

  const advantages = [
    { icon: "Clock", title: "Быстрая подача", text: "15-30 минут" },
    { icon: "Shield", title: "Страховка", text: "Полная защита" },
    { icon: "Users", title: "Опыт", text: "Работаем 10+ лет" },
    { icon: "Phone", title: "Круглосуточно", text: "24/7 без выходных" }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Отличный сервис! Приехали за 20 минут, быстро погрузили машину. Водитель вежливый и профессиональный. Цены адекватные.",
      date: "15 октября 2024"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Спасибо большое! Помогли в сложной ситуации ночью. Оператор всё объяснил, эвакуатор приехал точно в срок. Рекомендую!",
      date: "8 октября 2024"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Пользовался услугами несколько раз. Всегда довольны — быстро, аккуратно, без скрытых платежей. Буду обращаться ещё.",
      date: "2 октября 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <section className="relative bg-secondary text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/files/3b4aac38-b207-44e3-8d04-f885e9f93769.jpg" 
            alt="Эвакуатор"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Услуги эвакуатора
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Быстрая и безопасная эвакуация автомобилей по всему городу
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto font-semibold"
            >Позвонить +7 (911) 848-35-67</Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg px-8 py-6 h-auto backdrop-blur"
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                  <Icon name={adv.icon} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            О компании
          </h2>
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              Наша компания предоставляет профессиональные услуги эвакуации автомобилей с 2014 года. 
              Мы работаем круглосуточно и готовы прийти на помощь в любой ситуации.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Современный автопарк, опытные водители и прозрачные цены — всё для вашего спокойствия и безопасности вашего автомобиля.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Наши услуги
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover-scale cursor-pointer border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{service.description}</p>
                  {service.details && <p className="text-sm text-muted-foreground mb-4">{service.details}</p>}
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Цены на эвакуацию
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачные тарифы без скрытых комиссий
          </p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Расстояние</th>
                    <th className="px-6 py-4 text-left font-semibold">Легковые</th>
                    <th className="px-6 py-4 text-left font-semibold">Грузовые</th>
                    <th className="px-6 py-4 text-left font-semibold">Мото</th>
                  </tr>
                </thead>
                <tbody>
                  {prices.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-muted/20'} hover:bg-primary/5 transition-colors`}
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">{row.distance}</td>
                      <td className="px-6 py-4 text-foreground">{row.car}</td>
                      <td className="px-6 py-4 text-foreground">{row.truck}</td>
                      <td className="px-6 py-4 text-foreground">{row.moto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-primary/10 border-l-4 border-primary p-6 rounded">
            <p className="text-foreground">
              <Icon name="Info" className="inline mr-2" size={20} />
              <strong>Важно:</strong> Стоимость может изменяться в зависимости от сложности подачи, времени суток и погодных условий. Точную цену уточняйте по телефону.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-foreground">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Нужен эвакуатор прямо сейчас?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Мы приедем за 15-30 минут и решим вашу проблему
          </p>
          <Button 
            size="lg"
            onClick={handleCall}
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 h-auto font-semibold"
          >ЗВОНИ</Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70">© 2025 Служба эвакуации. Работаем круглосуточно 24/7</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;