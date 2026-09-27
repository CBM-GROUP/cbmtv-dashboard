import { CircleAlertIcon, InfoIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertAction, AlertDescription } from "@/components/ui/alert";

type FormFieldProps = {
  label: React.ReactNode;
  htmlFor?: string;
  /** Shown in the destructive colour below the control. */
  error?: React.ReactNode;
  /** Muted helper text below the control; hidden while there is an error. */
  hint?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

/** Label, control and helper/error text stacked the way shadcn forms lay them out. */
export function FormField({ label, htmlFor, error, hint, className, children }: FormFieldProps) {
  return (
    <div className={cn("grid gap-1.5", className)} data-invalid={error ? true : undefined}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : (
        hint && <p className="text-xs text-muted-foreground">{hint}</p>
      )}
    </div>
  );
}

type StatusAlertProps = {
  variant?: "error" | "info";
  onDismiss?: () => void;
  className?: string;
  children: React.ReactNode;
};

/** Inline status banner for load/save failures and informational notices. */
export function StatusAlert({ variant = "error", onDismiss, className, children }: StatusAlertProps) {
  const Icon = variant === "error" ? CircleAlertIcon : InfoIcon;
  return (
    <Alert variant={variant === "error" ? "destructive" : "default"} className={className}>
      <Icon />
      <AlertDescription className={cn("whitespace-pre-line", variant === "error" && "text-destructive/90")}>
        {children}
      </AlertDescription>
      {onDismiss && (
        <AlertAction>
          <Button variant="ghost" size="icon-xs" aria-label="Dismiss" onClick={onDismiss}>
            <XIcon />
          </Button>
        </AlertAction>
      )}
    </Alert>
  );
}
