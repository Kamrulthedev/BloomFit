import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { GrUnorderedList } from "react-icons/gr";
import { MdCreateNewFolder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

// const { Sider, Content } = Layout;

const ProductManagement = () => {
    return (
        <Layout style={{ height: "100%" }}>
          <Sider
            style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<MdCreateNewFolder />}>
                <Link to="/product-management/create">Create a New Product</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<GrUnorderedList />}>
                <Link to="/product-management/list">Product List</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0", position: "sticky" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Outlet />
              </div>
            </Content>
          </Layout>
        </Layout>
      );
    };
    

export default ProductManagement;
