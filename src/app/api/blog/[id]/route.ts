import { NextResponse } from 'next/server'
import { getAllBlog } from '../../../../../lib/utils'

export async function GET(_: any, { params }: any) {
  const data = getAllBlog()
  const blog = data.find((item: any) => {
    return item.id == params.id
  })
  console.log('asdasdasdasd')
  if (blog) {
    console.log('hhhhh ')
    console.log(blog)
    return NextResponse.json({ ...blog })
  } else {
    return new NextResponse('Internal Server Error', { status: 404 })
  }
}
