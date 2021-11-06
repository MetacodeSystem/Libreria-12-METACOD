import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DetalleVentaGetAllResponseDto from '../../dtos/DetalleVenta/getAll/DetalleVentaGetAllResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { toast } from 'react-toastify';
import DetalleVentaService from '../../services/DetalleVenta/DetalleVentaService';

export default function DetalleVentaList() {
    const [DetalleVentaList, setDetalleVentaList] = useState<DetalleVentaGetAllResponseDto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();

    const getAll = async()=>{
       try {
           const response = await DetalleVentaService.getAllDetalleVenta();
           setDetalleVentaList(response);
           setLoading(false)
        }  
       catch (error) {
               setLoading(false)
        }
    }

    const goToDetalleVenta = (id: number) => {
      history.push(`/DetalleVenta/${id}`)
    }

  const deleteById = async (id : number)=>{
    const response = await DetalleVentaService.deleteDetalleVenta(id);
    if(response.ok){
      toast.success('DetalleVenta delete successfully')

      await getAll()
    }else{
        toast.error(`An error occurred when trying to delete this entity, please check that other entities did not depend on it.`)

    }
  };  

   useEffect(()=>{
      setLoading(true);
      getAll()    },[])
    const goToCreateViewHandler = ()=>{
      history.push('/DetalleVenta/create')
    }
return (
    <Container>
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item><h2>DetalleVenta List</h2></Grid>
          <Grid item><Button color="primary" variant="contained" onClick={goToCreateViewHandler} size="small">
            <AddIcon/>DetalleVenta
          </Button></Grid>
        </Grid>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
               <TableCell><strong>Id</strong></TableCell><TableCell><strong>Cantidad</strong></TableCell>
<TableCell><strong>Subtotal</strong></TableCell>
               <TableCell><strong>Actions</strong></TableCell>          </TableRow>
        </TableHead>
        <TableBody>
{DetalleVentaList.length > 0 ? DetalleVentaList.map((row) => (
            <TableRow
              key={row.detalleVentaId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component='th' scope='row'>
                       <strong>{row.detalleVentaId}</strong>
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.cantidad}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.subtotal}
                </TableCell>
                <TableCell component='th' scope='row'>
                       <Button color='primary' onClick={()=>{goToDetalleVenta(row.detalleVentaId)}}><RemoveRedEyeIcon/></Button>
                       <Button style={{color:'red'}} onClick={()=>{deleteById(row.detalleVentaId)}}><DeleteOutlineIcon/></Button>
                </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container justifyContent="center" style={{marginTop:'10px'}}>{loading ? <Loading/> :(DetalleVentaList.length === 0 ? <p><strong>No hay registros para mostrar</strong></p> : null)}</Grid>
    </Container>
)}
