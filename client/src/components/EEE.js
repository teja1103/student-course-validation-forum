import React,{useState} from 'react'
import './table.css'
import PdfDownloader from './pdf'
import logo from './vjitnew.png';
import axios from 'axios';

const Eee = () => {
  
  const [data,setData] = useState({
    fullname : localStorage.getItem('fullname'),
    email : localStorage.getItem('email'),
    branch : localStorage.getItem('branch'),
    collegeId : localStorage.getItem('collegeId')
  })
  const submitHandler = () =>{
    
    console.log(data)
    axios.post('http://localhost:5000/register',data).then(res => alert(res.data))
  }



  var [check,setCheck]=useState(false);
  const logo = require('./vjitnew.png');
  return (
    <>
    <img class="log" src={logo} />
    <div id="down">
      <div class="padding">
      <table>
        <tr>Name      : {localStorage.getItem('fullname')}</tr>
        <tr>Roll No.  : {localStorage.getItem('collegeId')}</tr>
        <tr>Branch    : {localStorage.getItem('branch')}</tr>
      </table>
      </div>
        <table>
        <tr>
          <th><p >S.No.</p></th>
          <th><p >COURSE CODE</p></th>
          <th><p >COURSE TITLE</p></th>
          <th><p >L</p></th>
          <th><p >T</p></th>
          <th><p >P</p></th>
          <th><p >CREDITS</p></th>
          {/* <td><p >CHECK</p></td> */}          
        </tr>
      
        <tr>
          <td><p >1</p></td>
          <td><p >A221001</p></td>
          <td><p >MATHEMATICS 1</p></td>
          <td><p >3</p></td>
          <td><p >1</p></td>
          <td><p >0</p></td>
          <td><p >4.0</p></td>
          {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input></div>
            </td> */}
          
        </tr>
        <tr>
          <td><p >2</p></td>
          <td><p >A221002</p></td>
          <td><p > APPLIED PHYSICS</p></td>
          <td><p >3</p></td>
          <td><p >1</p></td>
          <td><p >0</p></td>
          <td><p >4.0</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
        </tr>
        <tr>
          <td><p >3</p></td>
          <td><p >A220181</p></td>
          <td><p >APPLIED PHYSICS LAB</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >3</p></td>
          <td><p >1.5</p></td>
          {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
          
        </tr>
        <tr>
          <td><p >4</p></td>
          <td><p >A221501</p></td>
          <td><p >C PROGRAMMING FOR ENGINEERS</p></td>
          <td><p >3</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >3.0</p></td>
          {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td>   */}
        </tr>
        <tr>
          <td><p >5</p></td>
          <td><p >A221581</p></td>
          <td><p >C PROGRAMMING FOR ENGINEERS LAB</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >2</p></td>
          <td><p >1.0</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"/> 
          </div></td> */}
        </tr>
       
         <tr>
          <td><p >6</p></td>
          <td><p >A221003</p></td>
          <td><p >ENGLISH FOR SKILL ENHANCEMENT</p></td>
          <td><p >2</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >2.0</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
        </tr>
         
         <tr>
          <td><p >7</p></td>
          <td><p >A221082</p></td>
          <td><p >ENGLISH LANGUAGE AND COMMUNICATION SKILLS LAB</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >2</p></td>
          <td><p >1.0</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
        </tr>
         <tr>
          <td><p >8</p></td>
         <td><p >A221201</p></td>
          <td><p>ELEMENTS OF ELECTRICAL & ELECTRONICS ENGINEERING</p></td>
          <td><p >0</p></td>
          <td><p >0</p></td>
          <td><p >2</p></td>
          <td><p >1.0</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
        </tr>
         <tr>
          <td><p >9</p></td>
          <td><p >A221381</p></td>
          <td><p >ENGINEERING WORKSHOP</p></td>
          <td><p >0</p></td>
          <td><p >1</p></td>
          <td><p >3</p></td>
          <td><p >2.5</p></td>
        {/* <td><div class="magic">
            <input type="checkbox" class="check" id="check"> </input>
          </div></td> */}
        </tr>
      </table>
    <div class="agree">
          
        <input type="checkbox" style={{marginLeft:"40px"}} class="checking" onChange={()=>{setCheck(!check); console.log(check);}}/>&nbsp;&nbsp;<h4>I agree saying I have read all the subjects</h4>
        </div>
        {check ?
       <div class="print">
        {console.log(check)}
        <PdfDownloader 
        downloadFileName="vjitSyllabus" 
        rootElementId="down" 
       /><br /><br />
       <button onClick={()=> submitHandler()} className="btn btn-success">Done</button>

       </div>
       :
       ""}
       
       <br /><br /><br />
    </div>
    </>
  )
}

export default Eee