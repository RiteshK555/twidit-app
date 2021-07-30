export async function getServerSideProps(context){
    console.log(ctx);
    return {
        props:{
            req
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