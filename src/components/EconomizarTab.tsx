
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EconomizarTab = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            💡 Como Economizar Energia
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Técnicas práticas para reduzir drasticamente sua conta de luz
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Tips Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-2xl">🏠</div>
              <CardTitle className="text-green-400">Eficiência Residencial</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Isolamento térmico adequado</li>
              <li>• LED em toda a residência</li>
              <li>• Gestão inteligente de temperatura</li>
              <li>• Eliminação de vampiros energéticos</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-2xl">☀️</div>
              <CardTitle className="text-green-400">Energia Solar</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Dimensionamento correto do sistema</li>
              <li>• Microinversores vs inversores centrais</li>
              <li>• Orientação e inclinação ideais</li>
              <li>• Compensação de energia elétrica</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-2xl">🔋</div>
              <CardTitle className="text-green-400">Armazenamento</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Baterias de lítio vs chumbo-ácido</li>
              <li>• Sistemas de backup inteligentes</li>
              <li>• Gestão de carga e descarga</li>
              <li>• Vida útil e manutenção</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="text-2xl">📊</div>
              <CardTitle className="text-green-400">Monitoramento</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-300 space-y-2 text-sm">
              <li>• Medidores inteligentes</li>
              <li>• Apps de controle residencial</li>
              <li>• Análise de padrões de consumo</li>
              <li>• Alertas de picos de energia</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Savings Calculator Preview */}
      <Card className="bg-gradient-to-r from-green-800/30 to-blue-800/30 border-green-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">💰 Calculadora de Economia</CardTitle>
          <CardDescription className="text-slate-300">
            Descubra quanto você pode economizar por mês
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">20-30%</div>
              <div className="text-slate-300 text-sm">Economia Básica</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">40-60%</div>
              <div className="text-slate-300 text-sm">Com Energia Solar</div>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">70-90%</div>
              <div className="text-slate-300 text-sm">Sistema Completo</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Placeholder */}
      <Card className="bg-slate-800/30 border-green-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">📝 Guia Completo de Economia</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            Esta seção está preparada para todo o seu conteúdo sobre economia de energia:
          </p>
          <ul className="text-slate-300 space-y-2 list-disc list-inside">
            <li>Auditoria energética residencial completa</li>
            <li>Calculadoras de ROI para diferentes soluções</li>
            <li>Guia de compras para equipamentos eficientes</li>
            <li>Técnicas avançadas de automação residencial</li>
            <li>Como negociar tarifas com concessionárias</li>
            <li>Incentivos governamentais e financiamentos</li>
            <li>Casos de sucesso e estudos de caso reais</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default EconomizarTab;
