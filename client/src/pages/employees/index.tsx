import React, { useEffect } from "react";
import { Layout } from "../../components/layout";
import { CustomButton } from "../../components/custom-button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import type { ColumnsType } from "antd/es/table";
import { Employee } from "@prisma/client";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";

const columns: ColumnsType<Employee> = [
	{
		title: "Имя",
		dataIndex: "firstName",
		key: "firstName",
	},
	{
		title: "Возраст",
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Адрес",
		dataIndex: "address",
		key: "address",
	},
];

export const Employees = () => {
	const navigate = useNavigate()
	const { data, isLoading } = useGetAllEmployeesQuery();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [])

	const goToAddUser = () => navigate(Paths.employeeAdd)


	return (
		<Layout>
			<CustomButton type="primary" onClick={goToAddUser} icon={<PlusCircleOutlined />}>
				Добавить
			</CustomButton>
			<Table
				loading={isLoading}
				dataSource={data}
				pagination={false}
				columns={columns}
				rowKey={(record) => record.id}
				onRow = {(record) => {
					return {
						onClick: () => navigate(`${Paths.employee}/${record.id}`)
					}
				}}
			/>
		</Layout>
	);
};
