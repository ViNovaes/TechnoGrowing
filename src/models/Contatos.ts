import { Model,DataTypes } from "sequelize"

import {sequelize} from '../instances/mysql'


export interface ContatoInstance extends Model{

    codContato: number,
    Nome: String,
    Email: String,
    Mensagem: String,
}

export const Contatos = sequelize.define<ContatoInstance>("Contato,",{

    codContato:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    Nome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Email:{     
        type: DataTypes.STRING,
        allowNull:false
    },    
    Mensagem:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: "tbcontato",
    timestamps:false
})