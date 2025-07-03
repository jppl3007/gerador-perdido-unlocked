
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HistoriaTab = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            📚 A História de Nikola Tesla
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            O gênio por trás das descobertas que mudaram o mundo
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Timeline Preview */}
      <div className="space-y-6">
        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🎂</div>
              <div>
                <CardTitle className="text-purple-400">1856 - Nascimento</CardTitle>
                <CardDescription className="text-slate-400">Smiljan, Império Austríaco</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Nikola Tesla nasce em uma família sérvia durante uma tempestade elétrica - 
              um presságio do que estava por vir.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🎓</div>
              <div>
                <CardTitle className="text-purple-400">1875 - Educação</CardTitle>
                <CardDescription className="text-slate-400">Instituto Politécnico de Graz</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Tesla demonstra seu brilhantismo desde cedo, mas suas ideias inovadoras 
              frequentemente chocam seus professores.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🇺🇸</div>
              <div>
                <CardTitle className="text-purple-400">1884 - Chegada aos EUA</CardTitle>
                <CardDescription className="text-slate-400">Nova York, Estados Unidos</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Com apenas algumas moedas no bolso e uma carta de recomendação, 
              Tesla chega à América para trabalhar com Edison.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <CardTitle className="text-purple-400">1891 - A Bobina de Tesla</CardTitle>
                <CardDescription className="text-slate-400">Patente revolucionária</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Tesla desenvolve sua famosa bobina, abrindo caminho para 
              a transmissão sem fio de energia elétrica.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="text-2xl">🏗️</div>
              <div>
                <CardTitle className="text-purple-400">1901 - Wardenclyffe</CardTitle>
                <CardDescription className="text-slate-400">Long Island, Nova York</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              Tesla constrói sua torre experimental para transmissão mundial de energia, 
              um projeto que estava décadas à frente de seu tempo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Placeholder */}
      <Card className="bg-slate-800/30 border-purple-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">📝 Conteúdo Histórico Completo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300 mb-4">
            Esta seção está pronta para todo o seu conteúdo histórico sobre Tesla:
          </p>
          <ul className="text-slate-300 space-y-2 list-disc list-inside">
            <li>Biografia detalhada com fotos raras</li>
            <li>Documentos históricos e patentes originais</li>
            <li>A Guerra das Correntes com Edison</li>
            <li>Experimentos secretos e descobertas perdidas</li>
            <li>Teorias controversas sobre energia livre</li>
            <li>O legado de Tesla nos dias atuais</li>
            <li>Conspirações e supressão de tecnologias</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoriaTab;
