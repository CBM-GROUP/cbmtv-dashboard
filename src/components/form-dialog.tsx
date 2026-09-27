"use client";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type FormDialogProps = {
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Buttons rendered in the dialog footer. */
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/**
 * A dialog whose body scrolls on its own, so long upload forms stay usable on
 * short viewports while the title and actions remain visible.
 */
export function FormDialog({ open, onClose, title, description, footer, className, children }: FormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent
        className={cn(
          "flex max-h-[calc(100dvh-2rem)] flex-col gap-0 p-0 sm:max-w-lg",
          className,
        )}
      >
        <DialogHeader className="border-b p-4 pr-12">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="grid gap-4 overflow-y-auto p-4">{children}</div>
        {footer && <DialogFooter className="m-0">{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
