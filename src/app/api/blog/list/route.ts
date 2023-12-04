import { NextResponse } from 'next/server'
import { getAllBlog } from '../../../../../lib/utils'

export async function GET() {
  const data = getAllBlog()
  console.log(data)
  return NextResponse.json({ blogList: data })
}
