export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  value: string;
  actionLabel: string;
  actionUrl: string;
  iconPlaceholder: string;
  note?: string;
}

export interface ContactBadge {
  id: string;
  label: string;
}
