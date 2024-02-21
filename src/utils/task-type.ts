export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
    id: string,
    title: string,
    text?: string,
    priority?: Priority,
    tags?: string[],
    date?: string
    status: Status

}


export const statuses: Status[] = ['todo','in-progress','done']
export const priorities: Priority[] = ['low','medium','high']

export const tasks: Task[] = [
    {
        id:'1',
        title:'Task One',
        text:'This is a description',
        priority: 'low',
        status: 'todo',
        date: '01/01/2024',
        tags: ['tag one','tag two']

    },
    {
        id:'2',
        title:'Task two',
        text:'This is a description',
        priority: 'high',
        status: 'todo',
        date: '01/01/2024',
        tags: ['tag one','tag two']

    },
    {
        id:'3',
        title:'Task three',
        text:'This is a description',
        priority: 'medium',
        status: 'in-progress',
        date: '01/01/2024',
        tags: ['tag one','tag two']

    },
    {
        id:'4',
        title:'Task four',
        text:'This is a description',
        priority: 'high',
        status: 'done',
        date: '01/01/2024',
        tags: ['tag one','tag two']
    }
]