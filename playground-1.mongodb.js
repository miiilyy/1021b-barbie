// const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
//use("test");
//Apagando a collection antes de inserir novos dados.
//db.cardapio.drop();

//Código para criar uma nova collection
//db.createCollection("cardapio");

//Código para inserir vários dados em uma collection criada anteriormente
//db.cardapio.insertMany([
   // {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},//
   // {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
   /// {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
    //{nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
  //  {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
//])

//SELECT * FROM test.cardapio;

//No mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
//db.cardapio.find();

//Filtrando pelo nome
//SELECT * FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"});

//Para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})

//use("teretreino");
//db.createCollection("treino");

//db.treino.insertOne(
  //  {
  //      nome:"Peito e Biceps",
    //      diaSemana:"Segunda",
    //      exercicios:[
      //        {
      //            nome:"Supino",
           //       serie:4,
       //           repeticoes:15
            //  },
    //          {
        //          nome:"Rosca Martelo",
            //      serie:4,
       //           repeticoes:15
           //   },
            //  {
                //  nome:"Voador",
   //               serie:4,
       //           repeticoes:15
           //   },
           //   {
              //    nome:"Rosca Scott",
              //    serie:4,
       //           repeticoes:15
          //    },
            
         // ]
    //  }
 // )
 // db.treino.insertOne(
    //  {
        //  nome:"Costas e Tríceps",
        //  diaSemana:"sexta",
         // exercicios:[
            //  {
                //  nome:"Tríceps Polia",
               //   serie:4,
              //    repeticoes:15
            //  },
           //   {
               //   nome:"Tríceps Corda",
              //    serie:4,
                //  repeticoes:15
            //  },
            //  {
                //  nome:"Pull Down",
               //   serie:4,
               //   repeticoes:15
           //   },
            //  {
                //  nome:"Remada Curvada",
                //  serie:4,
              //    repeticoes:15
           //   },
           //   {
               //   nome:"Puxada Alta",
                //  serie:4,
                //  repeticoes:15
           //   },
            //  {
               //   nome:"Remada Baixa",
                //  serie:4,
                //  repeticoes:15
            //  }
        //  ]
    //  }
 // )

// db.treino.insertOne(
//     {
//         nome:"Inferiores",
//         diaSemana:"Terca e Quinta",
//         exercicios:[
//             {
//                 nome:"Leg Press",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Agachamento",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Levantamento Terra",
//                 serie:4,
//                 repeticoes:12
//             },
//             {
//                 nome:"Panturrilha",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Extensora ",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Abdutora",
//                 serie:4,
//                 repeticoes:15
//             },
//             {
//                 nome:"Cadeira Adutora",
//                 serie:4,
//                 repeticoes:15
//             }
            
//         ]
//     }
// )
// use ("teretreino");
// db.treino.find({_id:ObjectId("64f7421cfd8efefbf88f565d")})

// use ("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f7421cfd8efefbf88f565f")},
//     {
//         $set:{
//             diaSemana:"sexta",
//         nome:"peito e biceps A"
//         }
//     }
// )

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f7421cfd8efefbf88f565f"), "exercicio.nome":"Voador"},
//     {
//         $set:{
//             "exercicios.$.nome":"Perck Deck"
//         }
//     }
// )
// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f7421cfd8efefbf88f565d"), "exercicios.nome":"Rosca Scott"},
//     {
//         $set:{
//             "exercicios.$.nome":"Rosca Scott",
//             "exercicios.$.serie":5,
//             "exercicios.$.repeticoes":12
//         }
//     }
// )

use("db_Portifolio");
db.createCollection("Trabalho");
db.createCollection("Trabalho");

db.cake.insertMany([
{
    _id:ObjectId ("111111111111"), 
    titulo: "Libra", 
    Introdução: " Curso de libras intermediario. Este curso tem o objetivo de oferecer a toda comunidade um conhecimento intermediário sobre essa língua, que é  reconhecida oficialmente no Brasil"
},
{
    _id:ObjectId ("222222222222"), 
    titulo: "Trabalho de Bairro Inteligente", 
    Introdução: "Trabalho onde comparamos um bairro habitual com um inteligente"
},
{
    _id:ObjectId ("333333333333"), 
    Titulo: "Robótica",
    Introdução:"Software Lego Mindstorm EV3  e suas principais funcionalidades. Entendendo sobre motores, sensores para detecção de obstáculos e comutação." 

},
    ] 
)










use("db_patissier")
db.cake.deleteMany({_id:ObjectId("343434343434343434343434")});

use("db_patissier");
db.cake.find({}, {nome:true,preco:true});

use("db_patissier");
db.cake.find({preco: {$lte:70}}, {nome:true, preco:true});

use("db_patissier");
db.cake.updateOne(
{_id:ObjectId("343434343434343434343434")},
{
$set:{
nome: "Bolo de Maracuja",
peso: "1.950kg",
},
$push: {
ingredientes: {
nome: "maracuja",
quantidade: "2 maracuja medios"
},
},
}
)
use("db_patissier");
db.cake.updateOne(
{_id:ObjectId("323232323232323232323232"), "ingredientes.nome": "acucar"},
{
$set:{
"ingredientes.$.nome":"Ovo",
"ingredientes.$.quantidade":"3 ovos"
},
}
)




 



            
        







































































































































































































































































































































































































