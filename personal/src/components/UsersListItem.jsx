import React from 'react';
import ExpandablePanel from './ExpandablePanel';
import AlbumList from './AlbumList';
import { GoTrash } from "react-icons/go";
import { useRemoveUserMutation } from '../store';
import CircularProgress from '@mui/material/CircularProgress';

function UsersListItem({ user }) {


    const [removeUser, results] = useRemoveUserMutation()

   const handleClick = () => {
            removeUser(user)
   }

   const header = (
    <>
    <button  style={{marginRight:'30px', border:'none', color:'red', backgroundColor:'#F5EEE6', cursor:'pointer', width:'50px', height:'30px'}}
    onClick={handleClick}>
      {results.isLoading ? (
             <CircularProgress style={{width:"20px", height:'20px'}}/>
      ): (<GoTrash/>)}
       
    </button>
    {user.name}
    </>
   ) 
    
   


  return <div>
    <ExpandablePanel header={header}>
        <AlbumList user={user}></AlbumList>
    </ExpandablePanel>
  </div>;
}

export default UsersListItem;
