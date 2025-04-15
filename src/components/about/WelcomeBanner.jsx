import { Button } from "@/components/ui/button";
export default function WelcomeBanner() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-green-600 rounded-xl text-white px-8 py-12 flex items-center justify-between w-full max-w-5xl">
        <div>
          <p className="text-sm mb-2">Seja bem vindo ao</p>
          <h1 className="text-3xl font-bold leading-tight">
            Portal Eventos
            <br />
            IFSP
          </h1>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded shadow">
            Confira os eventos
          </button>
        </div>
        <div>
          {/* SVG substituto do ícone do calendário */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-32 h-32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8h18M7 12h.01M11 12h.01M15 12h.01M7 16h.01M11 16h.01M15 16h.01M8 4v2m8-2v2M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
