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
      const { jsonData, fileName,sheetName } = props;  
      const parsedData = JSON.parse(jsonData);
      const worksheet = XLSX.utils.json_to_sheet(parsedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
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