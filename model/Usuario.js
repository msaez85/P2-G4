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
}

class Usuarios {
    cosntructor() {
        this.listaUsuarios = localStorage.getItem("listaUsuarios") ? JSON.parse(localStorage.getItem("listaUsuarios")) : [];
    }

    agregarUsuario(usuario) {
        let existe = false;
        this.listaUsuarios.forEach(u => {
            if (u.nombre == usuario.nombre && u.correo == usuario.correo && u.tipo == usuario.tipo) {
                existe = true;
            }
        });
        if (existe) {
            console.log('su usuario ya fue registrado anteriormente');
        } else {
            this.listaUsuarios.push(usuario);
            localStorage.setItem("listaUsuarios", JSON.stringify(this.listaUsuarios));
        }
    }

    eliminarusuario(usuario) {
        let nuevaListaUsuario = [];
        let existe = false;
        this.listaUsuarios.forEach(u => {
            if (u.nombre == usuario.nombre && u.correo == usuario.correo && u.tipo == usuario.tipo) {
                existe = true;
            } else {
                nuevaListaUsuario.push(u);
            }
        });
        if (existe) {
            console.log('su usuario fue eliminado exitosamente');
            this.listaUsuarios = nuevaListaUsuario;
            localStorage.setItem("listaUsuarios", JSON.stringify(this.listaUsuarios));
        } else {
            console.log('el usuario que intenta eliminar no existe');
        }
    }
}

export { Usuario, Usuarios }; 