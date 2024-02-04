import { Layout, Space, Typography } from "antd";
import styles from "./index.module.css";
import { TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button";
import { Paths } from "../../paths";

export const Header = () => {
	return (
		<Layout.Header className={styles.header}>
			<Space>
				<TeamOutlined className={styles.teamIcon} />
				<Link to={Paths.home}>
					<CustomButton type="default">
						<Typography.Title level={1}>Сотрудники</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			<Space>
				<Link to={Paths.register}>
					<CustomButton>Зарегистрироваться</CustomButton>
				</Link>
				<Link to={Paths.login}>
					<CustomButton>Войти</CustomButton>
				</Link>
			</Space>
		</Layout.Header>
	);
};
