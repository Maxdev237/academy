import axios from "axios";
import { useState } from "react";



function Form() {
  const [formData, SetFormData] = useState({name:'', email:''});
  const [response, SetResponse] = useState(null);

  const handleChange = (e) =>{
    const{name, value} = e.target.value;
    SetFormData({...formData, [name]:value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('',{ headers:{
        'auth-token':'a78ff3a24c2e1c1cd95ec01bd704bffc82e54cf3'
    }}, formData);
      SetResponse('donnée envoyer avec succes');
      console.log('reponse serveur', response.data);
    }
    catch(error){
      SetResponse('erreur envoi donnée');
      console.error('error serveur', error.response);
    }
  }

  return(
    <div>
      <form>
        <input
        type="text" name="name" value={formData.name}
        onChange={handleChange} placeholder="Nom"
        />
        <input
        type="email" name="email" value={formData.email}
        onChange={handleChange} placeholder='Email'
        />
        <button type="submit">Enoyer</button>
      </form>
    </div>
  );
  
}
export default Form
