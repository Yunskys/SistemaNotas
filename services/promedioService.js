function calcularPromedio(n1,n2,n3){
    return (n1+n2+n3)/3;
}

function estadoAlumno(promedio){
    if(promedio >= 14){
        return "Aprovado";
    }
        return "Desaprobado";
}

module.exports = {
    calcularPromedio,
    estadoAlumno
};