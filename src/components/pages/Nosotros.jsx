import React from 'react';
import map from '../maps/maps';
import gaston from '../../images/gaston.jpg'

export const Nosotros = () => {
  return <div id="nosotros">   

        <div className="row">
              <div id="izquierda" className="col-sm-6 col-xs-12">
                <h2>¿Quiénes somos?</h2>
                <p>Somos un restaurante criollo fundada en Lima, brindando nuestros servicios desde 1988. Además contamos con el reconocimiento del gran chef peruano Gaston Acurio.</p>
              </div>
              <div id="derecha" className="col-sm-6 col-xs-12 inicio-intro">
                  <img className='img' src={gaston} alt="" />
              </div>
        </div>

  </div>;
};
