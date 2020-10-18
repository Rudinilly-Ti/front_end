import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../server/api'

export default function UpdateAppointment({ row, data }) {
  const [open, setOpen] = React.useState(false);
  const [Appointment, NewAppointment] = React.useState({
    responsavel: row.responsavel,
    descricao: row.descricao,
    status: row.status,
    data_inicio: row.data_inicio,
    data_fim: row.data_fim,
  });

  const handleConfirm = async () => {
    const tarefa = await api.post(`/updateAppointment/${row.id}`, Appointment)
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
        Atualizar
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo Bloco</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => NewAppointment({...Appointment, responsavel: e.target.value})}
            id="responsavel"
            value={Appointment.responsavel}
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => NewAppointment({...Appointment, descricao: e.target.value})}
            id="descricao"
            value={Appointment.descricao}
            label="Descrição"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => NewAppointment({...Appointment, status: e.target.value})}
            id="status"
            value={Appointment.status}
            label="Status"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => NewAppointment({...Appointment, data_fim: e.target.value})}
            id="data_fim"
            value={Appointment.data_fim}
            label="Data Fim"
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