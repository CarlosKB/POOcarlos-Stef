"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("../modelo/empresa"));
const listagem_1 = __importDefault(require("./listagem"));
class ListagemServicosEprodutosMaisConsumidos extends listagem_1.default {
    constructor(empresa) {
        super();
        this.empresa = new empresa_1.default();
        this.empresa = empresa;
    }
    listar() {
        console.log(`\nLista de consumo de cada cliente:`);
        this.empresa.getClientes.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            var contProd = 0;
            cliente.getProdutosConsumidos.forEach((produto) => {
                contProd += 1;
            });
            cliente.quantidadeProdutoConsumido = contProd;
            var contServ = 0;
            cliente.getServicosConsumidos.forEach((servico) => {
                contServ += 1;
            });
            cliente.quantidadeServicoConsumido = contServ;
            cliente.quantidadeProdutoServicoConsumido = contProd + contServ;
            this.empresa.quantidadeConsumida.push({
                nome: cliente.nome,
                cpf: cliente.getCpf.getValor,
                quantidadeProdutoServicoConsumido: cliente.quantidadeProdutoServicoConsumido,
            });
            console.log(`Quantidade de produtos e serviços consumidos ${cliente.quantidadeProdutoServicoConsumido}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        var listaQuantidadeConsumo = this.empresa.quantidadeConsumida;
        var listaOrdenadaConsumo = listaQuantidadeConsumo.sort(function (a, b) {
            return (b.quantidadeProdutoServicoConsumido -
                a.quantidadeProdutoServicoConsumido);
        });
        var ordemExibicao = "";
        for (var i = 0; i < listaOrdenadaConsumo.length; i++) {
            ordemExibicao +=
                `posição ${i + 1}: \n  nome: ${listaOrdenadaConsumo[i].nome} | cpf: ${listaOrdenadaConsumo[i].cpf} | quantidade de produros/serviços consumidos: ${listaOrdenadaConsumo[i].quantidadeProdutoServicoConsumido}` + "\n";
        }
        console.log(ordemExibicao);
        while (this.empresa.quantidadeConsumida.length > 0) {
            this.empresa.quantidadeConsumida.pop();
        }
    }
}
exports.default = ListagemServicosEprodutosMaisConsumidos;
