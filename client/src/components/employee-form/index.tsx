import { Employee } from '@prisma/client';
import { Card, Form } from 'antd';
import React from 'react'
import { CustomInput } from '../custom-input';
type Props<T> = {
	onFinish: (values: T) => void;
	btnText: string;
	title: string;
	error?: string;
	employee?:T;
}

export const EmployeeForm = ({
	onFinish,
	title,
	btnText,
	error,
	employee,
}: Props<Employee>) => {
  return (
	<Card title = {title} style = {{width: '30rem'}}>
		<Form name = "employee-form" onFinish = {onFinish} initialValues={employee}>
			<CustomInput type = "text" name = "firstName" placeholder='Имя'/>
			<CustomInput type = "text" name = "lastName" placeholder='Фамилия'/>
			<CustomInput type = "number" name = "age" placeholder='age'/>
			<CustomInput type = "text" name = "address" placeholder='address'/>
			<Space></Space>
		</Form>
	</Card>
  )
}
