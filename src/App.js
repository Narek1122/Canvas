
import './App.css';
import {useEffect, useState} from "react";

function App() {

    useEffect(() => {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1465929517729-473000af12ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        document.body.style.backgroundSize = 'cover'
        draw()
    })

    const [x,newX] = useState(1);
    const [y,newY] = useState(590);


    function draw(){
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d")
        ctx.beginPath()
        ctx.lineWidth = 5;
        ctx.moveTo(x - 1, y + 1);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'red'
        if(x == 864){
            window.location.reload()
        }
        if(y == 0){
            alert('Վերջացավ')
        }
        ctx.stroke();
        ctx.beginPath()
        ctx.font = '100px'
        ctx.fillText('1000',0,90)
        ctx.fillText('800',0,190)
        ctx.fillText('600',0,290)
        ctx.fillText('400',0,390)
        ctx.fillText('200',0,490)
        ctx.fillText('0',0,590)
        ctx.stroke()
        setTimeout(() => {
            newX(x + 0.5)
        },25000)
        ctx.stroke()
        ctx.beginPath()
        ctx.fillText('8:00',1,600)
        ctx.fillText('9:00',73,600)
        ctx.fillText('10:00',145,600)
        ctx.fillText('11:00',217,600)
        ctx.fillText('12:00',289,600)
        ctx.fillText('13:00',361,600)
        ctx.fillText('14:00',433,600)
        ctx.fillText('15:00',505,600)
        ctx.fillText('16:00',577,600)
        ctx.fillText('17:00',649,600)
        ctx.fillText('18:00',721,600)
        ctx.fillText('19:00',793,600)
        ctx.fillText('20:00',865,600)
        ctx.font = '50px'
        ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#00d4ff'
        for(let i=90;i<=600;i = i + 100){
            ctx.moveTo(0, i);
            ctx.lineTo(1008, i);
        }
        for(let i=0;i<=865;i = i + 72){
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 600);
        }
        ctx.stroke()
    }

  return (
    <div className="App" >
        <canvas id="myCanvas"  width={'1008px'} height={'600px'} style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/952192.jpg")`
        }}></canvas>
        <div>
            <button onClick={() => {
                newY(y - 0.5)


            }} className={'btn btn-danger'}>Click</button>
        </div>

    </div>
  );
}

export default App;
