import React, { FC } from 'react'
import ReactMarkdowm, { Components } from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeComponents: Components = {
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter style={xonokai} language={match[1]} PreTag="div" {...props}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }
}

const MarkdownView: FC<{ children: string }> = ({ children }) => {
  return <ReactMarkdowm components={CodeComponents}>{children}</ReactMarkdowm>
}

export default MarkdownView
