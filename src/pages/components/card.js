
import himage from '../assets/images/vector.png'
import Image from 'next/image';

const Card = ({featured})=>{
return(
    <div style={{width:'240px', backgroundColor:' #F5F4F4',marginTop:"40px",marginBottom:'40px',borderRadius:'10px',border:'1px solid rgba(0, 0, 0, 0.18)',}}>
        <div style={{margin:'0 auto' ,width:'100px',padding:'10px', position:"relative" }}> 
        {featured ? 
        <div style={{backgroundColor:'#D96A6B',position:'absolute',top:'-15px',right:'-80px',width:'70%',textAlign:'center',borderRadius:'10px',height:'30px'}}><p style={{paddingTop:'5px',color:'white',fontWeight:'bold',fontSize:'12px'}}>Rare Find</p></div>
    :<div style={{display:'none'}}></div>}
        <center>

        <Image style={{margin:'0 auto' ,  }} src={himage} alt='H' width={50} height={50}/><p style={{color:'#85C371'}}>Holiday Inn</p>
        </center>
        </div>
        <div style={{border:'1px solid rgba(0, 0, 0, 0.18)',boxShadow:'0px -2px 8px rgba(0, 0, 0, 0.25)',backgroundColor:'#EEEEEE',borderRadius:'10px'}}>
            <p style={{color:"#959595",paddingLeft:"15px"}}>1.5 miles away from joblocation. </p>
            <div style={{display:'flex',justifyContent:"space-around",flexWrap:"wrap"}}>
            <p style={{color:"#959595",paddingLeft:"10px"}}>Singles: $120 <br /> Doubles: $145</p>
<button style={{height:'40px',width:'130px',border:'none',borderRadius:'10px',backgroundColor:'#44A16F',color:'white'}}>BOOK NOW</button>
            </div>
        </div>
    </div>
)
}
export default Card