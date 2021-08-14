export interface Message {
    id: number,
    title: string,
    content: string,
    imageUrl: string,
    createdOn: Date,
    modifiedOn: Date,
    userId: string,
    userName: string
}