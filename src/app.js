// require Mongodb Module
const mongodb=require('mongodb')

const mongoClient=mongodb.MongoClient
const connectionURL='mongodb://127.0.0.1:27017'

// DB Name
const dbname="StudentsDB"

// connection with DB
mongoClient.connect(connectionURL, (error, response1)=>{
    if(error){
        return console.log("An error occured")
    }
    console.log("All perfect")
    const db=response1.db(dbname)

    db.collection('students').insertOne({
        name:"aya",
        age:22,
        city:"egypt"
    },(error,data)=>{
if(error){
    console.log('unable to insert data')
}
console.log(data.insertedId)
    })

////////////////////////////////////////////////////////////

    db.collection('students').insertOne({
        name:"Sayed",
        age:40,
        city:"beni suef"
    },(error,data)=>{
if(error){
    console.log('unable to insert data')
}
console.log(data.insertedId)
    })

////////////////////////////////////////////////////////////

db.collection('students').insertMany([{
        name:"abdallh",
        age:25,
        city:"egypt"
    },{
        name:"reem",
        age:25,
        city:"Mansora"
    },{
        name:"salma",
        age:25,
        city:"cairo"
    },{
        name:"ahmed",
        age:25,
        city:"October"
    },{
        name:"habiba",
        age:25,
        city:"cairo"
    },{
        name:"abd alrahman",
        age:30,
        city:"Naser City"
    },{
        name:"tarek",
        age:20,
        city:"banha"
    },{
        name:"taha",
        age:18,
        city:"cairo"
    },{
        name:"samy",
        age:21,
        city:"Alex"
    },{
        name:"Amira",
        age:19,
        city:"egypt"
    }
], (error,data)=>{
    if(error){
        console.log('unable to insert data')
    }
    console.log(data.insertedCount)
})

//////////////////////////////////////////////////////////////

db.collection('students').find({age:25}).toArray((error,students)=>{
    if(error){
        console.log('unable to find id')
    }
    console.log(students)
})

// //////////////////////////////////////////////////////////////////////////////////

db.collection('users').find({age:25}).limit(3).toArray((error,students)=>{
    if(error){
        console.log('unable to find id')
    }
    console.log(students)
})

// ////////////////////////////////////////////////////////////////////////////////

db.collection("students").updateOne({_id:mongodb.ObjectId("64dd214ea6ecf03b86e010d9")},{
    $inc:{age:20}
})

// // ////////////////////////////////////////////////////////////////////////////////////

db.collection('students').updateMany({age:25},{
    $set:{name:"Aya"}
}).then((data1)=>{
    console.log(data1.modifiedCount)
}).catch((error)=>{
    return console.log(error)
})

// // //////////////////////////////////////////////////////////////

db.collection("students").updateMany({},{
    $inc:{age:10}
})

// ///////////////////////////////////////////////////////////////////////////////

db.collection("students").deleteOne({_id:mongodb.ObjectId("64dcf4ea24ec64e2cce1ff50")}).then((data1)=>{
    console.log(data1.modifiedCount)
}).catch((error)=>{
    console.log(error)
})

// ////////////////////////////////////////////////////////////////////////////////

db.collection("students").deleteMany({age:35}).then((data1)=>{console.log(data1.deletedCount)}).catch((error)=>{
    console.log(error)
})

 })