"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  GraduationCap,
  BriefcaseBusiness,
  Laptop,
  FileCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Empresas verificadas",
    description:
      "Publicaciones revisadas para reducir fraudes y aumentar la confianza.",
  },
  {
    icon: GraduationCap,
    title: "Primer empleo real",
    description:
      "Oportunidades pensadas para personas sin experiencia laboral.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Prácticas y pasantías",
    description:
      "Espacios para estudiantes, egresados y jóvenes profesionales.",
  },
  {
    icon: Laptop,
    title: "Trabajo remoto tech",
    description:
      "Oportunidades tecnológicas remotas con enfoque internacional.",
  },
  {
    icon: FileCheck,
    title: "Información transparente",
    description:
      "Detalles claros sobre modalidad, horarios y requisitos.",
  },
  {
    icon: Sparkles,
    title: "Talento joven",
    description:
      "Un espacio creado para quienes buscan una oportunidad real.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="container-custom">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Empresas que creen en el talento joven
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Tu primera oportunidad
            <span className="block text-blue-600">
              merece confianza real
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mi Primer Empleo está pensado para estudiantes,
            recién egresados y jóvenes profesionales que
            buscan comenzar su carrera con oportunidades reales.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_50px_rgba(37,99,235,0.12)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-600 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 font-medium text-blue-600 opacity-0 transition duration-300 group-hover:opacity-100">
                  Más información
                  <ChevronRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TRUST TAGS */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {[
            "Empresas verificadas",
            "Sin experiencia",
            "Prácticas y pasantías",
            "Información transparente",
            "Primer empleo",
            "Enfoque humano",
          ].map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700"
            >
              ✓ {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}