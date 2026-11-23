function   (){
    
const [ime, setIme] = useStae("")

    return(
        <div>
            <h3>Kako se zoveš</h3>
            input
            type=text"
            value={ime} 
            onCange={(event) => setIme(event.target.value)}
            
            <h1>Pozdrav, {ime}!</h1>
                {/*
                {ime && <h1>pozdrav, {ime}</h1>}
                -prikazuje se samo ako je ime unjeto, to est ako je ime true
                */}
               
        </div>
        
    )
}