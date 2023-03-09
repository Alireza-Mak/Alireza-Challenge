export interface Item {
  id: string;
  url: string;
  filename: string;
  description?: string;
  uploadedBy: string;
  createdAt: string;
  updatedAt: string;
  sizeInBytes: number;
  dimensions: {
    height: number;
    width: number;
  };
  resolution: {
    height: number;
    width: number;
  };
  favorited: boolean;

}
export interface State {
  items: Item[];
  selected_item: Item | null;
  selected_id: string | null;
  togglePages: string;
  styleBtn: string;
}
