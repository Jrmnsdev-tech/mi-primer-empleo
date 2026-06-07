"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const regionesComunas: Record<string, string[]> = {
  "Región Metropolitana": [
    "Santiago Centro",
    "Las Condes",
    "Providencia",
    "Maipú",
    "Puente Alto",
    "La Florida",
    "Ñuñoa",
    "Pudahuel",
    "Quilicura",
  ],

  Valparaíso: [
    "Valparaíso",
    "Viña del Mar",
    "Quilpué",
    "Villa Alemana",
  ],

  Biobío: [
    "Concepción",
    "Talcahuano",
    "Los Ángeles",
  ],

  "O'Higgins": [
    "Rancagua",
    "Machalí",
    "San Fernando",
  ],
};

export default function PerfilPage() {
  const router = useRouter();
  const supabase = createClient();

  const [saving, setSaving] =
    useState(false);

  const [region, setRegion] =
    useState(
      "Región Metropolitana"
    );

  const [comuna, setComuna] =
    useState(
      "Santiago Centro"
    );

  const [workStatus, setWorkStatus] =
    useState(
      "Busco Mi Primer Empleo"
    );

  const [
    selectedModality,
    setSelectedModality,
  ] = useState("Presencial");

  const [
    selectedInterests,
    setSelectedInterests,
  ] = useState<string[]>([]);

  const comunas =
    regionesComunas[
      region
    ] || [];

  async function handleSaveProfile() {
    try {
      setSaving(true);

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { error } =
        await supabase
          .from("profiles")
          .upsert({
            id: user.id,

            email:
              user.email,

            full_name:
              user.user_metadata
                ?.full_name ??
              "Usuario",

            region,

            comuna,

            work_status:
              workStatus,

            work_modality:
              selectedModality,

            interests:
              selectedInterests,

            updated_at:
              new Date().toISOString(),
          });

      if (error) {
        console.error(error);

        alert(
          `Error: ${error.message}`
        );

        return;
      }

      alert(
        "Perfil guardado 🚀"
      );

      router.push(
        "/dashboard"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Error al guardar perfil"
      );
    } finally {
      setSaving(false);
    }
  }

  function toggleModality(
    modality: string
  ) {
    setSelectedModality(
      modality
    );
  }

  function toggleInterest(
    interest: string
  ) {
    if (
      selectedInterests.includes(
        interest
      )
    ) {
      setSelectedInterests(
        selectedInterests.filter(
          (item) =>
            item !== interest
        )
      );
    } else {
      setSelectedInterests([
        ...selectedInterests,
        interest,
      ]);
    }
  }

  return (
    <main className="min-h-screen bg-[#edf4fb]">
      <section className="mx-auto flex w-full max-w-7xl justify-center px-5 py-10 md:py-16">
        <div className="w-full max-w-3xl rounded-[42px] bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] md:p-12">

          <div className="mb-10">
            <div className="mb-6 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              Completemos tu perfil 🚀
            </div>

            <h1 className="text-4xl font-black leading-[1] tracking-[-2px] text-slate-950 md:text-6xl">
              Completa Tu Perfil
            </h1>

            <p className="mt-4 text-lg text-slate-500 md:text-xl">
              Solo tomará menos de 1 minuto.
            </p>
          </div>

          <div className="space-y-7">

            {/* REGION */}
            <div>
              <label className="mb-3 block text-lg font-bold text-slate-800">
                Región
              </label>

              <select
                value={region}
                onChange={(e) => {
                  setRegion(
                    e.target.value
                  );

                  setComuna(
                    regionesComunas[
                      e.target.value
                    ][0]
                  );
                }}
                className="h-[64px] w-full rounded-[22px] border border-slate-300 px-5 text-lg outline-none transition focus:border-blue-500"
              >
                {Object.keys(
                  regionesComunas
                ).map(
                  (
                    regionItem
                  ) => (
                    <option
                      key={
                        regionItem
                      }
                      value={
                        regionItem
                      }
                    >
                      {
                        regionItem
                      }
                    </option>
                  )
                )}
              </select>
            </div>

            {/* COMUNA */}
            <div>
              <label className="mb-3 block text-lg font-bold text-slate-800">
                Comuna
              </label>

              <select
                value={comuna}
                onChange={(e) =>
                  setComuna(
                    e.target.value
                  )
                }
                className="h-[64px] w-full rounded-[22px] border border-slate-300 px-5 text-lg outline-none transition focus:border-blue-500"
              >
                {comunas.map(
                  (
                    comunaItem
                  ) => (
                    <option
                      key={
                        comunaItem
                      }
                      value={
                        comunaItem
                      }
                    >
                      {
                        comunaItem
                      }
                    </option>
                  )
                )}
              </select>
            </div>

            {/* ETAPA */}
            <div>
              <label className="mb-3 block text-lg font-bold text-slate-800">
                ¿En qué etapa estás?
              </label>

              <select
                value={
                  workStatus
                }
                onChange={(e) =>
                  setWorkStatus(
                    e.target.value
                  )
                }
                className="h-[64px] w-full rounded-[22px] border border-slate-300 px-5 text-lg outline-none transition focus:border-blue-500"
              >
                <option>
                  Busco Mi Primer Empleo
                </option>

                <option>
                  Soy Estudiante
                </option>

                <option>
                  Busco Práctica
                </option>

                <option>
                  Ya Tengo Experiencia
                </option>
              </select>
            </div>

            {/* MODALIDAD */}
            <div>
              <label className="mb-4 block text-lg font-bold text-slate-800">
                Modalidad Deseada
              </label>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "Presencial",
                  "Híbrido",
                  "Remoto",
                ].map(
                  (
                    modality
                  ) => (
                    <button
                      key={
                        modality
                      }
                      type="button"
                      onClick={() =>
                        toggleModality(
                          modality
                        )
                      }
                      className={`h-[64px] rounded-[22px] border text-lg font-bold transition ${
                        selectedModality ===
                        modality
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      {
                        modality
                      }
                    </button>
                  )
                )}
              </div>
            </div>

            {/* INTERESES */}
            <div>
              <label className="mb-4 block text-lg font-bold text-slate-800">
                ¿Qué te interesa?
              </label>

              <div className="flex flex-wrap gap-3">
                {[
                  "Tecnología",
                  "Programación",
                  "Retail",
                  "Atención al Cliente",
                  "Logística",
                  "Marketing",
                  "Diseño",
                  "Administración",
                ].map(
                  (
                    interest
                  ) => (
                    <button
                      key={
                        interest
                      }
                      type="button"
                      onClick={() =>
                        toggleInterest(
                          interest
                        )
                      }
                      className={`rounded-full px-5 py-3 font-bold transition ${
                        selectedInterests.includes(
                          interest
                        )
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {
                        interest
                      }
                    </button>
                  )
                )}
              </div>
            </div>

            {/* BOTON */}
            <div className="flex justify-center pt-10">
              <button
                onClick={
                  handleSaveProfile
                }
                disabled={
                  saving
                }
                className="flex h-[68px] min-w-[340px] items-center justify-center rounded-[24px] bg-gradient-to-r from-[#0048ff] to-[#0ea5e9] px-10 text-xl font-black text-white shadow-[0_20px_50px_rgba(14,165,233,0.30)] transition duration-300 hover:scale-[1.02] disabled:opacity-50"
              >
                {saving
                  ? "Guardando..."
                  : "Guardar Perfil"}
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}