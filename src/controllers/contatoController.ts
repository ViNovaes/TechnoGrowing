import { Request, Response } from "express"
import { Contatos } from '../models/Contatos'


export const contato = (req:Request, res:Response) =>{

    res.render('pages/contato')
}

export const contatoPost = async (req:Request, res:Response) =>{

    //recebendo as informações do Contato via body (POST)
    const {Nome,Email,Mensagem} = req.body

    try{
        /* criando o "contato" no banco */
        const comunicacao = await Contatos.create({
            Nome,
            Email,
            Mensagem
        })

        req.session.userId = JSON.stringify(comunicacao.codContato)

        req.session.save(() =>{
            res.redirect('/obrigado')
        })


    } catch(err){
        console.log(err)
    }
}