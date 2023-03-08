function validar(){
    let form = document.form;
    if(form.nombre.value == 0){
        alert("el campo nombre esta vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }
    if(form.apellido.value == 0){
        alert("el campo apellido esta vacio");
        form.apellido.value="";
        form.apelido.focus();
        return false;
    }
    if(form.correo.value == 0){
        alert("el campo correo esta vacio");
        form.correo.value="";
        form.correo.focus();
        return false;
    }
    if(form.mensaje.value == 0){
        alert("el campo mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }

    alert("datos enviados con exito");
    form.submit();

}
