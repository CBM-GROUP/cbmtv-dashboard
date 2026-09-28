import { cn } from "@/lib/utils";

/** Content area inside the sidebar-07 inset, shared by every dashboard page. */
export function PageShell({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-1 flex-col gap-4 p-4 md:p-6", className)} {...props} />;
}

type PageHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Primary actions, right-aligned on wide screens and wrapped below the title on narrow ones. */
  actions?: React.ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="grid gap-1">
        <h1 className="font-heading text-xl font-semibold tracking-tight">{title}</h1>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

/** Left-aligned filter controls (search box, selects) above a table. */
export function PageToolbar({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-wrap items-center gap-2", className)} {...props} />;
}
