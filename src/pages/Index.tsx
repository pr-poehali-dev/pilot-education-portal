import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const vocabularyCategories = [
    {
      title: "Радиосвязь",
      icon: "Radio",
      description: "Фразеология пилота",
      terms: [
        { en: "Roger", ru: "Понял", phonetic: "[ˈrɒdʒə]" },
        { en: "Wilco", ru: "Понял, выполню", phonetic: "[ˈwɪlkəʊ]" },
        { en: "Mayday", ru: "Сигнал бедствия", phonetic: "[ˈmeɪdeɪ]" },
        { en: "Pan-Pan", ru: "Срочное сообщение", phonetic: "[pæn pæn]" },
      ]
    },
    {
      title: "Приборы кокпита",
      icon: "Gauge",
      description: "Оборудование кабины",
      terms: [
        { en: "Altimeter", ru: "Высотомер", phonetic: "[ælˈtɪmɪtə]" },
        { en: "Airspeed indicator", ru: "Указатель скорости", phonetic: "[ˈeəspiːd ˈɪndɪkeɪtə]" },
        { en: "Artificial horizon", ru: "Авиагоризонт", phonetic: "[ˌɑːtɪˈfɪʃl həˈraɪzn]" },
        { en: "Compass", ru: "Компас", phonetic: "[ˈkʌmpəs]" },
      ]
    },
    {
      title: "Метеорология",
      icon: "Cloud",
      description: "Погодные условия",
      terms: [
        { en: "Turbulence", ru: "Турбулентность", phonetic: "[ˈtɜːbjʊləns]" },
        { en: "Visibility", ru: "Видимость", phonetic: "[ˌvɪzəˈbɪləti]" },
        { en: "Crosswind", ru: "Боковой ветер", phonetic: "[ˈkrɒswɪnd]" },
        { en: "Ceiling", ru: "Нижняя граница облаков", phonetic: "[ˈsiːlɪŋ]" },
      ]
    },
    {
      title: "Команды управления",
      icon: "Navigation",
      description: "Инструкции экипажу",
      terms: [
        { en: "Cleared for takeoff", ru: "Разрешён взлёт", phonetic: "[klɪəd fɔː ˈteɪkɒf]" },
        { en: "Hold short", ru: "Ждите у линии", phonetic: "[həʊld ʃɔːt]" },
        { en: "Taxi to runway", ru: "Руление на ВПП", phonetic: "[ˈtæksi tuː ˈrʌnweɪ]" },
        { en: "Go around", ru: "Уход на второй круг", phonetic: "[ɡəʊ əˈraʊnd]" },
      ]
    },
  ];

  const phrasesByCategory = {
    preflight: [
      { en: "Request taxi clearance", ru: "Запрос разрешения на руление" },
      { en: "Ready for departure", ru: "Готов к вылету" },
      { en: "Request startup", ru: "Запрос разрешения на запуск двигателей" },
    ],
    inflight: [
      { en: "Climbing to flight level 350", ru: "Набор эшелона 350" },
      { en: "Request vectors for weather", ru: "Запрос векторов из-за погоды" },
      { en: "Leveling off at 10,000 feet", ru: "Выход на эшелон 10,000 футов" },
    ],
    landing: [
      { en: "Request landing clearance", ru: "Запрос разрешения на посадку" },
      { en: "Final approach", ru: "Финальный заход" },
      { en: "Runway in sight", ru: "ВПП в визуальном контакте" },
    ],
  };

  const flashcards = [
    { id: 1, front: "VFR", back: "Visual Flight Rules\n(Правила визуальных полётов)" },
    { id: 2, front: "IFR", back: "Instrument Flight Rules\n(Правила полётов по приборам)" },
    { id: 3, front: "ATC", back: "Air Traffic Control\n(Управление воздушным движением)" },
    { id: 4, front: "ATIS", back: "Automatic Terminal Information Service\n(Автоматическая служба информации)" },
    { id: 5, front: "METAR", back: "Meteorological Aerodrome Report\n(Метеорологическая сводка аэродрома)" },
    { id: 6, front: "NOTAM", back: "Notice to Airmen\n(Извещение авиаторам)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <Icon name="Languages" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Aviation English</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {["home", "vocabulary", "phrases", "flashcards", "practice"].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "ghost"}
                  onClick={() => scrollToSection(section)}
                  className="transition-all"
                >
                  {section === "home" && "Главная"}
                  {section === "vocabulary" && "Лексика"}
                  {section === "phrases" && "Фразы"}
                  {section === "flashcards" && "Карточки"}
                  {section === "practice" && "Практика"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg" 
            alt="Cockpit view" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-6 animate-float">
            <Icon name="Languages" size={80} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Авиационный английский
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Изучайте профессиональную лексику и фразеологию для работы в кабине пилота.
            Более 200 терминов и фраз для уверенной радиосвязи.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => scrollToSection("vocabulary")}>
              <Icon name="BookOpen" size={24} className="mr-2" />
              Начать изучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection("practice")}>
              <Icon name="Headphones" size={24} className="mr-2" />
              Тренировка произношения
            </Button>
          </div>
        </div>
      </section>

      <section id="vocabulary" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="BookText" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Авиационная лексика</h3>
            <p className="text-muted-foreground text-lg">
              Основные термины по категориям с транскрипцией
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vocabularyCategories.map((category, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                      {category.title}
                    </CardTitle>
                    <Badge variant="secondary">{category.terms.length} слов</Badge>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.terms.map((term, termIdx) => (
                      <div key={termIdx} className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="font-semibold text-lg text-foreground">{term.en}</div>
                            <div className="text-sm text-muted-foreground">{term.phonetic}</div>
                            <div className="text-sm text-primary mt-1">{term.ru}</div>
                          </div>
                          <Button size="sm" variant="ghost" className="mt-1">
                            <Icon name="Volume2" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="phrases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Стандартные фразы</h3>
            <p className="text-muted-foreground text-lg">
              Фразеология для всех этапов полёта
            </p>
          </div>
          <Tabs defaultValue="preflight" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="preflight">Перед полётом</TabsTrigger>
              <TabsTrigger value="inflight">В полёте</TabsTrigger>
              <TabsTrigger value="landing">Посадка</TabsTrigger>
            </TabsList>
            <TabsContent value="preflight" className="space-y-4 mt-6">
              {phrasesByCategory.preflight.map((phrase, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-foreground mb-2">{phrase.en}</div>
                        <div className="text-muted-foreground">{phrase.ru}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Play" size={16} className="mr-2" />
                        Слушать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="inflight" className="space-y-4 mt-6">
              {phrasesByCategory.inflight.map((phrase, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-foreground mb-2">{phrase.en}</div>
                        <div className="text-muted-foreground">{phrase.ru}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Play" size={16} className="mr-2" />
                        Слушать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="landing" className="space-y-4 mt-6">
              {phrasesByCategory.landing.map((phrase, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-lg font-semibold text-foreground mb-2">{phrase.en}</div>
                        <div className="text-muted-foreground">{phrase.ru}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Play" size={16} className="mr-2" />
                        Слушать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="flashcards" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="SquareStack" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Карточки для запоминания</h3>
            <p className="text-muted-foreground text-lg">
              Нажмите на карточку, чтобы перевернуть
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {flashcards.map((card) => (
              <div
                key={card.id}
                className="relative h-64 cursor-pointer group"
                onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
              >
                <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${flippedCard === card.id ? 'rotate-y-180' : ''}`}>
                  <Card className="absolute inset-0 backface-hidden flex items-center justify-center bg-primary text-primary-foreground hover:shadow-xl transition-shadow">
                    <CardContent className="text-center p-6">
                      <div className="text-4xl font-bold mb-2">{card.front}</div>
                      <div className="text-sm opacity-80">Нажмите для перевода</div>
                    </CardContent>
                  </Card>
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center hover:shadow-xl transition-shadow">
                    <CardContent className="text-center p-6">
                      <div className="text-2xl font-semibold whitespace-pre-line">{card.back}</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Icon name="Mic" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Тренировка произношения</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Практикуйте правильное произношение авиационных терминов
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Icon name="Headphones" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Аудио уроки</CardTitle>
                  <CardDescription>Слушайте носителей языка</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="Play" size={18} className="mr-2" />
                    Начать прослушивание
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Mic" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Распознавание речи</CardTitle>
                  <CardDescription>Проверьте своё произношение</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Mic" size={18} className="mr-2" />
                    Записать голос
                  </Button>
                </CardContent>
              </Card>
            </div>
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Полезные ресурсы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="https://www.icao.int" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="ExternalLink" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">ICAO Aviation English</div>
                    <div className="text-sm text-muted-foreground">Официальная фразеология ИКАО</div>
                  </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="Youtube" size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold">Видео с реальной радиосвязью</div>
                    <div className="text-sm text-muted-foreground">ATC коммуникации пилотов</div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Languages" size={24} />
            <span className="text-xl font-bold">Aviation English</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Авиационный английский для пилотов
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
