import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const videoResources = [
    {
      title: "ATC Радиосвязь для начинающих",
      gate: "A12",
      duration: "45 min",
      status: "BOARDING",
      url: "https://youtube.com",
      thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg"
    },
    {
      title: "Фразеология пилота",
      gate: "B08",
      duration: "32 min",
      status: "ON TIME",
      url: "https://youtube.com",
      thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/02d4ba0a-9e5d-49db-912a-51718be6961c.jpg"
    },
    {
      title: "Авиационный английский ICAO",
      gate: "C15",
      duration: "58 min",
      status: "BOARDING",
      url: "https://youtube.com",
      thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg"
    },
    {
      title: "Метеорологические термины",
      gate: "D03",
      duration: "28 min",
      status: "ON TIME",
      url: "https://youtube.com",
      thumbnail: "https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/02d4ba0a-9e5d-49db-912a-51718be6961c.jpg"
    },
  ];

  const testLinks = [
    { 
      title: "Базовая лексика пилота", 
      flight: "ENG101", 
      questions: 50, 
      time: "30 min",
      url: "https://forms.google.com",
      level: "BEGINNER"
    },
    { 
      title: "Радиосвязь ATC", 
      flight: "ENG202", 
      questions: 40, 
      time: "25 min",
      url: "https://forms.google.com",
      level: "INTERMEDIATE"
    },
    { 
      title: "ICAO фразеология", 
      flight: "ENG303", 
      questions: 60, 
      time: "40 min",
      url: "https://forms.google.com",
      level: "ADVANCED"
    },
    { 
      title: "Аварийные процедуры", 
      flight: "ENG404", 
      questions: 35, 
      time: "20 min",
      url: "https://forms.google.com",
      level: "ADVANCED"
    },
  ];

  const vocabularyTopics = [
    {
      category: "TERMINAL A",
      icon: "Radio",
      color: "text-blue-500",
      items: [
        { en: "Roger", ru: "Понял", code: "A01" },
        { en: "Wilco", ru: "Понял, выполню", code: "A02" },
        { en: "Mayday", ru: "Сигнал бедствия", code: "A03" },
        { en: "Cleared for takeoff", ru: "Разрешён взлёт", code: "A04" },
      ]
    },
    {
      category: "TERMINAL B",
      icon: "Gauge",
      color: "text-orange-500",
      items: [
        { en: "Altimeter", ru: "Высотомер", code: "B01" },
        { en: "Airspeed indicator", ru: "Указатель скорости", code: "B02" },
        { en: "Artificial horizon", ru: "Авиагоризонт", code: "B03" },
        { en: "Throttle", ru: "Ручка газа", code: "B04" },
      ]
    },
    {
      category: "TERMINAL C",
      icon: "Cloud",
      color: "text-cyan-500",
      items: [
        { en: "Turbulence", ru: "Турбулентность", code: "C01" },
        { en: "Visibility", ru: "Видимость", code: "C02" },
        { en: "Crosswind", ru: "Боковой ветер", code: "C03" },
        { en: "METAR", ru: "Метеосводка", code: "C04" },
      ]
    },
  ];

  const usefulLinks = [
    { title: "ICAO Official Documentation", url: "https://www.icao.int", icon: "FileText" },
    { title: "LiveATC - Real Radio", url: "https://www.liveatc.net", icon: "Radio" },
    { title: "Skyvector Flight Planning", url: "https://skyvector.com", icon: "Map" },
    { title: "Aviation Weather", url: "https://aviationweather.gov", icon: "Cloud" },
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "BEGINNER": return "bg-green-500";
      case "INTERMEDIATE": return "bg-yellow-500";
      case "ADVANCED": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="relative">
                <Icon name="Plane" size={36} className="text-yellow-500 animate-float" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-wider">AVIATION ENGLISH</h1>
                <div className="text-xs text-yellow-500 font-mono">ИНТЕРНАЦИОНАЛЬНЫЙ ТЕРМИНАЛ</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="text-right">
                <div className="text-xs text-gray-400 font-mono">LOCAL TIME</div>
                <div className="text-xl font-bold text-white font-mono">
                  {currentTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/fddec23a-406b-444f-b3ab-7c5306f5d961/files/578daca3-7069-4624-841d-71db4517fe19.jpg" 
            alt="Airport" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="relative">
              <Icon name="Plane" size={100} className="text-yellow-500 animate-float" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            INTERNATIONAL
            <br />
            <span className="text-yellow-500">AVIATION ENGLISH</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto font-light">
            Профессиональная подготовка пилотов по авиационному английскому языку
            <br />
            <span className="text-yellow-500 font-mono text-lg">ICAO Level 4-6 • Standard Phraseology</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold" onClick={() => scrollToSection("videos")}>
              <Icon name="Tv" size={24} className="mr-2" />
              ВИДЕО КУРСЫ
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 font-bold" onClick={() => scrollToSection("tests")}>
              <Icon name="ClipboardCheck" size={24} className="mr-2" />
              ТЕСТЫ
            </Button>
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <Icon name="Tv" size={32} className="text-yellow-500" />
              <span className="text-yellow-500 font-mono font-bold text-sm tracking-wider">DEPARTURE GATE</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-white">Видео материалы</h3>
            <p className="text-gray-400 text-lg font-mono">
              EDUCATIONAL VIDEO RESOURCES • READY FOR BOARDING
            </p>
          </div>
          
          <div className="bg-slate-900/50 border border-yellow-500/20 rounded-lg overflow-hidden mb-6">
            <div className="grid grid-cols-12 gap-4 p-4 bg-slate-900 border-b border-yellow-500/30 text-yellow-500 font-mono text-xs font-bold">
              <div className="col-span-1">GATE</div>
              <div className="col-span-5">DESTINATION</div>
              <div className="col-span-2">DURATION</div>
              <div className="col-span-2">STATUS</div>
              <div className="col-span-2">ACTION</div>
            </div>
            {videoResources.map((video, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 p-4 border-b border-slate-700 hover:bg-slate-800/50 transition-colors items-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="col-span-1 text-yellow-500 font-mono font-bold text-lg">{video.gate}</div>
                <div className="col-span-5">
                  <div className="font-bold text-white">{video.title}</div>
                </div>
                <div className="col-span-2 text-gray-400 font-mono">{video.duration}</div>
                <div className="col-span-2">
                  <Badge className={`${video.status === "BOARDING" ? "bg-green-500" : "bg-blue-500"} text-white font-mono`}>
                    {video.status}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold" asChild>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      <Icon name="Play" size={16} className="mr-1" />
                      WATCH
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tests" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <Icon name="ClipboardCheck" size={32} className="text-yellow-500" />
              <span className="text-yellow-500 font-mono font-bold text-sm tracking-wider">CHECK-IN DESK</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-white">Тестирование знаний</h3>
            <p className="text-gray-400 text-lg font-mono">
              PROFICIENCY TESTS • GOOGLE FORMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testLinks.map((test, index) => (
              <Card key={index} className="bg-slate-800/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-yellow-500/10" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Plane" size={20} className="text-yellow-500" />
                      <span className="text-yellow-500 font-mono font-bold text-sm">FLIGHT {test.flight}</span>
                    </div>
                    <Badge className={`${getLevelColor(test.level)} text-white font-mono text-xs px-3`}>
                      {test.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{test.title}</CardTitle>
                  <CardDescription className="text-gray-400 font-mono text-sm mt-2">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="HelpCircle" size={14} />
                        {test.questions} questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {test.time}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold" asChild>
                    <a href={test.url} target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={18} className="mr-2" />
                      START TEST
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vocabulary" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <Icon name="BookOpen" size={32} className="text-yellow-500" />
              <span className="text-yellow-500 font-mono font-bold text-sm tracking-wider">TERMINAL MAP</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-white">Словарь терминов</h3>
            <p className="text-gray-400 text-lg font-mono">
              AVIATION VOCABULARY BY CATEGORIES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vocabularyTopics.map((topic, index) => (
              <Card key={index} className="bg-slate-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name={topic.icon as any} size={28} className={topic.color} />
                    <div>
                      <div className="text-yellow-500 font-mono text-xs font-bold">{topic.category}</div>
                      <CardTitle className="text-white text-lg">{topic.items.length} Terms</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {topic.items.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-800/50 border border-slate-700 rounded hover:border-yellow-500/30 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-yellow-500 font-mono text-xs font-bold">{item.code}</span>
                            <span className="text-white font-semibold">{item.en}</span>
                          </div>
                          <div className="text-gray-400 text-sm">{item.ru}</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-yellow-500 hover:text-yellow-400 hover:bg-yellow-500/10">
                          <Icon name="Volume2" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <Icon name="Link" size={32} className="text-yellow-500" />
              <span className="text-yellow-500 font-mono font-bold text-sm tracking-wider">INFORMATION DESK</span>
            </div>
            <h3 className="text-4xl font-bold mb-4 text-white">Полезные ресурсы</h3>
            <p className="text-gray-400 text-lg font-mono">
              EXTERNAL RESOURCES • QUICK ACCESS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-slate-800/50 border border-yellow-500/20 rounded-lg hover:border-yellow-500/50 hover:bg-slate-800 transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                  <Icon name={link.icon as any} size={28} className="text-yellow-500" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white group-hover:text-yellow-500 transition-colors">{link.title}</div>
                  <div className="text-gray-400 text-sm font-mono">{link.url.replace('https://', '')}</div>
                </div>
                <Icon name="ExternalLink" size={20} className="text-gray-500 group-hover:text-yellow-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-yellow-500/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Icon name="Plane" size={28} className="text-yellow-500" />
              <div>
                <div className="text-white font-bold text-lg">AVIATION ENGLISH</div>
                <div className="text-gray-500 text-xs font-mono">International Training Center</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm font-mono">
                © 2024 Aviation English Platform
              </p>
              <p className="text-gray-600 text-xs font-mono mt-1">
                ICAO Compliant • Professional Training
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
