/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

export const reporte = (nombre, inputCodigoOperario, fecha, turno, fechaRegistro, hora, ordenFabricacion, lote, codigoMaterial, descripcion, medida, kilogramos) => firebase.firestore().collection("reporteDiario").add({
    nombreOperario: nombre,
    codigoOperario: inputCodigoOperario,
    fecha: fecha,
    turno: turno,
    fechaRegistro: fechaRegistro,
    hora: hora,
    ordenFabricacion: ordenFabricacion,
    lote: lote,
    codigoMaterial: codigoMaterial,
    descripcion: descripcion,
    medida: medida,
    kg: kilogramos
})

//guardar los valores
export const getReporte = (callback) => {
    const db = firebase.firestore();
    return db.collection('reporteDiario').orderBy('fecha', 'desc')
        // querySnapshot es una colección de post (doc)
        // Obtener en tiempo real los datos del doc
        .onSnapshot((querySnapshot) => {
            const reportes = [];
            querySnapshot.forEach((doc) => {
                reportes.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            callback(reportes);
        });
};

// Elimina un post
export const deleteReporte = (id) => firebase.firestore().collection('reporteDiario').doc(id).delete();

//editar
export const editReporte = (nombre, inputCodigoOperario, fecha, turno, fechaRegistro, hora, ordenFabricacion, lote, codigoMaterial, descripcion, medida, kilogramos,id) => firebase.firestore().collection('reporteDiario').doc(id).update({
    nombreOperario: nombre,
    codigoOperario: inputCodigoOperario,
    fecha: fecha,
    turno: turno,
    fechaRegistro: fechaRegistro,
    hora: hora,
    ordenFabricacion: ordenFabricacion,
    lote: lote,
    codigoMaterial: codigoMaterial,
    descripcion: descripcion,
    medida: medida,
    kg: kilogramos
});


export const resultanteDos = (fechaTab2, turnoTab2, fechaRegistroTab2, horaTab2, ordenFabricacionTab2, loteTab2, codigoMaterialTab2, descripcionTab2, medidaTab2, kilogramosTab2) => firebase.firestore().collection("resultante").add({
    fechaTab2: fechaTab2,
    turnoTab2: turnoTab2,
    fechaRegistroTab2: fechaRegistroTab2,
    horaTab2: horaTab2,
    ordenFabricacionTab2: ordenFabricacionTab2,
    loteTab2: loteTab2,
    codigoMaterialTab2: codigoMaterialTab2,
    descripcionTab2: descripcionTab2,
    medidaTab2: medidaTab2,
    kgTab2: kilogramosTab2
})


//guardar los valores
export const getProductos = (callback) => {
    const db = firebase.firestore();
    return db.collection("resultante").orderBy('fechaTab2', 'desc')

        .onSnapshot((querySnapshot) => {
            const producto = [];
            querySnapshot.forEach((doc) => {
                producto .push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
           
            callback(producto);
        });
};




