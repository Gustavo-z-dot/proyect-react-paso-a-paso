import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold">
            Clase de React con Next
          </h1>

          <p className="mt-3 text-neutral-300">
            Accesos a los ejemplos de la clase, en el orden en que los vamos a ver.
          </p>
        </div>

        <nav className="grid gap-4">
          <Link
            href="/variable-vs-estado"
            className="rounded-xl border border-red-500 bg-red-950/40 p-5 transition hover:bg-red-900"
          >
            <h2 className="text-xl font-semibold text-red-200">
              1. Variable normal vs estado local
            </h2>

            <p className="mt-2 text-red-100">
              Comparación entre una variable let y un estado con useState.
            </p>
          </Link>

          <Link
            href="/eventos"
            className="rounded-xl border border-blue-500 bg-blue-950/40 p-5 transition hover:bg-blue-900"
          >
            <h2 className="text-xl font-semibold text-blue-200">
              2. Eventos: onClick y onChange
            </h2>

            <p className="mt-2 text-blue-100">
              Diferentes formas de ejecutar handlers y recibir eventos.
            </p>
          </Link>

          <Link
            href="/padre"
            className="rounded-xl border border-yellow-500 bg-yellow-950/40 p-5 transition hover:bg-yellow-900"
          >
            <h2 className="text-xl font-semibold text-yellow-200">
              3. Padre e hijo con props
            </h2>

            <p className="mt-2 text-yellow-100">
              El padre maneja estados locales y se los pasa al hijo.
            </p>
          </Link>

          <Link
            href="/ternarioyshort"
            className="rounded-xl border border-purple-500 bg-purple-950/40 p-5 transition hover:bg-purple-900"
          >
            <h2 className="text-xl font-semibold text-purple-200">
              4. Ternario y short circuit
            </h2>

            <p className="mt-2 text-purple-100">
              Renderizado condicional usando un objeto en estado local.
            </p>
          </Link>

          <Link
            href="/use-effect"
            className="rounded-xl border border-green-500 bg-green-950/40 p-5 transition hover:bg-green-900"
          >
            <h2 className="text-xl font-semibold text-green-200">
              5. useEffect
            </h2>

            <p className="mt-2 text-green-100">
              Ejemplos simples de efectos, dependencias y limpieza al desmontar.
            </p>
          </Link>

          <Link
            href="/mapeos"
            className="rounded-xl border border-pink-500 bg-pink-950/40 p-5 transition hover:bg-pink-900"
          >
            <h2 className="text-xl font-semibold text-pink-200">
              6. Mapeos con map
            </h2>

            <p className="mt-2 text-pink-100">
              Renderizado de listas usando función flecha, cards y key con index.
            </p>
          </Link>

          <Link
            href="/estado-global"
            className="rounded-xl border border-cyan-500 bg-cyan-950/40 p-5 transition hover:bg-cyan-900"
          >
            <h2 className="text-xl font-semibold text-cyan-200">
              7. Estado global con Context + Reducer
            </h2>

            <p className="mt-2 text-cyan-100">
              Guía paso a paso para crear un estado global usando context, reducer,
              provider y dispatch.
            </p>
          </Link>

          <Link
            href="/padre2"
            className="rounded-xl border border-orange-500 bg-orange-950/40 p-5 transition hover:bg-orange-900"
          >
            <h2 className="text-xl font-semibold text-orange-200">
              8. Herencia 2.0 (children)
            </h2>

            <p className="mt-2 text-orange-100">
              El padre renderiza al hijo y le pasa contenido entre la apertura y el cierre.
            </p>
          </Link>

          <Link
            href="/search-params?category=shoes"
            className="rounded-xl border border-teal-500 bg-teal-950/40 p-5 transition hover:bg-teal-900"
          >
            <h2 className="text-xl font-semibold text-teal-200">
              9. Search Params
            </h2>

            <p className="mt-2 text-teal-100">
              Leer datos desde la URL usando useSearchParams y filtrar productos.
            </p>
          </Link>

          <Link
            href="/ventas"
            className="rounded-xl border border-indigo-500 bg-indigo-950/40 p-5 transition hover:bg-indigo-900"
          >
            <h2 className="text-xl font-semibold text-indigo-200">
              10. Dynamic Params: useParams
            </h2>

            <p className="mt-2 text-indigo-100">
              Navegar a una URL dinámica como /ventas/7 y rescatar el id desde la ruta.
            </p>
          </Link>

          <Link
            href="/local-session"
            className="rounded-xl border border-lime-500 bg-lime-950/40 p-5 transition hover:bg-lime-900"
          >
            <h2 className="text-xl font-semibold text-lime-200">
              11. LocalStorage y SessionStorage
            </h2>

            <p className="mt-2 text-lime-100">
              Guardar, leer y eliminar datos del navegador. Formulario persistente
              con localStorage y ejemplo temporal con sessionStorage.
            </p>
          </Link>
        </nav>
      </section>
    </main>
  );
}