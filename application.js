
const fs = require("fs")


////////////////////adding/////////////////////////////////
const addPerson = (id,fname , lname , city , age ) =>{
    const allData = loadData()

    const duplicatedData = allData.filter((obj) =>{
        return obj.id === id
    })
    console.log(duplicatedData)

    if(duplicatedData.length == 0){
        allData.push({
            id : id,
            fname: fname,
            lname : lname,
            city : city,
            age : age
        })
        saveAllData(allData)

    }
    else{
        console.log("Error Duplicated ID")
    }
 
}


const loadData = () =>{
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}

const saveAllData = (allData) =>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json" , saveAllDataJson)
}
//////////////////////Deleting///////////////////

const deletePerson = (id) =>{
    const allData = loadData()

    const dataToKeep = allData.filter((obj) =>{
        return obj.id !== id
    })

    console.log(dataToKeep)
    saveAllData(dataToKeep)
}
/////////////Read Data///////////////////

const readData = (id) =>{
    const allData = loadData()
    const itemNeeded = allData.find((obj) =>{
        return obj.id == id
    })
 console.log(itemNeeded)

}
///////////////List Data////////////////////

const listData= () =>{
    const allData = loadData()

    allData.forEach((obj)=>{

        console.log(obj.fname , obj.city , obj.age)
    })
}
//////////////////ADDING SUBJECT/////////////////////////////
const Sum = (sub1, sub2, sub3, sub4, sub5, sub6) => {
  const allData = loadData();
  const lastId = LastId(allData);
  const degrees = [sub1, sub2, sub3, sub4, sub5, sub6];
  const totalDegrees = degrees.reduce((a, b) => a + b, 0);
  const AverageOfDegrees = Math.round((totalDegrees * 100) / 600);
  allData.push({
    id: lastId + 1,
    sub1: sub1,
    sub2: sub2,
    sub3: sub3,
    sub4: sub4,
    sub5: sub5,
    sub6: sub6,
    total: totalDegrees,
    average: AverageOfDegrees,
  });
  saveAllData(allData)
}
const LastId = (allData) => {
  try {
    const lastElement = allData.slice(-1);
    return lastElement[0].id;
  } catch {
    return 0;
  }
}


module.exports = {
    addPerson,
    deletePerson,
    readData,
    listData,
    Sum

}