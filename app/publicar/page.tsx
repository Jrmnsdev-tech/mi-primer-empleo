export default function PublicarPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <span className="bg-blue-600 px-5 py-2 rounded-full text-sm font-semibold">
            Empresas • Pymes • Emprendimientos
          </span>

          <h1 className="text-5xl font-black mt-8 mb-4">
            Publica una oportunidad laboral
          </h1>

          <p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto">
            Buscamos crear oportunidades reales para personas sin experiencia.
            Grandes empresas, pymes y emprendimientos son bienvenidos.
          </p>

          <p className="text-cyan-400 mt-4 font-medium">
            ¿Tienes un pequeño negocio o emprendimiento?
            También eres bienvenido en MiPrimerEmpleo.
          </p>

        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Información de empresa
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-slate-300">
                Nombre empresa o negocio
              </label>

              <input
                type="text"
                placeholder="Ej: Café Santiago"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Nombre responsable
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Email contacto
              </label>

              <input
                type="email"
                placeholder="empresa@email.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                WhatsApp contacto
              </label>

              <input
                type="text"
                placeholder="+56 9 XXXX XXXX"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Instagram empresa (opcional)
              </label>

              <input
                type="text"
                placeholder="@empresa"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Sitio web (opcional)
              </label>

              <input
                type="text"
                placeholder="www.miempresa.cl"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <h2 className="text-2xl font-bold mt-12 mb-8">
            Información del empleo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-slate-300">
                Cargo ofrecido
              </label>

              <input
                type="text"
                placeholder="Ej: Atención al Cliente"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Categoría empleo
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>Atención al cliente</option>
                <option>Retail / supermercado</option>
                <option>Administración</option>
                <option>Bodega / logística</option>
                <option>Call Center</option>
                <option>Gastronomía</option>
                <option>Ventas</option>
                <option>Limpieza</option>
                <option>Tecnología / Programación</option>
                <option>Diseño</option>
                <option>Marketing digital</option>
                <option>Freelance digital</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Comuna / Ubicación
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">

                <option>Santiago Centro</option>
                <option>Estación Central</option>
                <option>Maipú</option>
                <option>Pudahuel</option>
                <option>Quilicura</option>
                <option>Las Condes</option>
                <option>Providencia</option>
                <option>Ñuñoa</option>
                <option>Macul</option>
                <option>La Florida</option>
                <option>San Bernardo</option>
                <option>Puente Alto</option>
                <option>Quinta Normal</option>
                <option>Independencia</option>
                <option>Recoleta</option>
                <option>Cerrillos</option>
                <option>Lo Prado</option>
                <option>Pedro Aguirre Cerda</option>
                <option>San Miguel</option>
                <option>La Cisterna</option>
                <option>Vitacura</option>
                <option>Lo Barnechea</option>
                <option>Huechuraba</option>
                <option>Peñalolén</option>
                <option>La Reina</option>
                <option>Conchalí</option>
                <option>Renca</option>
                <option>Cerro Navia</option>
                <option>El Bosque</option>
                <option>Lo Espejo</option>
                <option>San Joaquín</option>
                <option>San Ramón</option>
                <option>La Granja</option>
                <option>Colina</option>
                <option>Chicureo</option>
                <option>Lampa</option>
                <option>Padre Hurtado</option>
                <option>Curacaví</option>
                <option>Buin</option>
                <option>Talagante</option>
                <option>Peñaflor</option>
                <option>Melipilla</option>
                <option>Rancagua</option>
                <option>Machalí</option>

              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Modalidad
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>Presencial</option>
                <option>Híbrido</option>
                <option>Remoto</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Jornada laboral
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>Jornada Completa</option>
                <option>Part Time</option>
                <option>Turnos</option>
                <option>Práctica</option>
                <option>Freelance</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Vacantes disponibles
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>1 vacante</option>
                <option>2 vacantes</option>
                <option>3 vacantes</option>
                <option>5 vacantes</option>
                <option>10+ vacantes</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Edad mínima
              </label>

              <input
                disabled
                value="18+ años (solo mayores de edad)"
                className="w-full bg-slate-700 border border-slate-600 rounded-xl p-4 text-slate-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Experiencia requerida
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>Sin experiencia</option>
                <option>Primer empleo</option>
                <option>0 - 1 año</option>
                <option>1 - 2 años</option>
                <option>2+ años</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Tipo de remuneración
              </label>

              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500">
                <option>Sueldo fijo</option>
                <option>Sueldo fijo + horas extras</option>
                <option>Sueldo fijo + propinas</option>
                <option>Sueldo fijo + comisiones</option>
                <option>Por hora</option>
                <option>Part-time remunerado</option>
                <option>Práctica pagada</option>
                <option>A convenir</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-slate-300">
                Fecha límite de postulación
              </label>

              <input
                type="date"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
              />
            </div>

          </div>

          <div className="mt-8">
            <label className="block mb-2 text-slate-300">
              Descripción del empleo
            </label>

            <textarea
              rows={6}
              placeholder="Describe el trabajo, funciones, ambiente laboral y qué aprenderá la persona..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-slate-300">
              Requisitos
            </label>

            <textarea
              rows={4}
              placeholder="Ej: Ganas de aprender, puntualidad, responsabilidad..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-slate-300">
              Beneficios
            </label>

            <textarea
              rows={4}
              placeholder="Ej: Capacitación, colación, propinas, crecimiento laboral..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-5">

            <h2 className="font-bold text-lg mb-3 text-green-400">
              Seguridad MiPrimerEmpleo
            </h2>

            <ul className="space-y-2 text-slate-400">
              <li>✓ No se permiten ofertas engañosas</li>
              <li>✓ No se permiten cobros al postulante</li>
              <li>✓ Hero revisará señales de fraude</li>
              <li>✓ Protección de empresas y candidatos</li>
            </ul>

          </div>

          <div className="mt-6 bg-blue-950 border border-cyan-700 rounded-2xl p-5">
            <h3 className="font-bold text-cyan-400 mb-3">
              Hero revisará automáticamente:
            </h3>

            <ul className="space-y-2 text-slate-300">
              <li>✓ Lenguaje sospechoso</li>
              <li>✓ Ofertas engañosas</li>
              <li>✓ Señales de fraude</li>
              <li>✓ Cobros indebidos</li>
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <input type="checkbox" className="mt-1" />

            <p className="text-sm text-slate-400">
              Confirmo que la información publicada es real y acepto
              las políticas de MiPrimerEmpleo.
            </p>
          </div>

          <button className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition duration-300">
            Enviar a revisión Hero
          </button>

        </div>

      </section>
    </main>
  );
}