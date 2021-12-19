import React from 'react'
import { Create, TextInput, NumberInput, SimpleForm } from 'react-admin'
// import { Field } from 'react-final-form'

function AddUser(props) {

    const random = Math.floor(Math.random() * 100000);

    return (
        <Create title='Add a User' {...props}>
            <SimpleForm >
                <TextInput defaultValue={random} source='id' style={{display:'none'}}/>
                <TextInput source='name' />
                <TextInput type='email' source='email'/>
                <NumberInput source='mobile' />

            </SimpleForm>
        </Create>
    )
}

export default AddUser
