import Link from 'next/link';
import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-start">
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

      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center">
          Servicios
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 ">
          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse">
              <Link href="/Analisis-datos">
                <img
                  src="/image/index/analisis-datos.jpg"
                  className="h-full w-full object-cover rounded-lg"
                />
              </Link>
            </div>

            <h1 className="text-2xl w-full h-2 mt-4 text-center">
              {" "}
              Análisis de Datos
            </h1>
            <p className="w-24 h-2 mt-4 "></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse">
              <Link href="/Desarrollo-web">
                <img
                  src="/image/index/web.jpg"
                  className="h-full w-full object-cover rounded-lg"
                />
              </Link>
            </div>
            <h1 className="text-2xl w-full h-2 mt-4 text-center">
              Desarrollo Web
            </h1>
            <p className="w-24 h-2 mt-4 "></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse">
              <Link href="Data-center">
                <img
                  src="/image/index/data-center.jpg"
                  className="h-full w-full object-cover rounded-lg"
                />
              </Link>
            </div>

            <h1 className="text-2xl w-full h-2 mt-4 text-center">
              Data Center
            </h1>
            <p className="w-24 h-2 mt-4 "></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse">
              <Link href="/Arquitectura-redes">
                <img
                  src="/image/Redes/5.jpg"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ objectPosition: "top" }}
                />
              </Link>
            </div>

            <h1 className="text-2xl w-full h-2 mt-4 text-center">
              Arquitectura de Redes
            </h1>
            <p className="w-24 h-2 mt-4"></p>
          </div>

          <div className="w-full ">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse ">
              <Link href="Desarrollo-software">
                <img
                  src="/image/index/software.jpg"
                  className="h-full w-full object-cover rounded-lg"
                />
              </Link>
            </div>

            <h1 className="text-2xl w-full h-2 mt-4 text-center">
              Desarrollo de Software
            </h1>
            <p className="w-24 h-2 mt-4 "></p>
          </div>
        </div>
      </div>

      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="max-w-xl mx-auto py-10 "
      >
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl text-center py-6">
          Preguntas frecuentes
        </h1>
        <h2 id="accordion-collapse-heading-1">
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
        </h2>
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
        <h2 id="accordion-collapse-heading-2">
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
        </h2>
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
        <h2 id="accordion-collapse-heading-3">
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
        </h2>
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

      <Footer />
    </>
  );
}
