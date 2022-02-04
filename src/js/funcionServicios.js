function consultarServicios(e) {

    e.preventDefault();

    let formularioServicios = document.getElementById("formularioServicios");
    let id_servicio = formularioServicios.id_servicio.value;
    let id_vehiculo = formularioServicios.id_vehiculo.value;
    let matricula = formularioServicios.matricula.value;
    let servicio = formularioServicios.servicio.value;

    servicio = servicio.replace(servicio.charAt(0), servicio.charAt(0).toLowerCase())


    if (id_servicio != "" && id_vehiculo === "" && matricula === "" && servicio === "") {
        let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
        tablas.forEach(element => {
            divServicios.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/servicios?id_servicio=" + id_servicio, {
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
            .then(listaServicios => {
                let divServicios = document.getElementById("divServicios");
                let boton = document.getElementById("limpiarServicios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divServicios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_servicio") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idServicioEliminar";

                                let nuevoInputIDServicio = document.createElement("input");
                                nuevoInputIDServicio.type = "number";
                                nuevoInputIDServicio.value = servicio[key];
                                nuevoInputIDServicio.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar servicio";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarServicio(nuevoInputIDServicio);
                                });
                                nuevoForm.appendChild(nuevoInputIDServicio);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = servicio[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
            })
    } else if (id_servicio === "" && id_vehiculo != "" && matricula === "" && servicio === "") {
        let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
        tablas.forEach(element => {
            divServicios.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/servicios?id_vehiculo=" + id_vehiculo, {
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
            .then(listaServicios => {
                let divServicios = document.getElementById("divServicios");
                let boton = document.getElementById("limpiarServicios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divServicios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_servicio") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idServicioEliminar";

                                let nuevoInputIDServicio = document.createElement("input");
                                nuevoInputIDServicio.type = "number";
                                nuevoInputIDServicio.value = servicio[key];
                                nuevoInputIDServicio.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar servicio";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarServicio(nuevoInputIDServicio);
                                });
                                nuevoForm.appendChild(nuevoInputIDServicio);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = servicio[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
            })
    } else if (id_servicio === "" && id_vehiculo === "" && matricula != "" && servicio === "") {
        let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
        tablas.forEach(element => {
            divServicios.removeChild(element)
        });

        console.log(matricula)
        fetch("http://192.168.56.1:3000/servicios?matricula=" + matricula, {
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
            .then(listaServicios => {
                let divServicios = document.getElementById("divServicios");
                let boton = document.getElementById("limpiarServicios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divServicios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_servicio") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idServicioEliminar";

                                let nuevoInputIDServicio = document.createElement("input");
                                nuevoInputIDServicio.type = "number";
                                nuevoInputIDServicio.value = servicio[key];
                                nuevoInputIDServicio.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar servicio";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarServicio(nuevoInputIDServicio);
                                });
                                nuevoForm.appendChild(nuevoInputIDServicio);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = servicio[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
            })
    } else if (id_servicio === "" && id_vehiculo === "" && matricula === "" && servicio != "") {
        let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
        tablas.forEach(element => {
            divServicios.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/servicios?servicio=" + servicio, {
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
            .then(listaServicios => {
                let divServicios = document.getElementById("divServicios");
                let boton = document.getElementById("limpiarServicios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divServicios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_servicio") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idServicioEliminar";

                                let nuevoInputIDServicio = document.createElement("input");
                                nuevoInputIDServicio.type = "number";
                                nuevoInputIDServicio.value = servicio[key];
                                nuevoInputIDServicio.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar servicio";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarServicio(nuevoInputIDServicio);
                                });
                                nuevoForm.appendChild(nuevoInputIDServicio);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = servicio[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
            })
    } else {
        let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
        tablas.forEach(element => {
            divServicios.removeChild(element)
        });
        fetch("http://192.168.56.1:3000/servicios", {
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
            .then(listaServicios => {

                let divServicios = document.getElementById("divServicios");
                let boton = document.getElementById("limpiarServicios");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = Array.from(document.getElementsByClassName("tablaServicios"));
                    tablas.forEach(element => {
                        console.log(element)
                        divServicios.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)";
                            columnaInfo.textContent = key;

                            if (key === "id_servicio") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idServicioEliminar";

                                let nuevoInputIDServicio = document.createElement("input");
                                nuevoInputIDServicio.type = "number";
                                nuevoInputIDServicio.value = servicio[key];
                                nuevoInputIDServicio.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar servicio";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarServicio(nuevoInputIDServicio);
                                });
                                nuevoForm.appendChild(nuevoInputIDServicio);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = servicio[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
            })
    }

}


//Función eliminar servicio
function eliminarServicio(id) {
    let buscar = document.getElementById("buscarServicio");
    let idServicio = id.value;

    console.log(idServicio)
    fetch("http://192.168.56.1:3000/eliminarServicio?id_servicio=" + idServicio, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    buscar.click();
}
