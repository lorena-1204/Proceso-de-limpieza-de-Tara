import { getreporte, reporte } from '../firebase/controller-firestore.js'
import { reportTabla } from './tab-reporte.js';
export default () => {
    const templateInsumo = document.createElement('section');
    const viewInsumo = `
    <article>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href=""> Reporte diario </a>
        </li>

        <li class="nav-item" id = "producto">
          <a class="nav-link" href="#/ProductoFinal"> Producción Resultante </a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

<article>

</article>

<article class="tab">
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputNombreOperario" class="form-label">Nombre de Operario</label>
    <input type="text" class="form-control" id="inputNombreOperario" autofocus required>
  </div>
  <div class="col-md-6">
    <label for="inputCodigoOperario" class="form-label">Código del Operario</label>
    <input type="text" class="form-control" id="inputCodigoOperario" required>
  </div>


  <div class="col-md-3">
    <label for="inputFecha" class="form-label"> Fecha </label>
    <input type="date" class="form-control" id="inputFecha" required>
  </div>
  <div class="col-md-3">
    <label for="inputTurno" class="form-label">Turno</label>
    <select id="inputTurno" class="form-select">
      <option selected> 1 </option>
      <option> 2 </option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputFechaRegistro" class="form-label">Fecha de Registro </label>
    <input type="date" required class="form-control" id="inputFechaRegistro" required>
  </div>
   <div class="col-md-3">
    <label for="inputHora" class="form-label">Hore </label>
    <input type="time" class="form-control" id="inputHora" required>
  </div>

    <div class="col-md-2">
    <label for="inputOrdenFabricacion" class="form-label">N° Orden de fabricación </label>
    <input type="number" class="form-control" id="inputOrdenFabricacion" required>
  </div>
  <div class="col-md-2">
    <label for="inputLote" class="form-label">N°Lote de MP</label>
    <input type="number" class="form-control" id="inputLote" required>
  </div>
  <div class="col-md-2">
    <label for="inputCodigoMaterial" class="form-label">Código de material</label>
    <input type="text" class="form-control" id="inputCodigoMaterial" required>
  </div>
  <div class="col-md-2">
    <label for="inputDescripcion" class="form-label">Descripción</label>
    <input type="text" class="form-control" id="inputDescripcion" required>
  </div>
  <div class="col-md-2">
    <label for="inputMedida" class="form-label">Unidad de Medida</label>
    <input type="text" class="form-control" id="inputMedida" required>
  </div>
   <div class="col-md-2">
    <label for="inputKg" class="form-label">KG</label>
    <input type="number" class="form-control" id="inputKg" required required>
  </div>
 

  <div class="col-12">
    <input type="submit" class="btn btn-primary" id="boton" value = " Guardar" />
  </div>
</form>
</article>

 </article>
<table class="table table-bordered border-primary">
    <thead>
        <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Turno</th>
            <th scope="col">Fecha Registro</th>
            <th scope="col">Hora</th>
            <th scope="col">Código Operario</th>
            <th scope="col">Nombre de Operario</th>
            <th scope="col">N° Orden de Fabricación</th>
            <th scope="col">N° Lote de MP</th>
            <th scope="col">Código de material</th>
            <th scope="col">Descripción</th>
            <th scope="col">Und. Med.</th>
            <th scope="col">Kg</th>
        </tr>
    </thead>
    <tbody id="tabla-cuerpo">
        
    </tbody>
</table>
    `;
    templateInsumo.innerHTML = viewInsumo;
    const btn = templateInsumo.querySelector('#boton');
    const nombre = templateInsumo.querySelector("#inputNombreOperario");
    const inputCodigoOperario = templateInsumo.querySelector("#inputCodigoOperario")
    const fecha = templateInsumo.querySelector("#inputFecha")
    const turno = templateInsumo.querySelector("#inputTurno")
    const fechaRegistro = templateInsumo.querySelector("#inputFechaRegistro")
    const hora = templateInsumo.querySelector("#inputHora")
    const ordenFabricacion = templateInsumo.querySelector("#inputOrdenFabricacion")
    const lote = templateInsumo.querySelector("#inputLote")
    const codigoMaterial = templateInsumo.querySelector("#inputCodigoMaterial")
    const descripcion = templateInsumo.querySelector("#inputDescripcion")
    const medida = templateInsumo.querySelector("#inputMedida")
    const kilogramos = templateInsumo.querySelector("#inputKg")

    btn.addEventListener('click', (e) => {
      e.preventDefault()
        reporte(
            nombre.value,
            inputCodigoOperario.value,
            fecha.value,
            turno.value,
            fechaRegistro.value,
            hora.value,
            ordenFabricacion.value,
            lote.value,
            codigoMaterial.value,
            descripcion.value,
            medida.value,
            kilogramos.value,
        );
        console.log(nombre.value);
        console.log('boton');

        //limpiar valores 
            nombre.value = '',
                inputCodigoOperario.value = '',
                fecha.value = '',
                turno.value = '',
                fechaRegistro.value = '',
                hora.value = '',
                ordenFabricacion.value = '',
                lote.value = '',
                codigoMaterial.value = '',
                descripcion.value = '',
                medida.value = '',
                kilogramos.value = ''
    });
  const cuerpoTabla = templateInsumo.querySelector('#tabla-cuerpo');

  getreporte((report) => {
    console.log(cuerpoTabla);
    
    console.log('hola');
    cuerpoTabla.innerHTML = '';
    reportTabla(report, cuerpoTabla);
  });

    return templateInsumo;
};
