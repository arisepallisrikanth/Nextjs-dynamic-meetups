// /api/newmeetup
import {MongoClient} from "mongodb"
async function handler(req,res){
    console.log('hi')
    if(req.method==='POST'){
        const data=req.body
        const {image,title,address}=data
        console.log('********************')
        console.log(req.body)
        const client=await MongoClient.connect('mongodb+srv://arisepallisrikanth:Srikanth12@cluster0.sop2ebn.mongodb.net/firstDatabase?retryWrites=true&w=majority')
        const Database=client.db()
        const meetsupCollection=Database.collection('meetsup')
        const result=await meetsupCollection.insertOne(data);    
        console.log(result)
        client.close()
        await res.status(201).json({'message':"document inserted "})

    }

}
export default handler
 