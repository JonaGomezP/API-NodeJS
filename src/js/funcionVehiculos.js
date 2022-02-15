window.onload = () => {
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXRhbmdwIiwiYSI6ImNremZmbmE4ajByaWgydm9jbzFqMnYyY3EifQ.P9ATBR18P3XXQ5ElUNEgRQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-4.46029211736527, 36.69144671696021],
        zoom: 12,
    });


    let botonBuscar = document.getElementById("buscarVehiculo");
    botonBuscar.addEventListener('click', (e) => {
        e.preventDefault();
        consultarVehiculos(map);
    })
}




function consultarVehiculos(map) {

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
                    let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    let inputIdVehiculo = document.forms[1].id_vehiculo;
                    inputIdVehiculo.value = "";
                    boton.disabled = true;
                })
                listaVehiculos.forEach(vehiculo => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

                    for (const key in vehiculo) {

                        if (key != "pass" && key != "fecha_alta" && key != "latitud" && key != "longitud") {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;

                            if (key === "id_vehiculo") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idVehiculoEliminar";

                                let nuevoInputIDVehiculo = document.createElement("input");
                                nuevoInputIDVehiculo.type = "number";
                                nuevoInputIDVehiculo.value = vehiculo[key];
                                nuevoInputIDVehiculo.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar vehículo";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarVehiculo(nuevoInputIDVehiculo);
                                });
                                nuevoForm.appendChild(nuevoInputIDVehiculo);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = vehiculo[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }

                        }
                        divVehiculos.insertBefore(tabla, boton);

                        
                        // Create a default Marker and add it to the map.
                        const marker1 = new mapboxgl.Marker()
                            .setLngLat([vehiculo['latitud'], vehiculo['longitud']])
                            .addTo(map);

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
                    let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    let inputIdUsuario = document.forms[1].id_usuario;
                    inputIdUsuario.value = "";
                    boton.disabled = true;
                })
                listaVehiculos.forEach(vehiculo => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

                    for (const key in vehiculo) {
                        if (key != "pass" && key != "fecha_alta" && key != "latitud" && key != "longitud") {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;

                            if (key === "id_vehiculo") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idVehiculoEliminar";

                                let nuevoInputIDVehiculo = document.createElement("input");
                                nuevoInputIDVehiculo.type = "number";
                                nuevoInputIDVehiculo.value = vehiculo[key];
                                nuevoInputIDVehiculo.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar vehículo";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarVehiculo(nuevoInputIDVehiculo);
                                });
                                nuevoForm.appendChild(nuevoInputIDVehiculo);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila)

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = vehiculo[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divVehiculos.insertBefore(tabla, boton);
                        
                        // Create a default Marker and add it to the map.
                        const marker1 = new mapboxgl.Marker()
                            .setLngLat([vehiculo['latitud'], vehiculo['longitud']])
                            .addTo(map);
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
                    let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    let inputMatricula = document.forms[1].matricula;
                    inputMatricula.value = "";
                    boton.disabled = true;
                })
                listaVehiculos.forEach(vehiculo => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";

                    for (const key in vehiculo) {
                        if (key != "pass" && key != "fecha_alta" && key != "latitud" && key != "longitud") {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;

                            if (key === "id_vehiculo") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idVehiculoEliminar";

                                let nuevoInputIDVehiculo = document.createElement("input");
                                nuevoInputIDVehiculo.type = "number";
                                nuevoInputIDVehiculo.value = vehiculo[key];
                                nuevoInputIDVehiculo.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar vehículo";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarVehiculo(nuevoInputIDVehiculo);
                                });
                                nuevoForm.appendChild(nuevoInputIDVehiculo);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);

                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = vehiculo[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }
                        divVehiculos.insertBefore(tabla, boton);

                        // Create a default Marker and add it to the map.
                        const marker1 = new mapboxgl.Marker()
                            .setLngLat([vehiculo['latitud'], vehiculo['longitud']])
                            .addTo(map);
                    }
                });
            })
    } else {
        let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
        tablas.forEach(element => {
            divVehiculos.removeChild(element)
        });

        fetch("http://192.168.56.1:3000/vehiculos", {
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
                    let tablas = Array.from(document.getElementsByClassName("tablaVehiculos"));
                    tablas.forEach(element => {
                        divVehiculos.removeChild(element)
                    });
                    boton.disabled = true;
                })
                listaVehiculos.forEach(vehiculo => {
                    let tabla = document.createElement("table");
                    tabla.className = "tablaVehiculos";


                    for (const key in vehiculo) {

                        if (key != "pass" && key != "fecha_alta" && key != "latitud" && key != "longitud") {
                            let fila = document.createElement("tr");
                            let columnaInfo = document.createElement("td");
                            columnaInfo.style.color = "rgba(242, 242, 242, 0.604)"
                            columnaInfo.textContent = key;

                            if (key === "id_vehiculo") {
                                let nuevoForm = document.createElement("form");
                                nuevoForm.method = "get";
                                nuevoForm.action = "index.html";
                                nuevoForm.id = "idVehiculoEliminar";

                                let nuevoInputIDVehiculo = document.createElement("input");
                                nuevoInputIDVehiculo.type = "number";
                                nuevoInputIDVehiculo.value = vehiculo[key];
                                nuevoInputIDVehiculo.readOnly = true;
                                let nuevoSubmit = document.createElement("input");
                                nuevoSubmit.type = "submit";
                                nuevoSubmit.value = "Eliminar vehículo";
                                nuevoSubmit.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    eliminarVehiculo(nuevoInputIDVehiculo);
                                });
                                nuevoForm.appendChild(nuevoInputIDVehiculo);
                                nuevoForm.appendChild(nuevoSubmit);

                                let columnaDato = document.createElement("td");

                                columnaDato.appendChild(nuevoForm);
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            } else {
                                let columnaDato = document.createElement("td");
                                columnaDato.textContent = vehiculo[key];
                                fila.appendChild(columnaInfo);
                                fila.appendChild(columnaDato);
                                tabla.appendChild(fila);
                            }
                        }

                        divVehiculos.insertBefore(tabla, boton);

                        // Create a default Marker and add it to the map.
                        const marker1 = new mapboxgl.Marker()
                            .setLngLat([vehiculo['latitud'], vehiculo['longitud']])
                            .addTo(map);

                    }
                });
            })
    }
}


//Función eliminar vehiculo
function eliminarVehiculo(id) {
    console.log("prueba vehiculo")
    let buscar = document.getElementById("buscarVehiculo");
    let idVehiculo = id.value;

    fetch("http://192.168.56.1:3000/eliminarVehiculo?id_vehiculo=" + idVehiculo, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
    buscar.click();
}
