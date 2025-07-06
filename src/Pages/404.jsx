import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Glass Card Container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/10">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4 animate-pulse">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full shadow-lg shadow-purple-500/30"></div>
          </div>

          {/* Message */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Oops! Página não encontrada
            </h2>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
              A página que você está procurando pode ter sido movida, removida
              ou nunca existiu.
            </p>
          </div>

          {/* Illustration */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 shadow-xl">
              <div className="text-6xl animate-bounce">🔍</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleGoBack}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-white/10 min-w-[140px]"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>

            <button
              onClick={handleGoHome}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 min-w-[140px]"
            >
              <Home size={20} />
              Início
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm">
              Erro 404 - Rota:{" "}
              <span className="text-purple-300 font-mono">
                {location.pathname}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
