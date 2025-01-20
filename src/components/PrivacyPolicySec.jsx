import React from 'react';

const PrivacyPolicySec = () => {
    return (
        <div className="py-28 md:px-28 px-10 bg-[#1a0625] text-white text-gray-800">
            <div className="max-w-4xl mx-auto bg-[#0a0010] shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center text-white mb-6">
                    Política de Privacidade
                </h1>
                <p className="mb-4">
                    Bem-vindo ao site <strong>Você Mais Engajado</strong>! Esta Política de
                    Privacidade esclarece como tratamos e protegemos seus dados pessoais em
                    conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº
                    13.709/2018).
                </p>

                {/* Section 1 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">1. Coleta e Uso de Dados</h2>
                <p className="mb-2">
                    <strong>1.1.</strong> Dados fornecidos pelo usuário: coletamos informações
                    fornecidas voluntariamente ao realizar o cadastro ou ao entrar em contato
                    conosco, como nome, e-mail e número de telefone.
                </p>
                <p className="mb-2">
                    <strong>1.2.</strong> Dados de navegação: coletamos automaticamente
                    informações sobre a interação com o site, como páginas acessadas, tempo de
                    navegação e dispositivo utilizado.
                </p>
                <p className="mb-4">
                    <strong>1.3.</strong> Finalidade:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Oferecer suporte ao usuário;</li>
                    <li>Aprimorar nossos serviços e conteúdos;</li>
                    <li>Garantir a segurança da plataforma;</li>
                    <li>Enviar comunicações relacionadas aos serviços oferecidos.</li>
                </ul>

                {/* Section 2 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">2. Compartilhamento de Dados</h2>
                <p className="mb-2">
                    <strong>2.1.</strong> Os dados pessoais poderão ser compartilhados com:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Prestadores de serviços terceirizados que auxiliem na operação do site;</li>
                    <li>Autoridades competentes, em caso de exigência legal ou regulatória.</li>
                </ul>
                <p className="mb-4">
                    Garantimos que todo compartilhamento ocorre em conformidade com a LGPD e mediante a
                    adoção de medidas de segurança adequadas.
                </p>

                {/* Section 3 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">3. Armazenamento e Segurança</h2>
                <p className="mb-4">
                    <strong>3.1.</strong> Os dados são armazenados em servidores seguros, com acesso
                    restrito e controlado.
                </p>
                <p className="mb-4">
                    <strong>3.2.</strong> Adotamos medidas técnicas e administrativas adequadas para
                    proteger os dados pessoais contra acessos não autorizados, alterações, perda ou
                    destruição.
                </p>

                {/* Section 4 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">4. Direitos do Usuário</h2>
                <p className="mb-4">
                    O usuário pode exercer os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Solicitar informações sobre o tratamento de seus dados;</li>
                    <li>Corrigir ou atualizar dados pessoais incorretos ou desatualizados;</li>
                    <li>
                        Solicitar a exclusão de seus dados pessoais, observadas as obrigações legais de
                        armazenamento.
                    </li>
                </ul>
                <p className="mb-4">
                    Para exercer seus direitos, entre em contato conosco pelo e-mail{" "}
                    <a href="mailto:suporte@vocemaisengajado.com.br" className="text-blue-600 underline">
                        suporte@vocemaisengajado.com.br
                    </a>{" "}
                    ou pelo WhatsApp{" "}
                    <a href="https://wa.me/5591989905821" className="text-blue-600 underline">
                        91 98990-5821
                    </a>
                    .
                </p>

                {/* Section 5 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">5. Uso de Cookies</h2>
                <p className="mb-4">
                    Utilizamos cookies para melhorar a experiência do usuário, personalizar conteúdo e
                    analisar o tráfego no site.
                </p>
                <p className="mb-4">
                    O usuário pode configurar seu navegador para bloquear cookies, mas isso pode impactar
                    algumas funcionalidades do site.
                </p>

                {/* Section 6 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">
                    6. Alterações na Política de Privacidade
                </h2>
                <p className="mb-4">
                    Esta Política de Privacidade pode ser alterada a qualquer momento. Notificaremos os
                    usuários sobre mudanças relevantes por meio do site ou dos contatos fornecidos.
                </p>

                {/* Section 7 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">7. Disposições Gerais</h2>
                <p className="mb-4">
                    Esta Política de Privacidade é regida pela legislação brasileira. Em caso de dúvidas ou
                    solicitações relacionadas à privacidade, entre em contato pelo e-mail{" "}
                    <a href="mailto:suporte@vocemaisengajado.com.br" className="text-blue-600 underline">
                        suporte@vocemaisengajado.com.br
                    </a>{" "}
                    ou pelo WhatsApp{" "}
                    <a href="https://wa.me/5591989905821" className="text-blue-600 underline">
                        91 98990-5821
                    </a>
                    .
                </p>

                {/* Section 8 */}
                <h2 className="text-lg font-semibold mt-6 mb-2">8. Canal de Atendimento</h2>
                <p className="mb-4">
                    Endereço: Passagem São Pedro, 100 – Ananindeua, Pará, Brasil – CEP 67.145-050.
                </p>
                <p className="text-sm text-gray-500 mt-8">
                    Data da última atualização: 20/01/2025.
                </p>
            </div>
        </div>
    );
}

export default PrivacyPolicySec;
