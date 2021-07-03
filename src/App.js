import './App.css';
import {useEffect, useState} from "react";
import Vote from "./Components/Vote";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

function App() {

    useEffect(() => {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1465929517729-473000af12ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        document.body.style.backgroundSize = 'cover'
        if (y) {
            draw()
        }

    })

    const [bol, newBol] = useState(true);
    const [x, newX] = useState(1);
    const [y, newY] = useState(0);
    const [inp, newInp] = useState();


    function draw() {

        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d")
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.moveTo(x - 1, y + 1);//գծի սկիզբե
        ctx.lineTo(x, y);//գծի ավարտե
        ctx.strokeStyle = 'red'
        if (x == 864) {
            window.location.reload()
        }
        if (y == 0) {
            alert('Վերջացավ')
        }
        ctx.stroke();
        ctx.beginPath()
        ctx.fillText(inp, 0, 5)
        ctx.font = '100px'
        let a = inp
        for (let i = 0; i < (inp * 0.5); i += 50) {
            //տեղադռւմ ենք քանակե
            ctx.fillText(a, 0, i)
            a -= 100
        }

        ctx.stroke()
        //ժամանակ ենք դնում 25 վարկյանե մեկ 0․5 px-ով մեցանա
        setTimeout(() => {
            newX(x + 0.5)
        }, 25000)
        ctx.stroke()
        ctx.beginPath()
        let b = 8
        for (let i = 1; i < 937; i += 72) {
            //տեղադռւմ ենք ժամերե
            ctx.fillText(b + ':00', i, (inp * 0.5))
            b += 1

        }
        console.log(y)
        ctx.font = '50px'
        ctx.stroke()
        ctx.beginPath()
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = '#00d4ff'
        for (let i = 0; i <= (inp * 0.5); i = i + 50) {
            //բաժանում ենք ընտրած քանակների
            ctx.moveTo(0, i);
            ctx.lineTo(1008, i);
        }
        for (let i = 0; i <= 865; i = i + 72) {
            //բաժանում ենք ժամերի
            ctx.moveTo(i, 0);
            ctx.lineTo(i, (inp * 0.5));
        }
        ctx.stroke()
        ctx.beginPath()
        //բաժանում ենք 5 րոպեների
        ctx.lineWidth = 0.2;
        ctx.strokeStyle = '#F0F8FF'
        for (let i = 0; i <= 865; i = i + 6) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, (inp * 0.5));
        }
        ctx.stroke()
    }


    function input() {

        if (bol) {
            return <Vote
                a={vote}
            />
        } else {
            return <br/>
        }
    }

    function vote(a) {
        newY((a * 0.5) - 10)
        newInp(a)
        newBol(false)
        console.log(inp)

    }

    return (
        <div className="App">
            {input()}
            <canvas id="myCanvas" width={'1008px'} height={(inp * 0.5) + 'px'} style={{
                background: "white"
            }}></canvas>
            <div>
                <button onClick={() => {
                    newY(y - 0.5)


                }} className={'btn btn-danger'}>Click
                </button>
            </div>

        </div>
    );
}

export default App;
