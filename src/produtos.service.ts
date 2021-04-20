import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('Liv01', 'Livro 01', 29.9),
    new Produto('Liv02', 'Livro 02', 39.9),
    new Produto('Liv03', 'Livro 03', 49.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto) {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
