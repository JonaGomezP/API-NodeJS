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
                        divServicios.removeChild(element)
                    });
                    let inputIdServicio = document.forms[2].id_servicio;
                    inputIdServicio.value = "";
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;
                            let columnaDato = document.createElement("td");
                            columnaDato.textContent = servicio[key];
                            fila.appendChild(columnaInfo);
                            fila.appendChild(columnaDato);
                            tabla.appendChild(fila);
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
                        divServicios.removeChild(element)
                    });
                    let inputIdServicio = document.forms[2].id_servicio;
                    inputIdServicio.value = "";
                    boton.disabled = true;
                })
                listaServicios.forEach(servicio => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaServicios";

                    for (const key in servicio) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;
                            let columnaDato = document.createElement("td");
                            columnaDato.textContent = servicio[key];
                            fila.appendChild(columnaInfo);
                            fila.appendChild(columnaDato);
                            tabla.appendChild(fila);
                        }
                        divServicios.insertBefore(tabla, boton)
                    }
                });
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
            .then(listaServicios => {
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
                listaServicios.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaUsuarios";

                    for (const key in usuario) {
                        if ((key != "pass" && key != "fecha_alta")) {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;
                            let columnaDato = document.createElement("td");
                            columnaDato.textContent = usuario[key];
                            fila.appendChild(columnaInfo);
                            fila.appendChild(columnaDato);
                            tabla.appendChild(fila);
                        }
                        divUsuarios.insertBefore(tabla, boton)
                    }
                });
            })
    }

}
