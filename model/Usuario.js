import { generarID } from "../helpers/help.js";

class Usuario {
    constructor(nombre, correo, pass, tipo, estado) {
        this.id = generarID();
        this.nombre = nombre;
        this.correo = correo;
        this.pass = pass;
        this.tipo = tipo;
        this.estado = estado;
    }
    toModificarUsuario(){
        return {
            tipo: this.tipo,
            estado: this.estado
        }
    }
}

class Usuarios {
    #listaUsuarios;
    constructor() {
        this.#listaUsuarios = localStorage.getItem("listaUsuarios") ? JSON.parse(localStorage.getItem("listaUsuarios")) : [];
    }

    agregarUsuario(usuario) {
        let existe = false;
        this.#listaUsuarios?.forEach(u => {
            if (u.nombre == usuario.nombre && u.correo == usuario.correo && u.tipo == usuario.tipo) {
                existe = true;
            }
        });
        if (existe) {
            return 'Su usuario ya fue registrado anteriormente';
        } else {
            this.#listaUsuarios.push(usuario);
            localStorage.setItem("listaUsuarios", JSON.stringify(this.#listaUsuarios));
            return 'Usuario Registrado';
        }
    }

    eliminarUsuario(idUsuario) {
        let nuevaListaUsuario = [];
        let existe = false;
        this.#listaUsuarios.forEach(u => {
            if (u.id === idUsuario) {
                existe = true;
            } else {
                nuevaListaUsuario.push(u);
            }
        });
        if (existe) {
            this.#listaUsuarios = nuevaListaUsuario;
            localStorage.setItem("listaUsuarios", JSON.stringify(this.#listaUsuarios));
            return 'su usuario fue eliminado exitosamente';
        } else {
           return 'el usuario que intenta eliminar no existe';
        }
    }
    get listadoUsuarios() {
        return this.#listaUsuarios;
    }
    isNullListadoUsuarios() {
        return this.#listaUsuarios.length == 0 ? true : false;
    }
    modificarUsuario( idUsuario, usuarioModificado){
        if(this.isNullListadoUsuarios){
            this.#listaUsuarios.map(usuario => this.#reemplazarInformacionUsuario(idUsuario,usuarioModificado,usuario));
            localStorage.setItem("listaUsuarios", JSON.stringify(this.#listaUsuarios));
            return "Usuario Modificado! "; 
        }else{
            return "Lista Vacía de Usuarios!"; 
        }
    }
    #reemplazarInformacionUsuario(idUsuario, usuarioModificado,usuario){
        if(usuario.id === idUsuario){
            usuario.tipo = usuarioModificado.tipo; 
            usuario.estado = usuarioModificado.estado; 
        }
    }
}

export { Usuario, Usuarios }; 