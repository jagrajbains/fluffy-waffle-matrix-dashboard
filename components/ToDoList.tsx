"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

interface ToDoItem {
	id: number;
	text: string;
	completed: boolean;
}

const todoItems = [
	{ id: 1, text: "Finish the quarterly report", completed: false },
	{ id: 2, text: "Plan team meeting", completed: true },
	{ id: 3, text: "Update project roadmap", completed: false },
	{ id: 4, text: "Review pull requests", completed: false },
	{ id: 5, text: "Organize files", completed: true },
];

const ToDoList = () => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [open, setOpen] = React.useState<boolean>(false);
	return (
		<div>
			<h1 className="text-lg font-medium mb-6">To-Do List</h1>
			{/* Calendar */}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<Calendar1Icon />
						{date ? format(date, "PPP") : "Select Date"}
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
						className="rounded-md border shadow-sm"
						captionLayout="dropdown"
					/>
				</PopoverContent>
			</Popover>
			{/* List */}
			<ScrollArea className="max-h-[400px] mt-4">
				{/* List Item */}
				{todoItems.map((item: ToDoItem) => (
					<Card key={item.id} className="mb-2">
						<div className="flex items-center px-3 gap-4">
							<Checkbox id={`todo-${item.id}`} />
							<Label htmlFor={`todo-${item.id}`}>{item.text}</Label>
						</div>
					</Card>
				))}
			</ScrollArea>
		</div>
	);
};

export default ToDoList;
