import { Empleado } from "./empleado"
import { HorasTrabajasPorDia } from "./horas-trabajadas-por-dia"
const reneLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const reneMartes = new HorasTrabajasPorDia("TU", 1000, 1200)
const reneJueves = new HorasTrabajasPorDia("TH", 100, 300)
const reneSabado = new HorasTrabajasPorDia("SA", 1400, 1800)
const reneDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)
const rene = new Empleado("RENE", [reneLunes, reneMartes, reneJueves, reneSabado, reneDomingo]);

const astridLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const astridJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const astridDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)
// agregar resto de horas de astrid
const astrid = new Empleado("ASTRID", [astridLunes, astridJueves, astridDomingo])
const empl = [rene, astrid]

export const buscarCoindidenciasDeEmpleados = (empleados: Empleado[]) => {
    const coincidencias: string[] = []
    for (let indiceDelEmpleadoParaBuscarCoincidencias = 0; indiceDelEmpleadoParaBuscarCoincidencias < empleados.length; indiceDelEmpleadoParaBuscarCoincidencias++) {
        const empleadoParaBuscarCoincidencias = empleados[indiceDelEmpleadoParaBuscarCoincidencias]
        for (let indiceDelRestoDeEmpleados = indiceDelEmpleadoParaBuscarCoincidencias + 1; indiceDelRestoDeEmpleados < empleados.length; indiceDelRestoDeEmpleados++) {
            const otroEmpleado = empleados[indiceDelRestoDeEmpleados]
            empleadoParaBuscarCoincidencias.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias => {
                otroEmpleado.diasHorasTrabajadas.forEach(horasTrabajadasPorDiaDelOtroEmpleado => {
                    if (horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.dia === horasTrabajadasPorDiaDelOtroEmpleado.dia &&
                        horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaInicio < horasTrabajadasPorDiaDelOtroEmpleado.horaFin &&
                        horasTrabajadasPorDiaDelOtroEmpleado.horaInicio < horasTrabajadasPorDiaDelEmpleadoParaBuscarCoincidencias.horaFin) {
                        console.log('hola')
                    }
                })

            })
        }
    }
    const coincidenciaPrimeraIt = "rene-astrid 2"
    coincidencias.push(coincidenciaPrimeraIt)
    // las del segundo con el resto
    const coincidencia = "rene-andres 3"
    coincidencias.push(coincidenciaPrimeraIt)
    // las del tercero con el resto
    return coincidencias
}
buscarCoindidenciasDeEmpleados(empl)