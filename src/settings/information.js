
const __dataCotizacion = [
    {
      marca: "Americano",
      years: [ "2015", "2014", "2013", "2012", "2011", "2010"],

    },
    {
      marca: "Europeo",
      years: ["2018", "2017", "2016", "2010", "2009", "2008"]
    },
    {
      marca: "Asiatico",
      years: ["2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008"]
    }
];

const _removeDuplicates = (collection) => {
    Array.prototype.unique = function(){
      let a = [];
      for(let i = 0; i < this.length; i++){
        var current = this[i];
        if(a.indexOf(current)<0) a.push(current);
      }

      this.length = 0;

      for(let i=0; i<a.length; i++){
        this.push(a[i]);
      }
      return this;
    }
    return collection.unique();
}

 export const getMarcas = () => {
   return __dataCotizacion.map(item => {
      return item.marca;
   })
 };



 export const getYearsAll = () => {
   let newArray = [];
   for(let arr of __dataCotizacion){
    newArray = newArray.concat(arr.years);
   }
   return _removeDuplicates(newArray);
 }
