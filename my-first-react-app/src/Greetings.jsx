import reactLogo from './assets/react.svg'

function Greeting(){
    return <h1> That bunda is big we msee!!!</h1>
}
function Food (){
    return <h2>My favourite food is chapati and beans!</h2>

}

function Para(){
    return <p>I really really love this food mazeee!!!!!</p>
}
function Image() {
    return  <img src={reactLogo} className="logo react" alt="React logo" />
}
export {Greeting,Food,Para,Image};