
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InicioTab = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-black border-[#f9a811] border-2 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-[#f9a811] mb-4">
            Bem-vindo ao Gerador Perdido
          </CardTitle>
          <CardDescription className="text-xl text-white">
            Descubra os segredos perdidos de Thomas Edison e aprenda a criar seu próprio gerador de energia
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-white text-lg leading-relaxed">
            Este infoproduto revolucionário revelará conhecimentos que foram ocultados por décadas.
            Prepare-se para uma jornada através da ciência, história e inovação.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">🔧</div>
            <CardTitle className="text-[#f9a811]">Construção Prática</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm">
              Aprenda passo a passo como construir seu próprio gerador usando materiais acessíveis.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <CardTitle className="text-[#f9a811]">História Revelada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm">
              Conheça a fascinante história de Edison e suas descobertas revolucionárias.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">💡</div>
            <CardTitle className="text-[#f9a811]">Economia Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm">
              Técnicas comprovadas para reduzir sua conta de energia drasticamente.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">🌍</div>
            <CardTitle className="text-[#f9a811]">Impacto Global</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white text-sm">
              Faça parte da revolução energética e contribua para um mundo mais sustentável.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InicioTab;
