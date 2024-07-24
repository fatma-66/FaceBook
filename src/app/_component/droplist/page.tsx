import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVert, MoreVertSharp, X } from '@mui/icons-material';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removepost } from '@/lib/postsSlice';

export default function Droplist({postdetails}:any) {

  let {allPosts,isLoading,isError,userPosts} = useSelector((state:any)=> state.posts)
  const [ID, setID] = React.useState(null);
 



 let dispatch = useDispatch<any>()
 const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 const open = Boolean(anchorEl);
 const handleClick = (event: React.MouseEvent<HTMLElement>) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };



 const handleMenuItemClick1 = () => {
 handleClose()
 dispatch(removepost(postdetails._id))

 
};



 return (
   <div>
     <Button
       id="demo-positioned-button"
       aria-controls={open ? 'demo-positioned-menu' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
       className='hover'
     >
     <>
     <MoreVertSharp/>
     </>
     </Button>
     <Menu
     className='hover'
       id="demo-positioned-menu"
       aria-labelledby="demo-positioned-button"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       anchorOrigin={{
         vertical: 'top',
         horizontal: 'left',
         
       }}
       transformOrigin={{
         vertical: 'top',
         horizontal: 'left',
       }}
     >
       <MenuItem onClick={handleMenuItemClick1}>Delete</MenuItem>
       <MenuItem onClick={handleClose}>Edit</MenuItem>
      
     </Menu>
   </div>
 );
}
