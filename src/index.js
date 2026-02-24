 
let type = "massssala"
 let price =0 
  let caseType = type.toLowerCase()
  switch(caseType){
    case "plain":
      price = 40
      break
    case "masala":
      price = 60
      break
    case "onion":
      price = 50
      break
    case "butter":
      price = 70
      break
    case "paper":
      price = 90
      break
    case "cheese":
      price = 80
      break
    default :
      price =0
  }

  console.log(price)