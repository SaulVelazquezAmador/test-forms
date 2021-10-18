import Input from './styled/Input'
import Datos from './styled/Datos'
import Form from './styled/Form'
import DivForm from './styled/DivForm'
import DivNomm from './styled/DivNom'
import Button from './styled/Button'

const FormContact = ({ handleSubmit, data, setData }) =>{

    const handleChange = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    return(
        <DivForm>
            <h2>¿Cual es tu fecha de nacimiento?</h2>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="email" 
                    name="correo"
                    value={data.correo} 
                    onChange={handleChange} 
                    placeholder="Correo"
                />
                <Input 
                    type="text" 
                    name="telefono"
                    value={data.telefono} 
                    onChange={handleChange} 
                    placeholder="Telefono"
                />
                <Button type="submit">Iniciar</Button>
            </Form>
            
            <DivNomm>
                <Datos>Correo: {data.correo}</Datos>
                <br/>
                <Datos>Telefono: {data.telefono}</Datos>
            </DivNomm>

            <DivNomm>
                <Datos>Fecha de nacimiento: {data.dia}/{data.mes}/{data.año}</Datos>
                <br/>
                <Datos>Correo electronico: {data.correo}</Datos>
                <br/>
                <Datos>Telefono: {data.telefono}</Datos>
                <br/>
                <Datos>Nombre: {data.nombre}</Datos>
            </DivNomm>
        </DivForm>
    )
}
export default FormContact