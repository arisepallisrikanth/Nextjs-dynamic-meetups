import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router=useRouter()
  console.log(props.key)
  function showDetailshandler(){
  router.push('/'+props.id)
  console.log(props)
  console.log(props.id)

  }
  return (
    <li className={classes.item}>

      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailshandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
