import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin'

function AddProduct(props) {
    return (
        <Create title='Add a Product' {...props}>
            <SimpleForm>
                <TextInput source='pname' label='Product name' />
                <SelectInput source="weight" label='Weight' choices={[
                    { id: '500 G', name: '500 G' },
                    { id: '1 KG', name: '1 KG' },
                    { id: '2 KG', name: '2 KG' },
                ]} />
                <NumberInput source='id' label='Product Code'  />
            </SimpleForm>
        </Create>
    )
}

export default AddProduct
