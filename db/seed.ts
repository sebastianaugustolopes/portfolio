import { db } from "./index";
import { projects, certificates, personalInfo, type NewPersonalInfo, type NewProject, type NewCertificate } from "./schema";

async function seed() {
  console.log("🌱 Starting seed...");

  // Clear existing data
  await db.delete(personalInfo);
  await db.delete(certificates);
  await db.delete(projects);

  // Seed Personal Info
  await db.insert(personalInfo).values({
    name: "Sebastian Augusto",
    age: 19,
    phone: "+55 31 987962420",
    email: "sebastianaugustolopescamargo@gmail.com",
    location: "Belo Horizonte, Brasil",
    profilePhoto: "https://github.com/sebastianaugustolopes/portfolio_data/blob/main/public/profile_photo.jpg?raw=true",
    socialLinks: {
      github: "https://github.com/sebastianaugustolopes",
      linkedin: "https://www.linkedin.com/in/sebastianaugusto/",
      instagram: "https://instagram.com/_ssebastianaugusto",
    },
  } as NewPersonalInfo).returning();

  console.log("✅ Personal info seeded");

  // Seed Projects
  const projectsData = [
    {
      title: "Beweare E-commerce Web",
      description: "O **Bewear Ecommerce** é uma plataforma de comércio eletrônico voltada para oferecer uma experiência de compra e venda moderna, segura e intuitiva. O sistema prioriza desempenho, organização das informações e clareza no fluxo de navegação, alinhando-se a boas práticas de UX/UI para simular de forma realista o funcionamento de uma loja virtual completa. A aplicação foi estruturada com foco em escalabilidade, permitindo a inclusão de novos produtos, atualização de conteúdos e ajustes visuais de forma consistente e segura. O projeto abrange desde a camada de apresentação até a lógica de negócios, incluindo autenticação de usuários, persistência de sessão e medidas de proteção de dados, refletindo cenários reais do mercado de comércio digital.",
      techStack: ["Nodejs", "Nextjs", "Reactjs", "Tailwindcss", "Shadcn", "Drizzle", "PostgreSQL", "Stripe", "BetterAuth", "Lucide"],
      keyFeatures: [
        "Carrinho de compras persistente",
        "Sistema de checkout completo",
        "Autenticação de usuários",
        "Gestão de produtos e categorias",
        "Busca e filtros avançados",
        "Paginação de produtos",
        "Integração com gateway de pagamento"
      ],
      demoUrl: "https://bewear-ecommerce.vercel.app/",
      repoUrl: "https://github.com/sebastianaugustolopes/bewear-ecommerce",
      image: "https://i.pinimg.com/736x/5a/f2/09/5af209987767730d3ab2d2c29e8f1777.jpg",
      projectDate: "2025-12",
      concept: "Criar uma plataforma de e-commerce completa e moderna que oferecesse uma experiência de compra fluida e segura, simulando um cenário real de loja virtual.",
      challenge: "Implementar um sistema de pagamento integrado com Stripe, gerenciar sessões de usuário de forma segura com BetterAuth, e garantir performance mesmo com grande volume de produtos.",
      impact: "Demonstrou capacidade de desenvolver aplicações full-stack complexas com integrações reais de pagamento, autenticação robusta e arquitetura escalável.",
    },
    {
      title: "Classroom Agents Api",
      description: "O Classroom Agent é um sistema dividido em dois módulos complementares: a API (backend) e a interface web (frontend). Essa separação permite tratar o projeto como duas camadas independentes, mantendo organização do código, facilidade de manutenção e possibilidade de escalar cada parte conforme a necessidade. A API do Classroom Agent foi desenvolvida com Node.js e utiliza o Drizzle ORM para modelagem e persistência de dados. Ela é responsável por gerenciar salas, perguntas e interações baseadas em áudio. O sistema permite que o usuário grave áudios, que são processados e utilizados para gerar respostas automáticas por meio de integração com um modelo de inteligência artificial. A API segue o padrão REST, com endpoints organizados para cadastro de salas, registro de perguntas e retorno de respostas.",
      techStack: ["Nodejs", "TypeScript", "Drizzle", "Zod", "Express", "Railway", "GeminiAI"],
      keyFeatures: [
        "Gerenciamento de salas",
        "Organização e controle de perguntas",
        "Geração e registro de respostas",
        "Integração com modelo de IA",
        "Envio e processamento de áudios",
        "Sistema de autenticação de salas"
      ],
      demoUrl: "https://classroom-agents-web-production-f754.up.railway.app/",
      repoUrl: "https://github.com/sebastianaugustolopes/bewear-ecommerce",
      image: "https://i.pinimg.com/736x/d2/a1/fe/d2a1fe6a8cf80c87c2182bcb0b56bad2.jpg",
      projectDate: "2025-12",
      concept: "Desenvolver uma API inteligente para gerenciamento de salas de aula com integração de IA para processamento de áudio e geração automática de respostas.",
      challenge: "Integrar processamento de áudio com o modelo Gemini AI, garantindo respostas precisas e em tempo real, além de manter a estrutura REST organizada e escalável.",
      impact: "Demonstrou habilidade em integrar inteligência artificial em aplicações reais, criando soluções inovadoras para o ambiente educacional.",
    },
  ];

  await db.insert(projects).values(projectsData as NewProject[]);

  console.log("✅ Projects seeded");

  // Seed Certificates
  const certificatesData = [
    {
      name: "Full Stack Java Professional",
      institution: "EBAC",
      date: "2026-03-07",
      image: "https://github.com/sebastianaugustolopes/portfolio_data/blob/main/public/certificado_1.png?raw=true",
    },
    {
      name: "Tecnologia da informação e comunicação",
      institution: "SENAI",
      date: "2023-09-11",
      image: "https://github.com/sebastianaugustolopes/portfolio_data/blob/main/public/certificado_2.png?raw=true"
    },
  ];

  await db.insert(certificates).values(certificatesData as NewCertificate[]);

  console.log("✅ Certificates seeded");
  console.log("🎉 Seed completed successfully!");
}

seed()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });

