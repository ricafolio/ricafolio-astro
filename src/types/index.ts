export type ToolIdType =
  | "react"
  | "next"
  | "strapi"
  | "tailwind"
  | "vscode"
  | "sass"
  | "typescript"
  | "vite"
  | "html"
  | "css"
  | "jquery"
  | "jekyll"
  | "nuxt"
  | "discordapi"
  | "twitterapi"
  | "node"
  | "package"
  | "seo"
  | "openaiapi"
  | "googleapi"
  | "chromeapi"
  | "javascript"
  | "fabric"

export interface ToolType {
  id: ToolIdType | null
  name: string
}

export interface ProjectType {
  lazy?: true | false
  img_file_name: string
  label: {
    text: string
    color: string
  }
  title: string
  description: string
  tools: ToolType[]
  url: string
  url_text: string
  github_url: string | null
}
