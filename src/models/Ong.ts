import { url } from "inspector";
import { StringifyOptions } from "querystring";
import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface OngInstance extends Model{
    codONG: number,
    Nome: String,
    Email: String,
    password: string,
    Tel: number,
    CNPJ: number,
    Endereco: string,
    Numero: string,
    Complemento: string,
    CEP: string,
    Bairro: string,
    Cidade: string,
    Categoria: String,
    Descricao: String,
    WebSite: String,
    RedeSocial: String,
    Url: String,
}

export const Ong = sequelize.define<OngInstance>("Ong,",{
    codONG:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Tel:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    CNPJ:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Endereco:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Numero:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Complemento:{
        type:DataTypes.STRING,
        allowNull:false
    },
    CEP:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Bairro:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Cidade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Categoria:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Descricao:{
        type:DataTypes.STRING,
        allowNull:false
    },
    WebSite:{
        type:DataTypes.STRING,
    },
    RedeSocial:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Url:{
        type:DataTypes.STRING,
        allowNull:false
    }


},{
    tableName:'tbong',
    timestamps: false
})