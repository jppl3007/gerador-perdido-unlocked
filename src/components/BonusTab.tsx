
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
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-black border-[#f9a811] border-2 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-[#f9a811] mb-4">
            🎁 BÓNUS INCRÍVEIS
          </CardTitle>
          <CardDescription className="text-xl text-white">
            Acesse conteúdos exclusivos que complementam seu aprendizado
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl mb-4">🎯</div>
          <p className="text-white text-lg leading-relaxed">
            Além do gerador de Edison, você terá acesso a estes bônus especiais que vão transformar sua vida
          </p>
        </CardContent>
      </Card>

      {/* Bonus Items Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {bonusItems.map((item, index) => (
          <Card key={index} className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
            <CardHeader className="text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <CardTitle className="text-[#f9a811] text-xl mb-2">
                {item.title}
              </CardTitle>
              <CardDescription className="text-white">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => handleRedirect(item.url)}
                className="bg-[#f9a811] hover:bg-[#e09610] text-black font-bold w-full py-3 text-lg"
              >
                Acessar Agora
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-black border-[#f9a811] border-2">
        <CardContent className="text-center pt-6">
          <p className="text-white text-lg mb-4">
            ⚡ Aproveite todos esses bônus exclusivos e maximize seus resultados!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BonusTab;
