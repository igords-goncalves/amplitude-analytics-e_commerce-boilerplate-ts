export interface Avaliacao {
	usuario: string;
	nota: 1 | 2 | 3 | 4 | 5;
	comentario?: string;
}

export interface Product {
	id: number;
	nome: string;
	descricao: string;
	preco: number;
	categoria: 'Linguagem' | 'Framework' | 'Ferramenta' | 'Biblioteca';
	estoque: number;
	avaliacoes: Avaliacao[];
	imagem_url: string;
	documentacao_url: string;
}

export const products: Product[] = [
	{
		id: 1,
		nome: 'JavaScript',
		descricao: 'Linguagem de programação onipresente para web. Ótima para frontend e backend (Node).',
		preco: 19.99,
		categoria: 'Linguagem',
		estoque: 150,
		avaliacoes: [
			{ usuario: 'Alice', nota: 5, comentario: 'Essencial para todo desenvolvedor web.' },
			{ usuario: 'Bruno', nota: 4, comentario: 'Versátil, mas algumas inconsistências sintáticas.' }
		],
		imagem_url: '/assets/images/javascript.png',
		documentacao_url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
	},
	{
		id: 2,
		nome: 'TypeScript',
		descricao: 'Superset do JavaScript que adiciona tipagem estática opcional. Melhora a manutenção de código.',
		preco: 24.99,
		categoria: 'Linguagem',
		estoque: 120,
		avaliacoes: [
			{ usuario: 'Carla', nota: 5, comentario: 'A tipagem salvou meu projeto várias vezes.' }
		],
		imagem_url: '/assets/images/typescript.png',
		documentacao_url: 'https://www.typescriptlang.org/docs/'
	},
	{
		id: 3,
		nome: 'React',
		descricao: 'Biblioteca para construção de interfaces com componentes reutilizáveis.',
		preco: 29.99,
		categoria: 'Framework',
		estoque: 80,
		avaliacoes: [
			{ usuario: 'Diego', nota: 5, comentario: 'Componentes e ecossistema excelentes.' },
			{ usuario: 'Eva', nota: 4, comentario: 'Curva de aprendizado moderada.' }
		],
		imagem_url: '/assets/images/react.png',
		documentacao_url: 'https://reactjs.org/docs/getting-started.html'
	},
	{
		id: 4,
		nome: 'Next.js',
		descricao: 'Framework React para aplicações com SSR/SSG e ótimas práticas de performance.',
		preco: 34.99,
		categoria: 'Framework',
		estoque: 60,
		avaliacoes: [
			{ usuario: 'Fernando', nota: 5, comentario: 'Produtividade incrível para fullstack React.' }
		],
		imagem_url: '/assets/images/nextjs.png',
		documentacao_url: 'https://nextjs.org/docs'
	},
	{
		id: 5,
		nome: 'Node.js',
		descricao: 'Runtime JavaScript para servidores. Permite construir APIs e ferramentas em JS/TS.',
		preco: 21.5,
		categoria: 'Ferramenta',
		estoque: 90,
		avaliacoes: [
			{ usuario: 'Guilherme', nota: 4, comentario: 'Excelente para I/O intensivo.' }
		],
		imagem_url: '/assets/images/nodejs.png',
		documentacao_url: 'https://nodejs.org/pt-br/docs/'
	},
	{
		id: 6,
		nome: 'Tailwind CSS',
		descricao: 'Framework de utilitários CSS para estilos rápidos e responsivos.',
		preco: 14.99,
		categoria: 'Biblioteca',
		estoque: 200,
		avaliacoes: [
			{ usuario: 'Helena', nota: 5, comentario: 'Acelera muito o desenvolvimento de UI.' }
		],
		imagem_url: '/assets/images/tailwind.png',
		documentacao_url: 'https://tailwindcss.com/docs'
	},
	{
		id: 7,
		nome: 'Docker',
		descricao: 'Plataforma de conteinerização para empacotar e distribuir aplicações.',
		preco: 27.0,
		categoria: 'Ferramenta',
		estoque: 40,
		avaliacoes: [
			{ usuario: 'Igor', nota: 4, comentario: 'Fundamental para ambientes consistentes.' }
		],
		imagem_url: '/assets/images/docker.png',
		documentacao_url: 'https://docs.docker.com/'
	},
	{
		id: 8,
		nome: 'Jest',
		descricao: 'Framework de testes em JavaScript com foco em simplicidade e produtividade.',
		preco: 12.5,
		categoria: 'Biblioteca',
		estoque: 110,
		avaliacoes: [
			{ usuario: 'Julia', nota: 5, comentario: 'Testes fáceis de escrever e rápidos.' }
		],
		imagem_url: '/assets/images/jest.png',
		documentacao_url: 'https://jestjs.io/pt-BR/docs/getting-started'
	}
];

export default products;
