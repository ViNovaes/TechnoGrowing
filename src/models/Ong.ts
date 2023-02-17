import { url } from "inspector";
import { StringifyOptions } from "querystring";
import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/mysql";

export interface OngInstance extends Model{
    codONG: Number,
    Nome: String,
    Email: String,
    password: String,
    Tel: string,
    CNPJ: string,
    Endereco: String,
    Numero: String,
    Complemento: String,
    CEP: String,
    Bairro: String,
    Cidade: String,
    Categoria: String,
    Descricao: String,
    WebSite: String,
    RedeSocial: String,
    Url: String,
}

export const Ong = sequelize.define<OngInstance>("Ong,",{
    codONG:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
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
        type:DataTypes.STRING,
        allowNull:false
    },
    CNPJ:{
        type:DataTypes.STRING,
    },
    Endereco:{
        type:DataTypes.STRING,
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
    },
    Url:{
        type:DataTypes.STRING,
    }


},{
    tableName: "tbong",
    timestamps:false
})