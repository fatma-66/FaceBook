'use client'
import React from 'react';
import { TextareaAutosize } from '@mui/base';
import { addPost } from '@/lib/postsSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';



export default function AddPost (){
   let router = useRouter()
  let dispatch = useDispatch<any>()
   function handleSubmit(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
let formData =  new  FormData();
const target = e.target as HTMLFormElement;
    const body = target?.body.value;
    let image = target?.image.files[0]
    formData.append('body',body);
    formData.append('image',image);
    dispatch(addPost(formData))
    router.push('/')
    router.refresh
    
    
   }

    return <>
 <form onSubmit={handleSubmit} style={{width:'80%',margin:'10px auto'}}>
<TextareaAutosize maxRows={6} minRows={10} className='form-control' name='body'>

</TextareaAutosize>
<input type='file' className='btn' name='image'/>
<button type='submit' className='btn' style={{cursor:'pointer'}}>Add post</button>
 </form>
    </>
}