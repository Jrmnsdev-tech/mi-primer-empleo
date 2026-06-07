"use client";

import Link from "next/link";
import {
  BriefcaseBusiness,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[92px] max-w-[1440px] items-center justify-between px-8 xl:px-14">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#0f2c73] to-[#2563eb] shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
            <BriefcaseBusiness className="h-7 w-7 text-white" />
          </div>

          <div>
            <h2 className="text-[2rem] font-black leading-none tracking-[-1px] text-slate-950">
              Mi Primer Empleo
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Tu primera oportunidad laboral
            </p>
          </div>
        </Link>

        {/* MENU */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/empleos"
            className="text-[1rem] font-semibold text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Empleos
          </Link>

          <Link
            href="/empresas"
            className="text-[1rem] font-semibold text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Empresas
          </Link>

          <Link
            href="/empleos?tipo=practica"
            className="text-[1rem] font-semibold text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Prácticas
          </Link>

          <Link
            href="/ayuda"
            className="text-[1rem] font-semibold text-slate-600 transition duration-300 hover:text-blue-600"
          >
            Ayuda
          </Link>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          <Link href="/empresas">
            <button className="flex h-[58px] items-center justify-center rounded-[22px] border border-slate-200 bg-white px-7 text-[1rem] font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-slate-50">
              Soy empresa
            </button>
          </Link>

          <Link href="/login">
            <button className="flex h-[58px] items-center justify-center rounded-[22px] border border-slate-200 bg-white px-7 text-[1rem] font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-slate-50">
              Iniciar sesión
            </button>
          </Link>

          <Link href="/register">
            <button className="flex h-[58px] items-center justify-center rounded-[22px] bg-gradient-to-r from-[#0f2c73] to-[#2563eb] px-7 text-[1rem] font-bold text-white shadow-[0_16px_35px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-[2px]">
              Crear cuenta
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}