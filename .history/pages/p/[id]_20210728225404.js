import {db} from '../utils/firebase';
export async function getServerSideProps(context){
    // console.log(context);
    const session=
    const params=context.params;
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