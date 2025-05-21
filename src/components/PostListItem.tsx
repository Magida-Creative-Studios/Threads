import { Post } from '@/types';
import { Image, Text, View, Pressable } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Repeat, MessageCircle, Heart, Send } from 'lucide-react-native';

dayjs.extend(relativeTime);

export default function PostListItem({ post }: { post: Post }) {
	return (
		<View className='flex-row p-4 border-b border-gray-800/70'>
			{/* User Avatar */}
			<View className='mr-3'>
				<Image
					source={{ uri: post.user.image }}
					className='w-12 h-12 rounded-full'
				/>
			</View>
			{/* Content */}
			<View className='flex-1'>
				{/* User Info */}
				<View className='flex-row items-center'>
					<Text className='text-white font-bold mr-2'>{post.user.username}</Text>
					<Text className='text-gray-500'>{dayjs(post.createdAt).fromNow()}</Text>
				</View>

				{/* Post Content */}
				<Text className='text-white mt-2 mb-3'>{post.content}</Text>

				{/* Interaction buttons */}
				<View className='flex-row gap-4 mt-2'>
					<Pressable className='flex-row items-center'>
						<Heart
							size={20}
							color='#d1d5db'
						/>
						<Text className='text-gray-300 ml-2'>0</Text>
					</Pressable>

					<Pressable className='flex-row items-center'>
						<MessageCircle
							size={20}
							color='#d1d5db'
						/>
						<Text className='text-gray-300 ml-2'>{post.replies.length}</Text>
					</Pressable>

					<Pressable className='flex-row items-center'>
						<Repeat
							size={20}
							color='#d1d5db'
						/>
						<Text className='text-gray-300 ml-2'>0</Text>
					</Pressable>

					<Pressable>
						<Send
							size={20}
							color='#d1d5db'
						/>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
