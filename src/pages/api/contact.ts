// With `output: 'static'` configured:
// export const prerender = false;
import type { APIRoute } from "astro";

import { supabase } from "@/lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  const { name, message, contactMethod, contactDetail } =
    (await request.json()) as {
      name: string;
      contactMethod: string;
      contactDetail: string;
      message: string;
    };

  if (!name || !message || !contactMethod || !contactDetail) {
    return new Response("Missing information", { status: 400 });
  }

  const { data, error } = await supabase
    .from("contact")
    .insert([{ name, message, contactMethod, contactDetail }])
    .select();

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  if (!data) {
    return new Response("Failed to save contact", { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });

  // const { error } = await supabase.auth.signUp({
  //   email,
  //   password,
  // });

  // if (error) {
  //   return new Response(error.message, { status: 500 });
  // }

  // return redirect("/signin");
};
