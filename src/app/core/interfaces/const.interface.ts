// import {selection} from "../shared/contact/contact.component";

export interface AnimationConfig {
  xEnd?: number,
  yEnd?: number,
  xStart?: number,
  yStart?: number,
  scrub?: number,
  object: string,
  ease?: string,
  start: string,
  end: string,
  trigger?: string,
}

export interface ProjectData {
  id: string,
  name: string,
  desc: string[],
  date: string,
  url: string,
  imgUrl: string,
  logoUrl: string,
  techs: string[],
  features: string[],
  completed: boolean,
  transition: string
}

export const partnersListEN: ProjectData[] = [
  {
    id: "glamBeautySalon",
    completed: true,
    date: "Nov 2023",
    desc: [
      "We are proud to present our latest project, a comprehensive solution for the world of Nail-Art. From the creation of a captivating landing page that invites you to explore the universe of beauty in your hands, to the development of a robust web-app to manage inventories and manage logistics efficiently.",
      "With careful integration of easy-to-use e-commerce, we have facilitated the shopping experience for both professionals and the general public, offering a wide range of products from leading brands and exceptional beauty services.",
      "This project has not only been a technical challenge, but also an opportunity to merge creativity with functionality, creating a digital experience that reflects the beauty and elegance of the world of Nail-Art. We are excited to have collaborated on this project and eager to bring this same passion and excellence to future companies seeking to stand out in the digital world."
    ],
    imgUrl: "mockup_glam.webp",
    logoUrl: "",
    name: "Glam Beauty Salon",
    techs: ["Angular", "Firebase", "Github", "Docker", "NestJs", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Inventory", "Appointment schedule", "Payment integration"],
    url: "",
    transition: "transition_Glam"
  },
  {
    id: "MasConciencia",
    completed: true,
    date: "Apr 2024",
    desc: [
      "At our agency, we are proud to offer comprehensive solutions to transform our clients' online presence. Recently, we developed a powerful landing page for Mas Conciencia, a startup dedicated to improving the financial and spiritual health of its clients.",
      "In addition to designing an attractive and functional website, we implement advanced tools such as an appointment scheduling system and an automated email sending system.",
      "This project not only improved Mas Conciencia's online visibility, but also optimized their internal processes, allowing them to efficiently manage their appointments and communicate effectively with their audience. If you are looking for a complete and effective solution for your online business, we can help you achieve your goals!",
    ],
    imgUrl: "mockup_conciencia.webp",
    logoUrl: "",
    name: "Más Conciencia",
    techs: ["Angular", "Firebase", "Github", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Multilanguage", "Appointment schedule", "Redirect QR Code"],
    url: "",
    transition: "transition_awareness"
  },
  {
    id: "Nox46",
    completed: true,
    date: "Agu 2023",
    desc: [
      "We developed a comprehensive event planning platform designed to make organizing social events easier, more efficient, and more exciting than ever. Our solution combines a captivating landing page, an intuitive web-app for event management and customizable software as a service (SaaS) that offers a complete experience from initial inspiration to event execution.",
      "We created an impressive landing page that captivates visitors from the first moment. With a modern design, captivating images and a clear and persuasive message.",
      "Our event management web-app is the perfect tool to plan, organize and execute events efficiently. With features like guest management, event agenda, task tracking, and vendor management, our web-app facilitates every aspect of the planning process, allowing our users to focus on what really matters: creating unforgettable experiences for them and their guests.",
    ],
    imgUrl: "mockup_nox.webp",
    logoUrl: "",
    name: "Nox46",
    techs: ["Angular", "Firebase", "Github", "Docker", "NestJs", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Multilanguage", "Appointment schedule", "Custom Web Updates at runtime", "Cloud multimedia", "Inventory", "Multi-account", "Web-app"],
    url: "",
    transition: "transition_nox"
  },
  {
    id: "heterGroup",
    completed: true,
    date: "Sep 2023",
    desc: [
      "We developed a landing page for Heter Group, a company specialized in industrial recruitment. We simplify the hiring process for both companies and personnel, offering an efficient and direct experience. With the latest version of Angular, we optimize speed and SEO using SSR, deploying the site to Firebase for improved accessibility.",
      "The collaboration with Heter Group allowed us to develop a landing page specifically designed to facilitate the recruitment process in the industrial sector. With a focus on simplicity and efficiency, we created a landing page that makes both companies and candidates feel comfortable and supported every step of the way.",
      "We implement an intuitive interface that allows you to learn about and hire Heter Group services quickly and without complications. Smooth navigation and clear options ensure they can access the services they need with ease. Additionally, we created a minimalist digital business card for candidates, offering a quick and complete overview of their profile and relevant social media links. Our choice of Angular allowed us to build a robust and flexible platform that will adapt to future expansion needs.",
    ],
    imgUrl: "mockup_heter.webp",
    logoUrl: "",
    name: "Heter Group",
    techs: ["Angular", "Firebase", "Github", "Docker", "Google Cloud"],
    features: ["SEO Optimization", "Redirect QR Code"],
    url: "",
    transition: "transition_heter"
  },
]
export const partnersListES: ProjectData[] = [
  {
    id: "glamBeautySalon",
    completed: true,
    date: "Nov 2023",
    desc: [
      "Nos enorgullece presentar nuestro último proyecto, una solución integral para el mundo del Nail-Art. Desde la creación de una cautivadora landing page que invita a explorar el universo de la belleza en las manos, hasta el desarrollo de una robusta web-app para administrar inventarios y gestionar la logística de manera eficiente.",
      "Con una cuidadosa integración de un e-commerce fácil de usar, hemos facilitado la experiencia de compra tanto para profesionales como para el público en general, ofreciendo una amplia gama de productos de marcas líderes y servicios de belleza excepcionales.",
      "Este proyecto no solo ha sido un desafío técnico, sino también una oportunidad para fusionar la creatividad con la funcionalidad, creando una experiencia digital que refleje la belleza y la elegancia del mundo del Nail-Art. Estamos emocionados de haber colaborado en este proyecto y ansiosos por llevar esta misma pasión y excelencia a futuras empresas que busquen destacarse"
    ],
    imgUrl: "mockup_glam.webp",
    logoUrl: "",
    name: "Glam Beauty Salon",
    techs: ["Angular", "Firebase", "Github", "Docker", "NestJs", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Inventario", "Agenda de citas", "Integración de pagos"],
    url: "",
    transition: "transition_Glam"
  },
  {
    id: "MasConciencia",
    completed: true,
    date: "Abr 2024",
    desc: [
      "En nuestra agencia, nos enorgullece ofrecer soluciones integrales para transformar la presencia en línea de nuestros clientes. Recientemente, desarrollamos una potente landing page para Mas Conciencia, un emprendimiento dedicado a mejorar la salud financiera y espiritual de sus clientes.",
      "Además de diseñar una página web atractiva y funcional, implementamos herramientas avanzadas como un sistema de agenda de citas y un sistema de envío de correos electrónicos automatizados.",
      "Este proyecto no solo mejoró la visibilidad en línea de Mas Conciencia, sino que también optimizó sus procesos internos, permitiéndoles gestionar eficientemente sus citas y comunicarse de manera efectiva con su audiencia. Si buscas una solución completa y efectiva para tu negocio en línea, ¡nosotros podemos ayudarte a alcanzar tus objetivos!",
    ],
    imgUrl: "mockup_conciencia.webp",
    logoUrl: "",
    name: "Más Conciencia",
    techs: ["Angular", "Firebase", "Github", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Multilenguaje", "Agenda de citas", "Código QR de redireccionamiento"],
    url: "",
    transition: "transition_awareness"
  },
  {
    id: "Nox46",
    completed: true,
    date: "Agu 2023",
    desc: [
      "We developed a comprehensive event planning platform designed to make organizing social events easier, more efficient, and more exciting than ever. Our solution combines a captivating landing page, an intuitive web-app for event management and customizable software as a service (SaaS) that offers a complete experience from initial inspiration to event execution.",
      "We created an impressive landing page that captivates visitors from the first moment. With a modern design, captivating images and a clear and persuasive message.",
      "Our event management web-app is the perfect tool to plan, organize and execute events efficiently. With features like guest management, event agenda, task tracking, and vendor management, our web-app facilitates every aspect of the planning process, allowing our users to focus on what really matters: creating unforgettable experiences for them and their guests.",
    ],
    imgUrl: "mockup_nox.webp",
    logoUrl: "",
    name: "Nox46",
    techs: ["Angular", "Firebase", "Github", "Docker", "NestJs", "Figma", "Google Cloud"],
    features: ["Google Calendar", "Google Gmail", "Multilenguaje", "Agenda de citas", "Actualización de Web en tiempo de ejecución", "Cloud multimedia", "Inventario", "Multi-cuentas", "Web-app"],
    url: "",
    transition: "transition_nox"
  },
  {
    id: "heterGroup",
    completed: true,
    date: "Sep 2023",
    desc: [
      "Desarrollamos una landing page para Heter Group, empresa especializada en reclutamiento industrial. Simplificamos el proceso de contratación tanto para empresas como para personal, ofreciendo una experiencia eficiente y directa. Con la útlima versión de Angular, optimizamos la velocidad y SEO mediante SSR, desplegando el sitio en Firebase para una accesibilidad mejorada.",
      "La colaboración con Heter Group nos permitió desarrollar una landing page diseñada específicamente para facilitar el proceso de reclutamiento en el sector industrial. Con un enfoque en la simplicidad y la eficiencia, creamos una una landing page que hace que tanto las empresas como los candidatos se sientan cómodos y respaldados en cada paso del camino.",
      "Implementamos una interfaz intuitiva que les permite conocer y contratar los servicios de Heter Group de manera rápida y sin complicaciones. La navegación fluida y las opciones claras aseguran que puedan acceder a los servicios que necesitan con facilidad. Además, creamos una tarjeta de presentación digital minimalista para los candidatos, ofreciendo una visión rápida y completa de su perfil y enlaces relevantes a redes sociales. Nuestra elección de Angular, nos permitió construir una plataforma robusta y flexible que se adaptará a las necesidades futuras de expansión.",
    ],
    imgUrl: "mockup_heter.webp",
    logoUrl: "",
    name: "Heter Group",
    techs: ["Angular", "Firebase", "Github", "Docker", "Google Cloud"],
    features: ["Optimización SEO", "E-Card", "Código QR de redireccionamiento"],
    url: "",
    transition: "transition_heter"
  },
]

export interface selection {
  value: string,
  viewValue: string
}

export const servicesEN: selection[] = [
  {
    value: "Web development",
    viewValue: "Web development"
  },
  {
    value: "Web-Apps development",
    viewValue: "Web-Apps development"
  },
  {
    value: "E-commerce development",
    viewValue: "E-commerce development"
  },
  {
    value: "Consulting",
    viewValue: "Consulting"
  },
  {
    value: "UI/UX",
    viewValue: "UI/UX"
  },
  {
    value: "strategy",
    viewValue: "Product strategy"
  }
]
export const servicesES: selection[] = [
  {
    value: "Web site development",
    viewValue: "Desarrollo Web"
  },
  {
    value: "Web-Apps development",
    viewValue: "Desarrollo Web-Apps"
  },
  {
    value: "E-commerce development",
    viewValue: "Desarrollo E-commerce"
  },
  {
    value: "Consulting",
    viewValue: "Consultoría"
  },
  {
    value: "UI/UX",
    viewValue: "UI/UX"
  },
  {
    value: "strategy",
    viewValue: "Estrategia de producto"
  }
]

export interface iSearchables {
  title: string,
  desc: string,
  match: string,
  url: string
}

export const oPartner: ProjectData = {
  id: "",
  transition: "",
  features: [],
  date: "",
  techs: [],
  name: "",
  url: "",
  logoUrl: "",
  imgUrl: "",
  desc: [],
  completed: false
};
