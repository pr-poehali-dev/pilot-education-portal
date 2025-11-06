import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const videoLinks = [
    { title: "Основи авіації", duration: "45 хв", url: "https://youtube.com", thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg" },
    { title: "Метеорологія для пілотів", duration: "52 хв", url: "https://youtube.com", thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/02d4ba0a-9e5d-49db-912a-51718be6961c.jpg" },
    { title: "Аеродинаміка польоту", duration: "38 хв", url: "https://youtube.com", thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg" },
    { title: "Навігація та GPS", duration: "41 хв", url: "https://youtube.com", thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/02d4ba0a-9e5d-49db-912a-51718be6961c.jpg" },
  ];

  const tests = [
    { title: "Теоретичний іспит PPL", questions: 60, url: "https://forms.google.com" },
    { title: "Метеорологія - Модуль 1", questions: 30, url: "https://forms.google.com" },
    { title: "Правила польотів VFR", questions: 25, url: "https://forms.google.com" },
    { title: "Аварійні процедури", questions: 40, url: "https://forms.google.com" },
  ];

  const materials = [
    { title: "Аеронавігаційні карти України", type: "PDF", size: "12 MB", icon: "Map" },
    { title: "Інструкція пілота Cessna 172", type: "PDF", size: "8.5 MB", icon: "BookOpen" },
    { title: "Чек-лист перед польотом", type: "PDF", size: "1.2 MB", icon: "ClipboardCheck" },
    { title: "Радіозв'язок: фразеологія", type: "PDF", size: "3.4 MB", icon: "Radio" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 animate-fade-in">
              <Icon name="Plane" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Школа Пілотів</h1>
            </div>
            <div className="hidden md:flex space-x-1">
              {["home", "videos", "tests", "materials", "library", "contacts"].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "ghost"}
                  onClick={() => scrollToSection(section)}
                  className="transition-all"
                >
                  {section === "home" && "Головна"}
                  {section === "videos" && "Відеокурси"}
                  {section === "tests" && "Тестування"}
                  {section === "materials" && "Матеріали"}
                  {section === "library" && "Бібліотека"}
                  {section === "contacts" && "Контакти"}
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
            <Icon name="Plane" size={80} className="text-primary" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Ваш шлях до неба
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Професійна підготовка пілотів з досвідченими інструкторами. 
            Від теорії до практичних навичок польоту.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => scrollToSection("videos")}>
              <Icon name="PlayCircle" size={24} className="mr-2" />
              Почати навчання
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection("tests")}>
              <Icon name="FileCheck" size={24} className="mr-2" />
              Пройти тест
            </Button>
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Video" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Відеокурси</h3>
            <p className="text-muted-foreground text-lg">
              Навчальні матеріали від сертифікованих інструкторів
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoLinks.map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="PlayCircle" size={64} className="text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{video.title}</span>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    {video.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      Дивитись курс
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tests" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="ClipboardList" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Тестування</h3>
            <p className="text-muted-foreground text-lg">
              Перевірте свої знання за допомогою офіційних тестів
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tests.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-l-4 border-l-primary" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{test.title}</span>
                    <Icon name="FileCheck" size={24} className="text-primary" />
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Icon name="HelpCircle" size={16} className="mr-2" />
                    {test.questions} питань
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="default" asChild>
                    <a href={test.url} target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      Почати тест
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="FolderOpen" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Навчальні матеріали</h3>
            <p className="text-muted-foreground text-lg">
              Завантажте необхідні документи та інструкції
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={material.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center text-lg">{material.title}</CardTitle>
                  <CardDescription className="text-center">
                    {material.type} • {material.size}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Download" size={18} className="mr-2" />
                    Завантажити
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="library" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Icon name="Library" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Бібліотека знань</h3>
            <p className="text-muted-foreground text-lg">
              Корисна інформація для майбутніх пілотів
            </p>
          </div>
          <Tabs defaultValue="basics" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basics">Основи</TabsTrigger>
              <TabsTrigger value="regulations">Правила</TabsTrigger>
              <TabsTrigger value="safety">Безпека</TabsTrigger>
            </TabsList>
            <TabsContent value="basics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Принципи польоту</CardTitle>
                  <CardDescription>Базові концепції аеродинаміки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Чотири основні сили: підйомна сила, вага, тяга, опір</p>
                  <p>• Принцип Бернуллі та робота крила</p>
                  <p>• Кути атаки та критичні режими</p>
                  <p>• Керування літаком: елерони, руль висоти, руль напрямку</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Авіаційні прилади</CardTitle>
                  <CardDescription>Основне обладнання кабіни</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Індикатор швидкості та висотомір</p>
                  <p>• Авіагоризонт та курсовий гіроскоп</p>
                  <p>• Варіометр та компас</p>
                  <p>• Навігаційне обладнання GPS/VOR</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="regulations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Правила повітряного руху</CardTitle>
                  <CardDescription>VFR та IFR правила</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Мінімальні метеоумови для VFR польотів</p>
                  <p>• Правила правостороннього та лівостороннього кола</p>
                  <p>• Зони контрольованого та неконтрольованого повітряного простору</p>
                  <p>• Ешелонування та пріоритет повітряних суден</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="safety" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Аварійні процедури</CardTitle>
                  <CardDescription>Дії у критичних ситуаціях</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>• Відмова двигуна: вибір майданчика для посадки</p>
                  <p>• Штопор: розпізнавання та виведення</p>
                  <p>• Пожежа на борту: протипожежні процедури</p>
                  <p>• Аварійна посадка: підготовка та виконання</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-4">Контакти</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Маєте питання? Зв'яжіться з нашою командою інструкторів
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Icon name="Phone" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Телефон</CardTitle>
                  <CardDescription>+380 (XX) XXX-XX-XX</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Mail" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>info@pilotschool.ua</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="MapPin" size={32} className="text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Адреса</CardTitle>
                  <CardDescription>м. Київ, аеропорт</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Написати нам
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записатись на курс
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Plane" size={24} />
            <span className="text-xl font-bold">Школа Пілотів</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Школа Пілотів. Професійна авіаційна освіта.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
