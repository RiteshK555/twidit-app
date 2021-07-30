import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const newThumbUpIcon =({children})=>(
    return (
        <ThumbUpIcon>
            {children.map(child=>React.cloneElement(child,{value:""}))}
        </ThumbUpIcon>
    );

);
export default newThumbUpIcon;
const  = () => {
    return (  );
}
 
export default ;