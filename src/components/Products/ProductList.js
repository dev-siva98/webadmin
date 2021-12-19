import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
} from 'react-admin'


function ProductList(props) {

    return (
        <List {...props} title='MAKE MY CAKE'>
            <Datagrid>
                <TextField source='id' />
                <TextField source='pname' label='Product Name' />
                <TextField source='weight' />
                <TextField source='price' />
                <EditButton basePath='/products' />
                <DeleteWithConfirmButton basePath='/products' />
            </Datagrid>
        </List>
    )
}

export default ProductList
