import {
  Building2,
  MapPin,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

type Props = {
  params: Promise<{
    jobId: string;
  }>;
};

const modalityMap: Record<
  string,
  string
> = {
  onsite: "Presencial",
  hybrid: "Híbrido",
  remote: "Remoto",
};

type Job = {
  id: string;
  title: string;
  description: string | null;
  company_name: string | null;
  location: string | null;
  modality:
    | "onsite"
    | "hybrid"
    | "remote"
    | null;
  salary_min: number | null;
  salary_max: number | null;
  no_experience_required:
    | boolean
    | null;
  hero_verified:
    | boolean
    | null;
};

export default async function JobPage({
  params,
}: Props) {
  const { jobId } =
    await params;

  const supabase =
    await createClient();

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
      no_experience_required,
      hero_verified
    `)
    .eq("id", jobId)
    .single();

  const job =
    data as Job | null;

  console.log(
    "JOB:",
    job
  );

  console.log(
    "ERROR:",
    error
  );

  if (error || !job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
              <ShieldCheck className="h-4 w-4" />
              {job.hero_verified
                ? "Empresa verificada por Hero"
                : "Oferta publicada"}
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {job.title}
            </h1>

            <p className="mt-4 text-xl text-slate-300">
              {job.company_name ??
                "Empresa"}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                {job.location ??
                  "Chile"}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                <Building2 className="h-4 w-4 text-cyan-400" />
                {job.modality
                  ? modalityMap[
                      job
                        .modality
                    ]
                  : "Presencial"}
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3">
                <Clock3 className="h-4 w-4 text-cyan-400" />
                {job.no_experience_required
                  ? "Sin experiencia"
                  : "Experiencia requerida"}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
            <h2 className="text-2xl font-bold">
              Resumen del empleo
            </h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Modalidad
                </p>

                <p className="mt-1 font-semibold">
                  {job.modality
                    ? modalityMap[
                        job
                          .modality
                      ]
                    : "Presencial"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">
                  Ubicación
                </p>

                <p className="mt-1 font-semibold">
                  {job.location ??
                    "Chile"}
                </p>
              </div>

              <button className="w-full rounded-[20px] bg-gradient-to-r from-cyan-500 to-blue-500 py-4 font-bold transition hover:scale-[1.02]">
                Postular ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-bold">
            Descripción del cargo
          </h2>

          <p className="mt-5 whitespace-pre-wrap leading-8 text-slate-300">
            {job.description ??
              "No hay descripción disponible todavía."}
          </p>
        </div>
      </section>
    </main>
  );
}