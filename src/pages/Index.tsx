
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InicioTab from "@/components/InicioTab";
import HistoriaTab from "@/components/HistoriaTab";
import EconomizarTab from "@/components/EconomizarTab";
import ConstruirTab from "@/components/ConstruirTab";
import BonusTab from "@/components/BonusTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#f9a811] mb-4">
            O Gerador Perdido de Thomas Edison
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Descubra os segredos por trás da tecnologia que pode revolucionar sua conta de energia
          </p>
        </div>

        <Tabs defaultValue="inicio" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-black border-2 border-[#f9a811]">
            <TabsTrigger 
              value="inicio" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10"
            >
              Início
            </TabsTrigger>
            <TabsTrigger 
              value="historia" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10"
            >
              História de Edison
            </TabsTrigger>
            <TabsTrigger 
              value="economizar" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10"
            >
              Economizar Energia
            </TabsTrigger>
            <TabsTrigger 
              value="construir" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10"
            >
              Como Construir
            </TabsTrigger>
            <TabsTrigger 
              value="bonus" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10"
            >
              BÓNUS INCRÍVEIS
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

          <TabsContent value="bonus">
            <BonusTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
