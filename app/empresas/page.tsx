"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock3,
  ArrowRight,
  Sparkles,
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Reclutamiento eficiente",
    description:
      "Ayudamos a RRHH a reducir tiempo filtrando mejores perfiles.",
    icon: Users,
  },
  {
    title: "Menos tiempo perdido",
    description:
      "Conectamos perfiles alineados para procesos más rápidos.",
    icon: Clock3,
  },
  {
    title: "Inclusión laboral real",
    description:
      "Abrimos oportunidades para jóvenes y primeros empleos.",
    icon: Handshake,
  },
  {
    title: "Empresas verificadas",
    description:
      "Un entorno más seguro, serio y transparente.",
    icon: ShieldCheck,
  },
  {
    title: "Visibilidad empresarial",
    description:
      "Trabajamos contigo para atraer mejor talento.",
    icon: TrendingUp,
  },
  {
    title: "Compromiso real",
    description:
      "Personas motivadas con ganas de crecer profesionalmente.",
    icon: BadgeCheck,
  },
];

export default function EmpresasPage() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">
      {/* PREMIUM GOLD GLOW */}
      <div className="absolute left-[-200px] top-[-100px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[120px]" />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-7 inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-xl">
              Soluciones para empresas
            </div>

            <h1 className="text-[3.3rem] font-black leading-[0.95] tracking-[-3px] text-white xl:text-[4.2rem]">
              Contrata talento con
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                verdadero potencial
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[1.06rem] leading-8 text-zinc-400">
              Ayudamos a empresas a encontrar personas comprometidas,
              responsables y con ganas reales de crecer.
              Reducimos tiempos de búsqueda y ayudamos a crear
              inclusión laboral real.
            </p>

            {/* BADGES */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Reclutamiento eficiente",
                "Inclusión laboral",
                "Empresas verificadas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex h-[50px] items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 text-sm font-semibold text-zinc-200"
                >
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <Link href="/empresa/register">
                <button className="group flex h-[62px] min-w-[240px] items-center justify-center gap-2 rounded-[22px] bg-gradient-to-r from-yellow-500 to-amber-400 px-8 font-bold text-black shadow-[0_18px_45px_rgba(251,191,36,0.25)] transition duration-300 hover:-translate-y-1">
                  Publicar empleo

                  <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* TRUST BLOCK */}
            <div className="mt-10 rounded-[28px] border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-yellow-500/10">
                  <BriefcaseBusiness className="h-8 w-8 text-yellow-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Hacemos parte del trabajo por ti
                  </h3>

                  <p className="mt-2 leading-7 text-zinc-400">
                    Queremos ayudar a Recursos Humanos a encontrar
                    personas responsables, comprometidas y listas
                    para una oportunidad real.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] border border-yellow-500/20 bg-[#0a0a0a] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/jarito-empresa.png"
                alt="Jarito cerrando alianza con empresa"
                width={1400}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-sm font-semibold text-yellow-300">
            Beneficios para tu empresa
          </div>

          <h2 className="text-5xl font-extrabold tracking-[-2px] text-white">
            Reclutar puede ser
            <span className="block bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              mucho más simple
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-[34px] border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-yellow-500/30 hover:shadow-[0_20px_60px_rgba(251,191,36,0.08)]"
              >
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[28px] bg-yellow-500/10 text-yellow-400">
                  <Icon className="h-9 w-9" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <div className="mb-5 h-[4px] w-14 rounded-full bg-yellow-400" />

                <p className="leading-8 text-zinc-400">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}