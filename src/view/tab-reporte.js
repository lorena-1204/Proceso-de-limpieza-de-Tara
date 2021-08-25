
export const reportTabla = (data, containerTabla) => {
    data.forEach((e)=>{
        const reporteDiario = document.createElement('tr');
        reporteDiario.innerHTML += `

            <td>${e.nombreOperario}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
         `;
        return containerTabla.appendChild(reporteDiario);
    })
   
}
    
    