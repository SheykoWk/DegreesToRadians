import Converter from './Converter'
import coding from '../img/coding.svg'
const ContainerConverter = () => {
    return(
        <div>
            <div className='converter-container'>
                <div className='converter'>
                    <img className='img-coding'src={coding} alt=''/>
                    <h2>Converter</h2>
                    <Converter/>
                </div>
            </div>
        </div>
    )
}
export default ContainerConverter;