import Sidebar from "@/components/Sidebar";
import './style.css'
// async 作用是 异步请求数据
export default async function RootLayout({
  children,
}) {
   // 请求数据 SEO
   
  return (
    <html lang="en">
     <body>
      <div className="container">
        <div className="main">
        <Sidebar/>
        <section className="col note-viewer">
           {children}
        </section>
        </div>
      </div>
     </body>
    </html>
  )
}