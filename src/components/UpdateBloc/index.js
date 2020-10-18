import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../server/api';

export default function UpdateBloc({ data, reset }) {
  const [open, setOpen] = React.useState(false);
  const [Bloc, setBloc] = React.useState({
    nome: data.nome,
    responsavel: data.responsavel,
    descricao: data.descricao
  });

  const handleConfirm = async () => {
    const bloco = await api.post(`/updateBlock/${ data.id }`, Bloc)
    reset();
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
        Atualizar Bloco
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo Bloco</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange = {e => setBloc({...Bloc, nome: e.target.value})}
            id="nome"
            value={Bloc.nome}
            label="Nome"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setBloc({...Bloc, responsavel: e.target.value})}
            id="responsavel"
            value={Bloc.responsavel}
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setBloc({...Bloc, descricao: e.target.value})}
            id="descricao"
            value={Bloc.descricao}
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