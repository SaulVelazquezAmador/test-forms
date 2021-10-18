import FormNAme from "./components/FormName";
import FormDate from "./components/FormDate";
import { useState } from "react";
import styled from "styled-components";
import FormContact from "./components/FormContact";

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const App = () => {

  const [data, setData] = useState({
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dia: "",
    mes: "",
    año: "",
    correo: "",
    telefono: ""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
    setData({
      nombre: "",
      segundoNombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dia: "",
      mes: "",
      año: "",
      correo: "",
      telefono: ""
    })
}

  return (
    <DivPrincipal>
        <FormNAme data={data} setData= {setData} />
        <FormDate data={data} setData= {setData} />
        <FormContact handleSubmit={handleSubmit} data={data} setData= {setData} />
    </DivPrincipal>
  );
}

export default App;
