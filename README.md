1 - instalar o git
2 - instalar o node
3 - instalar o insomnia

npm init
npm i express
npm i nodemon

---------------------------------

app.use(express.urlencoded({extended: true}))

---------------------------------

const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Você acionou a rota /')
})

app.get('/soma', (req, res) => {
    const n1 = 1
    const n2 = 2
    const n3 = 3
    const n4 = 4

    const soma = n1 + n2 + n3 + n4

    res.json(soma)
})

app.post('/notas', (req, res) => {
    const n1 = req.body.n1*1
    const n2 = req.body.n2*1
    const n3 = req.body.n3*1
    const n4 = req.body.n4*1

    const soma = n1 + n2 + n3 + n4
    const media = soma / 4

    const resposta = {
        soma: soma,
        media: media
    }

    if(media < 7 && media >= 5){
        resposta.resultado = "EM RECUPERAÇÂO"
    }
    else if(media < 5){
        resposta.resultado = "REPROVADO"
    }
    else{
        resposta.resultado = "APROVADO"
    }

    res.json(resposta)
})

app.get('/objeto', (req, res) => {

    const carroArray = [
        {
            marca: 'VW',
            modelo: 'Gol',
            cor: 'Branco',
            placa: '30F 9622',
            ano: '2020'
        },
        {
            marca: 'VW',
            modelo: 'Virtus',
            cor: 'Branco',
            placa: '30F 9622',
            ano: '2020'
        },
        {
            marca: 'VW',
            modelo: 'Pálio',
            cor: 'Branco',
            placa: '30F 9622',
            ano: '2020'
        },
    ]

    const carro = {
        marca: 'VW',
        modelo: 'Gol',
        cor: 'Branco',
        placa: '30F 9622',
        ano: '2020'
    }

    res.json(carroArray)

})

app.get('/media', (req, res) => {
    const n1 = 1
    const n2 = 2
    const n3 = 3
    const n4 = 4

    const soma = n1 + n2 + n3 + n4
    const media = soma / 4

    const resposta = {
        soma: soma,
        mensagem: `A média é: ${media}`
    }

    res.json(resposta)
})

app.listen(3333, () => {
    console.log('Servidor UP')
})

---------------------------------

127.0.0.1:3333 ou localhost:3333

---------------------------------

npx nodemon index

---------------------------------
            ADONIS JS
---------------------------------

// Criando projeto adonis
npm init adonis-ts-app@latest [nome do projeto]


// Startando o servidor
node ace serve --watch


// Configurando servidor
npm i @adonisjs/lucid
node ace configure @adonisjs/lucid


// Criando um controller
node ace make:controller [nome da pasta]
node ace make -h


// Criando um migration
(se usa underline, curso_id)
node ace make:migration [nome da tabela]
node ace migration:run
node ace migration:rollback (volta o ultimo que foi rodado)
node ace migration:reset (apaga o banco todo)
node ace migration:refresh (reset + run)
node ace migration:refresh --seed (refresh + seed)


// Criando um model
(se usa letra maiuscula, cursoId)
node ace make:model [nome da tabela]
node ace make:model [nome da tabela] -m (executa model e migration)
{
	@column()
	public nome: string
}


// Criando Seeders
node ace make:seeder [nome da tabela]
node ace db:seed


// Criando uma FK
table.string('[nome da tabela]_id').unsigned().references('id').inTable([nome da tabela])
