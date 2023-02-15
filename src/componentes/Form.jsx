import React, { Fragment, useState } from 'react';
import '../estilos/form.css';


const Form = ({crearCita}) => {
	//1er state de citas
	const [cita, actualizarCita] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	//Funcion a ejecutar que modifica el state de citas 
	const actualizarState = e =>{
		actualizarCita({
			//Tomamos una copia y despues si agregamos para no perder la referencia
			...cita,
			[e.target.name]: e.target.value
		});
	}

	//Extraemos los valores
	const {mascota, propietario, fecha, hora, sintomas} = cita;
	
	
	//2do state para el error
	const [error, actualizarError] = useState(false)

	

	//Cuando el usuario precione agregar formulario
	const submitCita = e =>{
		e.preventDefault();
		
		//Validar
		if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' 
			|| hora.trim() === '' || sintomas.trim() === '' ){
				
				actualizarError(true)
			return;
		}
		//Eliminar mensaje
		actualizarError(false)

		//Asignar ID
		let ids = Date.now()
		cita.id=ids
		
		//Crear cita
		crearCita(cita);

		//Reniciar el formulario
		actualizarCita({
			mascota: '',
			propietario: '',
			fecha: '',
			hora: '',
			sintomas: ''
		});
	}


    return ( 
        <Fragment>
            <h2 className='h2 text-center'>Crear Cita</h2>
						{ error ? <div className='div d-flex'><p className='p alert alert-danger text-center'>Todos los campos son obligatorios</p></div> :null}
						<form 
							onSubmit={submitCita}
							className='form d-flex flex-column' >
							<label>Nombre Mascota</label>
							<input
								type='text'
								name='mascota'
								className='mx-100'
								placeholder='Nombre Mascota'							
								onChange={actualizarState}
								value={mascota}
							/>
							<label>Nombre Dueño</label>
							<input
								type='text'
								name='propietario'
								className='mx-100'
								placeholder='Nombre Dueño de la mascota'							
								onChange={actualizarState}
								value={propietario}
							/>
							<label>Fecha de Alta</label>
							<input
								type='date'
								name='fecha'
								className='mx-100'							
								onChange={actualizarState}
								value={fecha}
							/>
							<label>Hora</label>
							<input
								type='time'
								name='hora'
								className='mx-100'							
								onChange={actualizarState}
								value={hora}
							/>
							<label>Síntomas</label>
							<textarea
								className='mx-100'
								name='sintomas'
								onChange={actualizarState}
								value={sintomas}
							>	
							</textarea>
							<button
								type='submit'
								className='button mx-100'
							>Agregar Cita</button>
						</form>

        </Fragment>

     );
}
 
export default Form;