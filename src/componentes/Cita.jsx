import React from 'react';
import '../estilos/cita.css';

const Cita = ({cita,eliminarCita}) => (
    <div className='citas'>
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Propietario:<span>{cita.propietario}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Hora:<span>{cita.hora}</span></p>
        <p>Síntomas:<span>{cita.sintomas}</span></p>
        <button
            type='button'
            className='button eliminar'
            onClick={()=>eliminarCita(cita.id)}
        >Eliminar Cita</button>
    </div>
); 


 
export default Cita;

