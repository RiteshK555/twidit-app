export async function getServerSideProps(context){
    console.log(context);
    const params=context.params;
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