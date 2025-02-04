import {
  Picker as RNPicker,
  type PickerProps as RNPickerProps,
} from "@react-native-picker/picker";
import { type Dispatch, type SetStateAction } from "react";

type PickerProps = Omit<RNPickerProps, "onValueChange" | "selectedValue"> & {
  items: { label: string; value: string }[];
  onValueChange: Dispatch<SetStateAction<string>>;
  selectedValue: string;
};

export const Picker = ({
  items,
  onValueChange,
  selectedValue,
  ...rest
}: PickerProps) => {
  return (
    <RNPicker
      onValueChange={onValueChange}
      selectedValue={selectedValue ?? ""}
      {...rest}
    >
      {items.map((item, index) => (
        <RNPicker.Item key={index} label={item.label} value={item.value} />
      ))}
    </RNPicker>
  );
};
