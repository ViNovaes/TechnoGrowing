import { Model,DataTypes } from "sequelize"

import {sequelize} from '../instances/mysql'


export interface vagaOngInstance extends Model{
    codVaga: number,
    NomeONG: string,
    Vaga: string,
    Categoria: string,
    Descricao: string,
    Periodo: string,
    horario: number,
    Endereco: String
}

export const VagasONG = sequelize.define<vagaOngInstance>("Vagas,",{
    codVaga: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    NomeONG:{
        type: DataTypes.STRING,
        allowNull:false
    }, 
    Vaga:{     
        type: DataTypes.STRING,
        allowNull:false
    }, 
    Categoria:{     
        type: DataTypes.STRING,
        allowNull:false
    },    
    Descricao:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Periodo:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Horario:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    Endereco:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: "tbvoluntario",
    timestamps:false
})