
export const reportTabla = (data, containerTabla) => {
    data.forEach((e)=>{

        const reporteDiario = document.createElement('tr');
       
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
         `;

        return containerTabla.appendChild(reporteDiario);
    })
   
}
    
    