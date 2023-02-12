//////--------------IMPLEMENTACION DE JS DEL TP5
let contacto = {
    nombreCompleto:"",
    telefono:"",
    mensaje:""
};

function datosContacto(){
    contacto.nombreCompleto = `${document.getElementById("apellido").value} ${document.getElementById("nombre").value}`;
    contacto.telefono = document.getElementById("telefono").value;
    contacto.mensaje = document.getElementById("mensaje").value;
    
    if(contacto.nombre ==='' || contacto.telefono === '' || contacto.mensaje === ''){
        alert('Debe completar todos los campos')
    } else {
        alert(`Mensaje enviado!\nGracias por contactarte, ${contacto.nombreCompleto}.`)
    }

    console.log(contacto)
}