
import {Fragment} from "react"
function ListGroup() {

    const items = [
        'New York',
        'London',
        'Mumbai',
        'Pune',
        'Delhi'
]
// if(items.length === 0)
//     return <>
//         <h1>List</h1>
//         <p> no item found</p>
//     </>
// const getMessage = () => {
//     return items.length === 0 ? <p>No item found</p> : null;
//   };
  
  return (
    <Fragment>
        <h1>List</h1>
        {/* {getMessage()} */items.length === 0 && <p>No Item found</p>}
        <ul className="list-group">
            {items.map(item => 
            <li key={item}>
                {item}
            </li>)}
        </ul>
    </Fragment>
  );
}

// We can also just put empty angular brackets to tell tht we are using fragments
 
export default ListGroup;
