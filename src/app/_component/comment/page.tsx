
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddCommentRounded } from '@mui/icons-material';
import { addComment, getAllPosts } from '@/lib/postsSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Router } from 'next/router';

export default function Comment({postData}:any) {

let router = useRouter()
let dispatch = useDispatch()
let {allPosts,isLoading,isError} = useSelector((state:any)=> state.posts)

 async function handleSubmit(e:Event){
        e.preventDefault();
       
    const content = e.currentTarget?.content.value;
    const post:string = postData._id;
const formData = {
  "content":content,
  "post":post
}
  
console.log('postData:', postData);  
console.log('postData._id:', postData._id);  

 await  dispatch(addComment(formData));
    router.refresh()
    handleClose();     
    }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const content = e.currentTarget?.content.value;
//     const postId = postData._id;
//     await dispatch(addComment({ content, postId }));
//     router.refresh();
//     handleClose();
// }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='hov' sx={{backgroundColor:'transparent'}}  onClick={handleClickOpen} startIcon={<AddCommentRounded/>}>
     
      </Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit:handleSubmit,
        }}
      >
        <DialogTitle sx={{fontWeight:'bold'}}>Add Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enteract with people on Facebook timelin to have good experience
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="content"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
          />
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  type="submit">add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}








