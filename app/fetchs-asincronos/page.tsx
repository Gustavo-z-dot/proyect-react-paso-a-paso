"use client";

import { useEffect, useState } from "react";
import useGlobalReducer from "../../context/StoreContext";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type GlobalTodo = Todo & {
  label: string;
};

export default function FetchsAsincronosPage() {

  const { store, dispatch } = useGlobalReducer();
  const todoFromStore = store.todoFetch?.[0] as GlobalTodo | undefined;

  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingGlobalTodo, setLoadingGlobalTodo] = useState(true);

  const [errorUser, setErrorUser] = useState("");
  const [errorPosts, setErrorPosts] = useState("");
  const [errorGlobalTodo, setErrorGlobalTodo] = useState("");

  useEffect(() => {

    const getUser = async () => {

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
          throw new Error("No se pudo traer el usuario");
        }

        const data: User = await response.json();

        setUser(data);
      } catch (error) {
        console.log(error);
        setErrorUser("Hubo un error al traer el usuario");
      } finally {
        setLoadingUser(false);
      }
    };

    getUser();

  }, []);

  useEffect(() => {

    const getPosts = async () => {

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");

        if (!response.ok) {
          throw new Error("No se pudieron traer los posts");
        }

        const data: Post[] = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
        setErrorPosts("Hubo un error al traer los posts");
      } finally {
        setLoadingPosts(false);
      }
    };

    getPosts();

  }, []);

  useEffect(() => {
    const getTodoAndSaveInGlobalState = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
          throw new Error("No se pudo traer el todo");
        }

        const data: Todo = await response.json();
        const todoForGlobalState = {
          ...data,
          label: data.title,
        };

        dispatch({
          type: "SET_TODO_FETCH",
          payload: [todoForGlobalState],
        });
        
      } catch (error) {
        console.log(error);
        setErrorGlobalTodo("Hubo un error al traer el todo para el estado global");
      } finally {
        setLoadingGlobalTodo(false);
      }
    };

    getTodoAndSaveInGlobalState();
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-white">
      <section className="mx-auto max-w-4xl space-y-10">
        <div>
          <h1 className="text-4xl font-bold">
            Fetchs y Asíncronos
          </h1>

          <p className="mt-3 text-neutral-300">
            Ejemplos con fetch real, async/await, useEffect, estados locales,
            arrays mapeados y dispatch al estado global.
          </p>
        </div>

        <section className="rounded-xl border border-sky-500 bg-sky-950/30 p-6">
          <h2 className="text-2xl font-semibold text-sky-200">
            1. Pedido simple de un usuario
          </h2>

          <p className="mt-2 text-sky-100">
            Este ejemplo ejecuta un fetch dentro de un useEffect, guarda el resultado
            en un estado local objeto y renderiza algunos datos del usuario.
          </p>

          <div className="mt-5">
            {loadingUser && (
              <p className="text-neutral-300">
                Cargando usuario...
              </p>
            )}

            {errorUser && (
              <p className="text-red-300">
                {errorUser}
              </p>
            )}

            {user && (
              <article className="rounded-lg border border-sky-400 bg-neutral-900 p-5">
                <h3 className="text-xl font-bold text-sky-200">
                  {user.name}
                </h3>

                <p className="mt-2 text-neutral-300">
                  Username: {user.username}
                </p>

                <p className="text-neutral-300">
                  Email: {user.email}
                </p>

                <p className="text-neutral-300">
                  Teléfono: {user.phone}
                </p>

                <p className="text-neutral-300">
                  Web: {user.website}
                </p>
              </article>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-violet-500 bg-violet-950/30 p-6">
          <h2 className="text-2xl font-semibold text-violet-200">
            2. Pedido de una lista de posts
          </h2>

          <p className="mt-2 text-violet-100">
            Este ejemplo usa otro useEffect independiente. Trae un array de objetos,
            lo guarda en un estado local array y después lo renderiza con map.
          </p>

          <div className="mt-5 space-y-4">
            {loadingPosts && (
              <p className="text-neutral-300">
                Cargando posts...
              </p>
            )}

            {errorPosts && (
              <p className="text-red-300">
                {errorPosts}
              </p>
            )}

            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-lg border border-violet-400 bg-neutral-900 p-5"
              >
                <h3 className="text-lg font-bold text-violet-200">
                  {post.title}
                </h3>

                <p className="mt-2 text-neutral-300">
                  {post.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-emerald-500 bg-emerald-950/30 p-6">
          <h2 className="text-2xl font-semibold text-emerald-200">
            3. Fetch guardado en estado global
          </h2>

          <p className="mt-2 text-emerald-100">
            Este ejemplo trae un dato con fetch, pero en vez de guardarlo con useState,
            lo guarda en el estado global usando dispatch.
          </p>

          <p className="mt-2 text-emerald-100">
            Después se lee desde el store usando store.todoFetch.
          </p>

          <div className="mt-5">
            {loadingGlobalTodo && (
              <p className="text-neutral-300">
                Cargando dato global...
              </p>
            )}

            {errorGlobalTodo && (
              <p className="text-red-300">
                {errorGlobalTodo}
              </p>
            )}

            {todoFromStore && (
              <article className="rounded-lg border border-emerald-400 bg-neutral-900 p-5">
                <h3 className="text-xl font-bold text-emerald-200">
                  {todoFromStore.label}
                </h3>

                <p className="mt-2 text-neutral-300">
                  ID del todo: {todoFromStore.id}
                </p>

                <p className="text-neutral-300">
                  Usuario relacionado: {todoFromStore.userId}
                </p>

                <p className="text-neutral-300">
                  Completado: {todoFromStore.completed ? "Sí" : "No"}
                </p>
              </article>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}