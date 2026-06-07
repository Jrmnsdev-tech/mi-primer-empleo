"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Laptop,
  BadgeCheck,
  Building2,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071133] via-[#102B73] to-[#2563EB]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="overflow-hidden rounded-[48px] border border-white/10 bg-white/10 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-2xl lg:p-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="mb-7 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-blue-100 backdrop-blur-xl">
                Tu futuro profesional comienza aquí
              </div>

              <h2 className="max-w-[620px] text-5xl font-extrabold leading-[0.96] tracking-[-2px] text-white md:text-6xl">
                Tu primera oportunidad

                <span className="block text-blue-200">
                  puede comenzar hoy
                </span>
              </h2>

              <p className="mt-7 max-w-[560px] text-lg leading-8 text-blue-100/90">
                Encuentra oportunidades
                laborales reales,
                prácticas, trabajos
                remotos y empresas que
                creen en el talento joven.
              </p>

              {/* TRUST */}
              <div className="mt-6 rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                <p className="font-semibold text-white">
                  🛡 Plataforma segura y transparente
                </p>

                <p className="mt-2 text-sm leading-7 text-blue-100/80">
                  Nunca cobramos por
                  postular y revisamos
                  empresas para ayudarte
                  a evitar estafas.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/register">
                  <button className="group flex min-h-[62px] items-center gap-2 rounded-[22px] bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(255,255,255,0.20)]">
                    Crear cuenta gratis

                    <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>

                <Link href="/empresa">
                  <button className="group flex min-h-[62px] items-center gap-2 rounded-[22px] border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                    Soy empresa

                    <Building2 className="h-5 w-5 transition duration-300 group-hover:scale-105" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-[38px] border border-white/10 bg-white/95 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold tracking-[-1px] text-slate-900">
                  Lo que encontrarás
                </h3>

                <p className="mt-3 text-slate-500">
                  Oportunidades reales
                  para comenzar tu
                  carrera.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    title:
                      "Empresas verificadas",
                  },
                  {
                    icon:
                      GraduationCap,
                    title:
                      "Prácticas y pasantías",
                  },
                  {
                    icon: Laptop,
                    title:
                      "Trabajo remoto tech",
                  },
                  {
                    icon:
                      BadgeCheck,
                    title:
                      "Información transparente",
                  },
                ].map((item) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={
                        item.title
                      }
                      className="group flex items-center gap-4 rounded-[24px] border border-slate-100 bg-slate-50 p-5 transition duration-300 hover:border-blue-100 hover:bg-blue-50/50"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg">
                        <Icon className="h-7 w-7" />
                      </div>

                      <p className="font-semibold text-slate-700">
                        {
                          item.title
                        }
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}