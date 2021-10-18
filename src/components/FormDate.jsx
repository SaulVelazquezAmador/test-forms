import Input from './styled/Input'
import Datos from './styled/Datos'
import Form from './styled/Form'
import DivForm from './styled/DivForm'
import DivNomm from './styled/DivNom'

const FormDate = ({data, setData}) =>{

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    return(
        <DivForm>
            <h2>¿Cual es tu fecha de nacimiento?</h2>
            <Form>
                <Input 
                    type="text" 
                    name="dia"
                    value={data.dia} 
                    onChange={handleChange} 
                    placeholder="Dia"
                />
                <Input 
                    type="text" 
                    name="mes"
                    value={data.mes} 
                    onChange={handleChange} 
                    placeholder="Mes"
                />
                <Input 
                    type="text" 
                    name="año"
                    value={data.año} 
                    onChange={handleChange} 
                    placeholder="Año"
                />
            </Form>
            <DivNomm>
                <Datos>{data.dia} {data.mes}  {data.año}</Datos>
            </DivNomm>
        </DivForm>
    )
}
export default FormDate