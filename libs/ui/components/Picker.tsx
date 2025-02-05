import {
  Picker as RNPicker,
  type PickerProps as RNPickerProps,
} from "@react-native-picker/picker";
import { withUnistyles } from "react-native-unistyles";
import { StyleSheet } from "react-native-unistyles";

type PickerItem = string;

type PickerProps = Omit<RNPickerProps, "onValueChange" | "selectedValue"> & {
  items: { label: string; value: string }[];
  onValueChange: (itemValue: PickerItem, itemIndex: number) => void;
  selectedValue: PickerItem;
};

const UniPicker = withUnistyles(RNPicker<PickerItem>);
const UniItem = withUnistyles(RNPicker.Item);

export const Picker = ({
  items,
  onValueChange,
  selectedValue,
  style,
  ...rest
}: PickerProps) => (
  <UniPicker
    onValueChange={onValueChange}
    selectedValue={selectedValue ?? ""}
    style={[styles.picker, style]}
    {...rest}
  >
    {items.map((item) => (
      <UniItem key={item.label} label={item.label} value={item.value} />
    ))}
  </UniPicker>
);

const styles = StyleSheet.create((theme) => ({
  picker: {
    fontSize: theme.sizing[5],
    width: 100,
  },
}));
