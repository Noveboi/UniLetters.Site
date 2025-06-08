export type ColDef<T> = {
    headerName: string,
    getter: (item: T) => any
}