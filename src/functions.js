import { parse } from "@babel/core"
import Field from "./components/Field"

const createBoard = (rows, columns) => {

    return Array(rows).fill(0).map((_, row) => {

        return Array(columns).fill(0).map((_, column) => {

            return {
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {

    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    // enquanto a quantidade de minas plantadas
    // for menor que a quantidade de minas que
    // quero espalhar no campo, faça:
    while (minesPlanted < minesAmount) {
        
        // gera valores randomicos de 0 a quantidade
        // de linhas arrendodando o valor para Inteiro
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        // se o board com a linha e coluna selecionada não está minado
        // planta uma bomba nesse board
        if(!board[rowSel][columnSel].mined){

            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
}
}


//funcao que cria o tabuleiro
//recebe a qtd de linhas, colunas e minasplantadas
const createMinedBoard = (rows, columns, minesAmount) => {


    const board = createBoard(rows, columns) //cria o tamanho do tabuleiro
    spreadMines(board, minesAmount) //passa o tabuleiro + a qtd de minas
    return board //retorna o tabuleiro pronto
}

//clone do tabuleiro
//nao mexer diretamente na referencia do objeto
//gerar um novo objeto
const cloneBoard = board => {

    return board.map( rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

//funcao para verificar os vizinhos
const getNeighbors = (board, row, column) => {

    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [ column -1, column, column +1]

    rows.forEach( r => {
        columns.forEach( c => {

            //verifica se o vizinho é diferente da posição atual
            const diferent = r !== row || c !== column

            //verifica se a linha é valida, a linha tem que ser
            //maior ou igual a zero e menor que o tamanho 
            //do board(tabuleiro)
            const validRow = r >= 0 && r < board.length

            //verifica se a coluna é valida, a coluna tem que ser
            //maior ou igual a zero e menor que a qtd de colunas
            //do board(tabuleiro)
            const validColumn = c >= 0 && c < board[0].length

            if(diferent && validRow && validColumn){

                //add a posicao da linha e coluna no array de vizinhos
                neighbors.push(board[r][c])
            }

        })
    })
    return neighbors
}

//verifica se algum dos 'vizinhos' tem ou não mina
const safeNeighborhood = (board, row, column) => {

    const safes = (result, neighbor) => result && !neighbor.mined

    // resultado confirma se a vizinhança de um determinado nó
    // dentro do tabuleiro é segura ou nao
    return getNeighbors(board, row, column).reduce(safes, true)
}

//funcao para abrir um campo
const openField = (board, row, column) => {

    const field = board[row][column]

    //se campo nao aberto, faça
    if(!field.opened){

        field.opened = true

        //se field minado, explode
        if(field.mined){

            field.exploded = true

         //verifica se a vizinha é segura, se seguro
         //vai abrindo os campos recursivamente   
        }else if(safeNeighborhood(board, row, column)) {

             getNeighbors(board, row, column)
                .forEach(n => openField(board, n.row, n.column))

          //se a vizinhança não é segura
          //calcula quantas minas tem ao redor      
        } else {

            const neighbors = getNeighbors(board, row, column)

            //filtra a qtd de vizinhos minados ao redor
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    } 
}

//percorre todos os campos do tabuleiro
//exemplo: verificar se algum campo foi explodido
const fields = board => [].concat(...board)

// field(campo) explodido maior que zero
// retorna verdadeiro GAME OVER!!!
const hadExplosion = board => fields(board)
        .filter(field => field.exploded).length > 0


// verifica se o campo está minado e não marcado com bandeira
// ou se não está mina e não está aberto
const pendding = field => (field.mined && !field.flagged)
    || (!field.mined && !field.opened)        


// filtra todo o tabuleiro e verifica se tem algum campo pendente
// se zero, VENCE O JOGO, todos os campos resolvidos
const wonGame = board => fields(board).filter(pendding).length === 0  

// caso o jogador abra um campo minado e perca o jogo
// aplica um filtro em todas as posições do tabuleiro
// abrindo todos os campos minados
const showMines = board => fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)


// funcao para marcar e desmarcar com bandeira
const invertFlag = (board, row, column) => {

    const field = board[row][column]
    field.flagged = !field.flagged
}    

// funcao para verificar a qtd de campos
// com bandeira
const flagsUsed = board => fields(board)
        .filter(field => field.flagged).length

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed,
 }