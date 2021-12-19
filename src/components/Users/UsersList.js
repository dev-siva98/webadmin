import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
    NumberField,
    EmailField,
} from 'react-admin'


function UsersList(props) {

    return (
        <List {...props} title='MAKE MY CAKE'>
            <Datagrid>
                {/* <TextField source='id' /> */}
                <TextField source='name' label='User Name' />
                <NumberField source='mobile' />
                <EmailField source='email' />
                <EditButton basePath='/users' />
                <DeleteWithConfirmButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
