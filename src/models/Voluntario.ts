import { Model,DataTypes } from "sequelize"

import {sequelize} from '../instances/mysql'


export interface VoluntarioInstance extends Model{
    codVoluntario: number,
    Nome: string,
    dataNascimento: Date,
    Email: string,
    password: string,
    CPF: number,
    Tel: number,
    Experiencia: String,
    RedeSocial: string,
    Url: String
}

export const Voluntario = sequelize.define<VoluntarioInstance>("Voluntario,",{
    codVoluntario: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nome:{
        type: DataTypes.STRING,
        allowNull:false
    }, 
    dataNascimento:{     
        type: DataTypes.STRING,
        allowNull:false
    }, 
    Email:{     
        type: DataTypes.STRING,
        allowNull:false
    },    
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    CPF:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    Tel:{
        type: DataTypes.NUMBER,
        allowNull:false
    },
    Experiencia:{
        type: DataTypes.STRING,
        allowNull:false
    },
    RedeSocial:{
        type: DataTypes.STRING,
        allowNull:false
    },
    Url:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: "tbvoluntario",
    timestamps:false
})