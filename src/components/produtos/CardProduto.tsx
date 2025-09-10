import { Link } from "react-router-dom";
import ImagemProduto from "../../assets/images/FarmaProduto.png";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: {
    id: number;
    nome: string;
    descricao: string;
  };
}

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="flex flex-col items-center justify-center w-[320px] h-[180px] gap-3 p-4 bg-slate-50 rounded-2xl shadow-sm">
      <div className="flex items-center">
        <img 
          src={ImagemProduto} 
          alt={produto.nome} 
          className="w-20 h-20 object-cover"
        />
        <div className="flex flex-col ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
          <p className="text-sm text-gray-600">{produto.descricao}</p>
          <p className="text-md font-bold text-green-600">R$ {produto.preco.toFixed(2)}</p>
        </div>
      </div>
      <Link 
        to={`/produtos/${produto.id}`} 
        className="w-full py-2 text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Ver Detalhes
      </Link>
    </div>
  );
}

export default CardProduto;