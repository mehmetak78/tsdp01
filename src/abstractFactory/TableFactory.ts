import ITable from "./ITable";
import SmallTable from "./SmallTable";
import MediumTable from "./MediumTable";
import BigTable from "./BigTable";

export default class TableFactory {
    static createTable(tableType: "SmallTable"| "MediumTable" | "BigTable"): ITable {
        switch (tableType) {
          case "SmallTable": return new SmallTable();
          case "MediumTable": return new MediumTable();
          case "BigTable": return new BigTable();
          default: throw new Error("Table Not Found")
        }
    }
}
