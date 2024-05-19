import { ReactNode } from "react"

const AdminLayout = ({ children}: { children : ReactNode}) => {
  return (
    <div className="flex">
        <aside className="bg-green-500 p-3 mr-2">Admin SideBar</aside>
        <div>{children}</div>
    </div>
  )
}
export default AdminLayout