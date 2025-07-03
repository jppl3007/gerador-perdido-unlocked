
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InicioTab = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Hero Section */}
      <Card className="bg-black border-[#f9a811] border-2 backdrop-blur-sm">
        <CardHeader className="text-center pb-6 sm:pb-8 px-4 sm:px-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-[#f9a811] mb-2 sm:mb-4">
            Bem-vindo ao Gerador Perdido
          </CardTitle>
          <CardDescription className="text-base sm:text-xl text-white">
            Descubra os segredos perdidos de Thomas Edison e aprenda a criar seu próprio gerador de energia
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center px-4 sm:px-6">
          <div className="text-4xl sm:text-6xl mb-4">⚡</div>
          <p className="text-white text-sm sm:text-lg leading-relaxed">
            Este infoproduto revolucionário revelará conhecimentos que foram ocultados por décadas.
            Prepare-se para uma jornada através da ciência, história e inovação.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
            <div className="text-2xl sm:text-3xl mb-2">🔧</div>
            <CardTitle className="text-[#f9a811] text-base sm:text-lg">Construção Prática</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <p className="text-white text-xs sm:text-sm">
              Aprenda passo a passo como construir seu próprio gerador usando materiais acessíveis.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
            <div className="text-2xl sm:text-3xl mb-2">📚</div>
            <CardTitle className="text-[#f9a811] text-base sm:text-lg">História Revelada</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <p className="text-white text-xs sm:text-sm">
              Conheça a fascinante história de Edison e suas descobertas revolucionárias.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
            <div className="text-2xl sm:text-3xl mb-2">💡</div>
            <CardTitle className="text-[#f9a811] text-base sm:text-lg">Economia Real</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <p className="text-white text-xs sm:text-sm">
              Técnicas comprovadas para reduzir sua conta de energia drasticamente.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-[#f9a811] border-2 hover:shadow-lg hover:shadow-[#f9a811]/20 transition-all">
          <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
            <div className="text-2xl sm:text-3xl mb-2">🌍</div>
            <CardTitle className="text-[#f9a811] text-base sm:text-lg">Impacto Global</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <p className="text-white text-xs sm:text-sm">
              Faça parte da revolução energética e contribua para um mundo mais sustentável.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InicioTab;
