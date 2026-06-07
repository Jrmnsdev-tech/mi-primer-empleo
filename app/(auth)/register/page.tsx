"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const supabase =
    createClient();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      password: "",
      profileType: "",
    });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  async function handleRegister(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const {
        data,
        error,
      } =
        await supabase.auth.signUp({
          email:
            formData.email,
          password:
            formData.password,
          options: {
            data: {
              full_name:
                formData.fullName,
            },
          },
        });

      if (error) {
        alert(error.message);
        return;
      }

      const user =
        data.user;

      if (user) {
        const {
          error:
            profileError,
        } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            full_name:
              formData.fullName,
            email:
              formData.email,
            work_status:
              formData.profileType,
          });

        if (profileError) {
          console.error(
            profileError
          );

          alert(
            profileError.message
          );

          return;
        }
      }

      router.push(
        "/dashboard"
      );

      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        "Ocurrió un error al crear tu cuenta."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] pt-[120px] text-white">
      {/* GLOW */}
      <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="absolute right-[-160px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_20%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-[1500px] items-center px-6 py-12 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div className="hidden lg:block">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Tu primera oportunidad
              empieza aquí ✨
            </div>

            {/* TITLE */}
            <h1 className="mt-8 max-w-[720px] text-6xl font-black leading-[0.95] tracking-[-2px]">
              Crea tu cuenta y
              encuentra tu{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                primer empleo
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-[640px] text-xl leading-relaxed text-slate-300">
              Empresas verificadas,
              prácticas, empleos
              junior y oportunidades
              pensadas para jóvenes,
              estudiantes y personas
              que buscan una primera
              experiencia laboral.
            </p>

            {/* SECURITY CARD */}
            <div className="mt-10 max-w-[540px] rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#071225] to-[#0b1731] p-7 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                  <ShieldCheck className="h-7 w-7 text-cyan-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Empresas verificadas
                  </h3>

                  <p className="mt-2 leading-relaxed text-slate-400">
                    Seguridad,
                    transparencia y
                    oportunidades reales
                    para comenzar tu
                    camino laboral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="mx-auto w-full max-w-[580px] overflow-hidden rounded-[38px] border border-cyan-500/10 bg-gradient-to-br from-[#081226] to-[#0b1731] p-8 shadow-[0_0_80px_rgba(37,99,235,0.10)] backdrop-blur-xl lg:p-10">
            <div className="relative z-10 text-center">
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Crear cuenta gratis
              </div>

              <h2 className="mt-5 text-5xl font-black tracking-[-1px] text-white">
                Bienvenido 👋
              </h2>

              <p className="mt-3 text-slate-400">
                Da el primer paso
                hacia tu futuro
                laboral
              </p>
            </div>

            <form
              onSubmit={
                handleRegister
              }
              className="mt-8 space-y-5"
            >
              {/* NOMBRE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Nombre completo
                </label>

                <input
                  type="text"
                  name="fullName"
                  required
                  value={
                    formData.fullName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Ej: Juan Pérez"
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="correo@gmail.com"
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Contraseña
                </label>

                <input
                  type="password"
                  name="password"
                  required
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="********"
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* PROFILE TYPE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  ¿En qué etapa estás?
                </label>

                <select
                  name="profileType"
                  required
                  value={
                    formData.profileType
                  }
                  onChange={
                    handleChange
                  }
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                >
                  <option value="">
                    Selecciona una opción
                  </option>

                  <option value="primer_empleo">
                    Busco mi primer empleo
                  </option>

                  <option value="estudiante">
                    Soy estudiante
                  </option>

                  <option value="practica">
                    Busco práctica /
                    pasantía
                  </option>

                  <option value="recien_egresado">
                    Recién egresado
                  </option>

                  <option value="primera_oportunidad_profesional">
                    Profesional buscando
                    oportunidad
                  </option>

                  <option value="con_experiencia">
                    Ya tengo experiencia
                    laboral
                  </option>
                </select>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-[62px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0f2c73] via-[#1d4ed8] to-[#22d3ee] text-lg font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)] transition duration-300 hover:scale-[1.01] disabled:opacity-60"
              >
                {loading
                  ? "Creando cuenta..."
                  : "Crear cuenta"}

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}