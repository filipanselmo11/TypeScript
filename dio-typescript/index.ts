// types
// interfaces

// type IAnimal = {
//     nome: string,
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean;
// };

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande'
// }

// interface IAnimal {
//     nome: string,
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean
// }



// interface IFelino extends IAnimal {
//     visaoNoturna: boolean,
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',

// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     executarRugido:(alturaEmDecibeis) => (`${alturaEmDecibeis}`)
// }

// animal.executarRugido(12);

// const felino: IFelino = {
//     nome: 'Leao',
//     tipo: 'terrestre',
//     visaoNoturna: false,
//     executarRugido:() => (``)
// }

// function soma(a: number, b: number) {
//     return a + b;
// }

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// })


//Generic Types

// function adicionarApendiceLista<T>(array: T[], valor: T){
//     return array.map(() => valor);
// }

// adicionarApendiceLista(['A', 'B', 'C'], 'd');


// interface IUsuario {
//     id: string,
//     email: string,
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario',//Dado opcional
// }


// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo){
//         //redirecionar(usuario.cargo);
//     }

//     //redirecionar para a área do usuário
// }

// interface Cachorro {
//     nome: string,
//     idade: number,
//     parqueFav?: string,
// }

// const meuCachorro: Cachorro = {
//     nome: 'Ronin',
//     idade: 11
// }

// type CachorroSomenteLeitura = {
//     readonly [K in keyof Cachorro]-?: Cachorro[K]
// }

// class MeuCachorro implements Cachorro {
//     nome;
//     idade;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }

// }

// const cao = new MeuCachorro('Ronin', 14);

// cao.nome;
// cao.idade;

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao() {
//         console.log('Chamou nova funcao');
//     }
// })

// $('body').novaFuncao();


interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
}

// const brasileiro: Brasileiro {
    
// }