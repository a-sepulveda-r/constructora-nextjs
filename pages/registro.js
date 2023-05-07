import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import houseForm from "../public/img/house-form.png";
import Swal from "sweetalert2";

const Registro = () => {
  const router = useRouter();

  const handleFormSubmit = async (eventoSubmit) => {
    eventoSubmit.preventDefault();
    const formElement = eventoSubmit.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const contrasena = formData.get("contrasena");
    const nuevoUsuario = {
      email,
      contrasena,
    };
    const baseUrl = "https://earthy-north-theory.glitch.me/";
    const url = baseUrl + "/registro";
    const fetchConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    };
    try {
      const respuesta = await fetch(url, fetchConfig);
      if (!respuesta.ok) {
        console.error("La respuesta no está OK");
        return;
      }
      const objetoJson = await respuesta.json();
      console.dir(objetoJson);
      Swal.fire({
        icon: "success",
        title: "Usuario creado exitosamente",
        text: "Ya puedes iniciar sesión con tu nuevo usuario",
      });
      router.push("/login"); // Redirigir a la página /login
    } catch (error) {
      console.error(error.code);
      console.error(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Registro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="form-container">
          <div className="form-img">
            <Image
              height={241}
              width={322}
              src={houseForm}
              alt="Modelo de casa"
              className="form-img01"
            />
          </div>
          <div className="div-form">
            <h2>
              Regista tu interés en <strong>ModelHome</strong>
            </h2>
            <form className="form-container2" onSubmit={handleFormSubmit}>
              <fieldset>
                <p>Datos personales</p>
                <div>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                  <label htmlFor="nombre">Rut</label>
                  <input type="text" id="rut" name="rut" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="contrasena">Contraseña</label>
                  <input
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    required
                  />
                </div>
                <div className="botones">
                  <button className="boton bg-success submit" type="submit">
                    Registrar
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Registro;

// import Layout from "@/components/Layout";
// import Head from "next/head";
// import Image from "next/image";
// import houseForm from "../public/img/house-form.png";
// import { useState, useContext } from "react";
// import { useRouter } from "next/router";
// import AuthContext from "../context/authContext";

// const Registro = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const { register } = useContext(AuthContext);

//   const handleRegistro = async (e) => {
//     e.preventDefault();
//     try {
//       await register(email, password);
//       router.push("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Registro</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <Layout>
//         <div className="form-container">
//           <div className="form-img">
//             <Image
//               height={241}
//               width={322}
//               src={houseForm}
//               alt="Modelo de casa"
//               className="form-img01"
//             />
//           </div>
//           <div className="div-form">
//             <h2>
//               Regista tu interés en <strong>ModelHome</strong>
//             </h2>
//             <form onSubmit={handleRegistro} className="form-container2">
//               <fieldset>
//                 <p>Datos personales</p>
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="contrasena">Contraseña</label>
//                   <input
//                     type="password"
//                     id="contrasena"
//                     name="contrasena"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div className="botones">
//                   <button className="boton bg-success submit" type="submit">
//                     Registrar
//                   </button>
//                 </div>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Registro;
