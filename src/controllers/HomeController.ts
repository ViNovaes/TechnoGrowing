import { Request, Response } from 'express';
import { Funcionario } from '../models/Funcionario';
import { Loja } from '../models/Loja';
import { Ong } from '../models/Ong';
import { Voluntario } from '../models/Voluntario';
import { Contatos } from '../models/Contatos';
import {sequelize } from '../instances/mysql'

export const home = async (req:Request, res:Response) => {
    try{
        await sequelize.authenticate()
        console.log("Conexão estabilizada com sucesso!")
    } catch(error){
        console.log("Deu problema: ",error)
    }
    
    res.render('pages/home')
}

export const perfil = (req:Request, res:Response) =>{
    res.render('pages/perfil')
}
export const sobre = (req:Request, res:Response) =>{
    res.render('pages/sobre')
}
export const vagas = (req:Request, res:Response) =>{
    res.render('pages/vagas')
}
export const loja = (req:Request, res:Response) =>{
    res.render('pages/loja')
}
export const contatos = (req:Request, res:Response) =>{
    res.render('pages/contato')
}
export const confirmCad = (req:Request, res:Response) =>{
    res.render('pages/confirmCad')
}
export const cadFinalizado = (req:Request, res:Response) =>{
    res.render('pages/cadFinalizado')
}
export const confirma =(req:Request, res:Response)=>{
    res.render('pages/confirmacao')
}
export const erro =(req:Request, res:Response)=>{
    res.render('pages/404')
}
export const obrigado =(req:Request, res:Response)=>{
    res.render('pages/obrigado')
}
export const vagaCriada = (req:Request, res:Response) =>{
    res.render('pages/vagaCriada')
}
export const criarVaga = (req:Request, res:Response) =>{
    res.render('pages/criarVaga')
}