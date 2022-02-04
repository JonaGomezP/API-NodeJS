
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
                                    nuevoForm.method = "get";
                                    nuevoForm.action = "index.html";
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
                                    nuevoForm.method = "get";
                                    nuevoForm.action = "index.html";
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
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
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
