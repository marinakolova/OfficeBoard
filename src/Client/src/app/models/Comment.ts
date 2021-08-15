export interface Comment {
    id: number,
    content: string,
    taskId: number,
    taskTitle: string,
    createdOn: Date,
    modifiedOn: Date,
    userId: string,
    userName: string,
}