import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import modelo1 from "../public/img/modelo1.jpg";
import modelo2 from "../public/img/modelo2.jpg";
import modelo3 from "../public/img/modelo3.jpg";
import modelo4 from "../public/img/modelo4.jpg";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <main className="main">
          <section className="hero">
            <h2>Construcción de casas a medidas</h2>
            <p>Construimos la casa de tus sueños</p>
            <button>Ver modelos</button>
          </section>

          <section className="models">
            <div>
              <a href="modelo1.html">
                <Image height={241} width={322} src={modelo1} alt="Modelo 1" />
              </a>
              <h3>Modelo 1</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Superficie: 54 metros cuadrados
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  3 Dormitorios, Principal en Suite
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Cocina Americana
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  1 Baño
                </li>
              </ul>
            </div>
            <div>
              <Image height={241} width={322} src={modelo2} alt="Modelo 2" />
              <h3>Modelo 2</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Superficie: en 82 m2 y 110,6 m2
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  4 Dormitorios, Principal en Suite
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  2 Baños
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Cocina Americana
                </li>
              </ul>
            </div>
            <div>
              <Image height={241} width={322} src={modelo3} alt="Modelo 3" />
              <h3>Modelo 3</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Superficie: 120,6 m2
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  5 Dormitorios, Principal en Suite
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  3 Baños
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Cocina Americana
                </li>
              </ul>
            </div>
            <div>
              <Image height={241} width={322} src={modelo4} alt="Modelo 4" />
              <h3>Modelo 4</h3>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Superficie: 159 m2
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  5 Dormitorios, Principal en Suite
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  3 Baños
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style={{ fill: "green" }}
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4 5.6 5.6L20.4 7l-1.4-1.4z" />
                  </svg>
                  Cocina Americana
                </li>
              </ul>
            </div>
          </section>

          <section className="features">
            <div className="bg1">
              <h2>Personalización</h2>
              <p>
                Nos adaptamos a tus necesidades y gustos para construir la casa
                de tus sueños.
              </p>
            </div>
            <div className="bg2">
              <h2>Calidad</h2>
              <p>
                Utilizamos materiales de primera calidad y cuidamos cada detalle
                para garantizar la durabilidad de nuestras construcciones.
              </p>
            </div>
            <div className="bg3">
              <h2>Experiencia</h2>
              <p>
                Contamos con más de 20 años de experiencia en el rubro de la
                construcción, lo que nos permite brindar un servicio de calidad
                y eficiente.
              </p>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}