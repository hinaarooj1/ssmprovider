import React from 'react';

const CookiePolicySec = () => {
    return (
        <div>
            <div className="py-28 privacy-policy-wrapper md:px-28 px-10 bg-[#1a0625] text-white text-gray-800">
                <div className="max-w-4xl mx-auto bg-[#0a0010] shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-center text-white mb-6">
                        Política de Cookies
                    </h1>
                    <p className="mb-4">
                        Esta Política de Cookies explica como o site <strong>Você Mais Engajado</strong> utiliza
                        cookies e tecnologias similares para melhorar a experiência do usuário, personalizar
                        conteúdo e garantir o bom funcionamento da plataforma. Ao continuar utilizando nosso site,
                        você concorda com o uso de cookies conforme descrito nesta política.
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">1. O que são Cookies?</h2>
                    <p className="mb-4">
                        Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário (computador,
                        smartphone ou tablet) quando ele visita um site. Esses arquivos contêm informações que
                        ajudam o site a reconhecer o dispositivo e oferecer uma experiência mais personalizada.
                    </p>

                    {/* Section 2 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">2. Tipos de Cookies que Utilizamos</h2>
                    <h3 className="text-md font-semibold mt-4 mb-2">2.1. Cookies Necessários:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Essenciais para o funcionamento do site, permitindo que o usuário navegue e utilize
                            suas funcionalidades.
                        </li>
                        <li>Exemplo: autenticação de usuários e manutenção de sessões ativas.</li>
                    </ul>
                    <h3 className="text-md font-semibold mt-4 mb-2">2.2. Cookies de Desempenho:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Coletam informações anônimas sobre como os usuários utilizam o site, permitindo que
                            possamos melhorar sua performance.
                        </li>
                        <li>Exemplo: páginas mais visitadas e tempo de navegação.</li>
                    </ul>
                    <h3 className="text-md font-semibold mt-4 mb-2">2.3. Cookies de Funcionalidade:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Permitem que o site lembre-se das preferências do usuário, como idioma e região.
                        </li>
                        <li>Exemplo: configuração de idioma e preferências de layout.</li>
                    </ul>
                    <h3 className="text-md font-semibold mt-4 mb-2">2.4. Cookies de Publicidade:</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Utilizados para exibir anúncios relevantes com base nos interesses do usuário.
                        </li>
                        <li>Exemplo: apresentação de anúncios personalizados em função da navegação anterior.</li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">3. Como Gerenciar Cookies</h2>
                    <p className="mb-4">
                        <strong>3.1.</strong> O usuário pode configurar seu navegador para recusar ou excluir
                        cookies. No entanto, isso pode afetar algumas funcionalidades do site.
                    </p>
                    <p className="mb-4">
                        <strong>3.2.</strong> As instruções para gerenciar cookies variam de acordo com o
                        navegador. Consulte a seção de ajuda do seu navegador para obter informações detalhadas.
                    </p>

                    {/* Section 4 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">4. Cookies de Terceiros</h2>
                    <p className="mb-4">
                        <strong>4.1.</strong> Utilizamos serviços de terceiros que podem instalar cookies no
                        dispositivo do usuário, como serviços de análise de tráfego e redes sociais.
                    </p>
                    <p className="mb-4">
                        <strong>4.2.</strong> Esses cookies são regidos pelas políticas de privacidade das
                        respectivas empresas terceirizadas.
                    </p>

                    {/* Section 5 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">5. Alterações na Política de Cookies</h2>
                    <p className="mb-4">
                        Podemos atualizar esta Política de Cookies periodicamente. Recomendamos que o usuário
                        consulte esta página regularmente para manter-se informado sobre eventuais mudanças.
                    </p>

                    {/* Section 6 */}
                    <h2 className="text-lg font-semibold mt-6 mb-2">6. Contato</h2>
                    <p className="mb-4">Em caso de dúvidas sobre esta Política de Cookies, entre em contato conosco:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            E-mail: <a href="mailto:suporte@vocemaisengajado.com.br" className="text-blue-600 underline">suporte@vocemaisengajado.com.br</a>
                        </li>
                        <li> WhatsApp: <a href="https://wa.me/5591989905821" className="text-blue-600 underline">
                            91 98990-5821
                        </a></li>
                        <li>Endereço: Passagem São Pedro, 100 – Ananindeua, Pará, Brasil – CEP 67.145-050.</li>

                    </ul>
                    <p className="text-sm text-gray-500 mt-8">
                        Data da última atualização: 20/01/2025.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicySec;
