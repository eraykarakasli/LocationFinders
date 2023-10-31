import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux'
import Aside from '../../components/admin/Aside';
import { CgRemove } from 'react-icons/cg'
import { AiFillEdit } from 'react-icons/ai'
import { color } from 'framer-motion';

function AdminList() {
    const user = useSelector(state => state.user)
    const theme = useSelector(state => state.theme)
    console.log(theme)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 300,
            editable: false,
        },

        {
            field: 'vehicle',
            headerName: 'Vehicle',
            width: 150,
            editable: false,
        },
        {
            field: 'plate',
            headerName: 'Plate',
            width: 200,
            editable: false,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'number',
            width: 200,
            editable: false,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            type: 'number',
            width: 100,
            renderCell: (params) => (
                <AiFillEdit color='green' size={20} onClick={() => handleEdit(params.id)} style={{ cursor: 'pointer' }} />
            ),
        },
        {
            field: 'delete',
            headerName: 'Delete',
            type: "number",
            width: 100,
            renderCell: (params) => (
                <CgRemove color='red' size={20} onClick={() => handleEdit(params.id)} style={{ cursor: 'pointer' }} />
            ),
        },
    ];
    const rows = user.map((user, i) => ({
        id: i,
        phone: user.phone,
        name: user.name,
        vehicle: user.vehicle,
        plate: user.plate,
    }));

    const handleEdit = (id) => {
        // Düzenleme işlemi için yapılacak işlemleri burada gerçekleştirin.
        console.log(`Düzenleme işlemi için ID: ${id}`);
    };
    return (
        <div className='min-h-screen'>
            <div className=''>
                <Aside />
            </div>
            <div className='flex justify-center w-full '>
                <Box sx={{ height: 1000, width: '80%', display: "flex", justifyContent: "center" }}>
                    <DataGrid 
                    style={{color: `${theme ? 'white' : 'black'}`}}
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 17,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    )
}

export default AdminList