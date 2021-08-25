import { getProductos, resultanteDos } from "../firebase/controller-firestore.js";
import { productoTabla } from "./tab-producto.js";

export default () => {
  const templateProductoFinal = document.createElement('section');
  const viewProductoFinal = `
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

<article class="tab">
<form id="formulario" class="row g-3>
  <div class="col-md-3">
    <label for="inputFechaTab2" class="form-label"> Fecha </label>
    <input type="date" class="form-control" id="inputFechaTab2" autofocus required>
  </div>
  <div class="col-md-3">
    <label for="inputTurnoTab2" class="form-label">Turno</label>
    <select id="inputTurnoTab2" class="form-select" >
      <option selected> 1 </option>
      <option> 2 </option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="inputFechaRegistroTab2" class="form-label">Fecha de Registro </label>
    <input type="date" class="form-control" id="inputFechaRegistroTab2" required>
  </div>
   <div class="col-md-3">
    <label for="inputHoraTab2" class="form-label">Hora </label>
    <input type="time" class="form-control" id="inputHoraTab2" required>
  </div>

    <div class="col-md-2">
    <label for="inputOrdenFabricacionTab2" class="form-label">N° Orden de fabricación </label>
    <input type="number" class="form-control" id="inputOrdenFabricacionTab2" required>
  </div>
  <div class="col-md-2">
    <label for="inputLoteTab2" class="form-label">N°Lote de PT</label>
    <input type="number" class="form-control" id="inputLoteTab2" required>
  </div>
  <div class="col-md-2">
    <label for="inputCodigoMaterialTab2" class="form-label">Código de material</label>
    <input type="text" class="form-control" id="inputCodigoMaterialTab2" required>
  </div>
  <div class="col-md-2">
    <label for="inputDescripcionTab2" class="form-label">Descripción</label>
    <input type="text" class="form-control" id="inputDescripcionTab2" required>
  </div>
  <div class="col-md-2">
    <label for="inputMedidaTab2" class="form-label">Unidad de Medida</label>
    <input type="text" class="form-control" id="inputMedidaTab2" required>
  </div>
   <div class="col-md-2">
    <label for="inputKgTab2" class="form-label">KG</label>
    <input type="number" class="form-control" id="inputKgTab2" required>
  </div>

    <div class="col-12">
    <input type="submit" name="boton" class="btn btn-primary form-control"  value="Guardar">
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
            <th scope="col">N° Orden de Fabricación</th>
            <th scope="col">N° Lote de PT</th>
            <th scope="col">Código de material</th>
            <th scope="col">Descripción</th>
            <th scope="col">Und. Med.</th>
            <th scope="col">Kg</th>
        </tr>
    </thead>
    <tbody id="tabla-cuerpoProduct">

    </tbody>
</table>
    `;

  templateProductoFinal.innerHTML = viewProductoFinal;
  const formProducto = templateProductoFinal.querySelector("#formulario");


  const fechaTab2 = templateProductoFinal.querySelector("#inputFechaTab2")
  const turnoTab2 = templateProductoFinal.querySelector("#inputTurnoTab2")
  const fechaRegistroTab2 = templateProductoFinal.querySelector("#inputFechaRegistroTab2")
  const horaTab2 = templateProductoFinal.querySelector("#inputHoraTab2")
  const ordenFabricacionTab2 = templateProductoFinal.querySelector("#inputOrdenFabricacionTab2")
  const loteTab2 = templateProductoFinal.querySelector("#inputLoteTab2")
  const codigoMaterialTab2 = templateProductoFinal.querySelector("#inputCodigoMaterialTab2")
  const descripcionTab2 = templateProductoFinal.querySelector("#inputDescripcionTab2")
  const medidaTab2 = templateProductoFinal.querySelector("#inputMedidaTab2")
  const kilogramosTab2 = templateProductoFinal.querySelector("#inputKgTab2")

  formProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    resultanteDos(
      fechaTab2.value,
      turnoTab2.value,
      fechaRegistroTab2.value,
      horaTab2.value,
      ordenFabricacionTab2.value,
      loteTab2.value,
      codigoMaterialTab2.value,
      descripcionTab2.value,
      medidaTab2.value,
      kilogramosTab2.value,
    );

    //limpiar valores 
    fechaTab2.value = '',
      turnoTab2.value = '',
      fechaRegistroTab2.value = '',
      horaTab2.value = '',
      ordenFabricacionTab2.value = '',
      loteTab2.value = '',
      codigoMaterialTab2.value = '',
      descripcionTab2.value = '',
      medidaTab2.value = '',
      kilogramosTab2.value = ''
  });

  const cuerpoTablaProducto = templateProductoFinal.querySelector('#tabla-cuerpoProduct');


  getProductos((productFin) => {
  
    productoTabla(productFin, cuerpoTablaProducto);
    
  });

  return templateProductoFinal;
};
