import React from 'react';

const DisclaimerSec = () => {
    return (
        <div>
            <div className="py-28 md:px-28 px-10 bg-[#1a0625] text-white text-white">
                <div className="max-w-4xl mx-auto bg-[#0a0010] shadow-md rounded-lg p-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                        Termos de Responsabilidade
                    </h1>
                    <p className="text-white mb-4">
                        Estes Termos de Responsabilidade regulam o uso do site Você Mais Engajado e
                        estabelecem os limites de responsabilidade da plataforma em relação aos
                        serviços e conteúdos oferecidos. Ao acessar ou utilizar o site, o usuário
                        declara estar ciente e de acordo com os termos aqui descritos.
                    </p>
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">
                            1. Natureza dos Serviços Oferecidos
                        </h2>
                        <p className="text-white mb-2">
                            1.1. O Você Mais Engajado disponibiliza serviços digitais de impulsionamento
                            de redes sociais, como aumento de seguidores, curtidas e visualizações.
                        </p>
                        <p className="text-white">
                            1.2. Os resultados esperados com o uso dos serviços podem variar conforme
                            fatores externos, como interações reais do público e mudanças nos algoritmos
                            das redes sociais. Não garantimos resultados específicos.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">
                            2. Responsabilidade do Usuário
                        </h2>
                        <p className="text-white mb-2">
                            2.1. O usuário se compromete a utilizar a plataforma de forma lícita e
                            respeitar a legislação vigente, bem como as políticas das redes sociais.
                        </p>
                        <p className="text-white mb-2">
                            2.2. O usuário é o único responsável pelas informações fornecidas durante o
                            cadastro e pela segurança de suas credenciais de acesso.
                        </p>
                        <p className="text-white">
                            2.3. É vedada a utilização dos serviços para propósitos ilegais ou que
                            violem os termos de uso das plataformas de redes sociais.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">
                            3. Limitação de Responsabilidade da Plataforma
                        </h2>
                        <ul className="list-disc pl-5 text-white">
                            <li>
                                Bloqueios, suspensões ou penalizações impostas pelas redes sociais devido
                                ao uso indevido dos serviços;
                            </li>
                            <li>
                                Perdas financeiras ou de oportunidades decorrentes da expectativa de
                                resultados não alcançados;
                            </li>
                            <li>
                                Problemas técnicos que impeçam o acesso ao site temporariamente.
                            </li>
                        </ul>
                        <p className="text-white mt-2">
                            3.2. Apesar de nossos esforços para manter o site seguro e livre de erros,
                            não garantimos que ele esteja completamente livre de vulnerabilidades ou
                            falhas.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">4. Isenção de Garantias</h2>
                        <p className="text-white mb-2">
                            4.1. O site e os serviços são fornecidos "no estado em que se encontram",
                            sem qualquer garantia expressa ou implícita de comercialização, adequação a
                            um propósito específico ou não infração.
                        </p>
                        <p className="text-white">
                            4.2. Não garantimos que o uso dos serviços resultará em crescimento efetivo
                            de interações ou conversões nas redes sociais.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">5. Links Externos</h2>
                        <p className="text-white">
                            5.1. O site pode conter links para outros sites que não são operados pelo Você
                            Mais Engajado. Não nos responsabilizamos pelo conteúdo, políticas de
                            privacidade ou práticas de sites de terceiros.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold text-white mb-3">
                            6. Alterações nos Termos de Responsabilidade
                        </h2>
                        <p className="text-white">
                            6.1. O Você Mais Engajado reserva-se o direito de modificar estes termos a
                            qualquer momento. As alterações serão publicadas nesta página e entrarão em
                            vigor imediatamente após a publicação.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">7. Contato</h2>
                        <p className="text-white mb-2">
                            Em caso de dúvidas ou solicitações relacionadas a estes Termos de
                            Responsabilidade, entre em contato conosco pelos seguintes canais:
                        </p>
                        <ul className="list-disc pl-5 text-white">
                            <li>
                                E-mail: <a href="mailto:suporte@vocemaisengajado.com.br" className="text-blue-600 underline">suporte@vocemaisengajado.com.br</a>
                            </li>
                            <li> WhatsApp: <a href="https://wa.me/5591989905821" className="text-blue-600 underline">
                                91 98990-5821
                            </a></li>
                            <li>
                                Endereço: Passagem São Pedro, 100 – Ananindeua, Pará, Brasil – CEP
                                67.145-050.
                            </li>
                        </ul>
                        <p className="text-gray-500 mt-4">Data da última atualização: 20/01/2025</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default DisclaimerSec;
