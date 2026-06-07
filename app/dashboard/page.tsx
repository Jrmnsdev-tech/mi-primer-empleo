import Image from "next/image";
import {
  MapPin,
  BriefcaseBusiness,
  Sparkles,
  Clock3,
  FileText,
  ShieldCheck,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

const tips = [
  {
    icon: Clock3,
    title: "Sé puntual",
    description:
      "Llegar 10–15 minutos antes transmite responsabilidad y compromiso. La puntualidad habla muy bien de ti.",
  },
  {
    icon: FileText,
    title: "Revisa tu currículum",
    description:
      "Dale una última mirada antes de tu entrevista. Recordar lo que escribiste te dará más seguridad al responder.",
  },
  {
    icon: ShieldCheck,
    title: "Lleva tus documentos",
    description:
      "Ten preparado carnet, CV, certificados o cualquier documento solicitado. Evitarás nervios de último minuto.",
  },
  {
    icon: GraduationCap,
    title: "Demuestra ganas de aprender",
    description:
      "No tener experiencia no es un problema si muestras actitud, motivación y disposición para crecer.",
  },
  {
    icon: BadgeCheck,
    title: "Habla con seguridad",
    description:
      "No necesitas saberlo todo. Habla con calma, mantén contacto visual y demuestra confianza en tus capacidades.",
  },
  {
    icon: Sparkles,
    title: "Vístete correctamente",
    description:
      "No necesitas ropa costosa. Ve limpio, ordenado y acorde al tipo de empleo al que postulas.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      {/* HERO PREMIUM */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#030B2A] via-[#082c7a] to-[#0d5be1]">
        {/* Glow Premium */}
        <div className="absolute left-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute right-[-120px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_20%)]" />

        <div className="mx-auto flex min-h-[720px] max-w-[1500px] flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row lg:px-12">
          {/* LEFT */}
          <div className="relative z-10 max-w-[760px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-3 text-sm font-medium text-cyan-200 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Bienvenido a Mi Primer Empleo 👋
            </div>

            {/* Title */}
            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-2px] md:text-7xl xl:text-[92px]">
              Hola,{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                ANA
              </span>{" "}
              👋
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-[680px] text-xl leading-relaxed text-blue-100 md:text-2xl">
              Tu primera oportunidad laboral está más cerca
              de lo que imaginas.
            </p>

            <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-blue-200/80">
              Jarito dejó algunos consejos importantes para
              ayudarte a destacar en tu primera entrevista.
            </p>

            {/* Chips */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-3 text-sm text-cyan-100 backdrop-blur-lg transition hover:border-cyan-300/40 hover:bg-white/15">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Región Metropolitana
              </div>

              <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/10 px-5 py-3 text-sm text-cyan-100 backdrop-blur-lg transition hover:border-cyan-300/40 hover:bg-white/15">
                <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
                Busco mi primer empleo
              </div>
            </div>
          </div>

          {/* RIGHT - JARITO */}
          <div className="relative flex items-end justify-center">
            {/* Glow detrás */}
            <div className="absolute bottom-16 h-[360px] w-[360px] rounded-full bg-cyan-400/20 blur-[90px]" />

            {/* Caja blanca SOLO para Jarito */}
            <div className="relative overflow-hidden rounded-[38px] bg-white p-3 shadow-[0_0_80px_rgba(34,211,238,0.25)]">
              <Image
                src="/images/jaritoazulconsejos.png"
                alt="Jarito consejos"
                width={460}
                height={540}
                priority
                className="relative z-10 h-auto w-[320px] object-contain xl:w-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONSEJOS */}
      <section className="relative mx-auto max-w-[1500px] px-6 py-24 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          Consejos de Jarito ✨
        </div>

        {/* Title */}
        <h2 className="mt-6 max-w-[850px] text-4xl font-black leading-tight tracking-[-1.5px] md:text-6xl">
          Prepárate para tu primera{" "}
          <span className="text-cyan-400">
            entrevista
          </span>
        </h2>

        <p className="mt-5 max-w-[760px] text-lg leading-relaxed text-slate-400">
          Pequeños detalles pueden ayudarte muchísimo
          a causar una gran primera impresión. No
          necesitas experiencia para destacar: actitud,
          preparación y seguridad pueden abrirte muchas
          puertas.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[34px] border border-cyan-500/10 bg-gradient-to-br from-[#081226] to-[#0b1731] p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]"
              >
                {/* glow */}
                <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-70" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                  <Icon className="h-8 w-8 text-cyan-300" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {tip.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-400">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}