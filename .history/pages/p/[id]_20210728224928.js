export async function getServerSideProps(context){
    console.log(context);
    const req=context.req;
    return {
        props:{
            
        }
    }
}
const Id = ({req})=> {
    console.log(req);
    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;