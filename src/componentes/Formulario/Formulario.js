import React from 'react';
import { Formik } from 'formik';
//import Yup from 'yup';
import Clientes from '../Clientes/Clientes';
import './Formulario.css';

let usuarioId = null;

const Formulario = () => (
  <div className='pay-container'>
    <h2>Realizar pago:</h2>
    <div>
      <Formik
        initialValues={{ tipoId: '', numId: '', monto: '', correo: '' }}
        //aqui valida los campos del formulario
        validate={values => {
          const errors = {};
          if (!values.tipoId) {
            errors.tipoId = "Requerido";
          }
          if (!values.numId) {
            errors.numId = "Requerido";
          } else {
            usuarioId = values.numId;
            //alert("Id de consulta:", usuarioId);
          }/*else if (!/^(?!^0+$)[a-zA-Z0-9]{6,9}$/g.test(values.numId)) {//RegEx para pasaportes internacionales
         errors.numId = 'El formato de la identificacion es incorrecta';
        }*/ //Comentado para que permita introducir id del API
          if (!values.monto) {
            errors.monto = "Requerido";
          }
          if (!values.correo) {
            errors.correo = 'Requerido';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo)
          ) {
            errors.correo = 'La dirección de correo electrónico tiene el formato incorrecto';
          }
          /*if (!values.clave) {
            errors.clave = 'Requerida';
          }*/
          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* otros */
        }) => (
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">

                <label>Tipo identificaci&oacute;n:</label>
                <select
                  name="tipoId"
                  value={values.tipoId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" label="-Seleccione-" />
                  <option value="1" label="Nacional" />
                  <option value="2" label="Extranjero" />
                </select>
                {errors.tipoId && touched.tipoId && <span className="errorMsj">{errors.tipoId}</span>}
              </div>

              <div className="form-group">
                <label>N&uacute;mero de identificaci&oacute;n:</label>
                <input name="numId"
                  type="text"
                  value={values.numId}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.numId && touched.numId && <span className="errorMsj">{errors.numId}</span>}
              </div>



              <div className="form-group">
                <label>Monto a cancelar:</label>
                <input name="monto"
                  type="number"
                  value={values.monto}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.monto && touched.monto && <span className="errorMsj">{errors.monto}</span>}
              </div>

              <div className="form-group">
                <label>Correo Electr&oacute;nico:</label>
                <input
                  type="email"
                  name="correo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.correo}
                />
                {errors.correo && touched.correo && <span className="errorMsj">{errors.correo}</span>}
              </div>

              <button className="btn" type="submit" disabled={isSubmitting}>
                Enviar
          </button>
            </form>
          )}
      </Formik>
    </div>

  </div>
);

export default Formulario;
