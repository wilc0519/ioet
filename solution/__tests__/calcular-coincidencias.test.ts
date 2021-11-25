import { buscarCoindidenciasDeEmpleados } from "../calcular-coincidencias";
import { Empleado } from "../empleado";
import { HorasTrabajasPorDia } from "../horas-trabajadas-por-dia";

const reneLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const reneMartes = new HorasTrabajasPorDia("TU", 1000, 1200)
const reneJueves = new HorasTrabajasPorDia("TH",100, 300)
const reneSabado = new HorasTrabajasPorDia("SA",1400, 1800)
const reneDomingo = new HorasTrabajasPorDia("SU",2000, 2100)

const rene = new Empleado("RENE", [reneLunes, reneMartes, reneJueves, reneSabado, reneDomingo]);

const astridLunes = new HorasTrabajasPorDia("MO", 1000, 1200)
const astridJueves = new HorasTrabajasPorDia("TH", 1200, 1400)
const astridDomingo = new HorasTrabajasPorDia("SU", 2000, 2100)
const astrid = new Empleado("Astrid", [astridLunes, astridJueves, astridDomingo])

    

test.only('Astrid y Rene trabajaron 2 horas en el mismo horario y dia', () => {
    const empleados = [rene, astrid]

    const resultado = buscarCoindidenciasDeEmpleados(empleados)

    expect(resultado).toEqual("ASTRID-RENE: 2")
});

/*

test('Astrid y Andres trabajaron 2 horas en el mismo horario y dia', () => {

    // poner lo de andres y hacer todas las pruebas
    const empleados = [andres, astrid]

    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual("ASTRID-RENE: 2")
});


test('Rene y Andres trabajaron 2 horas en el mismo horario y dia', () => {

    // poner lo de andres y hacer todas las pruebas
    const empleados = [rene, andres]

    const resultado = buscarCoindidenciasDeEmpleados(empleados)
    expect(resultado).toEqual("ASTRID-RENE: 2")
});*/