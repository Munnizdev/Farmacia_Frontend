import CardProduto from "./CardProduto";

function ListaProdutos() {
  const produtos = [
    {
      id: 1,
      nome: "Produto",
      descricao: "Descrição do produto",
      preco: 35.0,
      categoria: {
        id: 1,
        nome: "Categoria",
        descricao: "Descrição da categoria",
      }
    },
    {
      id: 2,
      nome: "Produto",
      descricao: "Descrição do produto",
      preco: 25.0,
      categoria: {
        id: 2,
        nome: "Categoria",
        descricao: "Descrição da categoria",
      }
    },
    {
      id: 3,
      nome: "Produto",
      descricao: "Descrição do produto",
      preco: 20.0,
      categoria: {
        id: 2,
        nome: "Categoria",
        descricao: "Descrição da categoria",
      }
    },
    {
      id: 4,
      nome: "Produto",
      descricao: "Descrição do produto",
      preco: 20.0,
      categoria: {
        id: 2,
        nome: "Categoria",
        descricao: "Descrição da categoria",
      }
      
    },
  ]

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {produtos.map(produto => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaProdutos;