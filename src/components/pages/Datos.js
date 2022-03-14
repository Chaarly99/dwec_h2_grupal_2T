import "../App.css";
import Data from '../data/data.json';

const Datos = () => {
    return(
        <div className="page-heading">
            <div className='jsondata'>
                <table class="table text-white">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Año Nacimiento</th>
                        </tr>
                    </thead>
                {Data.sort((a, b) => a.nombre.localeCompare(b.nombre)).map(data =>{
                    return(
                        <>  
                        <tbody>
                            <tr>
                            <th scope="row" key={data.id}/>
                                <td>{data.nombre}</td>
                                <td>{data.apellido1}</td>
                                <td>{data.edad}</td>
                                <td>{data.anio_nac}</td>
                            </tr>
                        </tbody>
                        </>
                    )
                })}
                </table>
            </div>
        </div>
    )
};

export default Datos;