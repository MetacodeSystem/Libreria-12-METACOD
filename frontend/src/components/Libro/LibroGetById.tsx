import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LibroGetByIdResponseDto from '../../dtos/Libro/getById/LibroGetByIdResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { useParams } from "react-router";
import LibroService from '../../services/Libro/LibroService';

export default function LibroGetById() {
    const [libro, setLibro] = useState<LibroGetByIdResponseDto>();
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();
    const params = useParams<LibroParams>();

    const getById = async(id : number)=>{
        try {
           const response = await LibroService.getById(id);
           setLibro(response);
           setLoading(false)
        }  
       catch (error) {
               setLoading(false)
        }
    }

   useEffect(()=>{
      setLoading(true);
      getById(Number(params.id))
    },[params.id])

   return (
       <Container>
           <h1>Get By Id Component</h1>
                  <Grid container>
           <Grid item><strong>Nombre</strong>: </Grid>
           <Grid item>{libro?.nombre}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>Precio</strong>: </Grid>
           <Grid item>{libro?.precio}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>Genero</strong>: </Grid>
           <Grid item>{libro?.genero}</Grid>
       </Grid>
           
	    <Container style={{boxShadow: '3px 2px 5px 0px rgba(0,0,0,0.75)',marginTop:'15px', borderRadius:'10px'}}>
	       <Grid container alignItems='center' justifyContent='space-between' style={{padding:'10px', background:'#1976d2', color:'white', textAlign:'start', marginBottom:'10px', width:'105%', transform: 'translateX(-2.5%)'}}>
	        <Grid item><strong>Autor</strong></Grid>
	       </Grid>
	        <Grid container direction="column" justifyContent="start"style={{marginTop:'1px', padding:'10px'}}>
	       <Grid container>
	           <Grid item><strong>Nombre</strong>: </Grid>
	           <Grid item>{libro?.autor?.nombre}</Grid>
	       </Grid>
	       <Grid container>
	           <Grid item><strong>Apellido</strong>: </Grid>
	           <Grid item>{libro?.autor?.apellido}</Grid>
	       </Grid>
	       <Grid container>
	           <Grid item><strong>Cuit</strong>: </Grid>
	           <Grid item>{libro?.autor?.cuit}</Grid>
	       </Grid>
	       <Grid container>
	           <Grid item><strong>Biografia</strong>: </Grid>
	           <Grid item>{libro?.autor?.biografia}</Grid>
	       </Grid>
	
		
			        </Grid>
	    </Container>       </Container>
   )}


   interface LibroParams {
       id: string
    }
