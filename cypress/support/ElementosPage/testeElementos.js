class testElementos{
    campoPrimeiroNome = () => {
        return ':nth-child(1) > :nth-child(2) > .form-control'
    }
    campoSegundoNome = () => {
        return ':nth-child(1) > :nth-child(3) > .form-control'
    }
    campoEndereco = () => {
        return '.col-md-8 > .form-control' 
    }
    campoEmail = () => {
        return '#eid > .form-control' 
    }
    campoTelefone = () => {
        return 'input[type="tel"]' 
    }
    campoSexo = () => {
        return 'input[type="radio"]'
    }
    campoHobbies = () => {
        return '#checkbox2'
    }
   
    campoLinguagem = () => {
        return '#msdd' 
    }
    
    
    campoSkill =() => {
        return '#Skills'
    }

    LabelSkill =() => {
        return ':nth-child(8) > .col-md-3'
    }

    campoPais = () => {
        return '#countries' 
    }
    campoLocal = () => {
        return '.select2-selection'
    }
    campoAno = () => { 
        return '#yearbox'
     }

    campoMes = () => { 
        return '[placeholder="Month"]'
     }

    campoDia = () => { 
        return '#daybox' 
    }

    CampoSenha = () => { 
        return '#firstpassword' 
    }

    CampoConfirmarSenha = () => {
         return '#secondpassword' 
        } 

    CampoSubmitButton = () => { 
        return '#submitbtn' 
    }
    

    botaorefresh = () => {
        return "#Button1"
    }
    
}
export default testElementos;