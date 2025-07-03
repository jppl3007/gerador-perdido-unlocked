
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EconomizarTab = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-green-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            💡 Como Economizar com a Conta de Luz
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Guia completo para reduzir drasticamente seu consumo de energia elétrica
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Steps Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        
        {/* Passo 1: Entendendo o Consumo */}
        <AccordionItem value="passo-1" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Entendendo o Consumo de Energia em Casa</h3>
                <p className="text-sm text-slate-400">Compreenda como a energia é consumida na sua residência</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">📊 Fatores que Influenciam o Consumo</h4>
                <p className="mb-3">
                  Para economizar na conta de luz, o primeiro passo é entender como a energia é consumida em sua residência. 
                  Dois fatores-chave determinam o consumo: a potência dos equipamentos (medida em Watts) e o tempo de uso.
                </p>
                <p>
                  O custo final da energia é medido em quilowatts-hora (kWh), que é a unidade de energia consumida por um 
                  aparelho de 1000 Watts funcionando por uma hora.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">❄️</div>
                    <div className="text-green-400 font-semibold">Geladeira</div>
                    <div className="text-sm text-slate-400">Pode representar até um terço do consumo total</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🚿</div>
                    <div className="text-green-400 font-semibold">Chuveiro</div>
                    <div className="text-sm text-slate-400">Alto consumo devido ao aquecimento de água</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">❄️</div>
                    <div className="text-green-400 font-semibold">Ar-condicionado</div>
                    <div className="text-sm text-slate-400">Impacto significativo em climas quentes</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 2: Iluminação Eficiente */}
        <AccordionItem value="passo-2" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Iluminação Eficiente: Substituir para Economizar</h3>
                <p className="text-sm text-slate-400">LED e aproveitamento da luz natural</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">💡 Revolução LED</h4>
                <p>
                  Substituir lâmpadas incandescentes ou fluorescentes por lâmpadas LED pode gerar uma economia de até 90% 
                  no consumo de energia para iluminação. As LEDs não apenas consomem menos eletricidade, mas também têm 
                  uma vida útil muito maior.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">90%</div>
                    <div className="text-sm text-slate-400">Economia com Lâmpadas LED</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-green-400 font-semibold">Cores Claras</div>
                    <div className="text-sm text-slate-400">Aumentam a reflexão da luz natural</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">☀️</div>
                    <div className="text-green-400 font-semibold">Luz Natural</div>
                    <div className="text-sm text-slate-400">Aproveite ao máximo durante o dia</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">💡 Dica Importante</h4>
                <p>
                  Pintar paredes e tetos com cores claras (branco, bege, tons pastel) ajuda a refletir a luz solar, 
                  diminuindo a necessidade de acender luzes durante o dia.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 3: Uso Racional de Eletrodomésticos */}
        <AccordionItem value="passo-3" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Uso Racional de Eletrodomésticos</h3>
                <p className="text-sm text-slate-400">Dicas práticas para cada aparelho da sua casa</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <p className="mb-4">
                O uso consciente dos eletrodomésticos é fundamental para reduzir a conta de luz. 
                Pequenas mudanças nos hábitos diários podem gerar uma grande diferença no final do mês.
              </p>

              <div className="grid gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">❄️ Geladeira</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Posicione longe do fogão e da luz solar direta</li>
                    <li>• Evite abrir a porta por muito tempo</li>
                    <li>• Não forre as prateleiras com plásticos ou vidros</li>
                    <li>• Mantenha a temperatura adequada (entre 3°C e 8°C)</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">👔 Ferro Elétrico</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Junte uma grande quantidade de roupas</li>
                    <li>• Comece pelas roupas que precisam de menos calor</li>
                    <li>• Aumente a temperatura gradualmente</li>
                    <li>• Desligue antes de terminar e use o calor residual</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">🧺 Máquina de Lavar</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Utilize apenas com carga total</li>
                    <li>• Evite ciclos com água muito quente</li>
                    <li>• Use a centrifugação para economizar no varal</li>
                    <li>• Limpe o filtro regularmente</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="text-yellow-400 font-semibold mb-2">🏷️ Etiqueta PROCEL</h4>
                <p>
                  Ao comprar novos eletrodomésticos, dê preferência aos modelos com classificação A na etiqueta PROCEL 
                  de eficiência energética.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 4: Banho e Aquecimento */}
        <AccordionItem value="passo-4" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Banho e Aquecimento: Reduzir o Consumo do Chuveiro</h3>
                <p className="text-sm text-slate-400">Estratégias para o maior vilão da conta de luz</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">⚠️ Maior Consumidor</h4>
                <p>
                  O chuveiro elétrico é, sem dúvida, um dos maiores consumidores de energia em muitas residências. 
                  No inverno, seu uso intensivo pode disparar a conta de luz.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">🚿 Dicas Imediatas</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Evite banhos longos e muito quentes</li>
                    <li>• Feche a torneira ao se ensaboar</li>
                    <li>• Use a posição "verão" nos meses quentes</li>
                    <li>• Cada minuto a menos faz diferença</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">☀️ Soluções a Longo Prazo</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Aquecimento solar de água</li>
                    <li>• Aquecedores a gás</li>
                    <li>• Investimento com retorno garantido</li>
                    <li>• Economia de até 90% no chuveiro</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">30%</div>
                <div className="text-sm">Economia usando a posição "verão" do chuveiro</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 5: Ar-condicionado e Ventilação */}
        <AccordionItem value="passo-5" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Ar-condicionado e Ventilação</h3>
                <p className="text-sm text-slate-400">Conforto térmico sem gastar uma fortuna</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <p>
                Em regiões de clima quente, o ar-condicionado é essencial, mas seu uso desregrado pode levar a 
                contas altíssimas. É possível desfrutar de conforto térmico sem gastar uma fortuna.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🌪️</div>
                    <div className="text-green-400 font-semibold">Ventiladores</div>
                    <div className="text-sm text-slate-400">Priorize o uso, consomem muito menos energia</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">40%</div>
                    <div className="text-green-400 font-semibold">Inverter</div>
                    <div className="text-sm text-slate-400">Economia com tecnologia inverter</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-700/30 border-green-500/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🪟</div>
                    <div className="text-green-400 font-semibold">Ventilação Natural</div>
                    <div className="text-sm text-slate-400">Mantenha portas e janelas abertas</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">❄️ Dicas para Ar-condicionado</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Mantenha a temperatura em 23°C</li>
                    <li>• Limpe os filtros regularmente</li>
                    <li>• Prefira modelos com tecnologia inverter</li>
                    <li>• Feche portas e janelas durante o uso</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">🌬️ Ventilação Natural</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Crie correntes de ar cruzadas</li>
                    <li>• Use cortinas para bloquear o sol</li>
                    <li>• Posicione ventiladores estrategicamente</li>
                    <li>• Abra janelas nos horários mais frescos</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 6: Práticas Contra Desperdício */}
        <AccordionItem value="passo-6" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Práticas para Evitar Desperdício de Energia</h3>
                <p className="text-sm text-slate-400">Pequenos hábitos que fazem grande diferença</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2">⚡ Energia Fantasma</h4>
                <p>
                  Aparelhos em modo de espera (stand-by) podem representar até 12% do consumo mensal de uma casa. 
                  Pequenos hábitos podem somar uma economia considerável no final do mês.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">🔌 Aparelhos em Stand-by</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Desligue TVs, computadores e micro-ondas</li>
                    <li>• Use réguas com interruptor</li>
                    <li>• Retire da tomada ao sair ou dormir</li>
                    <li>• Economia de até 12% do consumo mensal</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">🔋 Carregadores</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Remova carregadores da tomada</li>
                    <li>• Mesmo sem aparelho conectado consomem</li>
                    <li>• Hábito simples com grande impacto</li>
                    <li>• Inclui carregadores de telemóvel e portáteis</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">⏰ Timer e Programação</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use a função timer dos aparelhos</li>
                    <li>• Programe desligamento automático</li>
                    <li>• Aplique em TVs, sistemas de som, computadores</li>
                    <li>• Evita equipamentos ligados desnecessariamente</li>
                  </ul>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">💡 Iluminação Consciente</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Apague luzes ao sair dos ambientes</li>
                    <li>• Verifique antes de deixar um cômodo vazio</li>
                    <li>• Crie o hábito de verificar a iluminação</li>
                    <li>• Parece óbvio, mas muitos esquecem</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 7: Tecnologias e Sistemas */}
        <AccordionItem value="passo-7" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                7
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Tecnologias e Sistemas para Reduzir a Conta</h3>
                <p className="text-sm text-slate-400">Investimentos inteligentes para economia a longo prazo</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <p>
                Além das mudanças de hábitos, a tecnologia oferece soluções robustas para uma economia energética 
                ainda maior e mais sustentável.
              </p>

              <div className="grid gap-4">
                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">☀️ Aquecimento Solar de Água</h4>
                  <p className="text-sm mb-2">
                    Sistemas de aquecimento solar utilizam a energia do sol para aquecer a água do banho e de torneiras, 
                    reduzindo ou eliminando a necessidade do chuveiro elétrico.
                  </p>
                  <div className="bg-green-900/30 p-2 rounded text-center">
                    <span className="text-green-400 font-semibold">Economia: até 90% no aquecimento de água</span>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">⚡ Geração Distribuída e Solar</h4>
                  <p className="text-sm mb-2">
                    A instalação de painéis solares fotovoltaicos permite gerar sua própria eletricidade, reduzindo 
                    drasticamente a dependência da rede. O excedente pode ser injetado na rede e gerar créditos.
                  </p>
                  <div className="bg-green-900/30 p-2 rounded text-center">
                    <span className="text-green-400 font-semibold">Economia: até 95% na conta de luz</span>
                  </div>
                </div>

                <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                  <h4 className="text-green-400 font-semibold mb-2">📱 Monitoramento de Consumo</h4>
                  <p className="text-sm mb-2">
                    Aplicativos e dispositivos de monitoramento de energia permitem controlar o consumo em tempo real, 
                    identificar os maiores gastadores e receber alertas.
                  </p>
                  <div className="bg-blue-900/30 p-2 rounded text-center">
                    <span className="text-blue-400 font-semibold">Controle inteligente do consumo</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/20">
                <h4 className="text-yellow-400 font-semibold mb-2">💰 Retorno do Investimento</h4>
                <p>
                  Esses investimentos iniciais podem ter um retorno financeiro significativo a médio e longo prazo, 
                  além de contribuir para a sustentabilidade ambiental.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Passo 8: Bandeiras Tarifárias */}
        <AccordionItem value="passo-8" className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm rounded-lg">
          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
            <div className="flex items-center gap-4">
              <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                8
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-400">Impacto das Bandeiras Tarifárias</h3>
                <p className="text-sm text-slate-400">Como se preparar para os diferentes custos da energia</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 text-slate-300">
              <p>
                No Brasil e em Portugal, o custo da energia elétrica pode variar de acordo com as condições de geração 
                e distribuição, refletidas nas chamadas bandeiras tarifárias.
              </p>

              <div className="grid gap-4">
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <h4 className="text-green-400 font-semibold">Bandeira Verde</h4>
                  </div>
                  <p className="text-sm">
                    Condições favoráveis de geração de energia. Não há acréscimo na tarifa. 
                    É o cenário ideal e de menor custo.
                  </p>
                </div>

                <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <h4 className="text-yellow-400 font-semibold">Bandeira Amarela</h4>
                  </div>
                  <p className="text-sm">
                    Condições menos favoráveis de geração. Há um pequeno acréscimo na tarifa, 
                    indicando que a energia está um pouco mais cara.
                  </p>
                </div>

                <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <h4 className="text-red-400 font-semibold">Bandeira Vermelha (Patamar 1 e 2)</h4>
                  </div>
                  <p className="text-sm">
                    Condições críticas de geração (pouca chuva, termelétricas ligadas). O custo da energia é 
                    significativamente mais alto. O Patamar 2 é o mais caro.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">📋 Como se Preparar</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Acompanhe os anúncios das bandeiras tarifárias mensalmente</li>
                  <li>• Em bandeira amarela ou vermelha, redobre a atenção com o consumo</li>
                  <li>• Planeje o uso de eletrodomésticos de alto consumo</li>
                  <li>• Reduza a utilização em horários de pico quando possível</li>
                  <li>• Use essas informações para planejar seu consumo mensal</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>

      {/* Conclusion Card */}
      <Card className="bg-gradient-to-r from-green-800/30 to-blue-800/30 border-green-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white">🎯 Conclusão: Economia Sustentável</CardTitle>
          <CardDescription className="text-slate-300">
            Hábitos conscientes + investimentos inteligentes = conta de luz reduzida
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-slate-300">
            <p>
              Economizar na conta de luz é um desafio que exige uma combinação de hábitos conscientes e, 
              em alguns casos, investimentos inteligentes. Pequenas mudanças diárias podem gerar uma 
              economia significativa no orçamento familiar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">📅 Curto Prazo</h4>
                <ul className="text-sm space-y-1">
                  <li>• Mudanças de hábitos diários</li>
                  <li>• Uso consciente de eletrodomésticos</li>
                  <li>• Troca para lâmpadas LED</li>
                  <li>• Eliminação do consumo fantasma</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-lg border border-green-500/20">
                <h4 className="text-green-400 font-semibold mb-2">📈 Longo Prazo</h4>
                <ul className="text-sm space-y-1">
                  <li>• Aparelhos mais eficientes</li>
                  <li>• Aquecimento solar de água</li>
                  <li>• Geração de energia fotovoltaica</li>
                  <li>• Monitoramento inteligente</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20 text-center">
              <p className="text-green-400 font-semibold">
                💚 A consciência energética é o primeiro passo para um futuro mais sustentável e econômico!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EconomizarTab;
