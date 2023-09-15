import {MongoClient} from "mongodb"

import Layout from "../components/layout/Layout"
import MeetupList from "../components/meetups/MeetupList"
import { Fragment } from "react"
import Head from "next/head"
// const Dummy_items=[
//   { id:'id1',
//    title:'title1',
//    image:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQUGqASCqzBZbI2T5Of9ikXwS7YOZX_pGmWW0OpMNlixZrvMqzXDPPyy-UhUJaO5xSW',
//    address:'address1',
//    description:'description1'},
//    {
//        id:'id2',
//        title:'title2',
//        image:'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQUGqASCqzBZbI2T5Of9ikXwS7YOZX_pGmWW0OpMNlixZrvMqzXDPPyy-UhUJaO5xSW',
//        address:'address2',
//        description:'description2'
//    }

// ]
function Homepage(props){
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Places to visit"/>
      </Head>
    <MeetupList meetups={props.meetups}/>
    </Fragment>
  )
 
}
// export async function getServerSideProps(context){
//   const req=context.req
//   const res=context.res
//   return(
//     {
//       props:{
//         meetups:Dummy_items
//       }
//     }
//   )
// }
export async function getStaticProps(){
  const client=await MongoClient.connect('mongodb+srv://arisepallisrikanth:Srikanth12@cluster0.sop2ebn.mongodb.net/firstDatabase?retryWrites=true&w=majority')
        const Database=client.db()
        const meetsupCollection=Database.collection('meetsup')
        const meetups=await meetsupCollection.find().toArray()
        const meetups_processed=meetups.map((meetup)=>({
          title:meetup.title,
          image:(meetup.image),
          address:meetup.address,
          description:meetup.description,
          id:JSON.stringify(meetup._id)
  
        
      }))
      // console.log(meetups_processed)

       

  return {
    props:{
      meetups:meetups_processed},
    revalidate:1
  
  }
}


export default Homepage
