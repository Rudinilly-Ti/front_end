import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../server/api';

export default function UpdateProject(props) {
  const { data, reset } = props;
  const [open, setOpen] = React.useState(false);
  const [Projeto, setProjeto] = React.useState({
    nome: data.nome,
    responsavel: data.responsavel,
    cliente: data.cliente,
    descricao: data.descricao
  });

  const handleConfirm = async () => {
    const projeto = await api.post(`/updateProject/${ data.id }`, Projeto)
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
        Atualizar Projeto
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg' aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Atualizar Projeto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            onChange = {e => setProjeto({...Projeto, nome: e.target.value})}
            id="nome"
            value={Projeto.nome}
            label="Nome"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setProjeto({...Projeto, responsavel: e.target.value})}
            id="responsavel"
            value={Projeto.responsavel}
            label="Responsavel"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setProjeto({...Projeto, cliente: e.target.value})}
            id="cliente"
            value={Projeto.cliente}
            label="Cliente"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            onChange = {e => setProjeto({...Projeto, descricao: e.target.value})}
            id="descricao"
            value={Projeto.descricao}
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