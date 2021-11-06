import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {  useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import MultipleSelect from '../../../common/MultipleSelect';
import SelectOne from '../../../common/SelectOne';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { toast } from 'react-toastify';
import AutorService from '../../../services/Autor/AutorService';

import AutorCreateRequestDto from '../../../dtos/Autor/create/AutorCreateRequestDto';

export default function AutorCreate() {
const [autor, SetAutor] = useState<AutorCreateRequestDto>(new AutorCreateRequestDto())
const [loading, setLoading] = useState<boolean>(false);

const history = useHistory();

const updateAutor = (autorParam : AutorCreateRequestDto) => {
  SetAutor(prevState => ({...prevState, ...autorParam}));
}
const formRef = useRef<HTMLFormElement>(null);
const onSubmitEvent = async ()=>{
  if(formRef.current?.checkValidity()){
        try {
           const response = await AutorService.postCreateAutor(autor);
           if(response.ok){
               toast.success('Autor create successfully')

               history.push('/Autor/all')
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
      <h2 style={{textAlign:'start'}}>Create Autor</h2>
        <Grid container direction="column" justifyContent="end">
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateAutor(autor.setNombre(ev.target.value));}} value={autor.nombre} style={{marginTop:'10px'}} required id='outlined-basic' label='Nombre' type='text' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateAutor(autor.setApellido(ev.target.value));}} value={autor.apellido} style={{marginTop:'10px'}} required id='outlined-basic' label='Apellido' type='text' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateAutor(autor.setCuit(Number(ev.target.value)));}} value={autor.cuit} style={{marginTop:'10px'}} required id='outlined-basic' label='Cuit' type='number' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item>
              <TextField size='small' onChange={(ev)=>{updateAutor(autor.setBiografia(ev.target.value));}} value={autor.biografia} style={{marginTop:'10px'}} required id='outlined-basic' label='Biografia' type='text' variant='outlined' fullWidth  InputLabelProps={{shrink: true}}/>
            </Grid>


	
		            <Grid item style={{marginTop:'20px'}}>
              <Button type='submit' variant='contained' color='primary' fullWidth>CREATE</Button>
            </Grid>
          </Grid>
           <div><pre>{JSON.stringify(autor,null, 4)}</pre></div>
        </form>
       </Container>
)}
