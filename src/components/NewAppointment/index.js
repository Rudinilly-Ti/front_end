import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useParams } from 'react-router-dom';
import api from '../../server/api'

export default function NewAppointment({ id_bloco, data }) {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [newAppointment, setNewAppointment] = React.useState({
    uuid_projeto: id,
    uuid_bloco: id_bloco,
    responsavel: '',
    descricao: '',
    status: 'incompleto',
    data_inicio: '2020-10-17T14:45:07.166Z',
    data_fim: '2020-10-17T14:49:05.795Z',
  });

  const handleConfirm = async () => {
    const tarefa = await api.post(`/createAppointment`, newAppointment)
    data();
    handleClose();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Nova Tarefa
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo Bloco</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewAppointment({...newAppointment, responsavel: e.target.value})}
            id="responsavel"
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewAppointment({...newAppointment, descricao: e.target.value})}
            id="descricao"
            label="Descrição"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}