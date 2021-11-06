import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {  useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import MultipleSelect from '../../../common/MultipleSelect';
import SelectOne from '../../../common/SelectOne';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { toast } from 'react-toastify';
import LibroService from '../../../services/Libro/LibroService';
import { Genero } from '../../../enums/Genero';
import LibroCreateRequestDto from '../../../dtos/Libro/create/LibroCreateRequestDto';
import AutorGetAllForAssociationResponseDto from '../../../dtos/Autor/getAllForAssociation/AutorGetAllForAssociationResponseDto';
import AutorService from '../../../services/Autor/AutorService';

export default function LibroCreate() {
const [libro, SetLibro] = useState<LibroCreateRequestDto>(new LibroCreateRequestDto())
const [loading, setLoading] = useState<boolean>(false);

const history = useHistory();


const [autor, SetAutor] = useState<AutorGetAllForAssociationResponseDto[]>([]);

const getAutor = async () => 
{
try {
    SetAutor(await AutorService.getAllForAssociationAutor());
}
catch {}
}

useEffect(() => { getAutor() }, []);

const updateLibro = (libroParam : LibroCreateRequestDto) => {
  SetLibro(prevState => ({...prevState, ...libroParam}));
}
const formRef = useRef<HTMLFormElement>(null);
const onSubmitEvent = async ()=>{
  if(formRef.current?.checkValidity()){
        try {
           const response = await LibroService.postCreateLibro(libro);
           if(response.ok){
               toast.success('Libro create successfully')

               history.push('/Libro/all')
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
      <h2 style={{textAlign:'start'}}>Create Libro</h2>
        <Grid container direction="column" justifyContent="end">
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateLibro(libro.setNombre(ev.target.value));}} value={libro.nombre} style={{marginTop:'10px'}} required id='outlined-basic' label='Nombre' type='text' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateLibro(libro.setPrecio(Number(ev.target.value)));}} value={libro.precio} style={{marginTop:'10px'}} required id='outlined-basic' label='Precio' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
  <Grid item>
              <FormControl fullWidth style={{marginTop:'10px'}}>
                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={libro.genero}
                      size='small'
                      label='Genero'
                       onChange={(ev)=>{updateLibro(libro.setGenero(ev.target.value as Genero));}}
                    >
                    {Object.keys(Genero).map(key =>(
                      <MenuItem value={key}>{Genero[key as Genero]}</MenuItem>)
                    )}
                    </Select>
              </FormControl>  
           </Grid>

	
			   {/*
			       Path: libro  Autor RELATION 
			   Libro -  Autor
			   Type: Association
			   Multiplicity:One*/}
	
	 		<Grid container item  alignItems="center" >
				<Grid item xs={11}>
					 <SelectOne 
	           getDisplayValue={(autor : AutorGetAllForAssociationResponseDto)=>{ return autor.nombre}} 
	           getKeyValue={(autor : AutorGetAllForAssociationResponseDto)=>{ return autor.autorId }} 
	           options={autor} 
	           name={'autor'} 
	           value={`${libro.autorId}`} onChangeHandler={(ev)=>{updateLibro(libro.setAutorId(Number(ev.target.value)))}}/>
				</Grid>
				<Grid item><Button onClick={getAutor}><RefreshIcon/></Button></Grid>
			</Grid>            <Grid item style={{marginTop:'20px'}}>
              <Button type='submit' variant='contained' color='primary' fullWidth>CREATE</Button>
            </Grid>
          </Grid>
           <div><pre>{JSON.stringify(libro,null, 4)}</pre></div>
        </form>
       </Container>
)}
