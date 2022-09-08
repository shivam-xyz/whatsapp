import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useContext, useState } from 'react'
import EmptyImageDefault from './emptyNew.png'
import Headers from './Headers'
import {users} from './UserBase'
import { Avatar, Badge, Divider, InputBase } from '@mui/material'
import avatarImage from './avatarImage.jpeg'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import {AiOutlineSearch} from 'react-icons/ai'
import { context } from '../reducer_sec/ContextApi'
import ChatArea from './ChatArea'

const useStyle = makeStyles(theme=>({
  box:{
    display:'flex'
  },
  left:{
    // border:'1px solid red',
    width:'40%',
    height:'100vh',
  },
  right:{
    // border:'1px solid green',
    width:'60%',
    height:'100vh',
    overflow:'hidden'
  },
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
                // border:'1px solid red',
                backgroundColor: 'white',
                width: '100%',
                height: `83.2vh`,
                overflowX: 'hidden',
                overflowY: 'visible',
                // border:'1px dotted black',
                textAlign:'justify',
  },
  manageScrollHeights:{
    // border:'1px solid blue',
    height:'200px'
  }
//   chatsHeaders::-webkit-scrollbar:{
//     display: 'none',
// }

}))
// console.log(useStyle)

const DefaultArea = () => {
  const {showChatBox,setShowChatBox} = useContext(context)
  console.log(showChatBox)
  const [apiUserBase,setApiUserBase]= useState(users)
  const classes = useStyle()
  const clickFun=(props)=>{
    setShowChatBox([props])
  }
  // console.log(useStyle().box)
  return (
    <>
      <Box className={classes.box}>
        <div className={classes.left}>
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
          {/* <div className={classes.manageScrollHeights}> */}
            <div className={classes.chatsHeaders}>
              <Headers apiUserBase={apiUserBase} setApiUserBase={setApiUserBase} clickFun={clickFun} />            
            </div>
          </div>
        {/* </div> */}
        
        <div className={classes.right}>
        {showChatBox.length>0 ? <ChatArea chatData={showChatBox} />: <img src={EmptyImageDefault} height="100%" width="100%" alt="Empty Image" /> }
          
        </div>
      </Box>
    </>
  )
}

export default DefaultArea