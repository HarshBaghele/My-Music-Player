import { supabase } from "./supabase";

export async function getSongs() {
  // List all files inside the "songs" bucket
  const { data, error } = await supabase.storage
    .from("Songs")
    .list("", { limit: 400 }); // "" = root folder

  if (error) {
    console.error("Error fetching songs:", error.message);
    return [];
  }

  // Convert to objects with name + public URL
  return data.map((file) => {
    const { data: urlData } = supabase
      .storage
      .from("Songs")
      .getPublicUrl(file.name);

    return {
      name: file.name,       // e.g. "ArijitSingh.mp3"
      url: urlData.publicUrl // playable link
    };
  });
}