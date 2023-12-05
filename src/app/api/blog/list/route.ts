import { NextResponse } from 'next/server'
import { getAllBlog } from '../../../../../lib/utils'

export async function GET() {
  const data = getAllBlog()
  return NextResponse.json({ blogList: data })
}
