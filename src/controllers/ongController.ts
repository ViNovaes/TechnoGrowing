import { Request, Response } from "express"
import { Ong } from "../models/Ong"
import bcrypt from 'bcrypt'


export const login = (req:Request, res:Response) =>{

    res.render('pages/login')
}

export const contaOng = (req:Request, res:Response) =>{

    const message = req.flash('message')
    //console.log(error)

    res.render('pages/contaOng')
}
export const criarVaga = (req:Request, res:Response) =>{
    res.render('pages/criarVaga')
}
export const contaOngPost = async (req:Request, res:Response) =>{
    //verificando as validações do usuário

    //recebendo as informações do usuário via body (POST)
    const {Nome,Email,password,confirmpassword,Tel,CNPJ,Endereco,Numero,Complemento,CEP,Bairro,Cidade,Estado,Categoria,Descricao,WebSite,RedeSocial,Url} = req.body

    //se password for diferente de confirmpassword
    if(password != confirmpassword){
        //enviar uma mensagem de erro ao usuário com flashmessage
        
        req.flash('message','As senhas não conferem, tente novamente')

        res.redirect('/contaOng')
        
        return 
    }
    
    //checar se o usuário existe
    const checkIfUserExists = await Ong.findOne({

        where:{email:Email}

    })

    //se o usuário existir exibir uma flash message
    if(checkIfUserExists){
        req.flash('message','O e-mail já está em uso')
        res.redirect('/contaOng')

        return
    }

    //criar o password

    /*vamos dificultar a senha para o hacker não conseguir 
    quebrar a senha , então vamos por 10 caracteres randomicos */

    const salt = bcrypt.genSaltSync(10)
    //gerar a hash com o meu salt para o usuário 
    const hashedPassword = bcrypt.hashSync(password,salt)

    /*agora vamos criar um objeto de usuário 
    com os dados recebidos */  

    try{
        /* criando o usuário no banco */
        const user = await Ong.create({
            Nome,
            Email,
            password: hashedPassword,
            Tel,
            CNPJ,
            Endereco,
            Numero,
            Complemento,
            CEP,
            Bairro,
            Cidade,
            Estado,
            Categoria,
            Descricao,
            WebSite,
            RedeSocial,
            Url
        })

        // nome,dataNascimento,email,password,cpf,telefone,experiencia,url,confirmpassword
        //const createdUser = await User.create(user);
        //inicializar a sessão
        //req.session.userId = createdUser.id;

        req.session.userId = JSON.stringify(user.codONG)

        //salvar a sessão
        //para garantir que meu usuário seja salvo
        //antes de redirecioná-lo para /
        req.session.save(() =>{
            res.redirect('/ciarVaga')
        })


    } catch(err){
        console.log(err)
    }
}