"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Primer empleo real",
    description:
      "Oportunidades diseñadas para jóvenes, estudiantes y recién egresados.",
  },
  {
    icon: BadgeCheck,
    title: "Empresas verificadas",
    description:
      "Vacantes transparentes y empresas confiables para postular con seguridad.",
  },
  {
    icon: Building2,
    title: "Inclusión laboral real",
    description:
      "Conectamos talento joven con empresas que creen en el potencial.",
  },
];

export default function InclusionSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Ambient background */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-[140px]" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600 shadow-sm">
              Inclusión laboral real
            </div>

            <h2 className="max-w-[620px] text-4xl font-bold tracking-[-1.5px] text-slate-950 md:text-5xl">
              Empresas que apuestan por
              <span className="block text-blue-600">
                el talento joven
              </span>
            </h2>

            <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-600">
              En Mi Primer Empleo creemos que el talento
              no debería depender de años de experiencia.
              Creamos oportunidades para estudiantes,
              recién egresados y jóvenes profesionales.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-slate-600 leading-7">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-blue-200/20 via-blue-100/10 to-blue-500/10 blur-3xl" />

            {/* Image container */}
            <div className="relative overflow-hidden rounded-[42px] border border-white/60 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/graduados.jpg"
                alt="Graduados celebrando"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />

              {/* Fade integration */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-8 top-10 hidden rounded-[28px] border border-slate-100 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />

                <div>
                  <p className="font-semibold text-slate-900">
                    + Jóvenes contratados
                  </p>

                  <span className="text-sm text-slate-500">
                    Oportunidades reales
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}