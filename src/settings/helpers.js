/**
  Helpers
**/

export function getYearDifference( year ){
  return new Date().getFullYear() - year;
};

export function calculateMark ( modelo ){
  try{
    let incremento;
    switch(modelo.toLowerCase()){
      case 'europeo':
        incremento = 1.30;
      break;
      case "americano":
        incremento = 1.15;
      break;
      case "asiatico":
        incremento = 1.05;
      break;
      default:
      break;
    }
    return incremento;
  }catch(error){
      cosole.log("Error calculateMark", error);
  }
}
export function obtenerPlan( plan ) {
    return (plan === 'basico') ? 1.20 : 1.50;
}


export function primeraMayuscula( text ){
      return text.charAt(0).toUpperCase() + text.slice(1);
}
