import half1 from '../assets/images/half1.png'
import React from 'react';

import half2 from '../assets/images/half2.png'
import { Layout, Menu, theme } from 'antd';
import  { useState , useEffect} from 'react';
import styles from '@/styles/Home.module.css'
import Card from './card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image';
const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const  [collapse, setcollapse] = useState('tclick')
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      setScreenWidth(window.innerWidth);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);
  console.log(screenWidth);
  const [errormes ,seterrormes] = useState('')
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [message , setmessage] = useState('')
  const [messarray, setMessarray] = useState([]);
  const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
// const seconds = now.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedTime = `${hours%12}:${minutes}:${ampm}`;
console.log(formattedTime);
  return (
    <Layout >
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        width={270}
        // className={styles.slider}
        style={{backgroundColor:'white'}}
        // style={{width:'296px',backgroundColor:'brown'}}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          console.log(collapse);
          if(!collapsed && type == 'clickTrigger'){
              setcollapse('fclick')
            }
            else if(collapse && type == 'clickTrigger'){
               setcollapse('tclick')
           }
            else if(!collapse && type == "responsive"){
               setcollapse('fresponse')
           }
            else if(collapse && type == 'responsive'){
               setcollapse('tresponce')
           }
        }}
      >
        <div className="logo" />
        {/* <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['4']}
          style={{width:'254px',backgroundColor:'brown'}}
          items={['LODGN', 'Current requests', 'Ongoing stays', 'Previous stays','Reports'].map(
            (icon, index) => ({
              key: String(index + 1),
            //   icon: React.createElement(icon),
              label: icon,
            }),
          )}
        > */}
         <Menu onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        mode="inline"
        breakpoint="sm"
        // style={{backgroundColor:'white'}}
        theme='light'
        defaultSelectedKeys={['4']}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}>
            <div  className={styles.Sidebar}>
          <p className={styles.lodgn}>LODGN</p>
          <p className={styles.current}>Current requests </p>
          <p className={styles.Ongoing}>Ongoing stays</p>
          <p className={styles.Previous}>Previous stays</p>
          <p className={styles.Reports}>Reports</p>
          <center>

          <button className={styles.logout}>Log - Out</button>
          {/* <div className={styles.helpdesk}> */}
          <p className={styles.helpdesk}>Help-Desk:</p>
          <p className={styles.helpno}>786-874 9988</p>
          </center>
          </div>

        </Menu>
        {/* </Menu> */}
      </Sider>
      <Layout>
        <Header
        className={styles.request}
          style={{
            padding: 40,
            height:90,
            backgroundColor: '#D9D9D9',
          }}
        >{
            (collapse == 'tclick' || collapse == 'tresponce' || window.innerWidth > 750)?
            <h1 className={styles.request}>You currently  have 3 requests</h1>
        :
        <h1></h1>
        }
              </Header>
        <Content
          style={{
            // margin: '24px 16px 0',
            backgroundColor:'#D9D9D9'
          }}
        >
          {/* <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          > */}
{
    (collapse == 'tclick' || collapse == 'tresponce' || collapse == 'fresponce' || window.innerWidth > 750)? 
            <div style={{ backgroundColor: '#D9D9D9', width: '100%', }}>
                <div onClick={handleShow} style={{backgroundColor:'#69AC80',width:"100px",height:'100px',position:'fixed',top:'80%',right:"3%",borderRadius:"50px",padding:"5px"}}><Image style={{display:'inline',position:'absolute',top:"14px",left:'8px',padding:'5px'}} src={half1}/><Image style={{display:"inline",padding:"5px"}} src={half2}/></div>
            <div className={styles.rectonemain}>
              <div className={styles.rectone}>
                <div style={{  width: '35%', padding: '10px', }}><h1 className={styles.rectoneheading}>St Judes Hospital   </h1>
                  <p className={styles.rectonep}>Sarasota,FL. 33178</p></div>
                <div style={{  width: '20%', display: 'flex',justifyContent:'space-evenly',marginTop:'10px',borderRight: '1.3193px solid rgba(0, 0, 0, 0.3)', borderLeft: '1.3193px solid rgba(0, 0, 0, 0.3)' }}><h1 className={styles.rectoneheading}>10<p className={styles.rectonepp}>Oct</p>  </h1><h1 className={styles.rectoneheadingdash} > - </h1><h1 className={styles.rectoneheading}>17<p className={styles.rectonepp}>Dec</p> </h1>
                </div>
                <div style={{  width: '45%',padding: '10px',}}><h1 className={styles.rectoneheading}>20 Rooms</h1>
                  <p className={styles.rectonep}>10 Singles, 10 doubles</p></div>

              </div>

<div className={styles.completebar}><p className={styles.completebarp} style={{width:'35%',borderTopLeftRadius:'25px',borderBottomLeftRadius:'25px',backgroundColor:'yellow'}}>RECEIVED</p>
<p className={styles.completebarp} style={{width:'30%',borderRight: '1.3193px solid rgba(0, 0, 0, 0.3)', borderLeft: '1.3193px solid rgba(0, 0, 0, 0.3)'}}>NEGOTIATING</p>
<p className={styles.completebarp} style={{width:'35%',borderTopRightRadius:'25px',borderBottomRightRadius:'25px'}}>COMPLETED</p></div>
            </div>
            <div className={styles.recttwomain} >
            <div className={styles.rectone}>
                <div style={{  width: '35%', padding: '10px', }}><h1 className={styles.rectoneheading}>St Judes Hospital   </h1>
                  <p className={styles.rectonep}>Sarasota,FL. 33178</p></div>
                <div style={{  width: '20%', display: 'flex',justifyContent:'space-evenly',marginTop:'10px',borderRight: '1.3193px solid rgba(0, 0, 0, 0.3)', borderLeft: '1.3193px solid rgba(0, 0, 0, 0.3)' }}><h1 className={styles.rectoneheading}>10<p className={styles.rectonepp}>Oct</p>  </h1><h1 className={styles.rectoneheadingdash} > - </h1><h1 className={styles.rectoneheading}>17<p className={styles.rectonepp}>Dec</p> </h1>
                </div>
                <div style={{  width: '45%',padding: '10px',}}><h1 className={styles.rectoneheading}>20 Rooms</h1>
                  <p className={styles.rectonep}>10 Singles, 10 doubles</p></div>

              </div>
              <div className={styles.completebar} style={{backgroundColor:'#44A16F',marginLeft:'14px',width:'80%'}}>
                <p className={styles.completebarptwo}>COMPLETED</p>
              </div>
              <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',flexDirection:'row'}}>
                <Card featured='true'/>
                <Card/>
                <Card/>
                
              </div>
            {/* <h1>kkko</h1> */}
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{textAlign:'center',margin:'0 auto',fontSize:'25px',borderBottom:'1px solid gray',width:'90%'}}>CHAT</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{height:"90%",padding:'10px'}}>
          <p style={{textAlign:'center',margin:'0 auto',fontSize:'18px',marginBottom:'5px',width:'90%'}}>{errormes}</p>
          {messarray.map((arr) => (
        <p style={{width:"80%",backgroundColor:"#44A16F",borderRadius:"5px",color:"white",marginLeft:"20%" ,paddingLeft:'5px'}}>{arr} <p style={{fontSize:'10px',marginLeft:'85%' }}>{formattedTime}</p></p>
      ))}
          </div>
          <div style={{marginTop:"20px"}}><input placeholder='Please type a message' value={message} onChange={(e)=> {setmessage(e.target.value);seterrormes("")}} className={styles.input} style={{outline: 'none',width:"75%",padding:"5px", borderRadius:"5px" , border:"1px solid #44A16F"}} />
          <button onClick={() => { 
            if (message.trim() == ''){
              seterrormes("")
            }else{
              seterrormes("")

              setMessarray((prevArray) => [...prevArray, message]); setmessage('')}
            }
            
            } style={{width:"20%", marginLeft:"5%",padding:"5px",backgroundColor:'#44A16F',color:"white",border:"none",borderRadius:"5px"}}>SEND</button></div>
        </Offcanvas.Body>
      </Offcanvas>
          </div>
           :<div style={{backgroundColor:'#D9D9D9'}}></div>
}
          {/* </div> */}
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;