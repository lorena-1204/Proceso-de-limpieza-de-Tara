export const productoTabla = (data, containerTablaProductos) => {

    data.forEach((e) => {

        const resultante= document.createElement('tr');

        resultante.innerHTML += `

            <td>${e.fechaTab2}</td>
            <td>${e.turnoTab2}</td>
            <td>${e.fechaRegistroTab2}</td>
            <td>${e.horaTab2}</td>
            <td>${e.ordenFabricacionTab2}</td>
            <td>${e.loteTab2}</td>
            <td>${e.codigoMaterialTab2}</td>
            <td>${e.descripcionTab2}</td>
            <td>${e.medidaTab2}</td>
            <td>${e.kgTab2}</td>
         `;

        return containerTablaProductos.appendChild(resultante);
    })

}

