'use client'
import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/base';
import { addPost } from '@/lib/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/navigation';
import { Input } from '@mui/material';
import { getLoggedUserData, UploadImage } from '@/lib/userslice';
import Image from 'next/image';
import { inherits } from 'util';




export default function UploadPhoto (){
  const [image, setImage] = useState(null);
  const [Id, setId] = useState(null);
  let {allPosts,isLoading,isError} = useSelector((state:any)=> state.posts)
  let {userData} = useSelector((state:any)=> state.users)
   let router = useRouter()
  let dispatch = useDispatch<any>()

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  }

 




   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    let formData =  new  FormData();
    let photo = e.currentTarget?.photo.files[0]
    formData.append('photo',photo);
   
   
    const response = await dispatch(UploadImage(formData));
    if (response.meta.requestStatus === 'fulfilled') {
      await dispatch(getLoggedUserData());
// allPosts.map((post)=>{
//   if (post.name === userData.name) {
//     setId(userData._id)
    
//   }
// })

      router.push('/');
    }
   }

    return <>
 <form onSubmit={handleSubmit} style={{width:'80%',margin:'10px auto'}}>

 {imagePreview && <Image src={imagePreview} alt='Image Preview' width={250} height={300} style={{ maxWidth: '100%', marginTop: '10px',border:'1px solid rgba(0,0,0,0.5)' }} />}
 <input type='file' className='btn' name='photo' onChange={handleImageChange} />
<button type='submit' className='btn' style={{cursor:'pointer'}}>Upload image</button>
 </form>
    </>
}