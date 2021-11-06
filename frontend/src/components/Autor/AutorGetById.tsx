import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AutorGetByIdResponseDto from '../../dtos/Autor/getById/AutorGetByIdResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { useParams } from "react-router";
import AutorService from '../../services/Autor/AutorService';

export default function AutorGetById() {
    const [autor, setAutor] = useState<AutorGetByIdResponseDto>();
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();
    const params = useParams<AutorParams>();

    const getById = async(id : number)=>{
        try {
           const response = await AutorService.getById(id);
           setAutor(response);
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
           <Grid item>{autor?.nombre}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>Apellido</strong>: </Grid>
           <Grid item>{autor?.apellido}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>Cuit</strong>: </Grid>
           <Grid item>{autor?.cuit}</Grid>
       </Grid>
       <Grid container>
           <Grid item><strong>Biografia</strong>: </Grid>
           <Grid item>{autor?.biografia}</Grid>
       </Grid>
           
	
		       </Container>
   )}


   interface AutorParams {
       id: string
    }
