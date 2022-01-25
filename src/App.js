import "./style.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/pages/Inicio";
import { Menu } from "./components/pages/Menu";
import { Nosotros } from "./components/pages/Nosotros";
import { Configuracion } from "./components/pages/Configuracion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { dbConfig } from "./config/firebase";
import { async } from "@firebase/util";

function App() {
  const [listadoReservas, setListaReservas] = useState([]);
  const [listadoProductos, setListaProductos] = useState([]);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState({ nombre: "" });
  const [descripcion, setDescripcion] = useState({ descripcion: "" });
  const [precio, setPrecio] = useState({ precio: "" });
  const [url, setUrl] = useState({ url: "" });


  const [cliente, setCliente] = useState({ cliente: "" });
  const [correo, setCorreo] = useState({ correo: "" });
  const [telefono, setTelefono] = useState({ telefono: "" });
  const [fecha, setFecha] = useState({ fecha: "" });
  const [hora, setHora] = useState({ hora: "" });

  const [esEditar, setEsEditar] = useState(false);

  const obtenerPlatos = async () => {
    try {
      const db = collection(dbConfig, "productos");
      const listadoProductos = await getDocs(db);
      const listadoFinal = listadoProductos.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setListaProductos(listadoFinal);
    } catch (error) {
      console.log("Hubo un error!");
      console.log(error);
    }
  };

  useEffect(() => {
    const obtenerReservas = async () => {
      try {
        const db = collection(dbConfig, "reservas");
        const listadoReservas = await getDocs(db);
        const listadoFinal = listadoReservas.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setListaReservas(listadoFinal);
      } catch (error) {
        console.log("Hubo un error!");
        console.log(error);
      }
    };
    obtenerPlatos();
    obtenerReservas();
  }, []);

  useEffect(() => {}, []);

  const submit = (e) => {
    e.preventDefault();
    if (esEditar) {
      actualizarDB();
    } else {
      guardarPlato();
    }
  };

  const guardarPlato = async () => {
    try {
      const datoAguardar = {
        nombre,
        descripcion,
        precio,
        url,
      };

      const db = collection(dbConfig, "productos");
      const item = await addDoc(db, datoAguardar);
      setListaProductos([
        ...listadoProductos,
        { id: item.id, nombre, descripcion, precio, url },
      ]);
    } catch (error) {
      console.log("Hubo un error");
      console.log(error);
    }
  };

  const handleFormNombre = (texto) => {
    setNombre(texto);
  };

  const handleFormDescripcion = (texto) => {
    setDescripcion(texto);
  };

  const handleFormPrecio = (texto) => {
    setPrecio(texto);
  };

  const handleFormUrl = (texto) => {
    setUrl(texto);
  };


  const handleFormCliente = (texto) => {
    setCliente(texto);
  };

  const handleFormCorreo = (texto) => {
    setCorreo(texto);
  };

  const handleFormTelefono= (texto) => {
    setTelefono(texto);
  };

  const handleFormFecha = (texto) => {
    setFecha(texto);
  };

  const handleFormHora = (texto) => {
    setHora(texto);
  };

  const editarPlato = (item) => {
    setEsEditar(true);
    setNombre(item.nombre);
    setDescripcion(item.descripcion);
    setPrecio(item.precio);
    setUrl(item.url);
    setId(item.id);
  };

  const actualizarDB = async () => {
    try {
      const datosActualizar = {
        nombre,
        descripcion,
        precio,
        url,
      };
      const config = doc(dbConfig, "productos", id);
      await updateDoc(config, datosActualizar);
      obtenerPlatos();
    } catch (error) {
      console.log("Hubo un error");
      console.log(error);
    }
  };

  const eliminarPlato = async (item) => {
    try {
      const config = doc(dbConfig, "productos", item.id);
      await deleteDoc(config);
      obtenerPlatos();

    } catch (error) {
      console.log("Hubo un error");
      console.log(error);
    }
  };

  const guardarReserva = async () => {
    try {
      const datoAguardar = {
        cliente,
        correo,
        telefono,
        fecha,
        hora,
      };
      const db = collection(dbConfig, "reservas");
      const item = await addDoc(db, datoAguardar);
      setListaReservas([
        ...listadoReservas,
        { id: item.id, cliente, correo, telefono, fecha, hora },
      ]);
    } catch (error) {
      console.log("Hubo un error");
      console.log(error);
    }
  };

  const guardarReservaSubmit = (e) => {
    e.preventDefault();
    guardarReserva();
  };

  return (
    <Router>
      <Header />
      <div className="container-wrap">       
        <Switch>
          <Route path="/pages/Configuracion">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <h2>{esEditar ? "Editar plato" : "Agregar plato"}</h2>
                <form onSubmit={submit}>
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleFormNombre(e.target.value)}
                    value={nombre}
                  />

                  <label className="form-label" rows="10">
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleFormDescripcion(e.target.value)}
                    value={descripcion}
                  />

                  <label className="form-label">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => handleFormPrecio(e.target.value)}
                    value={precio}
                  />

                  <label className="form-label">URL</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleFormUrl(e.target.value)}
                    value={url}
                  />

                  <button type="submit" className="btn btn-dark">
                    {esEditar ? "Editar" : "Registrar"}
                  </button>
                </form>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div id="list-product">
                  <h2>Listado de platos</h2>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {listadoProductos.map((item) => (
                        <tr key={item.id}>
                          <th scope="row"> {item.nombre} </th>
                          <td>
                            {" "}
                            <button
                              className="btn btn-warning"
                              onClick={() => editarPlato(item)}
                            >
                              Editar
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => eliminarPlato(item)}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="book">
                <div id="list-product">
                  <h2>Listado de Reservas</h2>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Cliente</th>
                        <th className="desaparecer" scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listadoReservas.map((item) => (
                        <tr key={item.id}>
                          <th scope="row"> {item.cliente} </th>
                          <th className="desaparecer" scope="row"> {item.correo} </th>
                          <th scope="row"> {item.telefono} </th>
                          <th scope="row"> {item.fecha} </th>
                          <th scope="row"> {item.hora} </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/pages/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/pages/Menu">
            <Menu />

            <div id="card-content">
              {listadoProductos.map((item) => (
                <div key={item.id} className="card">
                  <div className="card-body">
                    <h5 className="card-title"> {item.nombre}</h5>
                    <p className="card-text"> {item.descripcion}</p>
                    <img src={item.url} />
                    <p className="card-text">
                      {" "}
                      <span>Precio:</span> S/.{item.precio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          <Route path="/" exact>
          <div id="inicio">
    <div id="index" className="row">
      <div className="col-sm-6 col-xs-12">
          <img className='inicio-img' src="https://img-global.cpcdn.com/recipes/db3c4c121ae53201/1200x630cq70/photo.jpg" alt="" />
      </div>
      <div className="col-sm-6 col-xs-12 inicio-intro">
        <div>
          <h1>Criollón</h1> 
          <p>Somos un restaurante criollo de comida peruana, caracterizados por la alta calidad y variedad de nuestros platos.</p>
        </div>
      </div>
    </div>
    <div id="inicio-reserva" className="row">

        <div className="col-sm-6 col-xs-12">
            <h2>Haz tu reserva!</h2>
            <p>Ten un momento agradable con la mejor comida ya sea solo o acompañado. Para ello, ingresa tus datos indicandonos el dia y la hora de tu reserva.</p>
        </div>

        <div className="col-sm-6 col-xs-12">
              <h2>Registrar reserva</h2>         
              <form onSubmit={guardarReservaSubmit}>
                <label className="form-label">Nombres y apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleFormCliente(e.target.value)}
                  value={cliente}
                />

                <label className="form-label">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => handleFormCorreo(e.target.value)}
                  value={correo}
                />

                <label className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className="form-control"
                  onChange={(e) => handleFormTelefono(e.target.value)}
                  value={telefono}
                />

                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => handleFormFecha(e.target.value)}
                  value={fecha}
                /> 
                
                <label className="form-label">Hora</label>
                <input
                type="time"
                className="form-control"
                onChange={(e) => handleFormHora(e.target.value)}
                value={hora}
              />

                <button id="form-submit" type="submit" className="btn btn-dark">
                  Agregar tarea
                </button>
              </form>
          </div>
      </div>

    </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
