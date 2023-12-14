const MaximoTarjetasGrupal= 7; //Las tarjetas por grupo
const MaximoDeGrupos= 3; // 3 grupos en total
const MaximoTarjetas= MaximoTarjetasGrupal*MaximoDeGrupos; //Total de tarjetas.
const MinimoValorTarjetas= 'A'; //Tarjeta inicial, en este caso letra A.
const MaximoValorTarjetas=String.fromCharCode(MaximoTarjetas+MinimoValorTarjetas.charCodeAt()-1);
var grupo1= new Array(MaximoTarjetasGrupal),
    grupo2 = new Array(MaximoTarjetasGrupal),
    grupo3 = new Array(MaximoTarjetasGrupal);
var deck = new Array(MaximoTarjetas);
var arregloo = new Array(MaximoTarjetasGrupal);
var columnaSeleccionada;
var impresionGrupo = "", impresionGrupo1 = "", impresionGrupo2 = "";
var secuencia;
                
document.getElementById('startButton').addEventListener('click', function() {
    alert('¡El juego ha comenzado!');
for (let i = 0; i <= MaximoTarjetas - 1; i++) {
    celdaMenos = 0;
    indice = Math.floor(Math.random() * (MaximoValorTarjetas.charCodeAt() - MinimoValorTarjetas.charCodeAt() + 1)) + MinimoValorTarjetas.charCodeAt();
        while (celdaMenos < i) {
            if (deck[celdaMenos] === String.fromCharCode(indice)) {
                indice = Math.floor(Math.random() * (MaximoValorTarjetas.charCodeAt() - MinimoValorTarjetas.charCodeAt() + 1)) + MinimoValorTarjetas.charCodeAt();
                celdaMenos = -1;
                }
            celdaMenos += 1;
        }
            deck[i] = String.fromCharCode(indice);
    }//se cargan las letras en el arreglo


//se cargan las letras en los grupos
    for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
        grupo1[i] = deck[i];
        }
    for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
        grupo2[i] = deck[i + (MaximoTarjetasGrupal)];
        }
    for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
        grupo3[i] = deck[i + ((MaximoTarjetasGrupal) * 2)];
        }


    for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
        impresionGrupo += grupo1[i] + "  " + grupo2[i] + "  " + grupo3[i] + "\n";
        }

    correcto = false;
    secuencia = 1;
                
                while (secuencia <= 3) {
                    if (secuencia == 1) {
                        columnaSeleccionada = window.prompt("Haremos 3 secuencias. Empecemos..." + "\n" +
                                "Secuencia " + secuencia + " : " + "\n" + "\n" + impresionGrupo + "\n" + "En que grupo esta tu carta[1,2,3]:");
                        document.write("Haremos 3 secuencias. Empecemos..." + "<br>" + "Secuencia " + secuencia + ":" + "<br>" + "<br>");
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            document.write(grupo1[i] + grupo2[i] + grupo3[i]);
                            document.write("<br>");
                        }
                        document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                        while (correcto == false) {
                            if ((columnaSeleccionada != '1') && (columnaSeleccionada != '2') && (columnaSeleccionada != '3')) {
                                columnaSeleccionada = window.prompt("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]: ");
                                document.write("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]: " + "<br>");
                                document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                                correcto = false;
                            } else {
                                correcto = true;
                            }
                        }
                    }
                    if (secuencia == 2) {
                        if (columnaSeleccionada == '1') {
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo2[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo1[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo3[i];
                            }
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos);
                            }

                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }
                            } //Fin de la OPCIÓN 1
                        } else if (columnaSeleccionada == '2') {     //Si se eligió columna 2 entonces...
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo3[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo2[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo1[i];
                            }
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos);
                            }
                            
                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }
                            }
                            console.log(arregloo);
                        }
                        //Final de la opción 2

                        else if (columnaSeleccionada == '3') {
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo1[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo3[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo2[i];
                            }
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos);
                            }
                            
                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }
                            }
                        }
                        //arregloo se descompone para poder sacar las columnas y poder mostrarlas en grupos (mantiene su estructura)
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 0; j <= MaximoDeGrupos - 3; j++) {
                                grupo1[i] = arregloo[i][j];
                                console.log(grupo1[i]);
                            }
                        }
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 1; j <= MaximoDeGrupos - 2; j++) {
                                grupo2[i] = arregloo[i][j];
                                console.log(grupo2[i]);
                            }
                        }
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 2; j <= MaximoDeGrupos - 1; j++) {
                                grupo3[i] = arregloo[i][j];
                                console.log(grupo3[i]);
                            }
                        }
                        
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            impresionGrupo1 += grupo1[i] + " " + grupo2[i] + " " + grupo3[i] + "\n";
                        }
                        
                        correcto = false;
                        columnaSeleccionada = window.prompt("Secuencia " + secuencia + " : " + "\n" + "\n" + impresionGrupo1 + "\n" + "En que grupo esta tu carta[1,2,3]:");
                        document.write("Secuencia " + secuencia + ":" + "<br>" + "<br>");
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            document.write(grupo1[i] + grupo2[i] + grupo3[i]);
                            document.write("<br>");
                        }
                        document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                        while (correcto == false) {
                            if ((columnaSeleccionada != '1') && (columnaSeleccionada != '2') && (columnaSeleccionada != '3')) {
                                columnaSeleccionada = window.prompt("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]");
                                document.write("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]: " + "<br>");
                                document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                                correcto = false;
                            } else {
                                correcto = true;
                            }
                        }
                    }

                    //Empieza la secuencia #3
                    if (secuencia == 3) {
                        if (columnaSeleccionada == '1') {
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo2[i];
                            }

                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo1[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo3[i];
                            }
                            
                            //empieza a cargarse un array bdmencional.

                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos - 1);

                            }
                            //se muestra el array:
                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }
                            } //Fin de la OPCIÓN 1

                        } else if (columnaSeleccionada == '2') {     //Si se elige la columna 3 entonces...

                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo3[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo2[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo1[i];
                            }
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos - 1);
                            }
                            
                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }
                            }
                        }//fin de la OPCIÓN 2
                        else if (columnaSeleccionada == '3') {
                            
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i] = grupo1[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 7] = grupo3[i];
                            }
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                deck[i + 14] = grupo2[i];
                            }
                            
                            //cargando un array bidimensional...

                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                arregloo[i] = new Array(MaximoDeGrupos - 1);
                            }
                            //ya se cargó un array bidimensional y se muestra: 
                            k = 0;
                            for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                                for (let j = 0; j <= MaximoDeGrupos - 1; j++) {
                                    arregloo[i][j] = deck[k];
                                    k = k + 1;
                                }

                            }
                        }
                        //Se descomponen los arreglos para imprimirlos en la consola.
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 0; j <= MaximoDeGrupos - 3; j++) {
                                grupo1[i] = arregloo[i][j];
                            }
                        }
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 1; j <= MaximoDeGrupos - 2; j++) {
                                grupo2[i] = arregloo[i][j];
                            }
                        }
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            for (let j = 2; j <= MaximoDeGrupos - 1; j++) {
                                grupo3[i] = arregloo[i][j];
                            }
                        }
                        //se guarda en el string del arreglo
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            impresionGrupo2 += grupo1[i] + " " + grupo2[i] + " " + grupo3[i] + "\n";
                        }
                        correcto = false;
                        columnaSeleccionada = window.prompt("Secuencia " + secuencia + " : " + "\n" + "\n" + impresionGrupo2 + "\n" + "En que grupo esta tu carta[1,2,3]:");
                        document.write("Secuencia " + secuencia + ":" + "<br>" + "<br>");
                        for (let i = 0; i <= MaximoTarjetasGrupal - 1; i++) {
                            document.write(grupo1[i] + grupo2[i] + grupo3[i] + "<br>");
                        }
                        document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                        while (correcto == false) {
                            if ((columnaSeleccionada != '1') && (columnaSeleccionada != '2') && (columnaSeleccionada != '3')) {
                                columnaSeleccionada = window.prompt("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]: ");
                                document.write("ERROR - Opcion incorrecta, ingresa una opcion valida[1,2,3]: " + "<br>");
                                document.write(">> " + columnaSeleccionada + "<br>" + "<br>");
                                correcto = false;
                            } else {
                                correcto = true;
                            }
                        }
                    }  //secuencia 3 lista
                    secuencia = secuencia + 1;
                }
                
            
                if ((secuencia = 3) && (columnaSeleccionada == '1') && (correcto == true)) {
                    window.alert("Obviamente elegiste la " + grupo1[3]);
                    document.write("Obviamente elegiste la " + grupo1[3]);
                } else if ((secuencia = 3) && (columnaSeleccionada == '2') && (correcto == true)) {
                    window.alert("Obviamente elegiste la " + grupo2[3]);
                    document.write("Obviamente elegiste la " + grupo2[3]);
                } else if ((secuencia = 3) && (columnaSeleccionada == '3' && (correcto == true))) {
                    window.alert("Obviamente elegiste la " + grupo3[3]);
                    document.write("Obviamente elegiste la " + grupo3[3]);
                }
                // Manipulación del DOM para mostrar mensajes y resultados
    const historialDiv = document.createElement('div');
    historialDiv.id = 'historial';
    historialDiv.innerHTML = '<h1>Historial de juego</h1>';
    historialDiv.style.backgroundColor = '#0E6655';
    historialDiv.style.color = 'white';
    historialDiv.style.padding = '20px';
    historialDiv.style.textAlign = 'center';
    historialDiv.style.fontFamily = 'Arial, sans-serif';

    const reiniciarMensaje = document.createElement('p');
    reiniciarMensaje.textContent = 'Presiona F5 para reiniciar.';
    reiniciarMensaje.id = 'reiniciarMensaje';

    historialDiv.appendChild(reiniciarMensaje);
    document.body.appendChild(historialDiv);             
});