import { Employee } from '@prisma/client';
import React from 'react'
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
}: Props<Employee>) => {
  return (
	<div>EmployeeForm</div>
  )
}
