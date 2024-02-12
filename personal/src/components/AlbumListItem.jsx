import React from 'react'
import ExpandablePanel from './ExpandablePanel'
import PhotoList from './PhotoList'
import { CircularProgress } from '@mui/material'
import { GoTrash } from 'react-icons/go'
import { useRemoveAlbumMutation } from '../store'


function AlbumListItem({album}) {

    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleClick = () => {
             removeAlbum(album)
    }

   
    const header = (
        <>
        <button  style={{marginRight:'30px', border:'none', color:'red', backgroundColor:'#F5EEE6', cursor:'pointer', width:'50px', height:'30px'}}
        onClick={handleClick}>
          {results.isLoading ? (
                 <CircularProgress style={{width:"20px", height:'20px'}}/>
          ): (<GoTrash/>)}
           
        </button>
        {album.title}
        </>
       ) 
        


  return (
    <div>
       <ExpandablePanel header={header}>
           <PhotoList album={album}></PhotoList>
       </ExpandablePanel>
    </div>
  )
}

export default AlbumListItem
