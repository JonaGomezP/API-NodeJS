function consultarUsuarios(e) {

    e.preventDefault();

    let id_usuario = document.forms[0].id_usuario.value;
    let nombre = document.forms[0].nombre.value;

    nombre = nombre.replace(nombre.charAt(0), nombre.charAt(0).toUpperCase())


    if (id_usuario != "" && nombre === "") {


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
                let divUsuarios = document.getElementById("divUsuarios");
                listaUsuarios.forEach(usuario => {
                    let tabla = document.createElement("table");
                    for (const key in usuario) {
                        if (key != "pass") {
                            let fila = document.createElement("tr");
                            let columna = document.createElement("td");
                            columna.textContent = usuario[key];
                            fila.appendChild(columna);
                            tabla.appendChild(fila);
                        }
                        divUsuarios.appendChild(tabla)
                    }
                });
            })
    } else if (nombre != "" && id_usuario === "") {
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
                // let divUsuarios = document.getElementById("divUsuarios");
                // listaUsuarios.forEach(usuario => {
                //     let tabla = document.createElement("table");
                //     for (const key in usuario) {
                //         if (key != "pass") {
                //             let fila = document.createElement("tr");
                //             let columna = document.createElement("td");
                //             columna.textContent = usuario[key];
                //             fila.appendChild(columna);
                //             tabla.appendChild(fila);
                //         }
                //     }
                //     divUsuarios.appendChild(tabla)
                // });
                console.log(listaUsuarios)
            })
    } else {
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
                listaUsuarios.forEach(usuario => {
                    let tabla = document.createElement("table");
                    for (const key in usuario) {
                        if (key != "pass") {
                            let fila = document.createElement("tr");
                            let columna = document.createElement("td");
                            columna.textContent = usuario[key];
                            fila.appendChild(columna);
                            tabla.appendChild(fila);
                        }
                    }
                    divUsuarios.appendChild(tabla)
                });
            })
    }

}