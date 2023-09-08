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
        name: "Seguridad de Red",
        description:
        "Implementamos robustas medidas de seguridad para proteger tu red de amenazas externas e internas, garantizando la integridad y confidencialidad de tus datos en todo momento.",
        icon: LockClosedIcon,
    },
    {
        name: "Rendimiento y Escalabilidad",
        description:
        "Diseñamos arquitecturas de red que no solo cumplen con tus requisitos actuales, sino que también son capaces de adaptarse y crecer con tu empresa, garantizando un rendimiento óptimo en todo momento.",
        icon: ArrowUpRightIcon,
    },
    {
        name: "Gestión y Monitoreo Continuo",
        description:
        "Ofrecemos soluciones de gestión de red que permiten un monitoreo continuo del estado y rendimiento de tu red, facilitando la identificación y resolución rápida de cualquier problema que pueda surgir.",
        icon: EyeIcon,
    },
    {
        name: "Soporte Técnico Especializado",
        description:
        "Nuestro equipo de expertos está siempre a disposición para brindarte el soporte técnico que necesitas, ayudándote a resolver cualquier problema de red de manera rápida y eficiente, minimizando así cualquier tiempo de inactividad.",
        icon: WrenchScrewdriverIcon,
    },
];

export default function ArquitecturaRedes() {
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
                  Diseño e implementación de Arquitectura de Redes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                    En el mundo actual, la robustez de una organización puede
                    medirse a través de la eficacia de su red. Nuestro servicio
                    especializado en diseño e implementación de arquitectura de
                    redes garantiza una estructura de red resiliente y optimizada.
                    Con una planificación meticulosa y ejecución experta, nos
                    aseguramos de que su red no solo atienda las demandas
                    actuales, sino que esté preparada para escalar según las
                    futuras necesidades empresariales.
                </p>
              </div>
            </div>
            <img
              src="/image/Redes/2.jpg"
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
              ¿Qué hace una Consultora de Diseño e Implementación de
              Arquitectura de Redes?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Una consultora especializada en diseño e implementación de
              arquitectura de redes asiste a las organizaciones en la creación y
              optimización de sus infraestructuras de red. Desde la fase inicial
              de análisis de requisitos, ayuda a entender y traducir las
              necesidades comerciales en soluciones técnicas viables.
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
              Servicios de Consultoría en Arquitectura de Redes
            </h2>
            <p className="mb-4">
                En una era donde la conectividad y la infraestructura de redes son
                la columna vertebral de cualquier empresa exitosa, nuestra
                consultoría se posiciona a la vanguardia, asistiendo a las
                organizaciones a navegar con éxito por el complejo panorama de las
                tecnologías de red modernas. Con una combinación única de
                conocimientos técnicos y visión estratégica, estamos listos para
                ayudarte a diseñar e implementar soluciones de red que pueden
                llevar tu negocio al próximo nivel.
            </p>
            <p>
                Nos distinguimos por ser lo suficientemente ágiles para ofrecer
                soluciones simples y rápidas, sin sacrificar la profundidad
                estratégica y la innovación técnica que tu organización necesita
                para sobresalir en el competitivo mundo de hoy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <img
                className="w-full h-96 rounded-lg bg-cover object-cover"
                src="/image/Redes/2.jpg"
                alt="office content 1"
            />
            <img
                className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover"
                src="/image/Redes/3.jpg"
                alt="office content 2"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
