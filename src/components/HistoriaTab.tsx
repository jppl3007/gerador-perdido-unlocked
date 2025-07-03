
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HistoriaTab = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border-purple-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            📚 A História de Thomas Edison
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            O gênio por trás das descobertas que mudaram o mundo e o mistério do gerador perdido
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-300 text-lg">
            Thomas Edison (1847-1931), carinhosamente apelidado de "O Mago de Menlo Park", foi uma figura central 
            e incontornável na história da tecnologia e do empreendedorismo. Esta é a intrigante história do seu 
            gerador de energia que se tornou objeto de especulação e teorias da conspiração.
          </p>
        </CardContent>
      </Card>

      {/* Passos da História */}
      <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-purple-400 text-2xl">📖 A História Completa de Thomas Edison</CardTitle>
          <CardDescription className="text-slate-300">
            Clique em cada período para descobrir os segredos por trás das invenções que mudaram o mundo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* Passo 1: Contexto da Revolução Elétrica */}
            <AccordionItem value="step-1" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">⚡ Passo 1: O Contexto da Revolução Elétrica no Século XIX</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    O século XIX foi um período de transformações sociais e industriais sem precedentes, impulsionadas, 
                    em grande parte, pelo avanço tecnológico. No campo da iluminação, a transição da luz a gás, com as 
                    suas limitações de segurança e eficiência, para a iluminação elétrica representou um salto quântico.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-purple-400 font-bold text-lg mb-3">💡 Adeus Gás</h3>
                      <p className="text-slate-300 text-sm">
                        A iluminação a gás, outrora revolucionária, era cara, ineficiente e perigosa, 
                        abrindo caminho para a eletricidade.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-purple-400 font-bold text-lg mb-3">⚔️ A Batalha das Correntes</h3>
                      <p className="text-slate-300 text-sm">
                        DC vs. AC: uma rivalidade que moldaria a infraestrutura elétrica global e a forma 
                        como a energia seria distribuída.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-purple-400 font-bold text-lg mb-3">🏭 Indústria e Sociedade</h3>
                      <p className="text-slate-300 text-sm">
                        A eletricidade foi crucial para o crescimento industrial, impulsionando fábricas, 
                        transportes e a vida urbana.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300">
                    Neste cenário efervescente, desenrolou-se uma intensa "Guerra das Correntes" entre os defensores 
                    da corrente contínua (DC), liderados por Edison, e os proponentes da corrente alternada (AC), 
                    com figuras como Nikola Tesla e George Westinghouse.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 2: O Desenvolvimento do Gerador */}
            <AccordionItem value="step-2" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">🔧 Passo 2: O Desenvolvimento do Gerador Elétrico de Edison</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    O gerador elétrico de Thomas Edison, desenvolvido entre 1878 e 1879, foi uma peça central na sua 
                    visão de um sistema elétrico completo. A sua principal função era alimentar as lâmpadas incandescentes 
                    que Edison estava a aperfeiçoar, tornando a eletricidade uma solução prática e viável.
                  </p>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">💡 Características Inovadoras</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Grandes ímanes bipolares cuidadosamente concebidos</li>
                      <li>• Maximização das linhas de força magnética</li>
                      <li>• Baixa resistência interna para maior eficiência</li>
                      <li>• Apelidado carinhosamente de "long-legged Mary-Ann"</li>
                    </ul>
                  </div>
                  
                  <p className="text-slate-300">
                    O objetivo de Edison era criar um gerador com baixa resistência interna, o que permitiria uma maior 
                    produção de corrente com menor perda de energia sob a forma de calor. Este esforço na eficiência era 
                    crucial para tornar o seu sistema de iluminação competitivo.
                  </p>
                  
                  <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                    <p className="text-slate-300 italic">
                      <strong>Inovação Sistêmica:</strong> Embora Edison não tenha sido o primeiro a inventar um gerador, 
                      a sua contribuição residiu na engenharia de um dispositivo que se integrava perfeitamente no seu 
                      sistema elétrico completo, incluindo a lâmpada, a fiação e os dispositivos de medição.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 3: A Lâmpada Incandescente */}
            <AccordionItem value="step-3" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">💡 Passo 3: A Invenção da Lâmpada Incandescente e o Sistema Completo</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    É comum atribuir a Thomas Edison a invenção da lâmpada incandescente, mas esta é uma simplificação. 
                    A genialidade de Edison residiu na sua capacidade de aperfeiçoar o design, tornando-o durável, 
                    economicamente viável e, mais importante, de o integrar num sistema de iluminação completo.
                  </p>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">🔬 A Busca pela Perfeição</h3>
                    <p className="text-slate-300">
                      Edison realizou mais de <strong>3.000 tentativas</strong> antes de alcançar o sucesso com um 
                      filamento de carbono de alta resistência. Este filamento permitia que a lâmpada funcionasse por 
                      mais de <strong>13 horas contínuas</strong>, um marco significativo para a época.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-slate-300 border border-purple-500/20">
                      <thead>
                        <tr className="bg-purple-900/30">
                          <th className="text-left py-3 px-4 text-purple-400 border border-purple-500/20">Componente</th>
                          <th className="text-left py-3 px-4 text-purple-400 border border-purple-500/20">Função Principal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border border-purple-500/20">
                          <td className="py-2 px-4 font-semibold">Gerador</td>
                          <td className="py-2 px-4">Produzir corrente elétrica estável</td>
                        </tr>
                        <tr className="border border-purple-500/20">
                          <td className="py-2 px-4 font-semibold">Lâmpada Incandescente</td>
                          <td className="py-2 px-4">Converter eletricidade em luz duradoura</td>
                        </tr>
                        <tr className="border border-purple-500/20">
                          <td className="py-2 px-4 font-semibold">Fiação</td>
                          <td className="py-2 px-4">Distribuir eletricidade para os pontos de uso</td>
                        </tr>
                        <tr className="border border-purple-500/20">
                          <td className="py-2 px-4 font-semibold">Medidor</td>
                          <td className="py-2 px-4">Monitorizar o consumo de energia</td>
                        </tr>
                        <tr className="border border-purple-500/20">
                          <td className="py-2 px-4 font-semibold">Interruptores e Fusíveis</td>
                          <td className="py-2 px-4">Controlar e proteger o sistema elétrico</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-slate-300">
                    A sua visão de um sistema "plug-and-play" para a eletricidade foi o que verdadeiramente democratizou 
                    o acesso à luz elétrica e sentou as bases para a eletrificação global.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 4: A Guerra das Correntes */}
            <AccordionItem value="step-4" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">⚔️ Passo 4: A Guerra das Correntes - Edison vs Tesla e Westinghouse</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    A "Guerra das Correntes" foi um dos conflitos tecnológicos mais emblemáticos do final do século XIX, 
                    pondo em confronto a visão de Thomas Edison para a corrente contínua (DC) e a proposta de Nikola Tesla 
                    e George Westinghouse para a corrente alternada (AC).
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                      <h3 className="text-blue-400 font-bold text-lg mb-3">🔋 Corrente Contínua (DC)</h3>
                      <p className="text-slate-300 text-sm">
                        Edison defendia a DC, ideal para curtas distâncias e sistemas pequenos. 
                        Era vista como mais segura na época, mas tinha limitações significativas.
                      </p>
                    </div>
                    
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                      <h3 className="text-green-400 font-bold text-lg mb-3">⚡ Corrente Alternada (AC)</h3>
                      <p className="text-slate-300 text-sm">
                        Tesla e Westinghouse promoviam a AC, superior para longas distâncias e fácil de transformar. 
                        Acabou vencendo a "Guerra" devido à sua superioridade técnica.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30">
                      <h3 className="text-red-400 font-bold text-lg mb-3">😱 Campanha de Medo</h3>
                      <p className="text-slate-300 text-sm">
                        Edison tentou manchar a reputação da AC, realizando demonstrações chocantes 
                        para provar seus perigos, incluindo execuções públicas de animais.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-bold text-lg mb-3">🗲 Táticas Controversas</h3>
                    <p className="text-slate-300 mb-3">
                      Para desacreditar a corrente alternada, Edison lançou uma campanha agressiva de desinformação:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Execuções públicas de animais usando eletricidade AC</li>
                      <li>• Patrocínio da cadeira elétrica usando corrente alternada</li>
                      <li>• Campanha para associar a AC à morte e ao perigo</li>
                      <li>• Demonstrações chocantes, incluindo a execução de um elefante</li>
                    </ul>
                  </div>
                  
                  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-slate-800/40 italic text-slate-300">
                    "Se a AC é usada para matar, então deve ser perigosa para as casas."
                    <footer className="text-purple-400 mt-2">— Thomas Edison (paráfrase da sua tese na Guerra das Correntes)</footer>
                  </blockquote>
                  
                  <p className="text-slate-300">
                    Apesar dos esforços de Edison, a superioridade técnica e económica da AC acabou por prevalecer, 
                    tornando-se o padrão global para a transmissão de energia elétrica.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 5: Controvérsias e Alegações */}
            <AccordionItem value="step-5" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">🔍 Passo 5: As Controvérsias e Alegações de Fraude</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    A figura de Thomas Edison, embora celebrada, não está isenta de controvérsia e alegações de práticas 
                    questionáveis. Uma das acusações mais persistentes é a de que Edison se apropriou indevidamente de 
                    ideias e invenções de outros, incluindo Nikola Tesla.
                  </p>
                  
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-bold text-lg mb-3">⚖️ Alegações Contra Edison</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Apropriação de ideias de Nikola Tesla e outros inventores</li>
                      <li>• Promessas não cumpridas de pagamento a Tesla por melhorias nos geradores</li>
                      <li>• Campanhas de sabotagem contra concorrentes</li>
                      <li>• Uso da cadeira elétrica como arma de marketing contra a AC</li>
                      <li>• Táticas agressivas e antiéticas na competição comercial</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">🤝 O Caso Tesla</h3>
                    <p className="text-slate-300">
                      Tesla, que trabalhou brevemente para Edison, alegou que lhe foi prometida uma grande soma de dinheiro 
                      por melhorias nos geradores DC de Edison, mas que a promessa nunca foi cumprida, levando à sua demissão 
                      e ao início da sua própria jornada de inovação com a AC.
                    </p>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/20">
                    <h3 className="text-orange-400 font-bold text-lg mb-3">🕵️ Sabotagem Comercial</h3>
                    <p className="text-slate-300">
                      Histórias de sabotagem e campanhas de difamação contra Tesla e Westinghouse eram comuns, 
                      refletindo a feroz rivalidade comercial da época. O envolvimento na criação da cadeira elétrica 
                      foi uma tentativa calculada de associar a tecnologia adversária à brutalidade.
                    </p>
                  </div>
                  
                  <p className="text-slate-300">
                    Embora muitas dessas alegações permaneçam no campo do debate histórico, elas adicionam uma camada 
                    de complexidade à narrativa de Edison como o "génio benfeitor" e levantam questões importantes 
                    sobre a ética na inovação e na competição empresarial.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 6: O Gerador Perdido */}
            <AccordionItem value="step-6" className="bg-slate-700/30 rounded-lg border border-purple-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">🔮 Passo 6: O Gerador de Edison que Foi Perdido</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    No cerne da lenda em torno de Thomas Edison e as suas invenções, existe uma história intrigante sobre 
                    um gerador de energia que se tornou lendário. Refere-se especificamente ao gerador original de 1880, 
                    uma das peças fundamentais utilizadas na primeira demonstração pública de iluminação incandescente 
                    em Nova Iorque.
                  </p>
                  
                  <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                    <h3 className="text-indigo-400 font-bold text-lg mb-3">🏛️ O Laboratório de Menlo Park</h3>
                    <p className="text-slate-300">
                      O laboratório de Menlo Park, o berço de muitas das inovações de Edison, produziu uma série de 
                      protótipos e máquinas experimentais. Entre eles, existiam cerca de <strong>quinze geradores originais</strong>. 
                      No entanto, ao longo do tempo, a maioria destas máquinas desapareceu.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-purple-400 font-bold text-lg mb-3">📊 Os Números</h3>
                      <ul className="text-slate-300 space-y-2">
                        <li>• <strong>15</strong> geradores originais produzidos</li>
                        <li>• <strong>1</strong> único sobrevivente conhecido</li>
                        <li>• <strong>1880</strong> ano do gerador preservado</li>
                        <li>• <strong>Wisconsin Historical Society</strong> localização atual</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-purple-400 font-bold text-lg mb-3">🔍 O Mistério</h3>
                      <ul className="text-slate-300 space-y-2">
                        <li>• Raramente exibido publicamente</li>
                        <li>• Status quase mítico devido à raridade</li>
                        <li>• Outros 14 geradores "desapareceram"</li>
                        <li>• Alimenta teorias de conspiração</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">🏛️ A Relíquia Preservada</h3>
                    <p className="text-slate-300">
                      Atualmente, esta peça histórica encontra-se no Wisconsin Historical Society, nos Estados Unidos. 
                      Embora seja um artefacto de imenso valor histórico e científico, o gerador raramente é exibido 
                      publicamente, o que contribui para o seu status quase mítico. É uma relíquia que conecta 
                      diretamente a visão de Edison com a realidade da eletrificação que hoje conhecemos.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 7: Teorias da Conspiração */}
            <AccordionItem value="step-7" className="bg-red-900/30 rounded-lg border border-red-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-red-400">
                <span className="text-lg font-semibold">🕵️ Passo 7: Teorias da Conspiração Sobre o Desaparecimento</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    A escassez de documentação detalhada sobre o destino de muitos dos protótipos originais de Edison 
                    é um terreno fértil para o florescimento de teorias da conspiração. A ideia de que uma tecnologia 
                    tão crucial poderia simplesmente "desaparecer" alimenta a imaginação popular.
                  </p>
                  
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-bold text-lg mb-3">🏢 Teorias Corporativas</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Supressão por interesses corporativos e industriais</li>
                      <li>• Ocultação de tecnologias "demasiado eficientes"</li>
                      <li>• Manutenção de monopólios energéticos</li>
                      <li>• Aquisição secreta e desmantelamento de invenções</li>
                      <li>• Controle do mercado através da supressão tecnológica</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/20">
                    <h3 className="text-orange-400 font-bold text-lg mb-3">🤔 Especulações Populares</h3>
                    <p className="text-slate-300">
                      Argumenta-se que grandes empresas ou consórcios poderiam ter adquirido e secretamente desmantelado 
                      ou escondido tais invenções para manter o controlo do mercado ou evitar concorrência. Se um gerador 
                      pudesse ser "demasiado eficiente", a sua "perda" poderia ser conveniente.
                    </p>
                  </div>
                  
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                    <h3 className="text-green-400 font-bold text-lg mb-3">🔍 A Realidade</h3>
                    <p className="text-slate-300 mb-3">
                      No entanto, é crucial sublinhar que <strong>não existem provas concretas</strong> que sustentem estas teorias. 
                      A ausência de registos pode ser mais facilmente atribuída a:
                    </p>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Prática comum da época de não documentar exaustivamente protótipos</li>
                      <li>• Obsolescência tecnológica natural</li>
                      <li>• Descarte de equipamentos antigos por novas versões</li>
                      <li>• Falta de valorização histórica na época</li>
                      <li>• Reciclagem ou destruição por questões práticas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-slate-300 italic text-center">
                      A história do "gerador perdido" de Edison reflete mais o fascínio humano por mistérios não resolvidos 
                      e por narrativas de "segredos industriais" do que uma conspiração comprovada.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 8: Legado e Impacto */}
            <AccordionItem value="step-8" className="bg-green-900/30 rounded-lg border border-green-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🌟 Passo 8: Legado e Impacto Duradouro de Edison</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    Thomas Edison é mais do que um inventor; ele foi um técnico fundador que não só criou invenções notáveis, 
                    mas também desenvolveu sistemas completos para as levar ao mercado em larga escala. O seu legado transcende 
                    as invenções individuais, moldando a forma como a inovação é percebida e comercializada até hoje.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 text-center">
                      <h3 className="text-blue-400 font-bold text-2xl mb-2">85%</h3>
                      <h4 className="text-blue-400 font-bold mb-2">Eletrificação Mundial</h4>
                      <p className="text-slate-300 text-sm">
                        Percentagem de lares globais com acesso à eletricidade, um legado impulsionado por Edison.
                      </p>
                    </div>
                    
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30 text-center">
                      <h3 className="text-green-400 font-bold text-2xl mb-2">300%</h3>
                      <h4 className="text-green-400 font-bold mb-2">Crescimento Industrial</h4>
                      <p className="text-slate-300 text-sm">
                        Estimativa do aumento da produção industrial devido à introdução da energia elétrica.
                      </p>
                    </div>
                    
                    <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30 text-center">
                      <h3 className="text-purple-400 font-bold text-2xl mb-2">1,093</h3>
                      <h4 className="text-purple-400 font-bold mb-2">Patentes Registradas</h4>
                      <p className="text-slate-300 text-sm">
                        Número impressionante de patentes americanas detidas por Thomas Edison ao longo da sua vida.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">🌍 Influência Global</h3>
                    <p className="text-slate-300">
                      A influência de Edison pode ser vista em quase todos os aspetos da nossa sociedade moderna. 
                      A eletrificação que ele impulsionou tornou possível a automação industrial, o desenvolvimento 
                      de eletrodomésticos, e a criação de infraestruturas que são a base do mundo digital.
                    </p>
                  </div>
                  
                  <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/20">
                    <h3 className="text-orange-400 font-bold text-lg mb-3">🎯 Diversidade de Inovações</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• <strong>Fonógrafo:</strong> Revolucionou a gravação de som</li>
                      <li>• <strong>Cinetoscópio:</strong> Pioneiro do cinema moderno</li>
                      <li>• <strong>Sistema Elétrico:</strong> Base da distribuição global de energia</li>
                      <li>• <strong>Laboratório de P&D:</strong> Modelo moderno de inovação industrial</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-red-400 font-bold text-lg mb-3">⚖️ Críticas e Reconhecimento</h3>
                    <p className="text-slate-300">
                      O reconhecimento dos seus méritos vem acompanhado de críticas significativas à sua ética e práticas 
                      empresariais. As táticas agressivas na "Guerra das Correntes" e as alegações de apropriação de ideias 
                      mancham a sua reputação para alguns. Apesar dessas críticas, a sua contribuição para a eletrificação 
                      e para a indústria moderna é inegável.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 9: Conclusão */}
            <AccordionItem value="step-9" className="bg-purple-900/30 rounded-lg border border-purple-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-purple-400">
                <span className="text-lg font-semibold">🎭 Passo 9: Entre o Mito e a Realidade</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <p className="text-slate-300">
                    Thomas Edison emerge da história como uma figura de inegável complexidade, dividida entre o rótulo 
                    de génio inovador, o empresário astuto e, por vezes, controverso. A sua contribuição para a eletrificação 
                    e para o avanço tecnológico foi monumental, moldando o mundo moderno de formas que ainda hoje se fazem sentir.
                  </p>
                  
                  <div className="bg-slate-800/40 p-4 rounded-lg border border-purple-500/20">
                    <h3 className="text-purple-400 font-bold text-lg mb-3">📚 O Que Aprendemos</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• O papel central de Edison na revolução elétrica do século XIX</li>
                      <li>• O desenvolvimento do gerador e do sistema de iluminação completo</li>
                      <li>• A intensa "Guerra das Correntes" e suas consequências</li>
                      <li>• As controvérsias éticas que rodearam a sua carreira</li>
                      <li>• O mistério do "gerador perdido" e as teorias que o envolvem</li>
                      <li>• O legado duradouro que moldou o mundo moderno</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                    <h3 className="text-indigo-400 font-bold text-lg mb-3">🔮 O Legado Contínuo</h3>
                    <p className="text-slate-300">
                      A história do "gerador perdido" de Edison, embora careça de provas concretas para as teorias da conspiração, 
                      reflete o fascínio humano pelos mistérios e pelas rivalidades que muitas vezes acompanham a inovação. 
                      O gerador original de 1880, preservado como relíquia histórica, serve como um lembrete tangível do ponto 
                      de viragem que a sua invenção representou.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-lg border border-purple-500/30 text-center">
                    <h3 className="text-white font-bold text-xl mb-4">✨ Reflexão Final</h3>
                    <p className="text-slate-300 mb-4">
                      Em última análise, a história de Edison é uma tapeçaria rica e complexa, onde a brilhante inovação 
                      se entrelaça com a competição acirrada e a busca por dominar o futuro da energia. O seu legado perdura, 
                      não apenas nas luzes que iluminam as nossas casas e cidades, mas também nas lições sobre o impacto 
                      da tecnologia, a ética nos negócios e a persistência dos mitos que rodeiam grandes figuras históricas.
                    </p>
                    <p className="text-purple-400 font-bold text-lg italic">
                      O Mago de Menlo Park e o mistério do seu gerador continuam a inspirar.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoriaTab;
