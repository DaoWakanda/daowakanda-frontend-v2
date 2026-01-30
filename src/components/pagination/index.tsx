'use client';

import { Button } from '@/components/ui/button';
import { Pagination as PaginationType } from '@/interface/pagination.interface';

interface PaginationProps {
  pagination: PaginationType;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ pagination, currentPage, onPageChange }: PaginationProps) => {
  const { pageCount } = pagination;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  const getPaginationItems = (): (number | string)[] => {
    const items: (number | string)[] = [];

    items.push(1);
    if (currentPage > 3) items.push('...');
    if (currentPage > 2) items.push(currentPage - 1);
    if (currentPage !== 1 && currentPage !== pageCount) items.push(currentPage);
    if (currentPage < pageCount - 1) items.push(currentPage + 1);
    if (currentPage < pageCount - 2) items.push('...');
    if (pageCount > 1) items.push(pageCount);

    return items;
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size="sm"
          className="text-gray-400 border-gray-700"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        {getPaginationItems().map((page, index) => (
          <Button
            key={index}
            variant={page === currentPage ? 'default' : 'outline'}
            size="sm"
            className={page === currentPage ? 'bg-gray-700' : 'text-gray-400 border-gray-700'}
            onClick={() => typeof page === 'number' && goToPage(page)}
            disabled={typeof page !== 'number'}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          className="text-gray-400 border-gray-700"
          onClick={handleNext}
          disabled={currentPage === pagination.pageCount}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
