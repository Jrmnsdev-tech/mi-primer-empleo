import {
  Brain,
  BriefcaseBusiness,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const tips = [
  {
    icon: Clock3,
    title: "Llega con tiempo",
    description:
      "Llegar 10 o 15 minutos antes demuestra responsabilidad, interés y organización. Evita el estrés de llegar apurado y usa ese tiempo para respirar, observar el ambiente y entrar con confianza.",
  },
  {
    icon: FileText,
    title: "Repasa tu currículum",
    description:
      "Antes de una entrevista revisa tu CV. Recuerda lo que escribiste, tus habilidades y lo que quieres comunicar. Si eres nuevo o no tienes experiencia, enfócate en tus ganas de aprender y crecer.",
  },
  {
    icon: UserCheck,
    title: "Vístete correctamente",
    description:
      "No necesitas ropa costosa. Lo importante es verte limpio, ordenado y adecuado para el tipo de trabajo. La primera impresión sí importa, pero la autenticidad también.",
  },
  {
    icon: Brain,
    title: "Ve con seguridad",
    description:
      "No tienes que saberlo todo. Habla con tranquilidad, mira a los ojos y demuestra confianza en tus capacidades. Muchas empresas valoran más la actitud y las ganas de aprender que la experiencia.",
  },
  {
    icon: ShieldCheck,
    title: "Lleva tus documentos",
    description:
      "Ten preparado carnet, currículum, certificados o cualquier documento solicitado. Ser organizado transmite profesionalismo y seriedad.",
  },
  {
    icon: TrendingUp,
    title: "Demuestra actitud",
    description:
      "Aunque no tengas experiencia, demuestra disposición, energía y ganas de crecer. Una buena actitud puede abrir puertas que un currículum todavía no logra abrir.",
  },
];

export default function AyudaPage() {
  return (
    <main className="min-h-screen bg-[#030B2A] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-cyan-500/10">
        {/* Glow */}
        <div className="absolute left-[-150px] top-[-120px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-[1450px] flex-col justify-center px-8 py-24">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Curso intensivo para tu primer empleo
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-2px] text-white md:text-7xl">
            Tu primer empleo es{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              solo el comienzo
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-blue-100">
            Conseguir tu primera oportunidad puede dar miedo,
            generar dudas o hacerte sentir inseguro. Eso es
            normal. Pero recuerda algo importante: nadie nace
            con experiencia. Todos comenzaron desde algún
            lugar, y este puede ser el inicio de algo muy
            grande para ti.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl">
              Primer empleo
            </div>

            <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-xl">
              Consejos reales
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl">
              Preparación para entrevistas
            </div>
          </div>
        </div>
      </section>

      {/* MENSAJE POTENTE */}
      <section className="mx-auto max-w-[1450px] px-8 py-20">
        <div className="rounded-[40px] border border-cyan-500/10 bg-gradient-to-br from-[#07153D] to-[#091E56] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Antes de rendirte, lee esto
          </div>

          <h2 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
            Tu valor no depende de una entrevista
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Que una empresa diga “no” no significa que no
            seas capaz. No significa que no tengas talento.
            No significa que no puedas crecer. Muchas veces
            simplemente no era el lugar correcto, el momento
            correcto o la oportunidad indicada.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            Lo importante es no detenerte. Tu primer empleo
            no define quién eres, pero sí puede convertirse
            en el primer paso para construir algo enorme.
            Lo que hoy parece pequeño, mañana puede cambiar
            completamente tu vida.
          </p>
        </div>
      </section>

      {/* CONSEJOS */}
      <section className="mx-auto max-w-[1450px] px-8 pb-20">
        <div className="mb-12">
          <div className="mb-4 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Consejos prácticos
          </div>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Prepárate para tu primera{" "}
            <span className="text-cyan-300">
              entrevista
            </span>
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Pequeños detalles pueden ayudarte muchísimo a
            causar una gran primera impresión. No se trata
            de ser perfecto, se trata de ir preparado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[34px] border border-cyan-500/10 bg-gradient-to-br from-[#07153D] to-[#0A1335] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-[0_20px_50px_rgba(0,229,255,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {tip.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {tip.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 opacity-60" />
              </div>
            );
          })}
        </div>
      </section>

      {/* CIERRE */}
      <section className="mx-auto max-w-[1450px] px-8 pb-28">
        <div className="rounded-[40px] border border-blue-500/10 bg-gradient-to-br from-[#08112F] to-[#0A1744] p-12 text-center">
          <BriefcaseBusiness className="mx-auto mb-6 h-14 w-14 text-cyan-300" />

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
            Tu primer empleo no es tu destino final.
            <br />
            Es el primer peldaño de algo mucho más grande.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cree un poco más en ti. Prepárate. Aprende.
            Equivócate si hace falta. Pero nunca te rindas.
            Las oportunidades llegan para quienes siguen
            caminando incluso cuando todavía no ven el
            resultado.
          </p>

          <p className="mt-8 text-xl font-bold text-cyan-300">
            Derrotados no son quienes fallan.
            <br />
            Derrotados son quienes dejan de intentarlo.
          </p>
        </div>
      </section>
    </main>
  );
}