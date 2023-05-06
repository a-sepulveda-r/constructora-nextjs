import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import FormularioCrud from "@/components/FormularioCrud";
import { useRouter } from "next/router";

const Contacto = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storageUsuario = localStorage.getItem("usuario"); // string
    if (storageUsuario == null) {
      // si no está autenticado
      router.push("/login");
    } else {
      const objetoUsuario = JSON.parse(storageUsuario);
      const token = objetoUsuario.user.stsTokenManager.accessToken;

      const baseUrl = "http://localhost:3000";
      const url = baseUrl + "/usuario/checktoken";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        //body: '{}'
      })
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error("Token no válido");
          }
          setAuthenticated(true);
        })
        .catch((error) => {
          router.push("/login");
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {authenticated ? (
        <Layout>
          <div className="mainContacto">
            <h1>Contacta a un Ejecutivo de ModelHome</h1>
            <FormularioCrud />
          </div>
        </Layout>
      ) : null}
    </>
  );
};

export default Contacto;

// import { useState } from "react";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import { app } from "../config/firebase";

// const Contacto = () => {
//   const [nombre, setNombre] = useState("");
//   const [rut, setRut] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [email, setEmail] = useState("");
//   const [direccion, setDireccion] = useState("");
//   const [comuna, setComuna] = useState("");
//   const [region, setRegion] = useState("");
//   const [asunto, setAsunto] = useState("");

//   const [errors, setErrors] = useState({});

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     let errors = {};

//     if (!nombre.trim()) {
//       errors.nombre = "Por favor ingrese su nombre.";
//     }

//     if (!email.trim()) {
//       errors.email = "Por favor ingrese su email.";
//     }

//     if (!telefono.trim()) {
//       errors.telefono = "Por favor ingrese su teléfono.";
//     }

//     if (!direccion.trim()) {
//       errors.direccion = "Por favor ingrese su dirección.";
//     }

//     if (!comuna.trim()) {
//       errors.comuna = "Por favor seleccione su comuna.";
//     }

//     if (Object.keys(errors).length > 0) {
//       return setErrors(errors);
//     }

//     try {
//       const response = await app.firestore().collection("contacto").add({
//         nombre,
//         rut,
//         telefono,
//         email,
//         direccion,
//         comuna,
//       });
//       console.log("Data has been added to Firestore!", response);
//       alert("¡Gracias por contactarnos!");
//     } catch (error) {
//       console.log("Error adding data to Firestore", error);
//       alert("Ha ocurrido un error, inténtalo de nuevo más tarde.");
//     }

//     setNombre("");
//     setRut("");
//     setTelefono("");
//     setEmail("");
//     setDireccion("");
//     setComuna("");
//     setErrors({});
//   };

//   return (
//     <>
//       <Head>
//         <title>Contacto</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="true"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <Layout>
//         <div className="mainContacto">
//           <h1>Contacta a un Ejecutivo de ModelHome</h1>

//           <form onSubmit={handleSubmit}>
//             <fieldset>
//               <legend>Datos Personales</legend>
//               <div>
//                 <label htmlFor="nombre">Nombre</label>
//                 <input
//                   type="text"
//                   id="nombre"
//                   name="nombre"
//                   value={nombre}
//                   onChange={(event) => setNombre(event.target.value)}
//                 />
//                 <span>{errors.nombre}</span>
//               </div>
//               <div>
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//                 <span>{errors.email}</span>
//               </div>
//               <div>
//                 <label htmlFor="telefono">Teléfono</label>
//                 <input
//                   type="tel"
//                   id="telefono"
//                   name="telefono"
//                   value={telefono}
//                   onChange={(event) => setTelefono(event.target.value)}
//                 />
//                 <span>{errors.telefono}</span>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend>Ubicación</legend>
//               <div>
//                 <label htmlFor="region">Region</label>
//                 <input
//                   type="text"
//                   id="region"
//                   name="region"
//                   value={region}
//                   onChange={(event) => setRegion(event.target.value)}
//                 />
//                 <span>{errors.direccion}</span>
//               </div>
//               <div>
//                 <label htmlFor="comuna">Comuna</label>
//                 <select
//                   name="comuna"
//                   id="comuna"
//                   value={comuna}
//                   onChange={(event) => setComuna(event.target.value)}
//                 >
//                   <option value="">-- Por favor escoja una opción--</option>
//                   <option value="santiago">Santiago</option>
//                   <option value="providencia">Providencia</option>
//                   <option value="la-florida">La Florida</option>
//                   <option value="las-condes">Las Condes</option>
//                   <option value="vitacura">Vitacura</option>
//                 </select>
//                 <span>{errors.comuna}</span>
//               </div>
//               <div>
//                 <label htmlFor="direccion">Dirección</label>
//                 <input
//                   type="text"
//                   id="direccion"
//                   name="direccion"
//                   value={direccion}
//                   onChange={(event) => setDireccion(event.target.value)}
//                 />
//                 <span>{errors.direccion}</span>
//               </div>
//               <div>
//                 <label htmlFor="asunto">Asunto</label>
//                 <textarea
//                   type="text"
//                   id="asunto"
//                   name="asunto"
//                   value={asunto}
//                   onChange={(event) => setAsunto(event.target.value)}
//                 />
//                 <span>{errors.direccion}</span>
//               </div>
//             </fieldset>
//             <div className="botones">
//               <button className="boton bg-success submit" type="submit">
//                 Enviar
//               </button>
//               <button className="boton bg-warning reset" type="reset">
//                 Limpiar
//               </button>
//             </div>
//           </form>
//         </div>
//       </Layout>
//     </>
//   );
// };
// export default Contacto;
