import {db} from '../../utils/firebase';
import {getSession} from 'next-auth/client';
export async function getServerSideProps(context){
    const session=await getSession(context);
    const params=context.params;
    const snapshot1=await db.collection("users").where
    return {
        props:{
            params
        }
    }
}
const Id = ({params})=> {
    console.log(params);
    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;