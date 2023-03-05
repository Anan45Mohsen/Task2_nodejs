const fs = require("fs")
const { command } = require("yargs")
const yargs = require("yargs")
const application = require("./application.js")

yargs.command({
    command : "add",
    describe:"to add an item",
    builder : {
        id : {
            describe : "adding person's id ",
            demandOption : true,
            type : "string",

    },
        fname :{
            describe :"adding first name",
            demandOption :true,
            type : "string",
        },
        lname : {
            describe : "adding last name ",
            demandOption : true,
            type : "string",

    },
    city : {
        describe : "adding person's city ",
        demandOption : false,
        type : "string",

},
    age : {
        describe : "adding person's age",
        demandOption :false,
        type : "string",

    },

},
        handler: (x) =>{
            application.addPerson(x.id ,x.fname , x.lname , x.city , x.age)

        }
})

yargs.command({
    command:"delete",
    describe : "to delete an item",
    handler : (x) =>{
        application.deletePerson(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"to read data from file datajson",
    builder:{
        id:{
            describe:"this is id to read data from data json file ",
            type:"string"

        }
    },
    handler:(x)=>{
        application.readData(x.id)
    }
})

yargs.command({
    command:"list",
    describe:"to list data ",
    handler:()=>{
        application.listData()
    }

})

yargs.command({
      command: "calculate",
      describe: "calaculate sum and average of 6 student's subjects",
      handler:(sub) => {
        application.Sum(sub.sub1, sub.sub2, sub.sub3, sub.sub4, sub.sub5, sub.sub6);
      },
    })

yargs.parse()