import { Spin } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function GodoTest() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() =>{
        axios.get('http://localhost/GoDo-Forge/public/index.php/api/boutique-data?bid=1', {
            headers:{
                'auth-token':'a78ff3a24c2e1c1cd95ec01bd704bffc82e54cf3'
            }
        })
        .then((response) =>{
            console.log(response.data);
            setData(response.data);
            setLoading(false);
        })
         .catch((error) =>{
            setError(error);
            setLoading(false)
         })

        
    },[]);

    
    return(
        <div>
            <div>
                {loading ?
                <div>
                    <p><Spin/></p>
                </div> : <div>
                    {data.map((item) => (
                        <div>
                            <h2>
                                hello {item.auteur}
                            </h2> <br/>
                            <p>
                                Ville :{item.data.ville
                                }
                            </p>
                        </div>
                    )
                    )}
                </div>
                }
            </div>
        </div>
    );
    
}
export default GodoTest;
