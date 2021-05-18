import spider from '../img/spiderImg@2x.png';
import wanda from '../img/wandaImg@2x.png';
import thanos from '../img/thanosImg@2x.png';
import hulk from '../img/hulkImg@2x.png';
import ironMan from '../img/ironManPoster@2x.png';
import ironMan2 from '../img/ironMan2Poster@2x.png';
import captaoAmerica from '../img/CAPoster@2x.png';
import captaMarvel from '../img/caMarvelPoster@2x.png';
import thorPoster from '../img/ThorPoster@2x.png';
import surfista from '../img/surfistaPrateadoComics@2x.png';
import wolverine from '../img/wolverineComics@2x.png';
import thorComics from '../img/ThorComics@2x.png';
const data = {
    personagens: {
        'Homem-Aranha': {
            nome: 'Homem-Aranha';
            descricao: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.',
            aparicoes: ['Spiderverse', 'Homecomming', 'The Amazing Spiderman'],
            avaliacao: 4.5,
            imgUrl: spider
        },
        'Wanda Maximoff': {
            nome: 'Wanda Maximoff',
            descricao: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.',
            aparicoes: ['Vingadores - Era de Ultron', 'Capitão América - Guerra Civil', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato', 'WandaVision'],
            avaliacao: 4,
            imgUrl: wanda
        },
        'Thanos': {
            nome: 'Thanos',
            descricao: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
            aparicoes: ['Vingadores', 'Guardiões da Galáxia - vol. I', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
            avaliacao: 5,
            imgUrl: thanos
        },
        'Hulk': {
            nome: 'Hulk',
            descricao:'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.',
            aparicoes: ['Vingadores', 'Vingadores - Era de Ultron', 'Thor - Ragnarok', 'Vingadores - Guerra Infinita', 'Vingadores - Ultimato'],
            avaliacao: 4,
            imgUrl: hulk
        }
        
    },
    filmes: {
        'Homem de Ferro' : {
            nome: 'Homem de Ferro',
            descricao: 'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.',
            lancamento: 2008,
            cronologia: 2009,
            critica: 3,
            imgUrl: ironMan

        },
        'Homem de Ferro 2': {
            nome: 'Homem de Ferro 2',
            descricao: 'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas',
            lancamento: 2010,
            cronologia: 2011,
            critica: 3,
            imgUrl: ironMan

        },
        'Thor' : {
            nome: 'Thor',
            descricao: 'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos. ',
            lancamento: 2011,
            cronologia: 2011,
            critica: 4,
            imgUrl: thorPoster

        },
        'Capitão América: O Primeiro Vingador': {
            nome: 'Capitão América: O Primeiro Vingador',
            descricao: 'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ',
            lancamento: 2011,
            cronologia: 1943,
            critica: 4,
            imgUrl: captaoAmerica

        },
        'Capitã Marvel' : {
            nome: 'Capitã Marvel',
            descricao: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. ',
            lancamento: 2019,
            cronologia: 1995,
            critica: 4,
            imgUrl: captaMarvel

        },
        
    },
    HQs: {
        'Thor: Vikings' : {
            nome: 'Thor Vikings',
            descricao:'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.',
            imgUrl: thorComics

            },
        'Surfista Prateado: Parábola': {
            nome: 'Surfista Prateado: Parábola',
            descricao: 'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?',
            imgUrl: surfista
        }
        'Wolverine: Origens' : {
            nome: 'Wolverine: Origens',
            descricao: 'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ',
            imgUrl: wolverine
        }
    }
}