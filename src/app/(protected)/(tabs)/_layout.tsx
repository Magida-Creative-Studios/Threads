import { Tabs } from 'expo-router';
import { House, Search, Heart, UserRound } from 'lucide-react-native';

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ tabBarShowLabel: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ size, color }) => (
						<House
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ size, color }) => (
						<Search
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='notifications'
				options={{
					title: 'Notifications',
					tabBarIcon: ({ size, color }) => (
						<Heart
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Profile',
					tabBarIcon: ({ size, color }) => (
						<UserRound
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
