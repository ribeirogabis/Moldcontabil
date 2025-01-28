"use client"; // Marca o componente como Client Component

import { useEffect, useState } from "react";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

const AIAnalysisPage = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [documentData, setDocumentData] = useState<any>(null);

  // Função para buscar e criar uma temp_file para o PDF
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/client_serve/documentos-pendentes/1",
          {
            responseType: "blob", // Indica que a resposta é um arquivo binário (PDF)
          }
        );

        // Cria uma URL para o blob do PDF
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(pdfBlob);
        setPdfUrl(url);
      } catch (error) {
        console.error("Erro ao buscar o documento:", error);
      }
    };

    fetchDocument();
  }, []);

  // Função para buscar os dados de análise da API
  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v1/client_serve/documentos-pendentes/analise/1"
        );

        // Mapeia os dados da API para o formato esperado na página
        const analysisData = response.data[0]; // Pega o primeiro item do array
        setDocumentData({
          codContaDebito: analysisData.cod_conta_debito,
          codContaCredito: analysisData.cod_conta_credito,
          valor: analysisData.valor,
          nomeDocumento: analysisData.nome_documento,
          status: analysisData.status,
        });
      } catch (error) {
        console.error("Erro ao buscar os dados de análise:", error);
      }
    };

    fetchAnalysisData();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1); // opcional, para sempre voltar à página 1 ao carregar
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 items-start">
        {/* Card do PDF */}
        <Card className="flex-1 flex flex-col gap-2 p-4">
          <p className="text-2xl font-bold">Documento recebido</p>
          {pdfUrl ? (
            <div>
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Carregando documento...</p>}
              >
                <Page pageNumber={pageNumber} />
              </Document>

              {/* Navegação entre páginas */}
              <div className="flex items-center justify-between mt-4">
                {pageNumber > 1 && (
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setPageNumber((prev) => prev - 1)}
                  >
                    Página Anterior
                  </button>
                )}
                <p>
                  Página {pageNumber} de {numPages}
                </p>
                {numPages && pageNumber < numPages && (
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setPageNumber((prev) => prev + 1)}
                  >
                    Próxima Página
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p>Carregando PDF...</p>
          )}
        </Card>

        {/* Card de análise */}
        <Card className="flex-1 flex flex-col gap-2 p-4">
          <p className="text-2xl font-bold">Análise IA</p>
          {documentData ? (
            <div className="flex flex-col gap-2 text-lg uppercase">
              <div>
                <span className="font-bold">Cód. Conta Débito:</span>{" "}
                {documentData.codContaDebito || "N/A"}
              </div>
              <div>
                <span className="font-bold">Cód. Conta Crédito:</span>{" "}
                {documentData.codContaCredito || "N/A"}
              </div>
              <div>
                <span className="font-bold">Valor:</span>{" "}
                {documentData.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
              <div>
                <span className="font-bold">Nome do Documento:</span>{" "}
                {documentData.nomeDocumento}
              </div>
              <div>
                <span className="font-bold">Status:</span>{" "}
                {documentData.status === 0 ? "Pendente" : "Processado"}
              </div>
            </div>
          ) : (
            <p>Carregando dados...</p>
          )}
        </Card>
      </div>

      {/* Paginação */}
      {numPages && (
        <p className="self-center">
          Página {pageNumber} de {numPages}
        </p>
      )}

      {/* Botão de validação */}
      <Button className="self-end" size="lg">
        Validar
      </Button>
    </div>
  );
};

export default AIAnalysisPage;