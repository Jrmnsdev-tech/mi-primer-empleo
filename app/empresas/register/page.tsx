"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Building2,
  User,
  BriefcaseBusiness,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function EmpresaRegisterPage() {
  const [humanCheck, setHumanCheck] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (humanCheck !== "17") {
      alert(
        "Verificación incorrecta. ¿Cuánto es 4 + 13?"
      );
      return;
    }

    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1600px] px-6 py-16">
        {/* HERO */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-400">
            Empresas verificadas
          </span>

          <h1 className="mx-auto max-w-[900px] text-5xl font-black leading-tight text-white md:text-6xl">
            Contrata talento joven con
            <span className="block text-yellow-400">
              verdadero potencial
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[760px] text-lg leading-8 text-zinc-400">
            Ayudamos a empresas a reducir
            tiempos de búsqueda y conectar
            con jóvenes, estudiantes y
            personas con ganas reales de
            trabajar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-[34px] border border-yellow-500/20 bg-zinc-950 p-8 shadow-[0_0_50px_rgba(234,179,8,0.08)]">
            <h2 className="text-4xl font-black text-white">
              Publicar empleo
            </h2>

            <p className="mt-2 text-zinc-400">
              Completa la información básica
              y publica tu oportunidad
              laboral.
            </p>

            {success && (
              <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
                ✅ Gracias por confiar en Mi
                Primer Empleo. Tu publicación
                fue enviada exitosamente.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* EMPRESA */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-yellow-400">
                  Empresa
                </label>

                <div className="relative">
                  <Building2 className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-400" />

                  <input
                    type="text"
                    placeholder="Nombre de la empresa"
                    className="h-[62px] w-full rounded-[22px] border border-yellow-500/20 bg-zinc-900 pl-14 pr-5 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* CONTACTO */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-yellow-400">
                  Persona de contacto
                </label>

                <div className="relative">
                  <User className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-400" />

                  <input
                    type="text"
                    placeholder="Nombre responsable"
                    className="h-[62px] w-full rounded-[22px] border border-yellow-500/20 bg-zinc-900 pl-14 pr-5 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* CARGO */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-yellow-400">
                  Cargo o empleo
                </label>

                <div className="relative">
                  <BriefcaseBusiness className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-400" />

                  <input
                    type="text"
                    placeholder="Ej: Cajero Part-Time"
                    className="h-[62px] w-full rounded-[22px] border border-yellow-500/20 bg-zinc-900 pl-14 pr-5 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* UBICACION */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-yellow-400">
                  Ubicación
                </label>

                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-400" />

                  <input
                    type="text"
                    placeholder="Ej: Las Condes"
                    className="h-[62px] w-full rounded-[22px] border border-yellow-500/20 bg-zinc-900 pl-14 pr-5 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* PREGUNTA */}
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-yellow-400">
                  ¿Qué buscas publicar hoy?
                </label>

                <textarea
                  placeholder="Ej: Primer empleo, práctica, oportunidad part-time..."
                  rows={4}
                  className="w-full rounded-[22px] border border-yellow-500/20 bg-zinc-900 p-5 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* SEGURIDAD */}
              <div className="rounded-[24px] border border-yellow-500/20 bg-zinc-900 p-5">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-yellow-400" />

                  <span className="font-bold text-white">
                    Verificación simple
                  </span>
                </div>

                <p className="mb-3 text-zinc-400">
                  ¿Cuánto es 4 + 13?
                </p>

                <input
                  type="number"
                  value={humanCheck}
                  onChange={(e) =>
                    setHumanCheck(
                      e.target.value
                    )
                  }
                  placeholder="Respuesta"
                  className="h-[56px] w-full rounded-[18px] border border-yellow-500/20 bg-black px-5 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              {/* BTN */}
              <button
                type="submit"
                className="mt-4 h-[66px] w-full rounded-[24px] bg-gradient-to-r from-yellow-500 to-yellow-400 text-lg font-black text-black transition hover:scale-[1.01]"
              >
                Publicar empleo
              </button>
            </form>
          </div>

          {/* JARITO */}
          <div className="hidden justify-center lg:flex">
            <div className="relative flex h-[820px] w-full items-center justify-center rounded-[40px] border border-yellow-500/20 bg-gradient-to-b from-zinc-950 to-black">
              <Image
                src="/jarito-empresa1.png"
                alt="Jarito"
                width={650}
                height={900}
                className="h-auto max-h-[760px] w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}