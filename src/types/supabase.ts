export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      portfolio_items: {
        Row: {
          id: string;
          title: string;
          description: string;
          file_url: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          file_url: string;
          user_id: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          file_url?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "portfolio_items_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
