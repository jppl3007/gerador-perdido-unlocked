
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InicioTab from "@/components/InicioTab";
import HistoriaTab from "@/components/HistoriaTab";
import EconomizarTab from "@/components/EconomizarTab";
import ConstruirTab from "@/components/ConstruirTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#075985] mb-4">
            O Gerador Perdido de Thomas Edison
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Descubra os segredos por trás da tecnologia que pode revolucionar sua conta de energia
          </p>
        </div>

        <Tabs defaultValue="inicio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white border-2 border-[#075985]">
            <TabsTrigger 
              value="inicio" 
              className="data-[state=active]:bg-[#075985] data-[state=active]:text-white text-[#075985] hover:bg-[#075985]/10"
            >
              Início
            </TabsTrigger>
            <TabsTrigger 
              value="historia" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-[#f9a811] hover:bg-[#f9a811]/10"
            >
              História de Edison
            </TabsTrigger>
            <TabsTrigger 
              value="economizar" 
              className="data-[state=active]:bg-[#075985] data-[state=active]:text-white text-[#075985] hover:bg-[#075985]/10"
            >
              Economizar Energia
            </TabsTrigger>
            <TabsTrigger 
              value="construir" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-[#f9a811] hover:bg-[#f9a811]/10"
            >
              Como Construir
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inicio">
            <InicioTab />
          </TabsContent>

          <TabsContent value="historia">
            <HistoriaTab />
          </TabsContent>

          <TabsContent value="economizar">
            <EconomizarTab />
          </TabsContent>

          <TabsContent value="construir">
            <ConstruirTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
