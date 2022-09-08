import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Avatar, Badge, Divider, Grid, InputBase, TextField } from '@mui/material'
import avatarImage from './avatarImage.jpeg'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AiOutlineSearch} from 'react-icons/ai'
import SearchIcon from '@mui/icons-material/Search';
import chatBackImage from './cbi.webp'
import './whats.css'
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles(theme=>({
    header:{

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
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        // border:'1px solid green'
      },
      avatar:{
        paddingLeft:theme.spacing(2),
        // border:'1px solid red'
      },
      iconRighCommon:{
        paddingRight:theme.spacing(2),
        color:'#54656f'
      },
      
      innerChatDiv:{
        width:'100%',
        height:'100%',
        overflowY:'scroll',
        paddingRight:'12px',
        // boxSizing:'content-box'
        backgroundImage: 'url(chatBackImage)'
      },
      iconsAll:{
        display:'flex'
      },
      status:{
        color:'#7B7B7B'
      },
      FooterMainDiv:{
        // border:'1px solid black',
        height:theme.spacing(7),
        backgroundColor:'#f0f2f5',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderRight:'1px solid #E9ECEE'
      },
      inputBase:{
        backgroundColor:'white',
        borderRadius:'10px'
        // width:'50%',
        // height:'50px'
      },
      smile:{
        display:'flex'
      },
      smileCommon:{
        marginLeft:'12px'
      },
      mice:{
        textAlign:'center'
      }
}))

const ChatArea = ({chatData}) => {
    const classes = useStyles()
    const [ipb,setIpb]= useState('')
    console.log(ipb)
    const onChangeHandler=(e)=>{
        setIpb(e.target.value)
    }

  return (
    <div>
        {chatData.map((m,ind)=>{return(
            <Grid container key={ind} className={classes.mainDiv}>
            <Grid sm={1} md={1.3} lg={1.3} item className={classes.avatar}>
              <Avatar src={m.image} alt={m.name}/>
            </Grid>
            <Grid sm={11} md={10.7} lg={10.7} item className={classes.rightIcons}>
                <div className={classes.nameNstatus}>
                    <div>{m.name}</div>
                    <div><small className={classes.status}>{m.status}</small></div>
                </div>
                <div className={classes.iconsAll}>
                        <div className={classes.iconRighCommon}>
                            <SearchIcon/>
                        </div>
                        <div className={classes.iconRighCommon}>
                            <MoreVertIcon/>
                        </div>
                </div>
            </Grid>      
          </Grid>
        )})}
        <div  className="chat">
            <div className={classes.innerChatDiv}>
            Conversation Area
            </div>
        </div>

        <div className={classes.footer}>
            <Grid container className={classes.FooterMainDiv}>
                 <Grid sm={3} md={2} lg={2} item className={classes.smile}>
                    <div className={classes.smileCommon}><TagFacesIcon /></div>
                    <div className={classes.smileCommon}><AttachmentIcon/></div>
                 </Grid>
                 <Grid sm={8} md={9} lg={2} item className={classes.footerSearch}>
                    <div className={classes.inputBase} >
                        <InputBase onChange={onChangeHandler} minRows={1} maxRows={5} placeholder="Type a message" sx={{width:'100%',height:'40px',paddingLeft:'10px'}}/>
                    </div>
                 </Grid>
                 <Grid sm={1} md={1} lg={2} item className={classes.mice}>
                    {ipb.length>0? <div><SendIcon/></div> :<div><MicIcon/></div>}
                    
                 </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default ChatArea