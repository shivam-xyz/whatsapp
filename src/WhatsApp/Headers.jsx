import { Avatar, Divider, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme=>({
    mainDiv:{
        // border:'1px solid blue',
        width:'100%',
        height:theme.spacing(9.9)
    },
    left:{
        // border:'1px solid green',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'sienna'
    },
    right:{
        // border:'1px solid black',
        // backgroundColor:'silver',
        padding:'8px',
        // "&:hover":{
        //     backgroundColor:'silver'
        // }

    },
    right1:{
        // border:'1px solid black',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'8px 8px 18px 8px',

    },
    userName:{
        fontSize:'16px'
    },
    rightLeft:{
        // border:'1px solid red'
    },
    rightRight:{
        // border:'1px solid green'
    },
    online:{
        color:'green',
        display:'flex',
        justifyContent:'center'
    },
    time:{
        color:'#7B7B7B',
        fontSize:'15px'
    },
    subChat:{
        color:'#7B7B7B',
        fontSize:'14px'
    }
}))

const Headers = ({apiUserBase,setApiUserBase,clickFun}) => {
    const classes = useStyles()
  return (
    <>
        <Grid container className={classes.mainDiv}>
        {apiUserBase.map((ele,ind)=>{return (
            <React.Fragment key={ind}>
            <Grid sm={2} md={2} lg={2} item className={classes.left}>
                <Avatar sx={{height:'55px',width:'60px'}} src={ele.image}/>
            </Grid>
            <Grid sm={10} md={10} lg={10} item className={classes.right} onClick={()=>{clickFun(ele)}} >
            <div className={classes.right1}>
                <div className={classes.rightLeft}>
                    <div className={classes.userName}>
                        {ele.name}
                    </div>
                    <div><small className={classes.subChat}>{ele.lastChat.length>30? ele.lastChat.slice(0,28)+'...' : ele.lastChat}</small></div>
                </div>
                <div className={classes.rightRight}>
                    <div className={classes.time}>{ele.time}</div>
                    <div><small className={classes.online}>{ele.status}</small></div>
                </div>
                </div>
                <Divider/>
            </Grid>
            </React.Fragment>
        )})}
            
            
        </Grid>
    </>
  )
}

export default Headers