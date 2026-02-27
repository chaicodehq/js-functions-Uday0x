1/**
 * 🍱 Mumbai Tiffin Service - Plan Builder
 *
 * Mumbai ki famous tiffin delivery service hai. Customer ka plan banana hai
 * using destructuring parameters aur rest/spread operators.
 *
 * Functions:
 *
 *   1. createTiffinPlan({ name, mealType = "veg", days = 30 })
 *      - Destructured parameter with defaults!
 *      - Meal prices per day: veg=80, nonveg=120, jain=90
 *      - Agar mealType unknown hai, return null
 *      - Agar name missing/empty, return null
 *      - Return: { name, mealType, days, dailyRate, totalCost }
 *
 *   2. combinePlans(...plans)
 *      - Rest parameter! Takes any number of plan objects
 *      - Each plan: { name, mealType, days, dailyRate, totalCost }
 *      - Return: { totalCustomers, totalRevenue, mealBreakdown }
 *      - mealBreakdown: { veg: count, nonveg: count, ... }
 *      - Agar koi plans nahi diye, return null
 *
 *   3. applyAddons(plan, ...addons)
 *      - plan: { name, mealType, days, dailyRate, totalCost }
 *      - Each addon: { name: "raita", price: 15 }
 *      - Add each addon price to dailyRate
 *      - Recalculate totalCost = new dailyRate * days
 *      - Return NEW plan object (don't modify original)
 *      - addonNames: array of addon names added
 *      - Agar plan null hai, return null
 *
 * Hint: Use { destructuring } in params, ...rest for variable args,
 *   spread operator for creating new objects
 *
 * @example
 *   createTiffinPlan({ name: "Rahul" })
 *   // => { name: "Rahul", mealType: "veg", days: 30, dailyRate: 80, totalCost: 2400 }
 *
 *   combinePlans(plan1, plan2, plan3)
 *   // => { totalCustomers: 3, totalRevenue: 7200, mealBreakdown: { veg: 2, nonveg: 1 } }
 */
export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {
  // Your code here
  if(mealType == "" || mealType === undefined){
    return null
  }

    if(name == "" || name === undefined){
    return null
  }
  if(mealType !="veg" && mealType!="nonveg" && mealType!="jain"){
    return null
  }


  let price = 0
  switch(mealType){
    case "veg":
      price = 80
      break
    case "nonveg":
      price = 120
      break
    case "jain":
      price = 90
      break
     default:
      price = 0
      
  }
  let dailyRate = price
  let totalCost = price * days

  return {
    name,
    mealType,
    days,
    dailyRate,
    totalCost
  }
  

}

export function combinePlans(...plans) {
  // Your code here
  let totalCustomers = 0;
  let totalRevenue = 0

  if(plans.length == 0){
    return null
  }
  let mealBreakdown ={
    veg:0,
    nonveg:0
  }
  let final = plans.map((i)=>{
    if(i.name){
       totalCustomers++
    }

    if(i.dailyRate){
       totalRevenue += i.dailyRate * i.days
    }

    if(i.mealType){
        if(i.mealType == "veg"){
          mealBreakdown.veg++
        }
        if(i.mealType == "nonveg"){
          mealBreakdown.nonveg++
        }
    }
  })


  return {
    totalCustomers,
    totalRevenue,
    mealBreakdown
  }
}

export function applyAddons(plan, ...addons) {
  // Your code here
  if(!plan){
      return null
  }

  let newPlan = {...plan}
  let addonCost = 0
  let final = addons.map((i)=>{
    if(i.price){
        addonCost += i.price
    }
  })
  // let addonArray = addons.map((i)=>i.name)

  let newDailyRate = plan.dailyRate + addonCost
  let newTotalCost = newDailyRate * plan.days

   
   const newplan ={
    ...plan,
    dailyRate:newDailyRate,
    totalCost:newTotalCost,
    addonNames:addons.map((i)=>i.name)
   } 

   return newplan

    
}
