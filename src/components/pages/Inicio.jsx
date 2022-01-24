import React from 'react';

   
export const Inicio = () => {
  return   <div id="inicio">
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
            <form>
              <label className="form-label">Nombres y apellidos</label>
              <input
                type="text"
                className="form-control"
                //onChange={(e) => handleFormNombre(e.target.value)}
                //value={nombre}
              />

              <label className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                //onChange={(e) => handleFormNombre(e.target.value)}
                //value={nombre}
              />

              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                //onChange={(e) => handleFormNombre(e.target.value)}
                //value={nombre}
              />

              <label className="form-label">Fecha</label>
              <input
                type="date"
                className="form-control"
                /*onChange={(e) => handleFormNota(e.target.value)}
                value={nota}*/
              /> 
              
              <label className="form-label">Hora</label>
              <input
              type="time"
              className="form-control"
              /*onChange={(e) => handleFormNota(e.target.value)}
              value={nota}*/
            />

              <button id="form-submit" type="submit" className="btn btn-dark">
                Agregar tarea
              </button>
            </form>
        </div>
    </div>

  </div>;
};
