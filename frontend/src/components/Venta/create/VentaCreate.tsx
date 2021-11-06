import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {  useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import MultipleSelect from '../../../common/MultipleSelect';
import SelectOne from '../../../common/SelectOne';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { toast } from 'react-toastify';
import VentaService from '../../../services/Venta/VentaService';
import { Genero } from '../../../enums/Genero';
import VentaCreateRequestDto from '../../../dtos/Venta/create/VentaCreateRequestDto';
import DetalleVentaCreateRequestDto from '../../../dtos/DetalleVenta/create/DetalleVentaCreateRequestDto';
import LibroGetAllForAssociationResponseDto from '../../../dtos/Libro/getAllForAssociation/LibroGetAllForAssociationResponseDto';
import LibroService from '../../../services/Libro/LibroService';

export default function VentaCreate() {
const [venta, SetVenta] = useState<VentaCreateRequestDto>(new VentaCreateRequestDto())
const [loading, setLoading] = useState<boolean>(false);

const history = useHistory();


const [libro, SetLibro] = useState<LibroGetAllForAssociationResponseDto[]>([]);

const getLibro = async () => 
{
try {
    SetLibro(await LibroService.getAllForAssociationLibro());
}
catch {}
}

useEffect(() => { getLibro() }, []);

const updateVenta = (ventaParam : VentaCreateRequestDto) => {
  SetVenta(prevState => ({...prevState, ...ventaParam}));
}
const formRef = useRef<HTMLFormElement>(null);
const onSubmitEvent = async ()=>{
  if(formRef.current?.checkValidity()){
        try {
           const response = await VentaService.postCreateVenta(venta);
           if(response.ok){
               toast.success('Venta create successfully')

               history.push('/Venta/all')
           }
           else{
               toast.error(`${JSON.stringify(await response.json())}`)

           }        }  
        catch (error) {
               setLoading(false)
        }
  }
  else{
    formRef.current?.reportValidity();
  }
}

return (
    <Container>
       <form onSubmit={(ev) => {ev.preventDefault(); onSubmitEvent();}} ref={formRef}>
      <h2 style={{textAlign:'start'}}>Create Venta</h2>
        <Grid container direction="column" justifyContent="end">
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateVenta(venta.setFecha(new Date(ev.target.value)));}} value={venta.fecha.toISOString().substring(0,10)} style={{marginTop:'10px'}} required id='outlined-basic' label='Fecha' type='date' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateVenta(venta.setNumeroVenta(ev.target.value));}} value={venta.numeroVenta} style={{marginTop:'10px'}} required id='outlined-basic' label='NumeroVenta' type='text' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>


	
			   {/*
			       Path: venta  Detalles RELATION 
			   Venta -  DetalleVenta
			   Type: Composition
			   Multiplicity:Many*/}
	
	     <Container style={{boxShadow: '3px 2px 5px 0px rgba(0,0,0,0.75)',marginTop:'15px', borderRadius:'10px'}}>
	       <Grid container alignItems='center' justifyContent='space-between' style={{padding:'10px', background:'#1976d2', color:'white', textAlign:'start', marginBottom:'10px', width:'105%', transform: 'translateX(-2.5%)'}}>
	        <Grid item><strong>Detalles</strong></Grid>
	                      <Grid item>
	               <Button variant='contained' style={{background:'white', color:'black'}}
	                 onClick={()=>{updateVenta(venta.addDetalles());}}>
	
	               Add
	               </Button>
	            </Grid>
	           </Grid>
	        { venta.detalles.map((detalleVenta, index) => (       <Grid container direction="column" justifyContent="start" style={{marginTop:'1px', padding:'10px',  marginBottom:'5px', border:'1px solid #f3f3f3', borderRadius:'10px'}}>
	               <Grid container item style={{margin:'10px 0px'}} justifyContent='space-between'>                       <Grid><strong>DetalleVenta {++index}</strong></Grid>                      <Grid item><Button onClick={()=>{updateVenta(venta.deleteDetalles(detalleVenta)); }} style={{background:'#df4759', color:'white' }}><DeleteOutlineIcon/> DELETE</Button></Grid>               </Grid>                       <Grid item>
	              <TextField size='small' onChange={(ev)=>{detalleVenta.setCantidad(Number(ev.target.value)); updateVenta(venta);}} value={detalleVenta.cantidad} style={{marginTop:'10px'}} required id='outlined-basic' label='Cantidad' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
	            </Grid>
	            <Grid item>
	              <TextField size='small' onChange={(ev)=>{detalleVenta.setSubtotal(Number(ev.target.value)); updateVenta(venta);}} value={detalleVenta.subtotal} style={{marginTop:'10px'}} required id='outlined-basic' label='Subtotal' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
	            </Grid>
	
	           
		
				   {/*
				       Path: detalleVenta  Libro RELATION 
				   DetalleVenta -  Libro
				   Type: Association
				   Multiplicity:One*/}
		
		 		<Grid container item  alignItems="center" >
					<Grid item xs={11}>
						 <SelectOne 
		           getDisplayValue={(libro : LibroGetAllForAssociationResponseDto)=>{ return libro.nombre}} 
		           getKeyValue={(libro : LibroGetAllForAssociationResponseDto)=>{ return libro.libroId }} 
		           options={libro} 
		           name={'libro'} 
		           value={`${detalleVenta.libroId}`} onChangeHandler={(ev)=>{detalleVenta.setLibroId(Number(ev.target.value)); updateVenta(venta)}}/>
					</Grid>
					<Grid item><Button onClick={getLibro}><RefreshIcon/></Button></Grid>
				</Grid>        </Grid>
	      ))}
	    </Container>
	             <Grid item style={{marginTop:'20px'}}>
              <Button type='submit' variant='contained' color='primary' fullWidth>CREATE</Button>
            </Grid>
          </Grid>
           <div><pre>{JSON.stringify(venta,null, 4)}</pre></div>
        </form>
       </Container>
)}
