import { Button } from "@/components/ui/button";
export default function HomePage() {
    return (
        <div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h1>Welcome to the Event App</h1>
                <p>Discover and manage events effortlessly!</p>
                <p>Este é um exemplo de como criar uma page.</p>
                <p>Toda page deve ser colocada em uma pasta com o nome de como deve ser a rota</p>
                <p>Exemplo: src/app/home/page.jsx</p>
                <b>Neste exemplo o nome da pasta é exemplo e nome da rota será exemplo</b>
                <p>Para acessar a página, vá para: http://localhost:3000/exemplo</p>
                <p>Você pode criar várias páginas assim, apenas criando pastas com o nome da rota desejada.</p>
                <p>Caso queira criar uma rota dentro da rota a estrutura se mantem</p>
                <p>Exemplo: src/app/exemplo/filho/page.jsx</p>
                <p>Para acessar a página, vá para: http://localhost:3000/exemplo/filho</p>
                <p>Toda rota deve ter uma page.jsx e um layout</p>
                <p>O layout serve para definir o que será mantido entre as páginas</p>
                <p>O layout pode ser o de /app, mas caso não exista haverá erros</p>

            </div>
            <div className="mt-6">
                <h2 className="text-lg font-bold">Exemplo com o componente Button do shadcn</h2>
                <p>Este é um exemplo de como usar o componente Button.</p>
                <Button variant="default" size="default" className="mt-2">
                Botão Padrão
                </Button>
                <Button variant="destructive" size="sm" className="mt-2">
                Botão Destrutivo
                </Button>
                <Button variant="outline" size="lg" className="mt-2">
                Botão Contornado
                </Button>
                <Button variant="ghost" size="icon" className="mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                </Button>
            </div>
        </div>
    );


}