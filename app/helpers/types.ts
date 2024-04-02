export type Content = {
  id?: string;
  title?: string;
  subtitle?: string;
  author_name?: string;
  file_name?: string;
  technique?: string;
  release_year?: string;
  kind?: "IMAGE" | "VIDEO";
  is_deleted?: boolean;
  created_at?: string;
  updated_at?: string;
}