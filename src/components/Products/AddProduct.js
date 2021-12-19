import React, { useState } from 'react'
import {
    Create, SimpleForm,
    TextInput, NumberInput,
    SelectInput, useNotify,
    useRefresh, useRedirect,
    Button
} from 'react-admin'
import { Field } from 'react-final-form'
import Axios from 'axios'
import './products.css'


function AddProduct(props) {

    const [image, setImage] = useState()
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState()
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        notify(`Product added - id #${data.id}`);
        redirect('/products');
        refresh();
    };

    const ImageInput = () => {
        return <span>
            <Field name='file' component="input" type="file" placeholder="Image"
                onChange={(event) => { setImage(event.target.files[0]) }}
            />
        </span>
    }

    const config = {
        onUploadProgress: function (progressEvent) {
            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            setProgress(percentCompleted - 1)
        }
    }

    const uploadImage = () => {
        setUploading(true)
        setUploaded(false)
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "l68cm4ir");

        Axios.put("https://api.cloudinary.com/v1_1/makemycake/image/upload", formData, config).then((res) => {
            console.log(res.data)
            setUrl(res.data.url)
            setProgress(0)
            setUploaded(true)
            setUploading(false)
        }).catch((err) => {
            alert("Error uploading")
            console.log(err)
            setProgress(0)
            setUploading(false)
        })
    }

    return (
        <Create onSuccess={onSuccess} title='Add a Product' {...props}>
            <SimpleForm>
                <NumberInput required source='id' />
                <TextInput source='pname' label='Product name' />
                <SelectInput source="weight" label='Weight' required choices={[
                    { id: '500 G', name: '500 G' },
                    { id: '1 KG', name: '1 KG' },
                    { id: '2 KG', name: '2 KG' },
                ]} />
                <NumberInput source='price' required />
                <ImageInput />
                <TextInput source='image' required disabled defaultValue={url} style={{ display: 'none' }} />
                {console.log(uploaded, uploading, progress)}
                <Button id='admin-image-upload-button'
                    children={
                        <>
                            <span>
                                {uploaded ? 'Done' : `${uploading ? `${progress}%` : 'Upload'}`}
                            </span>
                        </>
                    }
                    onClick={() => uploadImage()}
                />
            </SimpleForm>
        </Create>
    )
}

export default AddProduct
