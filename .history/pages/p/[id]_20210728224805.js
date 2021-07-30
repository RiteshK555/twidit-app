export async function getServerSideProps(ctx){
    console.log(ctx);
    return {
        props:{
            ctx.req,
        }
    }
}
const Id = () => {
    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;