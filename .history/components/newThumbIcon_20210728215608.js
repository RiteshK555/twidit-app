import ThumbUpIcon from '@material-ui/icons/ThumbUp';
export default newThumbUpIcon;
const newThumbUpIcon = ({value}) => {
    function handleClick(e) {
        console.log(e.target.value);
    }
    return ( 
        <h1 onClick={handleClick} abcdefg={value}>test</h1>
     );
}
 
export default newThumbUpIcon;