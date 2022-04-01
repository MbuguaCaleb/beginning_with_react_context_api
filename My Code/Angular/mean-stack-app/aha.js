function dedupe(list) {
 const finalList = []

 list.forEach((item)=>{

  if(finalList.length == 0){
     finalList.push(item)
  }


  if(finalList.length > 1){
    finalList.forEach((itemTwo)=>{
    if(itemTwo.id == item.id){

    }else{
      finalList.push(item)
    }
  })

  })

 })


  return finalList
}
