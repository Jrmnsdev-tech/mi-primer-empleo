import Link from "next/link";
import {
  BriefcaseBusiness,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1440px] px-8 py-16 xl:px-14">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[#0f2c73] to-[#2563eb] shadow-[0_12px_30px_rgba(37,99,235,0.25)]">
                <BriefcaseBusiness className="h-7 w-7 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-950">
                  Mi Primer Empleo
                </h2>

                <p className="text-sm text-slate-500">
                  Tu primera oportunidad laboral
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-600">
              Conectamos estudiantes, recién egresados
              y jóvenes profesionales con oportunidades
              reales para comenzar su carrera laboral.
            </p>
          </div>

          {/* EMPLEOS */}
          <div>
            <h3 className="font-bold text-slate-900">
              Oportunidades
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">
              <Link href="/">Primer empleo</Link>
              <Link href="/">Prácticas</Link>
              <Link href="/">Pasantías</Link>
              <Link href="/">Trabajo remoto tech</Link>
              <Link href="/">Part-time</Link>
            </div>
          </div>

          {/* EMPRESAS */}
          <div>
            <h3 className="font-bold text-slate-900">
              Empresas
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">
              <Link href="/empresa/register">
                Publicar empleo
              </Link>

              <Link href="/">
                Empresas verificadas
              </Link>

              <Link href="/">
                Reclutamiento joven
              </Link>
            </div>
          </div>

          {/* TRUST */}
          <div>
            <h3 className="font-bold text-slate-900">
              Confianza
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />

                <p className="text-slate-600">
                  Empresas verificadas y empleos con
                  información transparente.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" />

                <p className="text-slate-600">
                  contacto@miprimerempleo.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 lg:flex-row">
            <p>
              © 2026 Mi Primer Empleo. Todos los
              derechos reservados.
            </p>

            <div className="flex gap-6">
              <Link href="/">
                Términos y condiciones
              </Link>

              <Link href="/">
                Privacidad
              </Link>

              <Link href="/">
                Ayuda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}