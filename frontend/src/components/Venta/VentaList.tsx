import { Button, Container, Grid, Table,TableBody, TableCell, TableRow, TableContainer, TableHead, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VentaGetAllResponseDto from '../../dtos/Venta/getAll/VentaGetAllResponseDto';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Loading from '../../common/Loader';
import { toast } from 'react-toastify';
import VentaService from '../../services/Venta/VentaService';

export default function VentaList() {
    const [VentaList, setVentaList] = useState<VentaGetAllResponseDto[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const history = useHistory();

    const getAll = async()=>{
       try {
           const response = await VentaService.getAllVenta();
           setVentaList(response);
           setLoading(false)
        }  
       catch (error) {
               setLoading(false)
        }
    }

    const goToVenta = (id: number) => {
      history.push(`/Venta/${id}`)
    }

  const deleteById = async (id : number)=>{
    const response = await VentaService.deleteVenta(id);
    if(response.ok){
      toast.success('Venta delete successfully')

      await getAll()
    }else{
        toast.error(`An error occurred when trying to delete this entity, please check that other entities did not depend on it.`)

    }
  };  

   useEffect(()=>{
      setLoading(true);
      getAll()    },[])
    const goToCreateViewHandler = ()=>{
      history.push('/Venta/create')
    }
return (
    <Container>
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item><h2>Venta List</h2></Grid>
          <Grid item><Button color="primary" variant="contained" onClick={goToCreateViewHandler} size="small">
            <AddIcon/>Venta
          </Button></Grid>
        </Grid>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
               <TableCell><strong>Id</strong></TableCell><TableCell><strong>Fecha</strong></TableCell>
<TableCell><strong>NumeroVenta</strong></TableCell>
               <TableCell><strong>Actions</strong></TableCell>          </TableRow>
        </TableHead>
        <TableBody>
{VentaList.length > 0 ? VentaList.map((row) => (
            <TableRow
              key={row.ventaId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component='th' scope='row'>
                       <strong>{row.ventaId}</strong>
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.fecha}
                </TableCell>
                <TableCell component='th' scope='row'>
                       {row.numeroVenta}
                </TableCell>
                <TableCell component='th' scope='row'>
                       <Button color='primary' onClick={()=>{goToVenta(row.ventaId)}}><RemoveRedEyeIcon/></Button>
                       <Button style={{color:'red'}} onClick={()=>{deleteById(row.ventaId)}}><DeleteOutlineIcon/></Button>
                </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container justifyContent="center" style={{marginTop:'10px'}}>{loading ? <Loading/> :(VentaList.length === 0 ? <p><strong>No hay registros para mostrar</strong></p> : null)}</Grid>
    </Container>
)}
