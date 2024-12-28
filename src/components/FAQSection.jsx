import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Em quanto tempo começo a receber meus seguidores?",
      answer:
        "Seu pedido será processado instantaneamente, e você começará a ver os seguidores em sua conta em até no máximo 2 horas após a confirmação da assinatura.",
    },
    {
      question: "Corro o risco de ter meu perfil bloqueado?",
      answer:
        "Nossa abordagem segue rigorosamente as políticas das plataformas sociais, minimizando qualquer risco de bloqueio. Garantimos práticas seguras para preservar a integridade da sua conta.",
    },
    {
      question: "Posso mudar o @usuario do perfil durante a assinatura?",
      answer:
        "Não é recomendado alterar o @usuario durante o período de assinatura, pois isso pode afetar a entrega eficaz dos seguidores contratados. Recomendamos manter o @usuario constante durante o serviço.",
    },
    {
      question: "Por que escolher o Engajamaisvoce?",
      answer:
        "O engajamaisvoce oferece resultados confiáveis e seguros, com uma abordagem transparente e eficaz para impulsionar sua presença nas redes sociais.",
    },
    {
      question: "Quais informações eu preciso passar?",
      answer:
        "Para iniciar, precisaremos apenas das informações necessárias para processar seu pedido. Esses detalhes serão fornecidos durante o processo de assinatura.",
    },
    {
      question: "Preciso seguir alguém de volta?",
      answer:
        "Não é necessário seguir de volta. Nossos serviços garantem a entrega de seguidores independentemente de seguir outros perfis.",
    },
  ];

  return (
    <section className="bg- py-5" id="faq">
      <div className="container-fluid px-3 py-5 mx-auto">
        <h3 className="text-2xl fw-bold text-start text-white mb-4 ps-lg-3">
          Perguntas frequentes.
        </h3>
        <div className="row g-4 mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="col-md-6 col-xl-4">
              <div className="d-flex align-items-start">
                <div className="px-3 py-2 text-white bg-purple rounded mx-4" style={{background: '#8c26db'}}>
                 <i className="bi bi-question-circle fs-3"></i>
                </div>
                <div>
                  <h5 className="fw-bold text-white">{faq.question}</h5>
                  <p className="gray mt-2">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
