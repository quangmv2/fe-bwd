import { ColumnsType } from "antd/lib/table";
import { ReactElement } from "react";

export interface IColumnDef {
    noFilter?: boolean
}

export type TColumnDefs = (IColumnDef)[]

export type ColumnDef<T> = TColumnDefs & ColumnsType<T> 

export interface GridProps<T> {
    className?: string 
    onGridReady?: (option: GridOption) => void
    paginate?: IPaginate
    headerDefs?: IHeaderDef[]
    typeRender?: "serverSide" | "clientSide",
    bordered?: boolean,
}

export interface GridRefType {
    api?: IGridApi
}

export interface GridOption {
    api?: IGridApi
    grid?: {
        state?: IStateGrid
        paginate?: IPaginate
        selectedRows?: any[]
    }
}


export interface IPaginate {
    currentPage?: number
    totalPages?: number
    totalRows?: number
    sizePage?: number,
    onChangeSizePage?: () => void
}

export interface IDatasource {
    loadRow: (options: ILoadRowOption) => void
}

export interface ILoadRowOption {
    success: (currentData: any[]) => void
    error: () => void
}

export interface IGridApi {
    onRow: () => void
    refetch: () => void
    setState: (stateInput: IStateGridInput) => void
    setDataSource: (datasource: IDatasource) => void
    // setSelectRow: (id: string) => void
    // setSelectRows: (ids: string[]) => void
    // setSelectAllRow: () => void
    // unSelectRow: (id: string) => void
    // unSelectRows: (ids: string[]) => void
}

export interface IStateGrid {
    dataGrid: any[]
    loading: boolean
    selectedRows: any[]
    selectedRowKeys: any[]
    searchText?: string
    searchedColumn?: any
}

export interface IStateGridInput {
    dataGrid?: any[]
    loading?: boolean
    selectedRows?: any[]
    selectedRowKeys?: any[]
    searchText?: string
    searchedColumn?: any
}

export interface IHeaderDef {
    label: string
    icon: string | ReactElement
    option: "default" | "single" | "muliti" | "disable"
    onCLick: (girdOption: GridOption) => void
    hidden?: boolean
}

