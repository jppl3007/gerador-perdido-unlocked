
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ConstruirTab = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            🔧 Como Construir o Gerador
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Guia completo para construir seu próprio gerador de energia livre
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Steps Preview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">1️⃣</div>
            <CardTitle className="text-orange-400">Materiais Necessários</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Lista completa de todos os componentes e ferramentas que você precisará.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">2️⃣</div>
            <CardTitle className="text-orange-400">Preparação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Como preparar seu espaço de trabalho e organizar os materiais.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">3️⃣</div>
            <CardTitle className="text-orange-400">Montagem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Instruções detalhadas passo a passo para a construção.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">4️⃣</div>
            <CardTitle className="text-orange-400">Testes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Como testar e calibrar seu gerador para máxima eficiência.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">5️⃣</div>
            <CardTitle className="text-orange-400">Otimização</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Técnicas avançadas para melhorar o desempenho do seu gerador.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="text-3xl mb-2">6️⃣</div>
            <CardTitle className="text-orange-400">Manutenção</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-sm">
              Como manter seu gerador funcionando perfeitamente ao longo do tempo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Placeholder */}
      <Card className="bg-slate-800/30 border-orange-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">📝 Seu Conteúdo Detalhado Aqui</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            Esta seção está preparada para receber todo o seu conteúdo sobre construção do gerador:
          </p>
          <ul className="text-slate-300 space-y-2 list-disc list-inside">
            <li>Diagramas e esquemas técnicos</li>
            <li>Vídeos explicativos passo a passo</li>
            <li>Lista de fornecedores recomendados</li>
            <li>Dicas de segurança importantes</li>
            <li>Troubleshooting e resolução de problemas</li>
            <li>Variações e melhorias do projeto básico</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConstruirTab;
