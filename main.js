const user = {
    name:'Praphusak',
    lastName:'Tre-Intong',
    birthYear:new Date(1996,8,4)
}

const monthDiff = Date.now() - user.birthYear.getTime()
const ageDiff = new Date(monthDiff)
const yearN = ageDiff.getFullYear()
const ageYear = Math.abs(yearN-1970)

const mon = 12 - Math.abs(new Date().getMonth() - user.birthYear.getMonth())
const day = Math.abs(new Date().getDate() - user.birthYear.getDate())

const sty1 ={ color : 'skyblue', background : 'lime'}
const sty2 ={ color : 'red', background : 'skyblue'}

function App(){
    return(
        <div> 
            <h1 style = {sty1}>{user.name} {user.lastName}</h1>
            <p style = {sty2}>Age: {ageYear} Years, {mon} Months, {day} Days</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)