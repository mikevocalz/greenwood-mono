import { create } from 'zustand';
import { Alert, Platform, Pressable, Text, View } from 'react-native';
import useUserStore from './useUserStore';
import { elementButton, onPress } from 'app/components/ElementButton';

// Define the type for the table data
type TableData = {
  tableHead: string[];
  tableData: string[][];
};

// Define the type for the Zustand store
interface TableDataStore {
  table: TableData;
  setTable: (data: TableData) => void;
  updateTable: () => void;
}



// Create the Zustand store
const userTableDataStore = create<TableDataStore>((set, get) => ({
  table: { tableHead: [], tableData: [] },
  setTable: (data) => set({ table: data }),

  // Function to update table data
  updateTable: () => {
    const { tableData } = get().table;
    const thirdElements: any = tableData.map((array) => array[2]); // Get third elements
    const fourthElements: any = tableData.map((array) => array[3]); // Get third elements
    const user = useUserStore.getState().user
    const updatedTableData = tableData.map((array, index) => [
      ...array,
      elementButton(thirdElements[index], fourthElements[index], user)
    ]);
    set((state: any) => ({
      table: { ...state.table, tableData: updatedTableData },
    }));
  },
}));


console.log('zustna: ', userTableDataStore.getState().table.tableData)



export default userTableDataStore;
