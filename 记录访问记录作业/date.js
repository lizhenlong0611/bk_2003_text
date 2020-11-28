var time =()=>{
  var date = new Date
  console.log(date)
  var time1 = ((date.getFullYear().toString()) + (date.getMonth()+1).toString() + (date.getDate().toString()))
  return time1
}
module.exports = time()