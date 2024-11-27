
function App(){
    let [count,setCount]=React.useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button style={{backgroundColor:'lightGreen'}} onClick={()=>setCount(++count)}>Start</button>            
            <button style={{backgroundColor:'orangeRed'}} onClick={()=>setCount(--count)}>Stop</button>
        </div>
    )
}
let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);
