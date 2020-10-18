import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import NewAppointment from '../NewAppointment';
import UpdateBloc from '../UpdateBloc';
import UpdateAppointment from '../UpdateAppointment';
import api from '../../server/api';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {

  const { row } = props;
  const { data } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const deleteAppointment = async ({ id }) => {
    const response = await api.delete(`/deleteAppointment/${ id }`)
    data();
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.responsavel}
        </TableCell>
        <TableCell align="right">{row.descricao}</TableCell>
        <TableCell align="right">{row.data_inicio}</TableCell>
        <TableCell align="right">{row.data_fim}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Opções
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <UpdateAppointment row={row} data={data} />
                    </TableCell>
                    <TableCell>
                      <Button variant="outlined" color="secondary" onClick={() => deleteAppointment({ id: row.id})} >
                        Excluir
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ data, reset }) {
  const [tarefas, setTarefas ] = React.useState([])

  React.useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await api.get(`/showAppointments/${ data.id }`)
    await setTarefas(response.data);
  }

  const deleteBloc = async ({ id }) => {
    const response = await api.delete(`/deleteBlock/${ id }`)
    reset();
  }

  return (
    <TableContainer component={Paper} style={{width: '90%', marginBottom: '10px'}}>
      <Toolbar style={{display: 'flex', justifyContent: 'space-around'}}>
      <Typography variant="h6" id="tableTitle" component="div">
          <h1>{data.nome}</h1>
          <h5>{data.descricao}</h5>
          <h4>Rsponsavel: {data.responsavel}</h4>
        </Typography>
        <Tooltip title="Nova Tarefa">
         <NewAppointment id_bloco={ data.id } data={getData}/>
        </Tooltip>
        <Tooltip title="Atualizar Bloco">
         <UpdateBloc data={ data } reset={reset}/>
        </Tooltip>
        <Tooltip title="Ecluir bloco">
        <Button variant="outlined" color="secondary" onClick={() => deleteBloc({ id: data.id })} >
            Excluir Bloco
        </Button>
        </Tooltip>
      </Toolbar>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Responsavel</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Data inicio</TableCell>
            <TableCell align="right">Data fim</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tarefas.map(bloco => (
            <Row key={bloco.id} row={bloco} data={getData}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}