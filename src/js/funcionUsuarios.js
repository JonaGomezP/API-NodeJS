
function consultarUsuarios(e) {

    e.preventDefault();

    let formularioUsuarios = document.getElementById("formularioUsuarios");
    let id_usuario = formularioUsuarios.id_usuario.value;
    let nombre = formularioUsuarios.nombre.value;

    nombre = nombre.replace(nombre.charAt(0), nombre.charAt(0).toUpperCase())


    if (id_usuario != "" && nombre === "") {
        let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
        tablas.forEach(element => {
            divUsuarios.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/usuarios?id_usuario=" + id_usuario, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(listaUsuarios => {
                if (listaUsuarios.length > 0) {
                    let divUsuarios = document.getElementById("divUsuarios");
                    let boton = document.getElementById("limpiarUsuarios");
                    boton.disabled = false;
                    boton.addEventListener("click", (e) => {
                        e.preventDefault();
                        let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
                        tablas.forEach(element => {
                            divUsuarios.removeChild(element)
                        });
                        let inputIdUsuario = document.forms[0].id_usuario;
                        inputIdUsuario.value = "";
                        boton.disabled = true;
                    })
                    listaUsuarios.forEach(usuario => {
                        let tabla = document.createElement("table");
                        tabla.className = "tablaUsuarios";

                        for (const key in usuario) {
                            if ((key != "pass" && key != "fecha_alta")) {
                                let fila = document.createElement("tr");
                                let columnaInfo = document.createElement("td");
                                columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                                columnaInfo.textContent = key;

                                if (key === "id_usuario") {
                                    let nuevoForm = document.createElement("form");

                                    nuevoForm.id = "idUsuarioEliminar";
                                    let nuevoInputIDUsuario = document.createElement("input");
                                    nuevoInputIDUsuario.type = "number";
                                    nuevoInputIDUsuario.value = usuario[key];
                                    nuevoInputIDUsuario.readOnly = true;
                                    let nuevoSubmit = document.createElement("input");
                                    nuevoSubmit.type = "submit";
                                    nuevoSubmit.value = "Eliminar usuario";
                                    nuevoSubmit.addEventListener("click", (e) => {
                                        e.preventDefault();
                                        eliminarUsuario(nuevoInputIDUsuario);
                                    });
                                    nuevoForm.appendChild(nuevoInputIDUsuario);
                                    nuevoForm.appendChild(nuevoSubmit);

                                    let columnaDato = document.createElement("td");

                                    columnaDato.appendChild(nuevoForm);
                                    fila.appendChild(columnaInfo);
                                    fila.appendChild(columnaDato);
                                    tabla.appendChild(fila)

                                } else {
                                    let columnaDato = document.createElement("td");
                                    columnaDato.textContent = usuario[key];
                                    fila.appendChild(columnaInfo);
                                    fila.appendChild(columnaDato);
                                    tabla.appendChild(fila);
                                }
                            }
                            divUsuarios.insertBefore(tabla, boton)
                        }
                        let fila = document.createElement("tr");
                        let col = document.createElement("td");
                        let botonModificarUsuario = document.createElement("input");
                        botonModificarUsuario.type = "submit";
                        botonModificarUsuario.value = "Editar usuario";
                        botonModificarUsuario.addEventListener("click", (e) => {
                            e.preventDefault();
                            botonModificarUsuario.disabled = true;
                            let formuEditarUsu = document.createElement("form");
                            formuEditarUsu.method = "POST";
                            formuEditarUsu.action = "#";
                            formuEditarUsu.id = "modificarUsuario";
                            let inputNuevoNombre = document.createElement("input");
                            inputNuevoNombre.type = "text";
                            inputNuevoNombre.name = "nuevoNombre";
                            inputNuevoNombre.setAttribute("placeholder", "Nombre");
                            let inputNuevoApellido1 = document.createElement("input");
                            inputNuevoApellido1.type = "text";
                            inputNuevoApellido1.name = "nuevoApellido1";
                            inputNuevoApellido1.setAttribute("placeholder", "Primer apellido");
                            let inputNuevoApellido2 = document.createElement("input");
                            inputNuevoApellido2.type = "text";
                            inputNuevoApellido2.name = "nuevoApellido2";
                            inputNuevoApellido2.setAttribute("placeholder", "Segundo apellido");
                            let inputNuevaPass = document.createElement("input");
                            inputNuevaPass.type = "password";
                            inputNuevaPass.name = "nuevaPass";
                            inputNuevaPass.setAttribute("placeholder", "Contraseña");
                            inputNuevoSubmit = document.createElement("input");
                            inputNuevoSubmit.type = "submit";
                            inputNuevoSubmit.addEventListener("click", (e) => {
                                e.preventDefault();
                                modificarUsuario(usuario["id_usuario"]);
                            });
                            inputNuevoSubmit.value = "Modificar";


                            formuEditarUsu.appendChild(inputNuevoNombre);
                            formuEditarUsu.appendChild(inputNuevoApellido1);
                            formuEditarUsu.appendChild(inputNuevoApellido2);
                            formuEditarUsu.appendChild(inputNuevaPass);
                            formuEditarUsu.appendChild(inputNuevoSubmit);

                            col.appendChild(formuEditarUsu);
                            fila.appendChild(col);
                            tabla.appendChild(fila);

                        });
                        tabla.appendChild(botonModificarUsuario);
                    });
                } else {
                    alert("Datos incorrectos");
                }



            })
    } else if (nombre != "" && id_usuario === "") {
        let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
        tablas.forEach(element => {
            divUsuarios.removeChild(element)
        });
        fetch("http://192.168.56.1:3000/usuarios?nombre=" + nombre, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(listaUsuarios => {
                if (listaUsuarios.length > 0) {
                    let divUsuarios = document.getElementById("divUsuarios");
                    let boton = document.getElementById("limpiarUsuarios");
                    boton.disabled = false;
                    boton.addEventListener("click", (e) => {
                        e.preventDefault();
                        let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
                        tablas.forEach(element => {
                            divUsuarios.removeChild(element)
                        });
                        let inputNombre = document.forms[0].nombre;
                        inputNombre.value = "";
                        boton.disabled = true;
                    })
                    listaUsuarios.forEach(usuario => {
                        let tabla = document.createElement("table");
                        tabla.className = "tablaUsuarios";

                        for (const key in usuario) {
                            if ((key != "pass" && key != "fecha_alta")) {
                                let fila = document.createElement("tr");
                                let columnaInfo = document.createElement("td");
                                columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                                columnaInfo.textContent = key;

                                if (key === "id_usuario") {
                                    let nuevoForm = document.createElement("form");
                                    nuevoForm.id = "idUsuarioEliminar";
                                    let nuevoInputIDUsuario = document.createElement("input");
                                    nuevoInputIDUsuario.type = "number";
                                    nuevoInputIDUsuario.value = usuario[key];
                                    nuevoInputIDUsuario.readOnly = true;
                                    let nuevoSubmit = document.createElement("input");
                                    nuevoSubmit.type = "submit";
                                    nuevoSubmit.value = "Eliminar usuario";
                                    nuevoSubmit.addEventListener("click", (e) => {
                                        e.preventDefault();
                                        eliminarUsuario(nuevoInputIDUsuario);
                                    });
                                    nuevoForm.appendChild(nuevoInputIDUsuario);
                                    nuevoForm.appendChild(nuevoSubmit);

                                    let columnaDato = document.createElement("td");

                                    columnaDato.appendChild(nuevoForm);
                                    fila.appendChild(columnaInfo);
                                    fila.appendChild(columnaDato);
                                    tabla.appendChild(fila)

                                } else {
                                    let columnaDato = document.createElement("td");
                                    columnaDato.textContent = usuario[key];
                                    fila.appendChild(columnaInfo);
                                    fila.appendChild(columnaDato);
                                    tabla.appendChild(fila);
                                }


                            }
                            divUsuarios.insertBefore(tabla, boton)
                        }
                        let fila = document.createElement("tr");
                        let col = document.createElement("td");
                        let botonModificarUsuario = document.createElement("input");
                        botonModificarUsuario.type = "submit";
                        botonModificarUsuario.value = "Editar usuario";
                        botonModificarUsuario.addEventListener("click", (e) => {
                            e.preventDefault();
                            botonModificarUsuario.disabled = true;
                            let formuEditarUsu = document.createElement("form");
                            formuEditarUsu.method = "POST";
                            formuEditarUsu.action = "#";
                            formuEditarUsu.id = "modificarUsuario";
                            let inputNuevoNombre = document.createElement("input");
                            inputNuevoNombre.type = "text";
                            inputNuevoNombre.name = "nuevoNombre";
                            inputNuevoNombre.setAttribute("placeholder", "Nombre");
                            let inputNuevoApellido1 = document.createElement("input");
                            inputNuevoApellido1.type = "text";
                            inputNuevoApellido1.name = "nuevoApellido1";
                            inputNuevoApellido1.setAttribute("placeholder", "Primer apellido");
                            let inputNuevoApellido2 = document.createElement("input");
                            inputNuevoApellido2.type = "text";
                            inputNuevoApellido2.name = "nuevoApellido2";
                            inputNuevoApellido2.setAttribute("placeholder", "Segundo apellido");
                            let inputNuevaPass = document.createElement("input");
                            inputNuevaPass.type = "password";
                            inputNuevaPass.name = "nuevaPass";
                            inputNuevaPass.setAttribute("placeholder", "Contraseña");
                            inputNuevoSubmit = document.createElement("input");
                            inputNuevoSubmit.type = "submit";
                            inputNuevoSubmit.addEventListener("click", (e) => {
                                e.preventDefault();
                                modificarUsuario(usuario["id_usuario"]);
                            });
                            inputNuevoSubmit.value = "Modificar";


                            formuEditarUsu.appendChild(inputNuevoNombre);
                            formuEditarUsu.appendChild(inputNuevoApellido1);
                            formuEditarUsu.appendChild(inputNuevoApellido2);
                            formuEditarUsu.appendChild(inputNuevaPass);
                            formuEditarUsu.appendChild(inputNuevoSubmit);

                            col.appendChild(formuEditarUsu);
                            fila.appendChild(col);
                            tabla.appendChild(fila);

                        });
                        tabla.appendChild(botonModificarUsuario);
                    });
                } else {
                    alert("Datos incorrectos");
                }


            })
    } else {
        let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
        tablas.forEach(element => {
            divUsuarios.removeChild(element)
        });
        fetch("http://192.168.56.1:3000/usuarios", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response.json()
            })
            .then(listaUsuarios => {
                let divUsuarios = document.getElementById("divUsuarios");
                let boton = document.getElementById("limpiarUsuarios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaUsuarios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divUsuarios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaUsuarios.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaUsuarios";

                    for (const key in usuario) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_usuario") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.id = "idUsuarioEliminar";
                                let nuevoInputIDUsuario = document.createElement("input");
                                nuevoInputIDUsuario.type = "number";
                                nuevoInputIDUsuario.value = usuario[key];
                                nuevoInputIDUsuario.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar usuario";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarUsuario(nuevoInputIDUsuario);
                                });
                                nuevoForm.appendChild(nuevoInputIDUsuario);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = usuario[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }


                        }
                        divUsuarios.insertBefore(tabla, boton)
                    }

                    let fila = document.createElement("tr");
                    let col = document.createElement("td");
                    let botonModificarUsuario = document.createElement("input");
                    botonModificarUsuario.type = "submit";
                    botonModificarUsuario.value = "Editar usuario";
                    botonModificarUsuario.addEventListener("click", (e) => {
                        e.preventDefault();
                        botonModificarUsuario.disabled = true;
                        let formuEditarUsu = document.createElement("form");
                        formuEditarUsu.method = "POST";
                        formuEditarUsu.action = "#";
                        formuEditarUsu.id = "modificarUsuario";
                        let inputNuevoNombre = document.createElement("input");
                        inputNuevoNombre.type = "text";
                        inputNuevoNombre.name = "nuevoNombre";
                        inputNuevoNombre.setAttribute("placeholder", "Nombre");
                        let inputNuevoApellido1 = document.createElement("input");
                        inputNuevoApellido1.type = "text";
                        inputNuevoApellido1.name = "nuevoApellido1";
                        inputNuevoApellido1.setAttribute("placeholder", "Primer apellido");
                        let inputNuevoApellido2 = document.createElement("input");
                        inputNuevoApellido2.type = "text";
                        inputNuevoApellido2.name = "nuevoApellido2";
                        inputNuevoApellido2.setAttribute("placeholder", "Segundo apellido");
                        let inputNuevaPass = document.createElement("input");
                        inputNuevaPass.type = "password";
                        inputNuevaPass.name = "nuevaPass";
                        inputNuevaPass.setAttribute("placeholder", "Contraseña");
                        inputNuevoSubmit = document.createElement("input");
                        inputNuevoSubmit.type = "submit";
                        inputNuevoSubmit.addEventListener("click", (e) => {
                            e.preventDefault();
                            modificarUsuario(usuario["id_usuario"]);
                        });
                        inputNuevoSubmit.value = "Modificar";


                        formuEditarUsu.appendChild(inputNuevoNombre);
                        formuEditarUsu.appendChild(inputNuevoApellido1);
                        formuEditarUsu.appendChild(inputNuevoApellido2);
                        formuEditarUsu.appendChild(inputNuevaPass);
                        formuEditarUsu.appendChild(inputNuevoSubmit);

                        col.appendChild(formuEditarUsu);
                        fila.appendChild(col);
                        tabla.appendChild(fila);

                    });
                    tabla.appendChild(botonModificarUsuario);

                });
            })
    }

}

//Función eliminar usuario
function eliminarUsuario(id) {
    let buscar = document.getElementById("buscarUsuarios");
    let idUsuario = id.value;

    fetch("http://192.168.56.1:3000/eliminarUsuario?id_usuario=" + idUsuario, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    buscar.click();
}

//Función editar usuario
function modificarUsuario(id_usu) {

    let formModificarUsu = document.getElementById("modificarUsuario");
    var id_usuario = id_usu;
    var nombre = formModificarUsu.nuevoNombre.value;
    var primerApellido = formModificarUsu.nuevoApellido1.value;
    var segundoApellido = formModificarUsu.nuevoApellido2.value;
    var pass = formModificarUsu.nuevaPass.value;

    let datosFormu = new FormData();
    datosFormu.append('nombre', nombre);
    datosFormu.append('apellido1', primerApellido);
    datosFormu.append('apellido2', segundoApellido);
    datosFormu.append('pass', pass);

    console.log(id_usuario);
    console.log(datosFormu.get("nombre"));
    console.log(datosFormu.get("apellido1"));
    console.log(datosFormu.get("apellido2"));
    console.log(datosFormu.get("pass"));


    var objetoFormData = {};
    datosFormu.forEach(function (value, key) {
        objetoFormData[key] = value;
    });


    fetch("http://192.168.56.1:3000/editarUsuario/?id_usuario=" + id_usuario, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objetoFormData)
    })
        .then(response => {
            return response.json()
        })
        .then(datos => {
        })
}
