import WelcomeBanner from "../components/home/WelcomeBanner";
import AtividadeFormulario from "@/app/createEvent/atividadeFormulario";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <WelcomeBanner />
      <AtividadeFormulario />
    </main>
  );
}