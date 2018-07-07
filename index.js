// Write your solution in this file!
const driver = {}
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

  return delete driver.key
}
function destructivelyDeleteFromDriverByKey(driver, key){
  const newobj = Object.assign({}, driver)
  delete newobj.key
  return driver
}
