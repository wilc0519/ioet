const { buscarCoindidenciasDeEmpleados } = require ("./calcular-coincidencias")
const { convertirCadenaComoEmpleado } = require ("./conversor-cadena-a-empleado")
const { convertirTextoComoArregloEmpleados } = require ("./conversor-texto")
const { Empleado } = require ("./empleado")
import { leerArchivo } from "./lector-archivos"

export const buscarCoindidencias = (nombreArchivo: string) => {
    const contenidoArchivo = leerArchivo(nombreArchivo)
    const textoComoArrayDeInformacion = convertirTextoComoArregloEmpleados(contenidoArchivo)
    const empleados: Empleado[] = []
    textoComoArrayDeInformacion.forEach(cadena => {
        const empleado: Empleado = convertirCadenaComoEmpleado(cadena)
        empleados.push(empleado)
    });
    const tablaCoincidencias = buscarCoindidenciasDeEmpleados(empleados)
    console.log(tablaCoincidencias)
}
