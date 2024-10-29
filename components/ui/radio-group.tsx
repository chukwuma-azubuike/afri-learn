'use client';

import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cn(
				'aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<CheckIcon className="h-3.5 w-3.5 fill-primary" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioGroupItemBoxProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
	isActive?: boolean;
}

const RadioGroupItemBox = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemBoxProps
>(({ className, children, isActive, ...props }, ref) => {
	return (
		<label
			ref={ref as React.LegacyRef<HTMLLabelElement>}
			className={cn(
				'flex items-center justify-between space-x-2 p-5 py-3 rounded-lg cursor-pointer',
				`${className} ${isActive && 'bg-[#F3FBF8]'}`
			)}
		>
			<RadioGroupPrimitive.Item
				className={cn(
					'aspect-square h-6 w-6 mr-2 rounded-full border-2 border-gray-300 text-gray-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-50 dark:text-gray-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
					`${className} ${isActive && 'border-[#0BC279]'}`
				)}
				{...props}
			>
				<RadioGroupPrimitive.Indicator className="flex items-center justify-center text-primary" />
			</RadioGroupPrimitive.Item>
			<div className="flex-1">{children}</div>
		</label>
	);
});
RadioGroupItemBox.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, RadioGroupItemBox };
