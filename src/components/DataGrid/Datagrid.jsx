import { DataGrid } from '@mui/x-data-grid'
import { useEffect, useState } from 'react';
import "./datagrid.css"
import { createTheme, ThemeProvider } from '@mui/material';
import { useRedirectLoggedOutUser } from '../../customHook/useRedirectLoggedOutUser';
import Checking from '../checking/checking';

export default function Datagrid() {
    // useRedirectLoggedOutUser("/")
    const [gridData, setGridData] = useState([])
        

        const fetchData = () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
              })
              .then((data) => {
                setGridData(data)
              
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          }
    useEffect(()=>{
        fetchData()
    },[])

    const columns=[
        {field:"id",headerName:"Id"},
        {field:"title",headerName:"Title",width:300 },
        {field:"body",headerName:"Body",width:500 }
    ]
    const theme = createTheme({
        overrides: {
          MuiDataGrid: {
            headerContainer: {
              backgroundColor: 'red', // Set the desired background color
              color: 'white', // Set the desired text color
            },
          },
        },
      });

  return (
    <ThemeProvider theme={theme} >
        <div className="container">
        <DataGrid  
            rows={gridData} 
            columns={columns} 
            pageSize={12} 
            sx={{
                boxShadow: 2,
                border: 2,
                borderColor: 'primary.light',
                '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
                },
                
            }}
            />
        </div>
        <Checking/>
    </ThemeProvider>
  );
}
