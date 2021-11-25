const { buscarCoindidenciasDeEmpleados } = require("./calcular-coincidencias")
const { convertirCadenaComoEmpleado } = require("./conversor-cadena-a-empleado")
const { convertirTextoComoArregloEmpleados } = require("./conversor-texto")
import { Empleado } from "./empleado"
import { leerArchivo } from "./lector-archivos"

export const buscarCoindidencias = (nombreArchivo: string) => {
    const contenidoArchivo = leerArchivo(nombreArchivo)
    const textoComoArrayDeInformacion: string[] = convertirTextoComoArregloEmpleados(contenidoArchivo)
    const empleados: Empleado[] = []
    textoComoArrayDeInformacion.forEach((cadena: string) => {
        const empleado: Empleado = convertirCadenaComoEmpleado(cadena)
        empleados.push(empleado)
    });
    const tablaCoincidencias = buscarCoindidenciasDeEmpleados(empleados)
    console.log(tablaCoincidencias)
}

buscarCoindidencias('../solution/__tests__/empleado-dias-horas-trabajadas.txt')

