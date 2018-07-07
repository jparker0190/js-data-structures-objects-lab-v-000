// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value){
  const new = {...driver}
  new[key] = value
  return new
}
