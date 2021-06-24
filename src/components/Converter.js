import {useState} from 'react'
const Converter = () => {
    const [degrees, setDegrees] = useState();
    const [radians, setRadians] = useState();
    const [change, setChange] = useState('');
    const toRadian = (degrees) => degrees * 0.01745;
    const toDegrees = (radians) => radians * 57.296;
    return(
        <div>
            <div className='converter-input degrees'>
                <h5>Degrees</h5>
                <input className='converter-input__input' onChange={(e) =>{
                    e.target.value < 0 ?e.target.value = 0 : setDegrees(e.target.value) 
                    setRadians(toRadian(e.target.value))
                    setChange(' Radians')
                }} type='text' value={degrees}/>
            </div>
            <div className='converter-input radians'>
                <h5>Radians</h5>
                <input className='converter-input__input' onChange={(e) => {
                    e.target.value < 0 ? e.target.value = 0 : setRadians(e.target.value)
                    setDegrees(toDegrees(e.target.value))
                    setChange(' Degrees')
                    }} type='text' value={radians}/>
            </div>
            <h3>Has been changed to:<span>{change}</span></h3>
        </div>
    )
}
export default Converter