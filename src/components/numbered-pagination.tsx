"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";

type NumberedPaginationProps = {
  count: number;
  /** One-based. */
  page: number;
  onPageChange: (page: number) => void;
  className?: string;
};

/** Numbered pager for card grids; tables use DataTablePagination instead. */
export function NumberedPagination({ count, page, onPageChange, className }: NumberedPaginationProps) {
  return (
    <Pagination className={className}>
      <PaginationContent className="flex-wrap justify-center">
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Go to previous page"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeftIcon />
          </Button>
        </PaginationItem>
        {Array.from({ length: count }, (_, index) => index + 1).map((number) => (
          <PaginationItem key={number}>
            <Button
              variant={number === page ? "outline" : "ghost"}
              size="icon"
              aria-current={number === page ? "page" : undefined}
              onClick={() => onPageChange(number)}
            >
              {number}
            </Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Go to next page"
            disabled={page >= count}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
