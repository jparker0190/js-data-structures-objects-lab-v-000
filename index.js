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
  const neww = Object.assign(driver, driver)
  console.log(neww)
  delete neww.key
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.key
  console.log(driver)
}
