


class Cliente{

    static contadorClientes = 0;

    constructor( fechaRegistro ){
        this._idCliente = ++ Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    set fechaRegistro( fechaRegistro ){
        this._fechaRegistro = fechaRegistro;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    toString(){
        return `${super.toString()}
        ${this._idCliente}
        ${this._fechaRegistro}`; 
    }


}

