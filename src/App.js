import React,{Fragment, useState, useEffect} from 'react';
import Form from './componentes/Form';
import  './estilos/App.css';
import Cita from './componentes/Cita';


function App() {
  
  //Citas localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales=[];
  }
  
  //Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(()=> {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([] ))
    }
  }, [citas]);


  


  //Funcion  que tome las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }
  
  //Funcion que elimina las citas por su id
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita =>(
      cita.id !== id
    ));
    guardarCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ?'No hay citas' : 'Administra tus citas'
  
  return (
    <Fragment>
      <h1 className='text-center'>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='contenedor-form col-sm-12 col-md-5'>
            <Form
              crearCita={crearCita}
            />
          </div>
          <div className='col-sm-12 col-md-6'>
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
      


    </Fragment>
  );
}

export default App;
