import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevious = () => {
    onPageChange(Math.max(1, currentPage - 1));
  };

  const handleNext = () => {
    onPageChange(Math.min(totalPages, currentPage + 1));
  };

  return (
    <div className="flex items-center justify-center gap-3 h-7 mt-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="text-primary-purple hover:text-secondary-pink transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer text-center font-astonpoliz text-base leading-6 transition-colors min-w-[24px] ${
            currentPage === page
              ? "text-secondary-pink"
              : "text-primary-purple hover:text-secondary-pink"
          }`}
          aria-label={`Go to page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="text-primary-purple hover:text-secondary-pink transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}