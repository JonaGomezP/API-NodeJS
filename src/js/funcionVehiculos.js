function consultarVehiculos(e) {

    e.preventDefault();

    formularioVehiculos = document.getElementById("formularioVehiculos")
    let id_usuario = formularioVehiculos.id_usuario.value;
    let matricula = formularioVehiculos.matricula.value;
    let id_vehiculo = formularioVehiculos.id_vehiculo.value



    if (id_usuario === "" && id_vehiculo != "" && matricula === "") {

        let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
        tablas.forEach(element => {
            divVehiculos.removeChild(element)
        });
        fetch("http://192.168.56.1:3000/vehiculos?id_vehiculo=" + id_vehiculo, {
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
            .then(listaVehiculos => {
                let divVehiculos = document.getElementById("divVehiculos");
                let boton = document.getElementById("limpiarVehiculos");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = document.querySelectorAll("table");
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaVehiculos.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

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
                        divVehiculos.insertBefore(tabla, boton)
                    }
                });
            })
    } else if (id_usuario != "" && id_vehiculo === "" && matricula === "") {

        let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
        tablas.forEach(element => {
            divVehiculos.removeChild(element)
        });
        fetch("http://192.168.56.1:3000/vehiculos?id_usuario=" + id_usuario, {
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
            .then(listaVehiculos => {
                let divVehiculos = document.getElementById("divVehiculos");
                let boton = document.getElementById("limpiarVehiculos");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = document.querySelectorAll("table");
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaVehiculos.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

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
                        divVehiculos.insertBefore(tabla, boton)
                    }
                });
            })
    } else if (id_usuario === "" && id_vehiculo === "" && matricula != "") {

        let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
        tablas.forEach(element => {
            divVehiculos.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/vehiculos?matricula=" + matricula, {
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
            .then(listaVehiculos => {
                let divVehiculos = document.getElementById("divVehiculos");
                let boton = document.getElementById("limpiarVehiculos");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = document.querySelectorAll("table");
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaVehiculos.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

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
                        divVehiculos.insertBefore(tabla, boton)
                    }
                });
            })
    } else {
        let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
        tablas.forEach(element => {
            divVehiculos.removeChild(element)
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
            .then(listaVehiculos => {
                let divVehiculos = document.getElementById("divVehiculos");
                let boton = document.getElementById("limpiarVehiculos");
                boton.disabled = false;
                boton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let tablas = document.querySelectorAll("table");
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaVehiculos.forEach(usuario => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

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
                        divVehiculos.insertBefore(tabla, boton)
                    }
                });
            })
    }
}