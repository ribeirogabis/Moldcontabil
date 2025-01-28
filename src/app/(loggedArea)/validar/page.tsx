import { Button } from '@/components/ui/button';
import { CustomerDocumentsTable } from './components/CustomerDocumentsTable';
import Link from 'next/link';

interface Documento {
  id: number;
  nome: string;
  cpf_cnpj: string;
  quantidade_documentos: number;
}

// Função para buscar os dados da API
const fetchDocumentos = async (): Promise<Documento[]> => {
  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/v1/client_serve/documentos-pendentes/'
    );
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    return response.json();
  } catch (error) {
    console.error('Erro na requisição:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

const ValidatePage = async () => {
  // Busca os dados da API diretamente no servidor
  const documentos = await fetchDocumentos();

  // Transforma os dados da API no formato esperado pelo componente CustomerDocumentsTable
  const tableData = documentos.map((doc) => ({
    customer: doc.nome,
    cnpj: doc.cpf_cnpj,
    quantity: doc.quantidade_documentos,
    status: 'Pendente validação',
  }));

  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomerDocumentsTable data={tableData} />
      <div className="flex justify-between">
        <Button size="lg">Validar e enviar</Button>
        <Link href="/validar/analise-ia">
          <Button size="lg">Validar</Button>
        </Link>
      </div>
    </div>
  );
};

export default ValidatePage;