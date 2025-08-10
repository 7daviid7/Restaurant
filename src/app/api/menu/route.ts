// app/api/menu/route.ts
import { NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public/data/menu.json");
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData = JSON.parse(jsonData);

  return NextResponse.json(objectData);
}
