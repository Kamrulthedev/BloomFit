import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { GrUnorderedList } from "react-icons/gr";
import { MdCreateNewFolder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navber from "../shared/Navber";

const ProductManagement = () => {
  return (
    <div>
      <Navber />
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            height: "100vh",
            position: "sticky", // Use fixed instead of sticky for more consistent behavior
            left: 0,
            top: 0,
            zIndex: 1, // Ensure it's above other content
            backgroundColor: "rgb(15 23 42)",
          }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="uppercase">Product Management</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            style={{ backgroundColor: "rgb(15 23 42)" }}
          >
            <Menu.Item key="1" icon={<GrUnorderedList />}>
              <Link to="/product-management/list">Product List</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<MdCreateNewFolder />}>
              <Link to="/product-management/create">Create a New Product</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 10 }}>
          {/* Adjust marginLeft to account for fixed Sider */}
          <Content style={{ margin: "24px 16px 0", padding: 12 }}>
            <Outlet />
            {/* Content should now appear directly under the header */}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProductManagement;
