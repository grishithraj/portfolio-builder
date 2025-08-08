import { supabase } from "@/lib/supabase";

export const uploadImage = async (
  file: File,
  userId: string,
  bucket: string,
  type: "profile" | "banner"
) => {
  const fileExt = file.name.split(".").pop();
  const filePath = `${type}-${userId}.${fileExt}`;

  const { error } = await supabase.storage.from(bucket).upload(filePath, file, {
    cacheControl: "3600",
    upsert: true,
    contentType: file.type,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return data.publicUrl;
};
