import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('Liv01', 'Livro 01', 29.9),
    new Livro('Liv02', 'Livro 02', 39.9),
    new Livro('Liv03', 'Livro 03', 49.9),
  ];

  obterTodos(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro) {
    return livro;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
