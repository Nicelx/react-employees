import { Layout, Space, Typography } from "antd";
import styles from "./index.module.css";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button";
import { Paths } from "../../paths";

export const Header = () => {
	return (
		<Layout.Header className={styles.header}>
			<Space>
				<TeamOutlined className={styles.teamIcon} />
				<Link  className = {styles.employees} to={Paths.home}>
					<CustomButton>
						<Typography.Title level={1} >Сотрудники</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			<Space>
				<Link to={Paths.register}>
					<CustomButton icon = {<UserOutlined/>}>Зарегистрироваться</CustomButton>
				</Link>
				<Link to={Paths.login}>
					<CustomButton icon = {<LoginOutlined/>}>Войти</CustomButton>
				</Link>
			</Space>
		</Layout.Header>
	);
};
