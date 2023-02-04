import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { useNavigate,Link } from "react-router-dom";
import { TbBrandBehance } from "react-icons/tb";
import {IoMdNotificationsOutline} from 'react-icons/io'
import { BiCategoryAlt, BiColorFill } from "react-icons/bi";
import {
  AiFillCreditCard,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { SiBloglovin } from "react-icons/si";
import { FaBlogger, FaBlog } from "react-icons/fa";
import { Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const newLocal = "add-blog";
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <h2 className="text-white text-center fs-5 py-3 mb-0">
          <span className=".sm-logo">HMK</span>
          <span className="lg-logo">(Htet Min Khant)</span>
        </h2>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiFillCreditCard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-List",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: " Product List",
                },
                {
                  key: "brand",
                  icon: <TbBrandBehance className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <TbBrandBehance className="fs-4" />,
                  label: "List brand",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "List Category",
                },
                {
                  key: "color",
                  icon: <BiColorFill className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <BiColorFill className="fs-4" />,
                  label: "List color",
                },
              ],
            },
            {
              key: "orders",
              icon: <FcTodoList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <SiBloglovin className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBlog className="fs-4" />,
                  label: " Blog List",
                },
                {
                  key: "blog-Category",
                  icon: <SiBloglovin className="fs-4" />,
                  label: "Add  Blog Category",
                },
                {
                  key: "blog-Category-List",
                  icon: <FaBlog className="fs-4" />,
                  label: "  Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FcTodoList className="fs-4" />,
              label: "Enquires",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout ">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{ padding: 0, background: colorBgContainer }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-3 align-items-center ">
            <div className="position-relative">
              <IoMdNotificationsOutline className="fs-4"/>
              <span className="badge bg-warning rounded-circle p-1 position-absolute">3</span>
            </div>
            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img width={32}
                height={32}
                  src="https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div >

            <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <h5 className="mb-0">Htet Min Khant</h5>
              <p className="mb-0">hmk469@gmail.com</p>
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">

             <li>
             <Link to='/' class="dropdown-item py-1 mb-1"style={{"height":"auto","lineHeight":"20px"}} href="#">
              View Profile
              </Link>
             </li>

            <li>
            <Link to='/' class="dropdown-item py-1 mb-1" style={{"height":"auto","lineHeight":"20px"}}href="#">
              Sign Out
             </Link>
            </li>
            
            </div>
            </div>
            </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <main>
        <Outlet />
        </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
