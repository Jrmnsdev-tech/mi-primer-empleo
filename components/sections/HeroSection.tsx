"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#edf4fb]">
      {/* PREMIUM GLOW */}
      <div className="absolute left-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-blue-300/10 blur-[120px]" />

      <div className="absolute right-[-120px] top-[100px] h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="container-custom relative z-10 pb-24 pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* BADGE */}
            <div className="mb-7 inline-flex items-center rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              Plataforma diseñada para tu primer empleo
            </div>

            {/* TITLE */}
            <h1 className="max-w-[620px] text-[3.6rem] font-black leading-[0.92] tracking-[-3px] text-slate-950 xl:text-[4.3rem]">
              Encuentra tu primera oportunidad laboral

              <span className="mt-2 block bg-gradient-to-r from-[#0f2c73] via-[#1d4ed8] to-[#2563eb] bg-clip-text text-transparent">
                sin experiencia
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[560px] text-[1.03rem] leading-8 text-slate-600">
              Empresas verificadas, oportunidades reales y
              trabajos pensados para jóvenes, estudiantes,
              prácticas y personas buscando su primer empleo.
            </p>

            {/* TRUST */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Empresas verificadas",
                "Sin experiencia",
                "Información transparente",
              ].map((item) => (
                <div
                  key={item}
                  className="flex h-[50px] items-center gap-2 rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1"
                >
                  <BadgeCheck className="h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>

            {/* SECURITY MESSAGE */}
            <div className="mt-6 flex items-center gap-3 rounded-[22px] border border-blue-100 bg-white/80 p-4 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-blue-100">
                <LockKeyhole className="h-5 w-5 text-blue-700" />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  Tu información está protegida
                </p>

                <p className="text-sm text-slate-500">
                  Nunca pedimos pagos para postular.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/register">
                <button className="group flex h-[60px] min-w-[230px] items-center justify-center gap-2 rounded-[22px] bg-gradient-to-r from-[#0f2c73] to-[#2563eb] px-8 font-bold text-white shadow-[0_18px_45px_rgba(37,99,235,0.20)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(37,99,235,0.35)]">
                  Crear cuenta gratis

                  <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
                </button>
              </Link>

              <Link href="/empleos">
              <button className="flex h-[60px] min-w-[190px] items-center justify-center rounded-[22px] border border-slate-200 bg-white px-8 font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-[2px] hover:border-blue-200 hover:bg-slate-50">
              Conocer más
  </button>
</Link>
              

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-[60px] top-[50px] h-[220px] w-[220px] rounded-full bg-blue-400/20 blur-[90px]" />

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-white p-3 shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
              <div className="overflow-hidden rounded-[32px]">
                <Image
                  src="/images/hero-young-job-search.png"
                  alt="Primer empleo"
                  width={1400}
                  height={950}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* FLOAT TOP */}
            <div className="absolute left-[-25px] top-[65px] hidden rounded-[24px] border border-white/80 bg-white/95 px-5 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-blue-100">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Empresa verificada
                  </p>

                  <span className="text-sm text-slate-500">
                    Seguridad y transparencia
                  </span>
                </div>
              </div>
            </div>

            {/* FLOAT BOTTOM */}
            <div className="absolute bottom-[30px] right-[-20px] hidden rounded-[24px] border border-white/80 bg-white/95 px-5 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-blue-100">
                  <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Primer empleo real
                  </p>

                  <span className="text-sm text-slate-500">
                    Oportunidades transparentes
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