import { Dimensions } from "react-native";

const params = {
    blockSize: 30, //tamanho do bloco
    borderSize: 5, //largura da borda
    fontSize: 15,
    headerRatio: 0.15, //15% da tela pro cabeçalho
    difficultLevel: 0.1,

    //metodo p calcular a quantidade de colunas
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) //largura da tela dividido pelo tamanho do bloco
    },
    //metodo p calcular a quantidade de linhas
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params