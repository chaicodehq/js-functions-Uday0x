export function combinePlans(...plans) {
  // Your code here
  console.log(plans)
  let final = plans.map((i)=>i.name)
  console.log(final)
}

combinePlans({plan1:"uday",name:"king"},{plan1:"sai",name:"king"},{plan3:"sai",name:"king"})