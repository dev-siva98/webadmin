import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton
} from 'react-admin'

function ProductList(props) {
    return (
        <List {...props}>
            <Datagrid>
                <TextField  source='id' />
                <TextField source='pname' label={'Products'} />
                <TextField source='weight' />
                <EditButton basePath='/products' />
                <DeleteWithConfirmButton basePath='/products' />
            </Datagrid>
        </List>
    )
}

export default ProductList
