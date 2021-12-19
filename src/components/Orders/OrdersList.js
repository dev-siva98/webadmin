import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
    DateField,
    ShowButton,
} from 'react-admin'


function OrdersList(props) {

    return (
        <List {...props} title='MAKE MY CAKE'>
            <Datagrid>
                <TextField source='id' />
                <TextField source='user' label='User' />
                <DateField source='date' />
                <TextField source='total' />
                <TextField source='orderStatus' />
                <ShowButton basePath='/orders' />
                <EditButton basePath='/orders' />
                <DeleteWithConfirmButton basePath='/orders' />
            </Datagrid>
        </List>
    )
}

export default OrdersList
