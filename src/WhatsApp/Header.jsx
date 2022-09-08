import { Avatar, Badge, Divider, InputBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import avatarImage from './avatarImage.jpeg'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import {AiOutlineSearch} from 'react-icons/ai'

const useStyle = makeStyles(theme=>({
  mainDiv:{
    // border:'1px solid black',
    height:theme.spacing(7),
    backgroundColor:'#f0f2f5',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    borderRight:'1px solid #E9ECEE'
  },
  rightIcons:{
    display:'flex'
  },
  avatar:{
    paddingLeft:theme.spacing(2)
  },
  iconRighCommon:{
    paddingRight:theme.spacing(3),
    color:'#54656f'
  },
  searchBar:{
    // border:'1px solid red',
    height:theme.spacing(6),
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  inputBase:{
    backgroundColor:'#f0f2f5',
    width:'87%',
    height:'70%',
    display:'flex',
    alignItems:'center',
    borderRadius:'8px',
    // paddingLeft:'10px'
  },
  searchIconhead:{
    padding:theme.spacing(2)
  },
  chatsHeaders:{
                // margin:'4px 4px',
                // padding:'0px',
                border:'1px solid red',
                backgroundColor: 'green',
                width: '100%',
                height: `cal(100%- 120px - 140px) `,
                overflowX: 'hidden',
                overflowY: 'auto',
                // border:'1px dotted black',
                textAlign:'justify',
  },
  manageScrollHeights:{
    border:'1px solid blue',
    height:'200px'
  }
//   chatsHeaders::-webkit-scrollbar:{
//     display: 'none',
// }
}))

const Header = () => {
  const classes = useStyle()
  return (
    <div>
    <div className={classes.mainDiv}>
      <div className={classes.avatar}>
        <Avatar src={avatarImage} alt='Guru G'/>
      </div>
      <div className={classes.rightIcons}>
        <div className={classes.iconRighCommon}>
        <Badge variant='dot' overlap='circular' color='success'>
          <DonutLargeIcon/>
          </Badge>
        </div>
        <div className={classes.iconRighCommon}>
          <ChatIcon/>
        </div>
        <div className={classes.iconRighCommon}>
          <MoreVertIcon/>
        </div>
      </div>      
    </div>

    <div className={classes.searchBar}>
      <div className={classes.inputBase}>
        <span className={classes.searchIconhead}>
        <AiOutlineSearch/>
        </span>
        <InputBase sx={{color:'RGB(8 10 13)',fontSize:'15px',paddingLeft:'8px'}} placeholder='Search or start new chat'/>
      </div>
      <div className={classes.filterIcon}>
        <FilterListIcon/>
      </div>
    </div>
    <Divider />
    <div className={classes.manageScrollHeights}>
    <div className={classes.chatsHeaders}>
      this is baby chat which is best for the secrete chats, it makes the data safe from untrDES Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quaerat vero nesciunt a nihil sit consectetur omnis rerum tenetur incidunt fugit id, assumenda necessitatibus quos expedita? Soluta sit ab libero nulla cupiditate totam fugit praesentium doloremque autem iusto neque perspiciatis, nisi impedit dolor. Fugit, earum! Quibusdam recusandae voluptatum qui velit!
    </div>
    </div>
      
    </div>
  )
}

export default Header