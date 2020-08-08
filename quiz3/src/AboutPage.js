import React, {Component} from 'react';
import './css/style.css';

class AboutPage extends Component{
    render() {
      return (
        <div>
          <div style={{padding: '30px', border: '1px solid #ccc'}}>
            <h1 style={{textAlign: 'center', padding: '20px'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
              <li><strong style={{width: '100px'}}>Nama:</strong> Nanda Cahaya Putra</li> 
              <li><strong style={{width: '100px'}}>Email:</strong> nandacahayap@gmail.com</li> 
              <li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong> Windows 10 64-bit</li>
              <li><strong style={{width: '100px'}}>Akun Gitlab:</strong> https://github.com/NandaCPT</li> 
              <li><strong style={{width: '100px'}}>Akun Telegram:</strong> @NandaCPT</li> 
            </ol>
          </div>
        </div>
      );
    }
  }

  export default AboutPage