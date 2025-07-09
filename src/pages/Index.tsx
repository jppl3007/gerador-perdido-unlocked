
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InicioTab from "@/components/InicioTab";
import HistoriaTab from "@/components/HistoriaTab";
import EconomizarTab from "@/components/EconomizarTab";
import ConstruirTab from "@/components/ConstruirTab";
import BonusTab from "@/components/BonusTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-8">
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-4xl font-bold text-[#f9a811] mb-2 sm:mb-4 px-2 leading-tight">
            O Gerador Perdido de Thomas Edison
          </h1>
          <p className="text-xs sm:text-lg text-white max-w-2xl mx-auto px-2">
            Descubra os segredos por trás da tecnologia que pode revolucionar sua conta de energia
          </p>
        </div>

        <Tabs defaultValue="inicio" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-3 sm:mb-8 bg-black border-2 border-[#f9a811] h-auto gap-0.5 sm:gap-1 p-0.5 sm:p-1">
            <TabsTrigger 
              value="inicio" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10 text-[10px] sm:text-sm py-1.5 sm:py-2 px-1 sm:px-3 leading-tight"
            >
              Início
            </TabsTrigger>
            <TabsTrigger 
              value="historia" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10 text-[10px] sm:text-sm py-1.5 sm:py-2 px-1 sm:px-3 leading-tight"
            >
              História
            </TabsTrigger>
            <TabsTrigger 
              value="economizar" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10 text-[10px] sm:text-sm py-1.5 sm:py-2 px-1 sm:px-3 leading-tight"
            >
              Economizar
            </TabsTrigger>
            <TabsTrigger 
              value="construir" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10 text-[10px] sm:text-sm py-1.5 sm:py-2 px-1 sm:px-3 leading-tight"
            >
              Construir
            </TabsTrigger>
            <TabsTrigger 
              value="bonus" 
              className="data-[state=active]:bg-[#f9a811] data-[state=active]:text-black text-white hover:bg-[#f9a811]/10 text-[10px] sm:text-sm py-1.5 sm:py-2 px-1 sm:px-3 leading-tight"
            >
              BÔNUS
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
