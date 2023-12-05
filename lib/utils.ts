import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const resolvePath = (p: string) => path.resolve(process.cwd(), p)

export const BLOG_BASE_PATH = path.resolve(process.cwd(), 'blogs')

export const getBlogDetail = (fileName: string) => {
  const filePath = path.resolve(BLOG_BASE_PATH, fileName)
  const fileStr = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(fileStr)
  const blogSlug = fileName.replace(/\.md$/, '')
  return {
    ...data,
    blogSlug,
    content
  }
}
export const getAllBlog = () => {
  const allBlogPath = fs.readdirSync(BLOG_BASE_PATH)
  const data = allBlogPath.map(item => getBlogDetail(item))
  return data
}
