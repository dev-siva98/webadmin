import React from 'react'
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin'

function AddOrders(props) {

    const random = Math.floor(Math.random()* 100000)

    return (
        <Create {...props} title='MAKE MY CAKE'>
            <SimpleForm>
                <TextInput disabled source='id' defaultValue={random} />
                <TextInput source='user' label='User' />
                <DateInput source='date' />
                <TextInput source='total' />
                <TextInput source='orderStatus' />
            </SimpleForm>
        </Create>
    )
}

export default AddOrders
