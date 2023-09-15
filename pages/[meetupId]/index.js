import { Fragment } from "react";
import ShowDetail from "../../components/meetups/showDetail"
import {MongoClient} from "mongodb"
import { ObjectId } from "mongodb";
import Head from "next/head";
// const {objectid}=require('mongodb')



function ShowDetails(props){
    console.log(props.meetupData.image)
    // const ident=new ObjectId()
    // console.log(ident)
    return  (
    <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta name="description" content={props.meetupData.description}/>
        </Head>
    
    <ShowDetail src={props.meetupData.image} 
    title={props.meetupData.title}
     address={props.meetupData.address} />
     </Fragment>)


    
       
}

export async function getStaticPaths(){
    const client=await MongoClient.connect('mongodb+srv://arisepallisrikanth:Srikanth12@cluster0.sop2ebn.mongodb.net/firstDatabase?retryWrites=true&w=majority')
        const Database=client.db()
        const meetsupCollection=Database.collection('meetsup')
        const ids=await meetsupCollection.find({},{_id:1}).toArray()
        const paths=ids.map((ID)=>({params:{meetupId:JSON.stringify(ID._id)}}))
        client.close()
        console.log(paths)

    return{
        fallback:"blocking",
        paths:paths
        }
    }

export async function getStaticProps(context){
    const id=context.params.meetupId
    console.log('**************')
    console.log(id)
    const client=await MongoClient.connect('mongodb+srv://arisepallisrikanth:Srikanth12@cluster0.sop2ebn.mongodb.net/firstDatabase?retryWrites=true&w=majority')
    const Database=client.db()
    const meetsupCollection=Database.collection('meetsup')
    const selected_item=await meetsupCollection.findOne({_id:new ObjectId(JSON.parse(id))})
    console.log('**********')
    console.log(selected_item)
    client.close()

    return {
        props:{
            meetupData:{...selected_item,_id: JSON.stringify(selected_item._id)}
            // meetupData:meetups_processed
            
        },
        revalidate:1
    }
}
export default ShowDetails;