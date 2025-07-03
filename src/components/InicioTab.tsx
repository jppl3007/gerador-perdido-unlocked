
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InicioTab = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/20 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            Bem-vindo ao Gerador Perdido
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Descubra os segredos perdidos de Nikola Tesla e aprenda a criar seu próprio gerador de energia
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-slate-300 text-lg leading-relaxed">
            Este infoproduto revolucionário revelará conhecimentos que foram ocultados por décadas.
            Prepare-se para uma jornada através da ciência, história e inovação.
          </p>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">🔧</div>
            <CardTitle className="text-blue-400">Construção Prática</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Aprenda passo a passo como construir seu próprio gerador usando materiais acessíveis.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <CardTitle className="text-purple-400">História Revelada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Conheça a fascinante história de Tesla e suas descobertas revolucionárias.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">💡</div>
            <CardTitle className="text-green-400">Economia Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Técnicas comprovadas para reduzir sua conta de energia drasticamente.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-blue-500/20 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
          <CardHeader className="text-center">
            <div className="text-3xl mb-2">🌍</div>
            <CardTitle className="text-cyan-400">Impacto Global</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Faça parte da revolução energética e contribua para um mundo mais sustentável.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Placeholder */}
      <Card className="bg-slate-800/30 border-blue-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">📝 Seu Conteúdo Aqui</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">
            Esta seção está pronta para receber seu conteúdo personalizado. 
            Você pode adicionar textos, imagens, vídeos e qualquer material que desejar 
            para a aba inicial do seu infoproduto.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InicioTab;
