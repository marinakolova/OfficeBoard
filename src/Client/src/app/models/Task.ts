export interface Task {
    id: number,
    title: string,
    description: string,
    status: number,
    createdOn: Date,
    userId: string,
    userName: string,
    commentsCount: number,
}