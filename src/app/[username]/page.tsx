"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

// Define the type for portfolio items
type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  file_url: string;
};

export default function Page() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const { username } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("portfolio_items")
        .select("id, title, description, file_url")
        .eq("username", username as string);
      // Handle error if any
      if (error) {
        console.error("Error fetching items:", error);
      } else {
        setItems(data || []);
      }
    };

    if (username) {
      fetchItems();
    }
  }, [username]);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{username}'s Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items?.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <a
                href={item.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View File
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
// This code fetches and displays portfolio items for a specific user based on their username.
