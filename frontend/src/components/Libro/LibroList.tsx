import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LibroGetAllResponseDto from '../../dtos/Libro/getAll/LibroGetAllResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { toast } from 'react-toastify';
import LibroService from '../../services/Libro/LibroService';

export default function LibroList() {
    const [LibroList, setLibroList] = useState<LibroGetAllResponseDto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();

    const getAll = async()=>{
       try {
           const response = await LibroService.getAllLibro();
           setLibroList(response);
           setLoading(false)
        }  
       catch (error) {
               setLoading(false)
        }
    }

    const goToLibro = (id: number) => {
      history.push(`/Libro/${id}`)
    }

  const deleteById = async (id : number)=>{
    const response = await LibroService.deleteLibro(id);
    if(response.ok){
      toast.success('Libro delete successfully')

      await getAll()
    }else{
        toast.error(`An error occurred when trying to delete this entity, please check that other entities did not depend on it.`)

    }
  };  

   useEffect(()=>{
      setLoading(true);
      getAll()    },[])
    const goToCreateViewHandler = ()=>{
      history.push('/Libro/create')
    }
return (
    <Container>
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item><h2>Libro List</h2></Grid>
          <Grid item><Button color="primary" variant="contained" onClick={goToCreateViewHandler} size="small">
            <AddIcon/>Libro
          </Button></Grid>
        </Grid>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
               <TableCell><strong>Id</strong></TableCell><TableCell><strong>Nombre</strong></TableCell>
<TableCell><strong>Precio</strong></TableCell>
<TableCell><strong>Genero</strong></TableCell>
               <TableCell><strong>Actions</strong></TableCell>          </TableRow>
        </TableHead>
        <TableBody>
{LibroList.length > 0 ? LibroList.map((row) => (
            <TableRow
              key={row.libroId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component='th' scope='row'>
                       <strong>{row.libroId}</strong>
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.nombre}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.precio}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.genero}
                </TableCell>
                <TableCell component='th' scope='row'>
                       <Button color='primary' onClick={()=>{goToLibro(row.libroId)}}><RemoveRedEyeIcon/></Button>
                       <Button style={{color:'red'}} onClick={()=>{deleteById(row.libroId)}}><DeleteOutlineIcon/></Button>
                </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container justifyContent="center" style={{marginTop:'10px'}}>{loading ? <Loading/> :(LibroList.length === 0 ? <p><strong>No hay registros para mostrar</strong></p> : null)}</Grid>
    </Container>
)}
