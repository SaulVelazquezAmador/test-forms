import Input from './styled/Input'
import Datos from './styled/Datos'
import Form from './styled/Form'
import DivForm from './styled/DivForm'
import DivNomm from './styled/DivNom'

const FormNAme = ({data, setData}) =>{

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    return(
        <DivForm>
            <h2>¿Cual es tu nombre?</h2>
            <Form>
                <Input 
                    type="text" 
                    name="nombre"
                    value={data.nombre} 
                    onChange={handleChange} 
                    placeholder="Nombre"
                />
                <Input 
                    type="text" 
                    name="segundoNombre"
                    value={data.segundoNombre} 
                    onChange={handleChange} 
                    placeholder="Segundo nombre"
                />
                <Input 
                    type="text" 
                    name="apellidoPaterno"
                    value={data.apellidoPaterno} 
                    onChange={handleChange} 
                    placeholder="Apellido paterno"
                />
                <Input 
                    type="text" 
                    name="apellidoMaterno"
                    value={data.apellidoMaterno} 
                    onChange={handleChange} 
                    placeholder="Apellido materno"
                />
            </Form>
            <DivNomm>
                <Datos>{data.nombre} {data.segundoNombre}  {data.apellidoPaterno} {data.apellidoMaterno}</Datos>
            </DivNomm>
        </DivForm>
    )
}
export default FormNAme