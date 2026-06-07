"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  GraduationCap,
  Briefcase,
  Globe,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Tecnología",
    description:
      "Desarrollo web, soporte TI y oportunidades digitales.",
    icon: Code2,
  },
  {
    title: "Retail",
    description:
      "Ventas, tiendas y atención al cliente.",
    icon: ShoppingBag,
  },
  {
    title: "Gastronomía",
    description:
      "Cafeterías, restaurantes y cocina.",
    icon: UtensilsCrossed,
  },
  {
    title: "Administración",
    description:
      "Oficina, digitación y apoyo administrativo.",
    icon: Building2,
  },
  {
    title: "Prácticas",
    description:
      "Pasantías para estudiantes y recién egresados.",
    icon: GraduationCap,
  },
  {
    title: "Part-time",
    description:
      "Horarios flexibles para estudiantes.",
    icon: Briefcase,
  },
  {
    title: "Remoto internacional",
    description:
      "Oportunidades tech y trabajo digital.",
    icon: Globe,
  },
  {
    title: "Capacitación",
    description:
      "Empresas que enseñan mientras trabajas.",
    icon: TrendingUp,
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fbff] to-[#eef5fb]" />

      <div className="container-custom relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm">
            Oportunidades para comenzar
          </div>

          <h2 className="text-5xl font-extrabold tracking-[-2px] text-slate-950 md:text-6xl">
            Explora categorías
            <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              pensadas para ti
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Encuentra oportunidades reales
            para comenzar tu carrera,
            incluso sin experiencia
            previa.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map(
            (
              category,
              index
            ) => {
              const Icon =
                category.icon;

              return (
                <motion.div
                  key={
                    category.title
                  }
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <Link
                    href="/empleos"
                    className="group block h-full rounded-[34px] border border-blue-100 bg-white p-8 shadow-[0_15px_45px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      {/* ICON */}
                      <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg transition duration-300 group-hover:scale-105">
                        <Icon className="h-9 w-9" />
                      </div>

                      <div className="rounded-full border border-slate-200 p-2 text-slate-400 transition duration-300 group-hover:border-blue-200 group-hover:text-blue-600">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="mb-4 text-2xl font-bold text-slate-900 transition duration-300 group-hover:text-blue-700">
                      {category.title}
                    </h3>

                    {/* LINE */}
                    <div className="mb-5 h-[4px] w-14 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-24" />

                    {/* DESCRIPTION */}
                    <p className="leading-8 text-slate-600">
                      {
                        category.description
                      }
                    </p>

                    {/* CTA */}
                    <div className="mt-7 flex items-center gap-2 font-semibold text-blue-700 opacity-0 transition duration-300 group-hover:opacity-100">
                      Explorar empleos

                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}