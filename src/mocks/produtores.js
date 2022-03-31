import green from '../assets/produtores/green.png'
import grow from '../assets/produtores/grow.png'
import jennyJack from '../assets/produtores/jenny-jack.png'
import potager from '../assets/produtores/potager.png'
import salad from '../assets/produtores/salad.png'

const gerarNumerosAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumerosAleatorio(1, 500)}m`,
            estrelas: gerarNumerosAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumerosAleatorio(1, 500)}m`,
            estrelas: gerarNumerosAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${gerarNumerosAleatorio(1, 500)}m`,
            estrelas: gerarNumerosAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumerosAleatorio(1, 500)}m`,
            estrelas: gerarNumerosAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumerosAleatorio(1, 500)}m`,
            estrelas: gerarNumerosAleatorio(1, 5),
        },
    ]
}

export default produtores;