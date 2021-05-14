import { IDatasource, IGridApi, ILoadRowOption, IStateGrid, IStateGridInput } from "./interface";

export class GridApi<T = any> implements IGridApi {

    private dataSource: IDatasource
    public setState: (stateInput: IStateGridInput) => void
    public getState: () => IStateGrid
    public typeRender: "serverSide" | "clientSide"
    unSelectRows(ids: string[]){
        
    }


    constructor() {
        this.dataSource = {
            loadRow: (options: ILoadRowOption) => { }
        }
        this.setState = (stateInput: IStateGridInput) => {

        }
        this.getState = () => ({ dataGrid: [], loading: false, selectedRows: [], selectedRowKeys: [] })
        this.typeRender = "clientSide"
    }

    
    setDataSource(dataSource?: IDatasource) {
        if (dataSource) this.dataSource = dataSource
        this?.dataSource?.loadRow({
            success: this.successLoad.bind(this),
            error: this.errorLoad.bind(this)
        })
    }


    successLoad(currentData: any[]) {
        console.log("load", currentData);
        this.setState({
            dataGrid: currentData
        })
    }

    errorLoad() {
    }

    onRow: () => void;
    refetch() {
        if (this.typeRender !== "serverSide"){
            console.warn("This is function on typeRender \"serverSide\"")
            return;
        }
        this.setDataSource()
    }

}