import ThumbUpIcon from '@material-ui/icons/ThumbUp';
const newThumbUpIcon =({children})=>(
    <ThumbUpIcon>
        {children.map(child=>React.cloneElement(child,{val}))}
    </ThumbUpIcon>
);