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
        name: 'Personalización Estratégica',
        description:
            'Trabajamos estrechamente con cada cliente para entender sus metas únicas y diseñar soluciones de análisis de datos personalizadas.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Optimización de Toma de Decisiones',
        description:
            'Mediante el análisis predictivo y prescriptivo, ayudamos a las organizaciones a tomar decisiones informadas basadas en datos reales y actuales. ',
        icon: LightBulbIcon,
    },
    {
        name: 'Capacitación y Desarrollo de Competencias',
        description:
            'Ofrecemos programas de formación y desarrollo de habilidades en análisis de datos para equipos empresariales. ',
        icon: ArrowPathIcon,
    },
    {
        name: 'Seguridad y Cumplimiento de Datos',
        description:
            ' Nos comprometemos a mantener la integridad y seguridad de tus datos. Implementamos protocolos de seguridad robustos para asegurar que tus datos están protegidos en todo momento.',
        icon: LockClosedIcon,
    },
]

export default function Contacto() {
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
                            Consultoría Análisis de Datos.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                            La toma de decisiones informadas es el pilar de cualquier
                            empresa exitosa. Nuestros servicios de análisis de datos están
                            diseñados para convertir su mar de datos en información
                            valiosa y accionable. A través de técnicas avanzadas de
                            análisis y visualización de datos, le ayudamos a descifrar
                            patrones y tendencias que pueden impulsar estrategias
                            empresariales ganadoras. Deje que transformemos su data bruta
                            en un recurso empresarial valioso.
                        </p>
                        </div>
                    </div>
                    <img
                        src="/image/Analisis-datos/1.jpg"
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
                        ¿Qué hace una Consultora de Análisis de Datos?
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Una consultora de análisis de datos se especializa en ayudar a las organizaciones a extraer valor significativo de sus datos. Mediante el uso de técnicas estadísticas, algoritmos avanzados y herramientas modernas de análisis, transforman grandes volúmenes de datos en insights accionables.
                    </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            {feature.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
            </div>

            <section className="bg-white ">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Servicios de Consultoría Analítica</h2>
                        <p className="mb-4">En una era donde los datos son el activo más valioso, nuestra consultoría analítica se pone a la vanguardia, guiando a las empresas a navegar con éxito en el vasto océano de información disponible. Con una combinación única de experiencia técnica y estratégica, estamos listos para ayudarte a transformar datos crudos en insights estratégicos que pueden impulsar tu negocio hacia adelante.</p>
                        <p>Somos estrategas, diseñadores y desarrolladores. Innovadores y solucionadores de problemas. Lo suficientemente pequeño como para ser simple y rápido.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8 ">
                        <img className="w-full h-96 rounded-lg bg-cover object-cover" src="/image/Analisis-datos/2.jpg" alt="office content 1" />
                        <img className="mt-4 w-full h-96 lg:mt-10 rounded-lg bg-cover object-cover" src="/image/Analisis-datos/4.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
);
}
