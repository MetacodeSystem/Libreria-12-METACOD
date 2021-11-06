import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AutorGetAllResponseDto from '../../dtos/Autor/getAll/AutorGetAllResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { toast } from 'react-toastify';
import AutorService from '../../services/Autor/AutorService';

export default function AutorList() {
    const [AutorList, setAutorList] = useState<AutorGetAllResponseDto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();

    const getAll = async()=>{
       try {
           const response = await AutorService.getAllAutor();
           setAutorList(response);
           setLoading(false)
        }  
       catch (error) {
               setLoading(false)
        }
    }

    const goToAutor = (id: number) => {
      history.push(`/Autor/${id}`)
    }

  const deleteById = async (id : number)=>{
    const response = await AutorService.deleteAutor(id);
    if(response.ok){
      toast.success('Autor delete successfully')

      await getAll()
    }else{
        toast.error(`An error occurred when trying to delete this entity, please check that other entities did not depend on it.`)

    }
  };  

   useEffect(()=>{
      setLoading(true);
      getAll()    },[])
    const goToCreateViewHandler = ()=>{
      history.push('/Autor/create')
    }
return (
    <Container>
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item><h2>Autor List</h2></Grid>
          <Grid item><Button color="primary" variant="contained" onClick={goToCreateViewHandler} size="small">
            <AddIcon/>Autor
          </Button></Grid>
        </Grid>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
               <TableCell><strong>Id</strong></TableCell><TableCell><strong>Nombre</strong></TableCell>
<TableCell><strong>Apellido</strong></TableCell>
<TableCell><strong>Cuit</strong></TableCell>
<TableCell><strong>Biografia</strong></TableCell>
               <TableCell><strong>Actions</strong></TableCell>          </TableRow>
        </TableHead>
        <TableBody>
{AutorList.length > 0 ? AutorList.map((row) => (
            <TableRow
              key={row.autorId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component='th' scope='row'>
                       <strong>{row.autorId}</strong>
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.nombre}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.apellido}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.cuit}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.biografia}
                </TableCell>
                <TableCell component='th' scope='row'>
                       <Button color='primary' onClick={()=>{goToAutor(row.autorId)}}><RemoveRedEyeIcon/></Button>
                       <Button style={{color:'red'}} onClick={()=>{deleteById(row.autorId)}}><DeleteOutlineIcon/></Button>
                </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container justifyContent="center" style={{marginTop:'10px'}}>{loading ? <Loading/> :(AutorList.length === 0 ? <p><strong>No hay registros para mostrar</strong></p> : null)}</Grid>
    </Container>
)}
