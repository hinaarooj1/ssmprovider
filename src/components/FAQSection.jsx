import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Adquirir mais seguidores realmente ajuda a crescer nas redes sociais?",
      answer:
        "Sim! Mais seguidores aumenta rapidamente a visibilidade do seu perfil, criando uma imagem de popularidade e atratividade. Isso pode estimular novos seguidores orgânicos, que se sentirão mais inclinados a seguir uma conta já bem-estabelecida.",
    },
    {
      question: "Os seguidores são reais?",
      answer:
        "Sim, trabalhamos com serviços que oferecem seguidores reais e ativos, garantindo maior credibilidade para o seu perfil e melhorando sua presença digital.",
    },
    {
      question: "Preciso fornecer minha senha?",
      answer:
        "Não! O processo é 100% seguro e não exige a sua senha. Basta informar o nome de usuário ou o link do perfil, e nós cuidamos do resto.",
    },
    {
      question: "Quanto tempo leva para receber os seguidores?",
      answer:
        "A entrega dos seguidores é rápida e eciente, geralmente começando em até 10 minutos a 2 horas após a conrmação do pagamento e sendo concluída dentro do prazo informado no momento da compra.",
    },
    // 
    {
      question: "Comprar seguidores melhora a credibilidade do meu perfil?",
      answer: "Com certeza Sim! Um perfil com muitos seguidores gera uma percepção imediata de autoridade e relevância, atraindo novas parcerias e oportunidades."
    },
    {
      question: "O que acontece se eu perder alguns seguidores?",
      answer: "Trabalhamos com garantia de reposição, então se houver qualquer queda significativa no número de seguidores, reabastecemos sua conta sem custo adicional."
    },
    {
      question: "É possível ter curtidas e visualizações também?",
      answer: "Sim! Além de seguidores, oferecemos pacotes de curtidas e visualizações para impulsionar ainda mais o engajamento das suas postagens, aumentando o alcance do seu conteúdo."
    },
    {
      question: "Mais seguidores é um bom investimento?",
      answer: "Sem dúvida! Mais seguidores é uma maneira eficaz de acelerar seu crescimento nas redes sociais, poupando tempo e esforço na fase inicial, quando é mais difícil ganhar tração. Esse impulso inicial pode abrir portas para parcerias, vendas e maior reconhecimento."
    },
    {
      question: "Mais seguidores afeta o alcance do meu perfil?",
      answer: "Sim, de forma positiva! Com mais seguidores, suas postagens podem alcançar um público maior, já que o algoritmo das redes sociais tende a favorecer perfis com maior popularidade."
    },
    {
      question: "Como posso acompanhar o progresso da entrega?",
      answer: "Você receberá atualizações por e-mail durante o processo de entrega, garantindo total transparência e tranquilidade."
    },
    {
      question: "Em quanto tempo começo a receber?",
      answer: "Seu pedido será processado instantaneamente, e você receberá os seguidores em sua conta em até 10 minutos e no máximo 2 horas após a confirmação da assinatura."
    },
    {
      question: "Corro o risco de perder meu perfil?",
      answer: "Não! Nossa abordagem segue rigorosamente as políticas das plataformas sociais, minimizando qualquer risco de bloqueio. Garantimos práticas seguras para preservar a integridade de sua conta, por isso todos os perfis são reais e ativos."
    },
    {
      question: "Posso mudar o @usuario do perfil durante a assinatura?",
      answer: "Não é recomendado alterar o @usuario durante o período de assinatura, pois isso pode afetar a entrega eficaz dos seguidores contratados. Recomendamos manter o @usuario constante durante o serviço."
    },
    {
      question: "Por que escolher o www.vocemaisengajado.com.br?",
      answer: "O (Você mais Engajado) oferece resultados confiáveis e seguros, com uma abordagem transparente e eficaz para transmissão de sua presença nas redes sociais."
    },
    {
      question: "Quais informações eu preciso passar?",
      answer: "Para iniciar, precisaremos apenas das informações necessárias para processar seu pedido. Esses detalhes serão fornecidos durante o processo de compra."
    },
    {
      question: "Preciso seguir alguém de volta?",
      answer: "Não é necessário seguir de volta. Nossos serviços garantem a entrega de seguidores independentemente de seguir outros perfis."
    },
    {
      question: "De onde vêm os seguidores?",
      answer: "Os seguidores são reais e fazem parte de uma rede de usuários que recebem incentivos para seguir e interagir com os perfis, garantindo engajamento genuíno e seguro."
    }
  ];

  return (
    <section className="bg-transparent pt-10" id="faq">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold lg:text-3xl text-white">
          Perguntas frequentes.
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">

          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="inline-block p-3 text-white bg-[#8c26db] rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                  </path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">
                  {faq.question}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  {faq.answer}

                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default FAQSection;
