const cuenta = document.querySelector("#cuenta");
const clientes = document.querySelector("#clientes");
const calidad = document.querySelector("#calidad");
const totalPropina = document.querySelector("#total-propina");

calculate = () => {
  const propina = ((cuenta.value * calidad.value) / (clientes.value)).toFixed(2);
  cuenta.value = "";
  clientes.value = "";
  calidad.value = "";
  if(propina === "NaN"){
    totalPropina.textContent = "propina $0 each";
    showTotalPropina();
  }
  else{
    totalPropina.textContent = "propina $" + propina + " each";
    showTotalPropina();
  }
}

showTotalPropina = () => {
  var x = document.querySelector("#total-propina");
  
  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}