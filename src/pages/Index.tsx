
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InicioTab from "@/components/InicioTab";
import ConstruirTab from "@/components/ConstruirTab";
import HistoriaTab from "@/components/HistoriaTab";
import EconomizarTab from "@/components/EconomizarTab";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            ⚡ O Gerador Perdido ⚡
          </h1>
          <p className="text-center text-slate-300 mt-2">
            Descubra os segredos da energia livre de Tesla
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="inicio" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20">
            <TabsTrigger 
              value="inicio" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300 hover:text-white transition-colors"
            >
              🏠 Início
            </TabsTrigger>
            <TabsTrigger 
              value="historia" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300 hover:text-white transition-colors"
            >
              📚 História de Edison
            </TabsTrigger>
            <TabsTrigger 
              value="economizar" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300 hover:text-white transition-colors"
            >
              💡 Economizar Energia
            </TabsTrigger>
            <TabsTrigger 
              value="construir" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300 hover:text-white transition-colors"
            >
              🔧 Como Construir
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
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
          </div>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-blue-500/20 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-slate-400">
          <p>© 2024 O Gerador Perdido - Transformando conhecimento em energia</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
