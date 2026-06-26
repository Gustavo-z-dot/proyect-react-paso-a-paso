"use client";

import Link from "next/link";
import { useEffect, useState } from "react";



export default function LocalSessionPage() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    comentario: "",
  });


  const [busquedaTemporal, setBusquedaTemporal] = useState("");
  const [valorLocalStorage, setValorLocalStorage] = useState("");
  const [valorSessionStorage, setValorSessionStorage] = useState("");


  useEffect(() => {
    
    const formularioGuardado = localStorage.getItem("formulario");

    if (formularioGuardado) {
      let formularioOk = JSON.parse(formularioGuardado)
      setFormulario(formularioOk);
    }

    const busquedaGuardada = sessionStorage.getItem("busquedaTemporal");

    if (busquedaGuardada) {
      setBusquedaTemporal(busquedaGuardada);
    }
  }, []);

  function cambiarNombre(valor: string) {
    // Intentamos una nueva forma de hacer este cambio?


    // const nuevoFormulario = {
    //   ...formulario,
    //   nombre: valor,
    // };
    // setFormulario(nuevoFormulario);
  
    setFormulario( (prevFormulario) => ({
      ...prevFormulario,
      nombre: valor,
    }));


  //  ---------------------
    
    localStorage.setItem("formulario", JSON.stringify(formulario));// 

  }

  function cambiarEmail(valor: string) {
    const nuevoFormulario = {
      ...formulario,
      email: valor,
    };

    setFormulario(nuevoFormulario);
    localStorage.setItem("formulario", JSON.stringify(nuevoFormulario));
  }

  function cambiarComentario(valor: string) {
    const nuevoFormulario = {
      ...formulario,
      comentario: valor,
    };

    setFormulario(nuevoFormulario);
    localStorage.setItem("formulario", JSON.stringify(nuevoFormulario));
  }

  function cambiarBusquedaTemporal(valor: string) {
    setBusquedaTemporal(valor);
    sessionStorage.setItem("busquedaTemporal", valor);
  }

  function leerLocalStorage() {
    const datoGuardado = localStorage.getItem("formulario");

    if (datoGuardado) {
      setValorLocalStorage(datoGuardado);
    } else {
      setValorLocalStorage("No hay formulario guardado en localStorage.");
    }
  }

  function borrarLocalStorage() {
    localStorage.removeItem("formulario");

    setFormulario({
      nombre: "",
      email: "",
      comentario: "",
    });

    setValorLocalStorage("Se borró el formulario del localStorage.");
  }

  function leerSessionStorage() {
    const busquedaGuardada = sessionStorage.getItem("busquedaTemporal");

    if (busquedaGuardada) {
      setValorSessionStorage(busquedaGuardada);
    } else {
      setValorSessionStorage("No hay búsqueda guardada en sessionStorage.");
    }
  }

  function borrarSessionStorage() {
    sessionStorage.removeItem("busquedaTemporal");

    setBusquedaTemporal("");
    setValorSessionStorage("Se borró la búsqueda del sessionStorage.");
  }

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-5xl space-y-10">
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:bg-neutral-800"
          >
            Volver al inicio
          </Link>

          <div>
            <h1 className="text-4xl font-bold text-lime-200">
              LocalStorage y SessionStorage
            </h1>

            <p className="mt-3 text-neutral-300">
              Ambos sirven para guardar datos en el navegador, pero no duran lo
              mismo.
            </p>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-lime-500 bg-lime-950/30 p-5">
            <h2 className="text-2xl font-semibold text-lime-200">
              localStorage
            </h2>

            <p className="mt-3 text-lime-100">
              Guarda datos en el navegador y los mantiene aunque cierres la
              pestaña o el navegador.
            </p>

            <p className="mt-3 text-sm text-lime-100/80">
              Sirve para datos que querés recordar más tiempo, como un
              formulario a medio completar, un carrito o un modo oscuro.
            </p>
          </article>

          <article className="rounded-xl border border-sky-500 bg-sky-950/30 p-5">
            <h2 className="text-2xl font-semibold text-sky-200">
              sessionStorage
            </h2>

            <p className="mt-3 text-sky-100">
              Guarda datos solo mientras esa pestaña siga abierta. Si recargás,
              siguen. Si cerrás la pestaña, se pierden.
            </p>

            <p className="mt-3 text-sm text-sky-100/80">
              Sirve para cosas temporales, como una búsqueda o filtros que no
              querés dejar guardados para siempre.
            </p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Código básico
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
              <h3 className="mb-3 text-xl font-semibold text-lime-200">
                localStorage
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-neutral-200">
                <code>{`// Guardar
localStorage.setItem("nombre", "David");

// Leer
const nombre = localStorage.getItem("nombre");

// Eliminar un dato
localStorage.removeItem("nombre");

// Eliminar todo
localStorage.clear();`}</code>
              </pre>
            </article>

            <article className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
              <h3 className="mb-3 text-xl font-semibold text-sky-200">
                sessionStorage
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-neutral-200">
                <code>{`// Guardar
sessionStorage.setItem("busqueda", "zapatillas");

// Leer
const busqueda = sessionStorage.getItem("busqueda");

// Eliminar un dato
sessionStorage.removeItem("busqueda");

// Eliminar todo
sessionStorage.clear();`}</code>
              </pre>
            </article>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border border-lime-500 bg-lime-950/20 p-6">
          <div>
            <h2 className="text-2xl font-semibold text-lime-200">
              Ejemplo con localStorage
            </h2>

            <p className="mt-2 text-lime-100">
              Este formulario se guarda automáticamente en localStorage. Podés
              escribir, cerrar la pestaña, volver a entrar y los datos van a
              seguir ahí.
            </p>
          </div>

          {/* ACA TENEMOS EL FORMULARIO DEL LOCAL STORAGE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><< */}
          <div className="grid gap-4 md:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-lime-100">
                  Nombre
                </label>

                <input
                  value={formulario.nombre}
                  onChange={(event) => cambiarNombre(event.target.value)}
                  className="w-full rounded-lg border border-lime-700 bg-neutral-950 p-3 text-white outline-none focus:border-lime-400"
                  placeholder="Ej: David"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-lime-100">
                  Email
                </label>

                <input
                  value={formulario.email}
                  onChange={(event) => cambiarEmail(event.target.value)}
                  className="w-full rounded-lg border border-lime-700 bg-neutral-950 p-3 text-white outline-none focus:border-lime-400"
                  placeholder="Ej: david@email.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm text-lime-100">
                  Comentario
                </label>

                <textarea
                  value={formulario.comentario}
                  onChange={(event) => cambiarComentario(event.target.value)}
                  className="min-h-28 w-full rounded-lg border border-lime-700 bg-neutral-950 p-3 text-white outline-none focus:border-lime-400"
                  placeholder="Escribí algo..."
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={leerLocalStorage}
                  className="rounded-lg bg-lime-600 px-4 py-2 font-semibold text-black transition hover:bg-lime-500"
                >
                  Leer localStorage
                </button>

                <button
                  type="button"
                  onClick={borrarLocalStorage}
                  className="rounded-lg border border-lime-500 px-4 py-2 font-semibold text-lime-200 transition hover:bg-lime-900"
                >
                  Borrar localStorage
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <article className="rounded-lg border border-lime-700 bg-neutral-950 p-4">
                <h3 className="font-semibold text-lime-200">
                  Estado actual
                </h3>

                <pre className="mt-3 overflow-x-auto text-sm text-neutral-300">
                  <code>{JSON.stringify(formulario, null, 2)}</code>
                </pre>
              </article>

              <article className="rounded-lg border border-lime-700 bg-neutral-950 p-4">
                <h3 className="font-semibold text-lime-200">
                  Dato leído desde localStorage
                </h3>

                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm text-neutral-300">
                  <code>
                    {valorLocalStorage || "Todavía no leíste el localStorage."}
                  </code>
                </pre>
              </article>
            </div>
          </div>

          <article className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
            <h3 className="mb-3 text-xl font-semibold text-lime-200">
              Qué está pasando
            </h3>

            <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-neutral-200">
              <code>{`// Cuando carga la página
const formularioGuardado = localStorage.getItem("formulario");

if (formularioGuardado) {
  setFormulario(JSON.parse(formularioGuardado));
}

// Cuando cambia un input
const nuevoFormulario = {
  ...formulario,
  nombre: "David",
};

setFormulario(nuevoFormulario);

localStorage.setItem(
  "formulario",
  JSON.stringify(nuevoFormulario)
);`}</code>
            </pre>
          </article>
        </section>

        <section className="space-y-4 rounded-xl border border-sky-500 bg-sky-950/20 p-6">
          <div>
            <h2 className="text-2xl font-semibold text-sky-200">
              Ejemplo con sessionStorage
            </h2>

            <p className="mt-2 text-sky-100">
              Este ejemplo guarda una búsqueda temporal. Si recargás la página,
              la búsqueda sigue. Si cerrás la pestaña y volvés a entrar, se
              pierde.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-sky-100">
                  Búsqueda temporal
                </label>

                <input
                  value={busquedaTemporal}
                  onChange={(event) =>
                    cambiarBusquedaTemporal(event.target.value)
                  }
                  className="w-full rounded-lg border border-sky-700 bg-neutral-950 p-3 text-white outline-none focus:border-sky-400"
                  placeholder="Ej: zapatillas negras"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={leerSessionStorage}
                  className="rounded-lg bg-sky-600 px-4 py-2 font-semibold text-black transition hover:bg-sky-500"
                >
                  Leer sessionStorage
                </button>

                <button
                  type="button"
                  onClick={borrarSessionStorage}
                  className="rounded-lg border border-sky-500 px-4 py-2 font-semibold text-sky-200 transition hover:bg-sky-900"
                >
                  Borrar sessionStorage
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <article className="rounded-lg border border-sky-700 bg-neutral-950 p-4">
                <h3 className="font-semibold text-sky-200">
                  Estado actual
                </h3>

                <pre className="mt-3 overflow-x-auto text-sm text-neutral-300">
                  <code>
                    {JSON.stringify(
                      {
                        busquedaTemporal,
                      },
                      null,
                      2
                    )}
                  </code>
                </pre>
              </article>

              <article className="rounded-lg border border-sky-700 bg-neutral-950 p-4">
                <h3 className="font-semibold text-sky-200">
                  Dato leído desde sessionStorage
                </h3>

                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm text-neutral-300">
                  <code>
                    {valorSessionStorage ||
                      "Todavía no leíste el sessionStorage."}
                  </code>
                </pre>
              </article>
            </div>
          </div>

          <article className="rounded-xl border border-neutral-700 bg-neutral-900 p-5">
            <h3 className="mb-3 text-xl font-semibold text-sky-200">
              Qué está pasando
            </h3>

            <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm text-neutral-200">
              <code>{`// Cuando carga la página
const busquedaGuardada = sessionStorage.getItem("busquedaTemporal");

if (busquedaGuardada) {
  setBusquedaTemporal(busquedaGuardada);
}

// Cuando cambia el input
setBusquedaTemporal("zapatillas");

sessionStorage.setItem(
  "busquedaTemporal",
  "zapatillas"
);`}</code>
            </pre>
          </article>
        </section>

        <section className="rounded-xl border border-neutral-700 bg-neutral-900 p-6">
          <h2 className="text-2xl font-semibold">
            Resumen corto
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
            <li>
              <strong className="text-lime-200">localStorage:</strong>{" "}
              guarda datos aunque cierres el navegador.
            </li>

            <li>
              <strong className="text-sky-200">sessionStorage:</strong>{" "}
              guarda datos solo mientras esa pestaña siga abierta.
            </li>

            <li>
              Para guardar objetos usamos{" "}
              <code className="rounded bg-black px-1 py-0.5">
                JSON.stringify
              </code>.
            </li>

            <li>
              Para recuperar objetos usamos{" "}
              <code className="rounded bg-black px-1 py-0.5">
                JSON.parse
              </code>.
            </li>

            <li>
              Storage no reemplaza a{" "}
              <code className="rounded bg-black px-1 py-0.5">useState</code>.
              El estado maneja lo que se ve en pantalla. El storage guarda datos
              en el navegador.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}