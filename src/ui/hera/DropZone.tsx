import {
  Button,
  FileTrigger,
  DropZone as RADropZone,
  type DropZoneProps as RADropZoneProps,
} from "react-aria-components";

export type DropZoneProps = RADropZoneProps & {
  onSelect: () => void;
};

export const DropZone: React.FC<DropZoneProps> = ({ onSelect, ...props }) => (
  <RADropZone onDrop={onSelect} {...props}>
    <FileTrigger onSelect={onSelect}>
      <Button>Select files</Button>
    </FileTrigger>
  </RADropZone>
);
