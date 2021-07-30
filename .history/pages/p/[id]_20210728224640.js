export async function getServerSideProps(ctx){
    console.log(ctx);
    return {
        props:{
            ctx,
        }
    }
}
const Id = ({ctx}) => {
    return ( 
        <h1>
            hi
        </h1>
     );
}
 
export default Id;