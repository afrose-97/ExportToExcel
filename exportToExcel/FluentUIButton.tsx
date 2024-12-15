import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react';
import convertDataToExcel from 'data-to-xlsx';
import { IIconProps } from '@fluentui/react';

export interface IPCFButtonProps {
  buttonText: any;
  jsonData: any;
  fileName: any;
  backgroundColor?: any;
  color?: any;
  fontSize?: any;
  fontWeight?: any;
  fontFamily?: any;
  borderColor?: any;
  borderRadius?: any;
  width?: any;
  height?: any;
  backgroundColorHover?: any;
  sheetName?: any;
  columnOrder?: any;
  iconName?: any
}

export const ButtonAnchor: React.FunctionComponent<IPCFButtonProps> = props => {
  const ExcelLogo: IIconProps = { iconName: props.iconName };

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const jsonData = JSON.parse(props.jsonData);

      const columnOrder = Array.isArray(props.columnOrder) && props.columnOrder.length > 0
        ? props.columnOrder
        : props.columnOrder?.split(",").map((col: string) => col.trim()) || Object.keys(jsonData[0]);

      if (!Array.isArray(columnOrder) || columnOrder.length === 0) {
        console.error("Column order could not be determined.");
        return;
      }

      const orderedData = jsonData.map((row: any) => {
        const orderedRow: any = {};

        columnOrder.forEach(key => {
          let cellValue = row[key] || "";        
          orderedRow[key] = cellValue;
        });

        return orderedRow;
      });

      console.log("Ordered Data:", orderedData);

      convertDataToExcel({
        data: orderedData,
        fileName: props.fileName,
        sheetName: props.sheetName
      });

    } catch (error) {
      console.error("Error parsing JSON or exporting to Excel:", error);
    }
  };


  return (
    <PrimaryButton onClick={onButtonClick} iconProps={ExcelLogo} styles={{
      root: {
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        borderColor: props.borderColor,
        borderRadius: props.borderRadius
      },
      rootHovered: {
        backgroundColor: props.backgroundColorHover,
        borderColor: props.backgroundColorHover,
        color: props.color
      },
      rootPressed: {
        backgroundColor: props.backgroundColorHover,
        borderColor: props.backgroundColorHover,
        color: props.color
      }
    }}>
      {props.buttonText}
    </PrimaryButton>
  );
};
