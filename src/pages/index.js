import Link from 'next/link';
import { useState, useEffect } from "react";
import Slider from 'react-slick';
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Social from "@/components/Social";
import AOS from 'aos';
import 'aos/dist/aos.css';


const inter = Inter({ subsets: ["latin"] });

const Icons = [
  {
    image: "/svg/1.svg",
    text: "Expertos emergentes en diseño y desarrollo de sitios web"
  },
  {
    image: "/svg/2.svg",
    text: "Sitios web optimizados para destacar en los resultados de búsqueda de Google"
  },
  {
    image: "/svg/3.svg",
    text: "Diseños innovadores, cautivadores y con interactividad dinámica."
  },
  {
    image: "/svg/4.svg",
    text: "Diseño web responsivo para smartphones y tablets."
  },
  {
    image: "/svg/5.svg",
    text: "Formación para gestionar con eficacia el contenido de tu sitio web."
  },
  {
    image: "/svg/6.svg",
    text: "Establecemos alianzas duraderas con nuestros clientes."
  },
  {
    image: "/svg/7.svg",
    text: "Nuestros clientes consistentemente expresan su elevada satisfacción con nuestros servicios."
  },
  {
    image: "/svg/8.svg",
    text: "Nos enfocamos íntegramente en ofrecer la máxima calidad."
  },
  {
    image: "/svg/9.svg",
    text: "Equipo de profesionales experimentados y altamente capacitados."
  },
  {
    image: "/svg/10.svg",
    text: "Soporte técnico de excelencia y respuesta ágil."
  },
  {
    image: "/svg/11.svg",
    text: "Propuestas valiosas a precios competitivos."
  },
  {
    image: "/svg/12.svg",
    text: "Monitoreo y gestión continua de su sitio web."
  },
]

export default function Home() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const data = [
    { src: '/image/index/analisis-datos.jpg', alt: 'Analisis de Datos', link: '/Analisis-datos', title: 'Análisis de Datos' },
    { src: '/image/index/web.jpg', alt: 'Desarrollo Web', link: '/Desarrollo-web', title: 'Desarrollo Web' },
    { src: '/image/index/data-center.jpg', alt: 'Data Center', link: '/Data-center', title: 'Data Center' },
    { src: '/image/Redes/5.jpg', alt: 'Arquitectura de Redes', link: '/Arquitectura-redes', title: 'Arquitectura de Redes' },
    { src: '/image/index/software.jpg', alt: 'Desarrollo de Software', link: '/Desarrollo-software', title: 'Desarrollo de Software' }
  ];

  const settings = {
    autoplay: true,
    utoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ 
      {
        breakpoint: 780, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  

  return (
    <>
      <Header />

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
          data-aos="slide-up" data-aos-delay="800"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-start"  data-aos="zoom-in" data-aos-delay="200">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sobre Nosotros
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-justify">
              En AN, estamos en el emocionante viaje de la innovación y la
              excelencia en consultoría Informática. Somos una empresa joven y
              apasionada, dedicada a ofrecer soluciones de vanguardia en una
              amplia gama de servicios, incluyendo desarrollo web, desarrollo de
              software, análisis de datos, gestión de data centers e
              implementación de arquitectura de redes. Nuestro compromiso es
              impulsar tu negocio hacia el éxito digital, brindándote servicios
              que están a la vanguardia de la tecnología y adaptados a tus
              necesidades. Nos enorgullecemos de trabajar estrechamente con
              nuestros clientes para comprender sus metas y desafíos, y luego
              diseñar soluciones personalizadas que impulsen su crecimiento y
              eficiencia.
            </p>
          </div>
        </div>
      </div>

      {/*Seccion de Servicios */} 

      <div className="container px-6 py-10 mx-auto " >
        <h1 
          className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center pt-10 pb-10" 
          style={{ color: '#0E3147' }}
          data-aos="fade"
          >
          Servicios
        </h1>

        <Slider {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="w-full px-1 pt-10" data-aos="zoom-in" data-aos-delay="200"> 
            <div className="w-full h-80 bg-gray-300 rounded-lg dark:bg-gray-600">
              <Link href={item.link}>
                <img src={item.src} alt={item.alt} className="h-full w-full object-cover rounded-lg cursor-pointer"/>
              </Link>
            </div>
            <h1 className="text-2xl mt-4 text-center" style={{ color: '#0E3147' }}>{item.title}</h1>
            <p className="w-24 h-2 mt-4 "></p>
          </div>
        ))}
        </Slider>
      </div>

      <h2 className="pt-36 text-4xl font-bold tracking-tight text-black sm:text-6xl text-center" 
        style={{ color: '#0E3147' }}
        data-aos="fade">
        Motivos para confiar en nosotros
      </h2>

      {/*Seccion de iconos */}    
      <section className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 max-w-screen-xl mx-auto pt-10 sm:mx-auto' >
        {Icons.map((icon) => (
          <div key={icon.image} className="flex flex-col items-center justify-center sm:w-full md:w-[310px]" data-aos="zoom-in" data-aos-delay="200">
            <div className="flex flex-col items-center justify-center" style={{ width: '310px', height: '184.4px' }}>
              <div className="p-4" data-id="d38016c" data-element_type="widget" data-widget_type="icon-box.default">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-21 h-21 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={icon.image} alt='Imagen Descriptiva' className="object-cover rotate-on-hover"/> 
                  </div>
                  <div className="mt-2 text-center text-sm" style={{ color: '#0E3147' }}>
                    <p>{icon.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

     
      {/*Seccion de preguntas frecuentes */} 
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="max-w-xl mx-auto py-10 pt-36"
      >
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center pb-16 text-custon-blue" data-aos="fade">
          Preguntas frecuentes
        </h2>
        <h3 id="accordion-collapse-heading-1 ">
          <button
            type="button"
            onClick={() => toggleSection(1)}
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>¿Tienen experiencia en proyectos?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h3>
        <div
          id="accordion-collapse-body-1"
          className={openSection === 1 ? "" : "hidden"}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 ">
            <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">
              Sí, hemos trabajado con una variedad de clientes en diversos
              sectores, incluyendo desarrollo web, desarrollo de software,
              análisis de datos y más. Nuestra experiencia nos ha permitido
              abordar una amplia gama de desafíos y adaptar nuestras soluciones
              a las necesidades específicas de cada cliente. Estamos seguros de
              que podemos aplicar nuestro conocimiento y experiencia para
              cumplir con tus requisitos y objetivos de manera efectiva.
            </p>
          </div>
        </div>
        <h3 id="accordion-collapse-heading-2">
          <button
            type="button"
            onClick={() => toggleSection(2)}
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>¿Cuál es su enfoque de precios y tarifas?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h3>
        <div
          id="accordion-collapse-body-2"
          className={openSection === 2 ? "" : "hidden"}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200">
            <p className="mb-2 text-gray-500 text-justify">
              Nuestro enfoque de precios y tarifas se adapta a las necesidades
              de nuestros clientes. Utilizamos un enfoque personalizado en el
              que evaluamos la complejidad del proyecto, el alcance de trabajo
              requerido y otros factores relevantes para proporcionarte una
              cotización precisa y competitiva. Trabajamos en estrecha
              colaboración contigo para comprender tu presupuesto y garantizar
              que nuestras tarifas sean transparentes y justas. Además,
              ofrecemos diferentes opciones de estructuración de precios, como
              proyectos por hora o tarifas fijas, para satisfacer tus
              necesidades específicas.
            </p>
          </div>
        </div>

        <h3 id="accordion-collapse-heading-3">
          <button
            type="button"
            onClick={() => toggleSection(3)}
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>¿Cómo podemos poner en marcha un proyecto con ustedes?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h3>

        <div
          id="accordion-collapse-body-3"
          className={openSection === 3 ? "" : "hidden"}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200">
            <p className="mb-2 text-gray-500 text-justify">
              Iniciar un proyecto con nosotros es un proceso sencillo y
              eficiente. El primer paso es ponerse en contacto con nosotros a
              través de nuestro formulario de contacto o por correo electrónico,
              donde puedes proporcionarnos detalles sobre tu proyecto y tus
              objetivos. A partir de ahí, programaremos una consulta inicial
              gratuita en la que discutiremos tus necesidades en detalle y
              responderemos a cualquier pregunta que puedas tener. Después de la
              consulta inicial, desarrollaremos un plan de trabajo y una
              estrategia personalizada para tu proyecto, que incluirá un
              cronograma y una cotización detallada. Una vez que estés
              satisfecho con nuestra propuesta, firmaremos un contrato y
              comenzaremos a trabajar en tu proyecto de inmediato.
            </p>
          </div>
        </div>
      </div>

      <Social /> 
      <Footer />
    </>
  );
}
