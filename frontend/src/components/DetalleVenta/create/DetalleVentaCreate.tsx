import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {  useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import MultipleSelect from '../../../common/MultipleSelect';
import SelectOne from '../../../common/SelectOne';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { toast } from 'react-toastify';
import DetalleVentaService from '../../../services/DetalleVenta/DetalleVentaService';
import { Genero } from '../../../enums/Genero';
import DetalleVentaCreateRequestDto from '../../../dtos/DetalleVenta/create/DetalleVentaCreateRequestDto';
import LibroGetAllForAssociationResponseDto from '../../../dtos/Libro/getAllForAssociation/LibroGetAllForAssociationResponseDto';
import LibroService from '../../../services/Libro/LibroService';

export default function DetalleVentaCreate() {
const [detalleVenta, SetDetalleVenta] = useState<DetalleVentaCreateRequestDto>(new DetalleVentaCreateRequestDto())
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

const updateDetalleVenta = (detalleVentaParam : DetalleVentaCreateRequestDto) => {
  SetDetalleVenta(prevState => ({...prevState, ...detalleVentaParam}));
}
const formRef = useRef<HTMLFormElement>(null);
const onSubmitEvent = async ()=>{
  if(formRef.current?.checkValidity()){
        try {
           const response = await DetalleVentaService.postCreateDetalleVenta(detalleVenta);
           if(response.ok){
               toast.success('DetalleVenta create successfully')

               history.push('/DetalleVenta/all')
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
      <h2 style={{textAlign:'start'}}>Create DetalleVenta</h2>
        <Grid container direction="column" justifyContent="end">
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateDetalleVenta(detalleVenta.setCantidad(Number(ev.target.value)));}} value={detalleVenta.cantidad} style={{marginTop:'10px'}} required id='outlined-basic' label='Cantidad' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateDetalleVenta(detalleVenta.setSubtotal(Number(ev.target.value)));}} value={detalleVenta.subtotal} style={{marginTop:'10px'}} required id='outlined-basic' label='Subtotal' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
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
	           value={`${detalleVenta.libroId}`} onChangeHandler={(ev)=>{updateDetalleVenta(detalleVenta.setLibroId(Number(ev.target.value)))}}/>
				</Grid>
				<Grid item><Button onClick={getLibro}><RefreshIcon/></Button></Grid>
			</Grid>            <Grid item style={{marginTop:'20px'}}>
              <Button type='submit' variant='contained' color='primary' fullWidth>CREATE</Button>
            </Grid>
          </Grid>
           <div><pre>{JSON.stringify(detalleVenta,null, 4)}</pre></div>
        </form>
       </Container>
)}
