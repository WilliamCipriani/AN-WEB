import Image from "next/image";
import { useState } from "react";
import {
  LockClosedIcon,
  WrenchScrewdriverIcon,
  ArrowUpRightIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Resiliencia y Continuidad de Negocio",
    description:
      "Diseñamos infraestructuras que garantizan una operatividad continua, minimizando las interrupciones y permitiendo una recuperación rápida en caso de fallos o desastres.",
    icon: LockClosedIcon,
  },
  {
    name: "Eficiencia Energética",
    description:
      "Priorizamos soluciones que no solo sean poderosas y fiables, sino también eficientes en términos de consumo energético, ayudando a reducir costos y promoviendo la sostenibilidad ambiental.",
    icon: ArrowUpRightIcon,
  },
  {
    name: "Seguridad de la Información",
    description:
      " Implementamos robustos protocolos de seguridad para proteger la integridad y confidencialidad de tus datos, resguardando tu empresa contra accesos no autorizados y otras amenazas cibernéticas.",
    icon: EyeIcon,
  },
  {
    name: "Personalización y Escalabilidad",
    description:
      "Ofrecemos estrategias de personalización, permitiendo que el centro de datos se ajuste perfectamente a las necesidades específicas de tu negocio, y proporcionando opciones escalables que se pueden expandir a medida que crece tu empresa.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function DataCenter() {
  return (
    <>
      <Header />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Servicios tecnológicos
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Consultoría e implementación de Data Center
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  Un data center bien configurado puede ser la diferencia entre
                  una operación empresarial fluida y una llena de obstáculos y
                  retrasos. Nuestro servicio de consultoría e implementación de
                  data center está aquí para asegurar que su negocio cuente con
                  una infraestructura de TI robusta y eficiente. Desde la
                  planificación hasta la implementación, nos ocupamos de cada
                  detalle, asegurando que su data center no solo atienda las
                  necesidades actuales, sino que esté preparado para el
                  crecimiento futuro. Con nosotros, su data center será un
                  núcleo de innovación y excelencia operativa.
                </p>
              </div>
            </div>
            <img
              src="/image/Data-center/2.jpg"
              alt="Product screenshot"
              className="w-[41rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Qué hace una Consultora e Implementación de Data Center?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Una consultora e implementación de Data Center asiste a las
              empresas en la planificación, diseño y establecimiento de centros
              de datos eficientes y seguros. Su labor comienza con un análisis
              profundo de las necesidades de la organización, seguido por la
              selección de tecnologías y equipamientos idóneos que facilitarán
              la gestión óptima de los datos.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Servicios de Consultoría de Data Center
            </h2>
            <p className="mb-4">
                En una era donde la infraestructura tecnológica actúa como la
                columna vertebral de las empresas modernas, nuestra consultoría se
                especializa en brindar soluciones líderes en el sector de Data
                Centers. Navegamos a través del vasto océano de desafíos
                tecnológicos, guiando a las organizaciones hacia la creación y
                optimización de centros de datos altamente eficientes y seguros.
                Con una combinación única de experiencia técnica y visión
                estratégica, estamos preparados para transformar tus necesidades
                iniciales en infraestructuras sólidas que pueden impulsar tu
                negocio hacia adelante.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
              className="w-full h-96 rounded-lg bg-cover object-cover"
              src="/image/Data-center/1.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
              src="/image/Data-center/4.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
