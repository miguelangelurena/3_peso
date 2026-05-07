import { createClient } from "@supabase/supabase-js";

const supabase = createClient(undefined, undefined);

const POST = async ({ request }) => {
  const { name, message, contactMethod, contactDetail } = await request.json();
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
};

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      POST,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
