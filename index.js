// Write your solution in this file!
driver = {}
function updateDriverWithKeyAndValue(object, key, value){
  const driver = {...object}
  driver[key] = value
  return driver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  const neww = Object.assign({}, driver[key])
  console.log(neww)
  delete neww.name
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.key
  return driver
}
