export default function Footer() {
    return (
        <footer className="bg-[#034833] text-white">
            <div className="px-[10%] py-10">
                <div className="flex flex-wrap justify-between gap-y-8">
                    {[
                        {
                            title: 'Menu',
                            items: ['Início', 'Eventos', 'Sobre', 'Criar Evento'],
                        },
                        {
                            title: 'Conta',
                            items: ['Minha Conta', 'Sair'],
                        },
                        {
                            title: 'Categoria',
                            items: [
                                'Concerts & Gigs',
                                'Festivals & Lifestyle',
                                'Business & Networking',
                                'Food & Drinks',
                                'Performing Arts',
                                'Sports & Outdoors',
                                'Exhibitions',
                            ],
                        },
                        {
                            title: 'Siga-nos',
                            items: ['Facebook', 'Instagram', 'Youtube'],
                        },
                    ].map(({ title, items }) => (
                        <div key={title} className="w-full sm:w-[45%] md:w-[18%]">
                            <h3 className="text-2xl leading-[29px] font-semibold font-['Montserrat'] mb-4">
                                {title}
                            </h3>
                            <ul className="space-y-2 text-[18px] leading-[25px] text-[#A9A9A9] font-['Open_Sans']">
                                {items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="bg-white w-[247px] h-[285px] hidden md:block mt-[65px] ml-6" />
                </div>
            </div>
            <div className="py-4 border-t border-[#ccc] mx-[7%] text-center">
                <p className="font-['Open_Sans'] text-[18px] leading-[25px] text-[#A9A9A9]">
                    © 2025
                </p>
            </div>
        </footer>
    );
}
