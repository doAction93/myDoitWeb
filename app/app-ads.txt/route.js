import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const runtime = "nodejs";
export const revalidate = 300;

export async function GET() {
  const appAdsPath = path.join(process.cwd(), "public", "app-ads.txt");
  const appAdsContent = await readFile(appAdsPath, "utf8");

  return new Response(appAdsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=600"
    }
  });
}
