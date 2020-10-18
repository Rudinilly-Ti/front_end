import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useParams } from 'react-router-dom';
import api from '../../server/api';

export default function NewBloc({ data }) {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [newBloc, setNewBloc] = React.useState({
    uuid_projeto: id,
    nome: '',
    responsavel: '',
    descricao: ''
  });

  const handleConfirm = async () => {
    const bloco = await api.post(`/createBlock`, newBloc)
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
        Novo Bloco
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo Bloco</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange = {e => setNewBloc({...newBloc, nome: e.target.value})}
            id="nome"
            label="Nome"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewBloc({...newBloc, responsavel: e.target.value})}
            id="responsavel"
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewBloc({...newBloc, descricao: e.target.value})}
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