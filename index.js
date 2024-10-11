//First Alert
const fahrenheit= prompt(`Enter a fahrenheit and we'll convert it into a Celsius!`)

const convertToCelsius= (userInputTemperature) => {
  const celsius= (userInputTemperature - 32) * (5/9)
  return celsius
}

const convertedTemp = convertToCelsius(fahrenheit)

alert(convertedTemp)

if (convertedTemp<34) {
  alert(`Very Cold`)
}
else if(convertedTemp<64){
  alert(`Cold`)
}
else if(convertedTemp<100) {
  alert(`Warm`)
}
else if(convertedTemp<100){
  alert(`Hot`)
}
else if(convertedTemp>=100){
  alert(`Very Hot`)
}

