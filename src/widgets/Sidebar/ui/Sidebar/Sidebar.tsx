import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemesSwitcher'

interface SidebarProps {
	className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div
			className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className
			])}
		>
			<button onClick={onToggle}>togglet</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
