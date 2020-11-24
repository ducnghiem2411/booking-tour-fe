import React, { useEffect, useState } from "react";
import axios, { post } from "axios";
import ImageUploader from 'react-images-upload';

const Upload = (props) => {
  const [file, setFile] = useState(null);

  const onChangeImg =  (e) => {
    setFile( e.target.files[0])
    
  };
  const uploadFile = async (e) => {
    const fd = new FormData();
    fd.append("file", file);




    const data = {
      name: "name",
      description: "desc",
      image: fd,
    };
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
    };
    await axios.post("http://localhost:8000/countries", data, config).then((res) => {
      console.log(res);
    });

}
    


  useEffect(() => {
    
  }, [file])


  return (
    <>
      <h1>File Upload</h1>

      <input type="file" onChange={onChangeImg} />
      <button type="submit" onClick={uploadFile}>
        Upload
      </button>
     
    </>
  );
};

export default Upload;
