"use client";
export const dynamic = 'force-dynamic';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { signIn } from "@/services/auth.service";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await signIn({
        email,
        password,
      });

      router.push(
        "/dashboard"
      );

      router.refresh();
    } catch (error: any) {
      setError(
        error?.message ||
          "Correo o contraseña incorrectos."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] pt-[120px] text-white">
      {/* GLOWS */}
      <div className="absolute left-[-120px] top-[-120px] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute right-[-140px] bottom-[-120px] h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_20%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-[1500px] items-center px-6 py-12 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div className="hidden lg:block">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Bienvenido de vuelta 👋
            </div>

            {/* Title */}
            <h1 className="mt-8 max-w-[720px] text-6xl font-black leading-[0.95] tracking-[-2px]">
              Continúa tu camino hacia tu{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                primer empleo
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[640px] text-xl leading-relaxed text-slate-300">
              Accede a tu cuenta, revisa nuevas
              oportunidades laborales, prácticas
              y empresas verificadas pensadas
              para personas que buscan crecer
              profesionalmente.
            </p>

            {/* Security card */}
            <div className="mt-10 max-w-[520px] rounded-[32px] border border-cyan-500/10 bg-gradient-to-br from-[#071225] to-[#0b1731] p-7 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                  <ShieldCheck className="h-7 w-7 text-cyan-300" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Tu información protegida
                  </h3>

                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Nunca pedimos pagos para
                    postular. Solo empresas
                    verificadas y oportunidades
                    reales para crecer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[38px] border border-cyan-500/10 bg-gradient-to-br from-[#081226] to-[#0b1731] p-8 shadow-[0_0_80px_rgba(37,99,235,0.10)] backdrop-blur-xl lg:p-10">
            {/* Top glow */}
            <div className="absolute h-[200px] w-[200px] rounded-full bg-cyan-400/5 blur-[80px]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Bienvenido de vuelta
              </div>

              <h1 className="mt-5 text-5xl font-black tracking-[-1px] text-white">
                Iniciar sesión 👋
              </h1>

              <p className="mt-3 text-slate-400">
                Accede a tu cuenta de
                Mi Primer Empleo
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              className="relative z-10 mt-8 space-y-5"
            >
              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  required
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Contraseña
                </label>

                <input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                  className="h-[60px] w-full rounded-2xl border border-cyan-500/10 bg-[#091324] px-5 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group flex h-[62px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0f2c73] via-[#1d4ed8] to-[#22d3ee] text-lg font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)] transition duration-300 hover:scale-[1.01] disabled:opacity-60"
              >
                {loading
                  ? "Ingresando..."
                  : "Iniciar sesión"}

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>
            </form>

            {/* FOOTER */}
            <div className="mt-7 text-center text-sm text-slate-400">
              ¿No tienes cuenta?{" "}
              <Link
                href="/register"
                className="font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Crear cuenta gratis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}