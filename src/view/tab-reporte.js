
export const reportTabla = (data, containerTabla) => {
    console.log(containerTabla);
    data.forEach((e)=>{

        const reporteDiario = document.createElement('tr');

        console.log(reporteDiario);
        console.log('hola');
        reporteDiario.innerHTML += `

            <td>${e.nombreOperario}</td>
            <td>${e.codigoOperario}</td>
            <td>${e.fecha}</td>
            <td>${e.turno}</td>
            <td>${e.fechaRegistro}</td>
            <td>${e.hora}</td>
            <td>${e.ordenFabricacion}</td>
            <td>${e.lote}</td>
            <td>${e.codigoMaterial}</td>
            <td>${e.descripcion}</td>
            <td>${e.medida}</td>
            <td>${e.kg}</td>
            <td>
            <button id="editar" value ="${e.id}">
            editar
            </button>

            <button id="eliminar" value ="${e.id}">
            eliminar
            </button>
            </td>
         `;

        // const editarTab = reporteDiario.querySelector('#editar');
        // editarTab.addEventListener('click',(e) =>{
        //     const idReport = e.value;
        //     ditReporte(
                
        //     )
        // })

        return containerTabla.appendChild(reporteDiario);
    })
   
}
    
    