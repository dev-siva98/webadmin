import React from 'react'
import { Edit, SimpleForm, TextInput, SelectInput, useNotify, useRefresh, useRedirect } from 'react-admin'

function EditProduct(props) {

        const notify = useNotify();
        const refresh = useRefresh();
        const redirect = useRedirect();

        const onSuccess = ({ data }) => {
            notify(`Changes to product id #${data.id} saved`);
            redirect('/products');
            refresh();
        };

        return (
            <Edit onSuccess={onSuccess} mutationMode='pessimistic' title='Edit Product' {...props}>
                <SimpleForm>
                    <TextInput disabled source='id' />
                    <TextInput source='pname' />
                    <SelectInput source="weight" label='Weight' choices={[
                        { id: '500 G', name: '500 G' },
                        { id: '1 KG', name: '1 KG' },
                        { id: '2 KG', name: '2 KG' },
                    ]} />
                </SimpleForm>
            </Edit>
        )
    }

    export default EditProduct
