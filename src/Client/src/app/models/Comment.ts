export interface Comment {
    id: number,
    content: string,
    taskId: number,
    taskTitle: string,
    createdOn: Date,
    userId: string,
    userName: string,
}