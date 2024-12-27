import { CaretLeft, CaretRight } from 'phosphor-react';
import { ButtonNumber, ButtonPagination, PaginatioContainer } from './style';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <PaginatioContainer>
      <ButtonPagination
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <CaretLeft size={24} />
      </ButtonPagination>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <ButtonNumber
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </ButtonNumber>
        ))}
      </div>

      <ButtonPagination
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <CaretRight size={24} />
      </ButtonPagination>
    </PaginatioContainer>
  );
}
