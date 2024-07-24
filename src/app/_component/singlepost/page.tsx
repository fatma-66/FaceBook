'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Settings } from '@mui/icons-material';
import Droplist from '../droplist/page';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedUserData } from '@/lib/userslice';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { addComment, getAllPosts, getUserComments } from '@/lib/postsSlice';
import Comment from '../comment/page';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SinglePost({postdetails}:any) {
  let dispatch = useDispatch<any>()
  let {allPosts,comments} = useSelector((state:any)=> state.posts)

  const [expanded, setExpanded] = React.useState(false);

  const settings = [  'Profile'];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
//need to understand why i didn't use it inside  useEffect
  const handleDisplayComment = () => {
    
    dispatch(getUserComments(postdetails._id));
     handleExpandClick();
 
   };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={postdetails?.user?.photo} sx={{ bgcolor: red[500] }} aria-label="">
          
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
           
          <Droplist/>
          </IconButton>
        }
        title={postdetails?.user?.name}
        subheader="September 14, 2016"
      />
      {/* <Image src={postdetails.image}  height="194" width={'100'}  alt="Paella dish"/> */}
      <CardMedia
        component="img"
        height="194"
        image={postdetails?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      {postdetails?.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add comment">
          {/* <AddCommentIcon onClick ={handleAddComment}/> */}
          <Box>
          <Comment postData={postdetails}></Comment>
          </Box>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleDisplayComment}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
            {comments?.map((comment:any)=>
            
        <Box key={comment._id} className='comment'>

            <Box sx={{display:'flex',alignItems:'center'}}>
                <Avatar src={comment.commentCreator.photo} sx={{ bgcolor: red[500] ,width:'30px', height:'30px'}} aria-label="recipe"/>
                 
                 <h5 style={{marginLeft:'2px'}}>{comment.commentCreator.name}</h5>
                
            </Box>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
           <Typography  paragraph sx={{margin:'5px'}}>
           {comment.content}
           </Typography>
           <DeleteOutlineIcon sx={{cursor:'pointer'}}/>
           </Box>
           
        </Box>
        
        
        )}
          


         
         
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
