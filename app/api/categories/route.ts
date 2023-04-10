import { NextResponse } from "next/server";
import prismadb from "../../libs/prismadb";

export async function GET(
  req: Request
){
  const categories = await prismadb.categories.findMany()

  return NextResponse.json(categories)
}