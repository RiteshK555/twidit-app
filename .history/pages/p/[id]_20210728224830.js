export async function getServerSideProps(ctx){
    console.log(ctx);
    return {
        props:{
            req
        }
    }
}
const Id = ({req} => {
    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;