export async function getServerSideProps(context){
    console.log(context);
    const params=context.req;
    return {
        props:{
            req
        }
    }
}
const Id = ()=> {

    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;