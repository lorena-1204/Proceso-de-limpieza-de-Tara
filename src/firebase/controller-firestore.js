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

// export const getreporte = (callback) => {firebase.firestore().collection('reporteDiario').onSnapshot((querySnapshot)=>{
//     const reportes = [];
//     querySnapshot.forEach((doc)=>{
//         reportes.push({
//             nombreOperario: doc.data().nombre,
//             codigoOperario: doc.data().inputCodigoOperario,
//             fecha: doc.data().fecha,
//             turno: doc.data().turno,
//             fechaRegistro: doc.data().fechaRegistro,
//             hora: doc.data().hora,
//             ordenFabricacion: doc.data().ordenFabricacion,
//             lote: doc.data().lote,
//             codigoMaterial: doc.data().codigoMaterial,
//             descripcion: doc.data().descripcion,
//             medida: doc.data().medida,
//             kg: doc.data().kilogramos
//         });
//     });
//     callback(reportes);
// });
// }

export const getreporte = (callback) => {
    // Obtener acceso a Firestore
    const db = firebase.firestore();
    return db.collection('reporteDiario').orderBy('date', 'desc')
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



