import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import api from '../../server/api';

export default function NewProject() {
  const [open, setOpen] = React.useState(false);
  const [newProject, setNewProject] = React.useState({
    nome: '',
    responsavel: '',
    cliente: '',
    descricao: ''
  });

  const handleConfirm = async () => {
    const projeto = await api.post('/createProject', newProject)
  
    console.log(projeto);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Novo Projeto
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Novo Projeto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange = {e => setNewProject({...newProject, nome: e.target.value})}
            id="nome"
            label="Nome"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewProject({...newProject, responsavel: e.target.value})}
            id="responsavel"
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewProject({...newProject, cliente: e.target.value})}
            id="cliente"
            label="Cliente"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setNewProject({...newProject, descricao: e.target.value})}
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