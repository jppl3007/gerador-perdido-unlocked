
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ConstruirTab = () => {
  return (
    <div className="space-y-8">
      {/* Header Gerador Edison */}
      <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            🔧 Manual do Gerador Esquecido (Avançado)
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Guia completo para construir seu próprio gerador de energia portátil inspirado nos planos originais de Thomas Edison
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-300 text-lg">
            O Gerador Esquecido permite gerar eletricidade de forma econômica, sustentável e independente da rede pública, 
            sendo ideal para uso residencial, rural, camping ou como fonte de energia de emergência. Com componentes acessíveis 
            e instruções detalhadas, mesmo iniciantes podem construir este gerador eficiente que promete reduzir até 90% da sua conta de luz.
          </p>
        </CardContent>
      </Card>

      {/* Header Gerador Simples */}
      <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white mb-4">
            ⚡ Gerador Simples de Baixo Custo
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            Versão simplificada para iniciantes - construa um gerador básico com menos de R$ 100
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-300 text-lg">
            Uma alternativa mais simples e econômica para quem quer começar com pequenos projetos. 
            Ideal para carregar celulares, ligar pequenas lâmpadas LED e funcionar como projeto educativo 
            ou fonte de energia para emergências básicas.
          </p>
        </CardContent>
      </Card>

      {/* Passos do Manual Avançado */}
      <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-orange-400 text-2xl">📋 Gerador Esquecido (Avançado)</CardTitle>
          <CardDescription className="text-slate-300">
            Clique em cada passo para ver as instruções detalhadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* Passo 1: Benefícios e Aplicações */}
            <AccordionItem value="step-1" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">🎯 Passo 1: Benefícios e Aplicações Práticas</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">💰 Economia Significativa</h3>
                    <p className="text-slate-300 mb-4">Redução de até 90% na conta de luz mensal, proporcionando economia substancial a longo prazo.</p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">🌱 Energia Limpa e Portátil</h3>
                    <p className="text-slate-300 mb-4">Funcionamento silencioso e sem emissão de fumaça, permitindo utilização em diversos ambientes.</p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">🔄 Versatilidade</h3>
                    <p className="text-slate-300 mb-4">Funciona mesmo em locais sem rede elétrica, sendo perfeito para emergências e uso diário.</p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">👥 Acessibilidade</h3>
                    <p className="text-slate-300">Fácil montagem mesmo para iniciantes, utilizando peças simples e acessíveis (menos de R$ 200).</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">📋 Aplicações Práticas</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Complemento da energia elétrica convencional em residências</li>
                      <li>• Fonte de energia em áreas rurais ou isoladas</li>
                      <li>• Uso em camping, pescarias, trailers e motorhomes</li>
                      <li>• Gerador reserva para emergências e apagões</li>
                      <li>• Alimentação de lâmpadas LED, carregadores, pequenos eletrodomésticos e ferramentas portáteis</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 2: Componentes Necessários */}
            <AccordionItem value="step-2" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">🛠️ Passo 2: Componentes Necessários</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-slate-300 mb-6">
                  Todos os componentes são facilmente encontrados em lojas especializadas, sucatas ou mesmo em casa.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-slate-300">
                    <thead>
                      <tr className="border-b border-orange-500/20">
                        <th className="text-left py-2 text-orange-400">Item</th>
                        <th className="text-left py-2 text-orange-400">Descrição</th>
                        <th className="text-left py-2 text-orange-400">Fonte Sugerida</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Motor a gasolina</td>
                        <td className="py-2">Motor de 3-5 HP, como de cortador de grama, com eixo horizontal</td>
                        <td className="py-2">Sucatas, lojas de ferramentas</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Alternador automotivo</td>
                        <td className="py-2">Alternador de carro, preferencialmente com regulador interno</td>
                        <td className="py-2">Sucatas de carros ou lojas de autopeças</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Bateria de ciclo profundo</td>
                        <td className="py-2">Bateria de 12V, tipo marinha ou RV, para suportar descargas profundas</td>
                        <td className="py-2">Lojas de autopeças ou baterias</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Inversor</td>
                        <td className="py-2">Inversor de 12V CC para 127V/220V CA, tamanho conforme necessidade</td>
                        <td className="py-2">Lojas de eletrônicos</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Base ou estrutura</td>
                        <td className="py-2">Madeira ou metal para montar o motor e o alternador</td>
                        <td className="py-2">Sucatas ou lojas de materiais</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Correia e polias</td>
                        <td className="py-2">Para conectar o eixo do motor ao do alternador</td>
                        <td className="py-2">Sucatas ou lojas de autopeças</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Fiação</td>
                        <td className="py-2">Fio de 4 AWG para saída do alternador, 10 AWG para outros</td>
                        <td className="py-2">Lojas de materiais elétricos</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Interruptor</td>
                        <td className="py-2">Interruptor de 12V para excitação do alternador</td>
                        <td className="py-2">Lojas de eletrônicos</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Fusíveis</td>
                        <td className="py-2">Para proteger os circuitos (ex.: 100A para alternador-bateria)</td>
                        <td className="py-2">Lojas de eletrônicos</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">Ferramentas</td>
                        <td className="py-2">Chaves de fenda, chaves inglesas, furadeira, etc.</td>
                        <td className="py-2">Ferramentas pessoais</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-bold mb-2">🔧 Motor</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Um motor de cortador de grama usado é uma opção econômica. Verifique se está em boas condições, 
                      se o eixo gira livremente e se arranca sem dificuldades. A potência ideal está entre 3 e 5 HP.
                    </p>

                    <h4 className="text-white font-bold mb-2">⚡ Alternador</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Um alternador automotivo padrão (ex.: Delco 10SI) é ideal, especialmente com regulador interno. 
                      Deve estar em bom estado e ter capacidade adequada para suas necessidades energéticas.
                    </p>

                    <h4 className="text-white font-bold mb-2">🔋 Bateria</h4>
                    <p className="text-slate-300 text-sm">
                      Escolha uma bateria de ciclo profundo para suportar cargas e descargas frequentes. 
                      São projetadas para fornecer energia constante por longos períodos.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">🔄 Inversor</h4>
                    <p className="text-slate-300 text-sm mb-4">
                      Escolha um inversor de onda senoidal pura para proteger aparelhos sensíveis, 
                      com voltagem adequada (127V ou 220V no Brasil). A qualidade afeta diretamente a energia fornecida.
                    </p>

                    <h4 className="text-white font-bold mb-2">🔗 Correia</h4>
                    <p className="text-slate-300 text-sm">
                      Use uma correia compatível com as polias do motor e do alternador. 
                      A correia deve ter tensão adequada para transferir eficientemente a energia sem deslizar ou quebrar.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 3: Preparação e Montagem */}
            <AccordionItem value="step-3" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">🏗️ Passo 3: Preparação e Montagem Inicial</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">1. Preparar a Base</h3>
                    <p className="text-slate-300">
                      Escolha uma base robusta (madeira ou metal) que suporte o peso e as vibrações do motor e do alternador. 
                      Certifique-se de que a base esteja nivelada para garantir o funcionamento adequado do sistema. 
                      Uma base estável é fundamental para evitar vibrações excessivas.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">2. Montar o Motor</h3>
                    <p className="text-slate-300">
                      Fixe o motor à base com parafusos, garantindo uma montagem firme. Verifique o alinhamento do eixo do motor, 
                      pois isso afetará diretamente a eficiência da transmissão de energia para o alternador. 
                      Utilize parafusos de qualidade e, se necessário, aplique borrachas anti-vibração.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">3. Montar o Alternador</h3>
                    <p className="text-slate-300">
                      Posicione o alternador de forma que sua polia esteja alinhada com a polia do motor. 
                      Use um suporte de carro ou fabrique um suporte com tiras de metal ou ferro angular. 
                      Fixe o alternador com firmeza, mas permita ajustes para tensionar a correia posteriormente.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">4. Instalar a Correia</h3>
                    <p className="text-slate-300">
                      Conecte as polias do motor e do alternador com uma correia adequada. 
                      Ajuste a tensão da correia para evitar folgas ou aperto excessivo. 
                      Uma correia muito frouxa deslizará, enquanto uma muito apertada pode danificar os rolamentos.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 4: Conexões Elétricas */}
            <AccordionItem value="step-4" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">⚡ Passo 4: Conexões Elétricas</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Fiação do Alternador</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Identifique os terminais: saída principal (B+), terminal 1 (excitação), terminal 2 (sensor) e terra</li>
                      <li>• Conecte o terminal de saída principal ao terminal positivo da bateria com fio de 4 AWG</li>
                      <li>• Conecte o terminal 2 ao terminal positivo da bateria com fio de 10 AWG</li>
                      <li>• Conecte o terminal 1 ao terminal positivo da bateria através de um interruptor com fio de 10 AWG</li>
                      <li>• Conecte o terra do alternador ao terminal negativo da bateria ou à estrutura</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Conexão da Bateria</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Posicione a bateria na base ou próximo a ela, garantindo que esteja segura</li>
                      <li>• Conecte os terminais positivo e negativo conforme a fiação descrita acima</li>
                      <li>• Use um fusível de 100A entre o alternador e a bateria para proteção contra sobrecargas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Instalação do Inversor</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Conecte a entrada do inversor à bateria, seguindo as instruções do fabricante</li>
                      <li>• Use fusíveis adequados para proteger o circuito do inversor</li>
                      <li>• Instale o inversor em local protegido de intempéries e com boa ventilação</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Teste do Sistema</h3>
                    <ol className="text-slate-300 space-y-2">
                      <li>1. Inicie o motor seguindo as instruções do fabricante</li>
                      <li>2. Feche o interruptor de excitação para ativar o alternador</li>
                      <li>3. Use um multímetro para verificar se a voltagem da bateria aumenta</li>
                      <li>4. Ligue o inversor e teste com uma carga pequena, como uma lâmpada LED</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 5: Operação */}
            <AccordionItem value="step-5" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">🎮 Passo 5: Operação do Gerador</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Verificações Pré-operação</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Certifique-se de que o gerador está em área bem ventilada</li>
                      <li>• Verifique os níveis de combustível e óleo do motor</li>
                      <li>• Confirme se todas as conexões elétricas estão firmes</li>
                      <li>• Verifique a tensão da correia</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">Iniciando o Gerador</h3>
                    <ol className="text-slate-300 space-y-2 text-sm">
                      <li>1. Inicie o motor conforme as instruções do fabricante</li>
                      <li>2. Feche o interruptor de excitação para ativar o alternador</li>
                      <li>3. Monitore a voltagem da bateria com um multímetro</li>
                      <li>4. Quando a bateria estiver carregada, ligue o inversor</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">Monitoramento</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Verifique periodicamente a voltagem da bateria</li>
                      <li>• Observe o funcionamento do motor (temperatura, ruídos)</li>
                      <li>• Monitore o consumo de energia através do inversor</li>
                      <li>• Esteja atento a sinais de sobrecarga ou mau funcionamento</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">Desligando o Gerador</h3>
                    <ol className="text-slate-300 space-y-2 text-sm">
                      <li>1. Desligue o inversor primeiro</li>
                      <li>2. Abra o interruptor de excitação do alternador</li>
                      <li>3. Pare o motor seguindo as instruções do fabricante</li>
                      <li>4. Deixe o sistema arrefecer antes de realizar manutenção</li>
                    </ol>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 6: Manutenção */}
            <AccordionItem value="step-6" className="bg-slate-700/30 rounded-lg border border-orange-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-orange-400">
                <span className="text-lg font-semibold">🔧 Passo 6: Manutenção Regular</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">📅 Manutenção Diária</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Verificar níveis de óleo e combustível do motor</li>
                      <li>• Inspecionar visualmente conexões elétricas</li>
                      <li>• Verificar tensão da correia</li>
                      <li>• Limpar detritos ou poeira acumulados</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">🗓️ Manutenção Semanal</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Verificar estado de carga da bateria</li>
                      <li>• Limpar filtro de ar do motor</li>
                      <li>• Verificar todas as conexões quanto à firmeza</li>
                      <li>• Testar o sistema com cargas variadas</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">📆 Manutenção Mensal</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Trocar óleo do motor (ou conforme recomendação)</li>
                      <li>• Verificar níveis de água da bateria (se aplicável)</li>
                      <li>• Inspecionar desgaste da correia</li>
                      <li>• Verificar terminais da bateria quanto à corrosão</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">📋 Manutenção Semestral</h3>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li>• Substituir vela de ignição do motor</li>
                      <li>• Verificar e ajustar folgas das válvulas</li>
                      <li>• Limpar sistema de combustível</li>
                      <li>• Verificar rolamentos do alternador</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 7: Segurança */}
            <AccordionItem value="step-7" className="bg-red-900/30 rounded-lg border border-red-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-red-400">
                <span className="text-lg font-semibold">⚠️ Passo 7: Precauções de Segurança</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">🌬️ Ventilação</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      <strong>NUNCA</strong> opere o gerador em ambientes fechados devido ao risco de intoxicação por monóxido de carbono. 
                      Este gás é inodoro e incolor, mas extremamente tóxico. Utilize apenas em áreas externas ou muito bem ventiladas.
                    </p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">⚡ Segurança Elétrica</h3>
                    <p className="text-slate-300 text-sm">
                      Use fios e fusíveis adequados para evitar curtos-circuitos e incêndios. Nunca sobrecarregue o sistema. 
                      Mantenha todas as conexões protegidas da umidade e verifique regularmente o isolamento dos cabos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">⛽ Manuseio de Combustível</h3>
                    <p className="text-slate-300 text-sm mb-4">
                      Armazene e manuseie a gasolina com extremo cuidado, longe de fontes de calor. 
                      Nunca reabasteça o motor enquanto estiver em funcionamento ou quente. 
                      Limpe imediatamente qualquer derramamento.
                    </p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">🔧 Segurança Mecânica</h3>
                    <p className="text-slate-300 text-sm">
                      Tenha cuidado com partes móveis e superfícies quentes do motor. 
                      Nunca opere sem as proteções das correias. Aguarde o motor arrefecer antes de qualquer manutenção.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Passo 8: Conclusão */}
            <AccordionItem value="step-8" className="bg-green-900/30 rounded-lg border border-green-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🎉 Passo 8: Conclusão e Dicas Adicionais</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">📋 Resumo do Projeto</h3>
                    <p className="text-slate-300">
                      O Gerador Esquecido representa uma solução prática e econômica para geração de energia independente. 
                      Inspirado nos princípios de Thomas Edison, este projeto combina tecnologias simples e acessíveis para criar 
                      uma fonte de energia confiável. Ao seguir as instruções deste manual, você terá construído um gerador capaz 
                      de reduzir significativamente sua dependência da rede elétrica convencional.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">🚀 Expansões Possíveis</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Adicionar um painel de controle com voltímetro e amperímetro</li>
                      <li>• Instalar um sistema de arranque elétrico para o motor</li>
                      <li>• Incorporar um sistema de carregamento solar complementar</li>
                      <li>• Construir uma caixa de proteção acústica para reduzir o ruído</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">💡 Dicas para Maximizar a Eficiência</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Opere o motor na rotação ideal recomendada pelo fabricante</li>
                      <li>• Utilize baterias de alta qualidade e mantenha-as sempre em bom estado</li>
                      <li>• Distribua o consumo de energia ao longo do dia, evitando picos de demanda</li>
                      <li>• Considere utilizar aparelhos de baixo consumo, como lâmpadas LED</li>
                      <li>• Mantenha todos os componentes limpos e em bom estado de conservação</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                    <p className="text-slate-300 text-center italic">
                      <strong>Parabéns por concluir a construção do seu Gerador Esquecido!</strong><br/>
                      Este projeto não apenas proporciona independência energética, mas também representa um passo importante 
                      na direção de um estilo de vida mais sustentável e autossuficiente. Lembre-se de que a experiência é a melhor professora. 
                      À medida que utiliza o seu gerador, você desenvolverá um entendimento mais profundo do seu funcionamento.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>

      {/* Gerador Simples */}
      <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-green-400 text-2xl">⚡ Gerador Simples (Projeto Básico)</CardTitle>
          <CardDescription className="text-slate-300">
            Versão simplificada para iniciantes - construa um gerador básico com menos de R$ 100
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* Benefícios do Gerador Simples */}
            <AccordionItem value="simple-1" className="bg-slate-700/30 rounded-lg border border-green-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🎯 Benefícios do Gerador Simples</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">💸 Super Econômico</h3>
                    <p className="text-slate-300 mb-4">Construa com menos de R$ 100 usando peças facilmente encontradas.</p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">🎓 Educativo</h3>
                    <p className="text-slate-300 mb-4">Perfeito para aprender os conceitos básicos de geração de energia.</p>
                    
                    <h3 className="text-white font-bold text-lg mb-3">🔋 Portátil</h3>
                    <p className="text-slate-300">Leve e compacto, ideal para camping ou emergências básicas.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">⚡ Aplicações</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Carregar celulares e tablets</li>
                      <li>• Alimentar lâmpadas LED de baixa potência</li>
                      <li>• Rádios portáteis</li>
                      <li>• Pequenos ventiladores USB</li>
                      <li>• Projetos escolares e demonstrações</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Materiais do Gerador Simples */}
            <AccordionItem value="simple-2" className="bg-slate-700/30 rounded-lg border border-green-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🛠️ Materiais Necessários</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-slate-300">
                    <thead>
                      <tr className="border-b border-green-500/20">
                        <th className="text-left py-2 text-green-400">Item</th>
                        <th className="text-left py-2 text-green-400">Descrição</th>
                        <th className="text-left py-2 text-green-400">Preço Aproximado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Motor DC 12V</td>
                        <td className="py-2">Motor de limpador de para-brisa ou similar</td>
                        <td className="py-2">R$ 20-30</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Ímãs de neodímio</td>
                        <td className="py-2">4-6 ímãs pequenos e potentes</td>
                        <td className="py-2">R$ 15-25</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Bateria 12V</td>
                        <td className="py-2">Bateria de moto ou selada pequena</td>
                        <td className="py-2">R$ 30-50</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Hélice ou roda</td>
                        <td className="py-2">Para captar vento ou movimento manual</td>
                        <td className="py-2">R$ 10-15</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Fios e conectores</td>
                        <td className="py-2">Cabos para conexões elétricas</td>
                        <td className="py-2">R$ 5-10</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2 font-semibold">Base de madeira</td>
                        <td className="py-2">Suporte para montar os componentes</td>
                        <td className="py-2">R$ 5-10</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">LED ou USB</td>
                        <td className="py-2">Para demonstrar a geração de energia</td>
                        <td className="py-2">R$ 5-10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <p className="text-slate-300 text-center">
                    <strong>Total estimado: R$ 90-150</strong> - Uma fração do custo do gerador avançado!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Montagem do Gerador Simples */}
            <AccordionItem value="simple-3" className="bg-slate-700/30 rounded-lg border border-green-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🔧 Montagem Passo a Passo</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">1. Preparar o Motor</h3>
                    <p className="text-slate-300">
                      Retire o motor DC 12V de um limpador de para-brisa usado. Limpe bem e teste se está funcionando. 
                      Este motor funcionará como dínamo quando girado manualmente ou pelo vento.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">2. Instalar os Ímãs</h3>
                    <p className="text-slate-300">
                      Cole os ímãs de neodímio ao redor do eixo do motor, alternando os polos (N-S-N-S). 
                      Isso aumentará a eficiência da geração de energia quando o eixo girar.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">3. Montar a Base</h3>
                    <p className="text-slate-300">
                      Fixe o motor em uma base de madeira robusta. Certifique-se de que o eixo possa girar livremente. 
                      Deixe espaço para a bateria e outros componentes.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">4. Instalar a Hélice</h3>
                    <p className="text-slate-300">
                      Conecte uma hélice ou roda ao eixo do motor. Para testes manuais, use uma manivela. 
                      Para uso com vento, use uma hélice leve e bem balanceada.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">5. Fazer as Conexões</h3>
                    <p className="text-slate-300">
                      Conecte os fios do motor à bateria através de um diodo (para evitar descarga reversa). 
                      Adicione um LED ou saída USB para demonstrar que está gerando energia.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Teste e Operação */}
            <AccordionItem value="simple-4" className="bg-slate-700/30 rounded-lg border border-green-500/20">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-green-400">
                <span className="text-lg font-semibold">🎮 Teste e Operação</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">✅ Testando o Sistema</h3>
                    <ol className="text-slate-300 space-y-2">
                      <li>1. Gire a hélice ou manivela manualmente</li>
                      <li>2. Observe se o LED acende ou se há voltagem na saída</li>
                      <li>3. Use um multímetro para medir a voltagem gerada</li>
                      <li>4. Teste com diferentes velocidades de rotação</li>
                    </ol>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">💡 Dicas de Uso</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Gire em velocidade constante para melhor resultado</li>
                      <li>• Evite sobrecarregar o sistema</li>
                      <li>• Use em dias ventosos se for eólico</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">⚡ Resultados Esperados</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Voltagem: 6-12V dependendo da rotação</li>
                      <li>• Corrente: 100-500mA</li>
                      <li>• Potência: 1-5W aproximadamente</li>
                      <li>• Suficiente para LEDs e carregar celular lentamente</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">🔧 Melhorias Possíveis</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Adicionar regulador de voltagem</li>
                      <li>• Usar motor brushless para maior eficiência</li>
                      <li>• Construir caixa de proteção</li>
                      <li>• Adicionar indicadores visuais</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Segurança do Gerador Simples */}
            <AccordionItem value="simple-5" className="bg-red-900/30 rounded-lg border border-red-500/30">
              <AccordionTrigger className="px-4 py-3 text-white hover:text-red-400">
                <span className="text-lg font-semibold">⚠️ Segurança e Cuidados</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">🧲 Cuidados com Ímãs</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Ímãs de neodímio são muito fortes</li>
                      <li>• Mantenha longe de cartões magnéticos</li>
                      <li>• Cuidado para não prenderem os dedos</li>
                      <li>• Podem danificar equipamentos eletrônicos</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">⚡ Segurança Elétrica</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Use sempre diodos de proteção</li>
                      <li>• Não curto-circuite as saídas</li>
                      <li>• Verifique polaridade antes de conectar</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-3">🔧 Segurança Mecânica</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Fixe bem todos os componentes</li>
                      <li>• Cuidado com partes móveis</li>
                      <li>• Use óculos de proteção ao cortar/furar</li>
                      <li>• Mantenha área de trabalho limpa</li>
                    </ul>
                    
                    <h3 className="text-white font-bold text-lg mb-3 mt-6">📋 Dicas Importantes</h3>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Este é um projeto educativo/demonstrativo</li>
                      <li>• Não substituirá energia da rede</li>
                      <li>• Ideal para entender conceitos básicos</li>
                      <li>• Sempre supervisione crianças</li>
                    </ul>
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

export default ConstruirTab;
