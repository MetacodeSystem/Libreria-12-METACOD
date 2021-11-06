import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VentaGetByIdResponseDto from '../../dtos/Venta/getById/VentaGetByIdResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { useParams } from "react-router";
import VentaService from '../../services/Venta/VentaService';

export default function VentaGetById() {
    const [venta, setVenta] = useState<VentaGetByIdResponseDto>();
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();
    const params = useParams<VentaParams>();

    const getById = async(id : number)=>{
        try {
           const response = await VentaService.getById(id);
           setVenta(response);
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
           <Grid item><strong>Fecha</strong>: </Grid>
           <Grid item>{venta?.fecha}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>NumeroVenta</strong>: </Grid>
           <Grid item>{venta?.numeroVenta}</Grid>
       </Grid>
           
	    <Container style={{boxShadow: '3px 2px 5px 0px rgba(0,0,0,0.75)',marginTop:'15px', borderRadius:'10px'}}>
	       <Grid container alignItems='center' justifyContent='space-between' style={{padding:'10px', background:'#1976d2', color:'white', textAlign:'start', marginBottom:'10px', width:'105%', transform: 'translateX(-2.5%)'}}>
	        <Grid item><strong>Detalles</strong></Grid>
	           </Grid>
	        { venta?.detalles?.map((detalleVenta, index) => (       <Grid container direction="column" justifyContent="start" style={{marginTop:'1px', padding:'10px',  marginBottom:'5px', border:'1px solid #f3f3f3', borderRadius:'10px'}}>
	               <Grid container item style={{margin:'10px 0px'}} justifyContent='space-between'>                       <Grid><strong>DetalleVenta {++index}</strong></Grid>               </Grid>                  <Grid container>
	           <Grid item><strong>Cantidad</strong>: </Grid>
	           <Grid item>{detalleVenta?.cantidad}</Grid>
	       </Grid>
	       <Grid container>
	           <Grid item><strong>Subtotal</strong>: </Grid>
	           <Grid item>{detalleVenta?.subtotal}</Grid>
	       </Grid>
	
	           
		    <Container style={{boxShadow: '3px 2px 5px 0px rgba(0,0,0,0.75)',marginTop:'15px', borderRadius:'10px'}}>
		       <Grid container alignItems='center' justifyContent='space-between' style={{padding:'10px', background:'#1976d2', color:'white', textAlign:'start', marginBottom:'10px', width:'105%', transform: 'translateX(-2.5%)'}}>
		        <Grid item><strong>Libro</strong></Grid>
		       </Grid>
		        <Grid container direction="column" justifyContent="start"style={{marginTop:'1px', padding:'10px'}}>
		       <Grid container>
		           <Grid item><strong>Nombre</strong>: </Grid>
		           <Grid item>{detalleVenta?.libro?.nombre}</Grid>
		       </Grid>
		       <Grid container>
		           <Grid item><strong>Precio</strong>: </Grid>
		           <Grid item>{detalleVenta?.libro?.precio}</Grid>
		       </Grid>
		       <Grid container>
		           <Grid item><strong>Genero</strong>: </Grid>
		           <Grid item>{detalleVenta?.libro?.genero}</Grid>
		       </Grid>
		
			    <Container style={{boxShadow: '3px 2px 5px 0px rgba(0,0,0,0.75)',marginTop:'15px', borderRadius:'10px'}}>
			       <Grid container alignItems='center' justifyContent='space-between' style={{padding:'10px', background:'#1976d2', color:'white', textAlign:'start', marginBottom:'10px', width:'105%', transform: 'translateX(-2.5%)'}}>
			        <Grid item><strong>Autor</strong></Grid>
			       </Grid>
			        <Grid container direction="column" justifyContent="start"style={{marginTop:'1px', padding:'10px'}}>
			       <Grid container>
			           <Grid item><strong>Nombre</strong>: </Grid>
			           <Grid item>{detalleVenta?.libro?.autor?.nombre}</Grid>
			       </Grid>
			       <Grid container>
			           <Grid item><strong>Apellido</strong>: </Grid>
			           <Grid item>{detalleVenta?.libro?.autor?.apellido}</Grid>
			       </Grid>
			       <Grid container>
			           <Grid item><strong>Cuit</strong>: </Grid>
			           <Grid item>{detalleVenta?.libro?.autor?.cuit}</Grid>
			       </Grid>
			       <Grid container>
			           <Grid item><strong>Biografia</strong>: </Grid>
			           <Grid item>{detalleVenta?.libro?.autor?.biografia}</Grid>
			       </Grid>
			
				
					        </Grid>
			    </Container>        </Grid>
		    </Container>        </Grid>
	      ))}
	    </Container>
	        </Container>
   )}


   interface VentaParams {
       id: string
    }
