import Image from "next/image";
import { useState } from "react";
import {
  LockClosedIcon,
  ArrowPathIcon,
  LightBulbIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Adaptabilidad Multiplataforma",
    description:
      "Nos aseguramos de que tu sitio web ofrezca una experiencia de usuario óptima en una amplia variedad de dispositivos, desde computadoras de escritorio hasta smartphones, asegurando así una mayor alcance y engagement.",
    icon: AcademicCapIcon,
  },
  {
    name: "SEO y Marketing Digital Integrado",
    description:
      "Aprovechamos las mejores prácticas de SEO y estrategias de marketing digital para aumentar la visibilidad de tu sitio web, atrayendo así a un público más amplio y fomentando el crecimiento de tu negocio.",
    icon: LightBulbIcon,
  },
  {
    name: "Soporte Técnico y Mantenimiento Continuo",
    description:
      "Ofrecemos soporte técnico continuo y mantenimiento web para garantizar que tu sitio web funcione de manera eficiente en todo momento, ajustándonos a las últimas tendencias y actualizaciones tecnológicas.",
    icon: ArrowPathIcon,
  },
  {
    name: "Formaciones y Workshops",
    description:
      " Proporcionamos formaciones y talleres personalizados para que tu equipo esté bien equipado con las habilidades y el conocimiento necesario para manejar y actualizar el sitio web por sí mismos, promoviendo así la autosuficiencia y la innovación continua.",
    icon: LockClosedIcon,
  },
];

export default function DesarrolloWeb() {
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
                  Desarrollo Web.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                  En esta era digital, su sitio web es su tarjeta de visita, la
                  primera impresión que dejas en tus clientes potenciales.
                  Nuestros servicios de desarrollo web están dedicados a crear
                  experiencias online memorables, combinando diseño estético con
                  funcionalidad sin fisuras. Ya sea un sitio web corporativo
                  informativo o una plataforma de comercio electrónico dinámica,
                  creamos soluciones que no solo lucen bien, sino que también
                  funcionan a la perfección, asegurando que sus visitantes
                  vuelvan por más. Además, destacamos por:
                </p>
              </div>
            </div>
            <img
              src="/image/Desarrollo-web/1.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
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
                ¿Qué hace una Consultora de Desarrollo Web?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Una consultora de desarrollo web asiste a empresas y
                organizaciones en la creación y optimización de sitios web y
                aplicaciones online. Se encargan de conceptualizar, diseñar e
                implementar soluciones web que se alinean con los objetivos y la
                identidad de la marca de un cliente.
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
                    Nuestros Servicios
                </h2>
                <p className="mb-4"></p>
                <ul>
                    <li>
                        Diseño Web Personalizado
                        <ul>
                            <li className="mx-5">Creación de Prototipos y Diseño de Interfaces de Usuario</li>
                            <li className="mx-5">SExperiencia del Usuario (UX) Optimizada</li>
                        </ul>
                    </li>
                    <li>
                        Desarrollo Frontend
                        <ul>
                        <li className="mx-5">HTML5, CSS3 y JavaScript</li>
                        <li className="mx-5">Frameworks Modernos (React, Next.js, Vue.js)</li>
                        </ul>
                    </li>
                    <li>
                        Desarrollo Backend
                        <ul>
                        <li className="mx-5">Soluciones de Backend Escalables</li>
                        <li className="mx-5">Integración con Bases de Datos</li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 ">
                <img
                className="w-full h-96 rounded-lg bg-cover object-cover"
                src="/image/Desarrollo-web/2.jpg"
                alt="office content 1"
                />
                <img
                className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
                src="/image/Desarrollo-web/3.jpg"
                alt="office content 2"
                />
            </div>
            </div>
        </section>
        <Footer />
    </>
    );
}
