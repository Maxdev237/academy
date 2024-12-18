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
      const response = await axios.post('', formData);
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
// import { useState } from "react";
// import axios from "axios";

// function Form() {
//   const [formData, SetFormData] = useState({name:'', email:''});
//   const [response, SetResponse] = useState(null);

//   const handleChange = (e) => { const{name, value} = e.target;
//   SetFormData({... formData, [name]:value});
//   };

//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     try{ const response = await axios.post('', formData)
//       SetResponse('donnée envoyer avec succes')
//       console.log('reponse serveur', response.date)

//     }

//     catch(error){
//       SetResponse('erreur lors de lenvoir des données');
//       console.error('error ', error.response)
//     }
//   }
  
//     return (
//       <form>
//         <div>
//         <input
//         type="text" name="name" value={formData.name}
//         onChange={handleChange} placeholder="Nom"
//         />
//         <input
//         type="email" name="email" value={formData.email}
//         onChange={handleChange} placeholder="Email"
//         />
//         <button type="submit">Envoyer</button>
//        </div>
//       </form>
//     );
//   }
  
//   export default Form;

