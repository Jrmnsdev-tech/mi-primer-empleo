"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  MapPin,
  Sparkles,
  Wallet,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

type Job = {
  id: string;
  title: string;
  description: string;
  company_name: string | null;
  location: string | null;
  modality:
    | "onsite"
    | "hybrid"
    | "remote"
    | null;
  salary_min: number | null;
  salary_max: number | null;
  internship: boolean | null;
  no_experience_required:
    | boolean
    | null;
  hero_verified: boolean | null;
  created_at: string;
};

const modalityMap: Record<
  string,
  string
> = {
  onsite: "Presencial",
  hybrid: "Híbrido",
  remote: "Remoto",
};

export default function EmpleosPage() {
  const supabase =
    createClient();

  const [jobs, setJobs] =
    useState<Job[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    async function loadJobs() {
      try {
        const {
          data,
          error,
        } = await supabase
          .from("jobs")
          .select(`
            id,
            title,
            description,
            company_name,
            location,
            modality,
            salary_min,
            salary_max,
            internship,
            no_experience_required,
            hero_verified,
            created_at,
            is_active
          `)
          .eq(
            "is_active",
            true
          )
          .order(
            "created_at",
            {
              ascending:
                false,
            }
          );

        if (error) {
          throw error;
        }

        setJobs(
          (data ??
            []) as Job[]
        );
      } catch (
        err
      ) {
        console.error(
          "Error cargando empleos:",
          err
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  const hasJobs =
    jobs.length > 0;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

          <h1 className="text-2xl font-bold">
            Cargando oportunidades...
          </h1>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="max-w-lg rounded-[32px] border border-red-500/20 bg-red-500/10 p-8 text-center backdrop-blur-xl">
          <h2 className="mb-3 text-2xl font-bold">
            Error al cargar empleos
          </h2>

          <p className="text-slate-300">
            Estamos teniendo un problema
            cargando las oportunidades.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.14),transparent_35%)]" />

      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Empleos verificados
            para tu crecimiento
          </div>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Encuentra una oportunidad
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              sin experiencia
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Trabajos reales,
            empresas verificadas
            y oportunidades
            diseñadas para jóvenes,
            estudiantes, prácticas
            y primer empleo.
          </p>
        </div>

        {!hasJobs ? (
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500/10">
                <Briefcase className="h-10 w-10 text-cyan-400" />
              </div>

              <h2 className="text-3xl font-bold">
                Estamos buscando
                oportunidades para ti
              </h2>

              <p className="mt-4 leading-8 text-slate-400">
                Aún no tenemos
                ofertas cercanas
                a tu perfil,
                pero no te desanimes.
                También podrás
                explorar empleos
                remotos,
                prácticas y nuevas
                oportunidades muy pronto.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-7 xl:grid-cols-2">
            {jobs.map(
              (job) => (
                <Link
                  key={job.id}
                  href={`/empleos/${job.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {job.hero_verified && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                          <ShieldCheck className="h-4 w-4" />
                          Hero Verificada
                        </span>
                      )}

                      {job.no_experience_required && (
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                          Sin experiencia
                        </span>
                      )}

                      {job.internship && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
                          <GraduationCap className="h-4 w-4" />
                          Práctica
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-black leading-tight transition group-hover:text-cyan-300">
                      {job.title}
                    </h2>

                    <p className="mt-3 text-lg font-semibold text-cyan-400">
                      {job.company_name ??
                        "Empresa"}
                    </p>

                    <p className="mt-5 line-clamp-4 text-base leading-7 text-slate-400">
                      {job.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
                      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <MapPin className="h-4 w-4 text-cyan-400" />
                        {job.location ??
                          "Chile"}
                      </div>

                      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <Building2 className="h-4 w-4 text-cyan-400" />
                        {job.modality
                          ? modalityMap[
                              job.modality
                            ]
                          : "Presencial"}
                      </div>

                      {(job.salary_min ||
                        job.salary_max) && (
                        <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-emerald-300">
                          <Wallet className="h-4 w-4" />

                          Salario visible
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      Ver detalles
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        )}
      </section>
    </main>
  );
}