
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Clock, Package } from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutos em segundos
  const [available, setAvailable] = useState(2);

  useEffect(() => {
    // Mostrar popup após 1 segundo de carregamento da página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsOpen(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleRedirect = () => {
    window.open('https://shop260.pay.yampi.com.br/r/TN1DBCDYJ4', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-black border-2 border-green-500 p-6 text-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-white hover:text-green-500 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="space-y-4">
          <div className="text-4xl">🎉</div>
          <DialogTitle className="text-xl font-bold text-[#f9a811] leading-tight text-center">
            Parabéns!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <p className="text-white text-sm leading-relaxed">
            Você foi um dos poucos selecionados para adquirir o 
            <span className="text-[#f9a811] font-bold"> Gerador Edison pronto</span> na sua casa!
          </p>

          <div className="bg-red-600 text-white px-4 py-3 rounded-lg border border-red-500">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-4 w-4" />
              <span className="font-bold">TEMPO LIMITADO</span>
            </div>
            <div className="text-2xl font-mono font-bold">
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="bg-orange-600 text-white px-4 py-2 rounded-lg border border-orange-500">
            <div className="flex items-center justify-center gap-2">
              <Package className="h-4 w-4" />
              <span className="font-bold">Restam apenas {available} unidades!</span>
            </div>
          </div>

          <Button 
            onClick={handleRedirect}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-lg animate-pulse"
          >
            🚀 GARANTIR MINHA UNIDADE AGORA!
          </Button>

          <p className="text-xs text-gray-400">
            * Oferta válida apenas durante o tempo exibido
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
