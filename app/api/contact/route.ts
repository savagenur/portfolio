// app/api/contact/route.ts
export async function POST(req: Request) {
  try {
    const form = await req.formData();
    form.append("access_key", process.env.WEB3FORMS_ACCESS_KEY!);

    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await r.json(); // { success: boolean, message?: string, ... }
    return new Response(JSON.stringify(data), {
      status: r.ok ? 200 : 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
