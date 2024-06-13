import AdminHeader from "@/components/AdminHeader"
import GoBack from "@/components/GoBack"


const AdminLayout = ({children}) => {
    return (
        <>        
        <AdminHeader />
        {children}
        <GoBack />
        </>
    )
}

export default AdminLayout