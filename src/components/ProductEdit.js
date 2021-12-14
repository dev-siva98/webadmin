import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

function EditProduct(props) {
    return (
        <Edit title='Edit Product' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='pname' />
                <TextInput source='weight' />
            </SimpleForm>
        </Edit>
    )
}

export default EditProduct
