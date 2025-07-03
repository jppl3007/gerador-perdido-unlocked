
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const BonusTab = () => {
  const bonusItems = [
    {
      title: "Como não pagar mais conta de água",
      description: "Descubra técnicas comprovadas para reduzir drasticamente ou eliminar sua conta de água",
      url: "https://pay.cakto.com.br/634czvs?utm_source=Webapp",
      icon: "💧"
    },
    {
      title: "Como não pagar mais imposto",
      description: "Estratégias legais para minimizar seus impostos de forma inteligente",
      url: "https://pay.cakto.com.br/k3eob65_462087?utm_source=Webapp",
      icon: "💰"
    },
    {
      title: "Guia rápido emergencial",
      description: "Manual essencial para situações de emergência e sobrevivência",
      url: "https://pay.cakto.com.br/k5viygf_459256",
      icon: "🚨"
    },
    {
      title: "Faça suas próprias pomadas",
      description: "Aprenda a criar pomadas naturais e eficazes em casa",
      url: "https://pay.cakto.com.br/m7gafud_459275",
      icon: "🌿"
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <Card className="bg-black border-[#f9a811] border-2 backdrop-blur-sm">
        <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-[#f9a811] mb-2 sm:mb-4">
            🎁 BÓNUS INCRÍVEIS
          </CardTitle>
          <CardDescription className="text-base sm:text-xl text-white">
            Acesse conteúdos exclusivos que complementam seu aprendizado
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center px-4 sm:px-6">
          <div className="text-4xl sm:text-6xl mb-4">🎯</div>
          <p className="text-white text-sm sm:text-lg leading-relaxed">
            Além do gerador de Edison, você terá acesso a estes bônus especiais que vão transformar sua vida
          </p>
        </CardContent>
      </Card>

      {/* Bonus Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {bonusItems.map((item, index) => (
          <Card key={index} className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
            <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{item.icon}</div>
              <CardTitle className="text-[#f9a811] text-base sm:text-xl mb-2">
                {item.title}
              </CardTitle>
              <CardDescription className="text-white text-xs sm:text-sm">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 pb-4 sm:px-6 sm:pb-6">
              <Button 
                onClick={() => handleRedirect(item.url)}
                className="bg-[#f9a811] hover:bg-[#e09610] text-black font-bold w-full py-2 sm:py-3 text-sm sm:text-lg"
              >
                Acessar Agora
                <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-black border-[#f9a811] border-2">
        <CardContent className="text-center pt-4 sm:pt-6 px-4 sm:px-6">
          <p className="text-white text-sm sm:text-lg mb-4">
            ⚡ Aproveite todos esses bônus exclusivos e maximize seus resultados!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusTab;
