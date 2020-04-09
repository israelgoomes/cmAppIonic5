import { UsuarioModel } from './usuario-model';
import { ClienteModel } from 'src/app/models/cliente-model';
export class ProjetoModel{

    _id: string;
    tituloProjeto: string;
    descricaoProjeto: string;
    preco: string;
    foto: []; 
    status: boolean;
    data: string;
    usuario: UsuarioModel;
    cliente: ClienteModel;

}