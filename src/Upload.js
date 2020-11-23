import React, {useState} from 'react'
import axios, { post } from 'axios';

const Upload = props => {

    const [file, setFile] = useState(null);
    const onChangeImg = (e)  => {
        setFile( e.target.files[0])
      }
      const fileUpload = (file) => {
        const url = 'http://localhost:8000/countries';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData,config)
      }
    
      const onFormSubmit = e => {
        e.preventDefault() // Stop form submit
        fileUpload(file).then((response)=>{
          console.log(response.data);
        })
      }


    return (


        <>

<form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={onChangeImg} />
        <button type="submit">Upload</button>
      </form>


        </>
    )
}


export default Upload