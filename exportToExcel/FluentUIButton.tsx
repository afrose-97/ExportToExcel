import * as React from 'react';
import { PrimaryButton,DefaultButton } from 'office-ui-fabric-react';
import * as XLSX from 'xlsx';

export interface IPCFButtonProps {
  buttonText: any;
  jsonData: any;
  fileName:any;
  backgroundColor?: any;
  color?: any;
  fontSize?: any;
  fontWeight?: any;
  fontFamily?: any;
  borderColor?: any;
  borderRadius?: any;
  width?:any;
  height?:any;
  backgroundColorHover?:any;
  sheetName?:any;
}

export const ButtonAnchor: React.FunctionComponent<IPCFButtonProps> = props => {
  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {   
     event.preventDefault();
    try {
      const testss = JSON.parse(props.jsonData);
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(testss);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: [props.sheetName] };
      XLSX.writeFile(workbook, props.fileName +".xlsx");
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };
  return (
    <PrimaryButton onClick={onButtonClick}   styles={{
      root: {
        backgroundColor: props.backgroundColor,
        color: props.color,
        width:props.width,
        height:props.height,
        fontSize:props.fontSize,        
        borderColor:props.borderColor,
        borderRadius:props.borderRadius           
      }     ,
      rootHovered: {
        backgroundColor: props.backgroundColorHover,
        borderColor:"none"          
      },   
    }}>
      {props.buttonText}
    </PrimaryButton>
  );
};